import { FaSchoolFlag } from "react-icons/fa6";
import "./Experience.css";
import { IoBriefcaseOutline } from "react-icons/io5";

const Experience = () => {
  return (
    <section className="experience" id="experience">
      <div className="experience-header" data-aos="zoom-in">
        <IoBriefcaseOutline className="nav-icon" />
        <p>My RESUME</p>
      </div>

      <div className="experience-desc" >
        <h2 data-aos="zoom-in">
          My <span>Biography</span>
        </h2>
        <p >
          I am an IT professional with expertise in front-end and back-end
          development. I specialize in the MERN stack, PHP, and cloud solutions,
          always focusing on creating user-friendly and efficient applications.
        </p>
      </div>

      <div className="timeline" >
        <div className="timeline-divider">

          <ul className="timeline-list" >
            <li className="timeline-item" data-aos="fade-down">
              <h4 className="timeline-item-title">
              KCB Intern
              </h4>
              <span>January 2023 - April 2023</span>
              <p className="timeline-text">
              Managed data and accounts and other Bank stuff. Improved IT skills.
              </p>
            </li>
            <li className="timeline-item" data-aos="fade-down">
              <h4 className="timeline-item-title">
              Web Development Specialist, Fastech Solutions
              </h4>
              <span>May-2023 To Date</span>
              <p className="timeline-text">
              Developed secure, functional websites. Collaborated on projects.
              </p>
            </li>
          </ul>
        </div>
      </div>

      <div className="experience-header" data-aos="zoom-in">
      <FaSchoolFlag className="nav-icon"/>
        <p>PHRONTISTERY</p>
      </div>

      <div className="experience-desc" >
        <h2 data-aos="zoom-in">
          My <span>Indoctrination</span>
        </h2>
        <p>
          Dedicated to excellence in my studies, I embraced a rigorous academic
          journey, mastering IT principles and technologies with a focus on
          practical skills and problem-solving.
        </p>
      </div>

      <section id="education" className="timeline">
        <div className="timeline-divider">
          <ul className="timeline-list" >
            <li className="timeline-item" data-aos="fade-down">
              <h4 className="timeline-item-title">
                DEGREE IN INFORMATION TECHNOLOGY, JKUAT
              </h4>
              <span>September 2019 - December 2023</span>
              <p className="timeline-text">
              Pursued personal projects in various technologies, demonstrating independent initiative and passion.
              </p>
            </li>
            <li className="timeline-item" data-aos="fade-down">
              <h4 className="timeline-item-title">
                High School Education, KCSE
              </h4>
              <span>March 2024</span>
              <p className="timeline-text">
              Excelled academically, achieving high grades despite challenges posed by the education minister.
              </p>
            </li>

            <li className="timeline-item" data-aos="fade-down">
              <h4 className="timeline-item-title">
                HUAWEI HCIA DATACOM CERTIFICATION
              </h4>
              <span>September 2019 - December 2023</span>
              <p className="timeline-text">
              Learned data communication and networking fundamentals.
              </p>
            </li>
          </ul>
        </div>
      </section>
    </section>
  );
};

export default Experience;
