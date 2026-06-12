import "./showcase.css";
import inaugurationCeremony from "../../assets/events/inauguration-ceremony.png";
import panelDiscussion from "../../assets/events/panel-discussion.png";
import onlineCoding from "../../assets/events/online-coding.png";
import onlinePhotography from "../../assets/events/online-photography.png";
import blindCoding from "../../assets/events/blind-coding.png";
import techAlumniTalk from "../../assets/events/tech-alumni-talk.png";
import funEventOne from "../../assets/events/fun-event-one.png";
import raspberryPiWorkshop from "../../assets/events/raspberry-pi-workshop.png";
import matlab from "../../assets/events/matlab.png";
import workshop from "../../assets/events/workshop.png";
import agenticWebWorkshop from "../../assets/events/agentic-web-workshop.png";
import pcbDesignWorkshop from "../../assets/events/pcb-design-workshop.png";
import culturalEve from "../../assets/events/cultural-eve.png";
import memeMaking from "../../assets/events/meme-making.png";
import quiz from "../../assets/events/quiz.png";
import mathsOlympiad from "../../assets/events/maths-olympiad.png";
import funEventTwo from "../../assets/events/fun-event-two.png";
import prizeDistribution from "../../assets/events/prize-distribution.png";
import grandAuction from "../../assets/events/grand-auction.png";

const eventsData = [
  { id: 1, name: "Inauguration Ceremony", category: "Ceremony", description: "The official opening of ELEVATE, welcoming participants, guests, and speakers to the event.", difficulty: "Open", image: inaugurationCeremony },
  { id: 2, name: "Panel Discussion", category: "Session", description: "A moderated conversation where experts share perspectives on technology, innovation, and current trends.", difficulty: "Open", image: panelDiscussion },
  { id: 3, name: "Online Coding", category: "Technical", description: "Solve online programming challenges that test logic, speed, accuracy, and problem-solving skills.", difficulty: "Intermediate", image: onlineCoding },
  { id: 4, name: "Online Photography", category: "Creative", description: "Submit an original photograph online and showcase creativity, composition, and visual storytelling.", difficulty: "Open", image: onlinePhotography },
  { id: 5, name: "Blind Coding", category: "Technical", description: "Write working code without viewing the screen, relying on memory, focus, and precise typing.", difficulty: "Advanced", image: blindCoding },
  { id: 6, name: "Tech Talk / Alumni Talk", category: "Session", description: "Industry speakers and alumni share practical insights, career lessons, and emerging technology trends.", difficulty: "Open", image: techAlumniTalk },
  { id: 7, name: "Fun Event", category: "Fun", description: "Enjoy light-hearted games and activities designed to encourage teamwork and friendly competition.", difficulty: "Beginner", image: funEventOne },
  { id: 8, name: "Raspberry Pi Workshop", category: "Workshop", description: "Explore Raspberry Pi through a guided hands-on session covering computing, electronics, and small projects.", difficulty: "Beginner", image: raspberryPiWorkshop },
  { id: 9, name: "Matlab", category: "Workshop", description: "Learn the fundamentals of MATLAB for numerical computing, visualization, and engineering problem-solving.", difficulty: "Beginner", image: matlab },
  { id: 10, name: "Workshop", category: "Workshop", description: "A practical learning session where participants build new skills through demonstrations and guided exercises.", difficulty: "Beginner", image: workshop },
  { id: 11, name: "Workshop 3 (Agentic / Web)", category: "Workshop", description: "Discover agentic AI or modern web development concepts through practical examples and activities.", difficulty: "Intermediate", image: agenticWebWorkshop },
  { id: 12, name: "PCB Design Workshop", category: "Workshop", description: "Learn schematic creation, component placement, routing, and the basics of printed circuit board design.", difficulty: "Intermediate", image: pcbDesignWorkshop },
  { id: 13, name: "Cultural Eve", category: "Cultural", description: "An evening of music, dance, and performances celebrating creativity, talent, and campus culture.", difficulty: "Open", image: culturalEve },
  { id: 14, name: "Meme Making Competition", category: "Creative", description: "Create clever and original memes that combine humor, creativity, and an engaging event-related theme.", difficulty: "Open", image: memeMaking },
  { id: 15, name: "Quiz", category: "Competition", description: "Challenge your knowledge across technology, science, current affairs, and general topics.", difficulty: "Intermediate", image: quiz },
  { id: 16, name: "Maths Olympiad (For School Students)", category: "Competition", description: "A mathematics challenge for school students focused on reasoning, accuracy, and problem-solving.", difficulty: "Intermediate", image: mathsOlympiad },
  { id: 17, name: "Fun Event", category: "Fun", description: "Join another round of entertaining activities filled with participation, teamwork, and friendly challenges.", difficulty: "Beginner", image: funEventTwo },
  { id: 18, name: "Prize Distribution", category: "Ceremony", description: "Winners and outstanding participants are recognized and presented with prizes and certificates.", difficulty: "Open", image: prizeDistribution },
  { id: 19, name: "Grand Auction", category: "Fun", description: "A lively closing auction where participants bid, compete, and end the celebration on a high note.", difficulty: "Open", image: grandAuction },
];

const difficultyColor = {
  Advanced: "text-[#eae4f5] border-[#eae4f5]",
  Intermediate: "text-[#9a8eb7] border-[#9a8eb7]",
  Open: "text-[#9a8eb7] border-[#9a8eb7]",
  Beginner: "text-[#9a8eb7] border-[#9a8eb7]",
};

const EventCard = ({ event }) => (
  <div className="relative flex-shrink-0 w-[82vw] sm:w-[60vw] md:w-[44vw] lg:w-[36vw] h-[52vh] min-h-[280px] bg-[#181126] rounded-[2rem] md:rounded-[2.5rem] overflow-hidden flex flex-col justify-between p-5 md:p-8">
    {event.image && (
      <>
        <img
          src={event.image}
          alt={event.name}
          className="absolute inset-0 z-0 h-full w-full object-cover object-center"
          draggable="false"
        />
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/90 via-black/55 to-black/25" />
      </>
    )}

    <div className="relative z-20 flex justify-between items-start font-nova">
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

    <div className="relative z-20 flex flex-col gap-2">
      <div className="font-zen">
        <h2 className="text-[#eae4f5] text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
          {event.name}
        </h2>
      </div>

      <div className="font-space">
        <p className="text-[0.65rem] sm:text-[0.68rem] text-[#9a8eb7] leading-relaxed">
          {event.description}
        </p>
      </div>
    </div>
  </div>
);

const DesktopShowcase = () => {
  const doubled = [...eventsData, ...eventsData];

  return (
    <section
      id="events"
      className="relative w-full bg-[#0b0714] pt-4 pb-12 overflow-hidden"
    >
      <div className="carousel-fade-left" aria-hidden="true" />
      <div className="carousel-fade-right" aria-hidden="true" />

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

const Showcase = () => {
  return <DesktopShowcase />;
};

export default Showcase;
