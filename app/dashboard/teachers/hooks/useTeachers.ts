'use client';
import { useState, useEffect } from 'react';

export function useTeachers() {
  const [teachers, setTeachers] = useState([]);
  useEffect(() => {
    setTeachers([
      { id: 1, name: 'Mr. Adams', subject: 'Math' },
      { id: 2, name: 'Ms. Brown', subject: 'English' },
    ]);
  }, []);
  return { teachers, setTeachers };
}
