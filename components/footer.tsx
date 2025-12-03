"use client"

import { useEffect, useState } from "react"
import { MapPin, Phone } from "lucide-react"

export default function Footer() {
  const words = ["Hair", "Style", "Makeup"]
  const [typedIndex, setTypedIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(
      () => setTypedIndex((prev) => (prev + 1) % words.length),
      2200
    )
    return () => clearInterval(interval)
  }, [])

  return (
    <footer
      className="relative bg-cover bg-center bg-no-repeat pt-16 md:pt-20 pb-10 md:pb-12"
      style={{ backgroundImage: "url('/footer_bg.jpg')" }}
    >

      {/* --------------------------------------------------------------
          MOBILE VERSION
      -------------------------------------------------------------- */}
      <div className="md:hidden flex flex-col items-center text-center px-8">

        {/* MOBILE LOGO */}
        <div className="w-[150px] h-auto overflow-hidden flex items-center justify-center mb-6 mt-2">
          <img
            src="/LOGO_NEW.png"
            alt="Anaplak Art & Glam Salon"
            className="w-full h-auto object-contain object-center"
          />
        </div>

        <h2 className="text-[#D2B6B6] text-[22px] tracking-[0.28em] uppercase mb-10 font-semibold">
          Contact Info
        </h2>

        {/* LOCATION */}
     {/* LOCATION (MOBILE) */}
<a
  href="https://www.google.com/maps/search/?api=1&query=Anaplak+Art+and+Glam+Salon+Chennai"
  target="_blank"
  className="flex w-full items-start gap-4 mb-10 cursor-pointer"
>
  <div className="w-12 h-12 rounded-full bg-[#D2B6B6] flex items-center justify-center text-black">
    <MapPin size={22} />
  </div>

  <div className="text-left">
    <p className="text-gray-300 uppercase text-[12px] tracking-[0.22em] mb-1">
      Salon Location:
    </p>

    <p className="text-gray-200 text-[16px] leading-tight">
      No.4B/9, New No. 3, 2nd floor,
    </p>
    <p className="text-gray-200 text-[16px] leading-tight">
      First Main road, 4th block,
    </p>
    <p className="text-gray-200 text-[16px] leading-tight">
      MMDA Colony, Maduravoyal,
    </p>
    <p className="text-gray-200 text-[16px] leading-tight">
      Chennai – 600095
    </p>
  </div>
</a>


        {/* PHONE */}
        <div className="flex w-full items-start gap-4 mb-10">
          <div className="w-12 h-12 rounded-full bg-[#D2B6B6] flex items-center justify-center text-black">
            <Phone size={22} />
          </div>

          <div className="text-left">
            <p className="text-gray-300 uppercase text-[12px] tracking-[0.22em] mb-1">
              Contact:
            </p>
            <p className="text-gray-200 text-[16px] leading-tight">
              +91 98400 88867
            </p>
            <p className="text-gray-200 text-[16px] leading-tight">
              +91 98400 88861
            </p>
          </div>
        </div>

        {/* SOCIAL (MOBILE) */}
        <div className="flex gap-10 text-[#D2B6B6] mt-2 mb-6">
          <a href="https://www.facebook.com/anaplakartandglam" target="_blank">
            <img src="/facebook.png" alt="Facebook" className="w-[28px] h-[28px]" />
          </a>
          <a href="https://www.instagram.com/anaplak_art_and_glam_salon" target="_blank">
            <img src="/instagram.png" alt="Instagram" className="w-[28px] h-[28px]" />
          </a>
          <a href="https://wa.me/919840088867" target="_blank">
            <img src="/whatsapp.png" alt="WhatsApp" className="w-[28px] h-[28px]" />
          </a>
          <a href="https://www.youtube.com/@Anaplakartandglamsalon" target="_blank">
            <img src="/youtube.png" alt="YouTube" className="w-[28px] h-[28px]" />
          </a>
        </div>
      </div>

      {/* --------------------------------------------------------------
          DESKTOP VERSION
      -------------------------------------------------------------- */}
      <div className="hidden md:grid max-w-[1350px] mx-auto px-6 lg:px-10 grid-cols-1 md:grid-cols-4 gap-12 lg:gap-16">

        {/* LOGO */}
        <div className="flex md:block items-center md:items-start">
          <div className="w-[200px] h-auto overflow-hidden flex items-center">
            <img
              src="/LOGO_NEW.png"
              alt="Anaplak Art & Glam Salon"
              className="w-full h-auto object-contain object-center"
            />
          </div>
        </div>

        {/* TEXT */}
        <div className="text-white">
          <h3 className="text-[30px] md:text-[34px] font-semibold uppercase tracking-[0.08em] leading-[1.1]">
            ALWAYS <br /> BE ANAPLAK
          </h3>
        </div>

        {/* EXPLORE */}
        <div>
          <h6 className="uppercase text-[#C8AFAE] tracking-[0.35em] text-[13px] mb-4 font-semibold">
            Explore
          </h6>

          <ul className="space-y-2.5 text-[15px] md:text-[16px] uppercase tracking-[0.18em] text-white/85">
            {["Home", "About", "Blog", "Store", "Contacts"].map((item) => (
              <li key={item}>
                <span className="hover:text-[#C8AFAE] cursor-pointer transition">{item} +</span>
              </li>
            ))}
          </ul>
        </div>

        {/* CONTACT INFO */}
        <div>
          <h6 className="uppercase text-[#C8AFAE] text-[13px] tracking-[0.35em] mb-4 font-semibold">
            Contact Info
          </h6>

          <div className="space-y-6 text-[15px] md:text-[16px]">

           <a
  href="https://www.google.com/maps/search/?api=1&query=Anaplak+Art+and+Glam+Salon+Chennai"
  target="_blank"
  className="flex gap-3 items-start cursor-pointer group"
>
  <div className="w-10 h-10 rounded-full bg-[#C8AFAE] flex items-center justify-center text-black transition group-hover:bg-white">
    <MapPin size={18} />
  </div>

  <div>
    <p className="uppercase text-[11px] text-gray-400 mb-1 tracking-[0.16em]">
      Salon Location:
    </p>

    <p className="text-gray-300 leading-tight group-hover:text-white">
      No.4B/9, New No. 3, 2nd floor,
    </p>
    <p className="text-gray-300 leading-tight group-hover:text-white">
      First Main road, 4th block,
    </p>
    <p className="text-gray-300 leading-tight group-hover:text-white">
      MMDA Colony, Maduravoyal,
    </p>
    <p className="text-gray-300 leading-tight group-hover:text-white">
      Chennai – 600095
    </p>
  </div>
</a>

     

            {/* CONTACT */}
            <div className="flex gap-3 items-start">
              <div className="w-10 h-10 rounded-full bg-[#C8AFAE] flex items-center justify-center text-black">
                <Phone size={18} />
              </div>

              <div>
                <p className="uppercase text-[11px] text-gray-400 mb-1 tracking-[0.16em]">
                  Contact:
                </p>

                <p className="text-gray-300 leading-tight">+91 98400 88867</p>
                <p className="text-gray-300 leading-tight">+91 98400 88861</p>
              </div>
            </div>

            {/* SOCIAL */}
            <div className="flex gap-4 pt-1 text-[#C8AFAE]">
              <a href="https://www.facebook.com/anaplakartandglam" target="_blank">
                <img src="/facebook.png" alt="Facebook" className="w-[20px] h-[20px]" />
              </a>
              <a href="https://www.instagram.com/anaplak_art_and_glam_salon" target="_blank">
                <img src="/instagram.png" alt="Instagram" className="w-[20px] h-[20px]" />
              </a>
              <a href="https://wa.me/919840088867" target="_blank">
                <img src="/whatsapp.png" alt="WhatsApp" className="w-[20px] h-[20px]" />
              </a>
              <a href="https://www.youtube.com/@Anaplakartandglamsalon" target="_blank">
                <img src="/youtube.png" alt="YouTube" className="w-[22px] h-[22px]" />
              </a>
            </div>

          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="w-full border-t border-white/10 mt-10 pt-5">
        <p className="text-center text-gray-400 text-[13px] md:text-[14px] tracking-wide">
          © Anaplak Art & Glam Salon — All Rights Reserved — 2025
        </p>
      </div>
    </footer>
  )
}
