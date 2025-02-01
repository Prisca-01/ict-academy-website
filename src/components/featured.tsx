import { motion } from "motion/react";
import { FaArrowCircleRight, FaBook } from "react-icons/fa";
import "../styles/styles.css";

function Featured() {
  return (
    <>
      <section id="featured">
        <div id="heading">
          <p className="first">
            <span>
              <FaBook />
            </span>
            FEATURED
          </p>
          <p className="second">
            Our Featured Courses are Designed to Grow your Career.
          </p>
          <div id="line"></div>
        </div>
        <section id="courses">
          <div className="physical">
            <div className="course-card">
              <motion.div
                className="course-image-container"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.4,
                  scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
                }}
                // whileHover={{ scale: 0.95 }}  // Zoom-out effect on hover
              >
                <img
                  src="src/assets/basic.png"
                  alt="Basic Computer"
                  className="course-image"
                />
              </motion.div>

              <motion.h3
                className="course-title"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                Basic Computer Training
              </motion.h3>

              <p className="course-description">
                Our Academy offers Basic Computer Training for beginners. This
                course is designed to help you understand the basics of computer
                operations.
              </p>

              <motion.button
                className="course-button"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                whileHover={{ scale: 1.05 }}
              >
                <FaArrowCircleRight /> Learn more
              </motion.button>
            </div>

            {/* 2 */}
            <div className="course-card">
              <motion.div
                className="course-image-container"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.4,
                  scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
                }}
                // whileHover={{ scale: 0.95 }}  // Zoom-out effect on hover
              >
                <img
                  src="src/assets/basic.png"
                  alt="Basic Computer"
                  className="course-image"
                />
              </motion.div>

              <motion.h3
                className="course-title"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                Graphic Design Training
              </motion.h3>

              <p className="course-description">
                Our Academy offers Graphic Design Training for beginners. This
                course is designed to help you understand the basics of graphic
                design.
              </p>

              <motion.button
                className="course-button"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                whileHover={{ scale: 1.05 }}
              >
                <FaArrowCircleRight /> Learn more
              </motion.button>
            </div>

            {/* 3 */}
            <div className="course-card">
              <motion.div
                className="course-image-container"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.4,
                  scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
                }}
                // whileHover={{ scale: 0.95 }}  // Zoom-out effect on hover
              >
                <img
                  src="src/assets/basic.png"
                  alt="product design"
                  className="course-image"
                />
              </motion.div>

              <motion.h3
                className="course-title"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                UI/UX Design Training
              </motion.h3>

              <p className="course-description">
                Our Academy offers Product Design Training for beginners. This
                course is designed to help you understand the basics of computer
                operations.
              </p>

              <motion.button
                className="course-button"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                whileHover={{ scale: 1.05 }}
              >
                <FaArrowCircleRight /> Learn more
              </motion.button>
            </div>

            {/* 4 */}
            <div className="course-card">
              <motion.div
                className="course-image-container"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.4,
                  scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
                }}
                // whileHover={{ scale: 0.95 }}  // Zoom-out effect on hover
              >
                <img
                  src="src/assets/basic.png"
                  alt="Basic Computer"
                  className="course-image"
                />
              </motion.div>

              <motion.h3
                className="course-title"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                Web Development
              </motion.h3>

              <p className="course-description">
                Our Academy offers Web Training for beginners. This course is
                designed to help you understand the what web development is all
                about.
              </p>

              <motion.button
                className="course-button"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                whileHover={{ scale: 1.05 }}
              >
                <FaArrowCircleRight /> Learn more
              </motion.button>
            </div>

            {/* 5 */}
            <div className="course-card">
              <motion.div
                className="course-image-container"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.4,
                  scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
                }}
                // whileHover={{ scale: 0.95 }}  // Zoom-out effect on hover
              >
                <img
                  src="src/assets/basic.png"
                  alt="Basic Computer"
                  className="course-image"
                />
              </motion.div>

              <motion.h3
                className="course-title"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                CyberSecurity Training
              </motion.h3>

              <p className="course-description">
                Our Academy offers CyberSecurity Training for beginners. This
                course is designed to help you understand the basics of
                cybersecurity.
              </p>

              <motion.button
                className="course-button"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                whileHover={{ scale: 1.05 }}
              >
                <FaArrowCircleRight /> Learn more
              </motion.button>
            </div>

            {/* 6 */}
            <div className="course-card">
              <motion.div
                className="course-image-container"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.4,
                  scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
                }}
                // whileHover={{ scale: 0.95 }}  // Zoom-out effect on hover
              >
                <img
                  src="src/assets/basic.png"
                  alt="Basic Computer"
                  className="course-image"
                />
              </motion.div>

              <motion.h3
                className="course-title"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                Sales/Marketing Training
              </motion.h3>

              <p className="course-description">
                Our Academy offers Sales/Marketing Training for beginners. This
                course is designed to help you understand the basics of sales
                and marketing.
              </p>

              <motion.button
                className="course-button"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                whileHover={{ scale: 1.05 }}
              >
                <FaArrowCircleRight /> Learn more
              </motion.button>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}

export default Featured;
