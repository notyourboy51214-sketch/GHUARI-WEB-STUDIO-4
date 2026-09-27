import React from 'react';
import { ArrowUpRight, MessageSquare, Phone, Instagram, MapPin } from 'lucide-react';
import { SectionId } from '../types';
import { CLINIC_CONTACT, buildWhatsAppUrl } from '../utils/whatsapp';

interface FooterProps {
  onScrollToSection: (sectionId: SectionId) => void;
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onScrollToSection, onOpenBooking }) => {
  return (
    <footer id="footer" className="bg-[#202624] text-[#F2F1EC] pt-16 pb-24 md:pb-16 border-t border-[#A77C50]/30 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-14 border-b border-white/10">
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-4">
            <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#A77C50] inline-block px-3 py-1 bg-white/5 border border-white/10 rounded-full">
              DHA Phase 2 • Lahore
            </span>
            <div>
              <button
                onClick={() => onScrollToSection('home')}
                className="text-left font-serif text-3xl md:text-4xl text-[#F2F1EC] font-semibold leading-tight hover:text-[#A77C50] transition-colors cursor-pointer block"
              >
                Ghauri Dental Center
              </button>
            </div>
            <p className="text-xs text-[#E2E6E2]/70 max-w-md leading-relaxed font-light">
              A modern dental practice committed to clinical clarity, conservative preservation, and attentive patient care. Serving families and professionals across DHA Lahore and surrounding sectors.
            </p>

            <div className="pt-2 flex flex-wrap gap-2.5 text-xs font-mono">
              <a
                href={buildWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-white/5 border border-white/10 rounded-full text-[#A77C50] hover:text-[#C4986E] hover:bg-white/10 transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp Appointment</span>
              </a>
              <a
                href={`tel:${CLINIC_CONTACT.phoneCall}`}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-white/5 border border-white/10 rounded-full text-[#E2E6E2]/80 hover:text-white hover:bg-white/10 transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>{CLINIC_CONTACT.phoneDisplay}</span>
              </a>
              <a
                href={CLINIC_CONTACT.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-white/5 border border-white/10 rounded-full text-[#E2E6E2]/80 hover:text-white hover:bg-white/10 transition-colors"
              >
                <Instagram className="w-3.5 h-3.5" />
                <span>@ghauri_dental_center</span>
              </a>
            </div>
          </div>

          {/* Quick Treatment & Care Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#A77C50]">
              Clinical Services
            </h4>
            <ul className="space-y-1 text-xs">
              <li>
                <button
                  onClick={() => onScrollToSection('approach')}
                  className="text-[#E2E6E2]/80 hover:text-white hover:bg-white/5 px-2 py-1.5 rounded-lg transition-colors text-left flex items-center justify-between w-full group cursor-pointer"
                >
                  <span>Root Canal Care & Assessment</span>
                  <span className="opacity-0 group-hover:opacity-100 text-[#A77C50] text-[10px]">↓</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScrollToSection('services')}
                  className="text-[#E2E6E2]/80 hover:text-white hover:bg-white/5 px-2 py-1.5 rounded-lg transition-colors text-left flex items-center justify-between w-full group cursor-pointer"
                >
                  <span>Scaling & Plaque Control</span>
                  <span className="opacity-0 group-hover:opacity-100 text-[#A77C50] text-[10px]">↓</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScrollToSection('services')}
                  className="text-[#E2E6E2]/80 hover:text-white hover:bg-white/5 px-2 py-1.5 rounded-lg transition-colors text-left flex items-center justify-between w-full group cursor-pointer"
                >
                  <span>Dental Crowns & Bridges</span>
                  <span className="opacity-0 group-hover:opacity-100 text-[#A77C50] text-[10px]">↓</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScrollToSection('services')}
                  className="text-[#E2E6E2]/80 hover:text-white hover:bg-white/5 px-2 py-1.5 rounded-lg transition-colors text-left flex items-center justify-between w-full group cursor-pointer"
                >
                  <span>Complete Treatment Library</span>
                  <span className="opacity-0 group-hover:opacity-100 text-[#A77C50] text-[10px]">↓</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScrollToSection('process')}
                  className="text-[#E2E6E2]/80 hover:text-white hover:bg-white/5 px-2 py-1.5 rounded-lg transition-colors text-left flex items-center justify-between w-full group cursor-pointer"
                >
                  <span>How It Works & First Visit</span>
                  <span className="opacity-0 group-hover:opacity-100 text-[#A77C50] text-[10px]">↓</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Navigation & Practice */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#A77C50]">
              The Practice
            </h4>
            <ul className="space-y-1 text-xs">
              <li>
                <button
                  onClick={() => onScrollToSection('story')}
                  className="text-[#E2E6E2]/80 hover:text-white hover:bg-white/5 px-2 py-1.5 rounded-lg transition-colors cursor-pointer block w-full text-left"
                >
                  About the Clinic
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScrollToSection('doctors')}
                  className="text-[#E2E6E2]/80 hover:text-white hover:bg-white/5 px-2 py-1.5 rounded-lg transition-colors cursor-pointer block w-full text-left"
                >
                  The Doctors
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScrollToSection('gallery')}
                  className="text-[#E2E6E2]/80 hover:text-white hover:bg-white/5 px-2 py-1.5 rounded-lg transition-colors cursor-pointer block w-full text-left"
                >
                  Clinical Spaces
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScrollToSection('reviews')}
                  className="text-[#E2E6E2]/80 hover:text-white hover:bg-white/5 px-2 py-1.5 rounded-lg transition-colors cursor-pointer block w-full text-left"
                >
                  Patient Stories & Reviews
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScrollToSection('contact')}
                  className="text-[#E2E6E2]/80 hover:text-white hover:bg-white/5 px-2 py-1.5 rounded-lg transition-colors cursor-pointer block w-full text-left"
                >
                  Location & Directions
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenBooking}
                  className="text-[#A77C50] hover:text-[#C4986E] hover:bg-[#A77C50]/10 px-2 py-1.5 rounded-lg font-medium transition-colors cursor-pointer block w-full text-left"
                >
                  Book Appointment
                </button>
              </li>
            </ul>
          </div>

          {/* Location Column */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#A77C50]">
              Location
            </h4>
            <div className="p-3.5 bg-white/5 border border-white/10 rounded-2xl text-xs text-[#E2E6E2]/75 leading-relaxed space-y-2">
              <p>
                281-Q Commercial Lane<br />
                Sector Q, DHA Phase 2<br />
                Lahore, Pakistan
              </p>
              <div>
                <a
                  href={CLINIC_CONTACT.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[11px] font-mono text-[#A77C50] hover:text-[#C4986E] transition-colors"
                >
                  <MapPin className="w-3 h-3" />
                  <span>Open in Google Maps</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>
            <p className="text-[10px] text-[#E2E6E2]/50 italic pt-1">
              Contact clinic to confirm current consultation availability.
            </p>
          </div>
        </div>

        {/* Medical Content Safety Disclaimer & Copyright */}
        <div className="mt-8 p-5 bg-white/5 border border-white/10 rounded-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-[11px] text-[#E2E6E2]/60 font-light">
          <p className="max-w-2xl leading-relaxed">
            <span className="font-semibold text-[#A77C50]">Medical Disclaimer: </span>
            Information on this website is for general educational purposes and does not replace professional dental advice, diagnosis, or personalized treatment planning. Always consult a qualified dental surgeon regarding your individual oral health.
          </p>
          <div className="shrink-0 text-left md:text-right font-mono text-[10px]">
            © {new Date().getFullYear()} Ghauri Dental Center. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
