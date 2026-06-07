import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import MarqueeText from '../Marquee/MarqueeText';

const Footer = () => {
    return (
        <section className="w-full px-5 md:px-6 pt-10 pb-12 md:pb-16">
            <p className="text-[0.65rem] text-[#eae4f5] mb-2">
                Ready to compete?<br />Register for ELEVATE 2025
            </p>

            <div className="mt-2 mb-8">
                <MarqueeText text="Join ELEVATE" />
            </div>

            {/* Google Map Embed */}
            <div className="w-full mb-10 md:mb-14 text-center">
                <p className="text-[0.65rem] text-[#eae4f5] mb-3">Find us at IEM Gurukul Building</p>
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
                <p className="text-[#9a8eb7] text-sm md:text-2xl leading-relaxed max-w-sm">
                    ELEVATE — powered by IEEE IEM Student Branch.
                    <br className="hidden md:block" />
                    A celebration of technology, innovation, and community.
                    <br /><br />
                    Questions?{" "}
                    <a href="mailto:ieee@iem.edu.in" className="text-[#eae4f5] hover:text-[#35294e] underline">
                        contact us.
                    </a>
                </p>

                <div className="flex flex-row md:flex-col flex-wrap gap-x-5 gap-y-2 md:gap-1 items-start md:items-end">
                    {["About", "Events", "Schedule", "Team", "Venue"].map((item) => (
                        <a key={item} href="#" className="text-[#eae4f5] text-base md:text-2xl hover:text-[#9a8eb7] transition-colors">
                            {item}
                        </a>
                    ))}
                    <a href="#register" className="text-[#eae4f5] text-base md:text-2xl font-bold hover:text-[#9a8eb7] transition-colors">
                        Register ↗
                    </a>
                </div>
            </div>

            {/* Social + tagline */}
            <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mt-10 md:mt-20">
                <div className="flex gap-2">
                    <div className="border border-[#35294e] rounded-full p-2.5 text-[#eae4f5]"><FaInstagram className="text-base" /></div>
                    <div className="border border-[#35294e] rounded-full p-2.5 text-[#eae4f5]"><CiLinkedin className="text-base" /></div>
                    <div className="border border-[#35294e] rounded-full p-2.5 text-[#eae4f5]"><FaYoutube className="text-base" /></div>
                    <div className="border border-[#35294e] rounded-full p-2.5 text-[#eae4f5]"><FaXTwitter className="text-base" /></div>
                </div>

                <p className="text-[0.7rem] text-[#9a8eb7] md:text-right leading-relaxed">
                    ELEVATE — IEEE IEM Student Branch's<br />
                    flagship college tech-fest.
                </p>
            </div>
        </section>
    );
};

export default Footer;
