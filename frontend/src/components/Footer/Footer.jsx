import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import MarqueeText from '../Marquee/MarqueeText';

const Footer = () => {
    return (
        <section className="w-full px-5 md:px-6 pt-10 pb-12 md:pb-16 font-space">
            <p className="text-[0.65rem] text-[#eae4f5] font-nova mb-2">
                Ready to compete?<br />Register for ELEVATE 2026
            </p>

            <div className="mt-2 mb-8">
                <MarqueeText text="Join ELEVATE" />
            </div>

            {/* Google Map Embed */}
            <div id="venue" className="w-full mb-10 md:mb-14 text-center">
                <p className="text-[0.65rem] text-[#eae4f5] font-nova mb-3">Find us at IEM Gurukul Building</p>
                <div className="footer-map-container">
                    <iframe
                        width="100%"
                        height="100%"
                        style={{ 
                            border: 0, 
                            filter: "grayscale(100%) invert(92%) contrast(120%) brightness(90%) hue-rotate(240deg) saturate(2.5)" 
                        }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="IEM Gurukul Building Location"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7368.245403205229!2d88.43386840000001!3d22.574513699999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02751153ddb371%3A0x816e6fee5a5aac55!2sIEM%20Gurukul%20Building!5e0!3m2!1sen!2sin!4v1780763717738!5m2!1sen!2sin"
                    />
                </div>
            </div>

            {/* Main footer content */}
            <div className="flex flex-col md:flex-row justify-between items-start gap-8 md:gap-4 mt-6 md:mt-14">
                <div className="max-w-sm">
                    <p className="text-[#9a8eb7] text-sm md:text-xl leading-relaxed">
                        ELEVATE — powered by IEEE IEM Student Branch.
                        <br className="hidden md:block" />
                        A celebration of technology, innovation, and community.
                        <br /><br />
                        Questions? Reach us at:
                    </p>
                    <div className="mt-3 flex flex-col gap-1.5">
                        {[
                            { name: "Aditi Rai", phone: "+919804876700", display: "+91 98048 76700" },
                            { name: "Aniruddha Das", phone: "+917439137694", display: "+91 7439137694" },
                            { name: "Debasmita Hazra", phone: "+919547230573", display: "+91 95472 30573" },
                            { name: "Anwesha Ghosh", phone: "+919007719690", display: "+91 90077 19690" },
                        ].map(({ name, phone, display }) => (
                            <a
                                key={name}
                                href={`tel:${phone}`}
                                className="flex items-baseline gap-2 group"
                            >
                                <span className="text-[#9a8eb7] text-sm md:text-base font-nova shrink-0">{name}</span>
                                <span className="text-[#eae4f5] text-sm md:text-base font-space group-hover:text-[#E1B6FC] transition-colors">{display}</span>
                            </a>
                        ))}
                    </div>
                </div>

                <div className="flex flex-row md:flex-col flex-wrap gap-x-5 gap-y-2 md:gap-1 items-start md:items-end font-nova">
                    {["About", "Events", "Schedule", "Team", "Venue"].map((item) => (
                        <a key={item} href={`#${item.toLowerCase()}`} className="text-[#eae4f5] text-base md:text-xl hover:text-[#9a8eb7] transition-colors">
                            {item}
                        </a>
                    ))}
                    <a
                        href="https://forms.gle/mgs8gNcX4RSVPfiv8"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#eae4f5] text-base md:text-xl font-bold hover:text-[#9a8eb7] transition-colors"
                    >
                        Register ↗
                    </a>
                </div>
            </div>

            {/* Social + tagline */}
            <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mt-10 md:mt-20">
                <div className="flex gap-2">
                    <a
                        href="https://www.instagram.com/ieeeiemsb_official/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border border-[#35294e] rounded-full p-2.5 text-[#eae4f5] hover:bg-[#eae4f5] hover:text-[#181126] transition-colors"
                    >
                        <FaInstagram className="text-base" />
                    </a>
                    <a
                        href="https://www.linkedin.com/company/ieee-iemsb/posts/?feedView=all"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border border-[#35294e] rounded-full p-2.5 text-[#eae4f5] hover:bg-[#eae4f5] hover:text-[#181126] transition-colors"
                    >
                        <CiLinkedin className="text-base" />
                    </a>
                    <a
                        href="https://x.com/IEEE_CS_IEM_SBC"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border border-[#35294e] rounded-full p-2.5 text-[#eae4f5] hover:bg-[#eae4f5] hover:text-[#181126] transition-colors"
                    >
                        <FaXTwitter className="text-base" />
                    </a>
                </div>

                <p className="text-[0.7rem] text-[#9a8eb7] md:text-right leading-relaxed">
                    ELEVATE — IEEE IEM Student Branch's<br />
                    flagship college event.
                </p>
            </div>
        </section>
    );
};

export default Footer;
