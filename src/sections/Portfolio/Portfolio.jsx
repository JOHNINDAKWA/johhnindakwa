import React, { useState } from "react";
import { portfolioData } from "./portfolioData";
import "./Portfolio.css";
import Modal from "../../components/Modal/Modal"; // Import your custom modal component
import { PiGraduationCapLight } from "react-icons/pi";

const Portfolio = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const openModal = (item) => {
    setSelectedItem(item);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedItem(null);
  };

  return (
    <section className="portfolio" id="portfolio">
      <div className="portfolio-header">
        <PiGraduationCapLight className="nav-icon" />
        <p>ARCHIVES</p>
      </div>

      <div className="portfolio-desc">
        <h2>
          Featured <span>Projects</span>
        </h2>
        <p>
          Showcasing projects that blend creativity and functionality,
          delivering solutions that are both visually appealing and highly
          effective.
        </p>
      </div>

      <div className="portfolio-items">
        {portfolioData.map((item, index) => (
          <div className="portfolio-item" key={index}>
            <img src={item.img} alt={item.title} />
            <div className="portfolio-item-details">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  openModal(item);
                }}
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

      <Modal isOpen={modalIsOpen} onClose={closeModal} item={selectedItem} />
    </section>
  );
};

export default Portfolio;