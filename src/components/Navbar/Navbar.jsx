import React from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
const Navbar = () => {
  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "work", label: "Work" },
    { id: "education", label: "Education" },
  ];
  return (
    <nav className="bg-transparent">
      <div className="text-white py-5 flex justify-between items-center">
        {/* Logo */}
        <div className="text-lg font-semibold cursor-pointer">
          <span className="text-[#8245ec] text-xl">Naajis Siddiqui</span>

          {/* <div>
          <FaGithub className="text-white mx-2" />
          <FaLinkedin className="text-white mx-2" />
        </div> */}
        </div>
        {/* Desktop Menu */}
        <ul className="md:flex space-x-8 text-gray-300">
          {menuItems.map((item) => (
            <li key={item.id} className="">
              <button>{item.label}</button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
