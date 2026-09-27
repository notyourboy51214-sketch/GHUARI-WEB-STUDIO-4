import React from 'react';
import { X, CheckCircle2, MessageSquare, MapPin } from 'lucide-react';
import { Doctor } from '../types';
import { buildWhatsAppUrl } from '../utils/whatsapp';

interface DoctorModalProps {
  doctor: Doctor | null;
  onClose: () => void;
}

export const DoctorModal: React.FC<DoctorModalProps> = ({ doctor, onClose }) => {
  if (!doctor) return null;

  const whatsAppLink = buildWhatsAppUrl(
    `Consultation with ${doctor.name} (${doctor.title})`
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#202624]/65 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-xl bg-[#F2F1EC] border border-[#21443D]/25 shadow-2xl rounded-3xl p-6 md:p-8 overflow-y-auto max-h-[90vh]"
        role="dialog"
        aria-modal="true"
        aria-labelledby="doctor-modal-title"
      >
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#A77C50]" />

        <div className="flex items-start justify-between pb-4 border-b border-[#21443D]/15">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-[#21443D] text-[#F2F1EC] flex items-center justify-center font-serif text-xl border border-[#A77C50]/50 rounded-2xl shrink-0">
              {doctor.name
                .split(' ')
                .map((n) => n[0])
                .join('')
                .slice(0, 3)}
            </div>
            <div>
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#A77C50] block">
                Verified Practitioner
              </span>
              <h3 id="doctor-modal-title" className="text-2xl font-serif text-[#21443D] font-semibold">
                {doctor.name}
              </h3>
              <p className="text-xs text-[#727A76] mt-0.5">{doctor.title}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#727A76] hover:text-[#21443D] transition-colors rounded-full hover:bg-[#E2E6E2]"
            aria-label="Close doctor details"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="mt-6 space-y-6">
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#727A76] mb-2">
              Clinical Department & Specialty
            </h4>
            <p className="text-sm text-[#202624] font-medium bg-[#E2E6E2]/50 p-3.5 border-l-2 border-[#A77C50] rounded-r-xl">
              {doctor.department}
            </p>
          </div>

          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#727A76] mb-2">
              Verified Practice Record
            </h4>
            <ul className="space-y-2">
              {doctor.verifiedDetails.map((detail, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs text-[#202624]">
                  <CheckCircle2 className="w-4 h-4 text-[#A77C50] shrink-0 mt-0.5" />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#727A76] mb-2">
              Primary Clinical Focus Areas
            </h4>
            <div className="flex flex-wrap gap-2">
              {doctor.clinicalFocus.map((focus, idx) => (
                <span
                  key={idx}
                  className="text-xs px-3 py-1 bg-white border border-[#21443D]/15 text-[#21443D] font-medium rounded-lg"
                >
                  {focus}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-[#E2E6E2]/40 p-4 border border-[#21443D]/10 rounded-2xl">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#21443D] font-semibold mb-1 flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#A77C50]" />
              Consultation Availability Notice
            </h4>
            <p className="text-xs text-[#727A76] leading-relaxed">
              {doctor.consultationNote}
            </p>
          </div>

          <div className="pt-2">
            <a
              href={whatsAppLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 bg-[#21443D] text-[#F2F1EC] text-sm font-medium hover:bg-[#17322D] transition-colors rounded-xl"
            >
              <MessageSquare className="w-4 h-4 text-[#A77C50]" />
              <span>Enquire for {doctor.name.split(' ')[1] || doctor.name} on WhatsApp</span>
            </a>
            <p className="text-[10px] text-center text-[#727A76] mt-2">
              Reception coordinates doctor availability directly with patients.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
