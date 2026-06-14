import { useGSAP } from "@gsap/react";
import gsap, { SplitText } from "gsap/all";
import { useMediaQuery } from "react-responsive";
import { chooseLinesLG, chooseLinesSM } from "../../constants/welcome";

const Choose = () => {

    const isMobD = useMediaQuery({
        query: "(max-width:768px)",
    });
    const chooseLines = isMobD ? chooseLinesSM : chooseLinesLG;

    useGSAP(() => {

        const lines = gsap.utils.toArray(".choose-title-clip");

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".choose-section",
                start: "top 80%",
                end: "bottom 80%",
                scrub: 1,
                invalidateOnRefresh: true,
            },
        });

        tl.from(".choose-subtitle", {
            yPercent: 100,
            opacity: 0,
            force3D: true,
            ease: "power1.inOut"
        });

        if (!isMobD) {
            tl.fromTo(
                ".title-part",
                { height: "10vh" },
                { height: "50vh", ease: "none", force3D: true }
            );
        }

        tl.to(
            lines,
            {
                clipPath: "inset(0% 0% 0% 0%)",
                ease: "none",
                force3D: true,
                stagger: 0.2,
                duration: 1,
            },
            "<"
        );

        if (!isMobD) {
            tl.from(".choose-sec", {
                yPercent: 100,
                force3D: true,
                duration: 1,
            }, "<");
        }
    });

    return (
        <section className="choose-section w-full min-h-screen md:h-dvh p-6 md:p-8 pt-10 pb-16 md:pb-8">
            <p className='text-[.7rem] text-[#eae4f5] font-nova choose-subtitle'>Explore ELEVATE Themes</p>
            <div className="lg:mt-10 mt-7 title-part origin-bottom ">
                {
                    chooseLines.map((line, index) => (
                        <h1 key={index} className="choose-heading text-[#eae4f5] lg:text-[6.5rem] md:text-[5rem] text-[2.2rem] font-zen leading-[1.0] tracking-tighter choose-title">
                            <span className={`choose-title-break ${index == 1 ? "lg:pb-3 pb-2" : ""}`}>{line}<span className={`choose-title-clip ${index == 1 ? "lg:pb-3 pb-2" : ""}`}>{line}</span></span>
                        </h1>
                    ))
                }
            </div>
            <div className="choose-sec w-full flex lg:flex-row flex-col justify-center items-start gap-10 lg:mt-0">
                <div className='lg:w-1/2 w-full text-[#9a8eb7] lg:text-[1.5rem] text-[0.95rem] md:leading-[1.4] lg:mt-0 mt-8 lg:pr-16 font-space'>
                    <p>ELEVATE brings together the best minds in engineering and technology. Compete across 12 events spanning robotics, AI, circuit design, drone tech, and more. Every challenge is designed to push your limits and showcase your skills to the world.</p>
                </div>
                <div className='lg:w-1/2 w-full'>
                    <div className=" lg:w-[35%] w-[65%] font-nova">
                        <p className="text-[.7rem] text-[#eae4f5]">All ELEVATE events are built around one theme:</p>
                    </div>
                    <div className="flex flex-1 flex-wrap justify-start items-start gap-2 mt-8 font-nova">
                        <div className="border-[1px] border-[#9a8eb7] text-[#9a8eb7] text-xs lg:text-[1rem] px-[12px] py-[4px] rounded-full">
                            Autonomous
                        </div>
                        <div className="border-[1px] border-[#eae4f5] text-[#eae4f5] text-xs lg:text-[1rem] px-[12px] py-[4px] rounded-full">
                            AI-Powered
                        </div>
                        <div className="border-[1px] border-[#9a8eb7] text-[#9a8eb7] text-xs lg:text-[1rem] px-[12px] py-[4px] rounded-full">
                            IEEE Certified
                        </div>
                        <div className="border-[1px] border-[#eae4f5] text-[#eae4f5] text-xs lg:text-[1rem] px-[12px] py-[4px] rounded-full">
                            Circuit Design
                        </div>
                        <div className="border-[1px] border-[#9a8eb7] text-[#9a8eb7] text-xs lg:text-[1rem] px-[12px] py-[4px] rounded-full">
                            Drone Tech
                        </div>
                        <div className="border-[1px] border-[#eae4f5] text-[#eae4f5] text-xs lg:text-[1rem] px-[12px] py-[4px] rounded-full">
                            Human vs Machine
                        </div>
                        <div className="border-[1px] border-[#9a8eb7] text-[#9a8eb7] text-xs lg:text-[1rem] px-[12px] py-[4px] rounded-full">
                            Open Innovation
                        </div>
                        <div className="border-[1px] border-[#eae4f5] text-[#eae4f5] text-xs lg:text-[1rem] px-[12px] py-[4px] rounded-full">
                            Hackathon Ready
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Choose;