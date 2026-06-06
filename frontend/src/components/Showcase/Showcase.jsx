import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect, useState } from "react";
import "./showcase.css";

gsap.registerPlugin(ScrollTrigger);

const eventsData = [
  { id: 1,  name: "Robo Wars",          category: "Technical",     description: "Battle your robot against opponents in an arena combat challenge. Build the toughest machine and dominate the ring.", difficulty: "Advanced",     icon: "⚔️", image: roboWarsBg },
  { id: 2,  name: "Line Follower",      category: "Technical",     description: "Program an autonomous robot to follow a line track at maximum speed with precision and reliability.",               difficulty: "Intermediate", icon: "📡", image: eventHackathon },
  { id: 3,  name: "Maze Solver",        category: "Technical",     description: "Design a robot that can autonomously navigate and solve a complex maze with the shortest possible path.",           difficulty: "Advanced",     icon: "🧩" },
  { id: 4,  name: "Robo Soccer",        category: "Technical",     description: "Head-to-head robot football. Maneuver your bot to score goals and outplay your opponent in 2-minute matches.",     difficulty: "Intermediate", icon: "⚽" },
  { id: 5,  name: "Drone Racing",       category: "Technical",     description: "Pilot FPV drones through obstacle courses at high speed. Fastest lap time wins.",                                   difficulty: "Advanced",     icon: "🚁" },
  { id: 6,  name: "Circuit Design",     category: "Technical",     description: "Solve PCB layout and circuit design challenges under time pressure. Test your electronics fundamentals.",           difficulty: "Intermediate", icon: "🔌" },
  { id: 7,  name: "AI Hackathon",       category: "Technical",     description: "Build an AI/ML solution to a real-world problem in 4 hours. Any language, any framework.",                        difficulty: "Open",         icon: "🤖", image: eventSeminar },
  { id: 8,  name: "Paper Presentation", category: "Non-Technical", description: "Present your research paper or technical concept to a panel of judges. Innovation and clarity rewarded.",         difficulty: "Open",         icon: "📄", image: event3DPrint },
  { id: 9,  name: "Project Exhibition", category: "Non-Technical", description: "Showcase your project — hardware or software — to visitors and judges. Best project wins.",                       difficulty: "Open",         icon: "🏗️", image: eventVR },
  { id: 10, name: "Tech Quiz",          category: "Non-Technical", description: "Fast-paced technical quiz covering robotics, AI, electronics, and general science. Teams of 2.",                   difficulty: "Beginner",     icon: "🧠" },
  { id: 11, name: "Photography",        category: "Non-Technical", description: "Capture the energy and spirit of ELEVATE through your lens. Best photo wins across categories.",                  difficulty: "Open",         icon: "📸" },
  { id: 12, name: "Gaming",             category: "Non-Technical", description: "Compete in the esports tournament. Titles to be announced. Solo and team formats available.",                    difficulty: "Open",         icon: "🎮", image: eventCertificate },
];

const difficultyColor = {
  Advanced:     "text-[#f4efe7] border-[#f4efe7]",
  Intermediate: "text-[#b1a696] border-[#b1a696]",
  Open:         "text-[#b1a696] border-[#b1a696]",
  Beginner:     "text-[#b1a696] border-[#b1a696]",
};

// ─── Single event card ───────────────────────────────────────────────────────
const EventCard = ({ event }) => (
  <div className="relative flex-shrink-0 w-[82vw] sm:w-[60vw] md:w-[48vw] lg:w-[38vw] h-[55vh] bg-[#2a2725] rounded-[2rem] md:rounded-[2.5rem] overflow-hidden flex flex-col justify-between p-6 md:p-8">

    {/* Background image (only for cards that have one) */}
    {event.image && (
      <>
        <img
          src={event.image}
          alt={event.name}
          className="absolute inset-0 w-full h-full object-cover object-center z-0"
        />
        {/* Dark gradient overlay so text stays readable */}
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/90 via-black/60 to-black/30" />
      </>
    )}

    {/* All card content sits above the overlay */}
    <div className="relative z-20 flex justify-between items-start">
      <span
        className={`border rounded-3xl px-3 py-1 text-[0.6rem] font-bold tracking-wide ${
          event.category === "Technical"
            ? "text-[#f4efe7] border-[#f4efe7]"
            : "text-[#b1a696] border-[#b1a696]"
        }`}
      >
        {event.category}
      </span>
      <span className={`border rounded-3xl px-3 py-1 text-[0.6rem] ${difficultyColor[event.difficulty]}`}>
        {event.difficulty}
      </span>
    </div>

    {/* Centre */}
    <div className="relative z-20">
      <p className="text-4xl mb-3">{event.icon}</p>
      <h1 className="text-[#f4efe7] text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
        {event.name}
      </h1>
    </div>

    {/* Bottom */}
    <div className="relative z-20 flex justify-between items-end gap-4">
      <p className="text-[0.68rem] text-[#b1a696] leading-relaxed max-w-[65%]">
        {event.description}
      </p>
      <div className="flex items-center flex-shrink-0">
        <span className="text-[#f4efe7] border border-[#f4efe7] rounded-3xl px-2 py-1 text-[0.65rem]">
          {String(event.id).padStart(2, "0")}
        </span>
        <span className="text-[#4e484e] border border-[#4e484e] rounded-3xl px-2 py-1 text-[0.65rem]">
          12
        </span>
      </div>
    </div>
  </div>
);

// ─── Desktop: GSAP pinned horizontal scroll ──────────────────────────────────
const DesktopShowcase = () => {
  const containerRef = useRef(null);
  const innerRef = useRef(null);

  useGSAP(() => {
    if (!innerRef.current || !containerRef.current) return;

    // Wait one tick so layout is settled before measuring
    const ctx = gsap.context(() => {
      ScrollTrigger.refresh();

      const totalWidth = innerRef.current.scrollWidth - containerRef.current.offsetWidth;
      if (totalWidth <= 0) return;

      gsap.to(innerRef.current, {
        x: () => -totalWidth,
        ease: "none",
        force3D: true,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: () => `+=${totalWidth}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      id="events"
      className="relative w-full min-h-screen bg-[#181717] flex items-center py-20"
    >
      <p className="absolute top-6 left-8 text-[0.7rem] font-bold text-[#eae5dd] z-20 pointer-events-none">
        12 Events — Scroll to explore →
      </p>
      <div
        ref={innerRef}
        className="flex items-center gap-4 px-4"
        style={{ willChange: "transform" }}
      >
        {eventsData.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
        {/* trailing space so last card doesn't sit flush at edge */}
        <div className="flex-shrink-0 w-16" />
      </div>
    </section>
  );
};

// ─── Mobile: native horizontal snap scroll ───────────────────────────────────
const MobileShowcase = () => (
  <section id="events" className="w-full bg-[#181717] py-4">
    <p className="px-5 pb-3 text-[0.65rem] font-bold text-[#eae5dd]">
      12 Events — Swipe to explore →
    </p>
    {/* snap container */}
    <div
      className="flex gap-3 px-4 overflow-x-auto"
      style={{
        scrollSnapType: "x mandatory",
        WebkitOverflowScrolling: "touch",
        scrollbarWidth: "none",
        msOverflowStyle: "none",
      }}
    >
      {eventsData.map((event) => (
        <div
          key={event.id}
          style={{ scrollSnapAlign: "start", scrollSnapStop: "always" }}
          className="flex-shrink-0 w-[82vw] h-[60vh] bg-[#2a2725] rounded-[2rem] overflow-hidden flex flex-col justify-between p-6"
        >
          {/* Top */}
          <div className="flex justify-between items-start">
            <span
              className={`border rounded-3xl px-3 py-1 text-[0.6rem] font-bold tracking-wide ${
                event.category === "Technical"
                  ? "text-[#f4efe7] border-[#f4efe7]"
                  : "text-[#b1a696] border-[#b1a696]"
              }`}
            >
              {event.category}
            </span>
            <span className={`border rounded-3xl px-3 py-1 text-[0.6rem] ${difficultyColor[event.difficulty]}`}>
              {event.difficulty}
            </span>
          </div>
          {/* Centre */}
          <div>
            <p className="text-4xl mb-3">{event.icon}</p>
            <h1 className="text-[#f4efe7] text-3xl font-bold leading-tight">{event.name}</h1>
          </div>
          {/* Bottom */}
          <div className="flex justify-between items-end gap-2">
            <p className="text-[0.65rem] text-[#b1a696] leading-relaxed max-w-[70%]">
              {event.description}
            </p>
            <div className="flex items-center flex-shrink-0">
              <span className="text-[#f4efe7] border border-[#f4efe7] rounded-3xl px-2 py-1 text-[0.6rem]">
                {String(event.id).padStart(2, "0")}
              </span>
              <span className="text-[#4e484e] border border-[#4e484e] rounded-3xl px-2 py-1 text-[0.6rem]">
                12
              </span>
            </div>
          </div>
        </div>
      ))}
      <div className="flex-shrink-0 w-4" />
    </div>
  </section>
);

// ─── Root: swap based on viewport ────────────────────────────────────────────
const Showcase = () => {
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== "undefined" ? window.innerWidth < 768 : false
  );

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const handler = (e) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return isMobile ? <MobileShowcase /> : <DesktopShowcase />;
};

export default Showcase;
