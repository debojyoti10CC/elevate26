import { motion, useAnimation, useInView } from "framer-motion";
import { useState, useRef, useEffect } from "react";

// import crest1 from "@/assets/CONVERGE.png";
// import crest2 from "@/assets/CONVERGE (2).png";
// import crest3 from "@/assets/CONVERGE (3).png";
// import crest4 from "@/assets/CONVERGE (6).png";

import Shinjan from "../../../assets/Team_section/Shinjan Bhatta.svg";
import souhardya from "../../../assets/Team_section/Souhardya.svg";
import souherdya from "../../../assets/Team_section/Souherdya.svg";
import swarnalee from "../../../assets/Team_section/Swarnalee.svg";
import Swarnalee from "../../../assets/Team_section/Swarnalee Ray.svg";
import archishman from "../../../assets/Team_section/Archishman.svg";
import shinjan from "../../../assets/Team_section/Shinjan.svg";
import ishika from "../../../assets/Team_section/Ishika.svg";
import amreta from "../../../assets/Team_section/Amreta.svg";
import ananya from "../../../assets/Team_section/Ananya.svg";
import srijit from "../../../assets/Team_section/Srijit.svg";

const teamCards = [
    {
        id: "chairperson",
        name: "SHINJAN BHATTA",
        role: "CHAIRPERSON",
        image: Shinjan,
    },
    {
        id: "vice chairperson",
        name: "SOHAM KARAK",
        role: "VICE CHAIRPERSON",
        image: Swarnalee,
    },
    {
        id: "Treasurer",
        name: "SRIJIT CHAKRABORTY",
        role: "TREASURER",
        image: srijit,
    },
    {
        id: "Secretary",
        name: "SHINJAN BHATTA",
        role: "SECRETARY",
        image: shinjan,
    },
    {
        id: "join-treasurer",
        name: "SOUHARDYA RAY",
        role: "JOINT Treasurer",
        image: souhardya,
    },
    {
        id: "webmaster",
        name: "SOUHERDYA SARKAR",
        role: "WEBMASTER",
        image: souherdya,
        placeholder: true,
    },

    //CORE

    {
        id: "Spokesperson",
        name: "ARCHISHMAN DAS",
        role: "SPOKESPERSON",
        image: archishman,
        placeholder: true,
    },
    {
        id: "GraphicsLead",
        name: "SWARNALEE RAY",
        role: "GRAPHICS LEAD",
        image: swarnalee,
        placeholder: true,
    },
    {
        id: "MediaLead",
        name: "ANANYA MUKHERJEE",
        role: "MEDIA LEAD",
        image: ananya,
        placeholder: true,
    },
    {
        id: "ContentLead",
        name: "AMRETA DEY",
        role: "CONTENT LEAD",
        image: amreta,
        placeholder: true,
    },
    {
        id: "PRLead",
        name: "ISHIKA DUTTA",
        role: "PR LEAD",
        image: ishika,
        placeholder: true,
    },
];

const CARD_CLASSES =
    "group relative rounded-[28px] overflow-hidden cursor-pointer transition-all duration-300 shadow-xl hover:shadow-2xl aspect-[3/4] w-full";

const TeamSection = () => {
    const [selectedTeam, setSelectedTeam] = useState(null);
    const controls = useAnimation();
    const ref = useRef(null);
    const isInView = useInView(ref, { amount: 0.3 });

    useEffect(() => {
        if (isInView) {
            controls.start({
                backgroundColor: "#ffffff",
                transition: { delay: 0.5, duration: 0.8, ease: "easeInOut" },
            });
        } else {
            controls.start({
                backgroundColor: "#000000",
                transition: { duration: 0.6, ease: "easeInOut" },
            });
        }
    }, [isInView, controls]);

    return (
        <motion.section
            id="team"
            ref={ref}
            animate={controls}
            initial={{ backgroundColor: "#000000" }}
            className="py-20"
        >
            <div className="container mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="font-display text-3xl md:text-4xl font-bold text-center text-black mb-12 tracking-wide"
                >
                    TEAM
                </motion.h2>

                <div className="flex flex-col gap-6 max-w-6xl mx-auto">
                    {/* TOP ROW – 6 CARDS */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
                        {teamCards.slice(0, 6).map((team, index) => (
                            <motion.div
                                key={team.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 30 }}
                                transition={{ delay: index * 0.08, duration: 0.5, ease: "easeOut" }}
                                viewport={{ once: false, amount: 0.1 }}
                                onClick={() => setSelectedTeam(team.id)}
                                className={`${CARD_CLASSES} ${selectedTeam === team.id ? "ring-4 ring-[#f33]/80" : "ring-0"
                                    }`}
                            >
                                {team.image ? (
                                    <div
                                        className="absolute inset-0 bg-cover bg-center filter grayscale brightness-95"
                                        style={{ backgroundImage: `url(${team.image})` }}
                                    />
                                ) : (
                                    <div className="absolute inset-0 bg-neutral-200" />
                                )}

                                <div className="absolute inset-0 bg-gradient-to-t from-[purple]/70 via-[purple]/30 to-transparent" />
                                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />

                                <div className="relative z-10 h-full flex flex-col justify-between p-6">
                                    <div />
                                    <div className="text-center">
                                        <p className="font-display text-[0.8rem] md:text-[1rem] font-bold text-white drop-shadow-sm">
                                            {team.name}
                                        </p>
                                        <p className="font-display text-[0.6rem] md:text-sm text-white/80 mt-2 tracking-wide">
                                            {team.role}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* BOTTOM ROW – 5 CARDS */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
                        {teamCards.slice(6, 11).map((team, index) => (
                            <motion.div
                                key={team.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 30 }}
                                transition={{ delay: index * 0.08, duration: 0.5, ease: "easeOut" }}
                                viewport={{ once: false, amount: 0.1 }}
                                onClick={() => setSelectedTeam(team.id)}
                                className={`${CARD_CLASSES} ${selectedTeam === team.id ? "ring-4 ring-[#f33]/80" : "ring-0"
                                    }`}
                            >
                                {team.image ? (
                                    <div
                                        className="absolute inset-0 bg-cover bg-center filter grayscale brightness-95"
                                        style={{ backgroundImage: `url(${team.image})` }}
                                    />
                                ) : (
                                    <div className="absolute inset-0 bg-neutral-200" />
                                )}

                                <div className="absolute inset-0 bg-gradient-to-t from-[purple]/70 via-[purple]/30 to-transparent" />
                                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />

                                <div className="relative z-10 h-full flex flex-col justify-between p-6">
                                    <div />
                                    <div className="text-center">
                                        <p className="font-display text-[0.8rem] md:text-[1rem] font-bold text-white drop-shadow-sm">
                                            {team.name}
                                        </p>
                                        <p className="font-display text-[0.6rem] md:text-sm text-white/80 mt-2 tracking-wide">
                                            {team.role}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default TeamSection;