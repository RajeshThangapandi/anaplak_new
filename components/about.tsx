"use client";

import { useEffect, useRef, useState } from "react";

export default function About() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  /* ----------------------------
      TYPEWRITER ANIMATION LOGIC
  ----------------------------- */
  const words = ["hairstyles", "styles", "fashion"];
  const [wordIndex, setWordIndex] = useState(0);
  const [displayedWord, setDisplayedWord] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    let speed = isDeleting ? 70 : 120;

    const timeout = setTimeout(() => {
      setDisplayedWord((prev) =>
        isDeleting ? prev.slice(0, -1) : currentWord.slice(0, prev.length + 1)
      );

      // Word fully typed → wait → start deleting
      if (!isDeleting && displayedWord === currentWord) {
        setTimeout(() => setIsDeleting(true), 800);
      }

      // Word fully deleted → next word
      if (isDeleting && displayedWord === "") {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [displayedWord, isDeleting, wordIndex]);

  /* ----------------------------
          FADE-IN ON SCROLL
  ----------------------------- */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#0E0E0E] py-24 md:py-32">

      {/* FULL-WIDTH GRID */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-20 px-6 lg:px-12 xl:px-20">

        {/* LEFT IMAGE BLOCK */}
        <div
          className={`transition-all duration-[1200ms] ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
        <img
  src="/aboutus.jpg"
  className="w-full h-[650px] md:h-[780px] object-cover object-top rounded-xl"
/>


          <h6 className="uppercase mt-6 text-white font-semibold text-[15px] leading-relaxed max-w-[450px]">
            Experience the artistry of hair styling with a team that values your
            comfort, your time, and your personal beauty journey.
          </h6>
        </div>

        {/* RIGHT CONTENT BLOCK */}
        <div
          className={`transition-all duration-[1200ms] delay-200 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h6 className="uppercase text-[#C8AFAE] tracking-[0.3em] text-[14px] mb-6">
            about hair salon
          </h6>

          {/* ----------------------------
             HEADING + TYPEWRITER EFFECT
          ----------------------------- */}
          <h2 className="text-white font-bold text-[44px] md:text-[52px] leading-[1.2] max-w-2xl mb-6">
            Find the perfect balance between elegance and comfort with{" "}
            <span className="text-[#C8AFAE]">
              {displayedWord}
              <span className="inline-block w-[2px] h-[1em] bg-[#C8AFAE] ml-1 animate-pulse"></span>
            </span>
          </h2>

          <p className="text-[#C2C2C2] text-[18px] leading-[1.75] max-w-2xl mb-12">
            Our stylists use modern techniques and trusted products to create
            hairstyles that remain stylish and practical. We focus on both style
            and hair health, ensuring beauty that lasts beyond the salon visit.
          </p>

          {/* BOTTOM IMAGE BLOCK */}
          <div className="relative w-full">
          <img
  src="/aboutus2.jpg"
  className="w-full h-[480px] md:h-[580px] object-cover object-[50%_15%] rounded-xl"
/>


            {/* ROTATING LOGO */}
            {/* ROTATING LOGO — TOP RIGHT CORNER */}
<img
  src="/stamp.png"
  className="
    w-[150px] h-[150px]
    md:w-[180px] md:h-[180px]
    absolute
    -top-10 md:-top-14
    -right-10 md:-right-14
    opacity-90
    rotate-slow-delay
    pointer-events-none
  "
/>

          </div>
        </div>
      </div>
    </section>
  );
}
