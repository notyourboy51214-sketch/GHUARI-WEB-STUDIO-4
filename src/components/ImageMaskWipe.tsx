import React, { useEffect, useRef, useState } from 'react';

interface ImageMaskWipeProps {
  src: string;
  alt: string;
  className?: string;
  aspectRatio?: string;
  direction?: 'vertical' | 'horizontal';
  caption?: string;
  priority?: boolean;
  id?: string;
}

export const ImageMaskWipe: React.FC<ImageMaskWipeProps> = ({
  src,
  alt,
  className = '',
  aspectRatio = 'aspect-[4/5]',
  direction = 'vertical',
  caption,
  priority = false,
  id,
}) => {
  const [isVisible, setIsVisible] = useState(priority);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (priority || isVisible) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.12,
        rootMargin: '40px',
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [priority, isVisible]);

  return (
    <figure
      id={id}
      ref={containerRef}
      data-editorial-image="true"
      className={`relative overflow-hidden rounded-2xl md:rounded-3xl group ${className}`}
    >
      <div className={`relative overflow-hidden rounded-2xl md:rounded-3xl bg-[#E2E6E2] ${aspectRatio}`}>
        <img
          src={src}
          alt={alt}
          data-editorial-image="true"
          loading={priority ? 'eager' : 'lazy'}
          className={`w-full h-full object-cover transition-all duration-700 ease-out will-change-[clip-path,transform,opacity] ${
            isVisible
              ? direction === 'horizontal'
                ? 'mask-wipe-horizontal'
                : 'mask-wipe-active'
              : 'opacity-0'
          } group-hover:scale-[1.015] duration-500`}
        />
        {/* Subtle clinical bronze hairline border */}
        <div className="pointer-events-none absolute inset-0 border border-[#21443D]/10 rounded-2xl md:rounded-3xl" />
      </div>

      {caption && (
        <figcaption className="mt-2 text-xs font-mono uppercase tracking-widest text-[#727A76] flex items-center gap-2">
          <span className="inline-block w-1.5 h-1.5 bg-[#A77C50]/60 rounded-full" />
          <span>{caption}</span>
        </figcaption>
      )}
    </figure>
  );
};
