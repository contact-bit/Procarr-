// src/components/SmartDevisForm.tsx
"use client";

import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';

type CommonFields = {
  name: string;
  email: string;
  phone: string;
  city: string;
  message: string;
};

type DevisErrors = Partial<Record<keyof CommonFields, string>>;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_PATTERN = /^[0-9\s+().-]{6,20}$/;

function validateCommonField(field: keyof CommonFields, rawValue: string): string | undefined {
  const value = rawValue.trim();

  switch (field) {
    case 'name':
      if (!value) return 'Merci d’indiquer votre nom.';
      if (value.length < 2) return 'Votre nom doit contenir au moins 2 caractères.';
      return undefined;
    case 'email':
      if (!value) return 'Merci d’indiquer votre email.';
      if (!EMAIL_PATTERN.test(value)) return 'Saisissez une adresse email valide.';
      return undefined;
    case 'phone':
      if (value && !PHONE_PATTERN.test(value)) {
        return 'Utilisez uniquement des chiffres, espaces, parenthèses, +, point ou tiret.';
      }
      return undefined;
    case 'message':
      if (!value) return 'Merci de décrire votre projet.';
      if (value.length < 5) return 'Ajoutez quelques détails (5 caractères minimum).';
      return undefined;
    case 'city':
      return undefined;
  }
}

type SmartDevisFormProps = {
  projectType: 'interieur' | 'exterieur' | 'sdb' | 'cuisine' | 'renov';
};

export function SmartDevisForm({ projectType }: SmartDevisFormProps) {
  const [common, setCommon] = useState<CommonFields>({
    name: '',
    email: '',
    phone: '',
    city: '',
    message: '',
  });

  const [role, setRole] = useState('');
  const [projectKind, setProjectKind] = useState('');
  const [delay, setDelay] = useState('');
  const [building, setBuilding] = useState('');

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [errors, setErrors] = useState<DevisErrors>({});
  const [website, setWebsite] = useState('');

  const handleCommonChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setCommon(prev => ({ ...prev, [name]: value }));
    setErrors(previous => ({ ...previous, [name]: undefined }));
    setErrorMessage('');
  };

  const handleCommonBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const field = e.target.name as keyof CommonFields;
    const error = validateCommonField(field, e.target.value);
    setErrors(previous => ({ ...previous, [field]: error }));
  };

  // ✅ progression simple (cohérente avec ton vrai form)
  const progress = useMemo(() => {
    let filled = 0;
    if (common.name) filled++;
    if (common.email) filled++;
    if (common.city) filled++;
    if (role) filled++;
    if (projectKind) filled++;
    if (delay) filled++;
    if (building) filled++;

    return Math.min(100, (filled / 7) * 100);
  }, [common, role, projectKind, delay, building]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === 'submitting') return;

    const name = common.name.trim();
    const email = common.email.trim();
    const phone = common.phone.trim();
    const message = common.message.trim();

    const nextErrors: DevisErrors = {};
    (Object.keys(common) as Array<keyof CommonFields>).forEach(field => {
      const error = validateCommonField(field, common[field]);
      if (error) nextErrors[field] = error;
    });

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setErrorMessage('Vérifiez les champs indiqués avant d’envoyer votre demande.');
      return;
    }

    setErrorMessage('');
    setStatus('submitting');

    // ✅ PAYLOAD ALIGNÉ AVEC TON FORM (IMPORTANT)
const payload = {
  name,
  email,
  phone,
  city: common.city.trim(),
  message,
  projectType,
  role,
  projectKind,
  delay,
  building,
  website,
};

    try {
      const res = await fetch('/api/devis', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await res.json().catch(() => null);

      if (!res.ok) {
        console.error('Devis API error:', data);
        setStatus('idle');
        if (data?.fieldErrors && typeof data.fieldErrors === 'object') {
          setErrors(data.fieldErrors as DevisErrors);
        }
        setErrorMessage(
          typeof data?.error === 'string'
            ? data.error
            : "Une erreur est survenue lors de l'envoi du devis.",
        );
        return;
      }

      setStatus('success');
    } catch (err) {
      console.error('Devis fetch error:', err);
      setStatus('idle');
      setErrorMessage('Impossible de contacter le serveur de devis. Merci de réessayer.');
    }
  };

  if (status === 'success') {
    return (
      <div className="smart-devis-success">
        <div className="smart-devis-success-icon">✓</div>
        <p className="smart-devis-success-title">Demande envoyée</p>
        <p className="smart-devis-success-text">
          Nous revenons vers vous rapidement avec un devis adapté à votre projet.
        </p>
      </div>
    );
  }

  return (
    <form className="smart-devis-form" onSubmit={handleSubmit} noValidate>
      {/* Barre de progression */}
      <div className="smart-devis-progress">
        <div
          className="smart-devis-progress-bar"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Badges */}
      <div className="smart-devis-badges">
        <span className="smart-devis-badge">
          Projet&nbsp;:&nbsp;{projectType}
        </span>
        <span className="smart-devis-badge">
          Devis gratuit &amp; sans engagement
        </span>
        <span className="smart-devis-badge">
          Intervention autour de Manosque (04)
        </span>
      </div>

      {/* Infos communes */}
      <div className="smart-devis-section">
        <h3>Vos coordonnées</h3>

        <div className="field-row">
          <div className="form-field">
            <label htmlFor="devis-name">Nom complet <span aria-hidden="true">*</span></label>
            <input
              id="devis-name"
              name="name"
              className="input"
              autoComplete="name"
              placeholder="Ex. Denis Dussert"
              value={common.name}
              onChange={handleCommonChange}
              onBlur={handleCommonBlur}
              minLength={2}
              maxLength={80}
              required
              disabled={status === 'submitting'}
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? 'devis-name-error' : undefined}
            />
            {errors.name && <p id="devis-name-error" className="form-field-error">{errors.name}</p>}
          </div>
          <div className="form-field">
            <label htmlFor="devis-phone">Téléphone <span className="form-optional">(facultatif)</span></label>
            <input
              id="devis-phone"
              name="phone"
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              className="input"
              placeholder="06 12 34 56 78"
              value={common.phone}
              onChange={handleCommonChange}
              onBlur={handleCommonBlur}
              maxLength={20}
              disabled={status === 'submitting'}
              aria-invalid={Boolean(errors.phone)}
              aria-describedby={errors.phone ? 'devis-phone-error' : undefined}
            />
            {errors.phone && <p id="devis-phone-error" className="form-field-error">{errors.phone}</p>}
          </div>
        </div>

        <div className="field-row">
          <div className="form-field">
            <label htmlFor="devis-email">Adresse email <span aria-hidden="true">*</span></label>
            <input
              id="devis-email"
              name="email"
              type="email"
              inputMode="email"
              autoComplete="email"
              className="input"
              placeholder="nom@exemple.fr"
              value={common.email}
              onChange={handleCommonChange}
              onBlur={handleCommonBlur}
              maxLength={120}
              required
              disabled={status === 'submitting'}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? 'devis-email-error' : undefined}
            />
            {errors.email && <p id="devis-email-error" className="form-field-error">{errors.email}</p>}
          </div>
          <div className="form-field">
            <label htmlFor="devis-city">Ville / commune <span className="form-optional">(facultatif)</span></label>
            <input
              id="devis-city"
              name="city"
              className="input"
              autoComplete="address-level2"
              placeholder="Ex. Manosque"
              value={common.city}
              onChange={handleCommonChange}
              onBlur={handleCommonBlur}
              maxLength={100}
              disabled={status === 'submitting'}
            />
          </div>
        </div>
      </div>

      {/* Profil & projet */}
      <div className="smart-devis-section">
        <h3>Votre profil & projet</h3>

        <div className="field-row">
          <select
            aria-label="Votre profil"
            className="select"
            value={role}
            onChange={e => setRole(e.target.value)}
            disabled={status === 'submitting'}
          >
            <option value="">Vous êtes...</option>
            <option value="particulier">Particulier</option>
            <option value="professionnel">Professionnel</option>
          </select>

          <select
            aria-label="Nature du projet"
            className="select"
            value={projectKind}
            onChange={e => setProjectKind(e.target.value)}
            disabled={status === 'submitting'}
          >
            <option value="">Projet...</option>
            <option value="neuf">Neuf</option>
            <option value="renovation">Rénovation</option>
          </select>
        </div>

        <div className="field-row">
          <select
            aria-label="Date d’intervention souhaitée"
            className="select"
            value={delay}
            onChange={e => setDelay(e.target.value)}
            disabled={status === 'submitting'}
          >
            <option value="">Date d'intervention souhaitée</option>
            <option value="urgent">Urgent</option>
            <option value="moins-2">Moins de 2 mois</option>
            <option value="moins-6">Moins de 6 mois</option>
            <option value="plus-6">Plus de 6 mois</option>
            <option value="pas-de-date">Pas de date fixée</option>
          </select>

          <select
            aria-label="Type de bâtiment"
            className="select"
            value={building}
            onChange={e => setBuilding(e.target.value)}
            disabled={status === 'submitting'}
          >
            <option value="">Type de bâtiment</option>
            <option value="maison">Maison individuelle</option>
            <option value="appartement">Appartement</option>
            <option value="bureau">Bureau / commerce</option>
            <option value="autre">Autre</option>
          </select>
        </div>
      </div>

      {/* Message */}
      <div className="smart-devis-section">
        <h3>Détails complémentaires</h3>
        <label htmlFor="devis-message" className="smart-devis-message-label">
          Description du projet <span aria-hidden="true">*</span>
        </label>
        <textarea
          id="devis-message"
          name="message"
          className="textarea"
          rows={4}
          required
          placeholder="Précisez les délais souhaités, le style de carrelage, les contraintes (accès, étage, etc.)."
          value={common.message}
          onChange={handleCommonChange}
          onBlur={handleCommonBlur}
          minLength={5}
          maxLength={2000}
          disabled={status === 'submitting'}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={
            errors.message ? 'devis-message-help devis-message-error' : 'devis-message-help'
          }
        />
        <div id="devis-message-help" className="form-field-meta">
          <span>5 caractères minimum</span><span>{common.message.length}/2000</span>
        </div>
        {errors.message && <p id="devis-message-error" className="form-field-error">{errors.message}</p>}
      </div>

      <div className="form-honeypot" aria-hidden="true">
        <label htmlFor="devis-website">Site internet</label>
        <input
          id="devis-website"
          name="website"
          value={website}
          onChange={e => setWebsite(e.target.value)}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <button
        type="submit"
        className="btn btn-primary smart-devis-submit"
        disabled={status === 'submitting'}
      >
        {status === 'submitting'
          ? 'Envoi en cours...'
          : 'Envoyer ma demande de devis'}
      </button>
      {errorMessage && (
        <p className="smart-devis-error" role="alert">
          {errorMessage}
        </p>
      )}
      <p className="form-required-note"><span aria-hidden="true">*</span> Champs obligatoires</p>
      <p className="form-privacy-note">
        PROCARRE traite vos informations afin d’étudier votre projet, vous recontacter et préparer
        un devis. Les champs marqués d’un astérisque sont nécessaires au traitement de la demande.{' '}
        <Link to="/politique-de-confidentialite">Consulter notre politique de confidentialité.</Link>
      </p>
    </form>
  );
}
