import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from '../components/layout/Layout';
import { ScrollToTop } from './ScrollToTop';

const HomePage = lazy(() => import('../pages/HomePage').then(module => ({ default: module.HomePage })));
const AProposPage = lazy(() => import('../pages/AProposPage').then(module => ({ default: module.AProposPage })));
const PrestationsPage = lazy(() => import('../pages/PrestationsPage').then(module => ({ default: module.PrestationsPage })));
const RealisationsPage = lazy(() => import('../pages/RealisationsPage').then(module => ({ default: module.RealisationsPage })));
const AvantApresPage = lazy(() => import('../pages/AvantApresPage').then(module => ({ default: module.AvantApresPage })));
const ContactPage = lazy(() => import('../pages/ContactPage').then(module => ({ default: module.ContactPage })));
const DevisPage = lazy(() => import('../pages/devis/page').then(module => ({ default: module.DevisPage })));
const ZoneInterventionPage = lazy(() => import('../pages/ZoneInterventionPage').then(module => ({ default: module.ZoneInterventionPage })));
const SolsMursPage = lazy(() => import('../pages/SolsMursPage').then(module => ({ default: module.SolsMursPage })));
const SallesBainPage = lazy(() => import('../pages/SallesBainPage').then(module => ({ default: module.SallesBainPage })));
const TerrassesPage = lazy(() => import('../pages/TerrassesPage').then(module => ({ default: module.TerrassesPage })));
const PreparationSupportsPage = lazy(() => import('../pages/PreparationSupportsPage').then(module => ({ default: module.PreparationSupportsPage })));
const ActualitesPage = lazy(() => import('../pages/ActualitesPage').then(module => ({ default: module.ActualitesPage })));
const MentionsLegalesPage = lazy(() => import('../pages/MentionsLegalesPage').then(module => ({ default: module.MentionsLegalesPage })));
const PolitiqueConfidentialitePage = lazy(() => import('../pages/PolitiqueConfidentialitePage').then(module => ({ default: module.PolitiqueConfidentialitePage })));

function PageLoadingFallback() {
  return (
    <div className="page-loading" role="status" aria-live="polite">
      Chargement de la page…
    </div>
  );
}

export function AppRouter() {
  return (
    <Layout>
      <ScrollToTop />
      <Suspense fallback={<PageLoadingFallback />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/prestations" element={<PrestationsPage />} />
          <Route path="/realisations" element={<RealisationsPage />} />
          <Route path="/a-propos" element={<AProposPage />} />
          <Route path="/avant-apres" element={<AvantApresPage />} />
          <Route path="/zone-intervention" element={<ZoneInterventionPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/devis" element={<DevisPage />} />

          <Route path="/prestations/sols-murs" element={<SolsMursPage />} />
          <Route path="/prestations/salles-de-bain" element={<SallesBainPage />} />
          <Route path="/prestations/terrasses" element={<TerrassesPage />} />
          <Route path="/prestations/preparation-supports" element={<PreparationSupportsPage />} />

          <Route path="/actualites" element={<ActualitesPage />} />
          <Route path="/mentions-legales" element={<MentionsLegalesPage />} />
          <Route
            path="/politique-de-confidentialite"
            element={<PolitiqueConfidentialitePage />}
          />

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
      </Suspense>
    </Layout>
  );
}
