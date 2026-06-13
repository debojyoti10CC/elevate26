import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useRef } from 'react';

import "./footertitle.css";

gsap.registerPlugin(SplitText, ScrollTrigger);

const FooterTitle = () => {
    const ftConRef = useRef(null);

    useGSAP(() => {
        if (!ftConRef.current) return;

        // Get the original HTML before splitting
        const originalHTML = ftConRef.current.querySelector(".footer-title h1").innerHTML;

        // Create split
        const split = new SplitText(".footer-title h1", {
            type: "chars",
            charsClass: "ftChar",
            exclude: "sub"
        });

        // Wrap each character in a span for the clip animation
        split.chars.forEach(char => {
            char.innerHTML = `<span>${char.innerHTML}</span>`;
        });

        const innerChars = split.chars.map(c => c.querySelector("span"));

        // Handle the sub element separately
        const sub = ftConRef.current.querySelector(".footer-title sub");
        if (sub) {
            sub.innerHTML = `<span>${sub.innerHTML}</span>`;
            innerChars.push(sub.querySelector("span"));
        }

        // Initial state — all chars hidden to the left
        gsap.set(innerChars, { x: "-110%" });

        // Non-scrub animation: plays automatically when footer enters view.
        // This guarantees every character fully reaches x:0 regardless of
        // how much scroll distance remains on the page.
        gsap.to(innerChars, {
            x: "0%",
            duration: 0.8,
            stagger: 0.06,
            ease: "power3.out",
            force3D: true,
            scrollTrigger: {
                trigger: ftConRef.current,
                start: "top 95%",   // fires as soon as footer peeks into view
                toggleActions: "play none none none",
            }
        });

        // Cleanup
        return () => {
            split.revert();
            if (ftConRef.current) {
                ftConRef.current.querySelector(".footer-title h1").innerHTML = originalHTML;
            }
        };

    }, { scope: ftConRef });

    return (
        <section ref={ftConRef} className='relative z-1 w-full border-t border-[#35294e] pb-4'>
            <div className='w-full flex flex-wrap justify-between items-center gap-y-1 px-5 md:px-6 pt-5 pb-2'>
                <p className='text-[#9a8eb7] text-[0.65rem]'>
                    Powered by—<a href="#" className='text-[#eae4f5]'>IEEE IEM Student Branch</a>
                </p>
                <p className='text-[#9a8eb7] text-[0.65rem]'>
                    © ELEVATE 2026
                </p>
                <p className='text-[#9a8eb7] text-[0.65rem]'>
                    All rights reserved
                </p>
            </div>

            <div className='footer-title w-full text-center'>
                <h1 className='font-bold leading-none' style={{ fontSize: 'clamp(3rem, 18vw, 14rem)' }}>
                    ELEVATE
                </h1>
            </div>
        </section>
    );
};

export default FooterTitle;