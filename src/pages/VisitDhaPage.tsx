import React from 'react';
import { MapPin, Phone, MessageSquare, Instagram, ArrowUpRight, Clock, Navigation as NavIcon, ArrowRight } from 'lucide-react';
import { PageId } from '../types';
import { CLINIC_CONTACT, buildWhatsAppUrl } from '../utils/whatsapp';
import { ImageMaskWipe } from '../components/ImageMaskWipe';

interface VisitDhaPageProps {
  onNavigate: (page: PageId) => void;
  onOpenBooking: () => void;
}

export const VisitDhaPage: React.FC<VisitDhaPageProps> = ({ onNavigate, onOpenBooking }) => {
  return (
    <div className="space-y-24 md:space-y-32 pb-16">
      {/* SECTION 1: Huge Location Typography */}
      <section className="pt-8 md:pt-16 max-w-7xl mx-auto px-4 md:px-8">
        <div className="border-b border-[#21443D]/15 pb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#E2E6E2] text-xs font-mono tracking-widest text-[#21443D] uppercase border border-[#21443D]/15 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#A77C50]" />
            <span>Practice Coordinates</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8">
              <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl text-[#21443D] font-medium leading-[0.95] tracking-tight">
                281-Q <br />
                <span className="italic font-normal text-[#202624]">Commercial Lane</span> <br />
                DHA Phase 2 <br />
                <span className="text-3xl sm:text-5xl md:text-6xl text-[#727A76] font-normal">Lahore</span>
              </h1>
            </div>

            <div className="lg:col-span-4 space-y-3">
              <p className="text-xs sm:text-sm text-[#727A76] leading-relaxed">
                Directly accessible via Sector Q Commercial Lane in DHA Phase 2, offering straightforward parking and quiet clinical consultations for Lahore residents.
              </p>
              <div className="pt-2">
                <a
                  href={CLINIC_CONTACT.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#21443D] text-[#F2F1EC] text-xs font-mono uppercase tracking-wider hover:bg-[#17322D] transition-colors"
                >
                  <MapPin className="w-4 h-4 text-[#A77C50]" />
                  <span>Open in Google Maps</span>
                  <ArrowUpRight className="w-4 h-4 text-[#A77C50]" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Map & Architectural Lane Area */}
      <section className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <div className="lg:col-span-7 bg-[#E2E6E2]/40 border border-[#21443D]/15 p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <span className="text-xs font-mono uppercase tracking-widest text-[#A77C50] block">
                Physical Navigation & Directions
              </span>
              <h2 className="text-2xl md:text-3xl font-serif text-[#21443D] font-semibold">
                Finding the Practice in Sector Q
              </h2>
              <p className="text-xs md:text-sm text-[#727A76] leading-relaxed">
                From Ghazi Road or DHA Main Boulevard, turn towards Sector Q Commercial Area. Ghauri Dental Center is positioned on Commercial Lane, with convenient vehicle drop-off and street parking along the commercial row.
              </p>

              <div className="p-4 bg-white border border-[#21443D]/10 space-y-2 text-xs">
                <div className="flex items-center gap-2 font-mono text-[#21443D] font-semibold">
                  <NavIcon className="w-3.5 h-3.5 text-[#A77C50]" />
                  <span>Google Maps Verified Pin:</span>
                </div>
                <p className="text-[#727A76]">
                  &ldquo;Ghauri Dental Center, 281-Q Commercial Lane, Sector Q, DHA Phase 2, Lahore&rdquo;
                </p>
                <div className="pt-1">
                  <a
                    href={CLINIC_CONTACT.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono text-[#A77C50] hover:underline inline-flex items-center gap-1 font-semibold"
                  >
                    <span>Launch Navigation Route in Maps App</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>

            <div className="border-t border-[#21443D]/10 pt-4 flex flex-wrap gap-4 text-xs font-mono">
              <span className="text-[#727A76]">Landmarks:</span>
              <span className="text-[#202624]">Sector Q Commercial Hub</span>
              <span className="text-[#202624]">•</span>
              <span className="text-[#202624]">DHA Phase 2</span>
              <span className="text-[#202624]">•</span>
              <span className="text-[#202624]">Lahore</span>
            </div>
          </div>

          <div className="lg:col-span-5">
            <ImageMaskWipe
              src="https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=1200&q=80"
              alt="Sector Q Commercial Lane architectural setting in DHA Phase 2 Lahore"
              aspectRatio="aspect-[4/3]"
              direction="vertical"
              caption="Commercial Lane DHA Phase 2 Access"
            />
          </div>
        </div>
      </section>

      {/* SECTION 3 & 4: Contact & Hours / Availability Notice */}
      <section className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Methods */}
          <div className="p-8 bg-[#21443D] text-[#F2F1EC] border border-[#21443D] space-y-6">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#A77C50] block mb-1">
                Direct Channels
              </span>
              <h2 className="text-2xl font-serif font-semibold">
                Clinic Contact Details
              </h2>
            </div>

            <div className="space-y-4 text-xs md:text-sm">
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#A77C50] shrink-0 mt-0.5" />
                <div>
                  <span className="text-[#E2E6E2]/60 block text-[11px] font-mono uppercase">Call Desk</span>
                  <a href={`tel:${CLINIC_CONTACT.phoneCall}`} className="hover:text-[#A77C50] font-mono text-base font-semibold">
                    {CLINIC_CONTACT.phoneDisplay}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MessageSquare className="w-4 h-4 text-[#A77C50] shrink-0 mt-0.5" />
                <div>
                  <span className="text-[#E2E6E2]/60 block text-[11px] font-mono uppercase">WhatsApp Coordination</span>
                  <a href={buildWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="hover:text-[#A77C50] font-mono text-base font-semibold">
                    +92 333 3711434
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Instagram className="w-4 h-4 text-[#A77C50] shrink-0 mt-0.5" />
                <div>
                  <span className="text-[#E2E6E2]/60 block text-[11px] font-mono uppercase">Instagram</span>
                  <a href={CLINIC_CONTACT.instagramUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[#A77C50] font-mono">
                    @ghauri_dental_center
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* SECTION 4: Hours / Availability Note */}
          <div className="p-8 bg-[#E2E6E2]/50 border border-[#21443D]/20 space-y-6 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#A77C50]" />
                <span className="text-xs font-mono uppercase tracking-widest text-[#A77C50] font-semibold">
                  Operating Information
                </span>
              </div>
              <h2 className="text-2xl font-serif text-[#21443D] font-semibold">
                Consultation Availability
              </h2>
              <div className="p-4 bg-white border border-[#21443D]/10 text-xs text-[#202624] space-y-2">
                <p className="font-semibold text-[#21443D]">
                  Scheduling Policy:
                </p>
                <p className="text-[#727A76] leading-relaxed">
                  Please contact the clinic to confirm current consultation availability. Clinic availability can vary by doctor and appointment type.
                </p>
              </div>
              <p className="text-xs text-[#727A76] leading-relaxed">
                To guarantee minimal waiting time and ensure sterile tray readiness, all diagnostic examinations and procedures are scheduled in advance via WhatsApp or phone.
              </p>
            </div>

            <div className="pt-2">
              <a
                href={buildWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 bg-[#21443D] text-[#F2F1EC] text-xs font-mono uppercase tracking-wider text-center hover:bg-[#17322D] transition-colors flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-3.5 h-3.5 text-[#A77C50]" />
                <span>Enquire Current Slots</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: Final CTA */}
      <section className="max-w-4xl mx-auto px-4 md:px-8 text-center space-y-4">
        <span className="text-xs font-mono uppercase tracking-widest text-[#A77C50] block">
          Welcome to Ghauri Dental Center
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#21443D] font-medium leading-tight">
          Your next dental conversation can start here.
        </h2>
        <p className="text-xs md:text-sm text-[#727A76] max-w-md mx-auto leading-relaxed">
          Contact our clinic desk in DHA Phase 2 to discuss scaling, root canal therapy, or general tooth preservation.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={buildWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-7 py-3.5 bg-[#21443D] text-[#F2F1EC] text-xs font-mono uppercase tracking-wider hover:bg-[#17322D] transition-colors flex items-center justify-center gap-2"
          >
            <MessageSquare className="w-4 h-4 text-[#A77C50]" />
            <span>WhatsApp</span>
          </a>

          <a
            href={`tel:${CLINIC_CONTACT.phoneCall}`}
            className="w-full sm:w-auto px-6 py-3.5 border border-[#21443D]/30 text-[#21443D] text-xs font-mono uppercase tracking-wider hover:bg-[#E2E6E2] transition-colors flex items-center justify-center gap-2"
          >
            <Phone className="w-4 h-4 text-[#A77C50]" />
            <span>Call Clinic</span>
          </a>

          <a
            href={CLINIC_CONTACT.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-3.5 bg-[#A77C50] text-[#202624] text-xs font-mono uppercase tracking-wider font-semibold hover:bg-[#C4986E] transition-colors flex items-center justify-center gap-2"
          >
            <MapPin className="w-4 h-4" />
            <span>Get Directions</span>
          </a>
        </div>
      </section>
    </div>
  );
};
