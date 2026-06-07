import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './gallery.css';
import { BsFillPlusCircleFill } from "react-icons/bs";

import gbg1 from '../../assets/gallery-1.jpg';
import gbg2 from '../../assets/gallery-2.jpg';
import gbg3 from '../../assets/gallery-3.jpg';

gsap.registerPlugin(ScrollTrigger);

const slides = [
  {
    id: "gallery-first",
    img: gbg1, alt: "Main Arena",
    label: "Main Arena",
    desc: "The Main Arena hosts the flagship robot combat and racing events, surrounded by roaring crowds and electrifying energy.",
    progress: "33%",
  },
  {
    id: "gallery-second",
    img: gbg2, alt: "Lab Complex",
    label: "Lab Complex",
    desc: "The Lab Complex is where circuit design, AI hackathons, and hands-on workshops come to life.",
    progress: "67%",
  },
  {
    id: "gallery-third",
    img: gbg3, alt: "Expo Hall",
    label: "Expo Hall",
    desc: "The Expo Hall showcases the best student projects and innovations, open to visitors, judges, and industry guests.",
    progress: "100%",
  },
];

// ─── Mobile: simple vertical stack ───────────────────────────────────────────
const MobileGallery = () => (
  <section className="w-full bg-[#0b0714] py-8 px-4 flex flex-col gap-4">
    <p className="text-[0.65rem] font-bold text-[#eae4f5] mb-2">Venue — ELEVATE 2025</p>
    {slides.map((s) => (
      <div key={s.id} className="relative rounded-[2rem] overflow-hidden h-[55vw] min-h-[180px]">
        <img src={s.img} alt={s.alt} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-[#eae4f5] text-xl font-semibold mb-1">{s.label}</h3>
          <p className="text-[#9a8eb7] text-[0.65rem] leading-relaxed">{s.desc}</p>
        </div>
      </div>
    ))}
  </section>
);

// ─── Desktop: full GSAP pinned animation ─────────────────────────────────────
const DesktopGallery = () => {
  const pageRef = useRef(null);

  useEffect(() => {
    const tl4 = gsap.timeline({
      scrollTrigger: {
        trigger: ".gallery-page4",
        start: "10% 10%",
        end: "220% 30%",
        scrub: 1,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    });

    tl4.to(".gallery-page4", { backgroundColor: "#0b0714", force3D: true }, "start");

    gsap.set(".gallery-topText h4, .gallery-topText h3, .gallery-bottomText h3", {
      opacity: 1, x: 0,
    });

    tl4
      .to(".gallery-box h3", { opacity: 0, force3D: true }, "a")
      .to(".gallery-page4 .gallery-background", {
        width: "calc(100vw - 1rem)",
        height: "calc(100vh - 1rem)",
        borderRadius: "3.5rem",
        y: -40,
        force3D: true,
      }, "a")
      .to(".gallery-page4 .gallery-background img", { transform: "scale(1)", force3D: true }, "a")
      .from(".gallery-background .gallery-topText h4, .gallery-background .gallery-topText h3, .gallery-background .gallery-bottomText h3", {
        opacity: 0, x: 50, force3D: true,
      })
      .to({}, { duration: 0.4 }, "+=0")

      .to("#gallery-second", { transform: "translate(-50%, -56%)", force3D: true }, "b")
      .to("#gallery-second img", { transform: "scale(1)", force3D: true }, "b")
      .to(".gallery-page4 .gallery-background", { scale: 0.9, opacity: 0, y: -50, force3D: true }, "b")
      .from("#gallery-second .gallery-topText h4, #gallery-second .gallery-topText h3, #gallery-second .gallery-bottomText h3", {
        opacity: 0, x: 50, force3D: true,
      })
      .to({}, { duration: 0.4 }, "+=0")

      .to("#gallery-third", { transform: "translate(-50%, -56%)", force3D: true }, "c")
      .to("#gallery-third img", { transform: "scale(1)", force3D: true }, "c")
      .to("#gallery-second", { scale: 0.9, opacity: 0, force3D: true }, "c")
      .from("#gallery-third .gallery-topText h4, #gallery-third .gallery-topText h3, #gallery-third .gallery-bottomText h3", {
        opacity: 0, x: 50, force3D: true,
      })
      .to({}, { duration: 0.4 }, "+=0");

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  const generateItems = (qty = 6) =>
    Array.from({ length: qty }, (_, i) => (
      <h3 key={i + 1} style={{ "--index": i + 1 }} className="tracking-tighter">
        ELEVATE
      </h3>
    ));

  return (
    <section className="gallery-page4" ref={pageRef}>
      <div className="gallery-slider">
        <div className="gallery-box" style={{ "--time": "40s", "--quantity": 6 }}>
          {generateItems(6)}
        </div>
      </div>

      {/* Panel 1 */}
      <div className="gallery-background">
        <img src={gbg1} alt="Main Arena" />
        <div className="gallery-topText">
          <h4>Main Arena</h4>
        </div>
        <div className="gallery-bottomText">
          <div className="w-full flex justify-center items-center gap-0">
            <BsFillPlusCircleFill className="w-8 h-8 text-[#9a8eb7]" />
            <h3>The Main Arena hosts the flagship robot combat and racing events,<br />surrounded by roaring crowds and electrifying energy.</h3>
          </div>
          <div className="relative z-9 w-50 h-[0.1rem] bg-[#271d3a]">
            <div className="progress-line absolute z-10 bg-[#eae4f5] w-[33%] h-[0.1rem] top-1/2 -translate-y-1/2 left-0" />
          </div>
        </div>
      </div>

      {/* Panel 2 */}
      <div id="gallery-second" className="gallery-background2">
        <img src={gbg2} alt="Lab Complex" />
        <div className="gallery-topText">
          <h4>Lab Complex</h4>
        </div>
        <div className="gallery-bottomText">
          <div className="w-full flex justify-center items-center gap-0">
            <BsFillPlusCircleFill className="w-8 h-8 text-[#9a8eb7]" />
            <h3>The Lab Complex is where circuit design, AI hackathons,<br />and hands-on workshops come to life.</h3>
          </div>
          <div className="relative z-9 w-50 h-[0.1rem] bg-[#271d3a]">
            <div className="progress-line absolute z-10 bg-[#eae4f5] w-[67%] h-[0.1rem] top-1/2 -translate-y-1/2 left-0" />
          </div>
        </div>
      </div>

      {/* Panel 3 */}
      <div id="gallery-third" className="gallery-background2">
        <img src={gbg3} alt="Expo Hall" />
        <div className="gallery-topText">
          <h4>Expo Hall</h4>
        </div>
        <div className="gallery-bottomText">
          <div className="w-full flex justify-center items-center gap-0">
            <BsFillPlusCircleFill className="w-8 h-8 text-[#9a8eb7]" />
            <h3>The Expo Hall showcases the best student projects and innovations,<br />open to visitors, judges, and industry guests.</h3>
          </div>
          <div className="relative z-9 w-50 h-[0.1rem] bg-[#271d3a]">
            <div className="progress-line absolute z-10 bg-[#eae4f5] w-[100%] h-[0.1rem] top-1/2 -translate-y-1/2 left-0" />
          </div>
        </div>
      </div>
    </section>
  );
};

// ─── Root ─────────────────────────────────────────────────────────────────────
const Gallery = () => {
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== "undefined" ? window.innerWidth < 768 : false
  );

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const handler = (e) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return isMobile ? <MobileGallery /> : <DesktopGallery />;
};

export default Gallery;
