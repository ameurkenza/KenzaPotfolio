'use client';
import ProtectedRoute from '@/app/components/ProtectedRoute';
import Accueil from './AccueilContent';

export default function Page() {
  return (
    <ProtectedRoute>
      <Accueil />
    </ProtectedRoute>
  );
}
