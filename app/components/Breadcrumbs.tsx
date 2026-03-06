'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Breadcrumbs() {
  const pathname = usePathname();
  
  // Don't show on homepage
  if (pathname === '/') return null;
  
  // Split path into segments
  const paths = pathname.split('/').filter(Boolean);
  
  // Build the breadcrumb items
  const breadcrumbs = paths.map((path, index) => {
    const href = '/' + paths.slice(0, index + 1).join('/');
    const isLast = index === paths.length - 1;
    
    // Format the label (remove dashes, capitalize)
    const label = path
      .replace(/-/g, ' ')
      .replace(/\b\w/g, char => char.toUpperCase());
    
    return { href, label, isLast };
  });

  return (
    <nav className="bg-white border-b border-gray-100 py-2">
      <div className="container mx-auto px-4">
        <ol className="flex items-center flex-wrap text-sm">
          <li className="flex items-center">
            <Link 
              href="/" 
              className="text-gray-500 hover:text-[#10B981] transition-colors"
            >
              Home
            </Link>
          </li>
          
          {breadcrumbs.map(({ href, label, isLast }) => (
            <li key={href} className="flex items-center">
              <span className="mx-2 text-gray-300">/</span>
              {isLast ? (
                <span className="text-[#10B981] font-medium">
                  {label}
                </span>
              ) : (
                <Link 
                  href={href} 
                  className="text-gray-500 hover:text-[#10B981] transition-colors"
                >
                  {label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}