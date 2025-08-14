import React, { useEffect, useRef, useState } from "react";

/**
 * A performant custom cursor (dot + ring) that:
 * - Follows the mouse with smoothing
 * - Scales on link/interactive hover
 * - Disables itself on touch devices or when user prefers reduced motion
 */
const CustomCursor: React.FC = () => {
    const dotRef = useRef<HTMLDivElement>(null);
    const ringRef = useRef<HTMLDivElement>(null);

    // target positions
    const mouse = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
    // lerped positions for the ring (trailing effect)
    const pos = useRef({ x: mouse.current.x, y: mouse.current.y });

    const [active, setActive] = useState<boolean>(window.matchMedia("(pointer: fine)").matches);
    const [hoveringInteractive, setHoveringInteractive] = useState(false);

    // Respect reduced motion
    const prefersReduced = useRef<boolean>(window.matchMedia("(prefers-reduced-motion: reduce)").matches);

    useEffect(() => {
        const pointerFine = window.matchMedia("(pointer: fine)");
        const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");

        const onPointerFineChange = () => setActive(pointerFine.matches);
        const onReducedChange = () => (prefersReduced.current = reduced.matches);

        pointerFine.addEventListener?.("change", onPointerFineChange);
        reduced.addEventListener?.("change", onReducedChange);

        return () => {
            pointerFine.removeEventListener?.("change", onPointerFineChange);
            reduced.removeEventListener?.("change", onReducedChange);
        };
    }, []);

    useEffect(() => {
        if (!active) return;

        const move = (e: MouseEvent) => {
            mouse.current.x = e.clientX;
            mouse.current.y = e.clientY;

            // detect interactive elements
            const el = e.target as HTMLElement | null;
            const interactive =
                el &&
                (el.closest("a, button, input, textarea, select, [role='button'], [tabindex]") ||
                    window.getComputedStyle(el).cursor === "pointer");
            setHoveringInteractive(Boolean(interactive));
        };

        window.addEventListener("mousemove", move, { passive: true });
        return () => window.removeEventListener("mousemove", move);
    }, [active]);

    // animation loop
    useEffect(() => {
        if (!active) return;

        let raf = 0;
        const render = () => {
            // trail smoothing for the ring
            const speed = prefersReduced.current ? 1 : 0.18; // 1 = snap, 0..1 = smooth
            pos.current.x += (mouse.current.x - pos.current.x) * speed;
            pos.current.y += (mouse.current.y - pos.current.y) * speed;

            // dot sticks to the cursor
            if (dotRef.current) {
                dotRef.current.style.transform = `translate3d(${mouse.current.x}px, ${mouse.current.y}px, 0)`;
            }
            // ring trails behind
            if (ringRef.current) {
                ringRef.current.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0)`;
            }

            raf = requestAnimationFrame(render);
        };
        raf = requestAnimationFrame(render);
        return () => cancelAnimationFrame(raf);
    }, [active]);

    if (!active) return null;

    return (
        <>
            {/* Inner dot */}
            <div
                ref={dotRef}
                className={[
                    "pointer-events-none fixed left-0 top-0 -translate-x-1/2 -translate-y-1/2",
                    "h-2 w-2 rounded-full bg-black/90 dark:bg-white/90",
                    "mix-blend-difference", // keeps it visible on light/dark
                    "z-[9999]"
                ].join(" ")}
            />
            {/* Outer ring */}
            <div
                ref={ringRef}
                className={[
                    "pointer-events-none fixed left-0 top-0 -translate-x-1/2 -translate-y-1/2",
                    "rounded-full border border-white/50",
                    "mix-blend-difference", // now applies to both blur and border
                    "z-[9998]",
                    hoveringInteractive ? "h-10 w-10" : "h-6 w-6",
                    "bg-white/10 backdrop-blur-[4px]" // frosted background
                ].join(" ")}
                style={{
                    transition: "height 120ms ease, width 120ms ease, border-color 120ms ease",
                }}
            />

        </>
    );
};

export default CustomCursor;
