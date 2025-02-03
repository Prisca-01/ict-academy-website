// import { useState } from 'react'
// import { motion } from "motion/react";
import Header from "./components/header";
import Hero from "./components/hero";
import Welcome from "./components/welcome";
import Featured from "./components/featured";
import Reviews from "./components/reviews";
import Footer from "./components/footer";

function App() {

  return (
    <>
    <div>
      <Header />
    </div>
    <section>
      <Hero />
    </section>
    <section>
    <Welcome/>
    </section>
    <section>
      <Featured/>
    </section>
    <section>
      <Reviews/>
    </section>
    <section>
      <Footer/>
    </section>
   
    {/* <div style={{ textAlign: "center", padding: "20px" }}>
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Welcome to ICT Academy
      </motion.h1>
    </div>
     */}
    </>
  )
}

export default App;
