// import { useState } from 'react'
import { motion } from "motion/react";
import Header from "./components/header";

function App() {

  return (
    <>
    <div>
      <Header />
    </div>
    <div style={{ textAlign: "center", padding: "20px" }}>
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Welcome to ICT Academy
      </motion.h1>
    </div>
    
    </>
  )
}

export default App
