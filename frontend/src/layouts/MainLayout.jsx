import { Outlet } from "react-router-dom";
import gsap from "gsap";
import { ScrollSmoother } from "gsap/all";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "../components/Navbar/Navbar";
import { useEffect, useState } from "react";
import PreloaderII from "../components/Preloader/PreloaderII";
import ReserveBtn from "../components/Buttons/ReserveBtn";
import Logo from "../components/Buttons/Logo";
import Footer from "../components/Footer/Footer";
import FooterTitle from "../components/Footer/FooterTitle";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const MainLayout = () => {
    const [isMobile] = useState(() =>
        typeof window !== "undefined" ? window.innerWidth < 768 : false
    );

    useGSAP(() => {
        // ScrollSmoother fights native touch scroll on mobile — skip it
        if (isMobile) return;

        ScrollSmoother.create({
            wrapper: "#smooth-wrapper",
            content: "#smooth-content",
            smooth: 1.5,
            effects: true,
        });
    }, [isMobile]);

    return (
        <>
            <PreloaderII />
            <Logo />
            <ReserveBtn />
            <Navbar />
            <div id="smooth-wrapper">
                <div id="smooth-content">
                    <main>
                        <Outlet />
                        <Footer />
                        <FooterTitle />
                    </main>
                </div>
            </div>
        </>
    );
};

export default MainLayout;
