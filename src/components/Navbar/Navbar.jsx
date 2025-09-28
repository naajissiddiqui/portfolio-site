import React from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
const Navbar = () => {
  return (
    <nav className="bg-transparent">
      <div className="text-white py-5 flex justify-between items-center">
        <span className="text-[#8245ec] text-xl">My Portfolio</span>
        <div>
          <FaGithub className="text-white mx-2" />
          <FaLinkedin className="text-white mx-2" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
