// src/router/AppRouter.tsx
import { Routes, Route } from "react-router-dom";
import { Layout } from "../components/layout/Layout";
import { HomePage } from "../pages/HomePage";          // ← CORRECT
import { AProposPage } from "../pages/AProposPage";
import { RealisationsPage } from "../pages/RealisationsPage";
import { AvantApresPage } from "../pages/AvantApresPage";
import { ContactPage } from "../pages/ContactPage";
import { DevisPage } from "../pages/devis/page";       // ← comme on vient de le faire

export function AppRouter() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/a-propos" element={<AProposPage />} />
        <Route path="/realisations" element={<RealisationsPage />} />
        <Route path="/avant-apres" element={<AvantApresPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/devis" element={<DevisPage />} />
      </Routes>
    </Layout>
  );
}
