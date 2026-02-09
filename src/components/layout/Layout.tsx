// src/components/layout/Layout.tsx
import type { ReactNode } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

type LayoutProps = {
  children: ReactNode;
};

export function Layout({ children }: LayoutProps) {
  return (
    <div className="app">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
