'use client';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../store/authSlice';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Connexion() {
  const styleRose = '#e75480';
  const [identifiant, setIdentifiant] = useState('');
  const [password, setPassword] = useState('');
  const [touched, setTouched] = useState({});
  const [errors, setErrors] = useState({});

  const dispatch = useDispatch();
  const router = useRouter();
  const users = useSelector((state) => state.auth.users);

  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(identifiant);
  const isUsername = /^[a-zA-Z0-9_-]{3,}$/.test(identifiant) && /[a-zA-Z]/.test(identifiant);
  const isPasswordValid = password.length >= 6;

  const matchedUser = users.find(
    u => (u.username === identifiant || u.email === identifiant)
  );

  const passwordMatches = matchedUser?.password === password;

  // VALIDATION LIVE
  useEffect(() => {
    const newErrors = {};

    if (touched.identifiant) {
      if (!identifiant) {
        newErrors.identifiant = "Veuillez entrer votre identifiant.";
      } else if (!isEmail && !isUsername) {
        newErrors.identifiant = "Entrez un nom d’utilisateur ou email valide (lettres obligatoires).";
      } else if (!matchedUser) {
        newErrors.identifiant = "Aucun utilisateur ne correspond à cet identifiant.";
      }
    }

    if (touched.password) {
      if (!password) {
        newErrors.password = "Veuillez entrer votre mot de passe.";
      } else if (!isPasswordValid) {
        newErrors.password = "Le mot de passe doit faire au moins 6 caractères.";
      } else if (matchedUser && !passwordMatches) {
        newErrors.password = "Mot de passe incorrect.";
      }
    }

    setErrors(newErrors);
  }, [identifiant, password, touched]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTouched({ identifiant: true, password: true });

    if (Object.keys(errors).length === 0) {
      dispatch(login({ usernameOrEmail: identifiant, password }));
      router.push('/accueil');
    }
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
        <h2 className="text-center mb-4 fw-bold" style={{ color: styleRose }} data-aos="fade-down">
          Connexion
        </h2>

        <form onSubmit={handleSubmit}>
          {/* Identifiant */}
          <div className="mb-3" data-aos="fade-up">
            <label className="form-label fw-semibold">Adresse courriel ou nom d’utilisateur</label>
            <input
              type="text"
              className={`form-control ${errors.identifiant ? 'is-invalid' : ''}`}
              value={identifiant}
              onChange={(e) => setIdentifiant(e.target.value)}
              onBlur={() => setTouched((prev) => ({ ...prev, identifiant: true }))}
              placeholder="ex. kenza@gmail.com"
            />
            {errors.identifiant && (
              <div className="text-danger small mt-1">{errors.identifiant}</div>
            )}
          </div>

          {/* Mot de passe */}
          <div className="mb-4" data-aos="fade-up" data-aos-delay="100">
            <label className="form-label fw-semibold">Mot de passe</label>
            <input
              type="password"
              className={`form-control ${errors.password ? 'is-invalid' : ''}`}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onBlur={() => setTouched((prev) => ({ ...prev, password: true }))}
              placeholder="********"
            />
            {errors.password && (
              <div className="text-danger small mt-1">{errors.password}</div>
            )}
          </div>

          <div className="d-grid" data-aos="zoom-in" data-aos-delay="200">
            <button type="submit" className="btn fw-bold text-white" style={{ backgroundColor: styleRose }}>
              Se connecter
            </button>
          </div>
        </form>

        <p className="mt-4 text-center" data-aos="fade-up" data-aos-delay="300">
          <small>
            Vous n’avez pas de compte ?{' '}
            <Link href="/inscription" className="text-decoration-none fw-semibold" style={{ color: styleRose }}>
              Inscrivez-vous
            </Link>
          </small>
        </p>
      </div>
    </div>
  );
}
