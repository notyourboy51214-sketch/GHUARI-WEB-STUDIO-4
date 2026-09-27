import React, { useState } from 'react';
import { ArrowRight, MessageSquare, Check, Phone, HelpCircle, FileText, Calendar, Clock, Copy } from 'lucide-react';
import { PageId } from '../types';
import { CLINIC_CONTACT, buildDetailedAppointmentWhatsAppUrl, generateAppointmentRef } from '../utils/whatsapp';

interface FirstVisitPageProps {
  onNavigate: (page: PageId) => void;
}

export const FirstVisitPage: React.FC<FirstVisitPageProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    treatment: 'Root Canal Assessment',
    preferredDay: 'Weekday (Mon - Thu)',
    preferredTime: 'Morning (11:00 AM - 2:00 PM)',
    message: '',
  });

  const [submittedRef, setSubmittedRef] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    const ref = generateAppointmentRef();
    setSubmittedRef(ref);
  };

  const getWhatsAppSubmissionUrl = () => {
    if (!submittedRef) return '#';
    return buildDetailedAppointmentWhatsAppUrl({
      ...formData,
      refId: submittedRef,
    });
  };

  return (
    <div className="space-y-24 md:space-y-32 pb-16">
      {/* SECTION 1: Header */}
      <section className="pt-8 md:pt-16 max-w-7xl mx-auto px-4 md:px-8">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#E2E6E2] text-xs font-mono tracking-widest text-[#21443D] uppercase border border-[#21443D]/15">
            <span className="w-1.5 h-1.5 rounded-full bg-[#A77C50]" />
            <span>Patient Preparation Guide</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-serif text-[#21443D] tracking-tight font-medium leading-[1.08]">
            What happens before your <br />
            <span className="italic font-normal text-[#202624]">first appointment?</span>
          </h1>

          <p className="text-base sm:text-lg text-[#727A76] font-light leading-relaxed pt-2">
            Visiting a dental practice should be straightforward and unhurried. Here is a clear overview of how your visit is coordinated at Ghauri Dental Center in DHA Phase 2, Lahore.
          </p>
        </div>
      </section>

      {/* SECTION 2: Simple Visual Sequence */}
      <section className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="border border-[#21443D]/15 bg-[#F2F1EC] p-8 md:p-12">
          <h2 className="text-xs font-mono uppercase tracking-widest text-[#A77C50] mb-8">
            Pre-Visit Progression Sequence
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {[
              {
                step: '01',
                title: 'Tell us what you need',
                desc: 'Describe whether you are experiencing active pain, seeking scaling, or need a crown assessment.',
              },
              {
                step: '02',
                title: 'Choose a preferred time',
                desc: 'Indicate your convenient time frame and preferred doctor or procedure category.',
              },
              {
                step: '03',
                title: 'Confirm with the clinic',
                desc: 'Our reception confirms the exact doctor chair slot on WhatsApp or phone.',
              },
              {
                step: '04',
                title: 'Visit Ghauri Dental Center',
                desc: 'Arrive at 281-Q Commercial Lane, Sector Q, DHA Phase 2 for your clinical evaluation.',
              },
            ].map((item, idx) => (
              <div key={item.step} className="p-5 bg-white border border-[#21443D]/10 space-y-2 relative">
                <span className="font-serif text-2xl font-bold text-[#A77C50]">
                  {item.step}
                </span>
                <h3 className="font-serif text-base font-semibold text-[#21443D]">
                  {item.title}
                </h3>
                <p className="text-xs text-[#727A76] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 & 4: What to Bring & Questions to Ask */}
      <section className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* SECTION 3: What to Bring (Sensible general guidance) */}
          <div className="lg:col-span-6 p-8 bg-[#E2E6E2]/40 border border-[#21443D]/15 space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-[#A77C50]">
              Sensible Guidance
            </span>
            <h2 className="text-2xl font-serif text-[#21443D] font-semibold">
              What to Bring to the Clinic
            </h2>
            <p className="text-xs text-[#727A76] leading-relaxed">
              We aim to make your check-in effortless. Having the following items readily available helps us build your clinical history:
            </p>

            <ul className="space-y-3 pt-2">
              <li className="flex items-start gap-3 text-xs text-[#202624]">
                <Check className="w-4 h-4 text-[#A77C50] shrink-0 mt-0.5" />
                <span>
                  <strong>Previous X-Rays or Records:</strong> If you have recent dental radiographs or treatment histories from previous clinics, have digital images on your phone or physical films.
                </span>
              </li>
              <li className="flex items-start gap-3 text-xs text-[#202624]">
                <Check className="w-4 h-4 text-[#A77C50] shrink-0 mt-0.5" />
                <span>
                  <strong>Current Medication List:</strong> Please inform the doctor of any medications you take regularly (such as blood thinners or diabetes medication) prior to procedures.
                </span>
              </li>
              <li className="flex items-start gap-3 text-xs text-[#202624]">
                <Check className="w-4 h-4 text-[#A77C50] shrink-0 mt-0.5" />
                <span>
                  <strong>Personal Contact Details:</strong> An active WhatsApp or phone number for appointment follow-ups and postoperative care guidelines.
                </span>
              </li>
            </ul>
          </div>

          {/* SECTION 4: Questions to Ask the Dentist */}
          <div className="lg:col-span-6 p-8 bg-[#21443D] text-[#F2F1EC] border border-[#21443D] space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-[#A77C50]">
              Chairside Empowerment
            </span>
            <h2 className="text-2xl font-serif text-[#F2F1EC] font-semibold">
              Questions to Ask Your Dentist
            </h2>
            <p className="text-xs text-[#E2E6E2]/80 leading-relaxed">
              We encourage active patient questions. During your consultation, feel welcome to ask:
            </p>

            <ul className="space-y-3 pt-2">
              <li className="p-3 bg-[#17322D] border border-white/10 text-xs">
                <strong className="text-[#A77C50] block mb-0.5">01 / Treatment Options:</strong>
                <span className="text-[#E2E6E2]/90">
                  &ldquo;What specific treatment is recommended for this tooth, and are there conservative alternatives?&rdquo;
                </span>
              </li>
              <li className="p-3 bg-[#17322D] border border-white/10 text-xs">
                <strong className="text-[#A77C50] block mb-0.5">02 / Timeline & Visits:</strong>
                <span className="text-[#E2E6E2]/90">
                  &ldquo;How many clinical visits may be required to complete this restoration or root canal safely?&rdquo;
                </span>
              </li>
              <li className="p-3 bg-[#17322D] border border-white/10 text-xs">
                <strong className="text-[#A77C50] block mb-0.5">03 / Long-Term Care:</strong>
                <span className="text-[#E2E6E2]/90">
                  &ldquo;What should I do at home to maintain the result and prevent recurrent issues?&rdquo;
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* SECTION 5: WhatsApp Appointment Form */}
      <section className="max-w-3xl mx-auto px-4 md:px-8">
        <div className="bg-white border-2 border-[#21443D]/20 p-8 md:p-12 shadow-sm">
          {!submittedRef ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="border-b border-[#21443D]/15 pb-4">
                <span className="text-xs font-mono uppercase tracking-widest text-[#A77C50]">
                  Direct WhatsApp Coordination
                </span>
                <h2 className="text-2xl md:text-3xl font-serif text-[#21443D] font-semibold mt-1">
                  Enquire for an Appointment
                </h2>
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
                    className="w-full text-xs px-3.5 py-2.5 bg-[#F2F1EC] border border-[#21443D]/20 focus:border-[#21443D] focus:outline-hidden"
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
                    className="w-full text-xs px-3.5 py-2.5 bg-[#F2F1EC] border border-[#21443D]/20 focus:border-[#21443D] focus:outline-hidden"
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
                    className="w-full text-xs px-3 py-2.5 bg-[#F2F1EC] border border-[#21443D]/20 focus:border-[#21443D] focus:outline-hidden"
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
                    className="w-full text-xs px-3 py-2.5 bg-[#F2F1EC] border border-[#21443D]/20 focus:border-[#21443D] focus:outline-hidden"
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
                    className="w-full text-xs px-3 py-2.5 bg-[#F2F1EC] border border-[#21443D]/20 focus:border-[#21443D] focus:outline-hidden"
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
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="e.g. Upper molar hurts on chewing, need morning slot"
                  className="w-full text-xs px-3.5 py-2 bg-[#F2F1EC] border border-[#21443D]/20 focus:border-[#21443D] focus:outline-hidden"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 bg-[#21443D] text-[#F2F1EC] text-xs font-mono uppercase tracking-wider font-medium hover:bg-[#17322D] transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4 text-[#A77C50]" />
                  <span>Generate WhatsApp Enquiry</span>
                </button>
              </div>

              <p className="text-[11px] text-center text-[#727A76]">
                Notice: Submitting generates an inquiry. The appointment is finalized when reception confirms clinic and doctor availability directly.
              </p>
            </form>
          ) : (
            /* Confirmation State with Generated Reference ID */
            <div className="space-y-6 text-center py-4 animate-in fade-in duration-300">
              <div className="w-12 h-12 rounded-full bg-[#E2E6E2] text-[#21443D] flex items-center justify-center mx-auto border border-[#21443D]/20">
                <Check className="w-6 h-6 text-[#A77C50]" />
              </div>

              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#A77C50] block">
                  Reference Generated
                </span>
                <h3 className="text-2xl font-serif text-[#21443D] font-semibold mt-1">
                  Your enquiry is ready for WhatsApp.
                </h3>
                <div className="mt-2 inline-flex items-center gap-2 px-3 py-1 bg-[#E2E6E2] text-xs font-mono font-bold text-[#21443D]">
                  <span>Reference ID: {submittedRef}</span>
                </div>
              </div>

              <p className="text-xs text-[#727A76] max-w-md mx-auto leading-relaxed">
                Click below to open WhatsApp with your reference ID and appointment preferences pre-populated. Our team at 281-Q Commercial Lane will reply with confirmed doctor timing.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={getWhatsAppSubmissionUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-8 py-3.5 bg-[#21443D] text-[#F2F1EC] text-xs font-mono uppercase tracking-wider font-semibold hover:bg-[#17322D] transition-colors inline-flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4 text-[#A77C50]" />
                  <span>Send to WhatsApp Now</span>
                </a>

                <button
                  type="button"
                  onClick={() => setSubmittedRef(null)}
                  className="w-full sm:w-auto px-5 py-3.5 border border-[#21443D]/25 text-xs font-mono uppercase tracking-wider text-[#21443D] hover:bg-[#E2E6E2] transition-colors"
                >
                  Modify Form
                </button>
              </div>

              <p className="text-[10px] text-[#727A76] italic">
                *This reference does not automatically confirm the slot until reception acknowledges availability.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};
