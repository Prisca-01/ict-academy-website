import { motion } from "framer-motion";
import { FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useState, useEffect, useRef } from "react";
import "../styles/reviews.css";

const reviews = Array(8).fill({
  name: "Jane Doe",
  date: "5 days ago",
  text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, quidem.",
});

export function ReviewCards() {
  const [current, setCurrent] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);

  const handleNext = () => setCurrent((prev) => (prev + 1) % reviews.length);
  const handlePrev = () => setCurrent((prev) => (prev - 1 + reviews.length) % reviews.length);

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };
    
    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  useEffect(() => {
    const interval = setInterval(handleNext, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="review-container" ref={containerRef}>
      <button className="carousel-button left" onClick={handlePrev}>
        <FaChevronLeft />
      </button>
      
      <div className="review-wrapper">
        <motion.div
          className="review-cards"
          animate={{ x: -current * (containerWidth + 290) }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              className="card"
              whileHover={{ y: window.innerWidth > 768 ? -5 : 0 }}
            >
              <div className="card-header">
                <img className="avatar" src="src/assets/avatar.jpeg" alt="avatar" />
                <div className="header-text">
                  <p>{review.name}</p>
                  <p>{review.date}</p>
                </div>
              </div>
              <div className="card-body">
                <div className="stars">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="star" />
                  ))}
                </div>
                <p>{review.text}</p>
              </div>
              <svg className="google-icon" viewBox="0 0 24 24">
                <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z"/>
              </svg>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <button className="carousel-button right" onClick={handleNext}>
        <FaChevronRight />
      </button>

      <div className="dots-container">
        {reviews.map((_, index) => (
          <div 
            key={index}
            className={`dot ${index === current ? 'active' : ''}`}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>
    </div>
  );
}