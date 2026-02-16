import { useState } from 'react';
import { IntroSequence } from './components/IntroSequence';
import { Navigation } from './components/Navigation';
import { VenueGallery } from './components/VenueGallery';
import { AboutSection } from './components/AboutSection';
import { BookingPage } from './components/BookingPage';
import { Footer } from './components/Footer';

export default function App() {
  const [introComplete, setIntroComplete] = useState(false);
  const [showBooking, setShowBooking] = useState(false);

  if (showBooking) {
    return <BookingPage onBack={() => setShowBooking(false)} />;
  }

  return (
    <div className="min-h-screen bg-black">
      {/* Navigation - Shows after intro */}
      <Navigation showNav={introComplete} />

      {/* Intro Animation Sequence */}
      <section id="home">
        <IntroSequence onComplete={() => setIntroComplete(true)} onBooking={() => setShowBooking(true)} />
      </section>

      {/* About & Gallery Section */}
      <section id="gallery">
        <AboutSection />
      </section>

      {/* Residency & Legacy Gallery */}
      <section id="residencies">
        <VenueGallery />
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}