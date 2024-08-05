import { FaHome } from "react-icons/fa";
import Slider from 'react-slick';
import './Home.css';
import { IoCheckmarkDone } from "react-icons/io5";
import Logo1 from "../../images/logo1.png";
import Logo2 from "../../images/logo2.png";
import Logo3 from "../../images/logo3.png";
import Logo4 from "../../images/logo4.png";
import Logo5 from "../../images/logo5.png";
import John from '../../images/logo.png'

// Import slick carousel CSS
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Home = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    dots: false,
    cssEase: 'linear', 
    pauseOnHover: false,
    centerMode: false,
    focusOnSelect: false,
    variableWidth: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  
  return (
    <section className="home" id="home">
      <div className="header">
        <FaHome className="nav-icon" />
        <p>THE EPITOME</p>
      </div>

      <div className="home-mid">
        <div className="mid-left">
          <h2>
          Shaping The <br /> <span>Future of Digital Solutions</span>
          </h2>
          <p>
          As a dedicated Frontend Developer, I build features tailored
           to deliver exceptional user experiences.
          </p>

          <div className="flex-items">
            <div className="flex-items-item">
              <IoCheckmarkDone className="item-icon" />
              <p>Available for work</p>
            </div>
            <div className="flex-items-item">
              <IoCheckmarkDone className="item-icon" />
              <p>Full Time Job</p>
            </div>
          </div>

          <div className="buttons-flex">
            <a href="/" className="btn-hire">
              Hire Me
            </a>
            <a href="/" className="btn-work">
              My Works
            </a>
          </div>
        </div>

        <div className="mid-right">
          <img
            src={John}
            alt=""
          />
        </div>
      </div>

      <div className="home-bottom">
        <div className="home-bottom-left">
          <hr className="vertical-line" />
          <p>Trusted Companies</p>
        </div>

        <div className="home-bottom-right">
          <Slider {...settings}>
            <figure>
              <img src={Logo1} alt="Logo1" />
            </figure>
            <figure>
              <img src={Logo2} alt="Logo2" />
            </figure>
            <figure>
              <img src={Logo3} alt="Logo3" />
            </figure>
            <figure>
              <img src={Logo4} alt="Logo4" />
            </figure>
            <figure>
              <img src={Logo5} alt="Logo5" />
            </figure>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Home;
