import React, { useEffect } from "react";
import Home from "../../sections/Home/Home";
import "./Main.css";
import About from "./../../sections/About/About";
import Services from "../../sections/Services/Services";
import Experience from "../../sections/Experience/Experience";
import Portfolio from "./../../sections/Portfolio/Portfolio";
import Education from "../../sections/Education/Education";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "./../Navbar/Navbar";
import Testimonial from "../../sections/Testimonial/Testimonial";
import Contact from "../../sections/Contact/Contact";
import Footer from "../Footer/Footer";
import MobileNav from "../MobileNav/MobileNav";
import 'aos/dist/aos.css'
import AOS from 'aos';



const Main = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, delay: 200 });
  }, []);
  


  return (
    <div>
      
      <MobileNav />
      <div className="main">
        <Sidebar />
        <Navbar />
        <div className="main-content">
          <Home />
          <About />
          <Services />
          <Experience />
          <Education />
          <Portfolio />
          <Testimonial />
          <Contact />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Main;
