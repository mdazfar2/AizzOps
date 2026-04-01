import React from "react";
import { ArrowRight, Heart, Star } from "lucide-react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-[#fdfbff] text-[#1a1625] overflow-hidden px-6"
    >
      <div className="relative z-10 max-w-6xl mx-auto pt-32 pb-20">
        {/* Badge */}
        <div className="flex items-center gap-4 bg-white border border-[#f1e6ff] backdrop-blur-md px-6 py-3 rounded-full w-fit shadow-sm">
          {/* Avatars */}
          <div className="flex -space-x-4">
            {["220453", "415829", "1181690", "697509", "1704488"].map(
              (id, i) => (
                <img
                  key={i}
                  src={`https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg`}
                  alt="avatar"
                  className="w-10 h-10 rounded-full border-2 border-white object-cover"
                />
              )
            )}
          </div>

          {/* Stars + Text (stacked) */}
          <div className="flex flex-col justify-center text-[#ff7b00] leading-tight">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#ff3b8f] text-[#ff3b8f]" />
              ))}
            </div>
            <span className="text-sm font-medium text-[#3b324a] mt-1">
              Trusted by CEOs and Founders
            </span>
          </div>
        </div>

        {/* Heading */}
        <div className="mt-12 max-w-4xl">
          <h1 className="text-[3rem] md:text-[4.8rem] font-extrabold leading-[1.05] tracking-tight">
            <span className="block text-[#1a1625]">Building systems</span>
            <span className="block bg-gradient-to-r from-[#ff7b00] via-[#ff3b8f] to-[#19c3ff] bg-clip-text text-transparent">
              that scale and perform
            </span>
          </h1>
        </div>

        {/* Description */}
        <div className="mt-8 text-lg md:text-xl text-[#4a445a] max-w-3xl space-y-4">
          <p>
            I'm Azfar, a DevOps-focused engineer building scalable systems with AI, cloud, and full-stack development.
          </p>

          <p className="flex items-center gap-2 text-[#1a1625]">
            <Heart className="w-5 h-5 text-[#ff3b8f]" />
            <span>
              I contribute to open source and help maintain high code standards
            </span>
          </p>
        </div>

        {/* Buttons */}
        <div className="mt-10 flex items-center gap-6">
          <a
            href="#contact"
            className="px-8 py-4 rounded-lg bg-gradient-to-r from-[#ff7b00] via-[#ff3b8f] to-[#19c3ff] text-[#0c0a12] font-semibold shadow-[0_12px_35px_rgba(255,59,143,0.2)] transition hover:scale-[1.03]"
          >
            Get in touch
          </a>

          <Link
            to="/projects"
            className="flex items-center gap-2 text-[#ff3b8f] font-medium transition hover:text-[#ff7b00]"
          >
            Join Community
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}