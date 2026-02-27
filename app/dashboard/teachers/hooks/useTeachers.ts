'use client';

import { useState, useEffect } from 'react';

interface Teacher {
  id: number;
  name: string;
  subject: string;
}

export function useTeachers() {
  const [teachers, setTeachers] = useState<Teacher[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchTeachers() {
      try {
        setLoading(true);
        // TODO: Connect to Supabase
        // For now, return empty array
        setTeachers([]);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch teachers');
      } finally {
        setLoading(false);
      }
    }

    fetchTeachers();
  }, []);

  return { teachers, loading, error };
}
