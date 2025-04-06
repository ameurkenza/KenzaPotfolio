'use client';
import { useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  return (
    <nav className="navbar navbar-expand-lg bg-light shadow-sm">
      <div className="container">
        {/* NOM CLIQUABLE POUR REVENIR À L'ACCUEIL */}
        <Link className="navbar-brand fw-bold text-danger" href="/accueil">
          Mon Portfolio
        </Link>

        {/* BOUTON HAMBURGER POUR MOBILE */}
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

        {/* NAVIGATION */}
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
              <Link
                className={`nav-link ${pathname === '/connexion' ? 'active fw-semibold text-danger' : ''}`}
                href="/connexion"
              >
                Connexion
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
