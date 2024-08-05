import { IoBriefcaseOutline } from "react-icons/io5";
import "./Services.css";
import { AiOutlineKubernetes } from "react-icons/ai";
import { AiOutlineGitlab } from "react-icons/ai";
import { AiOutlineDropbox } from "react-icons/ai";
import { AiOutlineDeploymentUnit } from "react-icons/ai";
import Slider from "react-slick";
import { PiGraduationCapLight } from "react-icons/pi";

const skillsData = [
  {
    src: "https://html.themestransmit.com/html/minfotailwind/assets/img/skill/figma.svg",
    alt: "Figma",
    percentage: "90%",
    name: "Figma",
  },
  {
    src: "https://html.themestransmit.com/html/minfotailwind/assets/img/skill/webflow.svg",
    alt: "Webflow",
    percentage: "90%",
    name: "Webflow",
  },
  {
    src: "https://html.themestransmit.com/html/minfotailwind/assets/img/skill/tailwind.svg",
    alt: "Tailwind",
    percentage: "80%",
    name: "Tailwind",
  },
  {
    src: "https://html.themestransmit.com/html/minfotailwind/assets/img/skill/html.svg",
    alt: "HTML",
    percentage: "80%",
    name: "HTML",
  },
  {
    src: "https://html.themestransmit.com/html/minfotailwind/assets/img/skill/css.svg",
    alt: "CSS3",
    percentage: "85%",
    name: "CSS3",
  },
  {
    src: "https://html.themestransmit.com/html/minfotailwind/assets/img/skill/js.svg",
    alt: "JavaScript",
    percentage: "90%",
    name: "JavaScript",
  },
  {
    src: "https://html.themestransmit.com/html/minfotailwind/assets/img/skill/jquery.svg",
    alt: "jQuery",
    percentage: "95%",
    name: "jQuery",
  },
];

const Services = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    centerPadding: "0",
    arrows: true,
    rows: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="services" id="service">
      <div className="services-header">
        <IoBriefcaseOutline className="nav-icon" />
        <p>Services</p>
      </div>

      <div className="services-desc">
        <h2>
          My <span>Services</span>
        </h2>
        <p>
          I design products that are more than pretty. I make them shippable and
          usable, ensuring every detail contributes to a seamless user
          experience.
        </p>
      </div>

      <div className="service-items">
        <div className="service-item">
          <AiOutlineDeploymentUnit className="service-icon" />
          <h3>UI/UX Design</h3>
          <p>
            Modern, high-quality designs that ensure a great user experience.
          </p>
        </div>
        <div className="service-item">
          <AiOutlineDropbox className="service-icon" />
          <h3>Web Development</h3>
          <p>Custom websites built for performance and responsiveness.</p>
        </div>
        <div className="service-item">
          <AiOutlineGitlab className="service-icon" />
          <h3>SEO / SEM</h3>
          <p>Improve your online visibility and drive more traffic.</p>
        </div>
        <div className="service-item">
          <AiOutlineKubernetes className="service-icon" />
          <h3>Mobile Application</h3>
          <p>Beautiful, user-friendly apps for iOS and Android.</p>
        </div>
      </div>

      <div className="skills-header">
        <PiGraduationCapLight className="nav-icon" />
        <p>Profeciency</p>
      </div>

      <div className="skills-desc">
        <h2>
          Area of <span>Expertise</span>
        </h2>
        <p>
        Harnessing cutting-edge tools and technologies to deliver outstanding results.
        </p>
      </div>

      <section className="skills-carousel" id="skills">
        <Slider {...settings}>
          {skillsData.map((skill, index) => (
            <div className="skill-item" key={index}>
              <img src={skill.src} alt={skill.alt} />
              <h3>{skill.percentage}</h3>
              <p>{skill.name}</p>
            </div>
          ))}
        </Slider>
      </section>
    </section>
  );
};

export default Services;
