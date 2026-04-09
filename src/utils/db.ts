import {
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  onSnapshot,
  query,
  orderBy,
  limit,
  serverTimestamp,
  Timestamp,
} from 'firebase/firestore';
import { db } from '../firebase';
import { Client, Project, ActivityLog, ActivityAction, UserProfile, CompanySettings, PipelineStatus } from '../types';

// ── Collections ──────────────────────────────────────────────────────────────

const clientsCol = collection(db, 'clients');
const projectsCol = collection(db, 'projects');
const activityCol = collection(db, 'activity');
const usersCol = collection(db, 'users');

// ── Clients ───────────────────────────────────────────────────────────────────

export const subscribeClients = (onChange: (clients: Client[]) => void) => {
  const q = query(clientsCol, orderBy('createdAt', 'asc'));
  return onSnapshot(q, snapshot => {
    const clients = snapshot.docs.map(d => ({ id: d.id, ...d.data() } as Client));
    onChange(clients);
  });
};

export const createClientDoc = async (payload: Omit<Client, 'id'>): Promise<Client> => {
  const ref = await addDoc(clientsCol, { ...payload, createdAt: serverTimestamp() });
  return { id: ref.id, ...payload };
};

// ── Projects ──────────────────────────────────────────────────────────────────

export const subscribeProjects = (onChange: (projects: Project[]) => void) => {
  const q = query(projectsCol, orderBy('createdAt', 'asc'));
  return onSnapshot(q, snapshot => {
    const projects = snapshot.docs.map(d => {
      const data = d.data();
      const createdAt = data.createdAt instanceof Timestamp
        ? data.createdAt.toMillis()
        : (data.createdAt ?? Date.now());
      return { id: d.id, ...data, createdAt } as Project;
    });
    onChange(projects);
  });
};

export const createProjectDoc = async (payload: Omit<Project, 'id'>): Promise<Project> => {
  const ref = await addDoc(projectsCol, { ...payload, createdAt: serverTimestamp() });
  return { id: ref.id, ...payload };
};

export const updateProjectDoc = async (id: string, patch: Partial<Project>): Promise<void> => {
  await updateDoc(doc(projectsCol, id), patch as Record<string, unknown>);
};

export const deleteProjectDoc = async (id: string): Promise<void> => {
  await deleteDoc(doc(projectsCol, id));
};

// ── Activity Log ──────────────────────────────────────────────────────────────

export const logActivity = async (
  userId: string,
  userName: string,
  action: ActivityAction,
  entityType: 'project' | 'client',
  entityId: string,
  entityName: string,
  details?: string
): Promise<void> => {
  await addDoc(activityCol, {
    userId,
    userName,
    action,
    entityType,
    entityId,
    entityName,
    details: details ?? null,
    timestamp: Date.now(),
    createdAt: serverTimestamp(),
  });
};

export const subscribeActivity = (onChange: (logs: ActivityLog[]) => void, maxItems = 50) => {
  const q = query(activityCol, orderBy('timestamp', 'desc'), limit(maxItems));
  return onSnapshot(q, snapshot => {
    const logs = snapshot.docs.map(d => ({ id: d.id, ...d.data() } as ActivityLog));
    onChange(logs);
  });
};

export const subscribeProjectActivity = (projectId: string, onChange: (logs: ActivityLog[]) => void) => {
  const q = query(activityCol, orderBy('timestamp', 'desc'), limit(100));
  return onSnapshot(q, snapshot => {
    const logs = snapshot.docs
      .map(d => ({ id: d.id, ...d.data() } as ActivityLog))
      .filter(l => l.entityId === projectId);
    onChange(logs);
  });
};

// ── Users ─────────────────────────────────────────────────────────────────────

export const upsertUserProfile = async (profile: UserProfile): Promise<void> => {
  const ref = doc(usersCol, profile.uid);
  const existing = await getDoc(ref);
  if (existing.exists()) {
    await updateDoc(ref, { lastLoginAt: profile.lastLoginAt, name: profile.name });
  } else {
    await setDoc(ref, profile);
  }
};

export const getUserProfile = async (uid: string): Promise<UserProfile | null> => {
  const snap = await getDoc(doc(usersCol, uid));
  return snap.exists() ? (snap.data() as UserProfile) : null;
};

export const subscribeUsers = (onChange: (users: UserProfile[]) => void) => {
  const q = query(usersCol, orderBy('createdAt', 'asc'));
  return onSnapshot(q, snapshot => {
    const users = snapshot.docs.map(d => d.data() as UserProfile);
    onChange(users);
  });
};

export const updateUserProfile = async (uid: string, patch: Partial<UserProfile>): Promise<void> => {
  await updateDoc(doc(usersCol, uid), patch as Record<string, unknown>);
};

// ── Settings ──────────────────────────────────────────────────────────────────

const settingsDoc = (key: string) => doc(db, 'settings', key);

export const getCompanySettings = async (): Promise<CompanySettings | null> => {
  const snap = await getDoc(settingsDoc('company'));
  return snap.exists() ? (snap.data() as CompanySettings) : null;
};

export const saveCompanySettings = async (data: CompanySettings): Promise<void> => {
  await setDoc(settingsDoc('company'), data);
};

export const subscribeCompanySettings = (onChange: (s: CompanySettings | null) => void) => {
  return onSnapshot(settingsDoc('company'), snap => {
    onChange(snap.exists() ? (snap.data() as CompanySettings) : null);
  });
};

export const getPipelineSettings = async (): Promise<PipelineStatus[] | null> => {
  const snap = await getDoc(settingsDoc('pipeline'));
  return snap.exists() ? (snap.data().statuses as PipelineStatus[]) : null;
};

export const savePipelineSettings = async (statuses: PipelineStatus[]): Promise<void> => {
  await setDoc(settingsDoc('pipeline'), { statuses });
};

export const subscribePipelineSettings = (onChange: (s: PipelineStatus[]) => void, defaults: PipelineStatus[]) => {
  return onSnapshot(settingsDoc('pipeline'), snap => {
    onChange(snap.exists() ? (snap.data().statuses as PipelineStatus[]) : defaults);
  });
};

// ── Seed (first-time setup) ───────────────────────────────────────────────────

export const seedIfEmpty = async (
  seedClients: Omit<Client, 'id'>[],
  seedProjects: Omit<Project, 'id'>[]
): Promise<void> => {
  const existing = await getDocs(clientsCol);
  if (!existing.empty) return;

  for (const c of seedClients) {
    await addDoc(clientsCol, { ...c, createdAt: serverTimestamp() });
  }
  for (const p of seedProjects) {
    await addDoc(projectsCol, { ...p, createdAt: serverTimestamp() });
  }
};
