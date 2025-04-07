'use client';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Link from 'next/link';

export default function ProjetNutriTrack() {
  const styleRose = '#e75480';

  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

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
      <div className="bg-white bg-opacity-75 rounded-4 shadow-lg p-5 mx-auto" style={{ maxWidth: '1100px' }}>
        <h1 className="fw-bold text-center mb-4" style={{ color: styleRose }} data-aos="fade-down">
          Détails du Projet – NutriTrack
        </h1>

        <p className="lead text-center mb-5" data-aos="fade-up">
          NutriTrack est une application web moderne de calcul des calories. Elle permet aux utilisateurs de suivre leur alimentation, leurs apports en macronutriments, et leur évolution corporelle pour atteindre des objectifs personnalisés (perte de poids, prise de masse, maintien).
        </p>

        {/* Section tableau de bord */}
        <div className="mb-5" data-aos="fade-right">
          <h4 className="fw-semibold" style={{ color: styleRose }}>Tableau de Bord</h4>
          <p>
            Vue journalière des repas consommés, total des calories et macros pour chaque jour (protéines, glucides, lipides),
            avec une section de résumé rapide et graphique de suivi. L'utilisateur peut voir en un coup d'œil s’il atteint ses objectifs.
          </p>
          <img src="/dashboardnutritrack.png" alt="Tableau de bord NutriTrack" className="img-fluid rounded shadow mt-3" />
        </div>

        {/* Section ajout de repas */}
        <div className="mb-5" data-aos="fade-left">
          <h4 className="fw-semibold" style={{ color: styleRose }}>Ajout de Repas</h4>
          <p>
            Interface simple pour ajouter des repas et aliments. Il suffit de rechercher l'aliment, entrer la quantité, et le système calcule
            automatiquement les calories et macronutriments. Tout est sauvegardé et modifiable à tout moment.
          </p>
          <img src="/repasNutritrack.png" alt="Ajout de repas NutriTrack" className="img-fluid rounded shadow mt-3" />
        </div>

        {/* Section profil utilisateur */}
        <div className="mb-5" data-aos="fade-right">
          <h4 className="fw-semibold" style={{ color: styleRose }}>Profil Utilisateur</h4>
          <p>
            L’utilisateur entre ses informations personnelles (âge, poids, taille, niveau d’activité) et peut suivre mensuellement l’évolution de ses mesures corporelles.
            Un système de rappel intelligent lui propose de mettre à jour ses données chaque mois pour visualiser sa progression.
          </p>
          <img src="/profilnutritrack.png" alt="Profil utilisateur NutriTrack" className="img-fluid rounded shadow mt-3" />
        </div>

        {/* Technologies utilisées */}
        <div className="mb-5" data-aos="zoom-in">
          <h4 className="fw-bold text-center mb-3" style={{ color: styleRose }}>Technologies Utilisées</h4>
          <ul className="list-group list-group-flush bg-transparent">
            <li className="list-group-item bg-transparent">Vite.js (Frontend)</li>
            <li className="list-group-item bg-transparent">Express.js (Backend)</li>
            <li className="list-group-item bg-transparent">MySQL (Base de données)</li>
          </ul>
        </div>

        {/* Bouton retour */}
        <div className="text-center mt-4" data-aos="fade-up" data-aos-delay="200">
          <Link href="/projets">
            <button className="btn fw-semibold text-white" style={{ backgroundColor: styleRose }}>
              ← Retour aux projets
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
