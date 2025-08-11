import { useState, useEffect } from "react";

export default function Emphasis() {
  const [showAnimation, setShowAnimation] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) { // adjust scroll trigger
        setShowAnimation(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <a
      href="#section-below"
      className="fixed bottom-6 left-1/2 -translate-x-1/2 text-white text-2xl"
    >
      <i
        className={`fa-solid fa-arrow-down ${
          showAnimation ? "animate-upBounce" : ""
        }`}
      ></i>
    </a>
  );
}
