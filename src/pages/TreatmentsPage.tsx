import React, { useState } from 'react';
import { MessageSquare, ArrowRight, HelpCircle, Check, ChevronDown, ChevronUp } from 'lucide-react';
import { PageId, TreatmentItem } from '../types';
import { TREATMENTS_DATA } from '../data/treatments';
import { buildWhatsAppUrl } from '../utils/whatsapp';

interface TreatmentsPageProps {
  onNavigate: (page: PageId) => void;
  onOpenBooking: (treatment?: string) => void;
}

export const TreatmentsPage: React.FC<TreatmentsPageProps> = ({ onNavigate, onOpenBooking }) => {
  const [activeAccordion, setActiveAccordion] = useState<string | null>('root-canal-care');

  const toggleAccordion = (id: string) => {
    setActiveAccordion(activeAccordion === id ? null : id);
  };

  return (
    <div className="space-y-20 md:space-y-28 pb-16">
      {/* Header */}
      <section className="pt-8 md:pt-16 max-w-7xl mx-auto px-4 md:px-8">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#E2E6E2] text-xs font-mono tracking-widest text-[#21443D] uppercase border border-[#21443D]/15">
            <span className="w-1.5 h-1.5 rounded-full bg-[#A77C50]" />
            <span>Clinical Index</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-serif text-[#21443D] tracking-tight font-medium leading-[1.08]">
            Treatment <br />
            <span className="italic font-normal text-[#202624]">Library.</span>
          </h1>

          <p className="text-base sm:text-lg text-[#727A76] font-light leading-relaxed pt-2">
            Clear, educational guidance across our core dental disciplines in DHA Phase 2, Lahore. Review what each care pathway addresses and what questions to ask chairside.
          </p>
        </div>
      </section>

      {/* Vertical Editorial Index (NOT a 3-column card grid!) */}
      <section className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="border-t border-[#21443D]/20 divide-y divide-[#21443D]/15">
          {TREATMENTS_DATA.map((item) => {
            const isExpanded = activeAccordion === item.id;
            const whatsAppLink = buildWhatsAppUrl(item.name);

            return (
              <article
                key={item.id}
                className="py-8 md:py-10 transition-colors hover:bg-[#E2E6E2]/20"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                  {/* Category Number & Category Name */}
                  <div className="lg:col-span-3 flex items-start gap-4">
                    <span className="font-serif text-3xl md:text-4xl text-[#A77C50] font-light">
                      {item.categoryNumber}
                    </span>
                    <div>
                      <span className="text-[11px] font-mono uppercase tracking-widest text-[#727A76] block">
                        Category
                      </span>
                      <h2 className="text-base font-serif font-semibold text-[#21443D]">
                        {item.category}
                      </h2>
                    </div>
                  </div>

                  {/* Main Treatment Content */}
                  <div className="lg:col-span-6 space-y-4">
                    <h3 className="text-xl md:text-2xl font-serif text-[#202624] font-medium">
                      {item.name}
                    </h3>
                    <p className="text-xs md:text-sm text-[#727A76] leading-relaxed">
                      {item.summary}
                    </p>

                    {/* Expandable Deep Dive for who asks & discussion points */}
                    <button
                      onClick={() => toggleAccordion(item.id)}
                      className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-[#21443D] hover:text-[#A77C50] pt-1 cursor-pointer"
                    >
                      <span>
                        {isExpanded ? 'Hide clinical guidance' : 'View patient guidance & discussion questions'}
                      </span>
                      {isExpanded ? (
                        <ChevronUp className="w-3.5 h-3.5 text-[#A77C50]" />
                      ) : (
                        <ChevronDown className="w-3.5 h-3.5 text-[#A77C50]" />
                      )}
                    </button>

                    {isExpanded && (
                      <div className="mt-4 p-5 bg-[#E2E6E2]/40 border-l-2 border-[#A77C50] space-y-4 animate-in fade-in duration-200">
                        <div>
                          <h4 className="text-[11px] font-mono uppercase tracking-widest text-[#21443D] font-semibold mb-1">
                            Who commonly asks about this?
                          </h4>
                          <p className="text-xs text-[#727A76] leading-relaxed">
                            {item.whoAsks}
                          </p>
                        </div>

                        <div>
                          <h4 className="text-[11px] font-mono uppercase tracking-widest text-[#21443D] font-semibold mb-1.5">
                            What to discuss with your dentist:
                          </h4>
                          <ul className="space-y-1.5">
                            {item.discussionPoints.map((point, pIdx) => (
                              <li key={pIdx} className="flex items-start gap-2 text-xs text-[#202624]">
                                <span className="text-[#A77C50] mt-0.5">•</span>
                                <span>{point}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Actions & WhatsApp CTA */}
                  <div className="lg:col-span-3 flex flex-col gap-2.5 lg:items-end">
                    <a
                      href={whatsAppLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-2.5 px-4 bg-[#21443D] text-[#F2F1EC] text-xs font-mono uppercase tracking-wider hover:bg-[#17322D] transition-colors"
                    >
                      <MessageSquare className="w-3.5 h-3.5 text-[#A77C50]" />
                      <span>Ask About This</span>
                    </a>

                    {item.targetPage && (item.targetPage === 'root-canal' || item.targetPage === 'clean-restore') && (
                      <button
                        onClick={() => onNavigate(item.targetPage!)}
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 py-2 px-3 border border-[#21443D]/25 text-[11px] font-mono text-[#21443D] hover:bg-[#E2E6E2] transition-colors cursor-pointer"
                      >
                        <span>Dedicated Guide</span>
                        <ArrowRight className="w-3 h-3 text-[#A77C50]" />
                      </button>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Note & Educational Disclaimer */}
      <section className="max-w-4xl mx-auto px-4 md:px-8">
        <div className="p-6 bg-[#E2E6E2]/40 border border-[#21443D]/15 text-xs text-[#727A76] leading-relaxed">
          <p className="font-semibold text-[#21443D] mb-1">
            Clinical Assessment Note:
          </p>
          <p>
            Every tooth and oral environment is biologically unique. A definitive treatment plan cannot be established without a clinical visual examination and, where appropriate, targeted digital radiography by a licensed dental surgeon.
          </p>
        </div>
      </section>
    </div>
  );
};
