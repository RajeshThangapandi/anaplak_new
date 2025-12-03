"use client"

import { useEffect, useRef } from "react"

export default function CircleSection() {
  const innerTextRef = useRef<HTMLDivElement>(null)
  const outerTextRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY

      if (innerTextRef.current)
        innerTextRef.current.style.transform = `translate(-50%, -50%) rotate(${y * 0.12}deg)`

      if (outerTextRef.current)
        outerTextRef.current.style.transform = `translate(-50%, -50%) rotate(${y * -0.06}deg)`
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section className="relative w-full min-h-screen bg-[#0E0E0E] overflow-hidden flex items-center justify-center py-24 md:py-32">

      {/* LEFT/RIGHT IMAGES — HIDDEN ON MOBILE */}
      <div className="absolute left-[2%] top-[18%] hidden lg:block">
        <div className="w-[260px] h-[260px] border border-white/10 rounded-full flex items-center justify-center">
          <img src="/circle_l-500x500.jpg" className="w-[210px] h-[210px] rounded-full object-cover" />
        </div>
      </div>

      <div className="absolute right-[2%] top-[58%] hidden lg:block">
        <div className="w-[260px] h-[260px] border border-white/10 rounded-full flex items-center justify-center">
          <img src="/circle_r.jpg" className="w-[210px] h-[210px] rounded-full object-cover" />
        </div>
      </div>

      {/* MAIN CIRCLE WRAPPER */}
      <div
        className="
          relative 
          w-[880px] h-[880px]      /* DESKTOP ORIGINAL — DO NOT CHANGE */
          lg:w-[880px] lg:h-[880px] /* Keep desktop exact */

          md:w-[500px] md:h-[500px]
          sm:w-[340px] sm:h-[340px]
          xs:w-[260px] xs:h-[260px]

          flex items-center justify-center
        "
      >

        {/* CENTER IMAGE — Smaller ONLY on mobile */}
        <div
          className="
            absolute rounded-full overflow-hidden z-[5]
            w-[380px] h-[380px]       /* desktop exact */
            lg:w-[380px] lg:h-[380px]

            md:w-[220px] md:h-[220px]
            sm:w-[150px] sm:h-[150px]
            xs:w-[120px] xs:h-[120px]
          "
        >
          <img src="/a.png" className="w-full h-full object-cover" />
        </div>

        {/* INNER RING — DESKTOP SAME */}
        <div
          ref={innerTextRef}
          className="absolute top-1/2 left-1/2 z-[4]"
          style={{ transform: "translate(-50%, -50%)" }}
        >
          <svg
            className="
              w-[760px] h-[760px]      /* desktop exact */
              lg:w-[760px] lg:h-[760px]

              md:w-[430px] md:h-[430px]
              sm:w-[290px] sm:h-[290px]
              xs:w-[220px] xs:h-[220px]
            "
            viewBox="0 0 760 760"
          >
            <defs>
              <path id="innerCircle" d="M 380 130 A 250 250 0 1 1 379.9 130" />
            </defs>

            <text
              className="
                fill-[#E7D9CD] font-bold uppercase
                text-[72px]            /* desktop exact */
                lg:text-[72px]

                md:text-[38px]
                sm:text-[6px]
                xs:text-[20px]
                tracking-[4px]
              "
            >
              <textPath href="#innerCircle">
                HAIRSTYLE MASTERS — HAIRSTYLE MASTERS —
              </textPath>
            </text>
          </svg>
        </div>

        {/* OUTER RING — DESKTOP ORIGINAL SENTENCE KEPT */}
        <div
          ref={outerTextRef}
          className="absolute top-1/2 left-1/2 opacity-[0.35]"
          style={{ transform: "translate(-50%, -50%)" }}
        >
          <svg
            className="
              w-[820px] h-[820px]      /* desktop exact */
              lg:w-[820px] lg:h-[820px]

              md:w-[520px] md:h-[520px]
              sm:w-[360px] sm:h-[360px]
              xs:w-[280px] xs:h-[280px]
            "
            viewBox="0 0 820 820"
          >
            <defs>
              <path id="outerCircle" d="M 410 80 A 330 330 0 1 1 409.9 80" />
            </defs>

            <text
              className="
                fill-white uppercase font-semibold
                text-[42px]             /* desktop exact */
                lg:text-[42px]

                md:text-[22px]
                sm:text-[15px]
                xs:text-[12px]
                tracking-[3px]
              "
            >
              <textPath href="#outerCircle">

                {/* DESKTOP — ORIGINAL TEXT (unchanged) */}
                <tspan className="hidden md:inline">
                  WE COMBINE ARTISTRY, MODERN INNOVATION, AND TRADITIONAL SKILLS TO DELIVER LUXURY HAIRCARE, BRIDAL STYLING & PERSONALISED BEAUTY SERVICES —
                </tspan>

                {/* MOBILE — SHORT VERSION */}
                <tspan className="md:hidden sm:text-[8px]">
                  ARTISTRY • INNOVATION • LUXURY HAIRCARE • STYLE —
                </tspan>

                {/* EXTRA SMALL */}
                <tspan className="sm:hidden xs:inline">
                  ARTISTRY • STYLE —
                </tspan>

              </textPath>
            </text>
          </svg>
        </div>

      </div>
    </section>
  )
}
