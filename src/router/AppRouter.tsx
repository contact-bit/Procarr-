// src/router/AppRouter.tsx
import { Routes, Route } from 'react-router-dom';
import { Layout } from '../components/layout/Layout';
import { HomePage } from '../pages/HomePage';
import { AProposPage } from '../pages/AProposPage';
import { PrestationsPage } from '../pages/PrestationsPage';
import { RealisationsPage } from '../pages/RealisationsPage';
import { AvantApresPage } from '../pages/AvantApresPage';
import { ContactPage } from '../pages/ContactPage';
import { DevisPage } from '../pages/devis/page';
import { ZoneInterventionPage } from '../pages/ZoneInterventionPage';
import { SolsMursPage } from '../pages/SolsMursPage';
import { SallesBainPage } from '../pages/SallesBainPage';
import { TerrassesPage } from '../pages/TerrassesPage';
import { PreparationSupportsPage } from '../pages/PreparationSupportsPage';
import { ScrollToTop } from './ScrollToTop';

export function AppRouter() {
  return (
    <Layout>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/prestations" element={<PrestationsPage />} />
        <Route path="/realisations" element={<RealisationsPage />} />
        <Route path="/a-propos" element={<AProposPage />} />
        <Route path="/avant-apres" element={<AvantApresPage />} />
        <Route path="/zone-intervention" element={<ZoneInterventionPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/devis" element={<DevisPage />} />

        {/* Sous-pages Prestations */}
        <Route path="/prestations/sols-murs" element={<SolsMursPage />} />
        <Route path="/prestations/salles-de-bain" element={<SallesBainPage />} />
        <Route path="/prestations/terrasses" element={<TerrassesPage />} />
        <Route path="/prestations/preparation-supports" element={<PreparationSupportsPage />} />

        {/* 404 simple */}
        <Route
          path="*"
          element={
            <div style={{ padding: '4rem', textAlign: 'center' }}>
              <h1>404 - Page introuvable</h1>
              <a href="/">Retour à l’accueil</a>
            </div>
          }
        />
      </Routes>
    </Layout>
  );
}
