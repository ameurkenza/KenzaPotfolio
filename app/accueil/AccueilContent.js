'use client';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Accueil() {
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
        className="bg-white bg-opacity-75 rounded-4 p-4 shadow"
        data-aos="fade-up"
      >
        {/* SECTION PRÉSENTATION */}
        <div className="text-center mb-5" data-aos="zoom-in" data-aos-delay="200">
          <img
            src="/WhatsApp%20Image%202025-04-06%20à%2014.13.52_35250a97.jpg"
            alt="Photo de Kenza"
            className="rounded-circle border border-3 shadow mb-4"
            style={{ borderColor: styleRose }}
            width="160"
            height="160"
          />
          <h1
            className="fw-bold"
            style={{ color: styleRose }}
            data-aos="fade-right"
          >
            Bonjour, je suis Kenza 
          </h1>
          <p
            className="lead mx-auto"
            style={{ maxWidth: '700px' }}
            data-aos="fade-left"
          >
            Étudiante en programmation informatique, passionnée par le développement web et les nouvelles technologies.
            Curieuse, rigoureuse et toujours prête à apprendre, j’aime transformer des idées en projets concrets à travers
            le code. Mon objectif est de créer des applications utiles, accessibles et modernes, tout en développant mes
            compétences jour après jour.
          </p>
        </div>

        {/* SÉPARATEUR */}
        <hr
          className="border-2 opacity-75 w-25 mx-auto mb-5"
          style={{ borderColor: styleRose }}
          data-aos="zoom-in"
        />

        {/* SECTION COMPÉTENCES */}
        <h2
          className="text-center mb-4 fw-semibold"
          style={{ color: styleRose }}
          data-aos="fade-up"
        >
          Mes compétences
        </h2>

        <div className="row row-cols-1 row-cols-md-3 g-4 justify-content-center">
          {/* Développement Web */}
          <div className="col" data-aos="zoom-in-up">
            <div
              className="card h-100 text-center border shadow-lg"
              style={{
                borderColor: styleRose,
                backgroundColor: '#fff0f5',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.boxShadow = '0 1rem 2rem rgba(0,0,0,0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 0.125rem 0.25rem rgba(0,0,0,0.075)';
              }}
            >
              <div className="card-header fw-semibold" style={{ backgroundColor: '#ffe4ec', color: styleRose }}>
                Développement Web
              </div>
              <div className="card-body d-flex flex-column align-items-center">
                <img
                  src="/developpementweb.jpg"
                  alt="Développement Web"
                  className="img-fluid mb-3 rounded"
                  style={{ height: '100px', objectFit: 'cover' }}
                />
                <p className="card-text">
                  HTML, CSS, Bootstrap, JavaScript, React, Next.js, Redux<br />
                  Node.js, Express, API REST, SQL, MongoDB, Cassandra
                </p>
              </div>
            </div>
          </div>

          {/* Développement Mobile */}
          <div className="col" data-aos="zoom-in-up" data-aos-delay="100">
            <div
              className="card h-100 text-center border shadow-lg"
              style={{
                borderColor: styleRose,
                backgroundColor: '#fff0f5',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.boxShadow = '0 1rem 2rem rgba(0,0,0,0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 0.125rem 0.25rem rgba(0,0,0,0.075)';
              }}
            >
              <div className="card-header fw-semibold" style={{ backgroundColor: '#ffe4ec', color: styleRose }}>
                Développement Mobile
              </div>
              <div className="card-body d-flex flex-column align-items-center">
                <img
                  src="/Mobilewebp.webp"
                  alt="Développement Mobile"
                  className="img-fluid mb-3 rounded"
                  style={{ height: '100px', objectFit: 'cover' }}
                />
                <p className="card-text">
                  Kotlin, Xcode (iOS), Swift, notions de React Native
                </p>
              </div>
            </div>
          </div>

          {/* Développement Desktop */}
          <div className="col" data-aos="zoom-in-up" data-aos-delay="200">
            <div
              className="card h-100 text-center border shadow-lg"
              style={{
                borderColor: styleRose,
                backgroundColor: '#fff0f5',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.boxShadow = '0 1rem 2rem rgba(0,0,0,0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 0.125rem 0.25rem rgba(0,0,0,0.075)';
              }}
            >
              <div className="card-header fw-semibold" style={{ backgroundColor: '#ffe4ec', color: styleRose }}>
                Développement Desktop
              </div>
              <div className="card-body d-flex flex-column align-items-center">
                <img
                  src="/desktop.jpg"
                  alt="Développement Desktop"
                  className="img-fluid mb-3 rounded"
                  style={{ height: '100px', objectFit: 'cover' }}
                />
                <p className="card-text">
                  C#, .NET, WPF, Architecture MVVM, Programmation orientée objet
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
