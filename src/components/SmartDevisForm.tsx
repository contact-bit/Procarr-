// src/components/SmartDevisForm.tsx
import { useMemo, useState } from 'react';

type CommonFields = {
  name: string;
  email: string;
  phone: string;
  city: string;
  message: string;
};

type InteriorFields = {
  pieceType: string;
  surface: string;
  solType: string;
};

type ExteriorFields = {
  supportType: string;
  surface: string;
  exposure: string;
};

type BathroomFields = {
  hasWalkInShower: string;
  wallsSurface: string;
  floorSurface: string;
  waterproofing: string;
};

type KitchenFields = {
  credenceLength: string;
  floorSurface: string;
  furnitureState: string;
};

type RenovFields = {
  rooms: string;
  globalSurface: string;
  structuralChanges: string;
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

  const [role, setRole] = useState(''); // particulier / pro
  const [projectKind, setProjectKind] = useState(''); // neuf / rénovation
  const [delay, setDelay] = useState(''); // urgent / 2m / 6m...
  const [building, setBuilding] = useState(''); // maison / appart...

  const [interior, setInterior] = useState<InteriorFields>({
    pieceType: '',
    surface: '',
    solType: '',
  });

  const [exterior, setExterior] = useState<ExteriorFields>({
    supportType: '',
    surface: '',
    exposure: '',
  });

  const [bathroom, setBathroom] = useState<BathroomFields>({
    hasWalkInShower: '',
    wallsSurface: '',
    floorSurface: '',
    waterproofing: '',
  });

  const [kitchen, setKitchen] = useState<KitchenFields>({
    credenceLength: '',
    floorSurface: '',
    furnitureState: '',
  });

  const [renov, setRenov] = useState<RenovFields>({
    rooms: '',
    globalSurface: '',
    structuralChanges: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleCommonChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setCommon(prev => ({ ...prev, [name]: value }));
  };

  // Progression ludique (0–100%)
  const progress = useMemo(() => {
    let filled = 0;
    if (common.name) filled++;
    if (common.email) filled++;
    if (common.city) filled++;
    if (role) filled++;
    if (projectKind) filled++;

    if (projectType === 'interieur') {
      if (interior.pieceType) filled++;
      if (interior.surface) filled++;
    } else if (projectType === 'exterieur') {
      if (exterior.surface) filled++;
      if (exterior.supportType) filled++;
    } else if (projectType === 'sdb') {
      if (bathroom.floorSurface) filled++;
      if (bathroom.wallsSurface) filled++;
    } else if (projectType === 'cuisine') {
      if (kitchen.credenceLength) filled++;
      if (kitchen.floorSurface) filled++;
    } else if (projectType === 'renov') {
      if (renov.rooms) filled++;
      if (renov.globalSurface) filled++;
    }

    const pct = Math.min(100, (filled / 7) * 100);
    return pct;
  }, [
    common,
    role,
    projectKind,
    interior,
    exterior,
    bathroom,
    kitchen,
    renov,
    projectType,
  ]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === 'submitting') return;

    setStatus('submitting');

    const payload = {
      projectType,
      common,
      meta: {
        role,         // particulier / professionnel
        projectKind,  // neuf / rénovation
        delay,        // urgent / 2m / 6m / ...
        building,     // maison / appart / bureau...
      },
      interior: projectType === 'interieur' ? interior : undefined,
      exterior: projectType === 'exterieur' ? exterior : undefined,
      bathroom: projectType === 'sdb' ? bathroom : undefined,
      kitchen: projectType === 'cuisine' ? kitchen : undefined,
      renov: projectType === 'renov' ? renov : undefined,
    };

    try {
      await fetch('/api/devis', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      setStatus('success');
    } catch {
      setStatus('idle');
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
      {/* Barre de progression + badges */}
      <div className="smart-devis-progress">
        <div
          className="smart-devis-progress-bar"
          style={{ width: `${progress}%` }}
        />
      </div>

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

      {/* Profil & type de projet (inspiration concurrent) */}
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

      {/* Bloc spécifique selon le domaine sélectionné */}
      {projectType === 'interieur' && (
        <div className="smart-devis-section">
          <h3>Carrelage intérieur</h3>
          <div className="field-row">
            <input
              className="input"
              placeholder="Pièce (séjour, couloir, chambre...)"
              value={interior.pieceType}
              onChange={e =>
                setInterior(p => ({ ...p, pieceType: e.target.value }))
              }
            />
            <input
              className="input"
              placeholder="Surface approximative (m²)"
              value={interior.surface}
              onChange={e =>
                setInterior(p => ({ ...p, surface: e.target.value }))
              }
            />
          </div>
          <input
            className="input"
            placeholder="Sol actuel (parquet, ancien carrelage, chape...)"
            value={interior.solType}
            onChange={e =>
              setInterior(p => ({ ...p, solType: e.target.value }))
            }
          />
        </div>
      )}

      {projectType === 'exterieur' && (
        <div className="smart-devis-section">
          <h3>Terrasse / extérieur</h3>
          <div className="field-row">
            <input
              className="input"
              placeholder="Surface approximative (m²)"
              value={exterior.surface}
              onChange={e =>
                setExterior(p => ({ ...p, surface: e.target.value }))
              }
            />
            <input
              className="input"
              placeholder="Exposition (plein sud, ombragé...)"
              value={exterior.exposure}
              onChange={e =>
                setExterior(p => ({ ...p, exposure: e.target.value }))
              }
            />
          </div>
          <input
            className="input"
            placeholder="Support actuel (dalle béton, terre, ancien carrelage...)"
            value={exterior.supportType}
            onChange={e =>
              setExterior(p => ({ ...p, supportType: e.target.value }))
            }
          />
        </div>
      )}

      {projectType === 'sdb' && (
        <div className="smart-devis-section">
          <h3>Salle de bain</h3>
          <div className="field-row">
            <select
              className="select"
              value={bathroom.hasWalkInShower}
              onChange={e =>
                setBathroom(p => ({ ...p, hasWalkInShower: e.target.value }))
              }
            >
              <option value="">Douche à l’italienne ?</option>
              <option value="oui">Oui</option>
              <option value="non">Non</option>
            </select>
            <input
              className="input"
              placeholder="Surface sol (m²)"
              value={bathroom.floorSurface}
              onChange={e =>
                setBathroom(p => ({ ...p, floorSurface: e.target.value }))
              }
            />
          </div>
          <div className="field-row">
            <input
              className="input"
              placeholder="Surface murs carrelés (m²)"
              value={bathroom.wallsSurface}
              onChange={e =>
                setBathroom(p => ({ ...p, wallsSurface: e.target.value }))
              }
            />
            <select
              className="select"
              value={bathroom.waterproofing}
              onChange={e =>
                setBathroom(p => ({ ...p, waterproofing: e.target.value }))
              }
            >
              <option value="">Étanchéité (SPEC, etc.)</option>
              <option value="a-creer">À créer</option>
              <option value="a-reprendre">À reprendre</option>
              <option value="ok">Déjà en place</option>
            </select>
          </div>
        </div>
      )}

      {projectType === 'cuisine' && (
        <div className="smart-devis-section">
          <h3>Cuisine</h3>
          <div className="field-row">
            <input
              className="input"
              placeholder="Longueur crédence (m)"
              value={kitchen.credenceLength}
              onChange={e =>
                setKitchen(p => ({ ...p, credenceLength: e.target.value }))
              }
            />
            <input
              className="input"
              placeholder="Surface sol (m²)"
              value={kitchen.floorSurface}
              onChange={e =>
                setKitchen(p => ({ ...p, floorSurface: e.target.value }))
              }
            />
          </div>
          <select
            className="select"
            value={kitchen.furnitureState}
            onChange={e =>
              setKitchen(p => ({ ...p, furnitureState: e.target.value }))
            }
          >
            <option value="">Meubles de cuisine</option>
            <option value="existants">Déjà posés</option>
            <option value="a-poser">À poser</option>
            <option value="a-changer">À changer</option>
          </select>
        </div>
      )}

      {projectType === 'renov' && (
        <div className="smart-devis-section">
          <h3>Rénovation complète</h3>
          <div className="field-row">
            <input
              className="input"
              placeholder="Pièces concernées (séjour, cuisine, chambres...)"
              value={renov.rooms}
              onChange={e =>
                setRenov(p => ({ ...p, rooms: e.target.value }))
              }
            />
            <input
              className="input"
              placeholder="Surface totale approximative (m²)"
              value={renov.globalSurface}
              onChange={e =>
                setRenov(p => ({ ...p, globalSurface: e.target.value }))
              }
            />
          </div>
          <textarea
            className="textarea"
            rows={3}
            placeholder="Ouvertures de cloisons, création de pièces, reprises de sols, etc."
            value={renov.structuralChanges}
            onChange={e =>
              setRenov(p => ({ ...p, structuralChanges: e.target.value }))
            }
          />
        </div>
      )}

      {/* Message libre */}
      <div className="smart-devis-section">
        <h3>Détails complémentaires</h3>
        <textarea
          name="message"
          className="textarea"
          rows={4}
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
        {status === 'submitting' ? 'Envoi en cours...' : 'Envoyer ma demande de devis'}
      </button>
    </form>
  );
}
