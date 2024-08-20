import { IoPersonOutline } from "react-icons/io5";
import "./About.css";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-header">
        <IoPersonOutline className="nav-icon" />
        <p>Yours Truly</p>
      </div>

      <div className="about-desc">
        <h2>
          My <span>Abstract</span>
        </h2>
        <p>
          Hello, I'm <span>John Indakwa</span>, a dedicated IT professional with
          a robust foundation in operating systems, networking, and software
          engineering. Over the past decade, I've immersed myself in both
          front-end and back-end development, leveraging the MERN stack, Next Js, Vue Js and Laravel
          to build versatile solutions. 
        </p>
      </div>

      <div className="about-skills">
        <p>REACT (94%)</p>
        <p>LARAVEL (85%)</p>
        <p>REACT NATIVE (91%)</p>
      </div>

      <div className="about-details">
        <ul>
          <li>
            Phone : <b>0702207999</b>
          </li>
          <li>
            Email : <b>johnindakwa6@gmail.com</b>
          </li>
          <li>
            Github : <b>github.com/johnindakwa</b>
          </li>
          <li>
            Language : <b>English, Spanish, Luhya</b>
          </li>
          <li>
            Tiktok : <b>johnindakwa.tiktok.com</b>
          </li>
        </ul>
      </div>

      <div className="about-nums">
        <div className="nums-item-colomn">
          <h1>6+</h1>
          <p>Years of Experience</p>
        </div>
        <div className="nums-item-colomn">
          <h1>30+</h1>
          <p>Handled Projects</p>
        </div>
        <div className="nums-item-colomn">
          <h1>30+</h1>
          <p>Open Source Libraries</p>
        </div>
        <div className="nums-item-colomn">
          <h1>3</h1>
          <p>Awards Won</p>
        </div>
      </div>
    </section>
  );
};

export default About;
