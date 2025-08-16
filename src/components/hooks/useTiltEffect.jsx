// hooks/useTiltEffect.js
import { useEffect } from "react";
import { gsap } from "gsap";

export const useTiltEffect = (ref, intensity = 10) => {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    gsap.set(el, { transformPerspective: 600 });

    const handleMove = (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateY = ((x - centerX) / centerX) * intensity; // left/right
      const rotateX = -((y - centerY) / centerY) * intensity; // up/down

      gsap.to(el, {
        rotateY,
        rotateX,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const handleLeave = () => {
      gsap.to(el, {
        rotateY: 0,
        rotateX: 0,
        duration: 0.6,
        ease: "elastic.out(1,0.5)",
      });
    };

    el.addEventListener("mousemove", handleMove);
    el.addEventListener("mouseleave", handleLeave);

    return () => {
      el.removeEventListener("mousemove", handleMove);
      el.removeEventListener("mouseleave", handleLeave);
    };
  }, [ref, intensity]);
};
