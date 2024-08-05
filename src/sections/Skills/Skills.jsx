import React from 'react';
import Slider from 'react-slick';
import "./Skills.css";
import { PiGraduationCapLight } from "react-icons/pi";

const skillsData = [
  { src: "https://html.themestransmit.com/html/minfotailwind/assets/img/skill/figma.svg", alt: "Figma", percentage: "90%", name: "Figma" },
  { src: "https://html.themestransmit.com/html/minfotailwind/assets/img/skill/webflow.svg", alt: "Webflow", percentage: "90%", name: "Webflow" },
  { src: "https://html.themestransmit.com/html/minfotailwind/assets/img/skill/tailwind.svg", alt: "Tailwind", percentage: "80%", name: "Tailwind" },
  { src: "https://html.themestransmit.com/html/minfotailwind/assets/img/skill/html.svg", alt: "HTML", percentage: "80%", name: "HTML" },
  { src: "https://html.themestransmit.com/html/minfotailwind/assets/img/skill/css.svg", alt: "CSS3", percentage: "85%", name: "CSS3" },
  { src: "https://html.themestransmit.com/html/minfotailwind/assets/img/skill/js.svg", alt: "JavaScript", percentage: "90%", name: "JavaScript" },
  { src: "https://html.themestransmit.com/html/minfotailwind/assets/img/skill/jquery.svg", alt: "jQuery", percentage: "95%", name: "jQuery" }
];

const Skills = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true, /* This enables the overlapping effect */
    centerPadding: '0', /* Remove any padding around centered item */
    arrows: true, /* Show navigation arrows */
    rows: 1, /* Ensure only one row of items is displayed */
  };

  return (
    <section className="skills" id='skills'>
      <div className="skills-header">
        <PiGraduationCapLight className="nav-icon" />
        <p>My Expertise</p>
      </div>

      <div className="skills-desc">
        <h2>
          My <span>Advantages</span>
        </h2>
        <p>
          I design products that are more than pretty. I make them shippable and usable.
        </p>
      </div>

      <div className="skills-carousel">
        <Slider {...settings}>
          {skillsData.map((skill, index) => (
            <div className="skill-item" key={index}>
              <img src={skill.src} alt={skill.alt} />
              <h3>{skill.percentage}</h3>
              <p>{skill.name}</p>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Skills;
