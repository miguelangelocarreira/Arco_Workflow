import {
  collection,
  doc,
  getDocs,
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
import { Client, Project, ActivityLog, ActivityAction } from '../types';

// ── Collections ──────────────────────────────────────────────────────────────

const clientsCol = collection(db, 'clients');
const projectsCol = collection(db, 'projects');
const activityCol = collection(db, 'activity');

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
