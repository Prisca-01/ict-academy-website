import { useEffect, useRef } from "react";
import { gsap } from "gsap";

function Hero() {
  const headingRef = useRef(null);

  useEffect(() => {
    gsap.from(headingRef.current, {
      opacity: 1,
      y: -50,
      duration: 5,
      ease: "power1.out",
    });
  }, []);

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1 ref={headingRef}>Welcome to ICT Academy</h1>
    </div>
  );
}

export default Hero;
