'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { auth } from '@/app/utils/auth';

export interface SchoolData {
  id: string;
  name: string;
  domain: string;
  email: string;
  phone: string;
  adminName: string;
  address?: string;
  logo?: string;
  established?: string;
  type?: string;
  status: 'pending' | 'active' | 'suspended';
}

export function useSchool() {
  const params = useParams();
  const domain = params.domain as string;
  
  const [school, setSchool] = useState<SchoolData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Get school data from multiple sources
    const loadSchool = () => {
      try {
        // First try from current user session
        const { user, data } = auth.getCurrentUser();
        
        if (user?.role === 'school' && user.schoolDomain === domain) {
          setSchool(data);
          setLoading(false);
          return;
        }

        // If not in session, get from schools list
        const schools = JSON.parse(localStorage.getItem('schools') || '[]');
        const found = schools.find((s: SchoolData) => s.domain === domain);
        
        if (found) {
          setSchool(found);
        } else {
          setError('School not found');
        }
      } catch (err) {
        setError('Failed to load school data');
      } finally {
        setLoading(false);
      }
    };

    if (domain) {
      loadSchool();
    }
  }, [domain]);

  return { school, loading, error, domain };
}
