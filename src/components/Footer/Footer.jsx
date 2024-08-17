import React, { useContext, useState } from "react";
import "./Footer.css";
import { MdLightMode, MdOutlineKeyboardDoubleArrowUp } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { IoIosColorPalette } from "react-icons/io";
import { ThemeContext } from "../../ThemeContext";
import { RiMoonFill } from "react-icons/ri";

const Footer = () => {
  const { setThemeColor, toggleThemeMode, isDarkMode } = useContext(ThemeContext);
  const [isTooltipVisible, setTooltipVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const changeThemeColor = (color) => {
    setThemeColor(color);
    setTooltipVisible(false);
  };

  const toggleTooltip = () => {
    setTooltipVisible(!isTooltipVisible);
  };

  return (
    <footer className="footer">
      <div className="footer-links">
        <a href="/terms-and-policy" className="footer-link">
          Terms & Policy
        </a>
        <a href="/disclaimer" className="footer-link">
          Disclaimer
        </a>
      </div>
      <div className="footer-copy">
        <p>Copyright © 2024 @johnkulundu. All Rights Reserved.</p>
      </div>



      <div className="color-palette-container">
        <button className="color-palette-button" onClick={toggleTooltip}>
          <IoIosColorPalette />
        </button>
        {isTooltipVisible && (
          <div className="color-palette-tooltip">
            <div className="tooltip-header">Select Theme Color</div>
            <div className="color-palette-options">
              <div
                className="color-dot"
                style={{ backgroundColor: "#e78211" }}
                onClick={() => changeThemeColor("#e78211")}
              ></div>
              <div
                className="color-dot"
                style={{ backgroundColor: "#00bc91" }}
                onClick={() => changeThemeColor("#00bc91")}
              ></div>
              <div
                className="color-dot"
                style={{ backgroundColor: "#fd1a93" }}
                onClick={() => changeThemeColor("#fd1a93")}
              ></div>
              <div
                className="color-dot"
                style={{ backgroundColor: "#e2d810" }}
                onClick={() => changeThemeColor("#e2d810")}
              ></div>
              <div
                className="color-dot"
                style={{ backgroundColor: "#8b3dff" }}
                onClick={() => changeThemeColor("#8b3dff")}
              ></div>
            </div>
          </div>
        )}
      </div>
      
      <button className="theme-changer" onClick={toggleThemeMode}>
        {isDarkMode ? <MdLightMode /> : <RiMoonFill />}
      </button>
      <button className="back-to-top" onClick={scrollToTop}>
        <MdOutlineKeyboardDoubleArrowUp className="icon" />
      </button>
    </footer>
  );
};

export default Footer;
