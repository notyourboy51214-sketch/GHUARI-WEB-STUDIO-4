import React from 'react';
import { ArrowRight, CheckCircle2, MessageSquare, Clock, MapPin, UserCheck } from 'lucide-react';
import { Doctor, PageId } from '../types';
import { DOCTORS_DATA } from '../data/doctors';
import { CLINIC_CONTACT, buildWhatsAppUrl } from '../utils/whatsapp';

interface DoctorsPageProps {
  onNavigate: (page: PageId) => void;
  onSelectDoctor: (doctor: Doctor) => void;
  onOpenBooking: () => void;
}

export const DoctorsPage: React.FC<DoctorsPageProps> = ({
  onNavigate,
  onSelectDoctor,
  onOpenBooking,
}) => {
  return (
    <div className="space-y-24 md:space-y-32 pb-16">
      {/* Header */}
      <section className="pt-8 md:pt-16 max-w-7xl mx-auto px-4 md:px-8">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#E2E6E2] text-xs font-mono tracking-widest text-[#21443D] uppercase border border-[#21443D]/15">
            <span className="w-1.5 h-1.5 rounded-full bg-[#A77C50]" />
            <span>Verified Clinical Practitioners</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-serif text-[#21443D] tracking-tight font-medium leading-[1.08]">
            The Doctors.
          </h1>

          <p className="text-base sm:text-lg text-[#727A76] font-light leading-relaxed pt-2">
            Meet the practicing clinical team at Ghauri Dental Center in DHA Phase 2, Lahore. Our team provides disciplined endodontic, restorative, and oral hygiene care.
          </p>
        </div>
      </section>

      {/* Editorial Roster (Staggered Vertical Positioning, NOT 4 Identical Cards!) */}
      <section className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="space-y-12">
          {DOCTORS_DATA.map((doctor, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={doctor.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-8 md:p-10 border transition-all ${
                  index === 0
                    ? 'bg-[#21443D] text-[#F2F1EC] border-[#21443D]'
                    : 'bg-[#F2F1EC] text-[#202624] border-[#21443D]/15 hover:border-[#21443D]/40'
                } ${isEven ? '' : 'lg:ml-12'}`}
              >
                {/* Monogram / Typographic Clinical Avatar */}
                <div className="lg:col-span-3 flex flex-col items-center justify-center">
                  <div
                    className={`w-28 h-28 flex items-center justify-center font-serif text-3xl font-bold border ${
                      index === 0
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
                    className={`mt-3 text-[10px] font-mono uppercase tracking-widest ${
                      index === 0 ? 'text-[#A77C50]' : 'text-[#727A76]'
                    }`}
                  >
                    Verified Practitioner
                  </span>
                </div>

                {/* Doctor Bio & Focus */}
                <div className="lg:col-span-6 space-y-4">
                  <div>
                    <span
                      className={`text-xs font-mono uppercase tracking-wider block ${
                        index === 0 ? 'text-[#A77C50]' : 'text-[#A77C50]'
                      }`}
                    >
                      {doctor.department}
                    </span>
                    <h2
                      className={`text-2xl md:text-3xl font-serif font-semibold mt-0.5 ${
                        index === 0 ? 'text-[#F2F1EC]' : 'text-[#21443D]'
                      }`}
                    >
                      {doctor.name}
                    </h2>
                    <p
                      className={`text-xs mt-0.5 ${
                        index === 0 ? 'text-[#E2E6E2]/70' : 'text-[#727A76]'
                      }`}
                    >
                      {doctor.title}
                    </p>
                  </div>

                  <ul className="space-y-1.5 text-xs">
                    {doctor.verifiedDetails.map((detail, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2">
                        <CheckCircle2
                          className={`w-3.5 h-3.5 mt-0.5 shrink-0 ${
                            index === 0 ? 'text-[#A77C50]' : 'text-[#A77C50]'
                          }`}
                        />
                        <span className={index === 0 ? 'text-[#E2E6E2]/90' : 'text-[#202624]'}>
                          {detail}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {doctor.clinicalFocus.map((focus, fIdx) => (
                      <span
                        key={fIdx}
                        className={`text-[11px] px-2 py-0.5 border ${
                          index === 0
                            ? 'bg-white/10 border-white/20 text-[#E2E6E2]'
                            : 'bg-white border-[#21443D]/15 text-[#21443D]'
                        }`}
                      >
                        {focus}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="lg:col-span-3 flex flex-col gap-2.5 lg:items-end">
                  <button
                    onClick={() => onSelectDoctor(doctor)}
                    className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3 px-4 text-xs font-mono uppercase tracking-wider transition-colors cursor-pointer ${
                      index === 0
                        ? 'bg-[#A77C50] text-[#202624] font-semibold hover:bg-[#C4986E]'
                        : 'bg-[#21443D] text-[#F2F1EC] hover:bg-[#17322D]'
                    }`}
                  >
                    <span>View Profile & Focus</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href={buildWhatsAppUrl(`Consultation enquiry for ${doctor.name}`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full sm:w-auto inline-flex items-center justify-center gap-1.5 py-2.5 px-4 text-xs font-mono uppercase tracking-wider transition-colors border ${
                      index === 0
                        ? 'border-white/20 text-[#E2E6E2] hover:bg-white/10'
                        : 'border-[#21443D]/25 text-[#21443D] hover:bg-[#E2E6E2]'
                    }`}
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-[#A77C50]" />
                    <span>WhatsApp Inquiry</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Schedule Transparency Banner */}
      <section className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="p-6 md:p-8 bg-[#E2E6E2]/50 border border-[#21443D]/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <Clock className="w-5 h-5 text-[#A77C50] shrink-0 mt-0.5" />
            <div>
              <h3 className="font-serif text-base font-semibold text-[#21443D]">
                Consultation Availability Notice
              </h3>
              <p className="text-xs text-[#727A76] mt-0.5 leading-relaxed">
                Clinic availability can vary by doctor and appointment type. Contact the clinic to confirm your preferred doctor’s current schedule.
              </p>
            </div>
          </div>

          <a
            href={buildWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-5 py-2.5 bg-[#21443D] text-[#F2F1EC] text-xs font-mono uppercase tracking-wider hover:bg-[#17322D] transition-colors"
          >
            Check Schedule
          </a>
        </div>
      </section>
    </div>
  );
};
