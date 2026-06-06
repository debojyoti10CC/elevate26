# Requirements Document

## Introduction

ELEVATE is a college tech-fest website for the IEEE IEM Student Branch, converted from the existing "Capsules®" React + GSAP single-page application. The conversion preserves all GSAP animations, scroll interactions, and the dark robotic color scheme while replacing all branding and content with ELEVATE-specific material. Three new sections are introduced — an Events carousel (12 events), a Schedule timeline, and a Team section — alongside content-only updates to every existing section.

---

## Glossary

- **ELEVATE**: The IEEE IEM Student Branch flagship college tech-fest website being built.
- **Site**: The single-page React application at `src/pages/Home/Home.jsx`.
- **PreloaderII**: The animated preloader component that runs on initial page load.
- **Hero**: The full-viewport landing section displaying the primary branding and CTA.
- **Welcome**: The about/intro section using clip-text scroll-scrub animation.
- **Choose**: The theme/tag section with GSAP height-expand animation.
- **Gallery**: The 3-panel scroll-pinned venue atmosphere section.
- **Venue**: The campus location section (previously MapLink).
- **MarqueeSticky**: The marquee + spacer-collapse animated section.
- **StickyCols**: The 3-phase sticky column scroll animation section.
- **Events**: The new 12-card horizontal scroll carousel section.
- **Schedule**: The new vertical timeline scroll-reveal section.
- **Team**: The new team/organizer section replacing Feedback.
- **FooterBanner**: The full-width image parallax CTA section before the footer.
- **Footer**: The bottom navigation and brand info section.
- **FooterTitle**: The large animated heading at the very bottom of the page.
- **GSAP**: GreenSock Animation Platform — the animation library used throughout.
- **ScrollTrigger**: GSAP plugin that ties animation progress to scroll position.
- **SplitText**: GSAP plugin that splits text into animatable chars/lines.
- **ScrollSmoother**: GSAP plugin providing smooth scrolling.
- **eventsData**: The 12-item array exported from `src/constants/events.js`.
- **scheduleData**: The 7-item array exported from `src/constants/schedule.js`.
- **teamData**: The object exported from `src/constants/team.js`.
- **RegisterBtn**: The floating CTA button (renamed from ReserveBtn).
- **Event_Card**: A single card in the Events carousel representing one event.
- **Schedule_Item**: A single row in the Schedule timeline.
- **Team_Card**: A single member card in the Team section.

---

## Requirements

### Requirement 1: Branding and Identity Replacement

**User Story:** As a visitor, I want to see ELEVATE branding throughout the site, so that I know I am attending the IEEE IEM Student Branch tech-fest.

#### Acceptance Criteria

1. THE PreloaderII SHALL display the text "ELEVATE" in its logo heading.
2. THE PreloaderII SHALL display "ELEVATE — IEEE IEM Student Branch's flagship college tech-fest." in its footer paragraph.
3. THE Hero SHALL display "ELEVATE" as the main title.
4. THE Hero SHALL display "India's Premier", "College Tech-Fest—", and "IEEE IEM SB" as subtitle lines.
5. THE FooterTitle SHALL display "ELEVATE" as its `h1` content without a registered trademark symbol.
6. THE FooterTitle SHALL display "Powered by—IEEE IEM Student Branch" on the left, "© ELEVATE 2025" in the center, and "All rights reserved" on the right of its top bar.
7. THE MarqueeText SHALL display "Why ELEVATE?★" as its marquee text.
8. THE MarqueeSticky SHALL display "Want to know why ELEVATE" and "is the event of the year?" as its subtitle copy.
9. THE Footer SHALL display "ELEVATE — powered by IEEE IEM Student Branch. A celebration of technology, innovation, and community." as its body copy.
10. THE Footer SHALL display "ELEVATE — IEEE IEM Student Branch's flagship tech-fest." as its tagline.
11. THE FooterBanner SHALL display "ELEVATE" as its title.

---

### Requirement 2: Navigation and CTA Updates

**User Story:** As a visitor, I want navigation links that match the ELEVATE site structure and a clear registration CTA, so that I can explore the site and sign up for events.

#### Acceptance Criteria

1. THE RegisterBtn SHALL display "Register" as its label.
2. THE RegisterBtn SHALL link to `#register` as its href.
3. THE Footer SHALL provide navigation links for: About, Events, Schedule, Team, Venue, and Register.
4. THE FooterBanner SHALL display "Register Now" as its CTA label linking to `#register`.
5. THE Footer SHALL display social icons for Instagram, LinkedIn, YouTube, and Twitter.

---

### Requirement 3: Hero Section Content

**User Story:** As a visitor, I want the Hero section to clearly introduce ELEVATE with a compelling description, so that I immediately understand what the event is about.

#### Acceptance Criteria

1. THE Hero SHALL display "Join thousands of innovators, engineers, and creators at ELEVATE — powered by IEEE IEM Student Branch." as its body copy.
2. THE Hero SHALL preserve the smoke video background and parallax ScrollTrigger on `.hero-img`.
3. WHEN the viewport is mobile-sized, THE Hero SHALL display the mobile fallback image instead of the video background.

---

### Requirement 4: Welcome / About Section Content

**User Story:** As a visitor, I want the Welcome section to describe ELEVATE's scope and highlights, so that I understand what the tech-fest offers.

#### Acceptance Criteria

1. THE Welcome SHALL display the large-screen welcome lines: "Step into the future of technology at", "ELEVATE — IEEE IEM Student Branch's", "flagship tech-fest, where innovation", "meets competition. Explore robotics,", "AI, circuits, and more across", "two days of electrifying events."
2. THE Welcome SHALL display equivalent mobile-broken lines for small viewports.
3. THE Welcome SHALL preserve the clip-text scroll-scrub animation entirely.

---

### Requirement 5: Choose / Theme Section Content

**User Story:** As a visitor, I want to see the themes and technology categories of ELEVATE, so that I can identify which events align with my interests.

#### Acceptance Criteria

1. THE Choose SHALL display "Explore ELEVATE Themes" as its subtitle.
2. THE Choose SHALL display the pill tags: "Autonomous", "AI-Powered", "IEEE Certified", "Circuit Design", "Drone Tech", "Human vs Machine", "Open Innovation", and "Hackathon Ready".
3. THE Choose SHALL alternate pill tag border colors between `#b1a696` (muted) and `#f4efe7` (light).
4. THE Choose SHALL preserve all GSAP animations including height expand, clip-text reveal, and slide-in effects.

---

### Requirement 6: Gallery / Venue Atmosphere Section

**User Story:** As a visitor, I want to see venue area labels in the Gallery, so that I understand the physical spaces available at ELEVATE.

#### Acceptance Criteria

1. THE Gallery SHALL label its first panel "Main Arena".
2. THE Gallery SHALL label its second panel "Lab Complex".
3. THE Gallery SHALL label its third panel "Expo Hall".
4. THE Gallery SHALL display "ELEVATE" in its repeating ticker instead of "Capsules®".
5. THE Gallery SHALL preserve the 3-panel scroll-pin animation with `pin: true` and `scrub: 1`.
6. THE Gallery description text SHALL reflect venue atmosphere instead of hotel room content.

---

### Requirement 7: Venue Section Content

**User Story:** As a visitor, I want to see the college address and location information, so that I know where ELEVATE is being held.

#### Acceptance Criteria

1. THE Venue SHALL display "Find us on campus" as its subtitle.
2. THE Venue SHALL display "ELEVATE is hosted at", "Institute of Engineering", "& Management, Kolkata" as its heading lines.
3. THE Venue SHALL display "Salt Lake, Sector V, WB 700091" as its link text.
4. THE Venue SHALL preserve the hover ClickIndicator and useState active-link interaction pattern.

---

### Requirement 8: StickyCols — Why Attend Section

**User Story:** As a visitor, I want the StickyCols section to communicate the benefits of attending ELEVATE, so that I am motivated to register.

#### Acceptance Criteria

1. THE StickyCols SHALL display "Compete, create,—and connect with the best minds in tech" as the col-1 heading.
2. THE StickyCols SHALL display "Hands-on workshops—and live demo zones await you" as the first col-3 heading.
3. THE StickyCols SHALL display "Win prizes,—earn recognition, build your portfolio" as the second col-3 heading.
4. THE StickyCols description paragraphs SHALL describe the ELEVATE event experience.
5. THE StickyCols SHALL preserve the counter pills (1/3, 2/3, 3/3) and all 3-phase pin animation.

---

### Requirement 9: Events Carousel Section

**User Story:** As a visitor, I want to browse all 12 ELEVATE events in a horizontal scroll carousel, so that I can discover events and choose which ones to participate in.

#### Acceptance Criteria

1. THE Events SHALL render exactly 12 Event_Cards, one for each entry in eventsData.
2. WHEN the Events section is scrolled into view, THE Events SHALL pin the container and translate the card strip horizontally using GSAP ScrollTrigger with `scrub: true`.
3. THE Events ScrollTrigger SHALL use `start: "-10% 10%"` and `end` equal to the total card strip width.
4. EACH Event_Card SHALL display the event name, category badge, difficulty badge, description, and a counter in the format `01 / 12`.
5. WHEN an Event_Card has category "Technical", THE Event_Card SHALL render the category badge with accent color `#f4efe7`.
6. WHEN an Event_Card has category "Non-Technical", THE Event_Card SHALL render the category badge with muted color `#b1a696`.
7. THE Event_Card SHALL use background color `#2a2725` and `rounded-[2.5rem]` border radius.
8. IF eventsData is empty or undefined, THEN THE Events SHALL render nothing without throwing an error.

---

### Requirement 10: Schedule Timeline Section

**User Story:** As a visitor, I want to see the day-of schedule in a vertical timeline, so that I can plan my participation across the event day.

#### Acceptance Criteria

1. THE Schedule SHALL render exactly one Schedule_Item for each entry in scheduleData.
2. EACH Schedule_Item SHALL display the time, title, and optional icon for that schedule entry.
3. WHEN a Schedule_Item enters the viewport, THE Schedule SHALL animate it from `opacity: 0` and horizontal offset to its final visible position using GSAP ScrollTrigger with `scrub: 1`.
4. THE Schedule timeline items SHALL be staggered with a delay of 0.15 between each item.
5. THE Schedule ScrollTrigger SHALL use `start: "top 80%"` and `end: "bottom 20%"`.
6. THE Schedule layout SHALL display items in a centered vertical spine layout on desktop and a stacked single-column layout on mobile.
7. IF scheduleData is empty or undefined, THEN THE Schedule SHALL render nothing without throwing an error.

---

### Requirement 11: Team Section

**User Story:** As a visitor, I want to see the ELEVATE organizing team, so that I know who is behind the event and can trust its organization.

#### Acceptance Criteria

1. THE Team SHALL display "Meet the team" as its section subtitle.
2. THE Team SHALL display "Team ELEVATE" as its animated large heading using SplitText char-by-char reveal on scroll.
3. THE Team SHALL display "Organized by IEEE IEM Student Branch" as an organizer badge.
4. THE Team SHALL render one Team_Card for each member in teamData.members.
5. EACH Team_Card SHALL display the member's name and role.
6. WHEN Team_Cards enter the viewport, THE Team SHALL animate them with a fade-in stagger using GSAP ScrollTrigger.
7. WHERE individual member photos are unavailable, THE Team SHALL display avatar placeholder circles instead of broken images.
8. IF teamData.members is empty or undefined, THEN THE Team SHALL render the section header and organizer badge without Team_Cards.

---

### Requirement 12: GSAP Animation Preservation

**User Story:** As a visitor, I want all existing scroll animations to remain intact across all sections, so that the premium interactive experience is unchanged.

#### Acceptance Criteria

1. THE PreloaderII SHALL preserve the SplitText char-by-char animation and progress bar on page load.
2. THE PreloaderII SHALL fade out and scale-mask exit to reveal the Home page.
3. THE FooterTitle SHALL preserve the char-by-char SplitText slide-in animation.
4. THE FooterBanner SHALL preserve the scale-parallax ScrollTrigger animation on its background image.
5. WHEN any new GSAP animation is initialized, THE Site SHALL guard the animation refs and return early if any ref is null or undefined.
6. THE ScrollSmoother SHALL remain active and scrub all scroll events for the full page.

---

### Requirement 13: Page Composition

**User Story:** As a developer, I want Home.jsx to compose all sections in the correct order, so that the site renders the complete ELEVATE experience in a single page.

#### Acceptance Criteria

1. THE Site SHALL render sections in this order: Hero, Welcome, Choose, Gallery, Venue, MarqueeSticky, StickyCols, Events, Schedule, Team, FooterBanner, Footer, FooterTitle.
2. THE Site SHALL NOT render the Activities component.
3. THE Site SHALL NOT render the Feedback component.
4. THE Site SHALL render the Events, Schedule, and Team components imported from their respective new files.

---

### Requirement 14: No New Dependencies

**User Story:** As a developer, I want the ELEVATE conversion to use only existing npm packages, so that no additional dependencies are introduced and the bundle size remains stable.

#### Acceptance Criteria

1. THE Site SHALL implement all new sections (Events, Schedule, Team) using only the existing packages: react, gsap, tailwindcss v4, react-icons, react-responsive, @studio-freight/lenis, and react-router-dom.
2. THE Site SHALL NOT require installation of any new npm packages to build and run.

---

### Requirement 15: Data-Driven Rendering

**User Story:** As a developer, I want all new sections to read from their respective constants files, so that content can be updated without touching component logic.

#### Acceptance Criteria

1. THE Events SHALL source all card data exclusively from `src/constants/events.js`.
2. THE Schedule SHALL source all timeline data exclusively from `src/constants/schedule.js`.
3. THE Team SHALL source all member data exclusively from `src/constants/team.js`.
4. THE Welcome SHALL source all copy lines from `src/constants/welcome.js`.
