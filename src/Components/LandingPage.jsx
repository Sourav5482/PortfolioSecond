import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Typewriter from 'typewriter-effect';
import '../hover-animations.css';
import BlobCursor from './BlobCursor';

const LandingPage = () => {
    const overlayRef = useRef(null);
    const contentRef = useRef(null);
    const navRef = useRef(null);
    const textLeftRef = useRef(null);
    const textRightRef = useRef(null);
    const buttonRef = useRef(null);
    const nameRef = useRef(null);

    useEffect(() => {
        // Initial state - hide elements
        gsap.set([contentRef.current, navRef.current, textLeftRef.current, textRightRef.current, buttonRef.current, nameRef.current], { 
            opacity: 0,
            y: 20 
        });

        // Animation timeline
        const tl = gsap.timeline();

        tl.to(overlayRef.current, {
            yPercent: -100,
            duration:1.5,
            ease: "power2.inOut"
        })
        .to(contentRef.current, {
            opacity: 1,
            duration: 0.1
        })
        .to(navRef.current, {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out"
        })
        .to(nameRef.current, {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out"
        })
        .to([textLeftRef.current, textRightRef.current], {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.2,
            ease: "power2.out"
        })
        .to(buttonRef.current, {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out"
        }, "-=0.3");

        // cleanup on unmount
        return () => {
            if (tl) tl.kill();
        };
    }, []);

    return (
        <>
            {/* Black overlay that slides up with parabolic shape */}
            <div 
                ref={overlayRef}
                className="fixed inset-0 bg-black z-50"
                style={{ 
                    clipPath: 'ellipse(100% 100% at 50% -20%)',
                    transformOrigin: 'bottom'
                }}
            />

            {/* Main content */}
            <div ref={contentRef} className="relative bg-[#E8E8E3] min-h-screen w-full overflow-hidden">
                {/* Navigation */}
            <nav ref={navRef} className="relative z-10 flex justify-between items-center px-6 md:px-9 py-2 mt-0">
                <h1 className="text-[#6B645C] font-semibold text-xl">Web Developer</h1>
                <div className="flex gap-6">
                    <a href="#works" className="nav-link text-[#6B645C]  hover:text-amber-50">
                        <div className="text-reveal-wrap">
                            <div className="text-reveal-content">
                                <span>Works</span>
                                <span>Works</span>
                            </div>
                        </div>
                    </a>
                    <a href="#about" className="nav-link text-[#6B645C]  hover:text-amber-50">
                        <div className="text-reveal-wrap ">
                            <div className="text-reveal-content ">
                                <span>About</span>
                                <span>About</span>
                            </div>
                        </div>
                    </a>
                    <a href="#contact" className="nav-link text-[#6B645C] hover:text-amber-50">
                        <div className="text-reveal-wrap">
                            <div className="text-reveal-content">
                                <span>Contact</span>
                                <span>Contact</span>
                            </div>
                        </div>
                    </a>
                </div>
            </nav>

            {/* Name */}
            <div ref={nameRef} className="relative z-10 px-4 py-8 md:px-9 flex justify-center items-center">
                <div className="typewriter text-[40px] sm:text-[80px] md:text-[170px] font-bold tracking-tight text-center mt-5.5">
                    <Typewriter
                        onInit={(typewriter) => {
                            typewriter
                                .pauseFor(1500)
                                .typeString('SOURAV DAS')
                                .pauseFor(500)
                                .callFunction(() => {
                                    // Hide cursor after typing
                                    document.querySelector('.Typewriter__cursor').style.display = 'none';
                                })
                                .start();
                        }}
                        options={{
                            delay: 100,
                            cursor: '',
                            loop: false,
                        }}
                    />
                </div>
            </div>

            {/* Content Section */}
            <div className="relative z-10 px-6 md:px-9 pb-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4">
                    {/* Left Text */}
                    <div ref={textLeftRef}>
                        <p className="text-lg md:text-[23px] text-[#6B645C] leading-relaxed text-center md:text-left">
                            Open to job opportunities worldwide. 
                            Passionate about building polished, 
                            intuitive, and thoughtful digital 
                            experiences that leave a mark.
                        </p>
                    </div>

                    {/* Center Button */}
                    <div ref={buttonRef} className="flex justify-center items-center">
                        <button className="hover-fill-up bg-[#524F4B] text-white text-xl md:text-3xl py-4 px-8 rounded-full transition-all">
                            <div className="text-reveal-wrap">
                                <div className="text-reveal-content">
                                    <span>Contact</span>
                                    <span>Contact</span>
                                </div>
                            </div>
                        </button>
                    </div>

                    {/* Right Text (hidden on mobile) */}
                    <div ref={textRightRef} className="hidden md:block">
                        <p className="text-[23px] text-[#6B645C] leading-relaxed text-right">
                            Open to job opportunities worldwide. 
                            Passionate about building polished, 
                            intuitive, and thoughtful digital 
                            experiences that leave a mark.
                        </p>
                    </div>
                </div>
            </div>
            {/* Blob cursor overlay */}
            <div className="pointer-events-none absolute inset-0 z-0">
                <BlobCursor zIndex={0} />
            </div>
            </div>
        </>
    );
};

export default LandingPage;