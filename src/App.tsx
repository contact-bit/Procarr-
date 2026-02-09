// src/App.tsx
import { AppRouter } from './router/AppRouter';
import { GlowBackground } from './components/GlowBackground';

export function App() {
  return (
    <div className="app">
      <GlowBackground />
      <AppRouter />
    </div>
  );
}
