"use client";

import { useEffect, useState } from "react";

const slides = [
  {
    title: "Gaming Setup",
    desc: "High performance PC & accessories",
    image: "/icons/gaming-monitor.png",
  },
  {
    title: "Ultra Monitor",
    desc: "144Hz smooth experience",
    image: "/icons/gaming-monitor.png",
  },
  {
    title: "Work Station",
    desc: "Perfect for productivity",
    image: "/icons/gaming-monitor.png",
  },
];

const animations = [
  "translate-x-10",
  "-translate-x-10",
  "translate-y-10",
  "-translate-y-10",
  "scale-95",
];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);
  const [pause, setPause] = useState(false);
  const [anim, setAnim] = useState("translate-x-10");

  useEffect(() => {
    if (pause) return;

    const interval = setInterval(() => {
      const randomAnim =
        animations[Math.floor(Math.random() * animations.length)];

      setAnim(randomAnim);
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [pause]);

  return (
    <div
      className="relative overflow-hidden bg-white border rounded-2xl shadow-md"
      onMouseEnter={() => setPause(true)}
      onMouseLeave={() => setPause(false)}
    >
      <div className="relative h-[650px]">
        {slides.map((slide, i) => (
          <div
            key={i}
            className={`absolute inset-0 flex items-center justify-between p-6 
            transition-all duration-700 ease-in-out
            ${
              i === index
                ? `opacity-100 translate-x-0 z-10`
                : `opacity-0 ${anim} z-0`
            }`}
          >
            {/* TEXT */}
            <div className="max-w-sm">
              <h2 className="text-2xl font-bold mb-2">{slide.title}</h2>
              <p className="text-gray-500 mb-4">{slide.desc}</p>
              <button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800">
                Gör
              </button>
            </div>

            {/* IMAGE */}
            <img
              src={slide.image}
              className={`w-36 object-contain 
transition-all duration-[2500ms] ease-[cubic-bezier(0.22,1,0.36,1)]
${i === index ? "scale-110 translate-y-0" : "scale-95 translate-y-2"}
`}
            />
          </div>
        ))}
      </div>

      {/* DOTS */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <div
            key={i}
            onClick={() => setIndex(i)}
            className={`w-2.5 h-2.5 rounded-full cursor-pointer transition-all
              ${i === index ? "bg-black w-5" : "bg-gray-300"}
            `}
          />
        ))}
      </div>
    </div>
  );
}
