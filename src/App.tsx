import React, { useState, useEffect } from 'react';
import { SectionId, Doctor } from './types';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { TreatmentSelectorModal } from './components/TreatmentSelectorModal';
import { DoctorModal } from './components/DoctorModal';
import { ContinuousHomePage } from './pages/ContinuousHomePage';

const SECTION_IDS: SectionId[] = [
  'home',
  'story',
  'services',
  'approach',
  'gallery',
  'reviews',
  'process',
  'doctors',
  'contact',
];

export default function App() {
  const [activeSection, setActiveSection] = useState<SectionId>('home');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [bookingDefaultTreatment, setBookingDefaultTreatment] = useState('Root Canal Treatment');
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);

  // Smooth scroll handler for anchor navigation
  const handleScrollToSection = (sectionId: SectionId) => {
    setActiveSection(sectionId);

    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      history.replaceState(null, '', ' ');
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      history.replaceState(null, '', `#${sectionId}`);
    }
  };

  // Scroll listener for progress calculation and section spy
  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress percentage
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, currentProgress)));
      }

      // Active section spy
      const scrollPosition = window.scrollY + 180;
      for (let i = SECTION_IDS.length - 1; i >= 0; i--) {
        const id = SECTION_IDS[i];
        const element = document.getElementById(id);
        if (element) {
          const top = element.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenBooking = (treatment?: string) => {
    if (treatment) {
      setBookingDefaultTreatment(treatment);
    }
    setBookingModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F2F1EC] text-[#202624] selection:bg-[#21443D] selection:text-[#F2F1EC]">
      {/* Subtle, Thin Scroll Progress Indicator at the very top of the viewport */}
      <div
        className="fixed top-0 left-0 right-0 h-[2.5px] z-50 pointer-events-none bg-transparent"
        role="progressbar"
        aria-valuenow={Math.round(scrollProgress)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Progress through the practice journey"
      >
        <div
          className="h-full bg-gradient-to-r from-[#21443D] via-[#A77C50] to-[#C4986E] transition-[width] duration-150 ease-out will-change-[width] shadow-[0_1px_4px_rgba(167,124,80,0.35)] rounded-r-full"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Global Navigation Header & Mobile Bottom Action Dock */}
      <Navigation
        activeSection={activeSection}
        onScrollToSection={handleScrollToSection}
        onOpenBooking={handleOpenBooking}
      />

      {/* Main Continuous Long-Form Page Experience */}
      <main className="flex-1">
        <ContinuousHomePage
          onOpenBooking={handleOpenBooking}
          onSelectDoctor={(doc) => setSelectedDoctor(doc)}
          onScrollToSection={handleScrollToSection}
        />
      </main>

      {/* Large Editorial Footer (Section 11) */}
      <Footer
        onScrollToSection={handleScrollToSection}
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Fast Treatment Selector Modal */}
      <TreatmentSelectorModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        onNavigateToFirstVisit={() => {
          setBookingModalOpen(false);
          handleScrollToSection('contact');
        }}
        defaultTreatment={bookingDefaultTreatment}
      />

      {/* Verified Doctor Profile Modal */}
      <DoctorModal
        doctor={selectedDoctor}
        onClose={() => setSelectedDoctor(null)}
      />
    </div>
  );
}
