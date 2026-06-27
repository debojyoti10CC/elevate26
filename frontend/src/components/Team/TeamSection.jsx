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
import Soham from "../../../assets/Team_section/Soham Karak.svg";
import sneha from "../../../assets/Team_section/Sneha Shaw.svg";
import abhishek from "../../../assets/Team_section/Abhishek Kumar.svg";
import ahana from "../../../assets/Team_section/Ahana Gupta.svg";
import amit from "../../../assets/Team_section/Amit Debnath.svg";
import ananyaMukherjee from "../../../assets/Team_section/Ananya Mukherjee.svg";
import anweya from "../../../assets/Team_section/Anweya Das.svg";
import archismanDas from "../../../assets/Team_section/Archisman Das.svg";
import atrisha from "../../../assets/Team_section/Atrisha Biswas.svg";
import debosmita from "../../../assets/Team_section/Debosmita Gorai.svg";
import deep from "../../../assets/Team_section/Deep Batabyal.svg";
import manoj from "../../../assets/Team_section/Manoj Ghosh.svg";
import meesha from "../../../assets/Team_section/Meesha Sinha.svg";
import prachi from "../../../assets/Team_section/Prachi Sil.svg";
import pritesh from "../../../assets/Team_section/Pritesh Patra.svg";
import sarbatriki from "../../../assets/Team_section/Sarbatriki Jana.svg";
import satwik from "../../../assets/Team_section/Satwik Khan.svg";
import siddhartha from "../../../assets/Team_section/Siddhartha Ghosh.svg";
import snehaSight from "../../../assets/Team_section/Sneha Shaw SIGHT.svg";
import somsuddha from "../../../assets/Team_section/Somsuddha Dasgupta.svg";
import sougata from "../../../assets/Team_section/Sougata Sengupta.svg";
import sounak from "../../../assets/Team_section/Sounak Maiti.svg";
import souraprava from "../../../assets/Team_section/Souraprava Das.svg";
import spandan from "../../../assets/Team_section/Spandan Chakraborty.svg";
import srija from "../../../assets/Team_section/Srija Pal.svg";
import subhadra from "../../../assets/Team_section/Subhadra Bhattacharya.svg";
import swapnaleena from "../../../assets/Team_section/Swapnaleena Biswas.svg";
import swarnadeep from "../../../assets/Team_section/Swarnadeep Koley.svg";
import shinjan from "../../../assets/Team_section/Shinjan.svg";
import ishika from "../../../assets/Team_section/Ishika.svg";
import amreta from "../../../assets/Team_section/Amreta.svg";
import ananya from "../../../assets/Team_section/Ananya.svg";
import srijit from "../../../assets/Team_section/Srijit.svg";
import anonymous from "../../../assets/Team_section/Anonymous.png";

// Set this variable to true to display actual names, positions, and images.
// Set to false to display Coming Soon and the Anonymous placeholder.
const isTeamFinal = true;

const teamCards = [
    {
        id: "chairperson",
        name: "SHINJAN BHATTA",
        role: "CHAIRPERSON, SB",
        image: Shinjan,
    },
    {
        id: "vice chairperson",
        name: "SOHAM KARAK",
        role: "VICE CHAIRPERSON, SB",
        image: Soham,
    },
    {
        id: "Treasurer",
        name: "SOUHARDYA RAY",
        role: "TREASURER, SB",
        image: souhardya,
    },
    {
        id: "Secretary",
        name: "SWARNALEE RAY",
        role: "JOINT-TREASURER, SB",
        image: Swarnalee,
    },
    {
        id: "join-treasurer",
        name: "SOUHERDYA SARKAR",
        role: "WEBMASTER, SB",
        image: souherdya,
    },
    {
        id: "sneha-shaw",
        name: "SNEHA SHAW",
        role: "CHAIRPERSON, WIE",
        image: sneha,
    },

    //CORE

    {
        id: "abhishek-kumar",
        name: "ABHISHEK KUMAR",
        role: "WEBMASTER, EMC",
        image: abhishek,
    },
    {
        id: "ahana-gupta",
        name: "AHANA GUPTA",
        role: "VICE CHAIRPERSON, EMC",
        image: ahana,
    },
    {
        id: "anweya-das",
        name: "ANWEYA DAS",
        role: "SECRETARY, EMC",
        image: anweya,
    },
    {
        id: "archisman-das",
        name: "ARCHISMAN DAS",
        role: "JOINT VICE CHAIR, CS",
        image: archismanDas,
    },
    {
        id: "atrisha-biswas",
        name: "ATRISHA BISWAS",
        role: "CHAIRPERSON, EMC",
        image: atrisha,
    },
    {
        id: "manoj-ghosh",
        name: "MANOJ GHOSH",
        role: "EVENT MANAGEMENT HEAD, IEEE-IES",
        image: manoj,
    },
    {
        id: "meesha-sinha",
        name: "MEESHA SINHA",
        role: "CHAIRPERSON, SIGHT",
        image: meesha,
    },
    {
        id: "prachi-sil",
        name: "PRACHI SIL",
        role: "TREASURER, SIGHT",
        image: prachi,
    },
    {
        id: "pritesh-patra",
        name: "PRITESH PATRA",
        role: "LOGISTICS LEAD, CS",
        image: pritesh,
    },
    {
        id: "sneha-shaw-sight",
        name: "SNEHA SHAW",
        role: "SECRETARY, SIGHT",
        image: snehaSight,
    },
    {
        id: "spandan-chakraborty",
        name: "SPANDAN CHAKRABORTY",
        role: "VICE CHAIRPERSON, MTTS",
        image: spandan,
    },
    {
        id: "swapnaleena-biswas",
        name: "SWAPNALEENA BISWAS",
        role: "VICE CHAIRPERSON, WIE",
        image: swapnaleena,
    },
    {
        id: "siddhartha-ghosh",
        name: "SIDDHARTHA GHOSH",
        role: "CHAIRPERSON, RAS",
        image: siddhartha,
    },
    {
        id: "subhadra-bhattacharya",
        name: "SUBHADRA BHATTACHARYA",
        role: "CHAIRPERSON, EDS",
        image: subhadra,
    },
    {
        id: "sarbatriki-jana",
        name: "SARBATRIKI JANA",
        role: "VICE CHAIRPERSON, CAS",
        image: sarbatriki,
    },
    {
        id: "srija-pal",
        name: "SRIJA PAL",
        role: "VICE CHAIRPERSON, IES",
        image: srija,
    },
    {
        id: "amit-debnath",
        name: "AMIT DEBNATH",
        role: "SECRETARY, IES",
        image: amit,
    },
    {
        id: "sounak-maiti",
        name: "SOUNAK MAITI",
        role: "VICE CHAIRPERSON, EDC",
        image: sounak,
    },
    {
        id: "deep-batabyal",
        name: "DEEP BATABYAL",
        role: "CHAIRPERSON, CAS",
        image: deep,
    },
    {
        id: "somsuddha-dasgupta",
        name: "SOMSUDDHA DASGUPTA",
        role: "TREASURER, SBIES",
        image: somsuddha,
    },
    {
        id: "satwik-khan",
        name: "SATWIK KHAN",
        role: "VICE CHAIRPERSON, APS",
        image: satwik,
    },
    {
        id: "souraprava-das",
        name: "SOURAPRAVA DAS",
        role: "TREASURER, IAS",
        image: souraprava,
    },
    {
        id: "swarnadeep-koley",
        name: "SWARNADEEP KOLEY",
        role: "TREASURER, MTTS",
        image: swarnadeep,
    },
    {
        id: "debosmita-gorai",
        name: "DEBOSMITA GORAI",
        role: "CHAIRPERSON, IAS",
        image: debosmita,
    },
    {
        id: "sougata-sengupta",
        name: "SOUGATA SENGUPTA",
        role: "VICE CHAIRPERSON, IAS",
        image: sougata,
    },
    {
        id: "ananya-mukherjee",
        name: "ANANYA MUKHERJEE",
        role: "CORE ORGANISER",
        image: ananyaMukherjee,
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
                    className="font-zen text-3xl md:text-4xl font-bold text-center text-black mb-12 tracking-wide"
                >
                    TEAM
                </motion.h2>

                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
                        {teamCards.map((team, index) => {
                            const cardImage = isTeamFinal ? team.image : anonymous;
                            const cardName = isTeamFinal ? team.name : "Coming Soon";
                            const cardRole = isTeamFinal ? team.role : "Coming Soon";

                            return (
                                <motion.div
                                    key={team.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 30 }}
                                    transition={{ delay: index * 0.05, duration: 0.5, ease: "easeOut" }}
                                    viewport={{ once: false, amount: 0.1 }}
                                    onClick={() => setSelectedTeam(team.id)}
                                    className={`${CARD_CLASSES} ${selectedTeam === team.id ? "ring-4 ring-[#f33]/80" : "ring-0"
                                        }`}
                                >
                                    {cardImage ? (
                                        <div
                                            className="absolute inset-0 bg-cover bg-center filter grayscale brightness-95"
                                            style={{ backgroundImage: `url(${cardImage})` }}
                                        />
                                    ) : (
                                        <div className="absolute inset-0 bg-neutral-200" />
                                    )}

                                    <div className="absolute inset-0 bg-gradient-to-t from-[purple]/70 via-[purple]/30 to-transparent" />
                                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />

                                    <div className="relative z-10 h-full flex flex-col justify-between p-6">
                                        <div />
                                        <div className="text-center">
                                            <p className="font-nova text-[0.8rem] md:text-[0.95rem] font-bold text-white drop-shadow-sm">
                                                {cardName}
                                            </p>
                                            <p className="font-space text-[0.6rem] md:text-xs text-white/80 mt-2 tracking-wide">
                                                {cardRole}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default TeamSection;