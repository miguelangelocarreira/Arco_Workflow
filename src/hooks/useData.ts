import { useState, useEffect, useCallback } from 'react';
import { Client, Project, ProjectItem } from '../types';
import { storage } from '../utils/storage';
import { generateLeiriaData } from '../utils/sample-data';
import { sanitize } from '../utils/formatting';

export const useData = (currentUser: any) => {
  const [clients, setClients] = useState<Client[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);
  const [loadingData, setLoadingData] = useState(false);

  const persistData = (newClients: Client[], newProjects: Project[]) => {
    storage.set("aw_clients", newClients);
    storage.set("aw_projects", newProjects);
  };

  const loadData = useCallback(async () => {
    setLoadingData(true);
    
    let loadedClients = storage.get("aw_clients") || [];
    let loadedProjects = storage.get("aw_projects") || [];

    // Auto-seed if empty
    if (loadedClients.length === 0) {
      const { clients: seedC, projects: seedP } = generateLeiriaData();
      loadedClients = seedC;
      loadedProjects = seedP;
      persistData(seedC, seedP);
    }

    setClients(loadedClients);
    setProjects(loadedProjects);
    setLoadingData(false);
  }, []);

  useEffect(() => {
    if (currentUser) {
      loadData();
    }
  }, [currentUser, loadData]);

  const createClient = async (payload: Partial<Client>) => {
    const clientBase: Client = {
      id: "local-c-" + Date.now(),
      name: sanitize(payload.name || ""),
      email: sanitize(payload.email || ""),
      phone: sanitize(payload.phone || ""),
      nif: sanitize(payload.nif || ""),
      address: sanitize(payload.address || ""),
      zip: sanitize(payload.zip || ""),
      city: sanitize(payload.city || ""),
      createdAt: Date.now(),
    };

    const updatedClients = [...clients, clientBase];
    setClients(updatedClients);
    persistData(updatedClients, projects);
    return clientBase;
  };

  const createProject = async (payload: Partial<Project>) => {
    const projectBase: Project = {
      id: "local-p-" + Date.now(),
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

    const updatedProjects = [...projects, projectBase];
    setProjects(updatedProjects);
    persistData(clients, updatedProjects);
    return projectBase;
  };

  const updateProject = async (id: string, patch: Partial<Project>) => {
    const idx = projects.findIndex((p) => p.id === id);
    if (idx === -1) return;
    
    const updated = { ...projects[idx], ...patch };
    const nextProjects = [...projects];
    nextProjects[idx] = updated;
    
    setProjects(nextProjects);
    persistData(clients, nextProjects);
  };

  const deleteProject = async (id: string) => {
    const nextProjects = projects.filter((p) => p.id !== id);
    setProjects(nextProjects);
    persistData(clients, nextProjects);
  };

  return {
    clients,
    projects,
    loadingData,
    createClient,
    createProject,
    updateProject,
    deleteProject
  };
};