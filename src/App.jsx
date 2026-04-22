import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ProjectDetail from './pages/ProjectDetail';
import Footer from './components/Footer';
import CursorGlow from './components/CursorGlow';
import ThemeToggle from './components/ThemeToggle';
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
      </div>
    </Router>
  );
}

export default App;
