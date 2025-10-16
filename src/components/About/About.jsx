import React from "react";

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
    </section>
  );
};

export default About;
