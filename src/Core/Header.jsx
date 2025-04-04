import { Twirl as Hamburger } from 'hamburger-react'
import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutDropDownOpen, setAboutDropDownOpen] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const dropdownRef = useRef(null);
  const location = useLocation();
  const isActive = (path) => {
    // First check for direct path match
    if (location.pathname === path) {
      return true;
    }
    // Then find the nav item with this path
    const navItem = navLinks.find(link => link.to === path);
    // If nav item has dropdown, check if current path is in the dropdown
    if (navItem && navItem.dropdown) {
      return navItem.dropdown.some(item => location.pathname === item.to);
    }
    return false;
  };
  const navLinks = [
    { to: "/", label: "Home" },
    {
      to: "/about",
      label: "About Journal",
      dropdown: [
        {
          to: "/about",
          label: "About ",
        },
        {
          to: "/aim-and-scope",
          label: "Aim and Scope",
        },
        {
          to: "/editorial-board",
          label: "Editorial Board",
        },
        {
          to: "/issues",
          label: "Issues",
        },
        {
          to: "/author-guidelines",
          label: "Author Guidelines",
        },
        {
          to: "/copyrights",
          label: "Copyrights",
        },
      ],
    },
    {
      to: " ",
      label: "Overview",
      dropdown: [
        {
          to: "/Peer-Review-Process",
          label: "Peer Review process",

        },
        {
          to: "/Publication-ethics",
          label: "Publication Ethics",

        },
        {
          to: "/abstracting-and-indexing",
          label: "Abstracting and Indexing",

        },
        {
          to: "/article-processing",
          label: "Article Processing",

        },

      ],
    },
    {
      to: "",
      label: "Policy",
      dropdown: [
        {
          to: "/plagiarism",
          label: "Plagiarism",

        },
        {
          to: "/malpractice",
          label: "Malpractice",

        },
        {
          to: "/correction",
          label: "Corretion",

        },
        {
          to: "/publication-policy",
          label: "Publication Rights",

        },

      ],
    },
    { to: "/contact", label: "Contact" },
  ];
  const toggleDropdown = (label) => {
    setAboutDropDownOpen(aboutDropDownOpen === label ? null : label);
  };
  useEffect;

  const handleMouseEnter = (category) => {
    setHoveredCategory(category);
  };

  const handleMouseLeave = () => {
    setHoveredCategory(null);
  };

  return (
    <>
      <section className="bg-[#8F3300] md:hidden block border-t-4 border-t-[#CB6527]">
        <div className="max-w-[90rem] mx-auto md:px-5 px-3   bg-[#8F3300] ">
          <div className="flex items-center justify-between   lg:gap-0  gap-5  ">
            <Link to="/">
              <div className="bg-white p-5   top-0   text-[#8F3300] md:flex justify-center items-center font-bold md:hidden block">
                IJANR
              </div>
            </Link>
            <div className="md:block hidden xl:text-2xl text-xl merry">
              International Journal of Advanced Trends in Robotics and Automation
            </div>
            <div>
            </div>
            <div className={`md:hidden block   ${menuOpen ? "z-50" : ""}`}>
              <Hamburger toggled={menuOpen} toggle={setMenuOpen} />
            </div>
          </div>
        </div>
      </section>
      {/* <div className={` ${menuOpen ? "" : ""}`}>
        {menuOpen && (
          <div className=" flex flex-col items-center space-y-4 w-full text-center bg-white py-2 shadow-lg">
            {navLinks.map(
              (link) =>
                !link.desktopOnly && (
                  <div key={link.to} to={link.to} className="relative   ">
                    <Link onClick={() =>  link.dropdown && toggleDropdown(link.label) }
                      className="text-black " >
                      {link.label}
                    </Link>
                    {link.dropdown && aboutDropDownOpen === link.label && (
                      <div className="     mt-3   bg-white   text-black border-gray-200 z-10 ">
                        {link.dropdown.map((dropdownlink) => (
                          <Link
                            key={dropdownlink.to}
                            to={dropdownlink.to}
                            className="block px-4 py-2 text-black hover:bg-gray-100"
                          >
                            {dropdownlink.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                )
            )}
          </div>
        )}
      </div> */}
      <section className={`md:bg-[#8F3300] border-[#CB6527] md:border-t-8  fixed top-0 right-0  w-64    z-40      ${menuOpen ? "translate-x-0  duration-500 " : "translate-x-full   "
        } md:block md:relative md:w-auto md:translate-x-0  `}>
        <header className="max-w-[90rem] mx-auto px-5 bg-[#8F3300] md:h-auto h-screen ">
          <div className="flex   md:justify-between items-center   relative">
            <div className="bg-white py-4  px-7 text-[#8F3300] md:flex justify-center md:text-xl   items-center font-bold md:block hidden">
              IJANR
            </div>
            <div>
            </div>
            <nav ref={dropdownRef}>
              <div className={`space-x-1 md:block max-w-[65rem] mx-auto md:pt-0 pt-10   ${menuOpen ? "flex flex-col gap-4" : " "}`}>
                {navLinks.map((link) => (
                  <div key={link.to} className="  inline-block group relative"
                    // onMouseEnter={() => handleMouseEnter(link.label)}
                    // onMouseLeave={handleMouseLeave}
                    onMouseEnter={() => window.innerWidth >= 768 && handleMouseEnter(link.label)}
                    onMouseLeave={() => window.innerWidth >= 768 && handleMouseLeave()}>
                    <Link to={link.to}
                      className={`  text-white   p-2 flex lg:w-[144px]  transition-all duration-300 ease-in-out     lg:text-base md:text-sm md:justify-center items-center    gap-2   ${link.label !== 'Contact' ? 'md:border-r border-[#CB6527]' : ''} ${isActive(link.to) || hoveredCategory === link.label ? '  text-[#3E8000] md:text-whit' : ' '} `}
                      onClick={(e) => {
                        if (link.dropdown) {
                          e.preventDefault();
                          setHoveredCategory((prev) => (prev === link.label ? null : link.label));
                        } else {
                          setMenuOpen(false);
                        }
                      }}>
                      {link.label}
                      {link.dropdown && (
                        <i className={`fi fi-rs-angle-small-down flex items-center  transition-all duration-300 ease-in-out  text-white ${hoveredCategory === link.label ? '  text-white rotate-180 duration-100' : ' '} `}></i>
                      )}
                    </Link>
                    {hoveredCategory === link.label && link.dropdown && (
                      <div className="md:absolute left-0 top-full   w-52 md:bg-white   md:border-[#CB6527] border-white   transition-all duration-300 ease-in-out opacity-100 scale-y-100 origin-top  grid md:grid-cols-1 border p-3 z-10">
                        {link.dropdown.map((dropdownlink) => (
                          <Link
                            key={dropdownlink.to}
                            to={dropdownlink.to}
                            className="block md:px-4 py-2 md:text-[#8F3300]  md:text-start  md:text-base text-sm  underline underline-offset-2 text-white"
                            onClick={() => {
                              setHoveredCategory(null);
                              setMenuOpen(false);
                            }}
                          >
                            {dropdownlink.label}
                          </Link>
                        ))}
                      </div>
                    )}

                  </div>
                ))}
              </div>
            </nav>
          </div>
        </header>
      </section>
    </>
  );
};

export default Header;
