import React, { useState } from "react";

const testimonials = [
  {
    company: "azfar",
    logo: "kajds",
    quote:
      "hello hello hellohello hello helloh hellohello hello hellohello hello helloh hellohello hello hellohello hello helloh hello",
    name: "Mr Azfar",
    role: "yoyo",
  },
  {
    company: "alam",
    logo: "kasjd",
    quote:
      "hello hello hellohello hello helloh hellohello hello hellohello hello helloh hello",
    name: "sara",
    role: "kasjf",
  },
  {
    company: "haina",
    logo: "lkskd",
    quote:
      "hello hello hellohello hello helloh hellohello hello hellohello hello helloh hellohello hello hellohello hello helloh hellohello hello hellohello hello helloh hello",
    name: "zara",
    role: "kasjdf",
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
      className="flex h-10 w-10 items-center justify-center rounded-full border border-[#e5e7eb] bg-white text-[#374151] transition hover:border-[#7c3aed] hover:text-[#7c3aed] shadow-sm"
      aria-label={isLeft ? "Previous testimonial" : "Next testimonial"}
      onClick={onClick}
      onDoubleClick={onClick}
    >
      <span className="text-lg">{isLeft ? "<" : ">"}</span>
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
    <section className="bg-[#f8f9fc] text-[#111827] px-6 py-24">
      <div className="max-w-6xl mx-auto space-y-14">

        {/* TOP BORDER */}
        <div className="h-px w-full bg-[#e5e7eb]"></div>

        {/* HEADER */}
        <div className="space-y-4 text-center">
          <div className="flex items-center justify-center gap-3 text-sm uppercase tracking-[0.18em] text-[#7c3aed]">
            <span className="h-2 w-2 rounded-full bg-[#7c3aed]"></span>
            <span>{"{04} — Testimonials"}</span>
          </div>

          <div className="space-y-3">
            <h2 className="flex items-center justify-center gap-3 text-[42px] md:text-[56px] font-semibold leading-tight text-[#0f172a]">
              <span>Don't take my word for it</span>
              <StarIcon className="h-8 w-8 text-[#7c3aed]" />
            </h2>

            <div className="flex items-center justify-center gap-2 text-[#7c3aed]">
              <StarIcon className="h-4 w-4" />
              <span className="text-sm font-medium uppercase tracking-wide">
                Take theirs
              </span>
            </div>
          </div>
        </div>

        {/* CARD */}
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-[#e5e7eb] bg-white p-8 md:p-10 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.1)]">
          {/* subtle grid */}
          <div
            className="pointer-events-none absolute inset-0 opacity-30"
            style={{
              backgroundImage:
                "linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />

          {/* soft glow */}
          <div className="pointer-events-none absolute -left-10 -top-10 h-40 w-40 rounded-full bg-[#7c3aed]/10 blur-3xl" />
          <div className="pointer-events-none absolute -right-12 -bottom-16 h-52 w-52 rounded-full bg-[#a78bfa]/20 blur-3xl" />

          <div className="relative flex flex-col gap-8 md:gap-10">

            {/* TOP */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3 text-2xl font-semibold tracking-[0.08em]">
                <span className="h-3 w-3 rounded-full bg-[#111827]"></span>
                <span className="text-[#374151]">{item.logo}</span>
              </div>

              <div className="hidden md:flex items-center gap-3">
                <ArrowButton direction="left" onClick={handlePrev} />
                <ArrowButton direction="right" onClick={handleNext} />
              </div>
            </div>

            {/* QUOTE */}
            <p className="text-xl md:text-2xl leading-relaxed text-[#374151] max-w-4xl">
              {item.quote}
            </p>

            {/* USER */}
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f3f4f6] text-lg font-semibold text-[#111827]">
                {item.name.charAt(0)}
              </div>

              <div className="space-y-1">
                <p className="text-base font-semibold text-[#111827]">
                  {item.name}
                </p>
                <p className="text-sm text-[#6b7280]">
                  {item.role}
                </p>
              </div>
            </div>

            {/* MOBILE BUTTONS */}
            <div className="flex md:hidden items-center gap-3">
              <ArrowButton direction="left" onClick={handlePrev} />
              <ArrowButton direction="right" onClick={handleNext} />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}