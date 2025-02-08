import { FaStar, FaBook, FaStarHalfAlt } from "react-icons/fa";
import "../styles/reviews.css";
import { ReviewCards } from "./reviewcards";
import Counter from "./counter";

function Reviews() {
  return (
    <>
      <section id="reviews">
      <div className="reviewsGrid">
          <div className="mediaColumn">
            <div className="mediaContainer">
              <img
                className="studentsImage"
                src="src/assets/students.jpeg"
                alt="Happy students"
              />
              <div className="studentsOverlay">
                <div className="overlayHeader">
                  <span>Satisfied Students</span>
                </div>
                <div className="avatarStack">
                  <img
                    className="studentAvatar"
                    src="src/assets/avatar.jpeg"
                    alt="Student"
                  />
                  <img
                    className="studentAvatar"
                    src="src/assets/avatar.jpeg"
                    alt="Student"
                  />
                  <img
                    className="studentAvatar"
                    src="src/assets/avatar.jpeg"
                    alt="Student"
                  />
                  <img
                    className="studentAvatar"
                    src="src/assets/avatar.jpeg"
                    alt="Student"
                  />
                  <p className="avatarCount">80+</p>
                </div>
              </div>
            </div>
          </div>

          <div className="featuresColumn">
            <p className="sectionSubtitle">What Our Students Think</p>
            <h3 className="sectionTitle">About us as the best ICT Academy in Town</h3>
            <div className="featureList">
              <div className="featureItem">
                <FaStar className="featureIcon" />
                <div className="featureText">
                  <p className="featureTitle">Personalized Classes</p>
                  <p className="featureDescription">Lorem ipsum dolor sit amet, consectetur.</p>
                </div>
              </div>
              <div className="featureItem">
                <FaStar className="featureIcon" />
                <div className="featureText">
                  <p className="featureTitle">Expert Instructors</p>
                  <p className="featureDescription">Lorem ipsum dolor sit amet, consectetur.</p>
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
              <FaStarHalfAlt className="star" />
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
        </div>
      </section>
      <div className="achievementsContainer">
  <div className="achievementGroup">
    <Counter 
      targetNumber={5000} 
      label="Successfully Trained" 
      suffix="+" 
      className="achievementCard"
    />
    <div className="dividerLine"></div>
    <Counter 
      targetNumber={3500} 
      label="Classes Held" 
      suffix="+" 
      className="achievementCard"
    />
    <div className="dividerLine"></div>
    <Counter 
      targetNumber={96} 
      label="Satisfaction Rate" 
      suffix="%" 
      className="achievementCard"
    />
    <div className="dividerLine"></div>
    <Counter 
      targetNumber={90} 
      label="Success Rate" 
      suffix="%" 
      className="achievementCard"
    />
  </div>
</div>
    </>
  );
}

export default Reviews;
