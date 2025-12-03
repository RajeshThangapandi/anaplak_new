"use client"

import Masonry from "react-masonry-css"

export default function Features() {
  const items = [
    { title: "", image: "/gallery1.JPG" },         // 1
    { title: "", image: "/gallery2.JPG" },               // 2
    { title: "", image: "/gallery3.JPG" },           // 3
    { title: "", image: "/gallery4.JPG" },                  // 4
    { title: "", image: "/gallery5.JPG" },           // 5
    { title: "", image: "/gallery6.JPG" },                   // 6 (LAST)
  ]

  const breakpoints = {
    default: 3,
    1024: 2,
    640: 1,
  }

  return (
    <section className="py-20 bg-black">
      <div className="max-w-[1400px] mx-auto px-4">

        <div className="text-center mb-16">
          <p className="text-[#C8AFAE] text-xs uppercase tracking-[0.3em] mb-3">
            Unique Beauty Needs
          </p>

          <h2 className="text-4xl md:text-5xl font-semibold text-white max-w-3xl mx-auto">
            Transform your style with professional hair services
          </h2>

          <p className="text-gray-400 max-w-xl mx-auto mt-4">
            that highlight your natural beauty while keeping your hair strong healthy
          </p>
        </div>

        {/* MASONRY GRID */}
        <Masonry
          breakpointCols={breakpoints}
          className="flex gap-6"
          columnClassName="masonry-column"
        >
          {items.map((item, i) => (
            <div key={i} className="mb-6 overflow-hidden rounded">
 <div key={i} className="mb-6 overflow-hidden rounded">
  <img
    src={item.image}
    className={`
      w-full object-cover 
      ${i === 0 ? "h-[380px]" : ""}
      ${i === 1 ? "h-[480px]" : ""}
      ${i === 2 ? "h-[380px]" : ""}
      ${i === 3 ? "h-[480px]" : ""}
      ${i === 4 ? "h-[380px]" : ""}
      ${i === 5 ? "h-[480px]" : ""}
      hover:scale-[1.03] transition
    `}
  />
</div>


{/* 
              <p className="text-white text-[11px] uppercase tracking-widest mt-2 pl-1">
                {item.title}
              </p> */}
            </div>
          ))}
        </Masonry>

      </div>
    </section>
  )
}
