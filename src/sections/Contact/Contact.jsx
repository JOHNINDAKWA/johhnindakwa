import { PiGraduationCapLight } from "react-icons/pi";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="contact-header">
        <PiGraduationCapLight className="nav-icon" />
        <p>Contact</p>
      </div>

      <div className="contact-desc">
        <h2>
          Contact <span>Me</span>
        </h2>
        <p>
          Am Available at any Moment. Just email, text or call. I won't disappoint.
        </p>
      </div>


      <div class="mapbox" data-mapbox>
      <figure>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d140679.9951403412!2d36.99461739604087!3d-1.126513691018706!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2ske!4v1708677792152!5m2!1sen!2ske"
        
        style={{ border: '0' }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Maps Location"
      ></iframe>
    </figure>
        </div>

        <div class="contact-form">
          <h3 class="h3 form-title">Contact Form</h3>

          <form action="https://formspree.io/f/xzbnelbq" method="post" class="form" >
            <div class="input-wrapper">
              <input type="text" name="fullname" class="form-input" placeholder="Full name" required/>

              <input type="email" name="text" class="form-input" placeholder="Email address/Phone" required
                data-form-input />
            </div>

            <textarea name="message" class="form-input" placeholder="Your Message" required ></textarea>

            <button class="form-btn" type="submit"n>
              <ion-icon name="paper-plane"></ion-icon>
              <span>Send Message</span>
            </button>
          </form>
        </div>
    </section>
  );
};

export default Contact;
