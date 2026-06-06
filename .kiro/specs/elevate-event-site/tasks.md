# ELEVATE Event Site - Implementation Tasks

## [1] Debug and fix Google Map embed in footer
- **Status**: in_progress
- **Dependencies**: none

The Google Maps iframe is currently not rendering in the footer. Debug the embed URL, verify iframe loading, and ensure the map displays IEM Kolkata location (22.487888, 88.36945) properly on both mobile and desktop.

**Current state**: Footer component has iframe with Google Maps embed URL, CSS styling in place, but map shows blank.

**What to check**:
- Verify embed URL is correctly formatted with valid place ID
- Check browser console for iframe loading errors
- Test on actual device if possible
- Ensure map displays with proper container sizing

**Files to debug/modify**:
- `frontend/src/components/Footer/Footer.jsx`
- `frontend/src/index.css` (`.footer-map-container` class)

---

## [2] Create Events data constant file
- **Status**: not_started
- **Dependencies**: [1]

Create `src/constants/events.js` with 12-event data array. This constant powers the event carousel already implemented in Showcase component.

**Events to include** (12 total):
1. Robo Wars - Technical - Advanced - "Battle your robot against opponents in an arena combat challenge. Build the toughest machine and dominate the ring."
2. Line Follower - Technical - Intermediate - "Program an autonomous robot to follow a line track at maximum speed with precision and reliability."
3. Maze Solver - Technical - Advanced - "Design a robot that can autonomously navigate and solve a complex maze with the shortest possible path."
4. Robo Soccer - Technical - Intermediate - "Head-to-head robot football. Maneuver your bot to score goals and outplay your opponent in 2-minute matches."
5. Drone Racing - Technical - Advanced - "Pilot FPV drones through obstacle courses at high speed. Fastest lap time wins."
6. Circuit Design - Technical - Intermediate - "Solve PCB layout and circuit design challenges under time pressure. Test your electronics fundamentals."
7. AI Hackathon - Technical - Open - "Build an AI/ML solution to a real-world problem in 4 hours. Any language, any framework."
8. Paper Presentation - Non-Technical - Open - "Present your research paper or technical concept to a panel of judges. Innovation and clarity rewarded."
9. Project Exhibition - Non-Technical - Open - "Showcase your project — hardware or software — to visitors and judges. Best project wins."
10. Quiz - Non-Technical - Beginner - "Fast-paced technical quiz covering robotics, AI, electronics, and general science. Team of 2."
11. Photography - Non-Technical - Open - "Capture the energy and spirit of ELEVATE through your lens. Best photo wins across categories."
12. Gaming - Non-Technical - Open - "Compete in the esports tournament. Titles to be announced. Solo and team formats available."

**Files to create**:
- `frontend/src/constants/events.js` (NEW)

---

## [3] Create Schedule timeline section
- **Status**: not_started
- **Dependencies**: [2]

Create new Schedule component with vertical timeline layout. Use GSAP ScrollTrigger for staggered scroll-reveal animation. Include 7 schedule items with times, titles, and emoji icons.

**Schedule data** (7 items):
- 9:00 AM - Registration & Check-in - ⚙️
- 10:00 AM - Inauguration Ceremony - 🤖
- 11:00 AM - Technical Events — Round 1 - 🔬
- 1:00 PM - Lunch Break - ☕
- 2:00 PM - Technical Round 2 + Non-Technical Events - ⚡
- 5:00 PM - Project Exhibition & AI Hackathon - 🏗️
- 7:00 PM - Prize Distribution & Closing Ceremony - 🏆

**Animation requirements**:
- Staggered scroll reveal using ScrollTrigger
- Each item: `opacity: 0, x: ±60` → final position as it enters viewport
- `scrub: 1` for smooth scroll-linked animation
- Alternating left/right layout on desktop, stacked on mobile

**Files to create**:
- `frontend/src/components/Schedule/Schedule.jsx` (NEW)
- `frontend/src/constants/schedule.js` (NEW)

**Files to modify**:
- `frontend/src/pages/Home/Home.jsx` (add Schedule import and composition)

---

## [4] Create Team section
- **Status**: not_started
- **Dependencies**: [3]

Create new Team section component to replace Feedback. Reuse Feedback's structure and GSAP animation patterns. Display team/organizer information with SplitText char-by-char animation on heading and fade-in stagger on cards. Use avatar placeholder circles (no photos required).

**Team member roles** (6 members with placeholder names):
- Event Director
- Technical Lead
- Design Lead
- Logistics Head
- Sponsorship
- Marketing

**Animation requirements**:
- SplitText char-by-char reveal on "Team ELEVATE" heading on scroll
- Fade-in stagger animation on member cards
- Match existing Feedback component animation patterns

**Files to create**:
- `frontend/src/components/Team/Team.jsx` (NEW)
- `frontend/src/constants/team.js` (NEW)

**Files to modify**:
- `frontend/src/pages/Home/Home.jsx` (replace Feedback import with Team import, update composition order)

---

## [5] Full site verification and testing
- **Status**: not_started
- **Dependencies**: [4]

Verify all components render correctly, animations work smoothly, no console errors, and site displays properly on both mobile and desktop.

**Verification checklist**:
- Preloader animates with "ELEVATE" text and loads correctly
- Hero section displays with ELEVATE branding
- Events carousel works with 12 cards and horizontal scroll
- Schedule timeline renders with proper animations
- Team section displays with member cards
- Google Map displays IEM Kolkata location in footer
- All mobile optimizations working smoothly
- No console errors or warnings
- Footer displays all social icons and links correctly
- FooterTitle shows "ELEVATE" with proper animation

**Testing locations**:
- Desktop browser (Chrome/Firefox/Safari)
- Mobile device (iOS Safari, Android Chrome)
- Development server: `http://localhost:5173/capsule/`

**Files to test** (all sections):
- `frontend/src/pages/Home/Home.jsx` (main page)
- All component files from previous tasks
- `frontend/src/components/Footer/Footer.jsx` (especially map)

