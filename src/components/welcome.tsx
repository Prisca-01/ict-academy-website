import { motion } from "motion/react";
import './styles/welcome.css';

function Welcome() {
  return (
    <>
    <section id="welcome">
    <div className="images">
        <img src="src/assets/welcome.png" alt="logo" className="welcome-big" />
        <img src="src/assets/student.png" alt="logo" className="welcome-small" />
        <div className="students">
          <p className="number">800+</p>
          <p className="text">SATISFIED STUDENTS</p>
        </div>
      </div>
      <div className="texts">
        <span>Welcome to</span><h2>
            My ICT Academy
        </h2>
        <p>
            My ICT Academy is a leading online learning platform that helps anyone learn business, software, technology, and creative skills to achieve personal and professional goals. Through individual, corporate, academic and government subscriptions, members have access to the My ICT Academy video library of engaging, top-quality courses taught by recognized industry experts.
        </p>
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <motion.button
              className="animated-btn"
              whileHover="hover"
              initial="initial"
              variants={{
                initial: { opacity: 1 },
                hover: { scale: 1.05 },
              }}
            >
              <motion.span
                className="overlay"
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
              <span className="button-text">Learn more</span>
            </motion.button>
          </motion.div>
      </div>
    </section>
      
    </>
  );
}
export default Welcome;
