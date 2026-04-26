// src/components/SmartDevisForm.tsx
"use client";

import { useMemo, useState } from 'react';

type CommonFields = {
  name: string;
  email: string;
  phone: string;
  city: string;
  message: string;
};

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

  const handleCommonChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setCommon(prev => ({ ...prev, [name]: value }));
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

    if (!common.name.trim() || !common.email.trim() || !common.message.trim()) {
      alert('Merci de remplir au minimum votre nom, email et un message.');
      return;
    }

    setStatus('submitting');

    // ✅ PAYLOAD ALIGNÉ AVEC TON FORM (IMPORTANT)
const payload = {
  name: common.name,
  email: common.email,
  phone: common.phone,
  city: common.city,
  message: common.message,
  projectType,
  role,
  projectKind,
  delay,
  building,
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
        alert("Une erreur est survenue lors de l'envoi du devis.");
        return;
      }

      setStatus('success');
    } catch (err) {
      console.error('Devis fetch error:', err);
      setStatus('idle');
      alert("Impossible de contacter le serveur de devis.");
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
    <form className="smart-devis-form" onSubmit={handleSubmit}>
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
          <input
            name="name"
            className="input"
            placeholder="Nom complet *"
            value={common.name}
            onChange={handleCommonChange}
            required
          />
          <input
            name="phone"
            className="input"
            placeholder="Téléphone"
            value={common.phone}
            onChange={handleCommonChange}
          />
        </div>

        <div className="field-row">
          <input
            name="email"
            type="email"
            className="input"
            placeholder="Email *"
            value={common.email}
            onChange={handleCommonChange}
            required
          />
          <input
            name="city"
            className="input"
            placeholder="Ville / Commune"
            value={common.city}
            onChange={handleCommonChange}
          />
        </div>
      </div>

      {/* Profil & projet */}
      <div className="smart-devis-section">
        <h3>Votre profil & projet</h3>

        <div className="field-row">
          <select
            className="select"
            value={role}
            onChange={e => setRole(e.target.value)}
          >
            <option value="">Vous êtes...</option>
            <option value="particulier">Particulier</option>
            <option value="professionnel">Professionnel</option>
          </select>

          <select
            className="select"
            value={projectKind}
            onChange={e => setProjectKind(e.target.value)}
          >
            <option value="">Projet...</option>
            <option value="neuf">Neuf</option>
            <option value="renovation">Rénovation</option>
          </select>
        </div>

        <div className="field-row">
          <select
            className="select"
            value={delay}
            onChange={e => setDelay(e.target.value)}
          >
            <option value="">Date d'intervention souhaitée</option>
            <option value="urgent">Urgent</option>
            <option value="moins-2">Moins de 2 mois</option>
            <option value="moins-6">Moins de 6 mois</option>
            <option value="plus-6">Plus de 6 mois</option>
            <option value="pas-de-date">Pas de date fixée</option>
          </select>

          <select
            className="select"
            value={building}
            onChange={e => setBuilding(e.target.value)}
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
        <textarea
          name="message"
          className="textarea"
          rows={4}
          required
          placeholder="Précisez les délais souhaités, le style de carrelage, les contraintes (accès, étage, etc.)."
          value={common.message}
          onChange={handleCommonChange}
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
    </form>
  );
}