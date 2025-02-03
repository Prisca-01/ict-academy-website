import { motion } from "motion/react";
import "../styles/header.css";
import { FaArrowRight } from "react-icons/fa";

function Hero() {
  return (
    <>
      <motion.section
        className="hero"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.4,
          scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
        }}
      >
        <div className="hero-left">
          <motion.div
            className="moving-lines"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
          ></motion.div>
          <div className="content">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <p className="rate">HIGHLY RATED ON GOOGLE</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <h1>Start Your ICT</h1>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <p className="career">Career With US</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <p>An Award Winning ICT Academy</p>
            </motion.div>
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
                <span className="text">Get Started</span>
                <motion.span
                  className="arrow"
                  initial={{ x: 0 }}
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <FaArrowRight size={20} />
                </motion.span>
              </motion.button>
            </motion.div>
          </div>
        </div>
        <motion.div
          className="hero-right"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5 }}
        >
          <img src="src/assets/programmer.png" alt="Hero Image" />
        </motion.div>
      </motion.section>
      
    </>
  );
}

export default Hero;
