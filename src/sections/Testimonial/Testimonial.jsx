import "./Testimonial.css";
import { IoMdStar } from "react-icons/io";
import biko from "../../images/biko.jpg"
import emily from "../../images/emily.png"
import { FaCommentsDollar } from "react-icons/fa";

const Testimonial = () => {
  return (
    <section className="testimonial" id="testimonial">
      <div className="testimonial-header">
      <FaCommentsDollar className="nav-icon" />
        <p>Affirmation</p>
      </div>
      <div className="testimonial-desc">
        <h2>
          What <span>People Say</span>
        </h2>
        <p>
          Hear from those who have experienced the exceptional service and
          expertise. Real stories, real satisfaction.
        </p>
      </div>

      <div className="testimonial-items">
        <div className="testimonial-item" data-aos="zoom-in-right">
          <img
            src={emily}
            alt=""
          />
          <div className="stars">
            <IoMdStar className="star-icon" />
            <IoMdStar className="star-icon" />
            <IoMdStar className="star-icon" />
            <IoMdStar className="star-icon" />
            <IoMdStar className="star-icon" />
          </div>
          <p>
            I needed a website that was both beautiful and functional, and{" "}
            <span className="testimony-name">John </span> delivered
            beyond my wildest dreams! He understood my vision perfectly. Btw, bonus points for
            being patient with my endless revisions!
          </p>
          <h5>— Emily Kasanga, Terrific Events</h5>
        </div>

        <div className="testimonial-item" data-aos="zoom-in-left">
          <img
            src={biko}
            alt=""
          />
          <div className="stars">
            <IoMdStar className="star-icon" />
            <IoMdStar className="star-icon" />
            <IoMdStar className="star-icon" />
            <IoMdStar className="star-icon" />
            <IoMdStar className="star-icon" />
          </div>
          <p>
            <span className="testimony-name">Indakwa </span>saved the day
            when our website went on the fritz! He swooped in with his tech
            toolbox and impressive ninja coding skills. I was back in business
            before long
          </p>
          <h5>— Daniel Odhiambo, Danny Photography</h5>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
