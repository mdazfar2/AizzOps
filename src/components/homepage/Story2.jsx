import React from "react";
import TextRevealByWord from "./TextRevealByWord";

export default function Story2() {
  const text = `I have built and deployed real-world applications using DevOps, cloud, and full-stack technologies, focusing on scalability and performance. I actively contribute to open source, review GitHub PRs, and help improve code quality. My focus on building reliable and production-ready systems is what drives me every day.`;

  return (
    <section id="story-2" className="bg-[#fafafa] text-[#1a1a1a]">
      <TextRevealByWord text={text} />
    </section>
  );
}
