'use client';
import { FaGithub } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-light text-center py-4 mt-5 shadow-sm">
      <div className="container">
        <p className="mb-2 fw-semibold">© {new Date().getFullYear()} Kenza Ameur – Développeuse web & logicielle</p>
        
        <a
          href="https://github.com/ameurkenza/KenzaPotfolio.git"
          target="_blank"
          rel="noopener noreferrer"
          className="text-decoration-none d-inline-flex align-items-center text-danger fw-medium"
        >
          <FaGithub className="me-2" size={20} />
          Mon GitHub
        </a>

        <p className="mt-3 text-muted fst-italic" style={{ fontSize: '0.9rem' }}>
          Construire des projets avec passion, un pixel à la fois.
        </p>
      </div>
    </footer>
  );
}
