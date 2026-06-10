export const svgs = {
  pencil: {
    link: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="%232563EB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/><path d="m15 5 4 4"/></svg>',
    alt: 'pencil',
  },
  robot: {
    link: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="%238B5CF6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="10" rx="2"/><circle cx="12" cy="5" r="2"/><path d="M12 7v4M8 16h.01M16 16h.01M6 11V9a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2"/></svg>',
    alt: 'robot',
  },
  border: {
    link: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 20" fill="none"><path d="M10 10 C 100 13, 200 7, 390 10 M15 13 C 120 8, 250 12, 385 11" stroke="%230617B0" stroke-width="3" stroke-linecap="round" opacity="0.8"/></svg>',
    alt: 'border',
  },
};

export const timelineData = {
  events: [
    {
      eventNumber: 1,
      title: 'Day 1: Kickoff & Inauguration',
      duration: '09:00 AM - 11:00 AM',
      description: 'Welcoming all innovators, creators, and builders. Opening keynote, overview of events, and introduction of mentors and judges.',
      className: 'absolute lg:top-[2vw] lg:left-[8vw]',
    },
    {
      eventNumber: 2,
      title: 'Day 1: Technical Battles',
      duration: '11:30 AM - 04:00 PM',
      description: 'Unleash your skills in Robowars, Hackathons, Circuit Design, and Drone Racing preliminary rounds.',
      className: 'absolute lg:top-[26vw] lg:left-[45vw]',
    },
    {
      eventNumber: 3,
      title: 'Day 2: Final Showdowns',
      duration: '10:00 AM - 02:00 PM',
      description: 'The heat rises with final rounds of Robosoccer, Drone Racing finals, and the Hackathon presentations.',
      className: 'absolute lg:top-[50vw] lg:left-[8vw]',
    },
    {
      eventNumber: 4,
      title: 'Day 2: Awards & Closing Ceremony',
      duration: '03:30 PM - 05:30 PM',
      description: "Celebrating success and crowning the champions of ELEVATE '26. Closing remarks, feedback, and networking.",
      className: 'absolute lg:top-[74vw] lg:left-[45vw]',
    },
  ],
};
