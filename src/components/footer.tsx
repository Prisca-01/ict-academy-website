import { FaFacebookF, FaXTwitter } from "react-icons/fa6";
import "../styles/footer.css";
import {
  FaArrowRight,
  FaBook,
  FaEnvelope,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaPinterestP,
  FaSkating,
} from "react-icons/fa";

function Footer() {
  return (
    <>
      <section className="brands">
        <div className="heading">
          <p className="trust">
            <span>
              <FaBook />
            </span>
            TRUSTED BY 1 MILLION PEOPLE
          </p>
          <p className="second">
            Locally from <span>Companies Like...</span>{" "}
          </p>
        </div>
        <div className="brand-logos">
          <img src="src/assets/amazon.svg" alt="brand" />
          <img src="src/assets/netflix.svg" alt="brand" />
          <img src="src/assets/amazon.svg" alt="brand" />
          <img src="src/assets/netflix.svg" alt="brand" />

          <img src="src/assets/netflix.svg" alt="brand" />
          <img src="src/assets/amazon.svg" alt="brand" />
          <img src="src/assets/netflix.svg" alt="brand" />
          <img src="src/assets/amazon.svg" alt="brand" />
        </div>
      </section>
      <section className="footer">
        <div className="top">
          <div className="phone">
            <FaPhoneAlt className="icon" />
            <div className="txt">
              <p>Toll Free Customer Care</p>
              <p>+234 903 333 3334</p>
            </div>
          </div>
          <div className="vertical-line"></div>
          <div className="email">
            <FaEnvelope className="icon" />
            <div className="txt">
              <p>Email</p>
              <p>hello@myictacademy.com</p>
            </div>
          </div>
          <div className="vertical-line"></div>

          <div className="social">
            <FaSkating className="icon" />
            <div className="txt">
              <p>Stalk Us On Social Media</p>
              <div className="icons">
                <FaFacebookF className="icon" />
                <FaXTwitter className="icon" />
                <FaLinkedinIn className="icon" />
                <FaInstagram className="icon" />
                <FaPinterestP className="icon" />
              </div>
            </div>
          </div>
        </div>
        <div className="horizontal-line"></div>
        <div className="bottom">
          <div className="one">
            <img src="src/assets/logo.png" alt="logo" />
            <p>
              An Award Winning ICT Training Center that Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Quisquam, quod.
            </p>
          </div>
          <div className="two">
            <div className="marketing">
              <p className="head">MARKETING</p>
              <span className="horizontal-line"></span>
              <p className="phone">
                <FaArrowRight /> +234 800 565 5657{" "}
              </p>
              <p>
                <FaArrowRight /> myictacademymarketing@gmail.com
              </p>
            </div>
            <div className="feedback">
              <p className="head">FEEDBACK</p>
              <span className="horizontal-line"></span>
              <p className="phone">
                <FaArrowRight /> +234 800 565 0000{" "}
              </p>
              <p>
                <FaArrowRight /> prisca@myictacademy.com
              </p>
            </div>
          </div>
          <div className="three">
            <p>LINKS</p>
            <span className="horizontal-line"></span>
            <p>
              <FaArrowRight /> Online Courses
            </p>
            <p>
              <FaArrowRight /> Offline Courses
            </p>
            <p>
              <FaArrowRight /> Terms & Conditions
            </p>
            <p>
              <FaArrowRight /> Privacy Policy
            </p>
          </div>
          <div className="four">
            <p>SPECIAL OFFER</p>
            <span className="horizontal-line"></span>
            <p>
              Get 50% Off on Your First Course. Use Code: <span>MYICT50</span>
            </p>
            <button>Enroll Now</button>
          </div>
        </div>
      </section>
      <section className="copyright">
        <p>
          &copy; 2025  MyICT Academy. All Rights Reserved. Designed by{" "}
          <span>Prisca</span>
        </p>
      </section>
    </>
  );
}

export default Footer;
