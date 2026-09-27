import React from 'react';
import { ArrowRight, MessageSquare, Phone, MapPin, Check, Star, ArrowUpRight } from 'lucide-react';
import { PageId } from '../types';
import { CLINIC_CONTACT, buildWhatsAppUrl } from '../utils/whatsapp';
import { ImageMaskWipe } from '../components/ImageMaskWipe';
import { REVIEWS_DATA, GOOGLE_RATING, GOOGLE_REVIEWS_COUNT } from '../data/reviews';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onOpenBooking: (treatment?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenBooking }) => {
  return (
    <div className="space-y-24 md:space-y-36 pb-16">
      {/* SECTION 1 — Editorial Hero */}
      <section className="relative pt-8 md:pt-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Narrative Column */}
            <div className="lg:col-span-7 space-y-6 md:space-y-8 z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#E2E6E2] border border-[#21443D]/15 text-xs font-mono tracking-widest text-[#21443D] uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-[#A77C50]" />
                <span>Sector Q • DHA Phase 2 • Lahore</span>
              </div>

              <div className="space-y-3">
                <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif text-[#21443D] tracking-tight leading-[1.04] font-medium">
                  Dental care <br />
                  <span className="italic font-normal text-[#202624]">with clarity.</span>
                </h1>
                <p className="text-base sm:text-lg text-[#727A76] max-w-xl font-light leading-relaxed pt-2">
                  Thoughtful dental treatment in DHA Phase 2, Lahore — from everyday oral care to more involved restorative treatment.
                </p>
              </div>

              {/* Trust Badge & Verification Strip */}
              <div className="flex flex-wrap items-center gap-6 pt-2 border-y border-[#21443D]/10 py-4">
                <div className="flex items-center gap-3">
                  <div className="flex text-[#A77C50]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#A77C50] text-[#A77C50]" />
                    ))}
                  </div>
                  <div>
                    <span className="font-serif font-bold text-lg text-[#21443D]">
                      {GOOGLE_RATING}
                    </span>
                    <span className="text-xs font-mono text-[#727A76] ml-1.5">
                      / 5 ({GOOGLE_REVIEWS_COUNT} Google Reviews)
                    </span>
                  </div>
                </div>

                <div className="hidden sm:block h-4 w-px bg-[#21443D]/20" />

                <div className="text-xs font-mono uppercase tracking-wider text-[#727A76]">
                  DHA Commercial Lane Practice
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
                <button
                  onClick={() => onOpenBooking()}
                  className="px-7 py-3.5 bg-[#21443D] text-[#F2F1EC] text-xs uppercase tracking-wider font-mono font-medium hover:bg-[#17322D] transition-all flex items-center justify-center gap-2 shadow-xs group cursor-pointer"
                >
                  <span>Book Appointment</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#A77C50]" />
                </button>

                <a
                  href={buildWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 border border-[#21443D]/30 text-[#21443D] text-xs uppercase tracking-wider font-mono font-medium hover:bg-[#E2E6E2] transition-colors flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4 text-[#A77C50]" />
                  <span>WhatsApp the Clinic</span>
                </a>
              </div>
            </div>

            {/* Right Visual Column with Oversized "01" Layer */}
            <div className="lg:col-span-5 relative">
              {/* Subtle oversized background numeral */}
              <div
                aria-hidden="true"
                className="absolute -top-16 -right-6 select-none font-serif text-[180px] md:text-[240px] text-[#E2E6E2]/40 font-bold leading-none pointer-events-none -z-10"
              >
                01
              </div>

              {/* Signature Image Mask Wipe on Hero Visual */}
              <div className="relative max-w-md mx-auto lg:max-w-none shadow-xl">
                <ImageMaskWipe
                  src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1200&q=80"
                  alt="Clinical precision dental stainless steel instrument tray in directional light"
                  aspectRatio="aspect-[3/4]"
                  direction="vertical"
                  priority={true}
                  caption="Precision Instrument Suite • Sterile Preparation"
                />

                {/* Floating Architectural Information Tag */}
                <div className="absolute -bottom-6 -left-4 bg-[#F2F1EC] border border-[#21443D]/20 p-4 shadow-lg hidden sm:block max-w-xs">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#A77C50] block">
                    Physical Practice
                  </span>
                  <p className="text-xs text-[#202624] font-serif font-medium mt-0.5">
                    281-Q Commercial Lane, Sector Q, DHA Phase 2
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — The First Impression (Asymmetric Horizontal Composition) */}
      <section className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="border-t border-[#21443D]/15 pt-8 mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#A77C50]">
              Immediate Clinical Focus
            </span>
            <h2 className="text-3xl md:text-4xl font-serif text-[#21443D] mt-1 font-semibold">
              The First Impression
            </h2>
          </div>
          <p className="text-xs text-[#727A76] max-w-sm font-light">
            Core diagnostic and restorative disciplines where patients commonly seek our guidance.
          </p>
        </div>

        {/* Asymmetrical composition: 3 horizontal bands with varying visual weights */}
        <div className="space-y-4">
          {/* Item 1: Scaling */}
          <div
            onClick={() => onNavigate('clean-restore')}
            className="group cursor-pointer p-6 md:p-8 bg-[#E2E6E2]/40 hover:bg-[#E2E6E2]/80 border border-[#21443D]/10 hover:border-[#21443D]/30 transition-all flex flex-col md:flex-row md:items-center justify-between gap-6"
          >
            <div className="flex items-start md:items-center gap-6 md:gap-10">
              <span className="font-serif text-3xl md:text-5xl font-light text-[#A77C50]">
                01
              </span>
              <div>
                <h3 className="text-xl md:text-2xl font-serif text-[#21443D] font-medium group-hover:text-[#17322D] transition-colors">
                  Scaling & Oral Hygiene
                </h3>
                <p className="text-xs md:text-sm text-[#727A76] max-w-xl mt-1 leading-relaxed">
                  Careful ultrasonic plaque and calculus removal. Patients routinely remark on our gentle, non-rushed approach.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 shrink-0 self-end md:self-center">
              <span className="text-xs font-mono uppercase tracking-wider text-[#21443D] opacity-0 group-hover:opacity-100 transition-opacity hidden sm:inline">
                View Hygiene Protocol
              </span>
              <div className="w-10 h-10 rounded-full border border-[#21443D]/20 flex items-center justify-center group-hover:border-[#21443D] group-hover:bg-[#21443D] group-hover:text-[#F2F1EC] transition-all">
                <ArrowRight className="w-4 h-4 text-[#A77C50] group-hover:text-[#F2F1EC]" />
              </div>
            </div>
          </div>

          {/* Item 2: Root Canal Treatment (Prominently Styled) */}
          <div
            onClick={() => onNavigate('root-canal')}
            className="group cursor-pointer p-6 md:p-8 bg-[#21443D] text-[#F2F1EC] border border-[#21443D] hover:bg-[#17322D] transition-all flex flex-col md:flex-row md:items-center justify-between gap-6 relative overflow-hidden"
          >
            <div className="absolute right-0 top-0 bottom-0 w-1.5 bg-[#A77C50]" />
            <div className="flex items-start md:items-center gap-6 md:gap-10">
              <span className="font-serif text-3xl md:text-5xl font-light text-[#A77C50]">
                02
              </span>
              <div>
                <div className="inline-block px-2 py-0.5 bg-[#A77C50]/20 text-[#A77C50] text-[10px] font-mono uppercase tracking-widest mb-1.5">
                  Signature Specialty
                </div>
                <h3 className="text-xl md:text-2xl font-serif text-[#F2F1EC] font-medium">
                  Root Canal Therapy & Re-treatment
                </h3>
                <p className="text-xs md:text-sm text-[#E2E6E2]/80 max-w-xl mt-1 leading-relaxed">
                  Careful biological preservation for deep pulp inflammation. Clear diagnosis, step-by-step communication, and objective assessment.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 shrink-0 self-end md:self-center">
              <span className="text-xs font-mono uppercase tracking-wider text-[#E2E6E2] opacity-0 group-hover:opacity-100 transition-opacity hidden sm:inline">
                Learn About RCT Care
              </span>
              <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-[#A77C50] group-hover:text-[#202624] group-hover:border-[#A77C50] transition-all">
                <ArrowRight className="w-4 h-4 text-[#A77C50] group-hover:text-[#202624]" />
              </div>
            </div>
          </div>

          {/* Item 3: Crowns */}
          <div
            onClick={() => onNavigate('clean-restore')}
            className="group cursor-pointer p-6 md:p-8 bg-[#E2E6E2]/40 hover:bg-[#E2E6E2]/80 border border-[#21443D]/10 hover:border-[#21443D]/30 transition-all flex flex-col md:flex-row md:items-center justify-between gap-6"
          >
            <div className="flex items-start md:items-center gap-6 md:gap-10">
              <span className="font-serif text-3xl md:text-5xl font-light text-[#A77C50]">
                03
              </span>
              <div>
                <h3 className="text-xl md:text-2xl font-serif text-[#21443D] font-medium group-hover:text-[#17322D] transition-colors">
                  Dental Crowns & Structural Restoration
                </h3>
                <p className="text-xs md:text-sm text-[#727A76] max-w-xl mt-1 leading-relaxed">
                  Precision-fitted ceramic crowns to protect treated or compromised teeth, restoring biting comfort and natural contours.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 shrink-0 self-end md:self-center">
              <span className="text-xs font-mono uppercase tracking-wider text-[#21443D] opacity-0 group-hover:opacity-100 transition-opacity hidden sm:inline">
                Explore Restorations
              </span>
              <div className="w-10 h-10 rounded-full border border-[#21443D]/20 flex items-center justify-center group-hover:border-[#21443D] group-hover:bg-[#21443D] group-hover:text-[#F2F1EC] transition-all">
                <ArrowRight className="w-4 h-4 text-[#A77C50] group-hover:text-[#F2F1EC]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — Patient Signals (Magazine-Style Testimonial Layout) */}
      <section className="bg-[#E2E6E2]/50 py-16 md:py-24 border-y border-[#21443D]/10">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
            <div className="lg:col-span-5 space-y-2">
              <span className="text-xs font-mono uppercase tracking-widest text-[#A77C50]">
                Verified Patient Voices
              </span>
              <div className="flex items-baseline gap-4">
                <div className="text-6xl md:text-7xl font-serif font-bold text-[#21443D] leading-none">
                  {GOOGLE_RATING}
                </div>
                <div>
                  <div className="flex text-[#A77C50] mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#A77C50] text-[#A77C50]" />
                    ))}
                  </div>
                  <div className="text-xs font-mono uppercase tracking-wider text-[#727A76]">
                    {GOOGLE_REVIEWS_COUNT} Verified Google Reviews
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <p className="text-xs md:text-sm text-[#727A76] leading-relaxed max-w-xl">
                Patients in DHA Phase 2 and across Lahore frequently highlight comfortable treatment experiences, clear diagnostic explanations, and thorough restorative care.
              </p>
              <div className="mt-3 flex flex-wrap gap-2 text-[11px] font-mono">
                <span className="px-2 py-0.5 bg-white border border-[#21443D]/15 text-[#21443D]">
                  Scaling Feedback
                </span>
                <span className="px-2 py-0.5 bg-white border border-[#21443D]/15 text-[#21443D]">
                  Root Canal Feedback
                </span>
                <span className="px-2 py-0.5 bg-white border border-[#21443D]/15 text-[#21443D]">
                  Crown Fitting
                </span>
                <span className="px-2 py-0.5 bg-white border border-[#21443D]/15 text-[#21443D]">
                  Re-treatment Assessment
                </span>
              </div>
            </div>
          </div>

          {/* Magazine-Style Editorial Review Spread */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Review 1: Root Canal */}
            <div className="bg-[#F2F1EC] p-6 border border-[#21443D]/15 flex flex-col justify-between space-y-4">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#A77C50] block mb-2">
                  Root Canal Experience
                </span>
                <p className="text-sm font-serif italic text-[#202624] leading-relaxed">
                  &ldquo;Root canal treatment was completed with exceptional care and calm precision. Doctor explained every single step.&rdquo;
                </p>
              </div>
              <div className="pt-3 border-t border-[#21443D]/10 flex items-center justify-between text-xs">
                <span className="font-medium text-[#21443D]">Muhammad Tariq</span>
                <span className="font-mono text-[10px] text-[#727A76]">Google Review</span>
              </div>
            </div>

            {/* Review 2: Re-Root Canal */}
            <div className="bg-[#F2F1EC] p-6 border border-[#21443D]/15 flex flex-col justify-between space-y-4 md:translate-y-3">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#A77C50] block mb-2">
                  Re-treatment Assessment
                </span>
                <p className="text-sm font-serif italic text-[#202624] leading-relaxed">
                  &ldquo;Had a complicated re-root canal for a tooth treated years ago elsewhere. The assessment was clear and honest without false promises.&rdquo;
                </p>
              </div>
              <div className="pt-3 border-t border-[#21443D]/10 flex items-center justify-between text-xs">
                <span className="font-medium text-[#21443D]">Zainab Rashid</span>
                <span className="font-mono text-[10px] text-[#727A76]">Google Review</span>
              </div>
            </div>

            {/* Review 3: Scaling */}
            <div className="bg-[#F2F1EC] p-6 border border-[#21443D]/15 flex flex-col justify-between space-y-4">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#A77C50] block mb-2">
                  Hygiene & Scaling
                </span>
                <p className="text-sm font-serif italic text-[#202624] leading-relaxed">
                  &ldquo;Scaling and polishing was thorough and gentle. Very clean clinic environment in DHA Phase 2 with sterile instruments.&rdquo;
                </p>
              </div>
              <div className="pt-3 border-t border-[#21443D]/10 flex items-center justify-between text-xs">
                <span className="font-medium text-[#21443D]">Hamza Bilal</span>
                <span className="font-mono text-[10px] text-[#727A76]">Google Review</span>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <button
              onClick={() => onNavigate('stories')}
              className="text-xs font-mono uppercase tracking-widest text-[#21443D] hover:text-[#A77C50] transition-colors inline-flex items-center gap-1.5 group cursor-pointer"
            >
              <span>Explore All 311 Verified Patient Stories</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 4 — The Treatment Path (Vertical Visual Sequence UX) */}
      <section className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-4 space-y-4 sticky top-28">
            <span className="text-xs font-mono uppercase tracking-widest text-[#A77C50]">
              Patient Navigation Protocol
            </span>
            <h2 className="text-3xl md:text-4xl font-serif text-[#21443D] font-semibold leading-tight">
              The Treatment Path
            </h2>
            <p className="text-xs text-[#727A76] leading-relaxed font-light">
              We eliminate administrative friction. A direct, clear process from your first question to your chairside consultation.
            </p>
            <div className="pt-2">
              <button
                onClick={() => onOpenBooking()}
                className="px-5 py-2.5 bg-[#21443D] text-[#F2F1EC] text-xs font-mono uppercase tracking-wider hover:bg-[#17322D] transition-colors inline-flex items-center gap-2 cursor-pointer"
              >
                <span>Initiate Step 01</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#A77C50]" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-8 space-y-6">
            {[
              {
                num: '01',
                title: 'Tell us what is bothering you',
                desc: 'Whether it is sharp toothache, scheduled scaling, or a broken crown, sharing your immediate concern helps us prepare the right chair time.',
              },
              {
                num: '02',
                title: 'Choose the relevant treatment area',
                desc: 'Select from our treatment menu or simply outline your symptoms. No medical terminology is necessary.',
              },
              {
                num: '03',
                title: 'Message the clinic on WhatsApp',
                desc: 'Send a quick message via our direct WhatsApp channel. Our reception desk receives inquiries instantly.',
              },
              {
                num: '04',
                title: 'Discuss appointment availability',
                desc: 'We will reply promptly with confirmed practitioner availability and coordinate a time that accommodates your schedule.',
              },
              {
                num: '05',
                title: 'Visit the clinic in DHA Phase 2',
                desc: 'Arrive at 281-Q Commercial Lane. Relax in a clean, quiet clinical environment while our dental team attends to your care.',
              },
            ].map((step) => (
              <div
                key={step.num}
                className="flex items-start gap-6 p-6 bg-[#E2E6E2]/30 border-l-2 border-[#A77C50] hover:bg-[#E2E6E2]/60 transition-colors"
              >
                <span className="font-mono text-xl font-bold text-[#A77C50] shrink-0">
                  {step.num}
                </span>
                <div>
                  <h3 className="text-lg font-serif text-[#21443D] font-medium">
                    {step.title}
                  </h3>
                  <p className="text-xs text-[#727A76] mt-1 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 — Visit DHA (Editorial Location Section) */}
      <section className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="bg-[#21443D] text-[#F2F1EC] p-8 md:p-14 relative overflow-hidden">
          <div className="absolute right-0 top-0 bottom-0 w-2 bg-[#A77C50]" />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-mono uppercase tracking-widest text-[#A77C50]">
                Convenient DHA Location
              </span>
              <h2 className="text-3xl md:text-5xl font-serif font-semibold">
                Visit DHA Phase 2
              </h2>
              <p className="text-sm md:text-base font-light text-[#E2E6E2]/90 leading-relaxed max-w-xl">
                Situated in Sector Q on Commercial Lane, our practice provides dedicated access for residents of DHA Lahore and nearby communities.
              </p>
              <div className="font-mono text-xs text-[#E2E6E2]/80 space-y-1 pt-2">
                <p>• 281-Q Commercial Lane, Sector Q</p>
                <p>• DHA Phase 2, Lahore, Pakistan</p>
                <p>• Tel: {CLINIC_CONTACT.phoneDisplay}</p>
              </div>

              <div className="pt-4 flex flex-wrap gap-3">
                <a
                  href={CLINIC_CONTACT.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 bg-[#A77C50] text-[#202624] text-xs font-mono uppercase tracking-wider font-semibold hover:bg-[#C4986E] transition-colors inline-flex items-center gap-2"
                >
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Get Directions in Maps</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>

                <button
                  onClick={() => onNavigate('visit-dha')}
                  className="px-5 py-3 border border-white/20 text-[#E2E6E2] text-xs font-mono uppercase tracking-wider hover:bg-white/10 transition-colors"
                >
                  View Practice Details
                </button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <ImageMaskWipe
                src="https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=1200&q=80"
                alt="Modern commercial architecture entrance in DHA Phase 2 Lahore"
                aspectRatio="aspect-[4/3]"
                direction="horizontal"
                caption="Sector Q Commercial Lane Accessibility"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 — Final Conversion */}
      <section className="max-w-4xl mx-auto px-4 md:px-8 text-center space-y-6">
        <span className="text-xs font-mono uppercase tracking-widest text-[#A77C50] block">
          Ready to Consult
        </span>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif text-[#21443D] font-medium leading-tight">
          Start with a conversation.
        </h2>
        <p className="text-sm md:text-base text-[#727A76] max-w-xl mx-auto font-light leading-relaxed">
          Reach our team directly on WhatsApp or call our desk. We will answer your clinical questions and coordinate your visit.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
          <a
            href={buildWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-7 py-3.5 bg-[#21443D] text-[#F2F1EC] text-xs font-mono uppercase tracking-wider hover:bg-[#17322D] transition-colors flex items-center justify-center gap-2"
          >
            <MessageSquare className="w-4 h-4 text-[#A77C50]" />
            <span>WhatsApp Clinic</span>
          </a>

          <a
            href={`tel:${CLINIC_CONTACT.phoneCall}`}
            className="w-full sm:w-auto px-6 py-3.5 border border-[#21443D]/30 text-[#21443D] text-xs font-mono uppercase tracking-wider hover:bg-[#E2E6E2] transition-colors flex items-center justify-center gap-2"
          >
            <Phone className="w-4 h-4 text-[#A77C50]" />
            <span>Call {CLINIC_CONTACT.phoneDisplay}</span>
          </a>

          <button
            onClick={() => onOpenBooking()}
            className="w-full sm:w-auto px-6 py-3.5 bg-[#A77C50] text-[#202624] text-xs font-mono uppercase tracking-wider font-semibold hover:bg-[#C4986E] transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <span>Book Appointment</span>
          </button>
        </div>
      </section>
    </div>
  );
};
