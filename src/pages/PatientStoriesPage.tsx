import React, { useState } from 'react';
import { Star, MessageSquare, ArrowRight, Filter, ShieldCheck, Check } from 'lucide-react';
import { PageId, ReviewItem } from '../types';
import { REVIEWS_DATA, GOOGLE_RATING, GOOGLE_REVIEWS_COUNT } from '../data/reviews';
import { buildWhatsAppUrl } from '../utils/whatsapp';

interface PatientStoriesPageProps {
  onNavigate: (page: PageId) => void;
  onOpenBooking: () => void;
}

type FilterTopic = 'ALL' | 'ROOT CANAL' | 'SCALING' | 'CROWNS' | 'GENERAL EXPERIENCE';

export const PatientStoriesPage: React.FC<PatientStoriesPageProps> = ({
  onNavigate,
  onOpenBooking,
}) => {
  const [selectedTopic, setSelectedTopic] = useState<FilterTopic>('ALL');

  const filteredReviews =
    selectedTopic === 'ALL'
      ? REVIEWS_DATA
      : REVIEWS_DATA.filter((r) => r.topic === selectedTopic);

  const featuredReview = filteredReviews[0] || REVIEWS_DATA[0];
  const supportingReviews = filteredReviews.slice(1);

  return (
    <div className="space-y-20 md:space-y-28 pb-16">
      {/* SECTION 1: Large Number & Header */}
      <section className="pt-8 md:pt-16 max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end border-b border-[#21443D]/15 pb-12">
          <div className="lg:col-span-6 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#E2E6E2] text-xs font-mono tracking-widest text-[#21443D] uppercase border border-[#21443D]/15">
              <span className="w-1.5 h-1.5 rounded-full bg-[#A77C50]" />
              <span>Verified Public Record</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-serif text-[#21443D] tracking-tight font-medium leading-[1.08]">
              Patient Stories.
            </h1>

            <p className="text-base sm:text-lg text-[#727A76] font-light leading-relaxed">
              Read authentic feedback from patients who have visited Ghauri Dental Center in DHA Phase 2, Lahore for endodontics, scaling, and restorative crowns.
            </p>
          </div>

          <div className="lg:col-span-6 flex flex-col sm:flex-row items-start sm:items-baseline gap-6 lg:justify-end">
            <div>
              <div className="font-serif text-7xl sm:text-8xl font-bold text-[#21443D] leading-none">
                {GOOGLE_REVIEWS_COUNT}
              </div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#727A76] block mt-1">
                Google Reviews
              </span>
            </div>

            <div className="border-l-2 border-[#A77C50] pl-4 space-y-1">
              <div className="flex text-[#A77C50]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#A77C50] text-[#A77C50]" />
                ))}
              </div>
              <div className="text-sm font-serif font-bold text-[#21443D]">
                {GOOGLE_RATING} out of 5.0
              </div>
              <div className="text-[11px] font-mono text-[#727A76]">
                Average Patient Rating
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Review Themes Interactive Filters */}
      <section className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-mono uppercase tracking-wider text-[#727A76] mr-2 flex items-center gap-1">
            <Filter className="w-3.5 h-3.5 text-[#A77C50]" />
            <span>Filter Topic:</span>
          </span>

          {(['ALL', 'ROOT CANAL', 'SCALING', 'CROWNS', 'GENERAL EXPERIENCE'] as FilterTopic[]).map((topic) => {
            const isSelected = selectedTopic === topic;
            return (
              <button
                key={topic}
                onClick={() => setSelectedTopic(topic)}
                className={`px-3.5 py-1.5 text-xs font-mono uppercase tracking-wider transition-all border cursor-pointer ${
                  isSelected
                    ? 'bg-[#21443D] text-[#F2F1EC] border-[#21443D] font-semibold'
                    : 'bg-white text-[#202624] border-[#21443D]/20 hover:border-[#21443D]/50'
                }`}
              >
                {topic}
              </button>
            );
          })}
        </div>
      </section>

      {/* SECTION 3: Featured Review Composition */}
      <section className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Large Featured Review */}
          <div className="lg:col-span-7 bg-[#21443D] text-[#F2F1EC] p-8 md:p-12 relative overflow-hidden space-y-6">
            <div className="absolute right-0 top-0 bottom-0 w-2 bg-[#A77C50]" />
            <div className="inline-block px-2.5 py-1 bg-[#A77C50]/20 text-[#A77C50] text-[10px] font-mono uppercase tracking-widest">
              Featured Review • {featuredReview.topic}
            </div>

            <p className="font-serif text-xl sm:text-2xl italic leading-relaxed text-[#F2F1EC]">
              &ldquo;{featuredReview.fullText}&rdquo;
            </p>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <div>
                <h3 className="font-medium text-base text-[#F2F1EC]">
                  {featuredReview.author}
                </h3>
                <span className="text-xs font-mono text-[#E2E6E2]/60">
                  {featuredReview.tag}
                </span>
              </div>
              <div className="flex text-[#A77C50]">
                {[...Array(featuredReview.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#A77C50] text-[#A77C50]" />
                ))}
              </div>
            </div>
          </div>

          {/* Supporting Two Reviews */}
          <div className="lg:col-span-5 space-y-6">
            {supportingReviews.slice(0, 2).map((rev) => (
              <div
                key={rev.id}
                className="bg-[#F2F1EC] border border-[#21443D]/15 p-6 space-y-3"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#A77C50]">
                    {rev.topic}
                  </span>
                  <div className="flex text-[#A77C50]">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#A77C50] text-[#A77C50]" />
                    ))}
                  </div>
                </div>

                <p className="text-xs md:text-sm font-serif italic text-[#202624] leading-relaxed">
                  &ldquo;{rev.excerpt}&rdquo;
                </p>

                <div className="pt-2 border-t border-[#21443D]/10 flex items-center justify-between text-xs">
                  <span className="font-medium text-[#21443D]">{rev.author}</span>
                  <span className="font-mono text-[10px] text-[#727A76]">{rev.tag}</span>
                </div>
              </div>
            ))}

            {supportingReviews.length === 0 && (
              <div className="p-6 bg-[#E2E6E2]/40 border border-[#21443D]/10 text-xs text-[#727A76]">
                Showing highlighted feedback for {selectedTopic}.
              </div>
            )}
          </div>
        </div>
      </section>

      {/* SECTION 4: Review-Source Disclosure */}
      <section className="max-w-4xl mx-auto px-4 md:px-8">
        <div className="p-4 bg-[#E2E6E2]/50 border border-[#21443D]/10 flex items-center justify-between text-xs text-[#727A76]">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#A77C50] shrink-0" />
            <span>
              <strong>Authenticity Disclosure:</strong> Patient feedback shown from Google reviews submitted directly by verified public visitors.
            </span>
          </div>
          <span className="font-mono text-[10px] shrink-0 hidden sm:inline">
            311 Total Reviews
          </span>
        </div>
      </section>

      {/* SECTION 5: Conversion */}
      <section className="max-w-4xl mx-auto px-4 md:px-8 text-center space-y-4">
        <span className="text-xs font-mono uppercase tracking-widest text-[#A77C50] block">
          Personal Clinical Care
        </span>
        <h2 className="text-3xl sm:text-4xl font-serif text-[#21443D] font-medium">
          Ready to ask the clinic?
        </h2>
        <p className="text-xs md:text-sm text-[#727A76] max-w-md mx-auto leading-relaxed">
          Discuss your symptoms or schedule a hygiene checkup directly with our DHA Phase 2 team.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row justify-center gap-3">
          <a
            href={buildWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 py-3.5 bg-[#21443D] text-[#F2F1EC] text-xs font-mono uppercase tracking-wider hover:bg-[#17322D] transition-colors inline-flex items-center justify-center gap-2"
          >
            <MessageSquare className="w-4 h-4 text-[#A77C50]" />
            <span>WhatsApp the Reception</span>
          </a>

          <button
            onClick={onOpenBooking}
            className="px-7 py-3.5 bg-[#A77C50] text-[#202624] text-xs font-mono uppercase tracking-wider font-semibold hover:bg-[#C4986E] transition-colors inline-flex items-center justify-center cursor-pointer"
          >
            <span>Book Appointment</span>
          </button>
        </div>
      </section>
    </div>
  );
};
