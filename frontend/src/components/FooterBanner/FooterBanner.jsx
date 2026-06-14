import { useRef, useState } from 'react';
import banner from '../../assets/footer-banner.jpg';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ClickIndicator from '../MapLink/ClickIndicator';
import elevateLogo from '../../assets/elevate-logo.png';


const FooterBanner = () => {
    const [active, setActive] = useState(false);
    const fbConRef = useRef(null);
    const fbImgRef = useRef(null);

    useGSAP(() => {
        if (!fbConRef.current || !fbImgRef.current) return;

        gsap.fromTo(fbImgRef.current,
            { scale: 1.25 },
            {
                scale: 1.08,
                ease: "none",
                force3D: true,
                scrollTrigger: {
                    trigger: fbConRef.current,
                    start: "top bottom-=20%",
                    end: "bottom top+=20%",
                    scrub: 1,
                    invalidateOnRefresh: true,
                }
            }
        );
    }, { scope: fbConRef });

    return (
        <div ref={fbConRef} className="w-full md:h-dvh h-[70vh] p-2 overflow-hidden">
            <div className='w-full h-full relative overflow-hidden rounded-4xl'>
                <ClickIndicator active={active} />
                <img
                    onMouseEnter={() => setActive(true)}
                    onMouseLeave={() => setActive(false)}
                    ref={fbImgRef} 
                    src={banner} 
                    alt="" 
                    className='w-full h-full object-cover select-none' 
                    style={{ filter: "blur(2px) brightness(0.45)" }} 
                />

                <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[55vw] md:w-[45vw] lg:w-[35vw] max-w-[600px] select-none">
                    <img
                        src={elevateLogo}
                        alt="ELEVATE"
                        className="w-full h-auto object-contain pointer-events-none"
                        style={{
                            filter: "drop-shadow(0 0 6px rgba(225, 182, 252, 0.5)) drop-shadow(0 0 15px rgba(168, 85, 247, 0.25)) drop-shadow(2px 4px 10px rgba(0, 0, 0, 0.8))"
                        }}
                    />
                </h1>
                <div className='absolute bottom-6 px-6 md:px-8 w-full z-10'>
                    <div className="w-full h-auto flex md:flex-row flex-col md:justify-between md:items-end gap-3 md:gap-0">
                        <h2
                            className="text-start lg:mt-0 text-[#c4b5fd] text-xl md:text-2xl lg:text-3xl font-nova font-bold leading-snug flex flex-col gap-1.5"
                            style={{ textShadow: '2px 2px 4px #000' }}
                        >
                            <span>Register—Now</span>
                            <span>Level Up—Your</span>
                            <span>Engineering Game</span>
                        </h2>

                        <p
                            className="md:w-[32%] lg:w-[25%] w-full text-[#c4b5fd] text-[0.75rem] md:text-[0.7rem] lg:text-xs font-space tracking-wide md:text-right text-left leading-relaxed mt-2 md:mt-0"
                            style={{ textShadow: '2px 2px 4px #000' }}
                        >
                            Join ELEVATE — IEEE IEM Student Branch's flagship event. Don't miss your shot.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FooterBanner