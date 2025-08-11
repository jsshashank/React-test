// Hero.jsx
import React from "react";
import heroImage from "../assets/blue_grad.jpeg";

export default function Hero() {
  return (
    <section className="relative w-full h-[80vh] rounded-[0.5rem] overflow-hidden shadow-lg">
      {/* Background image */}
      <img
        src={heroImage}
        alt="Nature meets city"
        className="absolute inset-0 w-full h-full object-cover"
      />

         <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>

      {/* Text + button on blurred side */}
      <div className="absolute pt-10 w- flex flex-col px-10 text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Transform your digital presence.
        </h1>
        <p className="text-lg mb-6">
          From zero to extraordinary. Let’s create your digital reality.
        </p>
        <button className="px-6 py-3 bg-white text-black rounded-full hover:bg-gray-200 transition">
          Send a message
        </button>
      </div>
    </section>
  );
}
