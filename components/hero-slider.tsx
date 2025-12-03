"use client"

import { useState, useEffect } from "react"

export default function HeroSlider() {
  const [current, setCurrent] = useState(0)

  // BRAND COLORS
  const PRIMARY = "#53675C"
  const SECONDARY = "#F8C8DC"

  const slides = [
    {
      line1: "PREMIUM SALON",
      line2: "BEAUTY EXPERTS",
      image: "https://haires.like-themes.com/wp-content/uploads/2025/09/SLIDE_01.jpg",
    },
    {
      line1: "BRIDAL MAKEUP",
      line2: "GLAM STUDIO",
      image: "https://haires.like-themes.com/wp-content/uploads/2025/09/SLIDE_02.jpg",
    },
    {
      line1: "STYLE DESIGN",
      line2: "HAIR ARTISTS",
      image: "https://haires.like-themes.com/wp-content/uploads/2025/09/SLIDE_03.jpg",
    },
    {
      line1: "SKIN CARE",
      line2: "BEAUTY BAR",
      image: "https://haires.like-themes.com/wp-content/uploads/2025/09/SLIDE_04.jpg",
    },
  ]

  useEffect(() => {
    const timer = setInterval(
      () => setCurrent((prev) => (prev + 1) % slides.length),
      5000
    )
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative h-screen overflow-hidden bg-transparent">

      {/* SLIDES STACK — FADES + ZOOMS */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`
            absolute inset-0 w-full h-full transition-opacity duration-[2000ms]
            ${current === index ? "opacity-100" : "opacity-0"}
          `}
        >
          <img
            src={slide.image}
            className={`
              absolute inset-0 w-full h-full object-cover
              transition-transform duration-[9000ms] ease-out
              ${current === index ? "scale-[1.18]" : "scale-[1.05]"}
            `}
            alt="slide"
          />
          <div className="absolute inset-0"></div>
        </div>
      ))}

      {/* CONTENT */}
      <div className="absolute inset-0 flex items-center">
        <div className="pl-6 sm:pl-10 md:pl-16 lg:pl-24">

          {/* LINE 1 */}
          <h1
            className="uppercase text-[#e8ded3] animate-fadeUp"
            style={{
              fontFamily: "Gilroy",
              fontWeight: 800,
              lineHeight: "1.05",
              animationDelay: "0.2s",
            }}
          >
            <span
              className="block 
                text-[45px] 
                sm:text-[70px] 
                md:text-[95px] 
                lg:text-[115px]"
            >
              {slides[current].line1}
            </span>
          </h1>

          {/* LINE 2 */}
          <h1
            className="uppercase text-[#e8ded3] mt-1 animate-fadeUp"
            style={{
              fontFamily: "Gilroy",
              fontWeight: 800,
              lineHeight: "1.05",
              animationDelay: "0.4s",
            }}
          >
            <span
              className="block 
                text-[45px] 
                sm:text-[70px] 
                md:text-[95px] 
                lg:text-[115px]"
            >
              {slides[current].line2}
            </span>
          </h1>

          {/* BUTTON */}
      <button
  className="mt-8 px-12 py-4 rounded-full shadow-lg transition-all duration-500 animate-fadeUp"
  style={{
    backgroundColor: PRIMARY,
    color: SECONDARY,
    fontFamily: "Gilroy",
    fontWeight: 600,
    fontSize: "14px",
    letterSpacing: "3px",
    textTransform: "uppercase",
    animationDelay: "0.6s",
    boxShadow: "0 0 20px rgba(83,103,92,0.35)",
  }}
  onMouseOver={(e) => {
    e.currentTarget.style.backgroundColor = SECONDARY
    e.currentTarget.style.color = PRIMARY
    e.currentTarget.style.boxShadow = "0 0 34px rgba(248,200,220,0.45)"
    e.currentTarget.style.transform = "translateY(-3px)"
  }}
  onMouseOut={(e) => {
    e.currentTarget.style.backgroundColor = PRIMARY
    e.currentTarget.style.color = SECONDARY
    e.currentTarget.style.boxShadow = "0 0 20px rgba(83,103,92,0.35)"
    e.currentTarget.style.transform = "translateY(0px)"
  }}
>
  Read More
</button>


        </div>
      </div>

      {/* RIGHT BULLETS (hidden on mobile) */}
  {/* RIGHT BULLETS (hidden on mobile) */}
{/* <div
  className="
    hidden sm:flex flex-col gap-6
    absolute right-10 top-1/2 -translate-y-1/2 z-20
  "
>
  {slides.map((_, index) => {
    const isActive = index === current

    return (
      <button
        key={index}
        onClick={() => setCurrent(index)}
        className={`
          w-12 h-12 flex items-center justify-center transition-all duration-300
          ${isActive ? "rounded-full border border-white/40" : "border-none"}
        `}
        style={{
          color: isActive ? "#ffffff" : "rgba(255,255,255,0.45)",
          fontWeight: isActive ? "600" : "400",
          fontSize: "14px",
        }}
      >
        {String(index + 1).padStart(2, "0")}
      </button>
    )
  })}
</div> */}


      {/* ANIMATIONS */}
      <style>{`
        @keyframes fadeUp {
          0% { opacity: 0; transform: translateY(25px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeUp {
          animation: fadeUp 1.2s ease forwards;
        }
      `}</style>

    </section>
  )
}
