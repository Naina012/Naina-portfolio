import React from 'react'
import "./Portfolio.css"
import pr1 from '../../assets/project1.jpeg';
import pr2 from '../../assets/project2.jpg';
import pr3 from '../../assets/project3.jpeg';
import pr4 from '../../assets/project4.jpeg';
// import pr5 from '../../assets/project5.jpg';
// import pr6 from '../../assets/project6.jpg';
const Portfolio = () => {
  return (
    <section id='Portfolio'>
      <h5 className='h5por'>My Reacent Work</h5>
      <h2 className='h2por'>Portfolio</h2>

      <div className='container portfolio_container'>
      <article className='portfolio_item'>
        <div className='portfolio_item-image'>
          <img src={pr1} alt=''/>
        </div>
        <h3>WEATHER APP</h3>
        <a href="https://github.com/Naina012/Weather-app" className='btn' target='_blank' rel="noopener">Github</a>
        <a href="https://naina012.github.io/Weather-app/" className='btn btn-primary' target='_blank'>Live Demo</a>
      </article>
      
      <article className='portfolio_item'>
        <div className='portfolio_item-image'>
          <img src={pr2} alt=''/>
        </div>
        <h3>MULTIPLICATION APP</h3>
        <a href="https://github.com/Naina012/Multiply-Me" className='btn' target='_blank'>Github</a>
        <a href="https://naina012.github.io/Multiply-Me/" className='btn btn-primary' target='_blank'>Live Demo</a>
      </article>
      <article className='portfolio_item'>
        <div className='portfolio_item-image'>
          <img src={pr4} alt=''/>
        </div>
        <h3>TIC TAC TOE</h3>
        <a href="https://github.com/Naina012/TicTacToe" className='btn' target='_blank'>Github</a>
        <a href="https://github.com/Naina012/TicTacToe/blob/main/tic.py" className='btn btn-primary' target='_blank'>Live Demo</a>
      </article>
      <article className='portfolio_item'>
        <div className='portfolio_item-image'>
          <img src={pr3} alt=''/>
        </div>
        <h3>Fitness Site</h3>
        <a href="https://github.com/Naina012/Gym-Fire" className='btn' target='_blank'>Github</a>
        <a href="https://naina012.github.io/Gym-Fire/" className='btn btn-primary' target='_blank'>Live Demo</a>
      </article>
      
      </div>
    </section>
  )
}

export default Portfolio