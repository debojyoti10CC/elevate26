import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import SplitText from "gsap/SplitText";
import BoxLoader from "@/components/ui/box-loader";

import "./preloaderII.css";

gsap.registerPlugin(SplitText);
export default function PreloaderII() {
    useGSAP(() => {
        function createSplitTexts(elements) {
            const splits = {};
            elements.forEach(({ key, selector, type }) => {
                const config = { type, mask: type };
                if (type === "chars") { config.charsClass = "char"; }
                if (type === "lines") { config.linesClass = "line"; }
                splits[key] = SplitText.create(selector, config);
            });
            return splits;
        }

        const splitElements = [
            { key: "footerLines", selector: ".preloader-footer p", type: "lines" },
        ];

        const splits = createSplitTexts(splitElements);

        gsap.set(".box-loader-wrapper", { scale: 0, opacity: 0 });

        gsap.set(
            [
                splits.footerLines.lines,
            ],
            { y: "100%" }
        );

        function animateProgress(duration = 3.5) {
            const tl = gsap.timeline();
            const counterSteps = 3;
            let currentProgress = 0;

            for (let i = 0; i < counterSteps; i++) {
                const finalStep = i === counterSteps - 1;
                const targetProgress = finalStep
                    ? 1
                    : Math.min(currentProgress + Math.random() * 0.3 + 0.1, 0.9);
                currentProgress = targetProgress;

                tl.to(".preloader-progress-bar", {
                    scaleX: targetProgress,
                    duration: duration / counterSteps,
                    ease: "power3.out",
                });
            }

            return tl;
        }

        const tl = gsap.timeline({ delay: 0.5 });
        tl.to(".box-loader-wrapper", {
            scale: 1,
            opacity: 1,
            duration: 1.2,
            ease: "back.out(1.5)",
        })
            .to(
                splits.footerLines.lines,
                {
                    y: "0%",
                    stagger: 0.1,
                    duration: 1,
                    ease: "power4.inOut",
                },
                "0.25"
            )
            .add(animateProgress(), "<")
            .set(".preloader-progress", { backgroundClip: "var(--base-300)" })
            .to(
                ".box-loader-wrapper",
                {
                    scale: 0,
                    opacity: 0,
                    duration: 0.8,
                    ease: "power4.inOut",
                },
                "+=0.15"
            )
            .to(splits.footerLines.lines, {
                y: "-100%",
                stagger: 0.1,
                duration: 0.5,
                ease: "power4.inOut",
            }, "-=0.1")
            .to(
                ".preloader-progress",
                {
                    opacity: 0,
                    duration: 0.7,
                    ease: "power3.out",
                },
                "<"
            )
            .to(
                ".preloader-mask",
                {
                    scale: 6,
                    duration: 4,
                    ease: "power3.out",
                },
                "<"
            )
            .to(
                ".preloader-mask",
                {
                    delay: 1,
                    opacity: 0,
                    display: "none",
                },
                "<"
            );
    }, []);

    return (
        <div className="size-full fixed z-51 overflow-hidden pointer-events-none">
            <div className="preloader-progress">
                <div className="preloader-progress-bar"></div>
            </div>

            <div className="preloader-mask"></div>

            <div className="box-loader-wrapper" style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                zIndex: 3,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <BoxLoader />
            </div>

            <div className="preloader-content">
                <div className="preloader-footer">
                    <p className="text-sm">
                        ELEVATE — IEEE IEM Student Branch's<br />
                        flagship college tech-fest.
                    </p>
                </div>
            </div>
        </div >
    );
}