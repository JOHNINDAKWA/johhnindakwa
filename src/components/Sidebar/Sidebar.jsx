import { useEffect, useState } from "react";
import "./Sidebar.css";
import John from "../../images/john.png";
import { IoCloudDownloadOutline } from "react-icons/io5";

const Sidebar = () => {
  const [currentText, setCurrentText] = useState("");
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(200);

  // State to track the animated percentage values
  const [skills, setSkills] = useState({
    react: 0,
    laravel: 0,
    native: 0,
    php: 0,
  });

  useEffect(() => {
    const texts = [
      "I'm a Web Developer",
      "I'm an App Developer",
      "Cloud Engineer",
      "Network Administrator.",
    ];

    const handleTyping = () => {
      const fullText = texts[currentTextIndex];
      setCurrentText(
        isDeleting
          ? fullText.substring(0, currentText.length - 1)
          : fullText.substring(0, currentText.length + 1)
      );

      if (!isDeleting && currentText === fullText) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        setTypingSpeed(200);
      }
    };

    const timer = setTimeout(handleTyping, isDeleting ? 100 : typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentTextIndex, typingSpeed]);

  useEffect(() => {
    const targetSkills = {
      react: 92,
      laravel: 75,
      native: 86,
      php: 80,
    };

    // Animate percentage values
    const animateSkills = () => {
      const increment = 1;
      const interval = 80; 
      const skillKeys = Object.keys(targetSkills);

      skillKeys.forEach((key) => {
        const target = targetSkills[key];
        let current = 0;

        const intervalId = setInterval(() => {
          if (current < target) {
            current += increment;
            setSkills((prevSkills) => ({
              ...prevSkills,
              [key]: Math.min(current, target), // Ensure it doesn't exceed the target
            }));
          } else {
            clearInterval(intervalId);
          }
        }, interval);
      });
    };

    animateSkills();
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebar-top">
        <img src={John} alt="" />
        <h4>John Kulundu</h4>
        <p className="animated-text">{currentText}</p>
      </div>

      <div className="sidebar-middle">
        <ul>
          <li>
            <p>Availability:</p>
            <span>Immediate</span>
          </li>
          <li>
            <p>Experience Level:</p>
            <span>6+ Years</span>
          </li>
          <li>
            <p>Open to:</p>
            <span>Remote/Freelance</span>
          </li>
          <li>
            <p>Specialization:</p>
            <span>Full-Stack</span>
          </li>
        </ul>
      </div>

      <div className="sidebar-bottom">
        <h3>Skills</h3>
        <ul>
          <li>
            <p>{skills.react}%</p>
            <span>React</span>
          </li>
          <li>
            <p>{skills.laravel}%</p>
            <span>Laravel</span>
          </li>
          <li>
            <p>{skills.native}%</p>
            <span>Native</span>
          </li>
          <li>
            <p>{skills.php}%</p>
            <span>PHP</span>
          </li>
        </ul>

        <div className="download">
          <a href="/" className="btn-download">
            <p>Download CV </p> <IoCloudDownloadOutline className="icon-btn" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
