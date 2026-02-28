'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';

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
  created_at?: string;
  joinedAt?: string;
  motto?: string;
}

// Initialize with some sample data if localStorage is empty
const initializeSchools = () => {
  const existing = localStorage.getItem('schools');
  if (!existing) {
    const sampleSchools = [
      {
        id: '1',
        name: 'Demo School',
        domain: 'demo',
        email: 'demo@school.com',
        phone: '+1234567890',
        adminName: 'John Admin',
        address: '123 Education St',
        status: 'active',
        created_at: new Date().toISOString(),
        joinedAt: new Date().toISOString()
      }
    ];
    localStorage.setItem('schools', JSON.stringify(sampleSchools));
    return sampleSchools;
  }
  return JSON.parse(existing);
};

export function useSchool() {
  const params = useParams();
  const domain = params.domain as string;

  const [school, setSchool] = useState<SchoolData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadSchool = () => {
      try {
        setLoading(true);
        
        // Initialize schools if needed
        const schools = initializeSchools();
        
        // Find school by domain
        const found = schools.find((s: SchoolData) => s.domain === domain);

        if (found) {
          setSchool(found);
          setError(null);
        } else {
          setError('School not found');
          setSchool(null);
        }
      } catch (err) {
        console.error('Error loading school:', err);
        setError('Failed to load school data');
        setSchool(null);
      } finally {
        setLoading(false);
      }
    };

    if (domain) {
      loadSchool();
    } else {
      setError('No domain provided');
      setLoading(false);
    }
  }, [domain]);

  return { school, loading, error, domain };
}
