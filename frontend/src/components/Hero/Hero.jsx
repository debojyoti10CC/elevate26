import gsap from "gsap/all";
import smoke from "../../assets/smoke_final.mp4";
import mobileHeroBg from "../../assets/hero-mobile.png";
import { useGSAP } from "@gsap/react";

const Hero = () => {
    useGSAP(() => {
        // parallax works smoothly on all devices with scrub
        gsap.to(".hero-img", {
            yPercent: -5,
            scale: 1.2,
            ease: "none",
            force3D: true,
            scrollTrigger: {
                trigger: ".hero-section",
                start: "top top",
                end: "bottom top",
                scrub: 1,
                invalidateOnRefresh: true,
            },
        });
    });

    return (
        <section className="hero-section w-full h-[100svh] p-2 md:p-2 mb-0">
            <div className="relative w-full h-full rounded-[2rem] md:rounded-[2.5rem] overflow-hidden bg-[#181717]">

                {/* ── Desktop BG image ── */}
                <div className="hero-img absolute inset-0 bg-[url('./assets/cap1.png')] bg-no-repeat bg-cover bg-center z-0 hidden md:block" />

                {/* ── Mobile BG image (fills the card) ── */}
                <img
                    src={mobileHeroBg}
                    alt="hero"
                    className="absolute inset-0 w-full h-full object-cover z-0 md:hidden"
                />

                {/* ── Smoke overlay ── */}
                <video
                    src={smoke}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover z-10 pointer-events-none opacity-40 mix-blend-hard-light"
                />

                {/* ── Dark gradient so text is always readable ── */}
                <div className="absolute inset-0 z-20 bg-gradient-to-b from-black/50 via-transparent to-black/60 md:bg-gradient-to-b md:from-black/30 md:via-transparent md:to-black/50" />

                {/* ── Text layer ── */}
                <div className="absolute inset-0 z-30 flex flex-col justify-between p-6 md:p-8">
                    {/* Top: big title */}
                    <h1
                        className="text-[#f4efe7] text-[15vw] md:text-[10vw] lg:text-9xl font-bold tracking-wider leading-none"
                        style={{ textShadow: "2px 4px 12px rgba(0,0,0,0.6)" }}
                    >
                        ELEVATE
                    </h1>

                    {/* Bottom: tagline + description */}
                    <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-3">
                        <h2
                            className="text-[#f4efe7] text-xl md:text-2xl font-bold leading-snug flex flex-col gap-0.5"
                            style={{ textShadow: "1px 2px 6px rgba(0,0,0,0.8)" }}
                        >
                            <span>India's Premier</span>
                            <span>College Tech-Fest—</span>
                            <span>IEEE IEM SB</span>
                        </h2>

                        <p
                            className="text-[#e8e3db] text-xs md:text-[0.7rem] font-medium tracking-wide md:w-[22%] md:text-right leading-relaxed"
                            style={{ textShadow: "1px 2px 4px rgba(0,0,0,0.8)" }}
                        >
                            Join thousands of innovators, engineers, and creators at ELEVATE — powered by IEEE IEM Student Branch.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
