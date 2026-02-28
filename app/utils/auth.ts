export interface User {
  id: string;
  name: string;
  email: string;
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

export interface Teacher {
  id: string;
  name: string;
  email: string;
  phone: string;
  subject: string;
  schoolId?: string;
  verified: boolean;
  createdAt: string;
}

export interface Parent {
  id: string;
  name: string;
  email: string;
  phone: string;
  children: Array<{ name: string; class: string }>;
  verified: boolean;
  createdAt: string;
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

// Initialize admin on first load
export function initializeApp() {
  if (typeof window === 'undefined') return;
  
  const users = JSON.parse(safeLocalStorage.getItem('users') || '[]');
  const adminExists = users.some((u: User) => u.role === 'admin');

  if (!adminExists) {
    const adminUser: User = {
      id: 'admin-' + Date.now(),
      email: 'admin@fazetedu.ng',
      name: 'System Administrator',
      role: 'admin',
      verified: true,
      createdAt: new Date().toISOString()
    };
    users.push(adminUser);
    safeLocalStorage.setItem('users', JSON.stringify(users));
    console.log('✅ Admin account created');
  }
}

export const auth = {
  // Login
  login: (email: string) => {
    const users: User[] = JSON.parse(safeLocalStorage.getItem('users') || '[]');
    const user = users.find(u => u.email === email);

    if (!user) {
      throw new Error('User not found. Please register first.');
    }

    // Get additional data based on role
    let additionalData = null;
    if (user.role === 'school' && user.schoolId) {
      const schools: School[] = JSON.parse(safeLocalStorage.getItem('schools') || '[]');
      additionalData = schools.find(s => s.id === user.schoolId);
    } else if (user.role === 'teacher') {
      const teachers: Teacher[] = JSON.parse(safeLocalStorage.getItem('teachers') || '[]');
      additionalData = teachers.find(t => t.id === user.id);
    } else if (user.role === 'parent') {
      const parents: Parent[] = JSON.parse(safeLocalStorage.getItem('parents') || '[]');
      additionalData = parents.find(p => p.id === user.id);
    }

    // Save session
    safeLocalStorage.setItem('currentUser', JSON.stringify(user));
    if (additionalData) {
      safeLocalStorage.setItem('currentUserData', JSON.stringify(additionalData));
    }

    return { user, additionalData };
  },

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
      .replace(/\s+/g, '-')
      .replace(/[^a-z0-9-]/g, '');

    // Check if domain exists
    const schools: School[] = JSON.parse(safeLocalStorage.getItem('schools') || '[]');
    let domain = baseDomain;
    let counter = 1;

    while (schools.some(s => s.domain === domain)) {
      domain = baseDomain + counter;
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
      schoolDomain: domain,
      verified: true,
      createdAt: new Date().toISOString()
    };

    users.push(newUser);
    safeLocalStorage.setItem('users', JSON.stringify(users));

    // Save current session
    safeLocalStorage.setItem('currentUser', JSON.stringify(newUser));
    safeLocalStorage.setItem('currentUserData', JSON.stringify(newSchool));

    return {
      school: newSchool,
      user: newUser,
      redirectUrl: `/${domain}/dashboard`
    };
  },

  // Register teacher
  registerTeacher: (data: {
    name: string;
    email: string;
    phone: string;
    subject: string;
  }) => {
    const teachers: Teacher[] = JSON.parse(safeLocalStorage.getItem('teachers') || '[]');
    const newTeacher: Teacher = {
      id: crypto.randomUUID(),
      name: data.name,
      email: data.email,
      phone: data.phone,
      subject: data.subject,
      verified: false,
      createdAt: new Date().toISOString()
    };

    teachers.push(newTeacher);
    safeLocalStorage.setItem('teachers', JSON.stringify(teachers));

    const users: User[] = JSON.parse(safeLocalStorage.getItem('users') || '[]');
    const newUser: User = {
      id: crypto.randomUUID(),
      email: data.email,
      name: data.name,
      role: 'teacher',
      verified: false,
      createdAt: new Date().toISOString()
    };

    users.push(newUser);
    safeLocalStorage.setItem('users', JSON.stringify(users));

    safeLocalStorage.setItem('currentUser', JSON.stringify(newUser));
    safeLocalStorage.setItem('currentUserData', JSON.stringify(newTeacher));

    return {
      teacher: newTeacher,
      user: newUser
    };
  },

  // Register parent
  registerParent: (data: {
    name: string;
    email: string;
    phone: string;
    children: string[];
  }) => {
    const parents: Parent[] = JSON.parse(safeLocalStorage.getItem('parents') || '[]');
    const newParent: Parent = {
      id: crypto.randomUUID(),
      name: data.name,
      email: data.email,
      phone: data.phone,
      children: data.children.map(childName => ({
        name: childName,
        class: ''
      })),
      verified: true,
      createdAt: new Date().toISOString()
    };

    parents.push(newParent);
    safeLocalStorage.setItem('parents', JSON.stringify(parents));

    const users: User[] = JSON.parse(safeLocalStorage.getItem('users') || '[]');
    const newUser: User = {
      id: crypto.randomUUID(),
      email: data.email,
      name: data.name,
      role: 'parent',
      verified: true,
      createdAt: new Date().toISOString()
    };

    users.push(newUser);
    safeLocalStorage.setItem('users', JSON.stringify(users));

    safeLocalStorage.setItem('currentUser', JSON.stringify(newUser));
    safeLocalStorage.setItem('currentUserData', JSON.stringify(newParent));

    return {
      parent: newParent,
      user: newUser
    };
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

  // Get dashboard URL based on user role
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
  },

  // Check if email exists
  emailExists: (email: string): boolean => {
    const users: User[] = JSON.parse(safeLocalStorage.getItem('users') || '[]');
    return users.some(u => u.email === email);
  },

  // Check if user is admin
  isAdmin: (user: User | null): boolean => {
    return user?.role === 'admin';
  }
};
