import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

export default function GsapButton({ children }) {
  const btnRef = useRef(null);

  useEffect(() => {
    const el = btnRef.current;

    const handleEnter = () => {
      gsap.to(el, {
        scale: 1.1,
        boxShadow: "0px 8px 20px rgba(59,130,246,0.6)",
        duration: 0.3,
        ease: "power3.out",
      });
    };

    const handleLeave = () => {
      gsap.to(el, {
        scale: 1,
        boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
        duration: 0.4,
        ease: "power3.out",
      });
    };

    el.addEventListener("mouseenter", handleEnter);
    el.addEventListener("mouseleave", handleLeave);

    return () => {
      el.removeEventListener("mouseenter", handleEnter);
      el.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

 
}
