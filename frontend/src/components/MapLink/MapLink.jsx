import { useState } from "react";
import ClickIndicator from "./ClickIndicator";

const MapLink = () => {
    const [active, setActive] = useState(false);

    return (
        <section
            id="venue"
            className="w-full bg-[#0b0714] flex flex-col justify-center items-center text-center px-6 py-16 md:py-0 md:h-[90vh]"
        >
            {/* Minimal iconic location indicator */}
            <div className="flex items-center justify-center mb-8 relative">
                <span className="absolute w-20 h-20 rounded-full bg-[#6d28d9]/10 animate-ping pointer-events-none" style={{ animationDuration: '3s' }} />
                <span className="absolute w-14 h-14 rounded-full bg-[#6d28d9]/5 animate-pulse pointer-events-none" style={{ animationDuration: '2s' }} />
                <div className="relative z-10 w-12 h-12 rounded-full bg-[#181126] flex items-center justify-center border border-[#35294e] shadow-lg">
                    <svg className="w-6 h-6 text-[#9a8eb7]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                    </svg>
                </div>
            </div>

            <div>
                <p className="text-[0.65rem] font-bold text-[#9a8eb7] mb-4 md:mb-0">
                    Find us on campus
                </p>

                <h1 className="text-[7vw] md:text-[5vw] leading-tight md:leading-[1.15] tracking-tight mt-3 md:mt-5 text-[#eae4f5]">
                    ELEVATE is hosted at<br />
                    Institute of Engineering<br />
                    &amp; Management, Kolkata
                </h1>
            </div>

            <ClickIndicator active={active} />

            <a
                href="https://maps.google.com/?q=Institute+of+Engineering+and+Management+Kolkata"
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setActive(true)}
                onMouseLeave={() => setActive(false)}
                className="text-[#9a8eb7] text-[5vw] md:text-[5vw] underline hover:text-[#eae4f5] mt-2 leading-tight"
                style={{ fontSize: "clamp(1rem, 5vw, 3rem)" }}
            >
                Salt Lake, Sector V, WB 700091
            </a>
        </section>
    );
};

export default MapLink;
