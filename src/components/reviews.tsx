import { FaStar } from "react-icons/fa";
import "../styles/reviews.css";

function Reviews() {
  return (
    <>
      <section id="reviews">
        <div className="first">
        <div className="images">
  <img className="students" src="src/assets/students.jpeg" alt="students" />
  <div className="students-overlay">
    <div className="overlay-header">
      <span>Satisfied Students</span>
    </div>
    <div className="avatar-group">
      <img className="avatar" src="src/assets/avatar.jpeg" alt="student" />
      <img className="avatar" src="src/assets/avatar.jpeg" alt="student" />
      <img className="avatar" src="src/assets/avatar.jpeg" alt="student" />
      <img className="avatar" src="src/assets/avatar.jpeg" alt="student" />
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
      </section>
    </>
  );
}

export default Reviews;
