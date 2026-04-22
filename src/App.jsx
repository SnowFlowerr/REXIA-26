import { useState, useCallback, useEffect } from 'react';
import StarField from './components/StarField/StarField';
import ShootingStars from './components/ShootingStars/ShootingStars';
import FlyingAstronaut from './components/FlyingAstronaut/FlyingAstronaut';
import CursorGlow from './components/CursorGlow/CursorGlow';
import Loader from './components/Loader/Loader';
import Navbar from './components/Navbar/Navbar';
import SectionDivider from './components/SectionDivider/SectionDivider';
import Hero from './sections/Hero/Hero';
import Philosophy from './sections/Philosophy/Philosophy';
import About from './sections/About/About';
import Offerings from './sections/Offerings/Offerings';
import Drift from './driftX/drift';
import Mission from './sections/Mission/Mission';
import Team from './sections/Team/Team';
import Gallery from './sections/Gallery/Gallery';
import Sponsors from './sections/Sponsors/Sponsors';
import Contact from './sections/Contact/Contact';
import Footer from './sections/Footer/Footer';
import { Routes, Route, useLocation } from "react-router-dom";
import Events from './sections/Events/Events';
import NotFound from './sections/notfound/notfound';
import EventDetail from './sections/eventDetail/eventDetails';

import RegisterModal from './components/RegisterModal/RegisterModal';

function App() {
  const [loading, setLoading] = useState(true);
  const [isRegisterModalOpen, setRegisterModalOpen] = useState(false);
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const id = hash.replace('#', '');
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, [hash]);

  const handleLoaderComplete = useCallback(() => {
    setLoading(false);
  }, []);

  return (
    <>
      {/* Persistent animated star background */}
      <StarField />

      {/* Shooting stars overlay */}
      <ShootingStars />

      {/* Flying astronauts overlay */}
      <FlyingAstronaut />

      {/* Cursor glow effect */}
      <CursorGlow />

      {/* Loader */}
      {loading && <Loader onComplete={handleLoaderComplete} />}

      {/* Register Modal */}
      <RegisterModal isOpen={isRegisterModalOpen} onClose={() => setRegisterModalOpen(false)} />

      {/* Main content */}
      {!loading && (
        <>
          <Navbar onRegisterClick={() => setRegisterModalOpen(true)} />
          <Routes>
            <Route path="/" element={
              <>
                <main>
            <Hero />
            <SectionDivider variant="purple" />
            <Mission />
            <Offerings />
            <Drift onRegisterClick={() => setRegisterModalOpen(true)} />
            <Philosophy />
          {/* <SectionDivider variant="purple" />
            <About /> */}
           {/*    <SectionDivider variant="pink" />
            <Team /> */}
            {/* <SectionDivider variant="blue" /> */}
            <Gallery />
            {/* <SectionDivider variant="pink" /> */}
            <Sponsors />
            {/* <SectionDivider variant="purple" /> */}
            <Contact />
          </main>
          <Footer />
        </>
        } />
            <Route path="event" element={<Events/>} />
            <Route path="/event/:id" element={<EventDetail/>} />
            <Route path="*" element={<NotFound/>}/>
          </Routes>
        </>
      )}
    </>
  );
}

export default App;
