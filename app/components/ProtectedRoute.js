'use client';
import { useSelector } from 'react-redux';
import { useRouter, usePathname } from 'next/navigation';
import { useEffect } from 'react';

const PUBLIC_ROUTES = ['/connexion', '/inscription'];

export default function ProtectedRoute({ children }) {
  const currentUser = useSelector((state) => state.auth.currentUser);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (!currentUser && !PUBLIC_ROUTES.includes(pathname)) {
      router.push('/connexion');
    }
  }, [currentUser, pathname, router]);

  return children;
}
