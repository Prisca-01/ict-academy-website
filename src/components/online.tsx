import { FaBook, FaFileAlt } from "react-icons/fa";
import { motion } from "motion/react";

function Online() {
  return (
    <>
      <section id="online-featured">
        <div id="online-heading">
          <p className="online-first">
            <span>
              <FaBook />
            </span>
            FEATURED
          </p>
          <p className="online-second">
            Online Courses that will help you to achieve your goals
          </p>
          <div id="online-line"></div>
        </div>
        <div id="online">
  <div className="row1">
    {/* Course Card 1 */}
    <div className="online-course-card">
      <div className="online-image-container">
        <div className="online-image-bg">
          <img
            src="src/assets/smm.jpeg"
            alt="Social Media Marketing Background"
            className="online-image-bg-img"
          />
        </div>
        <motion.div
          className="online-image-foreground"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.4, type: "spring", bounce: 0.6 }}
        >
          <img
            src="src/assets/smm.jpeg"
            alt="Social Media Marketing"
            className="online-image"
          />
          <div className="course-price">$99</div>
        </motion.div>
      </div>
      <div className="course-info">
        <p className="course-title">Social Media Marketing Course</p>
        <p className="course-author">
          <span className="profile-pic">JD</span> Jane Doe
        </p>
        <div className="broken-line"></div>
        <p className="course-total">
          <FaFileAlt /> Lesson 29
        </p>
      </div>
    </div>

    {/* Course Card 2 */}
    <div className="online-course-card">
      <div className="online-image-container">
        <div className="online-image-bg">
          <img
            src="src/assets/seo.jpeg"
            alt="SEO Background"
            className="online-image-bg-img"
          />
        </div>
        <motion.div
          className="online-image-foreground"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.4, type: "spring", bounce: 0.6 }}
        >
          <img src="src/assets/seo.jpeg" alt="SEO" className="online-image" />
          <div className="course-price">$99</div>
        </motion.div>
      </div>
      <div className="course-info">
        <p className="course-title">
          Search Engine Optimization Course
        </p>
        <p className="course-author">
          <span className="profile-pic">JD</span> Jane Doe
        </p>
        <div className="broken-line"></div>
        <p className="course-total">
          <FaFileAlt /> Lesson 29
        </p>
      </div>
    </div>

    {/* Course Card 3 */}
    <div className="online-course-card">
      <div className="online-image-container">
        <div className="online-image-bg">
          <img
            src="src/assets/emailmarketing.jpeg"
            alt="Email Marketing Background"
            className="online-image-bg-img"
          />
        </div>
        <motion.div
          className="online-image-foreground"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.4, type: "spring", bounce: 0.6 }}
        >
          <img
            src="src/assets/emailmarketing.jpeg"
            alt="Email Marketing"
            className="online-image"
          />
          <div className="course-price">$99</div>
        </motion.div>
      </div>
      <div className="course-info">
        <p className="course-title">Email Marketing Course</p>
        <p className="course-author">
          <span className="profile-pic">JD</span> Jane Doe
        </p>
        <div className="broken-line"></div>
        <p className="course-total">
          <FaFileAlt /> Lesson 29
        </p>
      </div>
    </div>
  </div>
  <div className="row2">
    {/* Course Card 4 */}
    <div className="online-course-card">
      <div className="online-image-container">
        <div className="online-image-bg">
          <img
            src="src/assets/design.jpeg"
            alt="Graphic Design Background"
            className="online-image-bg-img"
          />
        </div>
        <motion.div
          className="online-image-foreground"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.4, type: "spring", bounce: 0.6 }}
        >
          <img
            src="src/assets/design.jpeg"
            alt="Graphic Design"
            className="online-image"
          />
          <div className="course-price">$99</div>
        </motion.div>
      </div>
      <div className="course-info">
        <p className="course-title">Graphic Design Course</p>
        <p className="course-author">
          <span className="profile-pic">JD</span> Jane Doe
        </p>
        <div className="broken-line"></div>
        <p className="course-total">
          <FaFileAlt /> Lesson 29
        </p>
      </div>
    </div>

    {/* Course Card 5 */}
    <div className="online-course-card">
      <div className="online-image-container">
        <div className="online-image-bg">
          <img
            src="src/assets/copywriting.jpeg"
            alt="Copywriting Background"
            className="online-image-bg-img"
          />
        </div>
        <motion.div
          className="online-image-foreground"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.4, type: "spring", bounce: 0.6 }}
        >
          <img
            src="src/assets/copywriting.jpeg"
            alt="Copywriting"
            className="online-image"
          />
          <div className="course-price">$99</div>
        </motion.div>
      </div>
      <div className="course-info">
        <p className="course-title">Copywriting Course</p>
        <p className="course-author">
          <span className="profile-pic">JD</span> Jane Doe
        </p>
        <div className="broken-line"></div>
        <p className="course-total">
          <FaFileAlt /> Lesson 29
        </p>
      </div>
    </div>
  </div>

        </div>
      </section>
    </>
  );
}

export default Online;
