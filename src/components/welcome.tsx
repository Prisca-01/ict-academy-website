import { motion } from "motion/react";
import "../styles/welcome.css";
import Counter from "./counter";
function Welcome() {
  return (
    <section className="welcomeSection">
      <div className="welcomeGrid">
        <div className="welcomeMediaContainer">
          <img
            src="src/assets/student.jpeg"
            alt="Main welcome visual"
            className="welcomeMainImage"
          />
          <img
            src="src/assets/coder.png"
            alt="Coder illustration"
            className="welcomeSecondaryImage"
          />
          <div className="studentStatsCard">
  <Counter
    targetNumber={800}
    label="SATISFIED STUDENTS"
    suffix="+"
    // style={{ 
    //   backgroundColor: '#ffffff',
    //   padding: '20px 30px',
    //   borderRadius: '8px',
    //   color: '#000000',
    //   textAlign: 'center'
    // }}
  />
</div>
        </div>

        <div className="welcomeContent">
          <span className="welcomePrefix">Welcome to</span>
          <h2 className="welcomeTitle">My ICT Academy</h2>
          <div className="contentDivider">
            <div className="dividerLine"></div>
            <p className="welcomeDescription">
              My ICT Academy is a leading online learning platform that helps
              anyone learn business, software, technology, and creative skills
              to achieve personal and professional goals. Through individual,
              corporate, academic and government subscriptions, members have
              access to the My ICT Academy video library of engaging,
              top-quality courses taught by recognized industry experts.
            </p>
            <div className="dividerLine"></div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <motion.button
              className="ctaButton"
              whileHover="hover"
              initial="initial"
              variants={{
                initial: { opacity: 1 },
                hover: { scale: 1.05 },
              }}
            >
              <motion.span
                className="buttonOverlay"
                variants={{
                  hover: {
                    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                    transition: { duration: 0.3, ease: "easeInOut" },
                  },
                  initial: {
                    clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
                  },
                }}
              ></motion.span>
              <span className="buttonLabel">Learn more</span>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Welcome;