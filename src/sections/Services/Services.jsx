import { IoBriefcaseOutline } from "react-icons/io5";
import "./Services.css";
import { AiOutlineKubernetes } from "react-icons/ai";
import { AiOutlineGitlab } from "react-icons/ai";
import { AiOutlineDropbox } from "react-icons/ai";
import { AiOutlineDeploymentUnit } from "react-icons/ai";
// import Slider from "react-slick";
import { PiGraduationCapLight } from "react-icons/pi";
import Marquee from "react-fast-marquee";

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

const skillsData2 = [
  {
    src: "https://html.themestransmit.com/html/minfotailwind/assets/img/skill/figma.svg",
    alt: "React",
    percentage: "90%",
    name: "React",
  },
  {
    src: "https://html.themestransmit.com/html/minfotailwind/assets/img/skill/webflow.svg",
    alt: "R-Native",
    percentage: "90%",
    name: "R-Native",
  },
  {
    src: "https://html.themestransmit.com/html/minfotailwind/assets/img/skill/tailwind.svg",
    alt: "Laravel",
    percentage: "80%",
    name: "Laravel",
  },
  {
    src: "https://html.themestransmit.com/html/minfotailwind/assets/img/skill/html.svg",
    alt: "Vue",
    percentage: "80%",
    name: "Vue",
  },
  {
    src: "https://html.themestransmit.com/html/minfotailwind/assets/img/skill/css.svg",
    alt: "Next Js",
    percentage: "85%",
    name: "NextJs",
  },
  {
    src: "https://html.themestransmit.com/html/minfotailwind/assets/img/skill/js.svg",
    alt: "Java",
    percentage: "90%",
    name: "Java",
  },
  {
    src: "https://html.themestransmit.com/html/minfotailwind/assets/img/skill/jquery.svg",
    alt: "jQuery",
    percentage: "95%",
    name: "Python",
  },
  {
    src: "https://html.themestransmit.com/html/minfotailwind/assets/img/skill/js.svg",
    alt: "Kotlin",
    percentage: "90%",
    name: "Kotlin",
  },
  {
    src: "https://html.themestransmit.com/html/minfotailwind/assets/img/skill/jquery.svg",
    alt: "TensorFlow",
    percentage: "95%",
    name: "Tensorflow",
  },
];

const Services = () => {
  return (
    <section className="services" id="service">
      <div className="services-header" data-aos="zoom-in">
        <IoBriefcaseOutline className="nav-icon" />
        <p>Services</p>
      </div>

      <div className="services-desc">
        <h2 data-aos="zoom-in">
          My <span>Services</span>
        </h2>
        <p >
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

      <div className="skills-header" data-aos="zoom-in">
        <PiGraduationCapLight className="nav-icon" />
        <p>Profeciency</p>
      </div>

      <div className="skills-desc">
        <h2 data-aos="zoom-in">
          Area of <span>Expertise</span>
        </h2>
        <p>
          Harnessing cutting-edge tools and technologies to deliver outstanding
          results.
        </p>
      </div>

      <section className="skills-carousel" id="skills">
        <Marquee gradient={false} speed={25} pauseOnHover>
          {skillsData.map((skill, index) => (
            <div
              className="skill-item"
              key={index}
              data-percentage={skill.percentage}
            >
              <p>#{skill.name}</p>
            </div>
          ))}
        </Marquee>

        <Marquee gradient={false} speed={25} direction="right" pauseOnHover>
          {skillsData2.map((skill, index) => (
            <div
              className="skill-item"
              key={index}
              data-percentage={skill.percentage}
            >
              <p>#{skill.name}</p>
            </div>
          ))}
        </Marquee>
        <Marquee gradient={false} speed={20} pauseOnHover>
          {skillsData.map((skill, index) => (
            <div
              className="skill-item"
              key={index}
              data-percentage={skill.percentage}
            >
              <p>#{skill.name}</p>
            </div>
          ))}
        </Marquee>

        <Marquee gradient={false} speed={20} direction="right" pauseOnHover>
          {skillsData2.map((skill, index) => (
            <div
              className="skill-item"
              key={index}
              data-percentage={skill.percentage}
            >
              <p>#{skill.name}</p>
            </div>
          ))}
        </Marquee>
      </section>
    </section>
  );
};

export default Services;
