"use client"

import { useEffect, useState } from "react"
import Header from "@/components/header"
import HeroSlider from "@/components/hero-slider"
import About from "@/components/about"
import Pricing from "@/components/pricing"
import Services from "@/components/services"
import CircularSlider from "@/components/circular-slider"
import Team from "@/components/team"
import Testimonials from "@/components/testimonials"
import Features from "@/components/features"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import VideoPlayerModal from "@/components/video-player-modal"
import VideoParallax from "@/components/video_parrlex"

export default function Home() {
  const [isVideoOpen, setIsVideoOpen] = useState(false)

  useEffect(() => {
    // Initialize parallax and animations
    const handleScroll = () => {
      const scrolled = window.scrollY

      // Parallax effect for elements with data-parallax attribute
      document.querySelectorAll("[data-parallax]").forEach((element) => {
        const speed = Number.parseFloat((element as HTMLElement).dataset.parallax || "0.5")
        const offset = scrolled * speed
        ;(element as HTMLElement).style.transform = `translateY(${offset}px)`
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <main className="overflow-hidden">
      <Header onVideoClick={() => setIsVideoOpen(true)} />
      <HeroSlider />
      <About />
      {/* <Pricing /> */}
   
 <VideoParallax/>
    {/* <Services /> */}
        <Features />
      <CircularSlider />
 

  
     <Team />
            <Testimonials />
      {/* <Contact /> */}
      <Footer />
     
    </main>
  )
}
