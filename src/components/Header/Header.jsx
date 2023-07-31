import React from 'react';
import './Header.css';
import CV from '../../assets/Resume.pdf';
import girl from '../../assets/girl.png';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Header = () => {
  const handleScrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className='home' id='home'>
      <div className='home__container container'>
        <div className='home__intro'>
          <img src={girl} alt='Girl' className='home__image' />
          <div className='home__text'>
            <p className='home__subtitle text-cs'>
              Hello, <span>I'm</span>
            </p>
            <h1 className='home__title text-cs'>
              <span>Naina</span> Kaushik
            </h1>
            <p className='home__job'>
              <span className='text-cs'>Fullstack</span> Developer
            </p>
            <h5>Haryana, India</h5>
          </div>
        </div>
        <div className='home__socials'>
          <a
            href='https://www.linkedin.com/in/naina0109/'
            className='home__social-link'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaLinkedin />
          </a>
          <a
            href='https://github.com/Naina012'
            className='home__social-link'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaGithub />
          </a>
        </div>
        <div className='home__btns'>
          <a href={CV} download className='btn btn--primary'>
            Download Resume
          </a>
          <button className='btn btn--secondary' onClick={handleScrollToContact}>
            Let's Talk
          </button>
        </div>
      </div>
    </section>
  );
};

export default Header;
