import { useGSAP } from "@gsap/react";
import gsap from "gsap/all";
import { welcomeLinesLG, welcomeLinesSM } from "../../constants/welcome";
import w1 from "../../assets/welcome-1.jpg";
import w2 from "../../assets/welcome-2.jpg";

const Welcome = () => {
    const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
    const welcomeLines = isMobile ? welcomeLinesSM : welcomeLinesLG;

    useGSAP(() => {
        const lines = gsap.utils.toArray(".clip-text-welcome");
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".welcome-section",
                start: "top 80%",
                end: "bottom 60%",
                scrub: 1,
                invalidateOnRefresh: true,
            },
        });

        lines.forEach((line) => {
            tl.to(line, {
                clipPath: "inset(0% 0% 0% 0%)",
                ease: "none",
                force3D: true,
                duration: 1,
            });
        });
    });

    return (
        <section className="welcome-section w-full bg-[#0b0714] text-[#181126] px-5 md:px-7 pt-10 pb-12 md:pt-20 md:pb-16">
            {/* Animated headline */}
            <div className="w-full md:w-[86%] text-[8.5vw] sm:text-[7vw] md:text-[64px] mb-8 md:mb-16">
                <div className="w-full flex flex-col items-start">
                    {welcomeLines.map((text, index) => (
                        <span
                            key={index}
                            className="relative block text-darkBrown tracking-tight leading-[1.05]"
                        >
                            {text}
                            <span className="clip-text-welcome">{text}</span>
                        </span>
                    ))}
                </div>
            </div>

            {/* Images + tagline */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 md:gap-4 md:p-4">
                <div className="flex flex-row gap-2 shrink-0">
                    <img
                        src={w1}
                        alt="welcome"
                        className="rounded-[2.5rem] md:rounded-[4rem] w-28 sm:w-36 md:w-56 object-cover aspect-[3/4]"
                    />
                    <img
                        src={w2}
                        alt="welcome"
                        className="rounded-[2.5rem] md:rounded-[4rem] w-28 sm:w-36 md:w-56 object-cover aspect-[3/4]"
                    />
                </div>
                <div className="md:w-1/2 w-full">
                    <p className="text-[1rem] sm:text-[1.15rem] md:text-[2rem] text-[#9a8eb7] md:leading-[1.1] leading-[1.5] md:pr-24 font-normal">
                        <span>A platform where ideas take form and engineers rise to the challenge.</span>
                        <br className="hidden md:block" />
                        <span className="block mt-2 md:mt-0">Two days of robotics, AI, circuit design, and electrifying competition.</span>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Welcome;
