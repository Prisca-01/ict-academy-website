import { FaStar, FaBook, FaStarHalfAlt } from "react-icons/fa";
import "../styles/reviews.css";
import { ReviewCards } from "./reviewcards";
function Reviews() {
  return (
    <>
      <section id="reviews">
        <div className="first">
          <div className="images">
            <img
              className="students"
              src="src/assets/students.jpeg"
              alt="students"
            />
            <div className="students-overlay">
              <div className="overlay-header">
                <span>Satisfied Students</span>
              </div>
              <div className="avatar-group">
                <img
                  className="avatar"
                  src="src/assets/avatar.jpeg"
                  alt="student"
                />
                <img
                  className="avatar"
                  src="src/assets/avatar.jpeg"
                  alt="student"
                />
                <img
                  className="avatar"
                  src="src/assets/avatar.jpeg"
                  alt="student"
                />
                <img
                  className="avatar"
                  src="src/assets/avatar.jpeg"
                  alt="student"
                />
                <p className="avatar-count">80+</p>
              </div>
            </div>
          </div>
          <div className="best">
            <p className="head">What Our Students Think</p>
            <h3>About us as the best ICT Academy in Town</h3>
            <div className="texts">
              <div className="left">
                <FaStar className="icon" />
                <div className="text">
                  <p>Personalized Classes</p>
                  <p>Lorem ipsum dolor sit amet, consectetur.</p>
                </div>
              </div>
              <div className="right">
                <FaStar className="icon" />
                <div className="text">
                  <p>Personalized Classes</p>
                  <p>Lorem ipsum dolor sit amet, consectetur.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="google-reviews">
          <div className="heading">
            <p className="google">
              <span>
                <FaBook />
              </span>
              GOOGLE REVIEWS
            </p>
            <p className="second">
              See 50+ Reviews <span>On Google</span>{" "}
            </p>
          </div>
          <div className="stars-div">
            <p>EXCELLENT</p>
            <div className="stars">
              <FaStar className="star" />
              <FaStar className="star" />
              <FaStar className="star" />
              <FaStar className="star" />
              <FaStarHalfAlt 
              className="star" />
            </div>
            <p>
              Based on <span>50 reviews</span>
            </p>
            <p className="spans">
              <span style={{ color: "blue" }}>G</span>
              <span style={{ color: "red" }}>o</span>
              <span style={{ color: "yellow" }}>o</span>
              <span style={{ color: "blue" }}>g</span>
              <span style={{ color: "green" }}>l</span>
              <span style={{ color: "red" }}>e</span>
            </p>
          </div>
          <div>
            <ReviewCards />
          </div>
          {/* <div className="review-cards">
            <div className="card-one">
              <div className="card-header">
                <img
                  className="avatar"
                  src="src/assets/avatar.jpeg"
                  alt="student"
                />
                <div className="header-text">
                  <p>John Doe</p>
                  <p>5 days ago</p>
                </div>
              </div>
              <div className="card-body">
                <div className="stars">
                  <FaStar className="star" />
                  <FaStar className="star" />
                  <FaStar className="star" />
                  <FaStar className="star" />
                  <FaStar className="star" />
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Doloribus, quidem.
                </p>
              </div>
            </div>
          </div> */}
        </div>
      </section>
    </>
  );
}

export default Reviews;
