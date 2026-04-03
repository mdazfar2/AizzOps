import React, { useState } from "react";

const testimonials = [
  {
    image: "assets/img/siddheya.webp", 
    quote:
      "I had the pleasure of working with Azfar on HelpOps at GSSoC. He showed strong leadership, provided clear guidance, maintained high code standards, and created a collaborative, supportive environment for contributors.",
    name: "Siddheya Kulkarni",
    role: "Software Eng. at Capgemini",
  },
  {
    image: "assets/img/mayank-image.webp",
    quote:
      "During our internship at LinuxWorld Informatics, I collaborated closely with Azfar. He demonstrated strong dedication, responsibility, and a relentless work ethic, along with impressive expertise in Ansible.",
    name: "Mayank Sharma",
    role: "DevOps Eng.",
  },
  {
    image: "assets/img/vansh.webp",
    quote:
      "I had the privilege of working with Azfar, who stood out for his strong commitment, proactive mindset, and clear guidance. His enthusiasm and expertise made complex tasks easier and greatly contributed to overall project success.",
    name: "Vansh Chaurasiya",
    role: "SDE at GoComet",
  },
];

function StarIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 16 16" className={className} fill="currentColor">
      <path d="M8 1.1 9.7 6l4.8.7-3.6 3 1 4.9L8 12.2 4.1 14.6 5.1 9.7 1.6 6.7 6.4 6Z" />
    </svg>
  );
}

function ArrowButton({ direction = "left", onClick }) {
  const isLeft = direction === "left";
  return (
    <button
      type="button"
      className="flex h-11 w-11 items-center justify-center rounded-full border border-[#e5e7eb] bg-white text-[#6b7280] shadow-[0_4px_12px_rgba(0,0,0,0.06)] transition hover:border-[#d1d5db] hover:text-[#111827] active:scale-95"
      aria-label={isLeft ? "Previous testimonial" : "Next testimonial"}
      onClick={onClick}
    >
      <svg
        aria-hidden
        viewBox="0 0 24 24"
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {isLeft ? (
          <path d="M15 6 9 12l6 6" />
        ) : (
          <path d="m9 6 6 6-6 6" />
        )}
      </svg>
    </button>
  );
}

export default function Testimonials() {
  const [active, setActive] = useState(0);

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const item = testimonials[active];

  return (
    <section id="testimonials" className="bg-[#f8f9fc] text-[#0f172a] px-6 md:px-10 lg:px-16 py-20 md:py-24 font-sans">
      <div className="max-w-6xl mx-auto space-y-12">

        <div className="h-px w-full bg-[#e5e7eb]" />

        {/* HEADER */}
        <div className="space-y-5 text-center">
          <div className="flex items-center justify-center gap-3 text-[11px] md:text-xs uppercase tracking-[0.28em] text-[#7c3aed] font-semibold">
            <span className="h-1.5 w-1.5 rounded-full bg-[#7c3aed]"></span>
            <span>{"{04} — Testimonials"}</span>
          </div>

          <div className="space-y-3">
            <h2 className="flex flex-wrap items-center justify-center gap-2 text-[34px] md:text-[56px] leading-[1.06] font-semibold tracking-tight text-[#0b1224]">
              <span>Don't take my word for it</span>
              <StarIcon className="h-7 w-7 md:h-8 md:w-8 text-[#7c3aed]" />
            </h2>
            <div className="flex items-center justify-center gap-2 text-[#7c3aed] text-[11px] md:text-xs font-semibold uppercase tracking-[0.32em]">
              <StarIcon className="h-4 w-4" />
              <span>Take theirs</span>
            </div>
          </div>
        </div>

        {/* COMPACT CARD */}
        <div className="relative mx-auto max-w-3xl overflow-hidden rounded-[2rem] border border-[#e5e7eb] bg-white p-6 md:p-10 shadow-[0_15px_40px_-15px_rgba(0,0,0,0.08)]">
          
          {/* Subtle Grid Pattern */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />

          <div className="relative flex flex-col gap-6">

            {/* TOP BAR: Quote Icon & Navigation */}
            <div className="flex items-center justify-between">
              <div className="text-[#7c3aed] opacity-10">
                <svg width="35" height="28" viewBox="0 0 45 36" fill="currentColor">
                  <path d="M13.125 0C5.875 6.75 0 15.75 0 24.75C0 31.5 4.5 36 10.125 36C15.75 36 19.125 32.625 19.125 28.125C19.125 23.625 15.75 21.375 12.375 21.375C11.25 21.375 10.125 21.375 9 21.375C10.125 15.75 14.625 10.125 18 6.75L13.125 0ZM39.375 0C32.125 6.75 26.25 15.75 26.25 24.75C26.25 31.5 30.75 36 36.375 36C42 36 45.375 32.625 45.375 28.125C45.375 23.625 42 21.375 38.625 21.375C37.5 21.375 36.375 21.375 35.25 21.375C36.375 15.75 40.875 10.125 44.25 6.75L39.375 0Z" />
                </svg>
              </div>

              <div className="flex items-center gap-2">
                <ArrowButton direction="left" onClick={handlePrev} />
                <ArrowButton direction="right" onClick={handleNext} />
              </div>
            </div>

            {/* QUOTE TEXT */}
            <div className="min-h-[100px]">
                <p className="text-xl md:text-2xl font-medium leading-relaxed text-[#374151]">
                "{item.quote}"
                </p>
            </div>

            {/* USER INFO SECTION */}
            <div className="flex items-center gap-4 pt-4 border-t border-gray-50">
              {/* User Image */}
              <div className="h-12 w-12 flex-shrink-0 overflow-hidden rounded-full border border-gray-100 shadow-sm bg-[#f3f4f6]">
                  <img 
                      src={item.image} 
                      alt={item.name} 
                      className="h-full w-full object-cover"
                      onError={(e) => { e.target.src = `https://ui-avatars.com/api/?name=${item.name}&background=7c3aed&color=fff`; }}
                  />
              </div>

              <div className="space-y-0.5">
                <p className="text-base font-bold text-[#111827]">
                  {item.name}
                </p>
                <p className="text-xs font-semibold text-[#4b5563] tracking-wide">
                  {item.role}
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}