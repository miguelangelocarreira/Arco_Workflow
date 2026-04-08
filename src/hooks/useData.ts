import { useState, useEffect } from 'react';
import { Client, Project, User } from '../types';
import { sanitize } from '../utils/formatting';
import { generateLeiriaData } from '../utils/sample-data';
import {
  subscribeClients,
  subscribeProjects,
  createClientDoc,
  createProjectDoc,
  updateProjectDoc,
  deleteProjectDoc,
  seedIfEmpty,
} from '../utils/db';

export const useData = (currentUser: User | null) => {
  const [clients, setClients] = useState<Client[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);
  const [loadingData, setLoadingData] = useState(false);
  const [dataError, setDataError] = useState<string | null>(null);

  useEffect(() => {
    if (!currentUser) return;

    setLoadingData(true);
    setDataError(null);

    // Seed Firestore on first run, then subscribe to real-time updates
    const { clients: seedC, projects: seedP } = generateLeiriaData();
    seedIfEmpty(seedC, seedP).catch(() => setDataError("Erro ao inicializar dados."));

    const unsubClients = subscribeClients(data => {
      setClients(data);
      setLoadingData(false);
    });

    const unsubProjects = subscribeProjects(data => {
      setProjects(data);
    });

    return () => {
      unsubClients();
      unsubProjects();
    };
  }, [currentUser]);

  const createClient = async (payload: Partial<Client>): Promise<Client> => {
    const data: Omit<Client, 'id'> = {
      name: sanitize(payload.name || ""),
      email: sanitize(payload.email || ""),
      phone: sanitize(payload.phone || ""),
      nif: sanitize(payload.nif || ""),
      address: sanitize(payload.address || ""),
      zip: sanitize(payload.zip || ""),
      city: sanitize(payload.city || ""),
      createdAt: Date.now(),
    };
    return createClientDoc(data);
  };

  const createProject = async (payload: Partial<Project>): Promise<Project> => {
    const data: Omit<Project, 'id'> = {
      clientId: payload.clientId || "",
      title: sanitize(payload.title || ""),
      status: payload.status || "orçamento",
      items: payload.items || [],
      discount: payload.discount || 0,
      urgent: !!payload.urgent,
      startDate: payload.startDate || new Date().toISOString(),
      endDate: payload.endDate || null,
      createdAt: Date.now(),
    };
    return createProjectDoc(data);
  };

  const updateProject = async (id: string, patch: Partial<Project>): Promise<void> => {
    await updateProjectDoc(id, patch);
  };

  const deleteProject = async (id: string): Promise<void> => {
    await deleteProjectDoc(id);
  };

  return {
    clients,
    projects,
    loadingData,
    dataError,
    createClient,
    createProject,
    updateProject,
    deleteProject,
  };
};
