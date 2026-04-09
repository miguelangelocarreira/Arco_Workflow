import { useState, useEffect } from 'react';
import { Quote, QuoteSettings, User } from '../types';
import {
  createQuoteDoc,
  updateQuoteDoc,
  deleteQuoteDoc,
  subscribeQuoteSettings,
  subscribeAllQuotes,
  saveQuoteSettings,
  DEFAULT_QUOTE_SETTINGS,
} from '../utils/db';

export const useQuotes = (currentUser: User | null) => {
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [quoteSettings, setQuoteSettings] = useState<QuoteSettings>(DEFAULT_QUOTE_SETTINGS);
  const [savingSettings, setSavingSettings] = useState(false);

  useEffect(() => {
    const unsub = subscribeQuoteSettings(setQuoteSettings);
    return () => unsub();
  }, []);

  useEffect(() => {
    const unsub = subscribeAllQuotes(setQuotes);
    return () => unsub();
  }, []);

  const createQuote = async (
    payload: Omit<Quote, 'id' | 'createdAt' | 'updatedAt' | 'createdBy' | 'createdByName'>
  ): Promise<Quote> => {
    if (!currentUser) throw new Error('Not authenticated');
    return createQuoteDoc({
      ...payload,
      createdBy: currentUser.uid,
      createdByName: currentUser.name,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    });
  };

  const updateQuote = async (id: string, patch: Partial<Quote>): Promise<void> => {
    await updateQuoteDoc(id, { ...patch, updatedAt: Date.now() });
  };

  const deleteQuote = async (id: string): Promise<void> => {
    await deleteQuoteDoc(id);
  };

  const updateQuoteSettings = async (data: QuoteSettings): Promise<void> => {
    setSavingSettings(true);
    try {
      await saveQuoteSettings({ ...data, updatedAt: Date.now() });
    } finally {
      setSavingSettings(false);
    }
  };

  return { quotes, quoteSettings, savingSettings, createQuote, updateQuote, deleteQuote, updateQuoteSettings };
};
