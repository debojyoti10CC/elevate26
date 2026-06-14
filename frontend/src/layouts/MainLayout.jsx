import { Outlet } from "react-router-dom";
import gsap from "gsap";
import { ScrollSmoother } from "gsap/all";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "../components/Navbar/Navbar";
import { useEffect, useState } from "react";
import PreloaderII from "../components/Preloader/PreloaderII";
import ReserveBtn from "../components/Buttons/ReserveBtn";
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

    useEffect(() => {
        const handleAnchorClick = (e) => {
            const link = e.target.closest("a");
            if (!link) return;
            const href = link.getAttribute("href");
            if (href && href.startsWith("#") && href.length > 1) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    const smoother = ScrollSmoother.get();
                    if (smoother) {
                        smoother.scrollTo(target, true);
                    } else {
                        target.scrollIntoView({ behavior: "smooth" });
                    }
                    // Update URL hash
                    window.history.pushState(null, "", href);
                }
            }
        };

        document.addEventListener("click", handleAnchorClick);
        return () => document.removeEventListener("click", handleAnchorClick);
    }, []);

    // Handle initial hash routing on page load
    useEffect(() => {
        if (window.location.hash) {
            const target = document.querySelector(window.location.hash);
            if (target) {
                // Wait for preloader/page loading to settle
                const timer = setTimeout(() => {
                    const smoother = ScrollSmoother.get();
                    if (smoother) {
                        smoother.scrollTo(target, true);
                    } else {
                        target.scrollIntoView({ behavior: "smooth" });
                    }
                }, 1000); // 1s is safe to let preloader finish
                return () => clearTimeout(timer);
            }
        }
    }, []);

    return (
        <>
            <PreloaderII />
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
