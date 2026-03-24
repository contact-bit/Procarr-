// src/pages/ContactPage.tsx
import { useState } from 'react';

type ContactFormState = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

type ContactErrors = Partial<Record<keyof ContactFormState, string>>;

export function ContactPage() {
  const [form, setForm] = useState<ContactFormState>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<ContactErrors>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>(
    'idle',
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: undefined }));
  };

  const validate = (): boolean => {
    const newErrors: ContactErrors = {};

    if (!form.name.trim()) {
      newErrors.name = 'Merci d’indiquer votre nom.';
    }

    if (!form.email.trim()) {
      newErrors.email = 'Merci d’indiquer votre email.';
    } else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) {
      newErrors.email = 'Format d’email invalide.';
    }

    if (!form.message.trim()) {
      newErrors.message = 'Merci de préciser votre demande.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('submitting');

    try {
      const res = await fetch('http://localhost:3001/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        setStatus('idle');
        return;
      }

      setStatus('success');
    } catch (err) {
      console.error(err);
      setStatus('idle');
    }
  };

  const isDisabled = status === 'submitting';

  return (
    <div className="contact-page" style={{ margin: 0, padding: 0 }}>
      {/* Intro */}
      <section style={{ padding: '0.4rem 0 1.2rem' }}>
        <h1 style={{ fontSize: '2rem', margin: '0 0 0.6rem 0' }}>
          Contactez Procarré &amp; Fils
        </h1>

        <p style={{ maxWidth: '36rem', color: '#4b5563', margin: 0 }}>
          Une question, un projet de carrelage ou de rénovation ? Envoyez-nous
          un message et nous reviendrons vers vous rapidement pour en parler.
        </p>
      </section>

      {/* Grille contact */}
      <section className="contact-grid">
        {/* Formulaire */}
        <div className="contact-left">
          {status === 'success' ? (
            <div>
              <p style={{ color: '#16a34a', margin: '0 0 0.6rem 0' }}>
                Merci, votre message a bien été envoyé.
              </p>
              <p style={{ fontSize: '0.9rem', color: '#4b5563', margin: 0 }}>
                Nous vous recontacterons dans les meilleurs délais.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form">
              <div>
                <input
                  name="name"
                  placeholder="Nom complet*"
                  value={form.name}
                  onChange={handleChange}
                  maxLength={80}
                  className="input"
                />
                {errors.name && (
                  <p style={{ color: '#b91c1c', fontSize: '0.8rem', margin: 0 }}>
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <input
                  name="email"
                  type="email"
                  placeholder="Email*"
                  value={form.email}
                  onChange={handleChange}
                  maxLength={120}
                  className="input"
                />
                {errors.email && (
                  <p style={{ color: '#b91c1c', fontSize: '0.8rem', margin: 0 }}>
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <input
                  name="phone"
                  placeholder="Téléphone"
                  value={form.phone}
                  onChange={handleChange}
                  maxLength={25}
                  className="input"
                />
              </div>

              <div>
                <input
                  name="subject"
                  placeholder="Objet de votre demande"
                  value={form.subject}
                  onChange={handleChange}
                  maxLength={120}
                  className="input"
                />
              </div>

              <div>
                <textarea
                  name="message"
                  placeholder="Votre message*"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  maxLength={2000}
                  className="textarea"
                />
                {errors.message && (
                  <p style={{ color: '#b91c1c', fontSize: '0.8rem', margin: 0 }}>
                    {errors.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isDisabled}
                className="btn btn-primary"
              >
                {status === 'submitting'
                  ? 'Envoi en cours...'
                  : 'Envoyer mon message'}
              </button>
            </form>
          )}
        </div>

        {/* Coordonnées */}
        <div className="contact-right">
          <h2 style={{ fontSize: '1.2rem', margin: '0 0 0.6rem 0' }}>
            Coordonnées
          </h2>

          <p style={{ margin: 0 }}>
            Procarré &amp; Fils
            <br />
            04100 Manosque
          </p>

          <p style={{ margin: '0.6rem 0' }}>
            Téléphone : <strong>à compléter</strong>
            <br />
            Email : <strong>à compléter</strong>
          </p>

          <p style={{ margin: 0 }}>
            Intervention à Manosque et en Alpes-de-Haute-Provence pour vos
            projets de carrelage, rénovation et petits travaux de maçonnerie.
          </p>
        </div>
      </section>
    </div>
  );
}