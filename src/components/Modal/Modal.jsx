import React from "react";
import "./Modal.css";
import { FaFacebook, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Modal = ({ isOpen, onClose, item }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          ×
        </button>
        {item && (
          <>
            <img src={item.img} alt={item.title} />
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <p>{item.description2}</p>


            <h3>Project Details</h3>
            <div className="modal-divider"></div>
            <div className="modal-detail">
              <p>
                <strong>Technologies Used:</strong> {item.technologies}
              </p>
              <p>
                <strong>Date Completed:</strong> {item.dateCompleted}
              </p>
              <p>
                <strong>Project Link:</strong>{" "}
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Full Project
                </a>
              </p>
            </div>

            <div className="socials">
              <p>Share</p>
              <div className="social-icons">
                <FaFacebook className="facebook"/>

                <FaSquareXTwitter className="twitter"/>

                <FaLinkedin className="linkedin"/>

                <FaInstagramSquare className="instagram"/>
              </div>
            </div>

            
          </>
        )}
      </div>
    </div>
  );
};

export default Modal;
