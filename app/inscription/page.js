'use client';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { register } from '@/app/store/authSlice';

export default function Inscription() {
  const dispatch = useDispatch();
  const router = useRouter();
  const users = useSelector((state) => state.auth.users);

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [touched, setTouched] = useState({});
  const styleRose = '#e75480';

  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  // VALIDATIONS
  const isUsernameValid = /^[a-zA-Z0-9_-]{3,}$/.test(username) && /[a-zA-Z]/.test(username);
  const isUsernameTaken = users.some((u) => u.username === username);

  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isEmailTaken = users.some((u) => u.email === email);

  const isPasswordValid = password.length >= 6;
  const isConfirmValid = password === confirm;

  const formValid =
    username && email && password && confirm &&
    isUsernameValid && !isUsernameTaken &&
    isEmailValid && !isEmailTaken &&
    isPasswordValid && isConfirmValid;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formValid) return;

    dispatch(register({ username, email, password }));
    router.push('/connexion');
  };

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
        className="bg-white bg-opacity-75 rounded-4 p-4 shadow mx-auto"
        style={{ maxWidth: '500px' }}
        data-aos="zoom-in"
      >
        <h2
          className="text-center mb-4 fw-bold"
          style={{ color: styleRose }}
          data-aos="fade-down"
        >
          Créer un compte 
        </h2>

        <form onSubmit={handleSubmit}>
          {/* Nom d'utilisateur */}
          <div className="mb-3" data-aos="fade-up">
            <label className="form-label fw-semibold">Nom d'utilisateur</label>
            <input
              type="text"
              className={`form-control ${touched.username && (!isUsernameValid || isUsernameTaken) ? 'is-invalid' : ''}`}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              onBlur={() => setTouched((prev) => ({ ...prev, username: true }))}
              placeholder="ex. kenza_dev"
            />
            {touched.username && !isUsernameValid && (
              <div className="text-danger small mt-1">
                Le nom doit contenir au moins 3 caractères, avec au moins une lettre. Seuls _ et - sont autorisés.
              </div>
            )}
            {touched.username && isUsernameValid && isUsernameTaken && (
              <div className="text-danger small mt-1">
                Ce nom d'utilisateur est déjà pris.
              </div>
            )}
          </div>

          {/* Email */}
          <div className="mb-3" data-aos="fade-up" data-aos-delay="100">
            <label className="form-label fw-semibold">Adresse courriel</label>
            <input
              type="email"
              className={`form-control ${touched.email && (!isEmailValid || isEmailTaken) ? 'is-invalid' : ''}`}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={() => setTouched((prev) => ({ ...prev, email: true }))}
              placeholder="ex. kenza@example.com"
            />
            {touched.email && !isEmailValid && (
              <div className="text-danger small mt-1">
                Format invalide. Exemple : kenza@example.com
              </div>
            )}
            {touched.email && isEmailValid && isEmailTaken && (
              <div className="text-danger small mt-1">
                Cet email est déjà utilisé.
              </div>
            )}
          </div>

          {/* Mot de passe */}
          <div className="mb-3" data-aos="fade-up" data-aos-delay="200">
            <label className="form-label fw-semibold">Mot de passe</label>
            <input
              type="password"
              className={`form-control ${touched.password && !isPasswordValid ? 'is-invalid' : ''}`}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onBlur={() => setTouched((prev) => ({ ...prev, password: true }))}
              placeholder="********"
            />
            {touched.password && !isPasswordValid && (
              <div className="text-danger small mt-1">
                Le mot de passe doit contenir au moins 6 caractères.
              </div>
            )}
          </div>

          {/* Confirmation */}
          <div className="mb-4" data-aos="fade-up" data-aos-delay="300">
            <label className="form-label fw-semibold">Confirmer le mot de passe</label>
            <input
              type="password"
              className={`form-control ${touched.confirm && !isConfirmValid ? 'is-invalid' : ''}`}
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
              onBlur={() => setTouched((prev) => ({ ...prev, confirm: true }))}
              placeholder="********"
            />
            {touched.confirm && !isConfirmValid && (
              <div className="text-danger small mt-1">
                Les mots de passe ne correspondent pas.
              </div>
            )}
          </div>

          {/* Bouton */}
          <div className="d-grid" data-aos="zoom-in" data-aos-delay="400">
            <button
              type="submit"
              className="btn fw-bold text-white"
              style={{ backgroundColor: styleRose }}
              disabled={!formValid}
            >
              S'inscrire
            </button>
          </div>
        </form>

        <p className="mt-4 text-center" data-aos="fade-up" data-aos-delay="500">
          <small>
            Vous avez déjà un compte ?{' '}
            <Link href="/connexion" className="fw-semibold" style={{ color: styleRose }}>
              Connectez-vous
            </Link>
          </small>
        </p>
      </div>
    </div>
  );
}
