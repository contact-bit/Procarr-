// src/components/DevisForm.tsx
"use client";
import { useState, useCallback } from 'react';

type FormState = {
  name: string;
  email: string;
  phone: string;
  city: string;
  projectType: string;
  budget: string;
  surface: string; // NOUVEAU
  message: string;
};

type Errors = Partial<Record<keyof FormState, string>>;

type Props = {
  onClose?: () => void;
  apiUrl?: string; // /api/devis ou /api/contact
};

export function DevisForm({ onClose, apiUrl = '/api/devis' }: Props) {
  const [form, setForm] = useState<FormState>({
    name: '', email: '', phone: '', city: '',
    projectType: '', budget: '', surface: '', message: ''
  });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleChange = useCallback((
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: undefined }));
  }, []);

  const validate = (): boolean => {
    const newErrors: Errors = {};

    if (!form.name.trim()) newErrors.name = 'Nom requis.';
    if (!form.email.trim()) newErrors.email = 'Email requis.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s]+$/.test(form.email)) newErrors.email = 'Email invalide.';
    if (!form.message.trim()) newErrors.message = 'Décrivez votre projet.';
    if (!form.projectType) newErrors.projectType = 'Type de projet requis.';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('submitting');
    try {
      const res = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error('Erreur envoi');
      setStatus('success');
    } catch {
      setStatus('idle');
    }
  };

  const isDisabled = status === 'submitting';

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center p-4 z-50">
      <div className="card max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="h2">Devis gratuit</h2>
          {onClose && (
            <button onClick={onClose} className="text-2xl p-2 hover:bg-gray-100 rounded-full">
              ×
            </button>
          )}
        </div>

        {status === 'success' ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              ✓
            </div>
            <p className="text-green-700 mb-4">Demande envoyée !</p>
            <p className="text-gray-600 mb-6">Nous vous contactons sous 24h pour votre projet.</p>
            <button onClick={onClose} className="btn btn-primary w-full">Fermer</button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input name="name" placeholder="Nom complet *" value={form.name} onChange={handleChange}
                className="input w-full" required disabled={isDisabled} />
              {errors.name && <p className="error">{errors.name}</p>}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <input name="phone" placeholder="01 23 45 67 89" value={form.phone} onChange={handleChange}
                className="input" disabled={isDisabled} />
              <input name="city" placeholder="Ville" value={form.city} onChange={handleChange}
                className="input" disabled={isDisabled} />
            </div>

            <input name="email" type="email" placeholder="email@exemple.fr *" value={form.email} onChange={handleChange}
              className="input w-full" disabled={isDisabled} />

            <select name="projectType" value={form.projectType} onChange={handleChange}
              className="select w-full" disabled={isDisabled} required>
              <option value="">Type de projet *</option>
              <option value="salle-de-bain">🛁 Salle de bain</option>
              <option value="cuisine">🍳 Cuisine</option>
              <option value="terrasse">🌞 Terrasse / Piscine</option>
              <option value="sol">🏠 Sol pièce de vie</option>
              <option value="maconnerie">🔨 Maçonnerie</option>
              <option value="autre">Autres</option>
            </select>

            <div className="grid grid-cols-2 gap-4">
              <select name="budget" value={form.budget} onChange={handleChange} className="select" disabled={isDisabled}>
                <option value="">Budget</option>
                <option value="0-5000">0-5k€</option>
                <option value="5000-10000">5-10k€</option>
                <option value="10000+">10k€+</option>
              </select>
              <input name="surface" placeholder="Surface m²" type="number" value={form.surface} onChange={handleChange}
                className="input" disabled={isDisabled} />
            </div>

            <textarea name="message" placeholder="Détails projet (surface, délais, style souhaité...) *" 
              value={form.message} onChange={handleChange} rows={4} className="textarea w-full" 
              disabled={isDisabled} required />

            <button type="submit" disabled={isDisabled} className="btn btn-primary w-full">
              {isDisabled ? 'Envoi...' : 'Obtenir mon devis gratuit'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
