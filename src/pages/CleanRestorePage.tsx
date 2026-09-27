import React, { useState } from 'react';
import { Check, ArrowRight, MessageSquare, ShieldCheck, Sparkles, RefreshCw } from 'lucide-react';
import { PageId } from '../types';
import { buildWhatsAppUrl } from '../utils/whatsapp';
import { ImageMaskWipe } from '../components/ImageMaskWipe';

interface CleanRestorePageProps {
  onNavigate: (page: PageId) => void;
  onOpenBooking: (treatment?: string) => void;
}

export const CleanRestorePage: React.FC<CleanRestorePageProps> = ({ onNavigate, onOpenBooking }) => {
  const [selectedService, setSelectedService] = useState<'Scaling' | 'Crowns' | 'General Consultation' | 'Not Sure'>('Scaling');

  const customWhatsAppUrl = buildWhatsAppUrl(
    selectedService === 'Not Sure'
      ? 'General Consultation (Need help deciding between hygiene and restorative care)'
      : `${selectedService} Care`
  );

  return (
    <div className="space-y-24 md:space-y-32 pb-16">
      {/* SECTION 1: Oversized Heading */}
      <section className="pt-8 md:pt-16 max-w-7xl mx-auto px-4 md:px-8">
        <div className="max-w-4xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#E2E6E2] text-xs font-mono tracking-widest text-[#21443D] uppercase border border-[#21443D]/15">
            <span className="w-1.5 h-1.5 rounded-full bg-[#A77C50]" />
            <span>Preventive & Reconstructive Dentistry</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif text-[#21443D] tracking-tight font-medium leading-[1.05]">
            Clean first. <br />
            <span className="italic font-normal text-[#202624]">Restore where needed.</span>
          </h1>

          <p className="text-base sm:text-lg text-[#727A76] font-light leading-relaxed pt-2">
            The foundation of sound oral longevity begins with clean, uninflamed periodontal structures. Once plaque biology is controlled, conservative restorative work can reliably preserve damaged enamel.
          </p>
        </div>
      </section>

      {/* SECTION 2 & 3: Scaling & Crowns Split */}
      <section className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Scaling Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="p-8 bg-[#E2E6E2]/40 border border-[#21443D]/15 space-y-4">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#A77C50] block">
                Preventive Foundation
              </span>
              <h2 className="text-2xl md:text-3xl font-serif text-[#21443D] font-semibold">
                Ultrasonic Scaling & Gum Care
              </h2>
              <p className="text-xs md:text-sm text-[#727A76] leading-relaxed">
                Even with rigorous home brushing, saliva minerals continuously harden soft plaque into calcified tartar along the gumline. Ultrasonic scaling gently vibrates this calculus away, allowing inflamed gums to reattach snugly to the tooth root.
              </p>

              <div className="p-4 bg-white/70 border border-[#21443D]/10 text-xs text-[#202624] space-y-2">
                <p className="font-medium text-[#21443D]">
                  Authentic Review Feedback:
                </p>
                <p className="italic text-[#727A76]">
                  &ldquo;Google reviews frequently mention thorough, gentle scaling experiences with attentive plaque removal and clear brushing advice.&rdquo;
                </p>
                <p className="text-[10px] text-[#727A76]">
                  *Note: Individual gum sensitivity varies; your dentist ensures gentle technique and localized topical comfort.
                </p>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => {
                    setSelectedService('Scaling');
                    window.location.hash = 'booking-selector';
                  }}
                  className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-[#21443D] hover:text-[#A77C50] font-semibold cursor-pointer"
                >
                  <span>Select Scaling for WhatsApp Enquiry</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            <ImageMaskWipe
              src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1200&q=80"
              alt="Sterile dental instruments and clinical operatory for scaling and hygiene"
              aspectRatio="aspect-[16/10]"
              direction="horizontal"
              caption="Hygiene & Sterilization Suite"
            />
          </div>

          {/* Crowns Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="p-8 bg-[#21443D] text-[#F2F1EC] border border-[#21443D] space-y-4">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#A77C50] block">
                Structural Reconstruction
              </span>
              <h2 className="text-2xl md:text-3xl font-serif text-[#F2F1EC] font-semibold">
                Crowns & Structural Restoration
              </h2>
              <p className="text-xs md:text-sm text-[#E2E6E2]/85 leading-relaxed">
                When a tooth loses substantial structure from large decay, repeated fillings, or root canal therapy, an adhesive composite alone may fail under chewing forces. A precision ceramic crown wraps the entire visible crown of the tooth, distributing bite pressure evenly.
              </p>

              <div className="p-4 bg-[#17322D] border border-white/10 text-xs text-[#E2E6E2] space-y-2">
                <p className="font-medium text-[#A77C50]">
                  Clinical Role in Tooth Longevity:
                </p>
                <ul className="space-y-1 text-xs text-[#E2E6E2]/80">
                  <li>• Prevents vertical root fractures in endodontically treated teeth</li>
                  <li>• Custom shade-matched to harmonize with adjacent natural teeth</li>
                  <li>• Restores balanced occlusion and chewing stability</li>
                </ul>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => {
                    setSelectedService('Crowns');
                    window.location.hash = 'booking-selector';
                  }}
                  className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-[#A77C50] hover:text-[#C4986E] font-semibold cursor-pointer"
                >
                  <span>Select Crowns for WhatsApp Enquiry</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            <ImageMaskWipe
              src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1200&q=80"
              alt="Precision restorative dentistry instruments"
              aspectRatio="aspect-[16/10]"
              direction="vertical"
              caption="Restorative Impression & Marginal Fit Protocol"
            />
          </div>
        </div>
      </section>

      {/* SECTION 4: Restorative Pathways (Editorial Branching Diagram) */}
      <section className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="border border-[#21443D]/20 bg-[#F2F1EC] p-8 md:p-12">
          <div className="max-w-3xl mb-10 space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-[#A77C50]">
              Clinical Decision Framework
            </span>
            <h2 className="text-3xl md:text-4xl font-serif text-[#21443D] font-semibold">
              Restorative Pathways
            </h2>
            <p className="text-xs md:text-sm text-[#727A76] leading-relaxed">
              We never prescribe treatment automatically. Every patient follows a structured, transparent assessment pathway.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
            {/* Step 1 */}
            <div className="p-5 bg-white border border-[#21443D]/15 space-y-2 relative">
              <span className="font-mono text-xs text-[#A77C50] font-bold">Step 01</span>
              <h3 className="font-serif text-base font-semibold text-[#21443D]">
                Problem Presentation
              </h3>
              <p className="text-xs text-[#727A76] leading-relaxed">
                You present with bleeding gums, visible staining, chipping, or a cracked molar.
              </p>
            </div>

            {/* Step 2 */}
            <div className="p-5 bg-white border border-[#21443D]/15 space-y-2 relative">
              <span className="font-mono text-xs text-[#A77C50] font-bold">Step 02</span>
              <h3 className="font-serif text-base font-semibold text-[#21443D]">
                Clinical Assessment
              </h3>
              <p className="text-xs text-[#727A76] leading-relaxed">
                Periodontal pocket probing, bite analysis, and targeted digital radiographs where indicated.
              </p>
            </div>

            {/* Step 3 */}
            <div className="p-5 bg-white border border-[#21443D]/15 space-y-2 relative">
              <span className="font-mono text-xs text-[#A77C50] font-bold">Step 03</span>
              <h3 className="font-serif text-base font-semibold text-[#21443D]">
                Treatment Discussion
              </h3>
              <p className="text-xs text-[#727A76] leading-relaxed">
                Review of conservative options: direct composite bonding vs laboratory crown vs hygiene therapy.
              </p>
            </div>

            {/* Step 4 */}
            <div className="p-5 bg-[#21443D] text-[#F2F1EC] border border-[#21443D] space-y-2 relative">
              <span className="font-mono text-xs text-[#A77C50] font-bold">Step 04</span>
              <h3 className="font-serif text-base font-semibold text-[#F2F1EC]">
                Agreed Next Step
              </h3>
              <p className="text-xs text-[#E2E6E2]/80 leading-relaxed">
                Care scheduled without pressure. Treatment executed with unhurried precision.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: Booking Selector */}
      <section id="booking-selector" className="max-w-4xl mx-auto px-4 md:px-8">
        <div className="p-8 md:p-12 bg-[#E2E6E2]/60 border border-[#21443D]/20 space-y-6">
          <div className="text-center space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-[#A77C50]">
              Fast-Track Coordination
            </span>
            <h2 className="text-2xl md:text-3xl font-serif text-[#21443D] font-semibold">
              Select Your Preferred Care Area
            </h2>
            <p className="text-xs md:text-sm text-[#727A76]">
              Choose an option below to formulate your direct inquiry for our DHA Phase 2 clinic.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {(['Scaling', 'Crowns', 'General Consultation', 'Not Sure'] as const).map((service) => {
              const isSelected = selectedService === service;
              return (
                <button
                  key={service}
                  type="button"
                  onClick={() => setSelectedService(service)}
                  className={`py-3 px-3 text-xs font-mono uppercase tracking-wider text-center transition-all border cursor-pointer ${
                    isSelected
                      ? 'bg-[#21443D] text-[#F2F1EC] border-[#21443D] font-semibold'
                      : 'bg-white text-[#202624] border-[#21443D]/20 hover:border-[#21443D]/50'
                  }`}
                >
                  {service}
                </button>
              );
            })}
          </div>

          {/* Dynamic WhatsApp Preview Box */}
          <div className="p-4 bg-white border border-[#21443D]/15 text-xs">
            <span className="text-[10px] font-mono uppercase tracking-wider text-[#A77C50] block mb-1">
              WhatsApp Message Preview
            </span>
            <p className="italic text-[#202624]">
              &ldquo;Assalam o Alaikum, I’d like to ask about {selectedService === 'Not Sure' ? 'General Consultation' : selectedService} at Ghauri Dental Center. Please let me know the appointment options.&rdquo;
            </p>
          </div>

          <div className="text-center pt-2">
            <a
              href={customWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 py-3.5 px-8 bg-[#21443D] text-[#F2F1EC] text-xs font-mono uppercase tracking-wider hover:bg-[#17322D] transition-colors"
            >
              <MessageSquare className="w-4 h-4 text-[#A77C50]" />
              <span>Continue to WhatsApp with {selectedService}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
