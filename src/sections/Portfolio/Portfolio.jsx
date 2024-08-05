import React, { useState } from "react";
import { portfolioData } from "./portfolioData";
import "./Portfolio.css";
import Modal from "../../components/Modal/Modal"; 
import { SiCodeproject } from "react-icons/si";

const Portfolio = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [visibleProjects, setVisibleProjects] = useState(5); 

  const openModal = (item) => {
    setSelectedItem(item);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedItem(null);
  };

  const loadMoreProjects = () => {
    setVisibleProjects((prev) => prev + 3); 
  };

  return (
    <section className="portfolio" id="portfolio">
      <div className="portfolio-header">
      <SiCodeproject className="nav-icon"/>
      
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
        {portfolioData.slice(0, visibleProjects).map((item, index) => (
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

      {visibleProjects < portfolioData.length && (
        <button className="view-more-button" onClick={loadMoreProjects}>
          View More Projects
        </button>
      )}

      <Modal isOpen={modalIsOpen} onClose={closeModal} item={selectedItem} />
    </section>
  );
};

export default Portfolio;
