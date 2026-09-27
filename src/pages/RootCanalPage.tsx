import React from 'react';
import { MessageSquare, Phone, AlertCircle, CheckCircle2, ArrowRight, ShieldAlert, Clock, Sparkles } from 'lucide-react';
import { PageId } from '../types';
import { CLINIC_CONTACT, buildWhatsAppUrl } from '../utils/whatsapp';
import { ImageMaskWipe } from '../components/ImageMaskWipe';

interface RootCanalPageProps {
  onNavigate: (page: PageId) => void;
  onOpenBooking: (treatment?: string) => void;
}

export const RootCanalPage: React.FC<RootCanalPageProps> = ({ onNavigate, onOpenBooking }) => {
  const rctWhatsAppUrl = buildWhatsAppUrl('Root Canal Treatment & Evaluation');
  const reRctWhatsAppUrl = buildWhatsAppUrl('Re-Root Canal Evaluation (Previous Treatment)');

  return (
    <div className="space-y-24 md:space-y-32 pb-16">
      {/* SECTION 1: Editorial RCT Introduction */}
      <section className="pt-8 md:pt-16 max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#21443D] text-[#F2F1EC] text-xs font-mono tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#A77C50]" />
              <span>Specialist Clinical Focus</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-serif text-[#21443D] tracking-tight font-medium leading-[1.08]">
              Clearer information for a treatment <br />
              <span className="italic font-normal text-[#202624]">people often worry about.</span>
            </h1>

            <p className="text-base sm:text-lg text-[#727A76] font-light leading-relaxed">
              Root canal therapy is fundamentally a conservative procedure — designed to preserve your natural tooth by removing diseased nerve and pulp tissue. We prioritize unhurried local anaesthesia, precise cleaning of complex canal anatomy, and patient clarity.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <a
                href={rctWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 bg-[#21443D] text-[#F2F1EC] text-xs font-mono uppercase tracking-wider hover:bg-[#17322D] transition-colors flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4 text-[#A77C50]" />
                <span>Ask About Root Canal Care</span>
              </a>

              <a
                href={`tel:${CLINIC_CONTACT.phoneCall}`}
                className="px-6 py-3.5 border border-[#21443D]/30 text-[#21443D] text-xs font-mono uppercase tracking-wider hover:bg-[#E2E6E2] transition-colors flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#A77C50]" />
                <span>Call {CLINIC_CONTACT.phoneDisplay}</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <ImageMaskWipe
              src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1200&q=80"
              alt="Diagnostic dental radiograph examination showing molar root canal morphology"
              aspectRatio="aspect-[4/5]"
              direction="vertical"
              priority={true}
              caption="Radiographic Canal Morphology Assessment"
            />
          </div>
        </div>
      </section>

      {/* SECTION 2: Why Patients Seek Root Canal Treatment (Educational, No Self-Diagnosis) */}
      <section className="bg-[#E2E6E2]/40 py-16 md:py-24 border-y border-[#21443D]/10">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="max-w-3xl mb-12 space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-[#A77C50]">
              Educational Diagnostic Guide
            </span>
            <h2 className="text-3xl md:text-4xl font-serif text-[#21443D] font-semibold">
              Why Patients Seek Root Canal Care
            </h2>
            <p className="text-xs md:text-sm text-[#727A76] leading-relaxed">
              When the dental pulp (containing blood vessels and nerves) becomes inflamed or infected by deep decay, cracked enamel, or repeated dental procedures, root canal therapy is considered to resolve the infection.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-[#F2F1EC] border border-[#21443D]/15 space-y-3">
              <span className="font-mono text-xs text-[#A77C50] font-semibold">01 / Symptom Pattern</span>
              <h3 className="font-serif text-lg font-medium text-[#21443D]">
                Lingering Temperature Sensitivity
              </h3>
              <p className="text-xs text-[#727A76] leading-relaxed">
                Discomfort that persists long after hot tea or chilled water is swallowed often indicates internal pulpal inflammation rather than ordinary enamel sensitivity.
              </p>
            </div>

            <div className="p-6 bg-[#F2F1EC] border border-[#21443D]/15 space-y-3">
              <span className="font-mono text-xs text-[#A77C50] font-semibold">02 / Symptom Pattern</span>
              <h3 className="font-serif text-lg font-medium text-[#21443D]">
                Pain When Chewing or Tapping
              </h3>
              <p className="text-xs text-[#727A76] leading-relaxed">
                Sharp or throbbing pressure when biting food typically points to localized inflammation having reached the tissues surrounding the tooth root tip (periapical area).
              </p>
            </div>

            <div className="p-6 bg-[#F2F1EC] border border-[#21443D]/15 space-y-3">
              <span className="font-mono text-xs text-[#A77C50] font-semibold">03 / Symptom Pattern</span>
              <h3 className="font-serif text-lg font-medium text-[#21443D]">
                Gum Swelling or Dull Aches
              </h3>
              <p className="text-xs text-[#727A76] leading-relaxed">
                A localized tender bump on the gum or a deep, spontaneous ache that disrupts sleep warrants immediate clinical evaluation with targeted digital radiography.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: What the Appointment Conversation Covers (Vertical Timeline) */}
      <section className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 space-y-4 sticky top-28">
            <span className="text-xs font-mono uppercase tracking-widest text-[#A77C50]">
              Step-by-Step Overview
            </span>
            <h2 className="text-3xl md:text-4xl font-serif text-[#21443D] font-semibold leading-tight">
              What the Appointment Conversation Covers
            </h2>
            <p className="text-xs md:text-sm text-[#727A76] leading-relaxed font-light">
              We talk you through each phase so there are never surprises. Local anaesthetic is administered carefully before any instrumentation begins.
            </p>
          </div>

          <div className="lg:col-span-7 space-y-6 relative border-l-2 border-[#A77C50]/40 pl-6 md:pl-8 ml-2">
            {[
              {
                step: 'Phase 01',
                title: 'Clinical Examination & Digital Radiography',
                desc: 'A precise X-ray confirms the exact number, curvature, and length of your tooth canals, evaluating whether infection has touched surrounding bone.',
              },
              {
                step: 'Phase 02',
                title: 'Anaesthesia & Isolation',
                desc: 'The tooth and adjacent area are thoroughly numbed. A hygienic dental dam is placed to protect the area from saliva and ensure sterile conditions.',
              },
              {
                step: 'Phase 03',
                title: 'Canal Cleaning & Shaping',
                desc: 'Micro-instruments gently debride inflamed nerve tissue from inside the narrow root canals, followed by antibacterial irrigation.',
              },
              {
                step: 'Phase 04',
                title: 'Biocompatible Canal Sealing (Obturation)',
                desc: 'The sanitized canals are filled with gutta-percha and biocompatible sealer to protect against future microbial invasion.',
              },
              {
                step: 'Phase 05',
                title: 'Post-Endodontic Restoration Plan',
                desc: 'Because treated teeth lose internal moisture, your doctor will discuss whether a bonded core or protective ceramic crown is required to prevent fracture.',
              },
            ].map((phase, idx) => (
              <div key={idx} className="relative space-y-1.5 pb-2">
                <span className="absolute -left-[31px] md:-left-[39px] top-1 w-3 h-3 rounded-full bg-[#21443D] border-2 border-[#A77C50]" />
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#A77C50] font-semibold">
                  {phase.step}
                </span>
                <h3 className="font-serif text-lg md:text-xl text-[#21443D] font-medium">
                  {phase.title}
                </h3>
                <p className="text-xs text-[#727A76] leading-relaxed">
                  {phase.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: Patient Feedback (Authentic Google Reviews) */}
      <section className="bg-[#21443D] text-[#F2F1EC] py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="max-w-2xl mb-10 space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-[#A77C50]">
              Verified Patient Feedback
            </span>
            <h2 className="text-2xl md:text-3xl font-serif font-medium">
              Comfort & Experience in Reviews
            </h2>
            <p className="text-xs text-[#E2E6E2]/70">
              Patients frequently report feeling relaxed and well-informed during root canal therapy at our DHA Phase 2 clinic.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 bg-[#17322D] border border-[#A77C50]/30 space-y-4">
              <p className="text-base font-serif italic text-[#F2F1EC] leading-relaxed">
                &ldquo;Root canal treatment was completed with exceptional care and calm precision. Doctor explained every single step and made sure I felt nothing throughout.&rdquo;
              </p>
              <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs">
                <span className="font-medium text-[#A77C50]">Muhammad Tariq</span>
                <span className="font-mono text-[10px] text-[#E2E6E2]/50">Google Review • DHA Phase 2</span>
              </div>
            </div>

            <div className="p-8 bg-[#17322D] border border-[#A77C50]/30 space-y-4">
              <p className="text-base font-serif italic text-[#F2F1EC] leading-relaxed">
                &ldquo;I visited for a persistent molar toothache that turned out to require root canal treatment. The clinical team was reassuring, communicative, and very professional.&rdquo;
              </p>
              <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs">
                <span className="font-medium text-[#A77C50]">Verified Patient</span>
                <span className="font-mono text-[10px] text-[#E2E6E2]/50">Google Review • Lahore</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: Re-treatment / Failed Previous RCT (Dedicated Area) */}
      <section className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="border-2 border-[#A77C50]/40 bg-[#F2F1EC] p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#A77C50]">
                <ShieldAlert className="w-4 h-4 text-[#A77C50]" />
                <span>Specialized Diagnostic Consultation</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-serif text-[#21443D] font-semibold">
                Previously treated tooth causing trouble?
              </h2>

              <p className="text-xs md:text-sm text-[#727A76] leading-relaxed font-light">
                Occasionally, a tooth that underwent root canal treatment years ago can develop recurrent ache, reinfection beneath an old crown, or persistent tenderness. Root canal anatomy can possess hidden accessory canals or micro-leakage.
              </p>

              <div className="p-4 bg-[#E2E6E2]/60 border-l-2 border-[#21443D] text-xs text-[#202624] space-y-1">
                <p className="font-medium">Honest Assessment Required:</p>
                <p className="text-[#727A76]">
                  A comprehensive clinical and radiographic assessment is necessary to determine whether endodontic re-treatment, apicoectomy, or alternative management is biologically viable. We never guarantee outcomes, but provide transparent findings so you can make an informed choice.
                </p>
              </div>

              {/* Review Reference */}
              <div className="pt-2">
                <blockquote className="text-xs italic text-[#202624] border-l-2 border-[#A77C50] pl-3 py-1">
                  &ldquo;Had a complicated re-root canal for a tooth treated years ago elsewhere. The assessment was clear and honest without false promises.&rdquo;
                  <span className="block font-mono not-italic text-[10px] text-[#727A76] mt-0.5">
                    — Zainab Rashid (Verified Google Review)
                  </span>
                </blockquote>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3">
              <a
                href={reRctWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 bg-[#21443D] text-[#F2F1EC] text-xs font-mono uppercase tracking-wider text-center hover:bg-[#17322D] transition-colors flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4 text-[#A77C50]" />
                <span>Enquire on Re-treatment</span>
              </a>

              <a
                href={`tel:${CLINIC_CONTACT.phoneCall}`}
                className="w-full py-3 px-4 border border-[#21443D]/30 text-[#21443D] text-xs font-mono uppercase tracking-wider text-center hover:bg-[#E2E6E2] transition-colors flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#A77C50]" />
                <span>Call for Evaluation</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: WhatsApp Enquiry CTA */}
      <section className="max-w-4xl mx-auto px-4 md:px-8 text-center space-y-4">
        <span className="text-xs font-mono uppercase tracking-widest text-[#A77C50] block">
          Direct Endodontic Inquiry
        </span>
        <h2 className="text-3xl md:text-4xl font-serif text-[#21443D] font-medium">
          Have questions regarding a sensitive or painful tooth?
        </h2>
        <p className="text-xs md:text-sm text-[#727A76] max-w-lg mx-auto leading-relaxed">
          Message our reception on WhatsApp. We can discuss your symptoms, coordinate examination slots, and provide straightforward guidance.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row justify-center gap-3">
          <a
            href={rctWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 py-3.5 bg-[#21443D] text-[#F2F1EC] text-xs font-mono uppercase tracking-wider hover:bg-[#17322D] transition-colors inline-flex items-center justify-center gap-2"
          >
            <MessageSquare className="w-4 h-4 text-[#A77C50]" />
            <span>Connect on WhatsApp</span>
          </a>

          <button
            onClick={() => onOpenBooking('Root Canal Treatment')}
            className="px-7 py-3.5 bg-[#A77C50] text-[#202624] text-xs font-mono uppercase tracking-wider font-semibold hover:bg-[#C4986E] transition-colors inline-flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Book Assessment</span>
          </button>
        </div>
      </section>
    </div>
  );
};
