// src/pages/home/ZoneSection.tsx
import { useNavigate } from 'react-router-dom';

export type ZoneSectionProps = {
  onOpenDevis?: () => void;
};

export function ZoneSection({ onOpenDevis }: ZoneSectionProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (onOpenDevis) {
      onOpenDevis();
    } else {
      navigate('/devis');
    }
  };

  return (
    <section className="zone-section">
      <h2>Zones d’intervention</h2>
      <p>
        Nous intervenons à Manosque, Digne-les-Bains, Aix-en-Provence et dans
        tout le secteur des Alpes-de-Haute-Provence.
      </p>
      <button type="button" onClick={handleClick}>
        Demander un devis pour votre projet
      </button>
    </section>
  );
}
