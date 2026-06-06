import { useState } from "react";
import ClickIndicator from "./ClickIndicator";

const MapLink = () => {
    const [active, setActive] = useState(false);

    return (
        <section
            id="venue"
            className="w-full bg-[#181717] flex flex-col justify-center items-center text-center px-6 py-16 md:py-0 md:h-[90vh]"
        >
            <div>
                <p className="text-[0.65rem] font-bold text-[#a79c8d] mb-4 md:mb-0">
                    Find us on campus
                </p>

                <h1 className="text-[7vw] md:text-[5vw] leading-tight md:leading-[1.15] tracking-tight mt-3 md:mt-5 text-[#f4efe7]">
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
                className="text-[#b1a696] text-[5vw] md:text-[5vw] underline hover:text-[#f4efe7] mt-2 leading-tight"
                style={{ fontSize: "clamp(1rem, 5vw, 3rem)" }}
            >
                Salt Lake, Sector V, WB 700091
            </a>
        </section>
    );
};

export default MapLink;
