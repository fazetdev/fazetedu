'use client';

import { useState, useEffect } from 'react';

interface Student {
  id: number;
  name: string;
  class: string;
}

export function useStudents() {
  const [students, setStudents] = useState<Student[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchStudents() {
      try {
        setLoading(true);
        // TODO: Connect to Supabase
        // For now, return empty array
        setStudents([]);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch students');
      } finally {
        setLoading(false);
      }
    }

    fetchStudents();
  }, []);

  return { students, loading, error };
}
