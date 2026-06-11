import { useEffect, useRef } from "react";
import gsap from "gsap/all";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { MdArrowOutward } from "react-icons/md";
import smoke from "../../assets/smoke_final.mp4";

gsap.registerPlugin(ScrollTrigger);

// ── Import all robot frames eagerly via Vite glob (auto-detects count) ──
const frameModules = import.meta.glob(
    "../../assets/robot-frames/ezgif-frame-*.jpg",
    { eager: true }
);

const sortedKeys = Object.keys(frameModules).sort((a, b) => {
    const n = (s) => parseInt(s.match(/(\d+)\.jpg$/)?.[1] ?? "0", 10);
    return n(a) - n(b);
});

const FRAME_SRCS = sortedKeys.map((k) => frameModules[k].default);
const TOTAL_FRAMES = FRAME_SRCS.length;

// ── Import all mobile robot frames eagerly via Vite glob (auto-detects count) ──
const mobileFrameModules = import.meta.glob(
    "../../assets/robot-frames-mobile/ezgif-frame-*.jpg",
    { eager: true }
);

const sortedMobileKeys = Object.keys(mobileFrameModules).sort((a, b) => {
    const n = (s) => parseInt(s.match(/(\d+)\.jpg$/)?.[1] ?? "0", 10);
    return n(a) - n(b);
});

const MOBILE_FRAME_SRCS = sortedMobileKeys.map((k) => mobileFrameModules[k].default);
const TOTAL_MOBILE_FRAMES = MOBILE_FRAME_SRCS.length;

// ── Canvas draw ──
function drawFrame(canvas, img, logW, logH) {
    if (!canvas || !img || !img.complete || !img.naturalWidth) return;
    const ctx = canvas.getContext("2d");
    const W = logW || canvas.offsetWidth;
    const H = logH || canvas.offsetHeight;

    ctx.clearRect(0, 0, W, H);

    const imgA = img.naturalWidth / img.naturalHeight;
    const boxA = W / H;

    let dW, dH, dX, dY;
    if (imgA > boxA) {
        dW = W; dH = dW / imgA; dX = 0; dY = (H - dH) / 2;
    } else {
        dH = H; dW = dH * imgA; dX = (W - dW) / 2; dY = 0;
    }
    ctx.drawImage(img, dX, dY, dW, dH);
}

const Hero = () => {
    const sectionRef = useRef(null);
    const cardRef = useRef(null);
    const canvasRef = useRef(null);
    const h1Ref = useRef(null);
    const h2Ref = useRef(null);
    const descRef = useRef(null);
    const registerBtnRef = useRef(null);
    const desktopImagesRef = useRef([]);
    const mobileImagesRef = useRef([]);
    const frameIdxRef = useRef(0);
    const logSizeRef = useRef({ w: 0, h: 0 });

    // Cache layout sizes to avoid layout thrashing during scroll events
    const layoutSizesRef = useRef({
        cardW: 0,
        cardH: 0,
        h1Left: 0,
        h1Top: 0,
        h1W: 0,
        h1H: 0
    });

    const updateLayoutSizes = () => {
        if (cardRef.current && h1Ref.current) {
            layoutSizesRef.current = {
                cardW: cardRef.current.offsetWidth,
                cardH: cardRef.current.offsetHeight,
                h1Left: h1Ref.current.offsetLeft,
                h1Top: h1Ref.current.offsetTop,
                h1W: h1Ref.current.offsetWidth,
                h1H: h1Ref.current.offsetHeight
            };
        }
    };

    // ── Size the canvas ──
    const setupCanvas = () => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const dpr = window.devicePixelRatio || 1;
        const w = canvas.offsetWidth;
        const h = canvas.offsetHeight;
        logSizeRef.current = { w, h };
        canvas.width = Math.round(w * dpr);
        canvas.height = Math.round(h * dpr);
        const ctx = canvas.getContext("2d");
        ctx.resetTransform();
        ctx.scale(dpr, dpr);
    };

    // ── Pre-load all frames ──
    useEffect(() => {
        const dImgs = FRAME_SRCS.map((src) => {
            const img = new Image();
            img.src = src;
            return img;
        });
        desktopImagesRef.current = dImgs;

        const mImgs = MOBILE_FRAME_SRCS.map((src) => {
            const img = new Image();
            img.src = src;
            return img;
        });
        mobileImagesRef.current = mImgs;

        const isMobile = window.innerWidth < 768;
        const initialImg = isMobile ? mImgs[0] : dImgs[0];

        if (initialImg) {
            initialImg.onload = () => {
                setupCanvas();
                const { w, h } = logSizeRef.current;
                drawFrame(canvasRef.current, initialImg, w, h);
                updateLayoutSizes();
            };
            if (initialImg.complete) {
                setupCanvas();
                const { w, h } = logSizeRef.current;
                drawFrame(canvasRef.current, initialImg, w, h);
                updateLayoutSizes();
            }
        }

        const onResize = () => {
            setupCanvas();
            const isMob = window.innerWidth < 768;
            const imgs = isMob ? mobileImagesRef.current : desktopImagesRef.current;
            const target = Math.round(frameIdxRef.current);
            const { w, h } = logSizeRef.current;
            if (imgs[target]) {
                drawFrame(canvasRef.current, imgs[target], w, h);
            }
            updateLayoutSizes();
        };
        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
    }, []);

    // ── GSAP pin + scrub — works correctly inside ScrollSmoother ──
    useGSAP(() => {
        // Wait one tick so ScrollSmoother has initialised
        const ctx = gsap.context(() => {
            ScrollTrigger.create({
                trigger: sectionRef.current,
                start: "top top",
                end: "+=400%",          // 4× viewport — enough travel for 238 frames
                pin: true,              // GSAP pins — not CSS sticky
                pinSpacing: true,       // adds scroll space after the pin
                anticipatePin: 1,
                scrub: 0.6,
                invalidateOnRefresh: true,
                onRefresh() {
                    updateLayoutSizes();
                },
                onUpdate(self) {
                    // ── Frame animation (ends by 80% progress) ──
                    const isMobile = window.innerWidth < 768;
                    const imgs = isMobile ? mobileImagesRef.current : desktopImagesRef.current;
                    const totalFrames = isMobile ? TOTAL_MOBILE_FRAMES : TOTAL_FRAMES;

                    const clamp = (v, lo, hi) => Math.min(hi, Math.max(lo, v));
                    const robotProgress = clamp(self.progress / 0.80, 0, 1);
                    const target = Math.round(robotProgress * (totalFrames - 1));
                    if (target !== Math.round(frameIdxRef.current)) {
                        frameIdxRef.current = target;
                        const { w, h } = logSizeRef.current;
                        if (imgs[target]) {
                            drawFrame(canvasRef.current, imgs[target], w, h);
                        }
                    }

                    // ── Tagline animation (enters 15%->30%, exits 40%->55%) ──
                    let tagX = -300;
                    let tagOpacity = 0;

                    if (self.progress < 0.15) {
                        tagX = -300;
                        tagOpacity = 0;
                    } else if (self.progress <= 0.30) {
                        const t = (self.progress - 0.15) / 0.15;
                        const eased = 1 - Math.pow(1 - t, 3); // ease-out cubic
                        tagX = (1 - eased) * -300;
                        tagOpacity = eased;
                    } else if (self.progress <= 0.40) {
                        tagX = 0;
                        tagOpacity = 1;
                    } else if (self.progress <= 0.55) {
                        const t = (self.progress - 0.40) / 0.15;
                        const eased = Math.pow(t, 3); // ease-in cubic
                        tagX = eased * -300;
                        tagOpacity = 1 - eased;
                    } else {
                        tagX = -300;
                        tagOpacity = 0;
                    }

                    if (h2Ref.current) {
                        h2Ref.current.style.transform = `translateX(${tagX}px) translateY(-50%)`;
                        h2Ref.current.style.opacity = tagOpacity;
                    }

                    // ── Description animation (enters 55%->70%, exits 75%->85%) ──
                    let descX = 300;
                    let descOpacity = 0;

                    if (self.progress < 0.55) {
                        descX = 300;
                        descOpacity = 0;
                    } else if (self.progress <= 0.70) {
                        const t = (self.progress - 0.55) / 0.15;
                        const eased = 1 - Math.pow(1 - t, 3); // ease-out cubic
                        descX = (1 - eased) * 300;
                        descOpacity = eased;
                    } else if (self.progress <= 0.75) {
                        descX = 0;
                        descOpacity = 1;
                    } else if (self.progress <= 0.82) {
                        const t = (self.progress - 0.75) / 0.07;
                        const eased = Math.pow(t, 3); // ease-in cubic
                        descX = eased * 300;
                        descOpacity = 1 - eased;
                    } else {
                        descX = 300;
                        descOpacity = 0;
                    }

                    if (descRef.current) {
                        descRef.current.style.transform = `translateX(${descX}px) translateY(-50%)`;
                        descRef.current.style.opacity = descOpacity;
                    }

                    // ── ELEVATE centering animation (82%->98%) ──
                    let elevX = 0;
                    let elevY = 0;

                    if (self.progress >= 0.82) {
                        const t = clamp((self.progress - 0.82) / 0.16, 0, 1);
                        const eased = 1 - Math.pow(1 - t, 3); // ease-out cubic
                        
                        const { cardW, cardH, h1Left, h1Top, h1W, h1H } = layoutSizesRef.current;

                        const targetX = (cardW - h1W) / 2 - h1Left;
                        const targetY = (cardH - h1H) / 2 - h1Top;

                        elevX = eased * targetX;
                        elevY = eased * targetY;
                    }

                    if (h1Ref.current) {
                        h1Ref.current.style.transform = `translate(${elevX}px, ${elevY}px)`;
                    }

                    // ── Register button entry animation (90%->99%) ──
                    let regOpacity = 0;
                    let regY = 50;

                    if (self.progress >= 0.90) {
                        const t = clamp((self.progress - 0.90) / 0.09, 0, 1);
                        const eased = 1 - Math.pow(1 - t, 3); // ease-out cubic
                        regOpacity = eased;
                        regY = (1 - eased) * 50;
                    }

                    if (registerBtnRef.current) {
                        registerBtnRef.current.style.opacity = regOpacity;
                        const isMobile = window.innerWidth < 768;
                        const targetYOffset = isMobile ? 80 : 130;
                        registerBtnRef.current.style.transform = `translate(-50%, calc(-50% + ${targetYOffset + regY}px))`;
                        registerBtnRef.current.style.pointerEvents = self.progress >= 0.92 ? "auto" : "none";
                    }
                },
            });
        });
        return () => ctx.revert();
    }, { scope: sectionRef });

    return (
        /*
         * Section is exactly 100svh tall.
         * GSAP's pin + pinSpacing handles the extra scroll travel,
         * so there is NO blank gap between Hero and Welcome.
         */
        <section
            ref={sectionRef}
            className="hero-section w-full p-2 md:p-2 mb-0"
            style={{ height: "100svh" }}
        >
            {/* ── Card ── */}
            <div
                ref={cardRef}
                className="relative w-full h-full rounded-[2rem] md:rounded-[2.5rem] overflow-hidden"
                style={{
                    background: `
                        radial-gradient(ellipse 65% 90% at 80% 45%, rgba(109, 40, 217, 0.55) 0%, rgba(76, 17, 140, 0.35) 35%, transparent 65%),
                        radial-gradient(ellipse 45% 60% at 90% 65%, rgba(139, 60, 255, 0.25) 0%, transparent 55%),
                        radial-gradient(ellipse 80% 70% at 60% 50%, rgba(49, 10, 100, 0.4) 0%, transparent 70%),
                        #080511
                    `
                }}
            >
                {/* ── Robot canvas ── */}
                <canvas
                    ref={canvasRef}
                    className="absolute inset-0 w-full h-full z-0"
                    style={{ display: "block" }}
                />

                {/* ── Left gradient ── */}
                <div className="absolute inset-0 z-10" style={{ background: "linear-gradient(to right, #080511 0%, rgba(8,5,17,0.85) 30%, rgba(8,5,17,0.2) 60%, transparent 100%)" }} />

                {/* ── Bottom gradient ── */}
                <div className="absolute inset-0 z-10" style={{ background: "linear-gradient(to top, rgba(8,5,17,0.75) 0%, transparent 45%, rgba(8,5,17,0.2) 100%)" }} />

                {/* ── Smoke overlay ── */}
                <video
                    src={smoke}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover z-20 pointer-events-none opacity-30 mix-blend-hard-light"
                />

                {/* ── Text layer ── */}
                <div className="absolute inset-0 z-30 p-6 md:p-8">

                    {/* Top-left: big title */}
                    <h1
                        ref={h1Ref}
                        className="text-[#eae4f5] text-[15vw] md:text-[10vw] lg:text-9xl font-bold tracking-wider leading-none w-fit"
                        style={{
                            textShadow: "2px 4px 12px rgba(0,0,0,0.8)",
                            willChange: "transform",
                        }}
                    >
                        ELEVATE
                    </h1>

                    {/* Vertically centered left: tagline — slides in at scroll midpoint, out at end */}
                    <h2
                        ref={h2Ref}
                        className="absolute left-6 md:left-8 text-[#eae4f5] text-2xl md:text-3xl lg:text-4xl font-bold leading-snug flex flex-col gap-0.5"
                        style={{
                            top: "50%",
                            transform: "translateX(-300px) translateY(-50%)",
                            opacity: 0,
                            textShadow: "1px 2px 6px rgba(0,0,0,0.9)",
                            willChange: "transform, opacity",
                        }}
                    >
                        <span>India's Premier</span>
                        <span>College Tech-Fest—</span>
                        <span>IEEE IEM SB</span>
                    </h2>

                    {/* Vertically centered right: description — slides in/out after tagline */}
                    <p
                        ref={descRef}
                        className="absolute right-6 md:right-8 text-[#e8e3db] text-lg md:text-xl lg:text-2xl font-medium tracking-wide md:w-[32%] text-right leading-relaxed"
                        style={{
                            top: "50%",
                            transform: "translateX(300px) translateY(-50%)",
                            opacity: 0,
                            textShadow: "1px 2px 4px rgba(0,0,0,0.9)",
                            willChange: "transform, opacity",
                        }}
                    >
                        Join thousands of innovators, engineers, and creators at ELEVATE - powered by IEEE IEM Student Branch.
                    </p>

                    {/* Centered Register button — slides/fades in below ELEVATE */}
                    <a
                        ref={registerBtnRef}
                        href="#register"
                        className="absolute left-1/2 px-6 py-3 md:px-8 md:py-4 bg-[#eae4f5] hover:bg-[#e8e3db] text-[#181126] font-bold rounded-full shadow-lg hover:shadow-[0_0_20px_rgba(234,228,245,0.3)] hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-2 md:gap-3 group"
                        style={{
                            top: "50%",
                            transform: "translate(-50%, calc(-50% + 180px))",
                            opacity: 0,
                            pointerEvents: "none",
                            willChange: "transform, opacity",
                        }}
                    >
                        <span className="tracking-wider text-sm md:text-base font-semibold">Register Now</span>
                        <MdArrowOutward className="bg-[#181126] text-[#9a8eb7] w-6 h-6 md:w-7 md:h-7 rounded-full p-1.5 flex-shrink-0 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </a>
                </div>
            </div>
        </section>

    );
};

export default Hero;
