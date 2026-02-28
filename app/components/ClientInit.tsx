'use client';

import { useEffect } from 'react';
import { initializeApp } from '../utils/auth';

export default function ClientInit() {
  useEffect(() => {
    initializeApp();
  }, []);

  return null;
}
