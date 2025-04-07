'use client';
import { useSelector, useDispatch } from 'react-redux';
import Link from 'next/link';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { supprimerTemoignage } from '@/app/store/feedbackSlice';

export default function ListeTemoignages() {
  const feedbacks = useSelector((state) => state.feedback.feedbacks);
  const currentUser = useSelector((state) => state.auth.currentUser);
  const dispatch = useDispatch();
  const styleRose = '#e75480';
  const roseClair = '#ffe4ec';

  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  if (!currentUser) {
    return (
      <div className="container py-5 text-center">
        <h2 className="fw-bold" style={{ color: styleRose }}>Accès refusé</h2>
        <p>Veuillez vous connecter pour voir ou laisser un témoignage.</p>
        <Link href="/connexion" className="btn text-white fw-semibold rounded-pill" style={{ backgroundColor: styleRose }}>
          Se connecter
        </Link>
      </div>
    );
  }

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
        className="bg-white bg-opacity-75 rounded-4 p-5 shadow-lg mx-auto"
        style={{ maxWidth: '900px' }}
      >
        <h1 className="text-center fw-bold mb-4" style={{ color: styleRose }} data-aos="fade-down">
          Témoignages
        </h1>

        <div className="d-flex justify-content-end mb-4">
          <Link
            href="/temoignages/nouveau"
            className="btn text-white fw-semibold rounded-pill"
            style={{ backgroundColor: styleRose }}
          >
            Laisser un témoignage
          </Link>
        </div>

        {feedbacks.length === 0 ? (
          <p className="text-center">Aucun témoignage pour le moment.</p>
        ) : (
          <ul className="list-group">
            {feedbacks.map((f) => (
              <li
                key={f.id}
                className="list-group-item border-0 rounded mb-4 shadow-sm"
                style={{ backgroundColor: roseClair }}
                data-aos="fade-up"
              >
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <h5 className="fw-bold mb-0" style={{ color: styleRose }}>{f.nom}</h5>
                  <div style={{ color: styleRose, fontSize: '18px' }}>
                    {'★'.repeat(f.note)}{'☆'.repeat(5 - f.note)}
                  </div>
                </div>

                <p className="mb-2">{f.message}</p>
                <small className="text-muted">{f.date}</small>

                {f.userId === currentUser.username && (
                  <div className="mt-3 d-flex gap-2">
                    <button
                      onClick={() => dispatch(supprimerTemoignage(f.id))}
                      className="btn btn-sm text-white fw-semibold rounded-pill"
                      style={{
                        backgroundColor: '#b33c61',
                        transition: 'all 0.3s ease',
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#992b4e'}
                      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#b33c61'}
                    >
                      Supprimer
                    </button>

                    <Link
                      href={`/temoignages/modifier/${f.id}`}
                      className="btn btn-sm text-white fw-semibold rounded-pill"
                      style={{
                        backgroundColor: styleRose,
                        transition: 'all 0.3s ease',
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.opacity = 0.9}
                      onMouseLeave={(e) => e.currentTarget.style.opacity = 1}
                    >
                      Modifier
                    </Link>
                  </div>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
