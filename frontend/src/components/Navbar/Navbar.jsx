import { useState } from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Events", href: "#events" },
  { label: "Schedule", href: "#schedule" },
  { label: "Team", href: "#team" },
  { label: "Venue", href: "#venue" },
  { label: "Register", href: "https://forms.gle/mgs8gNcX4RSVPfiv8" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  useGSAP(() => {
    if (open) {
      gsap.fromTo(
        ".nav-overlay",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.4, ease: "power3.out", force3D: true }
      );
      gsap.fromTo(
        ".nav-link-item",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, stagger: 0.07, duration: 0.4, ease: "power3.out", force3D: true, delay: 0.1 }
      );
    } else {
      gsap.to(".nav-overlay", { opacity: 0, y: 20, duration: 0.3, ease: "power3.in", force3D: true });
    }
  }, [open]);

  return (
    <>
      {/* Menu overlay */}
      {open && (
        <div
          className="nav-overlay fixed bottom-24 left-1/2 -translate-x-1/2 bg-[#eae4f5] rounded-3xl z-50 px-8 py-6 min-w-[220px] opacity-0"
          style={{ boxShadow: "0 8px 40px rgba(0,0,0,0.35)" }}
        >
          <ul className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <li key={link.label} className="nav-link-item opacity-0">
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  target={link.label === "Register" ? "_blank" : undefined}
                  rel={link.label === "Register" ? "noopener noreferrer" : undefined}
                  className={`text-[#181126] text-xl font-nova font-medium hover:text-[#9a8eb7] transition-colors ${
                    link.label === "Register"
                      ? "text-[#181126] font-bold border-t border-[#35294e] pt-3 mt-1 block"
                      : ""
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
 
      {/* Navbar pill */}
      <div
        onClick={() => setOpen((prev) => !prev)}
        className="fixed bottom-8 left-1/2 -translate-x-1/2 w-fit h-10 p-1 flex items-center justify-end gap-2 bg-[#eae4f5] rounded-4xl z-50 cursor-pointer group transition-all duration-500 select-none"
      >
        <div className="pl-4 text-[#181126] text-[12px] font-nova font-medium">
          {open ? "Close" : "Menu"}
        </div>
        <div className="bg-[#181126] rounded-full p-2">
          {open ? (
            <IoMdClose className="text-[#9a8eb7] transition-transform duration-300" />
          ) : (
            <IoMdMenu className="text-[#9a8eb7] transition-transform duration-500 group-hover:rotate-[360deg]" />
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
