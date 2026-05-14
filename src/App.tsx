import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar, Footer } from './components/layout';
import { Home, ProjectDetail } from './pages';
import { CursorGlow, ThemeToggle } from './components/ui';
import { FloatingChat } from './components/chat';
import { useFavicon } from './hooks';

function App() {
  // Dynamically creates a round favicon from the profile photo
  useFavicon('/assets/profile.jpg');

  return (
    <Router>
      <div className="min-h-screen relative">
        <CursorGlow />
        <ThemeToggle />
        
        {/* Ambient side glow strips */}
        <div className="side-glow-left"></div>
        <div className="side-glow-right"></div>
        
        <Navbar />
        <main className="relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project/:projectId" element={<ProjectDetail />} />
          </Routes>
        </main>
        <Footer />

        {/* AI Chat Widget */}
        <FloatingChat />
      </div>
    </Router>
  );
}

export default App;
