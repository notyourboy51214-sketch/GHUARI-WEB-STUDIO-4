import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare, Menu, X, Calendar, ArrowUpRight } from 'lucide-react';
import { SectionId } from '../types';
import { CLINIC_CONTACT, buildWhatsAppUrl } from '../utils/whatsapp';

interface NavigationProps {
  onOpenBooking: (treatment?: string) => void;
  activeSection?: SectionId;
  onScrollToSection: (sectionId: SectionId) => void;
}

interface NavItem {
  id: SectionId;
  label: string;
}

const NAV_ITEMS: NavItem[] = [
  { id: 'story', label: 'The Practice' },
  { id: 'services', label: 'Treatments' },
  { id: 'approach', label: 'Root Canal & Care' },
  { id: 'gallery', label: 'Clinical Spaces' },
  { id: 'reviews', label: 'Patient Stories' },
  { id: 'process', label: 'How It Works' },
  { id: 'doctors', label: 'The Doctors' },
  { id: 'contact', label: 'Visit & Contact' },
];

export const Navigation: React.FC<NavigationProps> = ({
  onOpenBooking,
  activeSection = 'home',
  onScrollToSection,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (sectionId: SectionId) => {
    onScrollToSection(sectionId);
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Top Banner Metadata Bar */}
      <aside
        aria-label="Clinic announcement"
        className="bg-[#21443D] text-[#E2E6E2] text-[11px] font-mono tracking-wider py-1.5 px-4 md:px-8 border-b border-[#A77C50]/30"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="inline-block w-1.5 h-1.5 bg-[#A77C50] rounded-full animate-pulse" />
            <span className="hidden sm:inline">281-Q Commercial Lane, Sector Q, DHA Phase 2, Lahore</span>
            <span className="sm:hidden">DHA Phase 2, Lahore</span>
          </div>
          <div className="flex items-center gap-4 text-[#E2E6E2]">
            <span className="text-[#A77C50] font-semibold px-2.5 py-0.5 bg-[#A77C50]/20 rounded-full border border-[#A77C50]/30">
              4.8 ★ (311 Google Reviews)
            </span>
            <span className="hidden md:inline text-white/30">|</span>
            <a
              href={`tel:${CLINIC_CONTACT.phoneCall}`}
              className="hidden md:inline hover:text-white transition-colors px-2 py-0.5 rounded-full hover:bg-white/10"
            >
              {CLINIC_CONTACT.phoneDisplay}
            </a>
          </div>
        </div>
      </aside>

      {/* Main Sticky Header */}
      <header className="sticky top-0 z-40 bg-[#F2F1EC]/95 backdrop-blur-md border-b border-[#21443D]/10">
        <div className="max-w-7xl mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
          {/* Brand Logo / Wordmark (Clicks to top #home) */}
          <button
            onClick={() => handleNavClick('home')}
            className="text-left group cursor-pointer focus:outline-hidden"
            aria-label="Ghauri Dental Center - Scroll to top"
          >
            <div className="font-serif tracking-widest text-[#21443D] font-bold text-lg md:text-xl uppercase leading-none group-hover:text-[#A77C50] transition-colors">
              Ghauri
            </div>
            <div className="font-sans text-[10px] tracking-[0.28em] text-[#727A76] uppercase leading-tight font-medium mt-0.5">
              Dental Center • DHA 2
            </div>
          </button>

          {/* Center Navigation Links (Anchor Scrolling) */}
          <nav className="hidden xl:flex items-center gap-5 2xl:gap-7">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-xs uppercase tracking-wider transition-all relative py-1 cursor-pointer font-medium ${
                    isActive
                      ? 'text-[#21443D] font-semibold'
                      : 'text-[#727A76] hover:text-[#21443D]'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#A77C50] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={buildWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs uppercase tracking-wider font-mono text-[#21443D] px-4 py-2.5 rounded-full border border-[#21443D]/25 hover:border-[#21443D] hover:bg-[#E2E6E2]/50 transition-colors flex items-center gap-1.5"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#A77C50]" />
              <span>WhatsApp</span>
            </a>

            <button
              onClick={() => onOpenBooking()}
              className="text-xs uppercase tracking-wider font-mono bg-[#21443D] text-[#F2F1EC] px-5 py-2.5 rounded-full hover:bg-[#17322D] transition-colors border border-transparent shadow-xs cursor-pointer flex items-center gap-1.5"
            >
              <span>Book Appointment</span>
            </button>
          </div>

          {/* Mobile Menu Hamburger */}
          <div className="flex items-center gap-2 xl:hidden">
            <button
              onClick={() => onOpenBooking()}
              className="text-[11px] font-mono uppercase bg-[#21443D] text-[#F2F1EC] px-3.5 py-1.5 rounded-full sm:hidden"
            >
              Book
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#21443D] hover:bg-[#E2E6E2] rounded-xl transition-colors cursor-pointer"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Full Screen Menu Drawer (Anchor Scrolling) */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-[#F2F1EC] border-b border-[#21443D]/20 rounded-b-3xl shadow-xl px-6 py-6 animate-in slide-in-from-top duration-200">
            <div className="text-[10px] font-mono uppercase tracking-widest text-[#A77C50] mb-3">
              Continuous Page Navigation
            </div>
            <div className="flex flex-col space-y-2.5">
              <button
                onClick={() => handleNavClick('home')}
                className={`text-left text-base font-serif py-1 flex items-center justify-between cursor-pointer ${
                  activeSection === 'home' ? 'text-[#21443D] font-bold' : 'text-[#727A76]'
                }`}
              >
                <span>The Smile Starts Here (Top)</span>
                <span className="text-xs font-mono text-[#A77C50]">01</span>
              </button>
              {NAV_ITEMS.map((item, idx) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-left text-base font-serif py-1 flex items-center justify-between border-t border-[#21443D]/10 pt-2 cursor-pointer ${
                    activeSection === item.id ? 'text-[#21443D] font-bold' : 'text-[#727A76]'
                  }`}
                >
                  <span>{item.label}</span>
                  <span className="text-xs font-mono text-[#A77C50]">0{idx + 2}</span>
                </button>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-[#21443D]/15 grid grid-cols-2 gap-2">
              <a
                href={buildWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 py-2.5 px-3 bg-[#21443D] text-[#F2F1EC] text-xs font-mono uppercase rounded-xl"
              >
                <MessageSquare className="w-3.5 h-3.5 text-[#A77C50]" />
                <span>WhatsApp</span>
              </a>
              <a
                href={`tel:${CLINIC_CONTACT.phoneCall}`}
                className="flex items-center justify-center gap-1.5 py-2.5 px-3 border border-[#21443D]/30 text-[#21443D] text-xs font-mono uppercase rounded-xl"
              >
                <Phone className="w-3.5 h-3.5 text-[#A77C50]" />
                <span>Call Clinic</span>
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Global Fixed Mobile Action Dock */}
      <div className="md:hidden fixed bottom-2 left-3 right-3 z-40 bg-[#F2F1EC]/95 backdrop-blur-md border border-[#21443D]/20 rounded-2xl shadow-[0_4px_25px_rgba(0,0,0,0.12)] p-2 flex items-center gap-2">
        <a
          href={`tel:${CLINIC_CONTACT.phoneCall}`}
          className="flex-1 flex flex-col items-center justify-center py-2 px-1 bg-white border border-[#21443D]/15 text-[#21443D] rounded-xl active:bg-[#E2E6E2] transition-colors"
          aria-label="Call Ghauri Dental Center"
        >
          <Phone className="w-4 h-4 text-[#A77C50] mb-0.5" />
          <span className="text-[10px] font-mono uppercase tracking-wider font-semibold">Call</span>
        </a>

        <a
          href={buildWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-[1.4] flex items-center justify-center gap-1.5 py-2.5 px-2 bg-[#21443D] text-[#F2F1EC] rounded-xl active:bg-[#17322D] transition-colors"
          aria-label="Chat with Ghauri Dental Center on WhatsApp"
        >
          <MessageSquare className="w-4 h-4 text-[#A77C50]" />
          <span className="text-[11px] font-mono uppercase tracking-wider font-semibold">WhatsApp</span>
        </a>

        <button
          onClick={() => onOpenBooking()}
          className="flex-1 flex flex-col items-center justify-center py-2 px-1 bg-[#A77C50] text-[#202624] rounded-xl active:bg-[#8e6840] cursor-pointer transition-colors"
          aria-label="Book an Appointment"
        >
          <Calendar className="w-4 h-4 text-[#202624] mb-0.5" />
          <span className="text-[10px] font-mono uppercase tracking-wider font-bold">Book</span>
        </button>
      </div>
    </>
  );
};
