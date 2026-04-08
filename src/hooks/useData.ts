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
  logActivity,
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
    const client = await createClientDoc(data);
    if (currentUser) {
      await logActivity(currentUser.uid, currentUser.name, 'created_client', 'client', client.id, client.name);
    }
    return client;
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
    const project = await createProjectDoc(data);
    if (currentUser) {
      await logActivity(currentUser.uid, currentUser.name, 'created_project', 'project', project.id, project.title);
    }
    return project;
  };

  const updateProject = async (id: string, patch: Partial<Project>): Promise<void> => {
    const project = projects.find(p => p.id === id);
    await updateProjectDoc(id, patch);

    if (currentUser && project) {
      if (patch.status && patch.status !== project.status) {
        await logActivity(
          currentUser.uid, currentUser.name,
          'changed_status', 'project', id, project.title,
          `${project.status} → ${patch.status}`
        );
      } else if (patch.items && patch.items.length > (project.items?.length ?? 0)) {
        const newItem = patch.items[patch.items.length - 1];
        await logActivity(
          currentUser.uid, currentUser.name,
          'added_item', 'project', id, project.title,
          newItem.desc
        );
      } else if (patch.items && patch.items.length < (project.items?.length ?? 0)) {
        await logActivity(
          currentUser.uid, currentUser.name,
          'removed_item', 'project', id, project.title
        );
      }
    }
  };

  const deleteProject = async (id: string): Promise<void> => {
    const project = projects.find(p => p.id === id);
    await deleteProjectDoc(id);
    if (currentUser && project) {
      await logActivity(currentUser.uid, currentUser.name, 'deleted_project', 'project', id, project.title);
    }
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
