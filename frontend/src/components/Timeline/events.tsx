'use client';
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { svgs } from '@/config/timeline';
import { cn } from '@/lib/utils';
import Typography from '../Typography';

function Event({
  eventNumber,
  title,
  duration,
  description,
  className,
  align = 'left',
}: {
  className?: string;
  eventNumber: number;
  title: string;
  duration: string;
  description: string;
  align?: 'left' | 'right';
}) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 70%', 'start 30%'],
  });

  const color = useTransform(
    scrollYProgress,
    [0, 0.5],
    ['#ADADAD', '#000000']
  );

  const titleColor = useTransform(
    scrollYProgress,
    [0, 0.5],
    ['#E1B6FC', '#6b21a8']   // light purple → dark purple
  );

  const textColor = useTransform(
    scrollYProgress,
    [0, 0.5],
    ['#ffffff', '#1a0a2e']   // white → near-black
  );

  const textColorMuted = useTransform(
    scrollYProgress,
    [0, 0.5],
    ['rgba(255,255,255,0.8)', 'rgba(26,10,46,0.85)']
  );

  const { border } = svgs;

  return (
    <div
      ref={ref}
      className={cn(
        'flex flex-row w-full max-w-[500px] items-start',
        align === 'right' && 'lg:ml-auto',
        className
      )}
    >
      {/* Large animated event number */}
      <div className="shrink-0 select-none">
        <motion.span
          style={{ color }}
          className="font-climate font-normal leading-none tracking-wider text-[#ADADAD] block
            text-[48px] sm:text-[64px] lg:text-[80px] xl:text-[96px] 2xl:text-[110px]"
        >
          {eventNumber}
        </motion.span>
      </div>

      {/* Content */}
      <div className="flex flex-col py-2 px-3 sm:px-5 min-w-0">
        <motion.h5
          style={{ color: titleColor }}
          className="leading-tight font-nova font-semibold
            text-sm sm:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl"
        >
          {title}
        </motion.h5>

        {/* Squiggly border — constrained to content width */}
        <img
          src={border.link}
          alt={border.alt}
          className="w-full max-w-[280px] my-1"
        />

        <div className="mt-2 space-y-1">
          <motion.p
            style={{ color: textColor }}
            className="text-sm sm:text-base font-space font-semibold leading-snug"
          >
            {duration}
          </motion.p>
          <motion.p
            style={{ color: textColorMuted }}
            className="text-xs sm:text-sm font-space font-normal leading-relaxed"
          >
            {description}
          </motion.p>
        </div>
      </div>
    </div>
  );
}

export default Event;
