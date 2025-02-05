// "use client"

// import { animate, motion, useMotionValue, useTransform } from "motion/react"
// import { useEffect } from "react"

// export default function Counter() {
//     const count = useMotionValue(0)
//     const rounded = useTransform(() => Math.round(count.get()))

//     useEffect(() => {
//         const controls = animate(count, 200, { duration: 4 })
//         return () => controls.stop()
//     }, [])

//     return <motion.pre style={text}>{rounded}</motion.pre>
// }



// const text = {
//     fontSize: 64,
//     color: "#4ff0b7",
// }


import { animate, motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect } from "react";

interface CounterProps {
  targetNumber: number;
  label: string;
  suffix?: string;
  style?: React.CSSProperties;

}

function Counter({ targetNumber, label, suffix = "" , style}: CounterProps) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (value) => 
    Math.round(value) + suffix
  );

  useEffect(() => {
    const controls = animate(count, targetNumber, {
      duration: 6,
      ease: "easeOut"
    });
    return () => controls.stop();
  }, [targetNumber, count]);

  return (
    <div className="counter-column " style={style}>
      <motion.div className="counter-number">{rounded}</motion.div>
      <div className="counter-label">{label}</div>
    </div>
  );
}

export default Counter;