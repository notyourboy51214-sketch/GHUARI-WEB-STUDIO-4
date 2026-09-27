import React, { useState, useEffect } from 'react';
import {
  ArrowRight,
  MessageSquare,
  Phone,
  MapPin,
  Check,
  Star,
  ArrowUpRight,
  Clock,
  ShieldCheck,
  ShieldAlert,
  ChevronDown,
  ChevronUp,
  Instagram,
  CheckCircle2,
  Filter,
  Navigation as NavIcon,
} from 'lucide-react';
import { SectionId, Doctor, TreatmentItem } from '../types';
import { CLINIC_CONTACT, buildWhatsAppUrl, buildDetailedAppointmentWhatsAppUrl, generateAppointmentRef } from '../utils/whatsapp';
import { ImageMaskWipe } from '../components/ImageMaskWipe';
import { REVIEWS_DATA, GOOGLE_RATING, GOOGLE_REVIEWS_COUNT } from '../data/reviews';
import { DOCTORS_DATA } from '../data/doctors';
import { TREATMENTS_DATA } from '../data/treatments';

interface ContinuousHomePageProps {
  onOpenBooking: (treatment?: string) => void;
  onSelectDoctor: (doctor: Doctor) => void;
  onScrollToSection: (sectionId: SectionId) => void;
}

type FilterTopic = 'ALL' | 'ROOT CANAL' | 'SCALING' | 'CROWNS' | 'GENERAL EXPERIENCE';

export const ContinuousHomePage: React.FC<ContinuousHomePageProps> = ({
  onOpenBooking,
  onSelectDoctor,
  onScrollToSection,
}) => {
  // Accordion state for Treatments section
  const [activeAccordion, setActiveAccordion] = useState<string | null>('root-canal-care');

  // Filter state for Reviews section
  const [selectedTopic, setSelectedTopic] = useState<FilterTopic>('ALL');

  // Clean & Restore service selector
  const [selectedCleanRestore, setSelectedCleanRestore] = useState<
    'Scaling' | 'Crowns' | 'General Consultation' | 'Not Sure'
  >('Scaling');

  // Scroll-triggered IntersectionObserver to apply '.mask-wipe-active' to major images as they enter the viewport
  useEffect(() => {
    const editorialImages = document.querySelectorAll<HTMLElement>(
      'figure[data-editorial-image="true"] img, img[data-editorial-image="true"]'
    );

    if (!editorialImages.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const imgElement = entry.target as HTMLElement;
            imgElement.classList.remove('opacity-0');
            imgElement.classList.add('mask-wipe-active');

            const parentFigure = imgElement.closest('figure');
            if (parentFigure) {
              parentFigure.classList.add('revealed');
            }

            observer.unobserve(imgElement);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    editorialImages.forEach((img) => observer.observe(img));

    return () => observer.disconnect();
  }, []);

  // Direct Appointment Request Form state in Contact section
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    treatment: 'Root Canal Assessment',
    preferredDay: 'Weekday (Mon - Thu)',
    preferredTime: 'Morning (11:00 AM - 2:00 PM)',
    message: '',
  });
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    const ref = generateAppointmentRef();
    setSubmittedRef(ref);
  };

  const getFormWhatsAppUrl = () => {
    if (!submittedRef) return '#';
    return buildDetailedAppointmentWhatsAppUrl({
      ...formData,
      refId: submittedRef,
    });
  };

  const filteredReviews =
    selectedTopic === 'ALL'
      ? REVIEWS_DATA
      : REVIEWS_DATA.filter((r) => r.topic === selectedTopic);
  const featuredReview = filteredReviews[0] || REVIEWS_DATA[0];
  const supportingReviews = filteredReviews.slice(1);

  return (
    <div className="space-y-28 md:space-y-36 pb-16">
      {/* ===================================================================
          SECTION 1 — HERO
          =================================================================== */}
      <section id="home" className="relative pt-8 md:pt-16 overflow-hidden scroll-mt-28">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Narrative Column */}
            <div className="lg:col-span-7 space-y-6 md:space-y-8 z-10">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#E2E6E2] border border-[#21443D]/15 text-xs font-mono tracking-widest text-[#21443D] uppercase rounded-full shadow-xs">
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

              {/* Trust Badge & Verification Strip with Rounded Container */}
              <div className="flex flex-wrap items-center gap-6 p-4 md:px-6 bg-[#E2E6E2]/40 border border-[#21443D]/12 rounded-2xl shadow-xs">
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

              {/* CTAs with Rounded Corners */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
                <button
                  onClick={() => onOpenBooking()}
                  className="px-7 py-3.5 bg-[#21443D] text-[#F2F1EC] text-xs uppercase tracking-wider font-mono font-medium hover:bg-[#17322D] transition-all flex items-center justify-center gap-2 shadow-sm group cursor-pointer rounded-full"
                >
                  <span>Book Appointment</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#A77C50]" />
                </button>

                <a
                  href={buildWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 border border-[#21443D]/30 text-[#21443D] text-xs uppercase tracking-wider font-mono font-medium hover:bg-[#E2E6E2] transition-colors flex items-center justify-center gap-2 rounded-full"
                >
                  <MessageSquare className="w-4 h-4 text-[#A77C50]" />
                  <span>WhatsApp the Clinic</span>
                </a>
              </div>

              {/* Subtle Scroll Indicator Cue */}
              <div className="pt-2 flex items-center gap-2 text-[11px] font-mono uppercase tracking-widest text-[#727A76]">
                <button
                  onClick={() => onScrollToSection('story')}
                  className="inline-flex items-center gap-1.5 hover:text-[#21443D] transition-colors cursor-pointer"
                >
                  <span>Scroll to explore the practice</span>
                  <span className="text-[#A77C50] text-sm animate-bounce">↓</span>
                </button>
              </div>
            </div>

            {/* Right Visual Column with Oversized "01" Layer */}
            <div className="lg:col-span-5 relative">
              <div
                aria-hidden="true"
                className="absolute -top-16 -right-6 select-none font-serif text-[180px] md:text-[240px] text-[#E2E6E2]/40 font-bold leading-none pointer-events-none -z-10"
              >
                01
              </div>

              <div className="relative max-w-md mx-auto lg:max-w-none shadow-xl rounded-3xl">
                <ImageMaskWipe
                  src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1200&q=80"
                  alt="Clinical precision dental stainless steel instrument tray in directional light"
                  aspectRatio="aspect-[3/4]"
                  direction="vertical"
                  priority={true}
                  caption="Precision Instrument Suite • Sterile Preparation"
                />

                <div className="absolute -bottom-6 -left-4 bg-[#F2F1EC] border border-[#21443D]/20 p-4 shadow-lg hidden sm:block max-w-xs rounded-2xl">
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

      {/* ===================================================================
          SECTION 2 — INTRO / BRAND STORY
          =================================================================== */}
      <section id="story" className="max-w-7xl mx-auto px-4 md:px-8 scroll-mt-28">
        <div className="border-t border-[#21443D]/15 pt-12 md:pt-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#E2E6E2] text-xs font-mono tracking-widest text-[#21443D] uppercase border border-[#21443D]/15 rounded-full shadow-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-[#A77C50]" />
                <span>The Physical Practice</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-serif text-[#21443D] tracking-tight font-medium leading-[1.08]">
                The clinic behind <br />
                <span className="italic font-normal text-[#202624]">the chair.</span>
              </h2>

              <p className="text-base sm:text-lg text-[#727A76] font-light leading-relaxed">
                Located in Sector Q on Commercial Lane in DHA Phase 2, Ghauri Dental Center was established to provide unhurried, clinically sound dental care where treatment recommendations are guided strictly by diagnostics and biological preservation.
              </p>

              <div className="p-6 bg-[#E2E6E2]/50 border-l-4 border-[#A77C50] text-xs text-[#202624] space-y-2 rounded-2xl shadow-xs">
                <p className="font-semibold text-[#21443D] uppercase tracking-wider font-mono text-[11px]">
                  Clinical Philosophy
                </p>
                <p className="text-[#727A76] leading-relaxed">
                  We believe in conservative dentistry: preserving your natural tooth structure whenever biologically possible, avoiding overtreatment, and explaining every finding with clinical clarity before any procedure commences.
                </p>
              </div>

              <div className="pt-2 flex flex-wrap gap-3 text-xs font-mono">
                <div className="flex items-center gap-2 text-[#21443D] px-3.5 py-1.5 bg-white/70 border border-[#21443D]/15 rounded-full">
                  <Check className="w-4 h-4 text-[#A77C50]" />
                  <span>DHA Phase 2 Established Clinic</span>
                </div>
                <div className="flex items-center gap-2 text-[#21443D] px-3.5 py-1.5 bg-white/70 border border-[#21443D]/15 rounded-full">
                  <Check className="w-4 h-4 text-[#A77C50]" />
                  <span>Digital Radiography Diagnostics</span>
                </div>
                <div className="flex items-center gap-2 text-[#21443D] px-3.5 py-1.5 bg-white/70 border border-[#21443D]/15 rounded-full">
                  <Check className="w-4 h-4 text-[#A77C50]" />
                  <span>Autoclave Sterile Protocols</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <ImageMaskWipe
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1400&q=80"
                alt="Contemporary dental operatory chair and clinical station at Ghauri Dental Center"
                aspectRatio="aspect-[16/11]"
                direction="horizontal"
                caption="Clinical Operatory Suite • Sector Q, DHA Phase 2"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================
          SECTION 3 — MAIN SERVICES / OFFER
          =================================================================== */}
      <section id="services" className="max-w-7xl mx-auto px-4 md:px-8 scroll-mt-28">
        <div className="border-t border-[#21443D]/15 pt-12 md:pt-16 mb-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#A77C50]">
                Disciplines & Offerings
              </span>
              <h2 className="text-3xl md:text-5xl font-serif text-[#21443D] mt-1 font-semibold">
                Treatment Library.
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#727A76] max-w-md font-light leading-relaxed">
              Clear, educational guidance across our core dental disciplines in DHA Phase 2, Lahore. Review what each care pathway addresses and what questions to ask chairside.
            </p>
          </div>
        </div>

        {/* Vertical Editorial Index (NOT a generic card grid) with Rounded Cards */}
        <div className="border-t border-[#21443D]/20 divide-y divide-[#21443D]/15">
          {TREATMENTS_DATA.map((item) => {
            const isExpanded = activeAccordion === item.id;
            const whatsAppLink = buildWhatsAppUrl(item.name);

            return (
              <article
                key={item.id}
                className="py-7 md:py-9 px-4 md:px-6 transition-all rounded-2xl hover:bg-[#E2E6E2]/25"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                  {/* Category Number & Name */}
                  <div className="lg:col-span-3 flex items-start gap-4">
                    <span className="font-serif text-3xl md:text-4xl text-[#A77C50] font-light">
                      {item.categoryNumber}
                    </span>
                    <div>
                      <span className="text-[11px] font-mono uppercase tracking-widest text-[#727A76] block">
                        Category
                      </span>
                      <h3 className="text-base font-serif font-semibold text-[#21443D]">
                        {item.category}
                      </h3>
                    </div>
                  </div>

                  {/* Main Treatment Details */}
                  <div className="lg:col-span-6 space-y-3">
                    <h4 className="text-xl md:text-2xl font-serif text-[#202624] font-medium">
                      {item.name}
                    </h4>
                    <p className="text-xs md:text-sm text-[#727A76] leading-relaxed">
                      {item.summary}
                    </p>

                    <button
                      onClick={() =>
                        setActiveAccordion(isExpanded ? null : item.id)
                      }
                      className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-[#21443D] hover:text-[#A77C50] pt-1 cursor-pointer"
                    >
                      <span>
                        {isExpanded
                          ? 'Hide clinical guidance'
                          : 'View patient guidance & discussion questions'}
                      </span>
                      {isExpanded ? (
                        <ChevronUp className="w-3.5 h-3.5 text-[#A77C50]" />
                      ) : (
                        <ChevronDown className="w-3.5 h-3.5 text-[#A77C50]" />
                      )}
                    </button>

                    {isExpanded && (
                      <div className="mt-3 p-5 bg-[#E2E6E2]/60 border-l-4 border-[#A77C50] space-y-4 animate-in fade-in duration-200 rounded-2xl shadow-xs">
                        <div>
                          <h5 className="text-[11px] font-mono uppercase tracking-widest text-[#21443D] font-semibold mb-1">
                            Who commonly asks about this?
                          </h5>
                          <p className="text-xs text-[#727A76] leading-relaxed">
                            {item.whoAsks}
                          </p>
                        </div>

                        <div>
                          <h5 className="text-[11px] font-mono uppercase tracking-widest text-[#21443D] font-semibold mb-1.5">
                            What to discuss with your dentist:
                          </h5>
                          <ul className="space-y-1.5">
                            {item.discussionPoints.map((point, pIdx) => (
                              <li
                                key={pIdx}
                                className="flex items-start gap-2 text-xs text-[#202624]"
                              >
                                <span className="text-[#A77C50] mt-0.5">•</span>
                                <span>{point}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* WhatsApp Action with Rounded Corners */}
                  <div className="lg:col-span-3 flex flex-col gap-2 lg:items-end">
                    <a
                      href={whatsAppLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-2.5 px-5 bg-[#21443D] text-[#F2F1EC] text-xs font-mono uppercase tracking-wider hover:bg-[#17322D] transition-colors rounded-full shadow-xs"
                    >
                      <MessageSquare className="w-3.5 h-3.5 text-[#A77C50]" />
                      <span>Ask About This</span>
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Integrated Clean & Restore Framework with Rounded Container */}
        <div className="mt-14 p-8 md:p-12 bg-[#E2E6E2]/50 border border-[#21443D]/20 rounded-3xl shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-3">
              <span className="text-xs font-mono uppercase tracking-widest text-[#A77C50]">
                Biological Principle
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif text-[#21443D] font-semibold">
                Clean first. Restore where needed.
              </h3>
              <p className="text-xs sm:text-sm text-[#727A76] leading-relaxed">
                The foundation of sound oral health begins with clean, uninflamed gum tissues. Once plaque biology is controlled via ultrasonic scaling, conservative restorative work (fillings, crowns) can reliably protect teeth against fracture.
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                {(['Scaling', 'Crowns', 'General Consultation', 'Not Sure'] as const).map(
                  (service) => {
                    const isSelected = selectedCleanRestore === service;
                    return (
                      <button
                        key={service}
                        type="button"
                        onClick={() => setSelectedCleanRestore(service)}
                        className={`px-4 py-2 text-xs font-mono uppercase tracking-wider border cursor-pointer transition-colors rounded-full ${
                          isSelected
                            ? 'bg-[#21443D] text-[#F2F1EC] border-[#21443D] shadow-xs'
                            : 'bg-white text-[#202624] border-[#21443D]/20 hover:border-[#21443D]/40'
                        }`}
                      >
                        {service}
                      </button>
                    );
                  }
                )}
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col gap-3">
              <div className="p-4 bg-white border border-[#21443D]/10 text-xs rounded-2xl shadow-xs">
                <span className="text-[10px] font-mono text-[#A77C50] uppercase tracking-wider block mb-1">
                  Enquiry Preview
                </span>
                <p className="italic text-[#202624]">
                  &ldquo;Assalam o Alaikum, I’d like to enquire about {selectedCleanRestore} at Ghauri Dental Center.&rdquo;
                </p>
              </div>

              <a
                href={buildWhatsAppUrl(selectedCleanRestore)}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3.5 px-6 bg-[#21443D] text-[#F2F1EC] text-xs font-mono uppercase tracking-wider text-center hover:bg-[#17322D] transition-colors flex items-center justify-center gap-2 rounded-full shadow-xs"
              >
                <MessageSquare className="w-3.5 h-3.5 text-[#A77C50]" />
                <span>Message Clinic for {selectedCleanRestore}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================
          SECTION 4 — UNIQUE VALUE / APPROACH
          =================================================================== */}
      <section id="approach" className="bg-[#21443D] text-[#F2F1EC] py-16 md:py-24 border-y border-[#A77C50]/30 scroll-mt-28 md:my-8 md:rounded-3xl md:max-w-7xl md:mx-auto shadow-xl">
        <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#17322D] text-[#F2F1EC] text-xs font-mono tracking-widest uppercase border border-[#A77C50]/40 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-[#A77C50]" />
                <span>Specialist Clinical Focus</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-serif text-[#F2F1EC] tracking-tight font-medium leading-[1.08]">
                Clearer information for a treatment <br />
                <span className="italic font-normal text-[#E2E6E2]">people often worry about.</span>
              </h2>

              <p className="text-sm sm:text-base text-[#E2E6E2]/80 font-light leading-relaxed">
                Root canal therapy is fundamentally a conservative procedure — designed to preserve your natural tooth by removing diseased nerve and pulp tissue. We prioritize unhurried local anaesthesia, precise cleaning of complex canal anatomy, and patient clarity.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-5 bg-[#17322D] border border-white/10 space-y-1.5 rounded-2xl">
                  <span className="font-mono text-xs text-[#A77C50] font-bold">01 / Lingering Pain</span>
                  <p className="text-xs text-[#E2E6E2]/75">
                    Discomfort persisting after hot or chilled drinks indicates internal pulpal inflammation.
                  </p>
                </div>
                <div className="p-5 bg-[#17322D] border border-white/10 space-y-1.5 rounded-2xl">
                  <span className="font-mono text-xs text-[#A77C50] font-bold">02 / Bite Pressure</span>
                  <p className="text-xs text-[#E2E6E2]/75">
                    Throbbing when chewing points to inflammation touching tissues near the root tip.
                  </p>
                </div>
                <div className="p-5 bg-[#17322D] border border-white/10 space-y-1.5 rounded-2xl">
                  <span className="font-mono text-xs text-[#A77C50] font-bold">03 / Gum Tenderness</span>
                  <p className="text-xs text-[#E2E6E2]/75">
                    Localized swelling or dull spontaneous ache warrants digital radiographic evaluation.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <ImageMaskWipe
                src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1200&q=80"
                alt="Diagnostic dental radiograph examination showing molar root canal morphology"
                aspectRatio="aspect-[4/5]"
                direction="vertical"
                caption="Radiographic Canal Morphology Assessment"
              />
            </div>
          </div>

          {/* 5-Phase Appointment Conversation Timeline */}
          <div className="border-t border-white/10 pt-12">
            <div className="max-w-2xl mb-8 space-y-2">
              <span className="text-xs font-mono uppercase tracking-widest text-[#A77C50]">
                Step-by-Step Overview
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif text-[#F2F1EC] font-semibold">
                What the Appointment Covers
              </h3>
              <p className="text-xs text-[#E2E6E2]/70 leading-relaxed font-light">
                We talk you through each phase so there are never surprises. Local anaesthetic is administered carefully before any instrumentation begins.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {[
                {
                  step: 'Phase 01',
                  title: 'Examination & X-Ray',
                  desc: 'Digital X-ray confirms canal number, curvature, and root condition.',
                },
                {
                  step: 'Phase 02',
                  title: 'Anaesthesia & Isolation',
                  desc: 'Complete numbness and sterile barrier dam protection.',
                },
                {
                  step: 'Phase 03',
                  title: 'Canal Cleaning',
                  desc: 'Micro-instruments gently debride inflamed nerve tissue with antibacterial irrigation.',
                },
                {
                  step: 'Phase 04',
                  title: 'Biocompatible Sealing',
                  desc: 'Sterilized canals are filled with gutta-percha and sealer to prevent future infection.',
                },
                {
                  step: 'Phase 05',
                  title: 'Crown Protection',
                  desc: 'Discussion of protective ceramic crown to prevent fracture of treated tooth.',
                },
              ].map((phase, idx) => (
                <div
                  key={idx}
                  className="p-5 bg-[#17322D] border border-white/10 space-y-2 rounded-2xl shadow-xs"
                >
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#A77C50] font-bold block">
                    {phase.step}
                  </span>
                  <h4 className="font-serif text-base text-[#F2F1EC] font-medium">
                    {phase.title}
                  </h4>
                  <p className="text-xs text-[#E2E6E2]/70 leading-relaxed">
                    {phase.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Dedicated Area: Previously Treated Tooth / Re-treatment */}
          <div className="p-8 md:p-10 bg-[#17322D] border-2 border-[#A77C50]/40 space-y-4 rounded-3xl shadow-lg">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#A77C50]">
              <ShieldAlert className="w-4 h-4 text-[#A77C50]" />
              <span>Specialized Diagnostic Consultation</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif text-[#F2F1EC] font-semibold">
              Previously treated tooth causing trouble?
            </h3>
            <p className="text-xs sm:text-sm text-[#E2E6E2]/80 leading-relaxed max-w-3xl">
              Occasionally, a tooth that underwent root canal treatment years ago can develop recurrent ache, reinfection beneath an old crown, or persistent tenderness. A clinical and radiographic assessment is necessary to determine whether endodontic re-treatment is biologically viable. We never guarantee outcomes, but provide transparent findings so you can make an informed choice.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <blockquote className="text-xs italic text-[#E2E6E2]/90 border-l-2 border-[#A77C50] pl-3 py-0.5">
                &ldquo;Had a complicated re-root canal for a tooth treated years ago elsewhere. The assessment was clear and honest without false promises.&rdquo;
                <span className="block font-mono not-italic text-[10px] text-[#A77C50] mt-0.5">
                  — Zainab Rashid (Verified Google Review)
                </span>
              </blockquote>

              <a
                href={buildWhatsAppUrl('Re-Root Canal Evaluation')}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 px-6 py-3 bg-[#A77C50] text-[#202624] text-xs font-mono uppercase tracking-wider font-semibold hover:bg-[#C4986E] transition-colors rounded-full shadow-xs"
              >
                Enquire on Re-treatment
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================
          SECTION 5 — FEATURED CONTENT / VISUAL STORY
          =================================================================== */}
      <section id="gallery" className="max-w-7xl mx-auto px-4 md:px-8 scroll-mt-28">
        <div className="border-t border-[#21443D]/15 pt-12 md:pt-16 mb-10">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-[#A77C50]">
              Authentic Operatory & Environment
            </span>
            <h2 className="text-3xl md:text-5xl font-serif text-[#21443D] font-semibold">
              Inside the Clinical Spaces.
            </h2>
            <p className="text-xs sm:text-sm text-[#727A76] leading-relaxed">
              Healthcare environments should engender calmness. Every detail of our DHA Phase 2 clinic is arranged to facilitate focused surgical precision, sterile discipline, and unhurried comfort.
            </p>
          </div>
        </div>

        {/* Editorial Photo Spread */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch mb-12">
          <div className="md:col-span-7">
            <ImageMaskWipe
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1400&q=80"
              alt="Contemporary dental operatory chair and clinical station at Ghauri Dental Center"
              aspectRatio="aspect-[16/11]"
              direction="vertical"
              caption="Clinical Operatory Suite • Sector Q, DHA Phase 2"
            />
          </div>

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

        {/* 4 Principles of the Operatory with Rounded Corners */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          <div className="p-6 bg-[#E2E6E2]/40 border border-[#21443D]/10 space-y-2 rounded-2xl shadow-xs transition-all hover:bg-[#E2E6E2]/60 hover:shadow-sm">
            <span className="font-mono text-xs text-[#A77C50] font-bold">01 / Sterile</span>
            <h3 className="font-serif text-base font-semibold text-[#21443D]">Clean Environment</h3>
            <p className="text-xs text-[#727A76] leading-relaxed">
              Autoclave sterilization for every dental tray, single-use barrier controls, and sterile clinical surfaces.
            </p>
          </div>
          <div className="p-6 bg-[#E2E6E2]/40 border border-[#21443D]/10 space-y-2 rounded-2xl shadow-xs transition-all hover:bg-[#E2E6E2]/60 hover:shadow-sm">
            <span className="font-mono text-xs text-[#A77C50] font-bold">02 / Setup</span>
            <h3 className="font-serif text-base font-semibold text-[#21443D]">Treatment-Focused</h3>
            <p className="text-xs text-[#727A76] leading-relaxed">
              Dedicated chairs tailored for endodontic therapy, hygiene scaling, and prosthetic impressions without clutter.
            </p>
          </div>
          <div className="p-6 bg-[#E2E6E2]/40 border border-[#21443D]/10 space-y-2 rounded-2xl shadow-xs transition-all hover:bg-[#E2E6E2]/60 hover:shadow-sm">
            <span className="font-mono text-xs text-[#A77C50] font-bold">03 / Clarity</span>
            <h3 className="font-serif text-base font-semibold text-[#21443D]">Modern Equipment</h3>
            <p className="text-xs text-[#727A76] leading-relaxed">
              Equipped with digital radiography systems and ultrasonic scalers to assist thorough diagnostic clarity.
            </p>
          </div>
          <div className="p-6 bg-[#E2E6E2]/40 border border-[#21443D]/10 space-y-2 rounded-2xl shadow-xs transition-all hover:bg-[#E2E6E2]/60 hover:shadow-sm">
            <span className="font-mono text-xs text-[#A77C50] font-bold">04 / Dialogue</span>
            <h3 className="font-serif text-base font-semibold text-[#21443D]">Patient-Centered</h3>
            <p className="text-xs text-[#727A76] leading-relaxed">
              Transparent discussions before any instrument touches your teeth. You will always know why a procedure is advised.
            </p>
          </div>
        </div>

        {/* Elegant Official Instagram Portal with Rounded Corners */}
        <div className="p-8 md:p-10 bg-[#21443D] text-[#F2F1EC] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 rounded-3xl shadow-lg">
          <div className="space-y-1">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#A77C50] block">
              Official Instagram Channel
            </span>
            <h3 className="text-xl sm:text-2xl font-serif font-medium">
              Follow @ghauri_dental_center
            </h3>
            <p className="text-xs text-[#E2E6E2]/75 max-w-lg">
              View authentic clinic updates, clinical glimpses, hygiene guidance, and announcements directly on our official Instagram.
            </p>
          </div>
          <a
            href={CLINIC_CONTACT.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 bg-[#F2F1EC] text-[#202624] text-xs font-mono uppercase tracking-wider font-semibold hover:bg-white transition-colors shrink-0 inline-flex items-center gap-2 rounded-full shadow-xs"
          >
            <Instagram className="w-3.5 h-3.5 text-[#A77C50]" />
            <span>View Official Instagram</span>
            <ArrowUpRight className="w-3 h-3 text-[#A77C50]" />
          </a>
        </div>
      </section>

      {/* ===================================================================
          SECTION 6 — TRUST / REVIEWS
          =================================================================== */}
      <section id="reviews" className="bg-[#E2E6E2]/40 py-16 md:py-24 border-y border-[#21443D]/10 scroll-mt-28 md:my-8 md:rounded-3xl md:max-w-7xl md:mx-auto">
        <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-12">
          {/* Header & Numbers */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end border-b border-[#21443D]/15 pb-10">
            <div className="lg:col-span-6 space-y-3">
              <span className="text-xs font-mono uppercase tracking-widest text-[#A77C50]">
                Verified Public Record
              </span>
              <h2 className="text-3xl sm:text-5xl font-serif text-[#21443D] font-semibold">
                Patient Stories.
              </h2>
              <p className="text-xs sm:text-sm text-[#727A76] leading-relaxed">
                Patients in DHA Phase 2 and across Lahore frequently highlight comfortable treatment experiences, clear diagnostic explanations, and thorough restorative care.
              </p>
            </div>

            <div className="lg:col-span-6 flex flex-col sm:flex-row items-start sm:items-baseline gap-6 lg:justify-end">
              <div>
                <div className="font-serif text-6xl sm:text-7xl font-bold text-[#21443D] leading-none">
                  {GOOGLE_REVIEWS_COUNT}
                </div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#727A76] block mt-1">
                  Google Reviews
                </span>
              </div>

              <div className="border-l-2 border-[#A77C50] pl-4 space-y-1">
                <div className="flex text-[#A77C50]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#A77C50] text-[#A77C50]" />
                  ))}
                </div>
                <div className="text-sm font-serif font-bold text-[#21443D]">
                  {GOOGLE_RATING} out of 5.0
                </div>
                <div className="text-[11px] font-mono text-[#727A76]">
                  Average Patient Rating
                </div>
              </div>
            </div>
          </div>

          {/* Review Filter Buttons with Rounded-Full Caps */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono uppercase tracking-wider text-[#727A76] mr-2 flex items-center gap-1">
              <Filter className="w-3.5 h-3.5 text-[#A77C50]" />
              <span>Filter Topic:</span>
            </span>

            {(['ALL', 'ROOT CANAL', 'SCALING', 'CROWNS', 'GENERAL EXPERIENCE'] as FilterTopic[]).map(
              (topic) => {
                const isSelected = selectedTopic === topic;
                return (
                  <button
                    key={topic}
                    onClick={() => setSelectedTopic(topic)}
                    className={`px-4 py-2 text-xs font-mono uppercase tracking-wider transition-all border cursor-pointer rounded-full ${
                      isSelected
                        ? 'bg-[#21443D] text-[#F2F1EC] border-[#21443D] font-semibold shadow-xs'
                        : 'bg-white text-[#202624] border-[#21443D]/20 hover:border-[#21443D]/50'
                    }`}
                  >
                    {topic}
                  </button>
                );
              }
            )}
          </div>

          {/* Magazine-Style Reviews Spread with Rounded Corners */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 bg-[#21443D] text-[#F2F1EC] p-8 md:p-10 relative overflow-hidden space-y-6 rounded-3xl shadow-lg">
              <div className="absolute right-0 top-0 bottom-0 w-2.5 bg-[#A77C50]" />
              <div className="inline-block px-3 py-1 bg-[#A77C50]/20 text-[#A77C50] text-[10px] font-mono uppercase tracking-widest rounded-full">
                Featured Review • {featuredReview.topic}
              </div>

              <p className="font-serif text-xl sm:text-2xl italic leading-relaxed text-[#F2F1EC]">
                &ldquo;{featuredReview.fullText}&rdquo;
              </p>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-base text-[#F2F1EC]">
                    {featuredReview.author}
                  </h3>
                  <span className="text-xs font-mono text-[#E2E6E2]/60">
                    {featuredReview.tag}
                  </span>
                </div>
                <div className="flex text-[#A77C50]">
                  {[...Array(featuredReview.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#A77C50] text-[#A77C50]" />
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-4">
              {supportingReviews.slice(0, 2).map((rev) => (
                <div
                  key={rev.id}
                  className="bg-[#F2F1EC] border border-[#21443D]/15 p-6 space-y-3 rounded-2xl shadow-xs transition-all hover:shadow-md"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#A77C50]">
                      {rev.topic}
                    </span>
                    <div className="flex text-[#A77C50]">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-[#A77C50] text-[#A77C50]" />
                      ))}
                    </div>
                  </div>

                  <p className="text-xs md:text-sm font-serif italic text-[#202624] leading-relaxed">
                    &ldquo;{rev.excerpt}&rdquo;
                  </p>

                  <div className="pt-2 border-t border-[#21443D]/10 flex items-center justify-between text-xs">
                    <span className="font-medium text-[#21443D]">{rev.author}</span>
                    <span className="font-mono text-[10px] text-[#727A76]">{rev.tag}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Review-source disclosure with Rounded Corners */}
          <div className="p-4 md:px-6 bg-white border border-[#21443D]/10 flex items-center justify-between text-xs text-[#727A76] rounded-2xl shadow-xs">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#A77C50] shrink-0" />
              <span>
                <strong>Authenticity Disclosure:</strong> Patient feedback shown from Google reviews submitted directly by verified public visitors.
              </span>
            </div>
            <span className="font-mono text-[10px] shrink-0 hidden sm:inline">
              311 Public Ratings
            </span>
          </div>
        </div>
      </section>

      {/* ===================================================================
          SECTION 7 — PROCESS / HOW IT WORKS
          =================================================================== */}
      <section id="process" className="max-w-7xl mx-auto px-4 md:px-8 scroll-mt-28">
        <div className="border-t border-[#21443D]/15 pt-12 md:pt-16 mb-12">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-[#A77C50]">
              Patient Navigation Protocol
            </span>
            <h2 className="text-3xl md:text-5xl font-serif text-[#21443D] font-semibold">
              How It Works: The Treatment Path.
            </h2>
            <p className="text-xs sm:text-sm text-[#727A76] leading-relaxed">
              We eliminate administrative friction. A direct, clear process from your first question to your chairside consultation in DHA Phase 2.
            </p>
          </div>
        </div>

        {/* 5-Step Visual Sequence with Rounded Containers */}
        <div className="space-y-4 mb-16">
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
              className="flex items-start gap-6 p-6 bg-[#E2E6E2]/35 border-l-4 border-[#A77C50] hover:bg-[#E2E6E2]/60 transition-colors rounded-2xl shadow-xs"
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

        {/* Sensible First Visit Guidance & Questions to Ask with Rounded Corners */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-6 p-8 bg-[#E2E6E2]/40 border border-[#21443D]/15 space-y-4 rounded-3xl shadow-xs">
            <span className="text-xs font-mono uppercase tracking-widest text-[#A77C50]">
              Sensible Guidance
            </span>
            <h3 className="text-2xl font-serif text-[#21443D] font-semibold">
              What to Bring to the Clinic
            </h3>
            <ul className="space-y-3 text-xs text-[#202624]">
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-[#A77C50] shrink-0 mt-0.5" />
                <span>
                  <strong>Previous X-Rays or Records:</strong> If you have recent dental radiographs from previous clinics, have digital images on your phone.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-[#A77C50] shrink-0 mt-0.5" />
                <span>
                  <strong>Current Medication List:</strong> Please inform the doctor of any medications you take regularly prior to procedures.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-[#A77C50] shrink-0 mt-0.5" />
                <span>
                  <strong>Personal Contact Details:</strong> An active WhatsApp or phone number for appointment follow-ups and care instructions.
                </span>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-6 p-8 bg-[#21443D] text-[#F2F1EC] border border-[#21443D] space-y-4 rounded-3xl shadow-lg">
            <span className="text-xs font-mono uppercase tracking-widest text-[#A77C50]">
              Chairside Empowerment
            </span>
            <h3 className="text-2xl font-serif text-[#F2F1EC] font-semibold">
              Questions to Ask Your Dentist
            </h3>
            <ul className="space-y-2.5 text-xs">
              <li className="p-3.5 bg-[#17322D] border border-white/10 rounded-xl">
                <strong className="text-[#A77C50] block mb-0.5">01 / Treatment Options:</strong>
                <span className="text-[#E2E6E2]/90">
                  &ldquo;What specific treatment is recommended for this tooth, and are there conservative alternatives?&rdquo;
                </span>
              </li>
              <li className="p-3.5 bg-[#17322D] border border-white/10 rounded-xl">
                <strong className="text-[#A77C50] block mb-0.5">02 / Timeline & Visits:</strong>
                <span className="text-[#E2E6E2]/90">
                  &ldquo;How many clinical visits may be required to complete this restoration or root canal safely?&rdquo;
                </span>
              </li>
              <li className="p-3.5 bg-[#17322D] border border-white/10 rounded-xl">
                <strong className="text-[#A77C50] block mb-0.5">03 / Long-Term Care:</strong>
                <span className="text-[#E2E6E2]/90">
                  &ldquo;What should I do at home to maintain the result and prevent recurrent issues?&rdquo;
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ===================================================================
          SECTION 8 — BUSINESS-SPECIFIC INFORMATION (THE DOCTORS)
          =================================================================== */}
      <section id="doctors" className="max-w-7xl mx-auto px-4 md:px-8 scroll-mt-28">
        <div className="border-t border-[#21443D]/15 pt-12 md:pt-16 mb-12">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#E2E6E2] text-xs font-mono tracking-widest text-[#21443D] uppercase border border-[#21443D]/15 rounded-full shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#A77C50]" />
              <span>Verified Clinical Practitioners</span>
            </div>

            <h2 className="text-3xl md:text-5xl font-serif text-[#21443D] font-semibold">
              The Doctors.
            </h2>

            <p className="text-xs sm:text-sm text-[#727A76] leading-relaxed">
              Meet the practicing clinical team at Ghauri Dental Center in DHA Phase 2, Lahore. Our team provides disciplined endodontic, restorative, and oral hygiene care.
            </p>
          </div>
        </div>

        {/* Staggered Vertical Roster with Rounded-3xl Cards */}
        <div className="space-y-10">
          {DOCTORS_DATA.map((doctor, index) => {
            const isFirst = index === 0;

            return (
              <div
                key={doctor.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-8 md:p-10 border transition-all rounded-3xl shadow-sm ${
                  isFirst
                    ? 'bg-[#21443D] text-[#F2F1EC] border-[#21443D] shadow-lg'
                    : 'bg-[#F2F1EC] text-[#202624] border-[#21443D]/15 hover:border-[#21443D]/40'
                }`}
              >
                {/* Monogram Clinical Avatar with Rounded-Full */}
                <div className="lg:col-span-3 flex flex-col items-center justify-center">
                  <div
                    className={`w-24 h-24 flex items-center justify-center font-serif text-3xl font-bold border rounded-full shadow-inner ${
                      isFirst
                        ? 'bg-[#17322D] text-[#F2F1EC] border-[#A77C50]'
                        : 'bg-[#E2E6E2] text-[#21443D] border-[#21443D]/20'
                    }`}
                  >
                    {doctor.name
                      .split(' ')
                      .map((n) => n[0])
                      .join('')
                      .slice(0, 3)}
                  </div>
                  <span
                    className={`mt-2 text-[10px] font-mono uppercase tracking-widest ${
                      isFirst ? 'text-[#A77C50]' : 'text-[#727A76]'
                    }`}
                  >
                    Verified Practitioner
                  </span>
                </div>

                {/* Doctor Bio */}
                <div className="lg:col-span-6 space-y-3">
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider block text-[#A77C50]">
                      {doctor.department}
                    </span>
                    <h3
                      className={`text-2xl md:text-3xl font-serif font-semibold mt-0.5 ${
                        isFirst ? 'text-[#F2F1EC]' : 'text-[#21443D]'
                      }`}
                    >
                      {doctor.name}
                    </h3>
                    <p
                      className={`text-xs mt-0.5 ${
                        isFirst ? 'text-[#E2E6E2]/70' : 'text-[#727A76]'
                      }`}
                    >
                      {doctor.title}
                    </p>
                  </div>

                  <ul className="space-y-1 text-xs">
                    {doctor.verifiedDetails.map((detail, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2">
                        <CheckCircle2
                          className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[#A77C50]"
                        />
                        <span className={isFirst ? 'text-[#E2E6E2]/90' : 'text-[#202624]'}>
                          {detail}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {doctor.clinicalFocus.map((focus, fIdx) => (
                      <span
                        key={fIdx}
                        className={`text-[11px] px-3 py-1 border rounded-full ${
                          isFirst
                            ? 'bg-white/10 border-white/20 text-[#E2E6E2]'
                            : 'bg-white border-[#21443D]/15 text-[#21443D]'
                        }`}
                      >
                        {focus}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions with Rounded-Full */}
                <div className="lg:col-span-3 flex flex-col gap-2.5 lg:items-end">
                  <button
                    onClick={() => onSelectDoctor(doctor)}
                    className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 py-2.5 px-5 text-xs font-mono uppercase tracking-wider transition-colors cursor-pointer rounded-full shadow-xs ${
                      isFirst
                        ? 'bg-[#A77C50] text-[#202624] font-semibold hover:bg-[#C4986E]'
                        : 'bg-[#21443D] text-[#F2F1EC] hover:bg-[#17322D]'
                    }`}
                  >
                    <span>View Profile</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href={buildWhatsAppUrl(`Consultation enquiry for ${doctor.name}`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full sm:w-auto inline-flex items-center justify-center gap-1.5 py-2 px-5 text-xs font-mono uppercase tracking-wider transition-colors border rounded-full ${
                      isFirst
                        ? 'border-white/20 text-[#E2E6E2] hover:bg-white/10'
                        : 'border-[#21443D]/25 text-[#21443D] hover:bg-[#E2E6E2]'
                    }`}
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-[#A77C50]" />
                    <span>WhatsApp Enquiry</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Schedule Transparency Notice with Rounded Corners */}
        <div className="mt-8 p-6 bg-[#E2E6E2]/50 border border-[#21443D]/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 rounded-2xl shadow-xs">
          <div className="flex items-start gap-3">
            <Clock className="w-5 h-5 text-[#A77C50] shrink-0 mt-0.5" />
            <div>
              <h4 className="font-serif text-base font-semibold text-[#21443D]">
                Consultation Availability Notice
              </h4>
              <p className="text-xs text-[#727A76] mt-0.5 leading-relaxed">
                Clinic availability can vary by doctor and appointment type. Contact the clinic to confirm your preferred doctor’s current schedule.
              </p>
            </div>
          </div>

          <a
            href={buildWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-6 py-2.5 bg-[#21443D] text-[#F2F1EC] text-xs font-mono uppercase tracking-wider hover:bg-[#17322D] transition-colors rounded-full shadow-xs"
          >
            Check Doctor Schedule
          </a>
        </div>
      </section>

      {/* ===================================================================
          SECTION 9 — LOCATION / CONTACT
          =================================================================== */}
      <section id="contact" className="max-w-7xl mx-auto px-4 md:px-8 scroll-mt-28">
        <div className="border-t border-[#21443D]/15 pt-12 md:pt-16 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#E2E6E2] text-xs font-mono tracking-widest text-[#21443D] uppercase border border-[#21443D]/15 mb-6 rounded-full shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#A77C50]" />
            <span>Practice Coordinates & Enquiries</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8">
              <h2 className="font-serif text-5xl sm:text-7xl md:text-8xl text-[#21443D] font-medium leading-[0.95] tracking-tight">
                281-Q <br />
                <span className="italic font-normal text-[#202624]">Commercial Lane</span> <br />
                DHA Phase 2 <br />
                <span className="text-3xl sm:text-5xl md:text-6xl text-[#727A76] font-normal">Lahore</span>
              </h2>
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
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#21443D] text-[#F2F1EC] text-xs font-mono uppercase tracking-wider hover:bg-[#17322D] transition-colors rounded-full shadow-xs"
                >
                  <MapPin className="w-4 h-4 text-[#A77C50]" />
                  <span>Open in Google Maps</span>
                  <ArrowUpRight className="w-4 h-4 text-[#A77C50]" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Grid & Fast WhatsApp Enquiry Form with Rounded Containers */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Direct Coordinates */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 bg-[#21443D] text-[#F2F1EC] border border-[#21443D] space-y-6 rounded-3xl shadow-lg">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#A77C50] block mb-1">
                  Direct Channels
                </span>
                <h3 className="text-2xl font-serif font-semibold">
                  Clinic Contact Details
                </h3>
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

              <div className="pt-2 border-t border-white/10 text-xs text-[#E2E6E2]/70 space-y-1">
                <p className="font-semibold text-[#A77C50]">Operating Hours Notice:</p>
                <p>
                  Please contact the clinic to confirm current consultation availability. Clinic availability can vary by doctor and appointment type.
                </p>
              </div>
            </div>

            <div className="p-6 bg-[#E2E6E2]/40 border border-[#21443D]/15 space-y-2 text-xs rounded-2xl shadow-xs">
              <div className="flex items-center gap-2 font-mono text-[#21443D] font-semibold">
                <NavIcon className="w-3.5 h-3.5 text-[#A77C50]" />
                <span>Sector Q Commercial Lane Directions:</span>
              </div>
              <p className="text-[#727A76] leading-relaxed">
                Turn towards Sector Q Commercial Area from Ghazi Road or DHA Main Boulevard. The practice is located on Commercial Lane with street vehicle parking available.
              </p>
            </div>
          </div>

          {/* Interactive WhatsApp Appointment Enquiry Form with Rounded Card & Inputs */}
          <div className="lg:col-span-7 bg-white border border-[#21443D]/15 p-8 md:p-10 shadow-sm rounded-3xl">
            {!submittedRef ? (
              <form onSubmit={handleFormSubmit} className="space-y-5">
                <div className="border-b border-[#21443D]/15 pb-4">
                  <span className="text-xs font-mono uppercase tracking-widest text-[#A77C50]">
                    Direct WhatsApp Coordination
                  </span>
                  <h3 className="text-2xl md:text-3xl font-serif text-[#21443D] font-semibold mt-1">
                    Enquire for an Appointment
                  </h3>
                  <p className="text-xs text-[#727A76] mt-1">
                    Fill in your details below. You will be redirected to WhatsApp with your enquiry formatted for our reception desk.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#21443D] mb-1.5 font-medium">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Tariq Mehmood"
                      className="w-full text-xs px-4 py-3 bg-[#F2F1EC] border border-[#21443D]/20 focus:border-[#21443D] focus:outline-hidden rounded-xl"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#21443D] mb-1.5 font-medium">
                      WhatsApp / Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. 0300 1234567"
                      className="w-full text-xs px-4 py-3 bg-[#F2F1EC] border border-[#21443D]/20 focus:border-[#21443D] focus:outline-hidden rounded-xl"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#21443D] mb-1.5 font-medium">
                      Treatment Concern
                    </label>
                    <select
                      value={formData.treatment}
                      onChange={(e) => setFormData({ ...formData, treatment: e.target.value })}
                      className="w-full text-xs px-3.5 py-3 bg-[#F2F1EC] border border-[#21443D]/20 focus:border-[#21443D] focus:outline-hidden rounded-xl"
                    >
                      <option value="Root Canal Assessment">Root Canal Assessment</option>
                      <option value="Re-treatment of Old Root Canal">Re-treatment of Old Root Canal</option>
                      <option value="Scaling & Polishing">Scaling & Polishing</option>
                      <option value="Crown or Bridge Restoration">Crown or Bridge Restoration</option>
                      <option value="General Dental Checkup">General Dental Checkup</option>
                      <option value="Other Consultation">Other Consultation</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#21443D] mb-1.5 font-medium">
                      Preferred Day
                    </label>
                    <select
                      value={formData.preferredDay}
                      onChange={(e) => setFormData({ ...formData, preferredDay: e.target.value })}
                      className="w-full text-xs px-3.5 py-3 bg-[#F2F1EC] border border-[#21443D]/20 focus:border-[#21443D] focus:outline-hidden rounded-xl"
                    >
                      <option value="Today / Earliest Available">Today / Earliest Available</option>
                      <option value="Weekday Morning">Weekday Morning</option>
                      <option value="Weekday Evening">Weekday Evening</option>
                      <option value="Saturday">Saturday</option>
                      <option value="Sunday">Sunday</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#21443D] mb-1.5 font-medium">
                      Preferred Time
                    </label>
                    <select
                      value={formData.preferredTime}
                      onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                      className="w-full text-xs px-3.5 py-3 bg-[#F2F1EC] border border-[#21443D]/20 focus:border-[#21443D] focus:outline-hidden rounded-xl"
                    >
                      <option value="Morning (11:00 AM - 2:00 PM)">Morning (11:00 AM - 2:00 PM)</option>
                      <option value="Afternoon (2:00 PM - 5:00 PM)">Afternoon (2:00 PM - 5:00 PM)</option>
                      <option value="Evening (5:00 PM - 9:00 PM)">Evening (5:00 PM - 9:00 PM)</option>
                      <option value="Flexible Schedule">Flexible Schedule</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#21443D] mb-1.5 font-medium">
                    Additional Notes (Symptoms, tooth location, etc.)
                  </label>
                  <textarea
                    rows={2}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="e.g. Upper molar hurts on chewing, need morning slot"
                    className="w-full text-xs px-4 py-3 bg-[#F2F1EC] border border-[#21443D]/20 focus:border-[#21443D] focus:outline-hidden rounded-xl"
                  />
                </div>

                <div className="pt-1">
                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 bg-[#21443D] text-[#F2F1EC] text-xs font-mono uppercase tracking-wider font-medium hover:bg-[#17322D] transition-colors flex items-center justify-center gap-2 cursor-pointer rounded-full shadow-sm"
                  >
                    <MessageSquare className="w-4 h-4 text-[#A77C50]" />
                    <span>Generate WhatsApp Enquiry</span>
                  </button>
                </div>

                <p className="text-[10px] text-center text-[#727A76]">
                  Notice: Submitting generates an inquiry. The appointment is finalized when reception confirms clinic and doctor availability directly.
                </p>
              </form>
            ) : (
              /* Confirmation State with Generated Reference ID */
              <div className="space-y-5 text-center py-4 animate-in fade-in duration-300">
                <div className="w-12 h-12 rounded-full bg-[#E2E6E2] text-[#21443D] flex items-center justify-center mx-auto border border-[#21443D]/20 shadow-xs">
                  <Check className="w-6 h-6 text-[#A77C50]" />
                </div>

                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-[#A77C50] block">
                    Reference Generated
                  </span>
                  <h3 className="text-2xl font-serif text-[#21443D] font-semibold mt-1">
                    Your enquiry is ready for WhatsApp.
                  </h3>
                  <div className="mt-2 inline-flex items-center gap-2 px-4 py-1.5 bg-[#E2E6E2] text-xs font-mono font-bold text-[#21443D] rounded-full">
                    <span>Reference ID: {submittedRef}</span>
                  </div>
                </div>

                <p className="text-xs text-[#727A76] max-w-md mx-auto leading-relaxed">
                  Click below to open WhatsApp with your reference ID and appointment preferences pre-populated. Our team at 281-Q Commercial Lane will reply with confirmed doctor timing.
                </p>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={getFormWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-8 py-3.5 bg-[#21443D] text-[#F2F1EC] text-xs font-mono uppercase tracking-wider font-semibold hover:bg-[#17322D] transition-colors inline-flex items-center justify-center gap-2 rounded-full shadow-sm"
                  >
                    <MessageSquare className="w-4 h-4 text-[#A77C50]" />
                    <span>Send to WhatsApp Now</span>
                  </a>

                  <button
                    type="button"
                    onClick={() => setSubmittedRef(null)}
                    className="w-full sm:w-auto px-6 py-3.5 border border-[#21443D]/25 text-xs font-mono uppercase tracking-wider text-[#21443D] hover:bg-[#E2E6E2] transition-colors cursor-pointer rounded-full"
                  >
                    Modify Form
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ===================================================================
          SECTION 10 — FINAL CTA
          =================================================================== */}
      <section id="cta" className="max-w-4xl mx-auto px-4 md:px-8 text-center space-y-6 scroll-mt-28 p-10 md:p-14 bg-[#E2E6E2]/35 border border-[#21443D]/10 rounded-3xl shadow-sm">
        <span className="text-xs font-mono uppercase tracking-widest text-[#A77C50] inline-block px-4 py-1 bg-white/70 border border-[#21443D]/10 rounded-full">
          Welcome to Ghauri Dental Center
        </span>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif text-[#21443D] font-medium leading-tight">
          Start with a conversation.
        </h2>
        <p className="text-sm md:text-base text-[#727A76] max-w-xl mx-auto font-light leading-relaxed">
          Your next dental conversation can start here. Reach our team directly on WhatsApp or call our desk to discuss scaling, root canal therapy, or general tooth preservation.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
          <a
            href={buildWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-7 py-3.5 bg-[#21443D] text-[#F2F1EC] text-xs font-mono uppercase tracking-wider hover:bg-[#17322D] transition-colors flex items-center justify-center gap-2 rounded-full shadow-sm"
          >
            <MessageSquare className="w-4 h-4 text-[#A77C50]" />
            <span>WhatsApp Clinic</span>
          </a>

          <a
            href={`tel:${CLINIC_CONTACT.phoneCall}`}
            className="w-full sm:w-auto px-6 py-3.5 border border-[#21443D]/30 text-[#21443D] text-xs font-mono uppercase tracking-wider hover:bg-[#E2E6E2] transition-colors flex items-center justify-center gap-2 rounded-full"
          >
            <Phone className="w-4 h-4 text-[#A77C50]" />
            <span>Call {CLINIC_CONTACT.phoneDisplay}</span>
          </a>

          <a
            href={CLINIC_CONTACT.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-3.5 bg-[#A77C50] text-[#202624] text-xs font-mono uppercase tracking-wider font-semibold hover:bg-[#C4986E] transition-colors flex items-center justify-center gap-1.5 rounded-full shadow-sm"
          >
            <MapPin className="w-3.5 h-3.5" />
            <span>Get Directions</span>
          </a>
        </div>
      </section>
    </div>
  );
};
