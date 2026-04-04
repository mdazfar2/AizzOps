import React from "react";
import TextRevealByWord from "./TextRevealByWord";

export default function Story() {
  const text = `In my second year of engineering (2022), I learned DevOps and cloud with guidance from my seniors. In my third year, inspired by my hostel mates, I started full-stack development. By fourth year, I explored AI and began combining DevOps, full-stack, and AI to build real-world, scalable systems.`;

  return (
    <section id="story" className="bg-[#fafafa] text-[#1a1a1a]">
      <TextRevealByWord text={text} />
    </section>
  );
}
