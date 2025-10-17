import React from "react";
import ReactTypingEffect from "react-typing-effect";

const About = () => {
  return (
    <section
      id="about"
      className="flex flex-col justify-center items-center text-center py-20 px-[7vw] md:px-[10vw] lg:px-[20vw] font-sans mt-24 md:mt-32"
    >
      {/* Greeting */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
        Hi, I am
      </h1>

      {/* Name */}
      <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold text-[#8245ec] mt-2 leading-tight">
        Naajis Siddiqui
      </h2>

      {/* Skills heading with typing effect */}
      <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight">
        <span className="text-white">I am a</span>
        <ReactTypingEffect>
          text={[" Full-Stack Developer.", " UI?UX Designer", " Coder."]}
          speed={100}
          eraseSpeed={50}
          typingDelay={500}
          eraseDelay={2000}
          cursorRenderer=
          {(cursor) => <span className="text-[#8245ec]">{cursor}</span>}
        </ReactTypingEffect>
      </h3>
    </section>
  );
};

export default About;
