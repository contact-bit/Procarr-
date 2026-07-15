// src/components/layout/Layout.tsx
import type { ReactNode } from 'react';
// import { ConstructionBanner } from './ConstructionBanner';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { CookieConsentManager } from '../../consent/CookieConsentManager';

type LayoutProps = {
  children: ReactNode;
};

export function Layout({ children }: LayoutProps) {
  return (
    <div className="app">
      {/* <ConstructionBanner /> */}
      <Navbar />
      <main>{children}</main>
      <Footer />
      <CookieConsentManager />
    </div>
  );
}
