import { useState, useEffect } from 'react';
import { CompanySettings, PipelineStatus, UserProfile } from '../types';
import { PROJECT_STATUSES } from '../constants/project-data';
import {
  subscribeCompanySettings,
  saveCompanySettings,
  subscribePipelineSettings,
  savePipelineSettings,
  subscribeUsers,
  updateUserProfile,
} from '../utils/db';

const DEFAULT_PIPELINE: PipelineStatus[] = PROJECT_STATUSES.map(s => ({
  id: s.id,
  label: s.label,
  color: s.color,
}));

export const useSettings = () => {
  const [company, setCompany] = useState<CompanySettings | null>(null);
  const [pipeline, setPipeline] = useState<PipelineStatus[]>(DEFAULT_PIPELINE);
  const [users, setUsers] = useState<UserProfile[]>([]);
  const [savingCompany, setSavingCompany] = useState(false);
  const [savingPipeline, setSavingPipeline] = useState(false);

  useEffect(() => {
    const unsubCompany = subscribeCompanySettings(setCompany);
    const unsubPipeline = subscribePipelineSettings(setPipeline, DEFAULT_PIPELINE);
    const unsubUsers = subscribeUsers(setUsers);
    return () => {
      unsubCompany();
      unsubPipeline();
      unsubUsers();
    };
  }, []);

  const updateCompany = async (data: CompanySettings) => {
    setSavingCompany(true);
    try {
      await saveCompanySettings(data);
    } finally {
      setSavingCompany(false);
    }
  };

  const updatePipeline = async (statuses: PipelineStatus[]) => {
    setSavingPipeline(true);
    try {
      await savePipelineSettings(statuses);
    } finally {
      setSavingPipeline(false);
    }
  };

  const toggleUserActive = async (uid: string, active: boolean) => {
    await updateUserProfile(uid, { active });
  };

  const changeUserRole = async (uid: string, role: 'admin' | 'user') => {
    await updateUserProfile(uid, { role });
  };

  return {
    company,
    pipeline,
    users,
    savingCompany,
    savingPipeline,
    updateCompany,
    updatePipeline,
    toggleUserActive,
    changeUserRole,
  };
};
