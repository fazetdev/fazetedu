'use client';

import { resourceService } from './services';
import { useEffect } from 'react';

export default function SeedData() {
  useEffect(() => {
    // Clear old data
    localStorage.removeItem('edumarket_resources');
    localStorage.removeItem('edumarket_sellers');
    
    // Seed new data
    resourceService.seedSampleData();
  }, []);

  return null;
}
