import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

/**
 * Magnetic
 * Wrap a single child to add a magnetic hover effect.
 * - On mouse move: child is translated toward cursor within a max distance (strength)
 * - On enter: subtle scale up
 * - On leave: smooth spring back to origin and scale 1
 *
 * Props:
 * - strength: max translation in px (default 30)
 * - children: exactly one React element to animate
 */
const Magnetic = ({ strength = 30, children }) => {
  const containerRef = useRef(null);
  const childRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const child = childRef.current;
    if (!container || !child) return;

    const onPointerMove = (e) => {
      const rect = child.getBoundingClientRect();
      const relX = e.clientX - rect.left;
      const relY = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const dx = ((relX - centerX) / centerX) * strength;
      const dy = ((relY - centerY) / centerY) * strength;

      gsap.to(child, {
        x: dx,
        y: dy,
        duration: 0.2,
        ease: "power3.out",
        overwrite: true,
      });
    };

    const onPointerEnter = () => {
      gsap.to(child, { scale: 1.06, duration: 0.2, ease: "power2.out", overwrite: true });
    };

    const onPointerLeave = () => {
      gsap.to(child, {
        x: 0,
        y: 0,
        scale: 1,
        duration: 0.5,
        ease: "elastic.out(1, 0.5)",
        overwrite: true,
      });
    };

    container.addEventListener("pointermove", onPointerMove);
    container.addEventListener("pointerenter", onPointerEnter);
    container.addEventListener("pointerleave", onPointerLeave);

    return () => {
      container.removeEventListener("pointermove", onPointerMove);
      container.removeEventListener("pointerenter", onPointerEnter);
      container.removeEventListener("pointerleave", onPointerLeave);
    };
  }, [strength]);

  // Ensure exactly one child and attach the ref to it
  const child = React.Children.only(children);
  const cloned = React.cloneElement(child, { ref: childRef, style: { willChange: "transform", ...child.props.style } });

  return (
    <div ref={containerRef} className="inline-block relative">
      {cloned}
    </div>
  );
};

export default Magnetic;
