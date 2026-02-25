'use client';
import { useState, useEffect } from 'react';

export function useStudents() {
  const [students, setStudents] = useState([]);
  useEffect(() => {
    // TODO: Fetch from database
    setStudents([
      { id: 1, name: 'John Doe', class: 'Grade 3' },
      { id: 2, name: 'Jane Smith', class: 'Grade 5' },
    ]);
  }, []);
  return { students, setStudents };
}
