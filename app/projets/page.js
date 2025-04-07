'use client';
import Link from 'next/link';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Projets() {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  const styleRose = '#e75480';

  return (
    <div
      className="container-fluid py-5"
      style={{
        backgroundImage: 'url("/fond.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
      }}
    >
      <div
        className="bg-white bg-opacity-75 rounded-4 p-4 shadow-lg mx-auto"
        style={{ maxWidth: '1100px' }}
      >
        <h1
          className="text-center fw-bold mb-5"
          style={{ color: styleRose }}
          data-aos="zoom-in"
        >
          Mes Projets
        </h1>

        <div className="row row-cols-1 row-cols-md-2 g-4">
          {/* PROJET SGT */}
          <div className="col" data-aos="fade-up">
            <div className="card h-100 border-0 shadow-lg">
              <img
                src="/logoSGT.png"
                className="card-img-top"
                alt="Projet SGT"
                style={{ height: '250px', objectFit: 'contain' }}
              />
              <div className="card-body rounded-bottom">
                <h5 className="card-title fw-bold" style={{ color: styleRose }}>
                  SGT – Système de Gestion de Tickets
                </h5>
                <p className="card-text">
                  Un système conçu pour les équipes de service client, permettant de créer,
                  suivre et organiser les demandes en toute efficacité. Idéal pour les entreprises
                  souhaitant optimiser leur support technique.
                </p>
                <Link
                  href="/projets/sgt"
                  className="btn btn-sm fw-semibold text-white"
                  style={{ backgroundColor: styleRose }}
                >
                  En savoir plus
                </Link>
              </div>
            </div>
          </div>

          {/* PROJET NUTRITRACK */}
          <div className="col" data-aos="fade-up" data-aos-delay="100">
            <div className="card h-100 border-0 shadow-lg">
              <img
                src="/logonutritrack.png"
                className="card-img-top"
                alt="Projet NutriTrack"
                style={{ height: '250px', objectFit: 'contain' }}
              />
              <div className="card-body rounded-bottom">
                <h5 className="card-title fw-bold" style={{ color: styleRose }}>
                  NutriTrack – Suivi Nutritionnel Intelligent
                </h5>
                <p className="card-text">
                  Une application web intuitive qui aide les utilisateurs à définir un objectif (perte de poids, prise de masse,
                  maintien), à enregistrer leurs repas quotidiens, et à analyser leurs macronutriments et apports caloriques.
                </p>
                <Link
                  href="/projets/nutritrack"
                  className="btn btn-sm fw-semibold text-white"
                  style={{ backgroundColor: styleRose }}
                >
                  En savoir plus
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
