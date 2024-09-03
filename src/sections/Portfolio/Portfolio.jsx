import React, { useState, useCallback } from "react";
import { portfolioData } from "./portfolioData";
import "./Portfolio.css";
import Modal from "../../components/Modal/Modal"; 
import { SiCodeproject } from "react-icons/si";

// Helper function to load images
const loadImage = (src) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = src;
    img.onload = () => resolve(src);
    img.onerror = () => reject(src);
  });
};

const Portfolio = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [visibleProjects, setVisibleProjects] = useState(5); 
  const [loading, setLoading] = useState(false);

  const openModal = (item) => {
    setSelectedItem(item);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedItem(null);
  };

  const loadMoreProjects = useCallback(() => {
    setLoading(true);
    const newProjects = portfolioData.slice(visibleProjects, visibleProjects + 3);

    // Create an array of image load promises
    const imagePromises = newProjects.map(project => loadImage(project.img));

    // Wait for all images to load
    Promise.all(imagePromises)
      .then(() => {
        setVisibleProjects(prev => prev + 3);
        setLoading(false);
      })
      .catch(() => {
        // Handle image load failure
        setLoading(false);
      });
  }, [visibleProjects]);

  return (
    <section className="portfolio" id="portfolio">
      <div className="portfolio-header"  data-aos="fade-up">
        <SiCodeproject className="nav-icon"/>
        <p>ARCHIVES</p>
      </div>

      <div className="portfolio-desc"  data-aos="fade-up">
        <h2>
          Featured <span>Projects</span>
        </h2>
        <p>
          Showcasing projects that blend creativity and functionality,
          delivering solutions that are both visually appealing and highly
          effective.
        </p>
      </div>

      <div className="portfolio-items"  data-aos="fade-up">
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

      {loading && (
        <div className="loading-animation">
          <p>Loading new projects, please wait...</p>
        </div>
      )}

      {visibleProjects < portfolioData.length && !loading && (
        <button className="view-more-button" onClick={loadMoreProjects}>
          Load More Projects
        </button>
      )}

      <Modal isOpen={modalIsOpen} onClose={closeModal} item={selectedItem} />
    </section>
  );
};

export default Portfolio;
