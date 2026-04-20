import { useState, useCallback } from 'react';
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
import Mission from './sections/Mission/Mission';
import Team from './sections/Team/Team';
import Gallery from './sections/Gallery/Gallery';
import Sponsors from './sections/Sponsors/Sponsors';
import Contact from './sections/Contact/Contact';
import Footer from './sections/Footer/Footer';
import { Routes, Route } from "react-router-dom";
import Events from './sections/Events/Events';
import NotFound from './sections/notfound/notfound';
import EventDetail from './sections/eventDetail/eventDetails';

import EventNavbar from './components/EventNavbar/EventNavbar';

function App() {
  const [loading, setLoading] = useState(true);

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

      {/* Main content */}
      {!loading && (
        <Routes>
          <Route path="/" element={
            <>
          <Navbar />
          <main>
            <Hero />
            <SectionDivider variant="purple" />
            <Mission />
            <Offerings />
            <Philosophy />
            <SectionDivider variant="purple" />
            <About />
            <SectionDivider variant="pink" />
            <Team />
            <SectionDivider variant="blue" />
            <Gallery />
            <SectionDivider variant="pink" />
            <Sponsors />
            <SectionDivider variant="purple" />
            <Contact />
          </main>
          <Footer />
        </>
        } />
          <Route path="event" element={<><EventNavbar /><Events/></>}/>
          <Route path="/event/:id" element={<><EventNavbar /><EventDetail/></>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      )}
    </>
  );
}

export default App;
