// Run this once to set up admin
export function setupAdmin() {
  if (typeof window === 'undefined') return;

  // Check if admin exists
  const users = JSON.parse(localStorage.getItem('users') || '[]');
  const adminExists = users.some((u: any) => u.role === 'admin');

  if (!adminExists) {
    // Create default admin
    const adminUser = {
      id: 'admin-' + Date.now(),
      email: 'admin@fazetedu.ng',
      name: 'System Administrator',
      role: 'admin',
      verified: true,
      createdAt: new Date().toISOString()
    };

    users.push(adminUser);
    localStorage.setItem('users', JSON.stringify(users));
    console.log('✅ Default admin created');
  }
}
