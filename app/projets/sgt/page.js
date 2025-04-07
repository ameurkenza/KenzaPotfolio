'use client';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Link from 'next/link';

export default function ProjetSGT() {
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
          Détails du Projet – SGT 
        </h1>

        <p className="lead text-center mb-5" data-aos="fade-up">
          Le Système de Gestion de Tickets (SGT) est une application de bureau conçue pour optimiser la gestion des demandes
          dans les centres de service client. Il permet de centraliser la création, le suivi, et la résolution des tickets
          à travers trois interfaces adaptées à différents rôles.
        </p>

        {/* Section interface 1 */}
        <div className="mb-5" data-aos="fade-right">
          <h4 className="fw-semibold" style={{ color: styleRose }}> Interface - Agent du Service Client</h4>
          <p>
            L’agent reçoit les appels clients, crée leur profil dans le système et initie un ticket lié à leur demande ou
            panne. Chaque ticket est automatiquement affecté à un agent spécialisé selon le type de problème.
          </p>
          <img src="/serviceclientSGT.png" alt="Interface Service Client" className="img-fluid rounded shadow mt-3" />
        </div>

        {/* Section interface 2 */}
        <div className="mb-5" data-aos="fade-left">
          <h4 className="fw-semibold" style={{ color: styleRose }}> Interface - Agent Résoluteur</h4>
          <p>
            L’agent résoluteur prend en charge les tickets ouverts, travaille sur leur résolution, et met à jour le statut.
            Une fois la demande traitée, le ticket passe de <strong>« ouvert »</strong> à <strong>« fermé »</strong>.
          </p>
          <img src="/resoluteursgt.png" alt="Interface Résoluteur" className="img-fluid rounded shadow mt-3" />
        </div>

        {/* Section interface 3 */}
        <div className="mb-5" data-aos="fade-right">
          <h4 className="fw-semibold" style={{ color: styleRose }}> Interface - Responsable</h4>
          <p>
            Le responsable peut ajouter de nouveaux employés, consulter l’historique d’activité sur les tickets, analyser
            les performances des agents (nombre de tickets résolus, temps de résolution), et améliorer l’organisation de
            l’équipe.
          </p>
          <img src="/responsableSGT.png" alt="Interface Responsable" className="img-fluid rounded shadow mt-3" />
        </div>

        {/* Technologies utilisées */}
        <div data-aos="zoom-in">
          <h4 className="fw-bold text-center mb-3" style={{ color: styleRose }}>Technologies Utilisées</h4>
          <ul className="list-group list-group-flush bg-transparent">
            <li className="list-group-item bg-transparent">C#</li>
            <li className="list-group-item bg-transparent">WPF (Windows Presentation Foundation)</li>
            <li className="list-group-item bg-transparent">MySQL</li>
            <li className="list-group-item bg-transparent">Entity Framework</li>
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
