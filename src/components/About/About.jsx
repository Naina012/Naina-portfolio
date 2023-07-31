import React, { useState } from 'react';
import './About.css';
import about from "../../assets/aboutme.png";

const About = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <section id='About'>
      <h2 className='h2about'>Get To Know</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={about} alt="About Image" />
          </div>
        </div>
        <div className="about_content">
          <p>
          Hi there! I'm a Web Developer with a passion for crafting immersive and user-friendly online experiences that captivate and engage users. 
          My journey into web development began in college, where I discovered my fascination with coding and fell in love with the creative process of transforming ideas into functional and visually appealing websites.
          </p>
          {expanded && (
            <>
              <p>
                Over the years, I've honed my skills and developed a keen eye for detail, color, and composition.
                I love working with clients to understand their vision and translate it into a cohesive visual brand that resonates with their audience.
              </p>
              <p>
                As a designer, I believe that design is not just about aesthetics, but also about solving problems and communicating messages effectively.
                I'm always looking for ways to push the boundaries of traditional design and create innovative solutions that make an impact.
              </p>
            </>
          )}
          <div className="expand_button">
            <button onClick={toggleExpand}>
              {expanded ? "Read Less" : "Read More"}
            </button>
          </div>
        </div>
      </div>
      <div className='lastp'>
        <p style={{ marginBottom: '15px' }}>
          I am passionate about what I do and am dedicated to delivering high-quality
          designs that exceed my clients' expectations.
          I believe that every project is an opportunity to create something beautiful and meaningful, and I approach each one with enthusiasm and dedication.
        </p>
        <p>
          Thank you for taking the time to read about me, and I look forward to the opportunity to work with you!
        </p>
      </div>
    </section>
  );
};

export default About;
