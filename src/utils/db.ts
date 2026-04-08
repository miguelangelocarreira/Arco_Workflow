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
  serverTimestamp,
  Timestamp,
} from 'firebase/firestore';
import { db } from '../firebase';
import { Client, Project } from '../types';

// ── Collections ──────────────────────────────────────────────────────────────

const clientsCol = collection(db, 'clients');
const projectsCol = collection(db, 'projects');

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
      // Convert Firestore Timestamp to number if needed
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
