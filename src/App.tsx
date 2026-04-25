import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './pages/Home';
import ProjectDetail from './pages/ProjectDetail';
import Footer from './components/layout/Footer';
import CursorGlow from './components/ui/CursorGlow';
import ThemeToggle from './components/ui/ThemeToggle';
import FloatingChat from './components/chat/FloatingChat';
import useFavicon from './hooks/useFavicon';

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
