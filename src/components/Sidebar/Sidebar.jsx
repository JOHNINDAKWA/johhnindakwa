import { useEffect, useState } from "react";
import "./Sidebar.css";
import John from "../../images/john.png";
import { IoCloudDownloadOutline } from "react-icons/io5";

const Sidebar = () => {
  const [currentText, setCurrentText] = useState("");
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(200);

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
            <p>Residence:</p>
            <span>Juja</span>
          </li>
          <li>
            <p>City:</p>
            <span>Nairobi</span>
          </li>
          <li>
            <p>Marital Status:</p>
            <span>Bachelor</span>
          </li>
          <li>
            <p>Nationality:</p>
            <span>Kenyan</span>
          </li>

        </ul>
      </div>

      <div className="sidebar-bottom">
        <h3>Skills</h3>
        <ul>
          <li>
            <p>90%</p>
            <span>React</span>
          </li>
          <li>
            <p>85%</p>
            <span>Laravel</span>
          </li>
          <li>
            <p>90%</p>
            <span>Native</span>
          </li>
          <li>
            <p>85%</p>
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
