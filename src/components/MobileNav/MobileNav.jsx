import React, { useEffect, useState, useRef } from "react";
import "./MobileNav.css";
import {
  FaFacebook,
  FaHome,
  FaInstagramSquare,
  FaLinkedin,
  FaTwitter as FaSquareXTwitter,
} from "react-icons/fa";
import { IoPersonOutline } from "react-icons/io5";
import {
  FaBriefcase,
  FaUserGraduate,
  FaClipboardList,
  FaBlog,
} from "react-icons/fa";
import { GrProjects } from "react-icons/gr";
import { TfiCommentsSmiley } from "react-icons/tfi";
import { MdAttachEmail } from "react-icons/md";
import { IoIosCloseCircle } from "react-icons/io";
import { CiMenuFries } from "react-icons/ci";
import { GiThunderball } from "react-icons/gi";


const MobileNav = () => {
  const [activeSection, setActiveSection] = useState("");
  const [isNavOpen, setIsNavOpen] = useState(false);
  const navRef = useRef(null);

  const handleNavToggle = () => {
    setIsNavOpen((prev) => !prev);
  };

  const handleClickOutside = (event) => {
    if (navRef.current && !navRef.current.contains(event.target)) {
      setIsNavOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (
          scrollPosition > sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveSection(section.getAttribute("id"));
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Add event listener to close menu when clicking outside
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLinkClick = () => {
    setIsNavOpen(false);
  };

  return (
    <div className="mobile-navbar" ref={navRef}>
      <div className="mobile-nav-top">
        <div className="mobile-navbar-img">
        <GiThunderball className='thunder'/>
          <h3>Mr.Kulundu</h3>
        </div>

        <div className="mobile-nav-toggle" onClick={handleNavToggle}>
          {!isNavOpen && <CiMenuFries />}
        </div>
      </div>

      <div className={`mobile-navbar-content ${isNavOpen ? "open" : "closed"}`}>
        {isNavOpen && (
          <div className="close-toggle" onClick={handleNavToggle}>
            <IoIosCloseCircle />
          </div>
        )}
        <div className="mobile-navbar-items">
          {[
            { href: "#home", icon: <FaHome />, label: "Home" },
            { href: "#about", icon: <IoPersonOutline />, label: "About" },
            { href: "#service", icon: <FaBriefcase />, label: "Services" },
            { href: "#skills", icon: <FaClipboardList />, label: "Skills" },
            { href: "#experience", icon: <FaBlog />, label: "Experiences" },
            { href: "#education", icon: <FaUserGraduate />, label: "Education" },
            { href: "#portfolio", icon: <GrProjects />, label: "Portfolio" },
            { href: "#testimonial", icon: <TfiCommentsSmiley />, label: "Testimonial" },
            { href: "#contact", icon: <MdAttachEmail />, label: "Contact" },
          ].map((item) => (
            <div className="mobile-navbar-item" key={item.href}>
              <a
                href={item.href}
                onClick={handleLinkClick}
                className={activeSection === item.label.toLowerCase() ? "active" : ""}
              >
                {item.icon}
                <p className="tool">{item.label}</p>
              </a>
            </div>
          ))}
        </div>

        <div className="mobile-navbar-socials">
          <a href="https://www.facebook.com/">
            <FaFacebook />
          </a>
          <a href="https://twitter.com/">
            <FaSquareXTwitter />
          </a>
          <a href="https://www.instagram.com/">
            <FaInstagramSquare />
          </a>
          <a href="https://www.linkedin.com/">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
