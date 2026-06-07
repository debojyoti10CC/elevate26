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

        // Create split - exclude the sub element from being split
        const split = new SplitText(".footer-title h1", {
            type: "chars",
            charsClass: "ftChar",
            // Exclude the <sub> element from being split
            exclude: "sub"
        });

        // Wrap each character in a span for animation
        split.chars.forEach(char => {
            char.innerHTML = `<span>${char.innerHTML}</span>`;
        });

        const innerChars = split.chars.map(c => c.querySelector("span"));

        // Handle the sub element separately
        const sub = ftConRef.current.querySelector(".footer-title sub");
        if (sub) {
            sub.innerHTML = `<span>${sub.innerHTML}</span>`;
            const subSpan = sub.querySelector("span");

            // Add to innerChars array
            innerChars.push(subSpan);
        }

        // Initial state - start from left (-120%)
        gsap.set(innerChars, { x: "-120%" });

        // Animation - move to normal position
        gsap.to(innerChars, {
            x: "0%",
            stagger: 0.02, // Add stagger for character-by-character reveal
            ease: "power3.out",
            force3D: true,
            scrollTrigger: {
                trigger: ftConRef.current,
                start: "top 95%",
                end: "bottom bottom",
                scrub: true,
                // markers: true
            }
        });

        // Cleanup - revert the split and restore original HTML
        return () => {
            split.revert();
            // Restore the original HTML with sub element
            ftConRef.current.querySelector(".footer-title h1").innerHTML = originalHTML;
        };

    }, { scope: ftConRef });

    return (
        <section ref={ftConRef} className='relative z-1 w-full border-t border-[#35294e] pb-4'>
            <div className='w-full flex flex-wrap justify-between items-center gap-y-1 px-5 md:px-6 pt-5 pb-2'>
                <p className='text-[#9a8eb7] text-[0.65rem]'>
                    Powered by—<a href="#" className='text-[#eae4f5]'>IEEE IEM Student Branch</a>
                </p>
                <p className='text-[#9a8eb7] text-[0.65rem]'>
                    © ELEVATE 2025
                </p>
                <p className='text-[#9a8eb7] text-[0.65rem]'>
                    All rights reserved
                </p>
            </div>

            <div className='footer-title w-full text-center overflow-hidden'>
                <h1 className='font-bold leading-none' style={{ fontSize: 'clamp(3rem, 18vw, 14rem)' }}>
                    ELEVATE
                </h1>
            </div>
        </section>
    );
};

export default FooterTitle;