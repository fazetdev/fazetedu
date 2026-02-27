export interface User {
  id: string;
  email: string;
  name: string;
  role: 'school' | 'teacher' | 'parent' | 'admin';
  schoolId?: string;
  schoolDomain?: string;
  verified: boolean;
  createdAt: string;
}

export interface School {
  id: string;
  name: string;
  domain: string;
  email: string;
  phone: string;
  adminName: string;
  address?: string;
  status: 'pending' | 'active' | 'suspended';
  joinedAt: string;
}

// Safe localStorage access
const safeLocalStorage = {
  getItem: (key: string): string | null => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem(key);
    }
    return null;
  },
  setItem: (key: string, value: string): void => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(key, value);
    }
  },
  removeItem: (key: string): void => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem(key);
    }
  }
};

export const auth = {
  // Register school
  registerSchool: (data: {
    schoolName: string;
    adminName: string;
    email: string;
    phone: string;
  }) => {
    // Generate unique domain
    const baseDomain = data.schoolName
      .toLowerCase()
      .replace(/\s+/g, '')
      .replace(/[^a-z0-9]/g, '');

    // Check if domain exists
    const schools: School[] = JSON.parse(safeLocalStorage.getItem('schools') || '[]');
    let domain = baseDomain + '.fazetedu.ng';
    let counter = 1;

    while (schools.some(s => s.domain === domain)) {
      domain = baseDomain + counter + '.fazetedu.ng';
      counter++;
    }

    // Create school
    const newSchool: School = {
      id: crypto.randomUUID(),
      name: data.schoolName,
      domain,
      email: data.email,
      phone: data.phone,
      adminName: data.adminName,
      status: 'active',
      joinedAt: new Date().toISOString()
    };

    schools.push(newSchool);
    safeLocalStorage.setItem('schools', JSON.stringify(schools));

    // Create user with schoolDomain
    const users: User[] = JSON.parse(safeLocalStorage.getItem('users') || '[]');
    const newUser: User = {
      id: crypto.randomUUID(),
      email: data.email,
      name: data.adminName,
      role: 'school',
      schoolId: newSchool.id,
      schoolDomain: newSchool.domain,
      verified: true,
      createdAt: new Date().toISOString()
    };

    users.push(newUser);
    safeLocalStorage.setItem('users', JSON.stringify(users));

    // Save current session
    safeLocalStorage.setItem('currentUser', JSON.stringify(newUser));
    safeLocalStorage.setItem('currentUserData', JSON.stringify(newSchool));

    // Return with redirect URL
    return { 
      school: newSchool, 
      user: newUser,
      redirectUrl: `/${newSchool.domain}/dashboard` // Add this
    };
  },

  // Login
  login: (email: string) => {
    const users: User[] = JSON.parse(safeLocalStorage.getItem('users') || '[]');
    const user = users.find(u => u.email === email);

    if (!user) {
      throw new Error('User not found');
    }

    // Get school data if role is school
    let additionalData = null;
    if (user.role === 'school' && user.schoolId) {
      const schools: School[] = JSON.parse(safeLocalStorage.getItem('schools') || '[]');
      additionalData = schools.find(s => s.id === user.schoolId);
    }

    // Save session
    safeLocalStorage.setItem('currentUser', JSON.stringify(user));
    if (additionalData) {
      safeLocalStorage.setItem('currentUserData', JSON.stringify(additionalData));
    }

    return { user, additionalData };
  },

  // Get current user
  getCurrentUser: (): { user: User | null; data: any } => {
    if (typeof window === 'undefined') {
      return { user: null, data: null };
    }

    const user = safeLocalStorage.getItem('currentUser');
    const data = safeLocalStorage.getItem('currentUserData');
    return {
      user: user ? JSON.parse(user) : null,
      data: data ? JSON.parse(data) : null
    };
  },

  // Logout
  logout: () => {
    safeLocalStorage.removeItem('currentUser');
    safeLocalStorage.removeItem('currentUserData');
  },

  // Get dashboard URL based on user role and school
  getDashboardUrl: (user: User): string => {
    switch(user.role) {
      case 'admin':
        return '/admin';
      case 'school':
        return `/${user.schoolDomain}/dashboard`;
      case 'teacher':
        return '/dashboard/teacher-dashboard';
      case 'parent':
        return '/dashboard/parent-dashboard';
      default:
        return '/';
    }
  }
};
