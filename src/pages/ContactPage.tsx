import { useState } from 'react';
import { Link } from 'react-router-dom';

type ContactFormState = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

type ContactErrors = Partial<Record<keyof ContactFormState, string>>;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_PATTERN = /^[0-9\s+().-]{6,20}$/;

function validateField(field: keyof ContactFormState, rawValue: string): string | undefined {
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
      if (!value) return 'Merci de préciser votre demande.';
      if (value.length < 5) return 'Votre message doit contenir au moins 5 caractères.';
      return undefined;
    case 'subject':
      return undefined;
  }
}

export function ContactPage() {
  const [form, setForm] = useState<ContactFormState>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [website, setWebsite] = useState('');
  const [errors, setErrors] = useState<ContactErrors>({});
  const [formError, setFormError] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const field = e.target.name as keyof ContactFormState;
    const { value } = e.target;
    setForm(previous => ({ ...previous, [field]: value }));
    setErrors(previous => ({ ...previous, [field]: undefined }));
    setFormError('');
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const field = e.target.name as keyof ContactFormState;
    const error = validateField(field, e.target.value);
    setErrors(previous => ({ ...previous, [field]: error }));
  };

  const validate = (): ContactErrors => {
    const nextErrors: ContactErrors = {};
    (Object.keys(form) as Array<keyof ContactFormState>).forEach(field => {
      const error = validateField(field, form[field]);
      if (error) nextErrors[field] = error;
    });
    setErrors(nextErrors);
    return nextErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === 'submitting') return;

    const nextErrors = validate();
    if (Object.keys(nextErrors).length > 0) {
      setFormError('Vérifiez les champs indiqués avant d’envoyer votre message.');
      return;
    }

    setFormError('');
    setStatus('submitting');

    const payload = {
      name: form.name.trim(),
      email: form.email.trim(),
      phone: form.phone.trim(),
      subject: form.subject.trim(),
      message: form.message.trim(),
      website,
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await res.json().catch(() => null);

      if (!res.ok) {
        setStatus('idle');
        if (data?.fieldErrors && typeof data.fieldErrors === 'object') {
          setErrors(data.fieldErrors as ContactErrors);
        }
        setFormError(
          typeof data?.error === 'string'
            ? data.error
            : 'Le message n’a pas pu être envoyé. Merci de vérifier vos informations.',
        );
        return;
      }

      setStatus('success');
    } catch (error) {
      console.error('Contact fetch error:', error);
      setStatus('idle');
      setFormError('Impossible de contacter le serveur. Vérifiez votre connexion puis réessayez.');
    }
  };

  const isDisabled = status === 'submitting';

  return (
    <div className="contact-page" style={{ margin: 0, padding: 0 }}>
      <section style={{ padding: '0.4rem 0 1.2rem' }}>
        <h1 style={{ fontSize: '2rem', margin: '0 0 0.6rem 0' }}>
          Contactez Procarré &amp; Fils
        </h1>
        <p style={{ maxWidth: '36rem', color: '#4b5563', margin: 0 }}>
          Une question, un projet de carrelage ou de rénovation ? Envoyez-nous un message et nous
          reviendrons vers vous rapidement pour en parler.
        </p>
      </section>

      <section className="contact-grid">
        <div className="contact-left">
          {status === 'success' ? (
            <div className="form-success" role="status">
              <p className="form-success-title">Merci, votre message a bien été envoyé.</p>
              <p>Nous vous recontacterons dans les meilleurs délais.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form" noValidate>
              <div className="form-field">
                <label htmlFor="contact-name">Nom complet <span aria-hidden="true">*</span></label>
                <input
                  id="contact-name"
                  name="name"
                  autoComplete="name"
                  placeholder="Ex. Denis Dussert"
                  value={form.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  minLength={2}
                  maxLength={80}
                  required
                  disabled={isDisabled}
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? 'contact-name-error' : undefined}
                  className="input"
                />
                {errors.name && <p id="contact-name-error" className="form-field-error">{errors.name}</p>}
              </div>

              <div className="form-field">
                <label htmlFor="contact-email">Adresse email <span aria-hidden="true">*</span></label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  inputMode="email"
                  autoComplete="email"
                  placeholder="nom@exemple.fr"
                  value={form.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  maxLength={120}
                  required
                  disabled={isDisabled}
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? 'contact-email-error' : undefined}
                  className="input"
                />
                {errors.email && <p id="contact-email-error" className="form-field-error">{errors.email}</p>}
              </div>

              <div className="form-field">
                <label htmlFor="contact-phone">Téléphone <span className="form-optional">(facultatif)</span></label>
                <input
                  id="contact-phone"
                  name="phone"
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel"
                  placeholder="06 12 34 56 78"
                  value={form.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  maxLength={20}
                  disabled={isDisabled}
                  aria-invalid={Boolean(errors.phone)}
                  aria-describedby={errors.phone ? 'contact-phone-error' : undefined}
                  className="input"
                />
                {errors.phone && <p id="contact-phone-error" className="form-field-error">{errors.phone}</p>}
              </div>

              <div className="form-field">
                <label htmlFor="contact-subject">Objet <span className="form-optional">(facultatif)</span></label>
                <input
                  id="contact-subject"
                  name="subject"
                  placeholder="Ex. Rénovation d’une salle de bain"
                  value={form.subject}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  maxLength={120}
                  disabled={isDisabled}
                  className="input"
                />
              </div>

              <div className="form-field">
                <label htmlFor="contact-message">Votre message <span aria-hidden="true">*</span></label>
                <textarea
                  id="contact-message"
                  name="message"
                  placeholder="Décrivez votre besoin, le lieu et le délai souhaité."
                  value={form.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  rows={5}
                  minLength={5}
                  maxLength={2000}
                  required
                  disabled={isDisabled}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby="contact-message-help contact-message-error"
                  className="textarea"
                />
                <div id="contact-message-help" className="form-field-meta">
                  <span>5 caractères minimum</span><span>{form.message.length}/2000</span>
                </div>
                {errors.message && <p id="contact-message-error" className="form-field-error">{errors.message}</p>}
              </div>

              <div className="form-honeypot" aria-hidden="true">
                <label htmlFor="contact-website">Site internet</label>
                <input
                  id="contact-website"
                  name="website"
                  value={website}
                  onChange={e => setWebsite(e.target.value)}
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              {formError && <p className="form-submit-error" role="alert">{formError}</p>}

              <button type="submit" disabled={isDisabled} className="btn btn-primary">
                {isDisabled ? 'Envoi en cours…' : 'Envoyer mon message'}
              </button>
              <p className="form-required-note"><span aria-hidden="true">*</span> Champs obligatoires</p>
              <p className="form-privacy-note">
                PROCARRE utilise vos informations uniquement pour répondre à votre demande.{' '}
                <Link to="/politique-de-confidentialite">En savoir plus sur vos données.</Link>
              </p>
            </form>
          )}
        </div>

        <div className="contact-right">
          <h2 style={{ fontSize: '1.2rem', margin: '0 0 0.6rem 0' }}>Coordonnées</h2>
          <p style={{ margin: 0 }}>Procarré &amp; Fils<br />04100 Manosque</p>
          <p style={{ margin: '0.6rem 0' }}>
            Téléphone : <strong>06 03 12 30 65</strong><br />
            Email : <strong>procarre.dussert@wanadoo.fr</strong>
          </p>
          <p style={{ margin: 0 }}>
            Intervention à Manosque et en Alpes-de-Haute-Provence pour vos projets de carrelage,
            rénovation et petits travaux de maçonnerie.
          </p>
        </div>
      </section>
    </div>
  );
}
