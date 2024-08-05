import React, { useEffect, useState } from "react";
import "./Navbar.css";
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
import { CiShare2 } from "react-icons/ci";
import { GiThunderball } from "react-icons/gi";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("");

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

  return (


    <div className="navbar">

            <div className="navbar-img">
              
            <GiThunderball className="thunder"/>
              </div>



      <div className="navbar-content">
        <div className="navbar-item">
          <a 
          href="#home" 
          className={activeSection === "home" ? "active" : ""}>
            <FaHome className="nav-icon" />
            <p className="tooltip">Home</p>
          </a>
        </div>
        <div className="navbar-item">
          <a
            href="#about"
            className={activeSection === "about" ? "active" : ""}
          >
            <IoPersonOutline className="nav-icon" />
            <p className="tooltip">About</p>
          </a>
        </div>
        <div className="navbar-item">
          <a
            href="#service"
            className={activeSection === "service" ? "active" : ""}
          >
            <FaBriefcase className="nav-icon" />
            <p className="tooltip">Services</p>
          </a>
        </div>

        <div className="navbar-item">
          <a
            href="#skills"
            className={activeSection === "skills" ? "active" : ""}
          >
            <FaClipboardList className="nav-icon" />
            <p className="tooltip">Skills</p>
          </a>
        </div>

        <div className="navbar-item">
          <a
            href="#experience"
            className={activeSection === "experience" ? "active" : ""}
          >
            <FaBlog className="nav-icon" />
            <p className="tooltip">Experiences</p>
          </a>
        </div>
        <div className="navbar-item">
          <a
            href="#education"
            className={activeSection === "education" ? "active" : ""}
          >
            <FaUserGraduate className="nav-icon" />
            <p className="tooltip">Education</p>
          </a>
        </div>

        <div className="navbar-item">
          <a
            href="#portfolio"
            className={activeSection === "portfolio" ? "active" : ""}
          >
            <GrProjects className="nav-icon" />
            <p className="tooltip">Portfolio</p>
          </a>
        </div>

        <div className="navbar-item">
          <a
            href="#testimonial"
            className={activeSection === "testimonial" ? "active" : ""}
          >
            <TfiCommentsSmiley className="nav-icon" />
            <p className="tooltip">Testimonial</p>
          </a>
        </div>
        <div className="navbar-item">
          <a
            href="#contact"
            className={activeSection === "contact" ? "active" : ""}
          >
            <MdAttachEmail className="nav-icon" />
            <p className="tooltip">Contact</p>
          </a>
        </div>
      </div>

      <div className="navbar-socials">
        <CiShare2 className="social-icon" />
        <div className="shared">
          <a href="https://www.facebook.com/">
            <FaFacebook />
          </a>
          <a href="https://twitter.com/">
            <FaSquareXTwitter />
          </a>
          <a href="https://www.linkedin.com/in/agnes-wendi?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
            <FaLinkedin />
          </a>
          <a href="https://www.instagram.com/">
            <FaInstagramSquare />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
