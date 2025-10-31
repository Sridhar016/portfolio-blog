"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react"; // Add useState and useEffect

const Navbar = () => {
  const router = useRouter();
  const [target, setTarget] = useState(null); // State to track the target section

  // Scroll to the target section after the route change
  useEffect(() => {
    if (target) {
      const element = document.getElementById(target);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
      setTarget(null); // Reset the target
    }
  }, [target]); // Run this effect whenever `target` changes

  const handleClick = (e, target) => {
    e.preventDefault();
    setTarget(target); // Set the target before navigating
    router.push(`/#${target}`); // Navigate to the new route
  };

  return (
    <nav className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-gray-900 bg-opacity-100">
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2 p-8 md:p-12 lg:p-20">
        <Link href="/" className="text-2xl md:text-3xl text-white font-normal">
          WebBlog
        </Link>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            <li key="about">
              <a
                href="#about"
                onClick={(e) => handleClick(e, "about")}
                className="hover:text-slate-200"
              >
                About
              </a>
            </li>
            <li key="projects">
              <a
                href="#projects"
                onClick={(e) => handleClick(e, "projects")}
                className="hover:text-slate-200"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#blog"
                onClick={(e) => handleClick(e, "blog")}
                className="hover:text-slate-200"
              >
                Blog
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
