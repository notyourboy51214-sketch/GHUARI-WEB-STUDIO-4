export type SectionId =
  | 'home'
  | 'story'
  | 'services'
  | 'approach'
  | 'gallery'
  | 'reviews'
  | 'process'
  | 'doctors'
  | 'contact';

export type PageId =
  | SectionId
  | 'practice'
  | 'treatments'
  | 'root-canal'
  | 'clean-restore'
  | 'stories'
  | 'first-visit'
  | 'visit-dha';

export interface Doctor {
  id: string;
  name: string;
  title: string;
  department: string;
  verifiedDetails: string[];
  clinicalFocus: string[];
  consultationNote: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  rating: number;
  topic: 'ROOT CANAL' | 'SCALING' | 'CROWNS' | 'GENERAL EXPERIENCE';
  excerpt: string;
  fullText: string;
  timeframe: string;
  tag: string;
}

export interface TreatmentItem {
  id: string;
  categoryNumber: string;
  category: string;
  name: string;
  summary: string;
  whoAsks: string;
  discussionPoints: string[];
  targetSection?: SectionId;
  targetPage?: PageId;
}
