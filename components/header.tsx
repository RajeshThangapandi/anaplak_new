"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import {
  Menu,
  X,
  ArrowRight,
  Facebook,
  Instagram,
  Phone,
  MessageCircle,
} from "lucide-react"

export default function Header() {
  const [isSticky, setSticky] = useState(false)
  const [open, setOpen] = useState(false)

  const PRIMARY = "#53675C"
  const TOPBAR_HEIGHT = 46

  useEffect(() => {
    const onScroll = () => setSticky(window.scrollY > 60)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <>
      {/* --------------------------------------------------
           TOP BAR
      -------------------------------------------------- */}
      <div
        className="
          flex w-full items-center justify-center
          border-b border-white/10 backdrop-blur-xl
        "
        style={{
          background: `${PRIMARY}ee`,
          height: TOPBAR_HEIGHT,
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 50,
        }}
      >
        <div className="w-full max-w-6xl px-4 md:px-10 flex justify-between items-center">
          {/* Mobile Number */}
          <div className="flex md:hidden items-center gap-2 text-white text-xs tracking-wide">
            <Phone size={15} />
            <span>+91-98400&nbsp;88867</span>
          </div>

          {/* Desktop Numbers */}
          <div className="hidden md:flex items-center gap-6 text-white text-sm tracking-wide">
            <span className="flex items-center gap-1">
              <Phone size={15} />
              +91-98400&nbsp;88867
            </span>

            <span className="flex items-center gap-1">
              <Phone size={15} />
              +91-98400&nbsp;88861
            </span>
          </div>

          {/* Right Icons */}
          <div className="flex items-center gap-4 md:gap-6 text-white">
            <a
              href="https://www.instagram.com/anaplak_art_and_glam_salon?igsh=MW9vcjV3cDl3dGFvZg%3D%3D"
              target="_blank"
              className="hover:opacity-80 transition"
            >
              <img src="/instagram.png" alt="Instagram" className="w-[18px] h-[18px]" />
              {/* <Instagram size={18} className="md:hidden" />
              <Instagram size={20} className="hidden md:block" /> */}
            </a>

            <a
              href="https://www.facebook.com/anaplakartandglam"
              target="_blank"
              className="hover:opacity-80 transition"
            >
              <img src="/facebook.png" alt="Facebook" className="w-[18px] h-[18px]" />
              {/* <Facebook size={18} className="md:hidden" />
              <Facebook size={20} className="hidden md:block" /> */}
            </a>

            <a
              href="https://wa.me/919840088867"
              target="_blank"
              className="hover:opacity-80 transition"
            >
              <img src="/whatsapp.png" alt="Whatsapp" className="w-[18px] h-[18px]" />
              
            </a>
            <a
              href="https://wa.me/919840088867"
              target="_blank"
              className="hover:opacity-80 transition"
            >
              <img src="/youtube.png" alt="YouTube" className="w-[18px] h-[18px]" />
              
            </a>
          </div>
        </div>
      </div>

      {/* --------------------------------------------------
           MAIN NAVBAR
      -------------------------------------------------- */}
      <header
        className={`
          fixed left-0 w-full z-[60]
          transition-all duration-500
          ${isSticky ? "shadow-lg" : ""}
        `}
        style={{
          top: isSticky ? 0 : TOPBAR_HEIGHT,
          background: isSticky ? "rgba(0,0,0,0.25)" : "transparent",
          backdropFilter: isSticky ? "blur(18px)" : "none",
          borderBottom: isSticky ? "1px solid rgba(255,255,255,0.15)" : "none",
        }}
      >
        <div className="w-full max-w-6xl mx-auto px-4 md:px-10 py-4 md:py-5 flex justify-between items-center">
          
          {/* Desktop Logo (with wrapper fix) */}
          <Link href="/" className="flex items-center gap-3 md:gap-4">
            <div className="w-[150px] md:w-[200px] h-auto overflow-hidden flex items-center">
              <img
                src="/LOGO_NEW.png"
                alt="Anaplak Logo"
                className="w-full h-auto object-contain object-center"
              />
            </div>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex gap-10 items-center">
            {["Home", "About", "Blog", "Store", "Contacts"].map((item) => (
              <Link
                key={item}
                href="#"
                className="text-white/80 text-[12px] tracking-[3px] uppercase hover:text-[#F8C8DC] transition"
              >
                {item}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-6">
            <Link
              href="https://www.welns.io/product/booking/WFRCHN984305/Anaplak?bk_src=GMAPS110"
              target="_blank"
            >
              <button
                className="px-8 py-3 rounded-md text-white text-xs tracking-wider uppercase flex items-center gap-2"
                style={{ backgroundColor: PRIMARY }}
              >
                Book An Appointment <ArrowRight size={14} />
              </button>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button onClick={() => setOpen(true)} className="lg:hidden text-white">
            <Menu size={26} />
          </button>
        </div>
      </header>

      {/* --------------------------------------------------
           MOBILE MENU
      -------------------------------------------------- */}
{/* MOBILE MENU */}
<div
  className={`
    fixed top-0 right-0 w-full h-full bg-[#0F0F0F]
    p-8 flex flex-col gap-8 z-[70]
    transition-transform duration-[650ms] ease-[cubic-bezier(0.77,0,0.175,1)]
    ${open ? "translate-x-0" : "translate-x-full"}
  `}
>
  <button
    onClick={() => setOpen(false)}
    className="absolute top-6 right-6 text-white"
  >
    <X size={26} />
  </button>

  {/* Mobile Logo */}
  <div className="flex items-center gap-4 mt-6">
    <div className="w-[150px] h-auto overflow-hidden flex items-center">
      <img
        src="/LOGO_NEW.png"
        alt="Anaplak Logo"
        className="w-full h-auto object-contain object-center"
      />
    </div>
  </div>

  {/* Links */}
  <div className="flex flex-col gap-6 mt-8">
    {["Home", "About", "Blog", "Store", "Contacts"].map((item) => (
      <Link
        key={item}
        href="#"
        className="text-white/90 uppercase tracking-[4px] text-lg hover:text-[#F8C8DC] transition"
      >
        {item}
      </Link>
    ))}
  </div>

  {/* 📌 MOBILE CTA BUTTON INSERTED HERE */}
  <div className="mt-4">
    <Link
      href="https://www.welns.io/product/booking/WFRCHN984305/Anaplak?bk_src=GMAPS110"
      target="_blank"
    >
      <button
        className="w-full py-3 rounded-md text-white text-sm tracking-wider uppercase flex items-center justify-center gap-2"
        style={{ backgroundColor: PRIMARY }}
      >
        Book An Appointment <ArrowRight size={14} />
      </button>
    </Link>
  </div>

  {/* Social Icons */}
  <div className="flex gap-6 text-white mt-8">
    <a href="https://www.instagram.com/anaplak_art_and_glam_salon?igsh=MW9vcjV3cDl3dGFvZg%3D%3D" target="_blank">
     <img src="/instagram.png" alt="Instagram" className="w-[24px] h-[24px]" />
    </a>
    <a href="https://www.facebook.com/anaplakartandglam" target="_blank">
       <img src="/facebook.png" alt="Facebook" className="w-[24px] h-[24px]" />
    </a>
    <a href="https://wa.me/919840088867" target="_blank">
       <img src="/whatsapp.png" alt="Whatsapp" className="w-[24px] h-[24px]" />
    </a>
    <a
              href="https://wa.me/919840088867"
              target="_blank"
              className="hover:opacity-80 transition"
            >
              <img src="/youtube.png" alt="YouTube" className="w-[24px] h-[24px]" />
              
            </a>
  </div>
</div>

    </>
  )
}
