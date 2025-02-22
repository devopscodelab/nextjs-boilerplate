
'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();
  
  const isActive = (path: string) => pathname === path;

  return (
    <nav className="border-b border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="font-bold text-xl">
            Cloud Migration
          </Link>
          
          <div className="flex gap-4">
            <Link 
              href="/infrastructure"
              className={`nav-link ${isActive('/infrastructure') ? 'bg-gray-100 dark:bg-gray-800' : ''}`}
            >
              Infrastructure
            </Link>
            <Link 
              href="/architecture"
              className={`nav-link ${isActive('/architecture') ? 'bg-gray-100 dark:bg-gray-800' : ''}`}
            >
              Architecture
            </Link>
            <Link 
              href="/strategy"
              className={`nav-link ${isActive('/strategy') ? 'bg-gray-100 dark:bg-gray-800' : ''}`}
            >
              Strategy
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
