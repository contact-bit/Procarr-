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
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();          // 🔥 bloque le submit HTML
    e.stopPropagation();         // 🔥 empêche comportement natif

    console.log('SUBMIT TRIGGERED'); // debug

    if (!validate()) return;

    setStatus('submitting');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST', // 🔥 IMPORTANT
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      console.log('STATUS:', res.status);

      if (!res.ok) {
        const txt = await res.text();
        console.error('API ERROR:', txt);
        setStatus('idle');
        return;
      }

      setStatus('success');

      // reset form (optionnel)
      setForm({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });

    } catch (err) {
      console.error('FETCH ERROR:', err);
      setStatus('idle');
    }
  };

  const isDisabled = status === 'submitting';

  return (
    <div className="contact-page">
      <section style={{ padding: '0.4rem 0 1.2rem' }}>
        <h1>Contactez Procarré &amp; Fils</h1>
      </section>

      <section className="contact-grid">
        <div className="contact-left">
          {status === 'success' ? (
            <p style={{ color: 'green' }}>
              Message envoyé ✔️
            </p>
          ) : (
            <form onSubmit={handleSubmit} noValidate> {/* 🔥 important */}
              
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Nom*"
              />

              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email*"
              />

              <input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Téléphone"
              />

              <input
                name="subject"
                value={form.subject}
                onChange={handleChange}
                placeholder="Objet"
              />

              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Message*"
              />

              <button type="submit" disabled={isDisabled}>
                {isDisabled ? 'Envoi...' : 'Envoyer'}
              </button>

            </form>
          )}
        </div>
      </section>
    </div>
  );
}