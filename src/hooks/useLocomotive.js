import { useEffect, useState } from 'react';
import LocomotiveScroll from 'locomotive-scroll';

export default function useLocomotive(start = true) {
    const [locomotiveScroll, setLocomotiveScroll] = useState(null);

    useEffect(() => {
        if (!start) return;

        const scrollEl = document.querySelector('[data-scroll-container]');
        if (!scrollEl) return;

        const locoScroll = new LocomotiveScroll({
            el: scrollEl,
            smooth: true,
            multiplier: 1,
            lerp: 0.05,
            class: 'is-revealed',
            initPosition: { x: 0, y: 0 },
            direction: 'vertical',
            getDirection: true,
            getSpeed: true,
            reloadOnContextChange: true,
            scrollFromAnywhere: true,
            mobile: {
                smooth: true,
                multiplier: 1,
                breakpoint: 0
            },
            tablet: {
                smooth: true,
                multiplier: 1,
                breakpoint: 0
            }
        });

        setLocomotiveScroll(locoScroll);

        // Handle page resize
        const handleResize = () => {
            locoScroll.update();
        };

        // Update locomotive scroll on page load
        setTimeout(() => {
            locoScroll.update();
        }, 500);

        window.addEventListener('resize', handleResize);

        return () => {
            if (locoScroll) {
                window.removeEventListener('resize', handleResize);
                locoScroll.destroy();
            }
        };
    }, [start]);

    return locomotiveScroll;
}
