import gsap from "gsap/all";
import smoke from "../../assets/smoke_final.mp4";
import robotImg from "../../assets/hero-robot.png";
import { useGSAP } from "@gsap/react";

const Hero = () => {
    useGSAP(() => {
        gsap.to(".hero-img", {
            yPercent: -5,
            scale: 1.1,
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
            <div className="relative w-full h-full rounded-[2rem] md:rounded-[2.5rem] overflow-hidden bg-black">

                {/* ── Robot image ── */}
                <img
                    src={robotImg}
                    alt="AI Robot"
                    className="hero-img absolute inset-0 w-full h-full object-cover object-right z-0"
                />

                {/* ── Left gradient so text stays readable ── */}
                <div className="absolute inset-0 z-10 bg-gradient-to-r from-black via-black/80 to-transparent md:from-black md:via-black/60 md:to-transparent" />

                {/* ── Bottom gradient for text contrast ── */}
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/70 via-transparent to-black/20" />

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
                <div className="absolute inset-0 z-30 flex flex-col justify-between p-6 md:p-8">
                    {/* Top: big title */}
                    <h1
                        className="text-[#eae4f5] text-[15vw] md:text-[10vw] lg:text-9xl font-bold tracking-wider leading-none"
                        style={{ textShadow: "2px 4px 12px rgba(0,0,0,0.8)" }}
                    >
                        ELEVATE
                    </h1>

                    {/* Bottom: tagline + description */}
                    <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-3">
                        <h2
                            className="text-[#eae4f5] text-xl md:text-2xl font-bold leading-snug flex flex-col gap-0.5"
                            style={{ textShadow: "1px 2px 6px rgba(0,0,0,0.9)" }}
                        >
                            <span>India's Premier</span>
                            <span>College Tech-Fest—</span>
                            <span>IEEE IEM SB</span>
                        </h2>

                        <p
                            className="text-[#e8e3db] text-xs md:text-[0.7rem] font-medium tracking-wide md:w-[22%] md:text-right leading-relaxed"
                            style={{ textShadow: "1px 2px 4px rgba(0,0,0,0.9)" }}
                        >
                            Join thousands of innovators, engineers, and creators at ELEVATE - powered by IEEE IEM Student Branch.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
