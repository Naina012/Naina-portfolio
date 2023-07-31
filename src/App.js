import React from 'react'
import Header from "./components/Header/Header"
import Navbar from "./components/Navbar/Navbar"
import About from "./components/About/About"
import Experience from "./components/Experience/Experience"
import Services from "./components/Services/Services"
import Portfolio from "./components/Portfolio/Portfolio"
import Education from "./components/Educations/Education"
import Contact from "./components/Contact/Contact"
import Footer from "./components/Footer/Footer"
import Skills from "./components/Skills/Skills"
const App = () => {
  return (
    <>
    <Header />
    <Navbar />
    <About />
    <Skills/>
    <Experience />
    <Services />
    <Portfolio />
    <Education />
    <Contact />
    <Footer />

    
    </>
      )
}

export default App

