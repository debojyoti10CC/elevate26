import { useEffect, useState } from "react";
import "./showcase.css";

// Import event background images
import roboWarsBg       from "../../assets/robo-wars-bg.jpg";
import eventHackathon   from "../../assets/event-hackathon.jpg";
import eventSeminar     from "../../assets/event-seminar.jpg";
import event3DPrint     from "../../assets/event-3dprint.jpg";
import eventVR          from "../../assets/event-vr.jpg";
import eventCertificate from "../../assets/event-certificate.jpg";
import eventMazeSolver  from "../../assets/event-mazesolver.jpg";
import eventRoboSoccer  from "../../assets/event-robosoccer.jpg";
import eventDroneRacing from "../../assets/event-droneracing.jpg";
import eventCircuitDesign from "../../assets/event-circuitdesign.jpg";
import eventTechQuiz    from "../../assets/event-techquiz.jpg";
import eventPhotography from "../../assets/event-photography.jpg";

const eventsData = [
  { id: 1,  name: "Robo Wars",          category: "Technical",     description: "Battle your robot against opponents in an arena combat challenge. Build the toughest machine and dominate the ring.",     difficulty: "Advanced",     icon: "⚔️", image: roboWarsBg },
  { id: 2,  name: "Line Follower",      category: "Technical",     description: "Program an autonomous robot to follow a line track at maximum speed with precision and reliability.",                     difficulty: "Intermediate", icon: "📡", image: eventHackathon },
  { id: 3,  name: "Maze Solver",        category: "Technical",     description: "Design a robot that can autonomously navigate and solve a complex maze with the shortest possible path.",                 difficulty: "Advanced",     icon: "🧩", image: eventMazeSolver },
  { id: 4,  name: "Robo Soccer",        category: "Technical",     description: "Head-to-head robot football. Maneuver your bot to score goals and outplay your opponent in 2-minute matches.",           difficulty: "Intermediate", icon: "⚽", image: eventRoboSoccer },
  { id: 5,  name: "Drone Racing",       category: "Technical",     description: "Pilot FPV drones through obstacle courses at high speed. Fastest lap time wins.",                                         difficulty: "Advanced",     icon: "🚁", image: eventDroneRacing },
  { id: 6,  name: "Circuit Design",     category: "Technical",     description: "Solve PCB layout and circuit design challenges under time pressure. Test your electronics fundamentals.",                 difficulty: "Intermediate", icon: "🔌", image: eventCircuitDesign },
  { id: 7,  name: "AI Hackathon",       category: "Technical",     description: "Build an AI/ML solution to a real-world problem in 4 hours. Any language, any framework.",                              difficulty: "Open",         icon: "🤖", image: eventSeminar },
  { id: 8,  name: "Paper Presentation", category: "Non-Technical", description: "Present your research paper or technical concept to a panel of judges. Innovation and clarity rewarded.",               difficulty: "Open",         icon: "📄", image: event3DPrint },
  { id: 9,  name: "Project Exhibition", category: "Non-Technical", description: "Showcase your project — hardware or software — to visitors and judges. Best project wins.",                             difficulty: "Open",         icon: "🏗️", image: eventVR },
  { id: 10, name: "Tech Quiz",          category: "Non-Technical", description: "Fast-paced technical quiz covering robotics, AI, electronics, and general science. Teams of 2.",                         difficulty: "Beginner",     icon: "🧠", image: eventTechQuiz },
  { id: 11, name: "Photography",        category: "Non-Technical", description: "Capture the energy and spirit of ELEVATE through your lens. Best photo wins across categories.",                        difficulty: "Open",         icon: "📸", image: eventPhotography },
  { id: 12, name: "Gaming",             category: "Non-Technical", description: "Compete in the esports tournament. Titles to be announced. Solo and team formats available.",                           difficulty: "Open",         icon: "🎮", image: eventCertificate },
];

const difficultyColor = {
  Advanced:     "text-[#eae4f5] border-[#eae4f5]",
  Intermediate: "text-[#9a8eb7] border-[#9a8eb7]",
  Open:         "text-[#9a8eb7] border-[#9a8eb7]",
  Beginner:     "text-[#9a8eb7] border-[#9a8eb7]",
};

// ─── Single event card ───────────────────────────────────────────────────────
const EventCard = ({ event }) => (
  <div className="relative flex-shrink-0 w-[82vw] sm:w-[60vw] md:w-[44vw] lg:w-[36vw] h-[55vh] bg-[#181126] rounded-[2rem] md:rounded-[2.5rem] overflow-hidden flex flex-col justify-between p-6 md:p-8">

    {/* Background image */}
    {event.image && (
      <>
        <img
          src={event.image}
          alt={event.name}
          className="absolute inset-0 w-full h-full object-cover object-center z-0"
          draggable="false"
        />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/90 via-black/60 to-black/30" />
      </>
    )}

    {/* Top badges */}
    <div className="relative z-20 flex justify-between items-start">
      <span
        className={`border rounded-3xl px-3 py-1 text-[0.6rem] font-bold tracking-wide ${
          event.category === "Technical"
            ? "text-[#eae4f5] border-[#eae4f5]"
            : "text-[#9a8eb7] border-[#9a8eb7]"
        }`}
      >
        {event.category}
      </span>
      <span className={`border rounded-3xl px-3 py-1 text-[0.6rem] ${difficultyColor[event.difficulty]}`}>
        {event.difficulty}
      </span>
    </div>

    {/* Event name */}
    <div className="relative z-20">
      <h2 className="text-[#eae4f5] text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
        {event.name}
      </h2>
    </div>

    {/* Bottom */}
    <div className="relative z-20">
      <p className="text-[0.68rem] text-[#9a8eb7] leading-relaxed">
        {event.description}
      </p>
    </div>
  </div>
);

// ─── Desktop: continuous auto-scrolling carousel ──────────────────────────────
const DesktopShowcase = () => {
  // Duplicate the list so we can seamlessly loop (translateX -50%)
  const doubled = [...eventsData, ...eventsData];

  return (
    <section
      id="events"
      className="relative w-full bg-[#0b0714] pt-4 pb-12 overflow-hidden"
    >
      {/* Edge fade masks */}
      <div className="carousel-fade-left"  aria-hidden="true" />
      <div className="carousel-fade-right" aria-hidden="true" />

      {/* Scrolling track — animation speed tuned to ~40 s for 12 cards */}
      <div
        className="carousel-track"
        style={{ "--carousel-duration": "50s", paddingLeft: "1.25rem" }}
      >
        {doubled.map((event, idx) => (
          <EventCard key={`${event.id}-${idx}`} event={event} />
        ))}
      </div>
    </section>
  );
};

// ─── Mobile: native horizontal snap scroll ───────────────────────────────────
const MobileShowcase = () => (
  <section id="events" className="w-full bg-[#0b0714] py-4">
    <p className="px-5 pb-3 text-[0.65rem] font-bold text-[#eae4f5]">
      12 Events — Swipe to explore →
    </p>
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
          className="relative flex-shrink-0 w-[82vw] h-[60vh] bg-[#181126] rounded-[2rem] overflow-hidden flex flex-col justify-between p-6"
        >
          {/* Background image */}
          {event.image && (
            <>
              <img
                src={event.image}
                alt={event.name}
                className="absolute inset-0 w-full h-full object-cover object-center z-0"
                draggable="false"
              />
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/90 via-black/60 to-black/30" />
            </>
          )}

          {/* Top */}
          <div className="relative z-20 flex justify-between items-start">
            <span
              className={`border rounded-3xl px-3 py-1 text-[0.6rem] font-bold tracking-wide ${
                event.category === "Technical"
                  ? "text-[#eae4f5] border-[#eae4f5]"
                  : "text-[#9a8eb7] border-[#9a8eb7]"
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
            <h2 className="text-[#eae4f5] text-3xl font-bold leading-tight">{event.name}</h2>
          </div>

          {/* Bottom */}
          <div className="relative z-20">
            <p className="text-[0.65rem] text-[#9a8eb7] leading-relaxed">
              {event.description}
            </p>
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
