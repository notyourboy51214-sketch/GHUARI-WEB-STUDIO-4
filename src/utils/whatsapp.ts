export const CLINIC_CONTACT = {
  name: 'Ghauri Dental Center',
  phoneDisplay: '+92 333 3711434',
  phoneCall: '+923333711434',
  phoneRaw: '923333711434',
  address: '281-Q Commercial Lane, Sector Q, DHA Phase 2, Lahore, Pakistan',
  addressShort: '281-Q Commercial Lane, DHA Phase 2, Lahore',
  instagramUrl: 'https://www.instagram.com/ghauri_dental_center/',
  googleMapsUrl: 'https://maps.google.com/?q=Ghauri+Dental+Center+281-Q+Commercial+Lane+Sector+Q+DHA+Phase+2+Lahore',
  googleRating: 4.8,
  googleReviewCount: 311,
};

export function buildWhatsAppUrl(treatmentName?: string, customNote?: string): string {
  const baseGreeting = 'Assalam o Alaikum, I’d like to enquire about an appointment at Ghauri Dental Center.';
  let message = baseGreeting;

  if (treatmentName && treatmentName.trim() !== '') {
    message = `Assalam o Alaikum, I’d like to ask about ${treatmentName.trim()} at Ghauri Dental Center. Please let me know the appointment options.`;
  }

  if (customNote && customNote.trim() !== '') {
    message += ` Note: ${customNote.trim()}`;
  }

  return `https://wa.me/${CLINIC_CONTACT.phoneRaw}?text=${encodeURIComponent(message)}`;
}

export function buildDetailedAppointmentWhatsAppUrl(data: {
  name: string;
  phone: string;
  treatment: string;
  preferredDay: string;
  preferredTime: string;
  message?: string;
  refId: string;
}): string {
  const lines = [
    `Assalam o Alaikum Ghauri Dental Center,`,
    `I would like to request an appointment enquiry. (Ref: ${data.refId})`,
    ``,
    `• Patient Name: ${data.name.trim()}`,
    `• Contact: ${data.phone.trim()}`,
    `• Treatment / Concern: ${data.treatment.trim()}`,
    `• Preferred Day: ${data.preferredDay.trim()}`,
    `• Preferred Time: ${data.preferredTime.trim()}`,
  ];

  if (data.message && data.message.trim() !== '') {
    lines.push(`• Notes: ${data.message.trim()}`);
  }

  lines.push(``);
  lines.push(`Please let me know if this slot is available.`);

  return `https://wa.me/${CLINIC_CONTACT.phoneRaw}?text=${encodeURIComponent(lines.join('\n'))}`;
}

export function generateAppointmentRef(): string {
  const randomDigits = Math.floor(1000 + Math.random() * 9000);
  return `GDC-${randomDigits}`;
}
