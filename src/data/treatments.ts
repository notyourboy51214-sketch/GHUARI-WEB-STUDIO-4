import { TreatmentItem } from '../types';

export const TREATMENTS_DATA: TreatmentItem[] = [
  {
    id: 'general-dental-care',
    categoryNumber: '01',
    category: 'General Dental Care',
    name: 'Diagnostic Dental Examination & X-Ray',
    summary: 'A thorough clinical assessment of teeth, gums, and oral structures using targeted radiography to identify potential issues early before they cause pain.',
    whoAsks: 'Patients experiencing localized discomfort, those due for an annual check-up, or anyone wanting a clear, honest second opinion.',
    discussionPoints: [
      'Current symptoms or sensitivity to hot/cold',
      'Need for digital dental X-ray imaging',
      'Preventive preservation options vs immediate restorative needs'
    ],
    targetPage: 'treatments'
  },
  {
    id: 'scaling-oral-hygiene',
    categoryNumber: '02',
    category: 'Scaling & Oral Hygiene',
    name: 'Ultrasonic Scaling & Deep Stain Polishing',
    summary: 'Removal of hardened calculus (tartar) and stubborn surface stains that regular brushing cannot eliminate, protecting gum health and freshening breath.',
    whoAsks: 'Patients with bleeding gums, visible tartar accumulation, tea/coffee surface stains, or anyone seeking regular hygiene maintenance.',
    discussionPoints: [
      'Frequency of scaling based on individual gum health',
      'Post-scaling sensitivity management',
      'Personalized home oral hygiene routine'
    ],
    targetPage: 'clean-restore'
  },
  {
    id: 'root-canal-care',
    categoryNumber: '03',
    category: 'Root Canal Care',
    name: 'Root Canal Therapy & Re-treatment Assessment',
    summary: 'Careful removal of infected or inflamed pulp tissue from within the tooth canal to relieve pain, eliminate infection, and save the natural tooth structure.',
    whoAsks: 'Patients with lingering toothache, throbbing pain when chewing, swelling near the gumline, or an older root canal tooth causing recurrent distress.',
    discussionPoints: [
      'Severity and extent of the internal pulp inflammation',
      'Anticipated appointment count (single vs multiple sessions)',
      'Need for a protective crown after canal obturation'
    ],
    targetPage: 'root-canal'
  },
  {
    id: 'crowns-restoration',
    categoryNumber: '04',
    category: 'Crowns & Restoration',
    name: 'Precision Ceramic Crowns & Restorative Fillings',
    summary: 'Custom-crafted dental crowns and aesthetic composite restorations designed to restore structural integrity, biting function, and natural tooth appearance.',
    whoAsks: 'Patients with cracked or heavily filled teeth, patients who have completed root canal therapy, or those with fractured enamel.',
    discussionPoints: [
      'Crown material options (zirconia, porcelain-fused, all-ceramic)',
      'Fit and bite alignment checks',
      'Longevity and oral maintenance requirements'
    ],
    targetPage: 'clean-restore'
  },
  {
    id: 'orthodontic-care',
    categoryNumber: '05',
    category: 'Orthodontic / Alignment Care',
    name: 'Alignment Assessment & Malocclusion Consultation',
    summary: 'Evaluation of teeth alignment, bite relationships, and crowding to formulate an appropriate alignment or referral pathway tailored to adult or adolescent needs.',
    whoAsks: 'Individuals with crowded teeth, noticeable gaps, or bite discomfort seeking practical options for long-term dental alignment.',
    discussionPoints: [
      'Nature of misalignment (spacing, overbite, crowding)',
      'Estimated treatment timeline and wear schedules',
      'Maintenance and retention strategies'
    ],
    targetPage: 'treatments'
  },
  {
    id: 'cosmetic-dentistry',
    categoryNumber: '06',
    category: 'Cosmetic Dentistry',
    name: 'Aesthetic Composite Bonding & Shade Balancing',
    summary: 'Conservative aesthetic refinements using shade-matched composite resin to close minor gaps, reshape chipped edges, and harmonize your natural smile line.',
    whoAsks: 'Patients seeking conservative smile enhancements without invasive enamel reduction or extensive veneer work.',
    discussionPoints: [
      'Subtle vs transformative aesthetic goals',
      'Conservative preservation of existing tooth structure',
      'Long-term maintenance and stain prevention'
    ],
    targetPage: 'treatments'
  }
];
