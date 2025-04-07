'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../store/authSlice';

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const dispatch = useDispatch();

  const currentUser = useSelector((state) => state.auth.currentUser);
  const isLoggedIn = !!currentUser;

  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  const handleLogout = () => {
    const confirmLogout = window.confirm("Êtes-vous sûr de vouloir vous déconnecter ?");
    if (confirmLogout) {
      dispatch(logout());
      router.push('/connexion');
    }
  };

  return (
    <nav className="navbar navbar-expand-lg bg-light shadow-sm">
      <div className="container">
        <Link className="navbar-brand fw-bold text-danger" href="/accueil">
          Mon Portfolio
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                className={`nav-link ${pathname === '/projets' ? 'active fw-semibold text-danger' : ''}`}
                href="/projets"
              >
                Projets
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className={`nav-link ${pathname === '/temoignages' ? 'active fw-semibold text-danger' : ''}`}
                href="/temoignages"
              >
                Témoignages
              </Link>
            </li>

            <li className="nav-item">
              {isLoggedIn ? (
                <button
                  onClick={handleLogout}
                  className="btn nav-link fw-semibold text-danger border-0 bg-transparent"
                >
                  Déconnexion
                </button>
              ) : (
                <Link
                  className={`nav-link ${pathname === '/connexion' ? 'active fw-semibold text-danger' : ''}`}
                  href="/connexion"
                >
                  Connexion
                </Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
