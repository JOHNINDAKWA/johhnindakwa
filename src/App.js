import BackgroundLines from "./components/BackgroundLines/BackgroundLines";
import Main from "./components/Main/Main";

import React, { useEffect, useState } from "react";

function App() {
  const [cursorX, setCursorX] = useState(0);
  const [cursorY, setCursorY] = useState(0);
  const [deviceType, setDeviceType] = useState("");
  const [isClicking, setIsClicking] = useState(false);
  const [buttonHovered, setButtonHovered] = useState(false);

  // check if it is a touch device
  const isTouchDevice = () => {
    try {
      document.createEvent("TouchEvent");
      setDeviceType("touch");
      return true;
    } catch (e) {
      setDeviceType("mouse");
      return false;
    }
  };

  const move = (e) => {
    const touchEvent = e.touches ? e.touches[0] : null;
    const x = !isTouchDevice() ? e.clientX : touchEvent?.clientX || 0;
    const y = !isTouchDevice() ? e.clientY : touchEvent?.clientY || 0;

    setCursorX(x);
    setCursorY(y);

    // Set the cursor border's position directly
    const cursorBorder = document.getElementById("cursor-border");
    if (cursorBorder) {
      cursorBorder.style.left = `${x}px`;
      cursorBorder.style.top = `${y}px`;
    }
  };

  const handleMouseDown = () => {
    setIsClicking(true);
  };

  const handleMouseUp = () => {
    setIsClicking(false);
  };

  const handleButtonHover = (hovered) => {
    setButtonHovered(hovered);
  };

  useEffect(() => {
    document.addEventListener("mousemove", move);
    document.addEventListener("touchmove", move);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.removeEventListener("mousemove", move);
      document.removeEventListener("touchmove", move);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return (
    <div>
      <style>
        {`


		#cursor {
			position: fixed;
			background-color: ${isClicking ? "var(--primary)" : "var(--primary)"};
			height: 7px;
      z-index:1000001;
			width: 7px;
			border-radius: 50%;
			transform: translate(-50%, -50%);
			pointer-events: none;
			transition: background-color 0.2s ease;
		}

		#cursor-border {
			position: fixed;
      z-index:1000001;
			width: 40px;
			height: 40px;
			background-color: transparent;
			border: 1px solid ${buttonHovered ? "var(--primary)" : "var(--light)"};
			border-radius: 50%;
			transform: translate(-50%, -50%);
			pointer-events: none;
			transition: all 0.2s ease-out;
		}
	`}
      </style>
      <div
        id="cursor"
        style={{ left: `${cursorX}px`, top: `${cursorY}px` }}
      ></div>
      <div id="cursor-border"></div>

      <BackgroundLines />
      <Main />
    </div>
  );
}

export default App;
