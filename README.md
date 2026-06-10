# ELEVATE 2025 - IEEE IEM Student Branch Tech-Fest

<div align="center">

![ELEVATE Logo](https://img.shields.io/badge/ELEVATE-2025-orange)
[![React](https://img.shields.io/badge/React-18.3.1-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-Latest-646CFF?logo=vite&logoColor=white)](https://vite.dev/)
[![GSAP](https://img.shields.io/badge/GSAP-Animation-88CE02?logo=greensock)](https://gsap.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green)](#license)

[Live Demo](https://elevate26.vercel.app) • [Quick Start](#-installation--quick-start) • [Events](#-events) • [Architecture](#-architecture) • [Contact](#-contact)

<img width="1919" height="862" alt="image" src="https://github.com/user-attachments/assets/afe99be8-8eac-4aca-b912-b656fa8662da" />


**Two days of robotics, AI, circuit design, and electrifying competition.**

A celebration of technology, innovation, and community — powered by IEEE IEM Student Branch.

</div>

---

## ✨ Features

- **12 Competitive Events** — Spanning robotics, AI, circuit design, drones, and creative challenges
- **Smooth Animations** — GSAP-powered scroll animations and transitions throughout
- **Horizontal Event Showcase** — Interactive pinned horizontal scroll for browsing events
- **Responsive Design** — Mobile-first approach with Tailwind CSS
- **Interactive Gallery** — Photo gallery with smooth transitions and hover effects
- **Integrated Map** — Google Maps embed for venue location (IEM Gurukul Building)
- **Registration System** — Streamlined event registration flow
- **Team Showcase** — Meet the organizing committee
- **Event Schedule** — Complete timeline for both days

---

## 🚀 Installation & Quick Start

### 1. Clone and install

```bash
git clone https://github.com/debojyoti10CC/elevate26.git
cd elevate26/frontend
npm install
```

### 2. Run development server

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### 3. Build for production

```bash
npm run build
```

---

## 🎯 Events

ELEVATE 2025 offers 12 events across technical and non-technical categories:

### Technical Events

| Event | Difficulty | Description |
|-------|------------|-------------|
| **Robo Wars** | Advanced | Battle your robot against opponents in an arena combat challenge |
| **Line Follower** | Intermediate | Program an autonomous robot to follow a line track at maximum speed |
| **Maze Solver** | Advanced | Design a robot that can autonomously navigate and solve a complex maze |
| **Robo Soccer** | Intermediate | Head-to-head robot football with 2-minute matches |
| **Drone Racing** | Advanced | Pilot FPV drones through obstacle courses at high speed |
| **Circuit Design** | Intermediate | Solve PCB layout and circuit design challenges under time pressure |
| **AI Hackathon** | Open | Build an AI/ML solution to a real-world problem in 4 hours |

### Non-Technical Events

| Event | Difficulty | Description |
|-------|------------|-------------|
| **Paper Presentation** | Open | Present your research paper or technical concept to a panel of judges |
| **Project Exhibition** | Open | Showcase your project — hardware or software — to visitors and judges |
| **Tech Quiz** | Beginner | Fast-paced technical quiz covering robotics, AI, electronics, and science |
| **Photography** | Open | Capture the energy and spirit of ELEVATE through your lens |
| **Gaming** | Open | Compete in the esports tournament with solo and team formats |

---

## 🏗️ Architecture

```
elevate26/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Hero/             Hero section with video background
│   │   │   ├── Showcase/         Horizontal scrolling event cards
│   │   │   ├── Activities/       Event categories display
│   │   │   ├── Gallery/          Photo gallery with animations
│   │   │   ├── Choose/           Why attend section
│   │   │   ├── Welcome/          Introduction section
│   │   │   ├── Feedback/         Testimonials carousel
│   │   │   ├── Footer/           Footer with map and social links
│   │   │   ├── FooterBanner/     Call-to-action banner
│   │   │   ├── Buttons/          Reusable button components
│   │   │   ├── Cards/            Event card components
│   │   │   ├── Intro/            Loading intro animation
│   │   │   └── Marquee/          Scrolling text animation
│   │   ├── assets/               Images, videos, and static files
│   │   ├── App.jsx               Main application component
│   │   └── main.jsx              React entry point
│   ├── public/                   Public assets
│   ├── index.html                HTML template
│   ├── package.json              Dependencies
│   ├── tailwind.config.js        Tailwind configuration
│   └── vite.config.js            Vite configuration
└── README.md                     This file
```

---

## 🎨 Key Technologies

### Frontend Framework
- **React 18** — Modern React with hooks and concurrent features
- **Vite** — Lightning-fast build tool and dev server

### Animation & Interactions
- **GSAP (GreenSock)** — Professional-grade animation library
- **ScrollTrigger** — Scroll-based animations and pinning
- **Lenis** — Smooth scroll implementation

### Styling
- **Tailwind CSS** — Utility-first CSS framework
- **Custom CSS** — Component-specific styles for complex animations

### Icons & UI
- **React Icons** — Popular icon packs (FontAwesome, Material Design, etc.)
- **Google Maps Embed** — Interactive venue location map

---

## 🎭 Component Showcase

### Hero Section
Full-viewport hero with video background, animated text, and call-to-action buttons.

### Showcase (Event Cards)
Horizontal pinned scroll section powered by GSAP ScrollTrigger. Each event card features:
- Category badge (Technical/Non-Technical)
- Difficulty indicator
- Icon and title
- Description
- Event numbering

### Gallery
Interactive photo gallery with:
- Smooth hover effects
- Image descriptions
- Grid layout with responsive design

### Footer
Enhanced footer featuring:
- Google Maps embed with shadow effects
- Social media links
- Navigation menu
- Contact information
- IEEE IEM branding

---

## 📍 Venue

**IEM Gurukul Building**  
Institute of Engineering and Management  
Kolkata, West Bengal, India

The venue is equipped with:
- Main Arena for robot combat and racing events
- Multiple workshop zones
- Project exhibition space
- Gaming arena
- Seminar halls

---

## 🗓️ Event Details

**Dates:** [To be announced]  
**Time:** Full day events (9 AM - 6 PM)  
**Duration:** 2 days  
**Expected Participants:** 500+

---

## 🔧 Development

### Project Structure

```javascript
// Main App Component
App.jsx
├── Intro              // Loading animation
├── Hero               // Hero section
├── Welcome            // Introduction
├── Activities         // Event categories
├── Showcase           // Horizontal event cards
├── Choose             // Why ELEVATE
├── Gallery            // Photo gallery
├── Feedback           // Testimonials
├── FooterBanner       // CTA banner
└── Footer             // Footer with map
```

### Adding New Events

1. Update the `eventsData` array in `src/components/Showcase/Showcase.jsx`:

```javascript
const eventsData = [
  {
    id: 13,
    name: "Your Event Name",
    category: "Technical", // or "Non-Technical"
    description: "Event description",
    difficulty: "Intermediate", // Beginner, Intermediate, Advanced, Open
    icon: "🎯"
  }
];
```

2. The event will automatically appear in the showcase carousel.

### Customizing Colors

Edit `tailwind.config.js` or use the existing color palette:

- **Primary Text:** `#f4efe7`
- **Secondary Text:** `#b1a696`
- **Background:** `#181717`
- **Card Background:** `#2a2725`
- **Accent:** `#eae5dd`

---

## 🚢 Deployment

The project is configured for deployment on **Vercel**.

### Deploy to Vercel

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Vercel will automatically detect the Vite configuration
4. Set the root directory to `frontend`
5. Deploy!

### Environment Variables

No environment variables are required for the frontend.

---

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. **Fork** the repository
2. Create a **feature branch** (`git checkout -b feature/AmazingFeature`)
3. **Commit** your changes (`git commit -m 'Add some AmazingFeature'`)
4. **Push** to the branch (`git push origin feature/AmazingFeature`)
5. Open a **Pull Request**

### Contribution Guidelines

- Follow the existing code style
- Write meaningful commit messages
- Test your changes before submitting
- Update documentation if needed

---

## 📞 Contact

**IEEE IEM Student Branch**

- **Email:** [ieee@iem.edu.in](mailto:ieee@iem.edu.in)
- **Instagram:** [@ieee_iem](https://instagram.com/ieee_iem)
- **LinkedIn:** [IEEE IEM Student Branch](https://linkedin.com/company/ieee-iem)
- **Twitter:** [@ieee_iem](https://twitter.com/ieee_iem)
- **Website:** [iem.edu.in](https://iem.edu.in)

---

## 📄 License

MIT License

Copyright (c) 2025 IEEE IEM Student Branch

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

---

## 🙏 Acknowledgments

- **IEEE IEM Student Branch** — Organizing committee
- **IEM Kolkata** — Venue and infrastructure support
- **All Sponsors** — Making ELEVATE 2025 possible
- **Open Source Community** — For the amazing tools and libraries

---

## 🎓 About IEEE IEM Student Branch

IEEE IEM Student Branch is one of the most active IEEE student branches in India, organizing technical workshops, hackathons, competitions, and conferences throughout the year. ELEVATE is our flagship annual tech-fest, bringing together students from across the country to compete, learn, and innovate.

**Join us in celebrating technology, innovation, and community.**

---

*ELEVATE 2025 — Where Ideas Take Flight* 🚀

---

<div align="center">

Made with ❤️ by IEEE IEM Student Branch

**[Register Now](#) • [View Events](#) • [Contact Us](#)**

</div>
