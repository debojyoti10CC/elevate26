import { useGSAP } from "@gsap/react";
import gsap from "gsap/all";
import { useMediaQuery } from "react-responsive";
import { activitiesLinesLG } from "../../constants/activites";
import './activities.css';

const activitiesLinesSM = ["Explore", "the 19 events"];

const Activities = () => {
    const isMobD = useMediaQuery({ query: "(max-width:768px)" });
    const activitiesLines = isMobD ? activitiesLinesSM : activitiesLinesLG;

    useGSAP(() => {
        const lines = gsap.utils.toArray(".activities-title-clip");
        const progressLines = gsap.utils.toArray(".progress-line");

        const activitiesTl = gsap.timeline({
            scrollTrigger: {
                trigger: ".activities-section",
                start: "top 85%",
                end: "top 30%",
                scrub: 1,
                invalidateOnRefresh: true,
            },
        });

        activitiesTl.from(".activities-subtitle", {
            yPercent: 100,
            opacity: 0,
            force3D: true,
            ease: "power1.inOut",
        });

        if (!isMobD) {
            activitiesTl.fromTo(
                ".activities-part",
                { height: "10vh" },
                { height: "50vh", ease: "none", force3D: true }
            );
        }

        activitiesTl.to(lines, {
            clipPath: "inset(0% 0% 0% 0%)",
            ease: "none",
            force3D: true,
            stagger: 0.2,
            duration: 1,
        }, "<");

        if (!isMobD) {
            activitiesTl.from(".activities-sec", { yPercent: 100, force3D: true, duration: 1 }, "<");
        }

        if (progressLines.length >= 3) {
            activitiesTl.fromTo(progressLines[0], { width: "0%" }, { width: "37%", duration: 0.5, ease: "power2.in" });
            activitiesTl.fromTo(progressLines[1], { width: "0%" }, { width: "21%", duration: 0.5, ease: "power2.in" }, "<");
            activitiesTl.fromTo(progressLines[2], { width: "0%" }, { width: "42%", duration: 0.5, ease: "power2.in" }, "<");
        }
    });

    return (
        <section className="activities-section w-full md:h-[120vh] h-auto py-12 md:py-0 px-5 md:px-8 md:mt-16 mt-6">
            <p className="text-[0.7rem] font-bold text-[#eae4f5] activities-subtitle">Ready to compete?</p>

            <div className="md:mt-10 mt-6 activities-part origin-bottom">
                {activitiesLines.map((line, index) => (
                    <h1
                        key={index}
                        className="activities-heading text-[#eae4f5] lg:text-[9.5rem] text-[clamp(2rem,10vw,3.5rem)] leading-[0.9] font-medium tracking-tighter"
                    >
                        <span className={`activities-title-break ${index === 1 ? "lg:pb-3 pb-1" : ""}`}>
                            {line}
                            <span className={`activities-title-clip ${index === 1 ? "lg:pb-3 pb-1" : ""}`}>
                                {line}
                            </span>
                        </span>
                    </h1>
                ))}
            </div>

            <div className="activities-sec w-full flex lg:flex-row flex-col justify-center items-start gap-6 md:gap-10 lg:mt-0 mt-8">
                <div className="lg:w-1/2 w-full">
                    <div className="lg:w-[40%] w-[80%]">
                        <p className="text-[0.7rem] text-[#eae4f5]">ELEVATE events span across categories:</p>
                    </div>
                    <div className="flex flex-col justify-start items-start gap-4 mt-6 md:mr-14">
                        <div className="w-full">
                            <div className="flex justify-between w-full mb-3">
                                <h1 className="text-[#9a8eb7] text-base sm:text-lg md:text-xl">Technical & Workshops</h1>
                                <p className="text-[#9a8eb7] text-[0.7rem]">7 events</p>
                            </div>
                            <div className="relative z-9 w-full h-[0.1rem] bg-[#271d3a]">
                                <div className="progress-line absolute z-10 bg-[#eae4f5] h-[0.1rem] top-1/2 -translate-y-1/2 left-0" style={{ width: "37%" }} />
                            </div>
                        </div>
                        <div className="w-full">
                            <div className="flex justify-between w-full mb-3">
                                <h1 className="text-[#9a8eb7] text-base sm:text-lg md:text-xl">Competitions & Creative</h1>
                                <p className="text-[#9a8eb7] text-[0.7rem]">4 events</p>
                            </div>
                            <div className="relative z-9 w-full h-[0.1rem] bg-[#271d3a]">
                                <div className="progress-line absolute z-10 bg-[#eae4f5] h-[0.1rem] top-1/2 -translate-y-1/2 left-0" style={{ width: "21%" }} />
                            </div>
                        </div>
                        <div className="w-full">
                            <div className="flex justify-between w-full mb-3">
                                <h1 className="text-[#9a8eb7] text-base sm:text-lg md:text-xl">Ceremonies, Talks & Fun</h1>
                                <p className="text-[#9a8eb7] text-[0.7rem]">8 events</p>
                            </div>
                            <div className="relative z-9 w-full h-[0.1rem] bg-[#271d3a]">
                                <div className="progress-line absolute z-10 bg-[#eae4f5] h-[0.1rem] top-1/2 -translate-y-1/2 left-0" style={{ width: "42%" }} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="lg:w-1/2 w-full text-[#9a8eb7] text-[0.9rem] sm:text-[1rem] lg:text-[2rem] md:leading-[1.1] leading-[1.6] lg:mt-0 mt-4">
                    <p>ELEVATE offers 19 events spanning coding, workshops, competitions, creative challenges, talks, ceremonies, and cultural activities. Whether you're a builder, a coder, or a creative thinker, there's a stage here for you.</p>
                </div>
            </div>
        </section>
    );
};

export default Activities;
