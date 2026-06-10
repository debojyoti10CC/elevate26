'use client';
import { motion, MotionValue, useTransform } from 'framer-motion';
import { useState } from 'react';

import { timelineData, svgs } from '@/config/timeline';
import { cn } from '@/lib/utils';
import { buildPath, getViewBox } from './path-utils';

const transition = { duration: 0, ease: 'linear' as const };

export const TimelineEffect = ({
  pathLengths,
  className,
}: {
  pathLengths: MotionValue[];
  className?: string;
}) => {
  const { pencil: PencilIcon } = svgs;
  const eventCount = timelineData.events.length;

  const pathD = buildPath(eventCount);
  const viewBox = getViewBox(eventCount);

  const [pathElement, setPathElement] = useState<SVGPathElement | null>(null);

  const pathProgress = useTransform(pathLengths[0], [0, 1], [0, 1]);

  const getPoint = (progress: number) => {
    if (!pathElement) return { x: 0, y: 0 };
    const len = pathElement.getTotalLength();
    return pathElement.getPointAtLength(len * Math.min(progress, 1));
  };

  const getAngle = (progress: number) => {
    if (!pathElement) return 0;
    const len = pathElement.getTotalLength();
    const delta = 3;
    const p1 = pathElement.getPointAtLength(Math.max(0, len * progress - delta));
    const p2 = pathElement.getPointAtLength(Math.min(len, len * progress + delta));
    return (Math.atan2(p2.y - p1.y, p2.x - p1.x) * 180) / Math.PI;
  };

  const tipX = useTransform(pathProgress, (p) => getPoint(p).x);
  const tipY = useTransform(pathProgress, (p) => getPoint(p).y);
  const tipRotate = useTransform(pathProgress, (p) => getAngle(p));

  return (
    <div
      className={cn(
        'pointer-events-none absolute inset-0 mx-20 xl:mx-40',
        className
      )}
    >
      {/* Pencil icon at path start */}
      {/* <img
        src={PencilIcon.link}
        alt={PencilIcon.alt}
        className="absolute top-0 left-0 h-10 w-10 xl:h-14 xl:w-14 -translate-x-1/2 -translate-y-1/2 opacity-80"
      /> */}

      <svg
        viewBox={viewBox}
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 h-full w-full"
        preserveAspectRatio="none"
      >
        {/* Static dashed track */}
        <path
          d={pathD}
          stroke="rgba(128, 0, 128, 0.4)"
          strokeWidth="4"
          strokeLinecap="round"
          strokeDasharray="12 12"
          fill="none"
        />

        {/* Animated coloured fill */}
        <motion.path
          ref={setPathElement}
          d={pathD}
          stroke="rgba(128, 0, 128, 0.7)" // Adjust the '0.5' (0 to 1) for opacity
          strokeWidth="8"
          strokeLinecap="round"
          fill="none"
          initial={{ pathLength: 0 }}
          style={{ pathLength: pathLengths[0] }}
          transition={transition}
        />

        {/* Icon that moves along the path */}
        <motion.g
          style={{ x: tipX, y: tipY, rotate: tipRotate, transformOrigin: 'center' }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1, transition: { delay: 0.2, duration: 0.3 } }}
        >
          <circle r="22" fill="white" stroke="#2563EB" strokeWidth="3" />
          <g transform="translate(-10,-12) scale(0.85)">
            <circle cx="12" cy="4" r="2.5" fill="#2563EB" />
            <path
              d="M14.5 8.5L18 7l-1 3-3 1.5L12 15l-3 2v3H7v-4l3.5-2.5-.5-4L8 11l-1-2.5 3-1.5 2 2z"
              fill="#2563EB"
            />
            <path
              d="M13 15l1 3 2 1"
              stroke="#2563EB"
              strokeWidth="1.2"
              strokeLinecap="round"
              fill="none"
            />
          </g>
        </motion.g>

        <defs>
          <linearGradient id="timelineGradient" gradientUnits="userSpaceOnUse"
            x1="0" y1="0" x2="0" y2="100%">
            <stop offset="0%" stopColor="#2563EB" />
            <stop offset="50%" stopColor="#7C3AED" />
            <stop offset="100%" stopColor="#0617B0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};
