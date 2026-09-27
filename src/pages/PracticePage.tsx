import React from 'react';
import { MapPin, Phone, Instagram, MessageSquare, ArrowRight, ShieldCheck, Clock, Check } from 'lucide-react';
import { PageId } from '../types';
import { CLINIC_CONTACT, buildWhatsAppUrl } from '../utils/whatsapp';
import { ImageMaskWipe } from '../components/ImageMaskWipe';

interface PracticePageProps {
  onNavigate: (page: PageId) => void;
  onOpenBooking: () => void;
}

export const PracticePage: React.FC<PracticePageProps> = ({ onNavigate, onOpenBooking }) => {
  return (
    <div className="space-y-24 md:space-y-32 pb-16">
      {/* SECTION 1 — Opening Statement */}
      <section className="pt-8 md:pt-16 max-w-7xl mx-auto px-4 md:px-8">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#E2E6E2] text-xs font-mono tracking-widest text-[#21443D] uppercase border border-[#21443D]/15">
            <span className="w-1.5 h-1.5 rounded-full bg-[#A77C50]" />
            <span>The Physical Practice</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-serif text-[#21443D] tracking-tight font-medium leading-[1.08]">
            The clinic behind <br />
            <span className="italic font-normal text-[#202624]">the chair.</span>
          </h1>

          <p className="text-base sm:text-lg text-[#727A76] font-light leading-relaxed pt-2">
            Located in Sector Q on Commercial Lane in DHA Phase 2, Ghauri Dental Center was established to provide unhurried, clinically sound dental care where treatment recommendations are guided strictly by diagnostics and biological preservation.
          </p>
        </div>
      </section>

      {/* SECTION 2 — Real Clinic Imagery & Equipment Presentation */}
      <section className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          {/* Main Large Image: Operatory */}
          <div className="md:col-span-7">
            <ImageMaskWipe
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1400&q=80"
              alt="Contemporary dental operatory chair and clinical station at Ghauri Dental Center"
              aspectRatio="aspect-[16/11]"
              direction="vertical"
              caption="Clinical Operatory Suite • DHA Phase 2"
            />
          </div>

          {/* Supporting Two Stacked Images: X-Ray Diagnostic Suite & Precision Instruments */}
          <div className="md:col-span-5 flex flex-col justify-between gap-6">
            <div>
              <ImageMaskWipe
                src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1200&q=80"
                alt="Digital radiography diagnostic screen showing detailed dental X-rays"
                aspectRatio="aspect-[16/9]"
                direction="horizontal"
                caption="Digital Radiographic Assessment"
              />
            </div>
            <div>
              <ImageMaskWipe
                src="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=1200&q=80"
                alt="Directional dental surgical operatory lighting and equipment"
                aspectRatio="aspect-[16/9]"
                direction="vertical"
                caption="Sterile Lighting & Operatory Setup"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — Clinical Environment (Editorial Split Layout) */}
      <section className="bg-[#E2E6E2]/40 py-16 md:py-24 border-y border-[#21443D]/10">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-mono uppercase tracking-widest text-[#A77C50]">
                Principles of the Operatory
              </span>
              <h2 className="text-3xl md:text-4xl font-serif text-[#21443D] font-semibold">
                Clinical Environment
              </h2>
              <p className="text-xs md:text-sm text-[#727A76] leading-relaxed font-light">
                Healthcare environments should engender calmness. Every detail of our DHA Phase 2 clinic is arranged to facilitate focused surgical precision and hygiene.
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-6 bg-[#F2F1EC] border border-[#21443D]/10 space-y-2">
                <div className="w-8 h-8 rounded-full bg-[#21443D] text-[#A77C50] flex items-center justify-center font-mono text-xs font-bold mb-3">
                  01
                </div>
                <h3 className="font-serif text-lg font-medium text-[#21443D]">
                  Clean Environment
                </h3>
                <p className="text-xs text-[#727A76] leading-relaxed">
                  Rigorous autoclave sterilization protocols for every dental tray, single-use barrier controls, and sterile clinical surfaces.
                </p>
              </div>

              <div className="p-6 bg-[#F2F1EC] border border-[#21443D]/10 space-y-2">
                <div className="w-8 h-8 rounded-full bg-[#21443D] text-[#A77C50] flex items-center justify-center font-mono text-xs font-bold mb-3">
                  02
                </div>
                <h3 className="font-serif text-lg font-medium text-[#21443D]">
                  Treatment-Focused Setup
                </h3>
                <p className="text-xs text-[#727A76] leading-relaxed">
                  Dedicated chairs tailored for endodontic therapy, hygiene scaling, and prosthetic impressions without clutter.
                </p>
              </div>

              <div className="p-6 bg-[#F2F1EC] border border-[#21443D]/10 space-y-2">
                <div className="w-8 h-8 rounded-full bg-[#21443D] text-[#A77C50] flex items-center justify-center font-mono text-xs font-bold mb-3">
                  03
                </div>
                <h3 className="font-serif text-lg font-medium text-[#21443D]">
                  Modern Equipment
                </h3>
                <p className="text-xs text-[#727A76] leading-relaxed">
                  Equipped with digital radiography systems and ultrasonic scalers to assist thorough diagnostic clarity and comfortable procedures.
                </p>
              </div>

              <div className="p-6 bg-[#F2F1EC] border border-[#21443D]/10 space-y-2">
                <div className="w-8 h-8 rounded-full bg-[#21443D] text-[#A77C50] flex items-center justify-center font-mono text-xs font-bold mb-3">
                  04
                </div>
                <h3 className="font-serif text-lg font-medium text-[#21443D]">
                  Patient-Centered Workflow
                </h3>
                <p className="text-xs text-[#727A76] leading-relaxed">
                  Transparent discussions before any instrument touches your teeth. You will always know why a procedure is advised and what it involves.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — Practice Details */}
      <section className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="border border-[#21443D]/20 bg-[#F2F1EC] p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-mono uppercase tracking-widest text-[#A77C50]">
                Verified Business Coordinates
              </span>
              <h2 className="text-2xl md:text-3xl font-serif text-[#21443D] font-semibold">
                Practice Information
              </h2>

              <div className="space-y-3 text-xs md:text-sm text-[#202624] font-mono pt-2">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#A77C50] shrink-0 mt-0.5" />
                  <span>281-Q Commercial Lane, Sector Q, DHA Phase 2, Lahore, Pakistan</span>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-[#A77C50] shrink-0 mt-0.5" />
                  <span>Direct Desk: {CLINIC_CONTACT.phoneDisplay}</span>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#A77C50] shrink-0 mt-0.5" />
                  <span className="text-[#21443D] font-medium">
                    Operating Schedule Notice: Clinic availability can vary by doctor and appointment type. Contact the clinic to confirm your preferred time.
                  </span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col gap-3">
              <a
                href={buildWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 bg-[#21443D] text-[#F2F1EC] text-xs font-mono uppercase tracking-wider text-center hover:bg-[#17322D] transition-colors flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4 text-[#A77C50]" />
                <span>Confirm Timings on WhatsApp</span>
              </a>

              <a
                href={`tel:${CLINIC_CONTACT.phoneCall}`}
                className="w-full py-3 px-4 border border-[#21443D]/30 text-[#21443D] text-xs font-mono uppercase tracking-wider text-center hover:bg-[#E2E6E2] transition-colors flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#A77C50]" />
                <span>Call Clinic Reception</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 — Instagram Window (Visually Elegant CTA, No Fake Feed) */}
      <section className="max-w-4xl mx-auto px-4 md:px-8 text-center space-y-4">
        <div className="p-8 md:p-12 bg-[#21443D] text-[#F2F1EC] relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-[#A77C50]" />
          <Instagram className="w-8 h-8 text-[#A77C50] mx-auto mb-3" />
          <span className="text-xs font-mono uppercase tracking-widest text-[#A77C50] block">
            Visual Updates & Clinic Case Notes
          </span>
          <h2 className="text-2xl md:text-3xl font-serif font-medium mt-1">
            Follow @ghauri_dental_center
          </h2>
          <p className="text-xs md:text-sm text-[#E2E6E2]/80 max-w-lg mx-auto font-light leading-relaxed mt-2">
            View authentic clinic updates, clinical glimpses, hygiene guidance, and seasonal announcements directly on our official Instagram page.
          </p>

          <div className="pt-6">
            <a
              href={CLINIC_CONTACT.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#F2F1EC] text-[#202624] text-xs font-mono uppercase tracking-wider font-semibold hover:bg-white transition-colors"
            >
              <span>View Official Instagram</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#A77C50]" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
