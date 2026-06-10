import MarqueeText from "../Marquee/MarqueeText";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useState } from "react";

gsap.registerPlugin(ScrollTrigger);

const MarqueeSticky = () => {
    const [isMobile, setIsMobile] = useState(() =>
        typeof window !== "undefined" ? window.innerWidth < 768 : false
    );

    useEffect(() => {
        const mq = window.matchMedia("(max-width: 767px)");
        const handler = (e) => setIsMobile(e.matches);
        mq.addEventListener("change", handler);
        return () => mq.removeEventListener("change", handler);
    }, []);

    useGSAP(() => {
        // Skip pin spacer animation on mobile — it causes extra blank space
        if (isMobile) return;

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".pin-con",
                start: "bottom 80%",
                end: "bottom 50%",
                scrub: 1,
                invalidateOnRefresh: true,
            },
        });

        tl.fromTo(
            ".sticky-spacer",
            { height: "20vh" },
            { height: "0vh", ease: "none", force3D: true }
        );
        tl.set(".sticky-spacer, .marquee-con-none", { display: "none" });
    }, [isMobile]);

    return (
        <section className="w-full overflow-hidden">
            <div className="pin-con relative">
                <div className="pl-5 md:pl-8 py-4 md:py-0">
                    <p className="text-[0.75rem] sm:text-[0.8rem] text-[#eae4f5] choose-subtitle leading-relaxed">
                        Want to know why ELEVATE
                        <br />
                        is the event of the year?
                    </p>
                </div>

                {!isMobile && (
                    <div className="marquee-con-none absolute top-0 -z-1">
                        <MarqueeText />
                    </div>
                )}

                {/* Marquee always visible on mobile */}
                {isMobile && (
                    <div className="mt-2">
                        <MarqueeText />
                    </div>
                )}

                {!isMobile && <div className="sticky-spacer w-full h-[20vh]" />}
            </div>
        </section>
    );
};

export default MarqueeSticky;
