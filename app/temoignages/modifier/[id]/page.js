'use client';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { modifierTemoignage } from '@/app/store/feedbackSlice';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function ModifierTemoignage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const router = useRouter();
  const feedback = useSelector((state) => state.feedback.feedbacks.find(f => f.id === id));
  const currentUser = useSelector((state) => state.auth.currentUser);
  const styleRose = '#e75480';

  const [message, setMessage] = useState(feedback?.message || '');
  const [note, setNote] = useState(feedback?.note || 5);
  const [touched, setTouched] = useState({});

  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  if (!feedback || feedback.userId !== currentUser?.username) {
    return (
      <div className="container py-5 text-center">
        <h2 className="fw-bold" style={{ color: styleRose }}>Accès interdit</h2>
        <p>Ce témoignage ne vous appartient pas ou n'existe pas.</p>
      </div>
    );
  }

  const isMessageValid = message.trim().length >= 6;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isMessageValid) return;
    dispatch(modifierTemoignage({ id, message, note }));
    router.push('/temoignages');
  };

  return (
    <div
      className="container py-5"
      style={{
        backgroundImage: 'url("/fond.jpg")',
        backgroundSize: 'cover',
        minHeight: '100vh',
      }}
    >
      <div className="bg-white bg-opacity-75 rounded-4 p-4 shadow-lg mx-auto" style={{ maxWidth: '600px' }}>
        <h2 className="fw-bold text-center mb-4" style={{ color: styleRose }}>
          Modifier le Témoignage
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label fw-semibold">Message</label>
            <textarea
              className={`form-control ${touched.message && !isMessageValid ? 'is-invalid' : ''}`}
              rows="4"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onBlur={() => setTouched((prev) => ({ ...prev, message: true }))}
            />
            {touched.message && !isMessageValid && (
              <div className="text-danger small mt-1">Le message doit contenir au moins 6 caractères.</div>
            )}
          </div>

          <div className="mb-4">
            <label className="form-label fw-semibold">Note</label>
            <select
              className="form-select"
              value={note}
              onChange={(e) => setNote(Number(e.target.value))}
            >
              {[5, 4, 3, 2, 1].map((n) => (
                <option key={n} value={n}>{'★'.repeat(n)}{'☆'.repeat(5 - n)}</option>
              ))}
            </select>
          </div>

          <div className="d-grid">
            <button
              type="submit"
              className="btn text-white fw-bold"
              style={{ backgroundColor: styleRose }}
              disabled={!isMessageValid}
            >
              Enregistrer
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
