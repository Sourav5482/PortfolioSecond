
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import LandingPage from "./Components/LandingPage.jsx";
import SecondPage from "./Components/SecondPage.jsx";
import ThirdPage from "./Components/ThirdPage.jsx";
import './scroll-animations.css';
import Fourth from './Components/Fourth.jsx';
import PillNav from './Components/PillNav.jsx';
import FifthPage from './Components/FifthPage.jsx';
import SkillsSection from './Components/SkillsSection .jsx';
import AboutSection from './Components/AboutSection.jsx';
import ThnPage from './Components/ThnPage.jsx';
import ContactSection from './Components/ContactSection.jsx';

gsap.registerPlugin(ScrollTrigger);

const App = () => {
    const containerRef = useRef(null);
    const landingRef = useRef(null);
    const secondRef = useRef(null);
    const thirdRef = useRef(null);
    const fourthRef = useRef(null);
    const pillNavRef = useRef(null);
    const fifthPageRef = useRef(null);

    useEffect(() => {
        if (!containerRef.current) return;

        const ctx = gsap.context(() => {
            // Set initial positions: landing visible, others below viewport
            gsap.set([landingRef.current, secondRef.current, thirdRef.current, fourthRef.current], { yPercent: 100 });
            gsap.set(landingRef.current, { yPercent: 0 });
            // PillNav hidden until Second is covered (when Third arrives)
            if (pillNavRef.current) gsap.set(pillNavRef.current, { opacity: 0, y: -20 });

            // One pinned timeline that slides each page over the previous
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top top',
                    end: '+=300%', // 3 transitions = 300% of viewport
                    scrub: 1,
                    pin: true,
                    anticipatePin: 1,
                    onLeave: () => ScrollTrigger.refresh(),
                    onLeaveBack: () => ScrollTrigger.refresh(),
                }
            });

            tl
                .to(secondRef.current, { yPercent: 0, ease: 'none', duration: 1 })
                // Reveal PillNav from the 2nd page onward
                .to(pillNavRef.current, { opacity: 1, y: 0, duration: 0.3, ease: 'power2.out' })
                .to(thirdRef.current, { yPercent: 0, ease: 'none', duration: 1 })
                .to(fourthRef.current, { yPercent: 0, ease: 'none', duration: 1 });

            // Hide PillNav when FifthPage enters viewport; show it when leaving
            if (fifthPageRef.current && pillNavRef.current) {
                ScrollTrigger.create({
                    trigger: fifthPageRef.current,
                    start: 'top 85%',
                    onEnter: () => gsap.to(pillNavRef.current, { opacity: 0, y: -20, duration: 0.3, ease: 'power2.out', overwrite: 'auto' }),
                    onEnterBack: () => gsap.to(pillNavRef.current, { opacity: 0, y: -20, duration: 0.3, ease: 'power2.out', overwrite: 'auto' }),
                    onLeave: () => gsap.to(pillNavRef.current, { opacity: 1, y: 0, duration: 0.3, ease: 'power2.out', overwrite: 'auto' }),
                    onLeaveBack: () => gsap.to(pillNavRef.current, { opacity: 1, y: 0, duration: 0.3, ease: 'power2.out', overwrite: 'auto' }),
                });
            }
        }, containerRef);

        return () => {
            ctx.revert();
            ScrollTrigger.getAll().forEach(t => t.kill());
        };
    }, []);

    return (
        <>
            <div ref={containerRef} className="relative h-screen overflow-hidden">
                {/* Stacked layers fill the viewport; they slide in place while pinned */}
                <div className="absolute inset-0">
                    {/* Landing Layer */}
                    <div ref={landingRef} className="absolute inset-0 z-10">
                        <div className="h-screen bg-[#E8E8E3]">
                            <LandingPage />
                        </div>
                    </div>

                    {/* Second Layer */}
                    <div ref={secondRef} className="absolute inset-0 z-20 ">
                        <div className="h-screen w-full bg-black ">
                            <SecondPage />
                        </div>
                    </div>

                    {/* Third Layer */}
                    <div ref={thirdRef} className="absolute inset-0 z-30">
                        <div className="h-screen w-full bg-[#0a0a0a]">
                            <ThirdPage />
                        </div>
                    </div>

                    {/* Fourth Layer */}
                    <div ref={fourthRef} className="absolute inset-0 z-40">
                        <div className="h-screen w-full bg-[#050505]">
                            <Fourth />
                        </div>
                    </div>
                    <div></div>
                </div>
            </div>
            {/* PillNav appears after Second is covered (when Third arrives) */}
            <div ref={pillNavRef} className="fixed top-4 left-1/2 right-1/2 -translate-y-1/2 -translate-x-1/2 z-[100]">
                <PillNav
                    items={[
                        { label: 'Home', href: '#' },
                        { label: 'About', href: '#about' },
                        { label: 'Works', href: '#works' },
                        { label: 'Contact', href: '#contact' }
                    ]}
                    activeHref="/"
                    className="custom-nav"
                    ease="power2.easeOut"
                    pillColor="#000000"
                    baseColor="#ffffff"
                    pillTextColor="#ffffff"
                    hoveredPillTextColor="#000000"
                />
            </div>



            <div ref={fifthPageRef}>
                <FifthPage />
            </div>
            <SkillsSection />
            <AboutSection />
            <ContactSection />
            <ThnPage />
        </>
    );
};

export default App;