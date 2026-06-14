import { timelineData } from '@/config/timeline';
import Event from './events';
import { getWaypoints, SVG_WIDTH, LEFT_X } from './path-utils';

/**
 * On desktop, each event card is positioned to sit at the corresponding
 * path waypoint. We use the same waypoint geometry as the SVG, expressed
 * as percentage offsets of the container width/height so they scale together.
 */

function TimelineEvents({ className }: { className?: string }) {
  const events = timelineData.events;
  const waypoints = getWaypoints(events.length);

  const lastY = waypoints[waypoints.length - 1]?.y ?? 0;
  const svgH = lastY + 80; // a bit of bottom padding
  const aspectPc = (svgH / SVG_WIDTH) * 100; // %

  return (
    <div className={`relative mx-5 sm:mx-10 lg:mx-20 ${className ?? ''}`}>
      <div className="flex items-center justify-center mb-12 md:mb-16">
        <h1 className="font-zen font-bold leading-none text-[clamp(2rem,5vw,5rem)] text-[#E1B6FC]">
          TIMELINE
        </h1>
      </div>

      {/* ── Mobile/tablet: simple vertical stack ─────────────────────── */}
      <div className="flex flex-col items-center gap-10 lg:hidden">
        {events.map((event, i) => (
          <Event
            key={i}
            eventNumber={event.eventNumber}
            title={event.title}
            duration={event.duration}
            description={event.description}
            align={i % 2 === 0 ? 'left' : 'right'}
          />
        ))}
      </div>

      {/* ── Desktop: cards positioned to match path waypoints ─────────── */}
      {/*
        Container uses padding-bottom to set its height proportional to
        the SVG, so the absolute overlay SVG aligns 1:1.
      */}
      <div
        className="hidden lg:block relative w-full"
        style={{ paddingBottom: `${aspectPc}%` }}
      >
        {events.map((event, i) => {
          const wp = waypoints[i];
          // Convert SVG coords → % of container
          const leftPc = (wp.x / SVG_WIDTH) * 100;
          const topPc = (wp.y / svgH) * 100;
          // Cards on the left anchor to the left of the waypoint,
          // cards on the right anchor from the right
          const isLeft = i % 2 === 0;

          return (
            <div
              key={i}
              className="absolute"
              style={{
                top: `${topPc}%`,
                left: isLeft ? `${leftPc}%` : undefined,
                right: !isLeft ? `${100 - leftPc}%` : undefined,
                transform: 'translateY(-50%)',
                maxWidth: '38%',
              }}
            >
              <Event
                eventNumber={event.eventNumber}
                title={event.title}
                duration={event.duration}
                description={event.description}
                align={isLeft ? 'left' : 'right'}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TimelineEvents;
