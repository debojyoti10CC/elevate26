import gsap, { ScrollTrigger, SplitText } from "gsap/all";
import { useGSAP } from "@gsap/react";
import colimg1 from "../../assets/cap1-square.jpg";
import colimg2 from "../../assets/cap2-square.jpg";
import { useState, useEffect } from "react";

// ─── Mobile: simple stacked cards ─────────────────────────────────────────────
const MobileStickyCols = () => (
  <section className="w-full bg-[#181717] px-4 py-12 flex flex-col gap-6">
    {[
      {
        num: "1", heading: "Compete, create,—\nand connect with the best minds in tech",
        body: "Step into the arena and go head-to-head with the sharpest engineering minds around.",
        img: colimg1,
      },
      {
        num: "2", heading: "Hands-on workshops—\nand live demo zones await you",
        body: "Get hands-on with real hardware, live circuits, and cutting-edge demos from student innovators.",
        img: colimg2,
      },
      {
        num: "3", heading: "Win prizes,—\nearn recognition, build your portfolio",
        body: "Top performers take home prizes, certificates, and recognition from IEEE IEM Student Branch.",
        img: colimg1,
      },
    ].map(({ num, heading, body, img }) => (
      <div key={num} className="bg-[#2a2725] rounded-[2rem] overflow-hidden">
        <img src={img} alt="" className="w-full h-48 object-cover" />
        <div className="p-6">
          <div className="flex items-center gap-2 mb-3">
            <span className="border px-3 py-1 rounded-full text-[#aaa091] text-sm">{num}</span>
            <span className="border px-3 py-1 rounded-full text-[#524e4b] text-sm">3</span>
          </div>
          <h2 className="text-[#b1a696] text-xl font-bold mb-3 whitespace-pre-line">{heading}</h2>
          <p className="text-[#b1a696] text-xs leading-relaxed">{body}</p>
        </div>
      </div>
    ))}
  </section>
);

// ─── Desktop: full GSAP pin animation ─────────────────────────────────────────
const DesktopStickyCols = () => {
  const [reveal, setReveal] = useState(false);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger, SplitText);

    const textElements = document.querySelectorAll(".col-3 h1, .col-3 p");
    textElements.forEach((element) => {
      const split = new SplitText(element, { type: "lines", linesClass: "line" });
      split.lines.forEach((line) => {
        line.innerHTML = `<span>${line.textContent}</span>`;
      });
    });

    ScrollTrigger.refresh();

    gsap.set(".col-3 .col-content-wrapper .line span", { yPercent: 0 });
    gsap.set(".col-3 .col-content-wrapper-2 .line span", { yPercent: -125 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".sticky-cols",
        start: "top 20%",
        end: "+=90%",
        pin: true,
        scrub: 1,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    });

    tl.add(() => setReveal(false));
    tl.to(".col-1", { opacity: 0, scale: 0.8, duration: 0.8, force3D: true })
      .to(".col-2", { x: "0%", duration: 0.8, force3D: true }, "<")
      .to(".col-3", { y: "0%", duration: 0.8, force3D: true }, "<")
      .to(".col-img-1 img", { scale: 1, duration: 0.8, force3D: true }, "<")
      .to(".col-img-2", { clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", duration: 0.8, force3D: true }, "<")
      .to(".col-img-2 img", { scale: 1.6, duration: 0.8, force3D: true }, "<");

    tl.add(() => setReveal(false));
    tl.add(() => setReveal(true));
    tl.to(".col-2", { opacity: 0, scale: 0.8, duration: 0.8, force3D: true })
      .to(".col-3 .col-content-wrapper .line span", { yPercent: -125, duration: 0.8, force3D: true }, "<");
    tl.to(".col-3", { x: "0%", duration: 0.8, force3D: true }, "-=0.8")
      .to(".col-4", { y: "0%", duration: 0.8, force3D: true }, "<")
      .to(".col-3 .col-content-wrapper-2 .line span", { yPercent: 0, delay: 0.4, duration: 0.8, force3D: true }, "<");

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
      tl.kill();
    };
  });

  return (
    <section className="sticky-cols w-screen h-dvh overflow-hidden bg-[#181717] lg:mb-20">
      <div className="sticky-cols-wrapper relative w-full h-screen">
        <div className="col col-1">
          <div className="col-content">
            <div className="col-content-wrapper">
              <h1 className="text-2xl text-[#b1a696] font-bold leading-auto">
                Compete, create,—<br />and connect with<br />the best minds<br />in tech
              </h1>
              <div className="col-content-para flex items-center gap-4 justify-between">
                <div className="flex items-center gap-0 justify-center">
                  <h3 className="border-1 px-3 py-1 rounded-full text-[#aaa091]">1</h3>
                  <h3 className="border-1 px-3 py-1 rounded-full text-[#524e4b]">3</h3>
                </div>
                <p className={`text-[12px] font-medium ${!reveal ? "mr-6" : "mr-0"}`}>
                  Step into the arena and go head-to-head<br />with the sharpest engineering minds around.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="col col-2">
          <div className="col-img col-img-1">
            <div className="col-img-wrapper">
              <img src={colimg1} alt="img" />
            </div>
          </div>
          <div className="col col-img-2 p-2">
            <div className="col-img-wrapper">
              <img src={colimg2} alt="img" />
            </div>
          </div>
        </div>

        <div className="col col-3">
          <div className="col-content-wrapper">
            <h1 className="text-2xl font-bold leading-auto">
              Hands-on workshops—<br />and live demo<br />zones await<br />you
            </h1>
            <div className={`col-content-para flex items-center gap-4 justify-between ${reveal ? "ml-0" : "ml-6"}`}>
              <div className="flex items-center gap-0 justify-center">
                <h3 className="border-1 px-3 py-1 rounded-full text-[#aaa091]">{reveal ? "3" : "2"}</h3>
                <h3 className="border-1 px-3 py-1 rounded-full text-[#524e4b]">3</h3>
              </div>
              <p className="text-[12px] font-medium">
                Get hands-on with real hardware, live circuits,<br />and cutting-edge demos from student innovators.
              </p>
            </div>
          </div>
          <div className="col-content-wrapper-2">
            <h1 className="text-2xl font-bold leading-auto">
              Win prizes,—<br />earn recognition,<br />build your<br />portfolio
            </h1>
            <div className="col-content-para flex items-center gap-4 justify-between">
              <div className="flex items-center gap-0 justify-center" />
              <p className={`text-[12px] font-medium ${!reveal ? "mr-0" : "mr-6"}`}>
                Top performers take home prizes, certificates,<br />and recognition from IEEE IEM Student Branch.
              </p>
            </div>
          </div>
        </div>

        <div className="col col-4">
          <div className="col-img col-img-1">
            <div className="col-img-wrapper">
              <img src={colimg1} alt="img" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ─── Root: swap at 768px ──────────────────────────────────────────────────────
const StickyCols = () => {
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== "undefined" ? window.innerWidth < 768 : false
  );

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const handler = (e) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return isMobile ? <MobileStickyCols /> : <DesktopStickyCols />;
};

export default StickyCols;
