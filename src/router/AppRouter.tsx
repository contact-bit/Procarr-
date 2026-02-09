import { Routes, Route } from 'react-router-dom';
import { Layout } from '../components/layout/Layout';
import { HomePage } from '../pages/HomePage';
import { AProposPage } from '../pages/AProposPage';
import { RealisationsPage } from '../pages/RealisationsPage';
import { AvantApresPage } from '../pages/AvantApresPage';
import { ContactPage } from '../pages/ContactPage';

export function AppRouter() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/a-propos" element={<AProposPage />} />
        <Route path="/realisations" element={<RealisationsPage />} />
        <Route path="/avant-apres" element={<AvantApresPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Layout>
  );
}
