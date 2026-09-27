import React, { useState } from 'react';
import { X, ArrowRight, MessageSquare, Phone, Calendar } from 'lucide-react';
import { buildWhatsAppUrl, CLINIC_CONTACT } from '../utils/whatsapp';
import { PageId } from '../types';

interface TreatmentSelectorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateToFirstVisit: () => void;
  defaultTreatment?: string;
}

const TREATMENT_OPTIONS = [
  { id: 'scaling', label: 'Scaling & Hygiene', desc: 'Plaque, tartar removal, and gum care' },
  { id: 'root-canal', label: 'Root Canal Treatment', desc: 'Tooth pain, pulp inflammation, re-treatment' },
  { id: 'crowns', label: 'Crowns & Restoration', desc: 'Cracked teeth, post-RCT protection, fillings' },
  { id: 'general', label: 'General Dental Consultation', desc: 'Diagnostic checkup, X-ray assessment' },
  { id: 'other', label: 'Something Else', desc: 'Orthodontic or cosmetic inquiry' },
];

export const TreatmentSelectorModal: React.FC<TreatmentSelectorModalProps> = ({
  isOpen,
  onClose,
  onNavigateToFirstVisit,
  defaultTreatment = 'Root Canal Treatment',
}) => {
  const [selectedTreatment, setSelectedTreatment] = useState(defaultTreatment);
  const [customNote, setCustomNote] = useState('');

  if (!isOpen) return null;

  const currentWhatsAppLink = buildWhatsAppUrl(selectedTreatment, customNote);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#202624]/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-lg bg-[#F2F1EC] border border-[#21443D]/20 shadow-2xl rounded-3xl overflow-hidden p-6 md:p-8"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Subtle accent bar */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#A77C50]" />

        <div className="flex items-start justify-between mb-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#A77C50]">
              Direct Clinic Connection
            </span>
            <h3 id="modal-title" className="text-2xl font-serif text-[#21443D] mt-1 font-semibold">
              Enquire About an Appointment
            </h3>
            <p className="text-xs text-[#727A76] mt-1">
              Select your concern to open WhatsApp with a clear, pre-formatted message.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#727A76] hover:text-[#21443D] transition-colors rounded-full hover:bg-[#E2E6E2]"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-[#21443D] mb-2 font-medium">
              I need help with:
            </label>
            <div className="space-y-2">
              {TREATMENT_OPTIONS.map((opt) => {
                const isSelected = selectedTreatment === opt.label;
                return (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setSelectedTreatment(opt.label)}
                    className={`w-full text-left p-3.5 text-xs transition-all flex items-center justify-between border rounded-xl ${
                      isSelected
                        ? 'border-[#21443D] bg-[#21443D] text-[#F2F1EC]'
                        : 'border-[#21443D]/15 bg-white/70 hover:border-[#21443D]/40 text-[#202624]'
                    }`}
                  >
                    <div>
                      <div className="font-medium text-sm">{opt.label}</div>
                      <div className={`text-xs ${isSelected ? 'text-[#E2E6E2]' : 'text-[#727A76]'}`}>
                        {opt.desc}
                      </div>
                    </div>
                    <span
                      className={`w-4 h-4 rounded-full border flex items-center justify-center text-[10px] ${
                        isSelected
                          ? 'border-[#A77C50] bg-[#A77C50] text-[#202624]'
                          : 'border-[#727A76]'
                      }`}
                    >
                      {isSelected ? '✓' : ''}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <div>
            <label htmlFor="custom-notes" className="block text-xs font-mono uppercase tracking-wider text-[#727A76] mb-1">
              Brief note or specific question (optional)
            </label>
            <input
              id="custom-notes"
              type="text"
              value={customNote}
              onChange={(e) => setCustomNote(e.target.value)}
              placeholder="e.g., upper left molar toothache, weekday morning"
              className="w-full text-xs px-3.5 py-2.5 bg-white border border-[#21443D]/20 focus:border-[#21443D] focus:outline-hidden rounded-xl text-[#202624]"
            />
          </div>

          {/* Dynamic WhatsApp Preview */}
          <div className="p-3.5 bg-[#E2E6E2]/60 border border-[#21443D]/10 rounded-xl text-xs">
            <span className="font-mono text-[10px] uppercase tracking-wider text-[#727A76] block mb-1">
              WhatsApp Message Preview
            </span>
            <p className="italic text-[#202624]">
              &ldquo;Assalam o Alaikum, I’d like to ask about {selectedTreatment} at Ghauri Dental Center. Please let me know the appointment options.{customNote ? ` Note: ${customNote}` : ''}&rdquo;
            </p>
          </div>

          {/* Primary & Secondary Actions */}
          <div className="pt-2 space-y-2.5">
            <a
              href={currentWhatsAppLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 bg-[#21443D] text-[#F2F1EC] text-sm font-medium hover:bg-[#17322D] transition-colors rounded-xl"
            >
              <MessageSquare className="w-4 h-4 text-[#A77C50]" />
              <span>Continue to WhatsApp</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </a>

            <div className="grid grid-cols-2 gap-2">
              <a
                href={`tel:${CLINIC_CONTACT.phoneCall}`}
                className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 border border-[#21443D]/30 text-xs text-[#21443D] font-medium hover:bg-[#E2E6E2] transition-colors rounded-xl"
              >
                <Phone className="w-3.5 h-3.5 text-[#A77C50]" />
                <span>Call Clinic Directly</span>
              </a>

              <button
                type="button"
                onClick={() => {
                  onClose();
                  onNavigateToFirstVisit();
                }}
                className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 border border-[#21443D]/30 text-xs text-[#21443D] font-medium hover:bg-[#E2E6E2] transition-colors rounded-xl cursor-pointer"
              >
                <Calendar className="w-3.5 h-3.5 text-[#A77C50]" />
                <span>Detailed Form</span>
              </button>
            </div>
          </div>
        </div>

        <p className="mt-4 text-[10px] text-center text-[#727A76]">
          281-Q Commercial Lane, Sector Q, DHA Phase 2, Lahore
        </p>
      </div>
    </div>
  );
};
