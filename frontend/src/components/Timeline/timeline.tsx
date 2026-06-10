'use client';
import { useRef } from 'react';
import { useScroll, useTransform } from 'framer-motion';
import { TimelineEffect } from './timeline-effect';
import TimelineEvents from './timeline-events';

export function Timeline() {
  const ref = useRef<HTMLDivElement>(null);

  // 'start center' → 'end center': progress goes 0→1 as the section
  // scrolls from "top at viewport midpoint" to "bottom at viewport midpoint".
  // This gives a consistent pixel-per-progress ratio regardless of section height.
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start center', 'end center'],
  });

  // Map the full 0→1 scroll range directly to 0→1 path fill.
  // No overshoot (1.2) — that was masking the misalignment before.
  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div
      id="timeline"
      className="relative mt-20 md:mt-40 mb-20"
      ref={ref}
    >
      <TimelineEvents />
      <TimelineEffect
        className="hidden lg:block"
        pathLengths={[pathLength]}
      />
    </div>
  );
}
