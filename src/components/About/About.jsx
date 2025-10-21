import React from "react";

import { TypeAnimation } from "react-type-animation";
const About = () => {
  return (
    <section
      id="about"
      className="flex flex-col justify-center items-center text-center py-20 px-[7vw] md:px-[10vw] lg:px-[20vw] font-sans mt-24 md:mt-32"
    >
      <div>
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
          <span className="text-white">I am a </span>
          <TypeAnimation
            sequence={[
              "Full-Stack Developer.",
              2000,
              "UI/UX Designer.",
              2000,
              "Coder.",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </h3>

        <p className="text-base sm:text-lg md:text-gray-400 mb-10 mt-8 leading-relaxed">
          I am a full stack developer with no experience. Just kidding! I have
          been honing my skills in web development and design for several years
          now. My passion lies in creating seamless and engaging digital
          experiences that will get me a job maybe. huh...
        </p>
        <a
          href="https://drive.google.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300"
          style={{
            background: "linear-gradient(90deg, #8245ec, #a855f7)",
            boxShadow: "0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec",
          }}
        >
          DOWNLOAD
        </a>
      </div>
    </section>
  );
};

export default About;
