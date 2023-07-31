import React, { useState } from 'react';
import "./Skills.css";
import { BsPatchCheckFill } from "react-icons/bs";

const Skills = () => {
  const [filter, setFilter] = useState('all');
  const [selectedSkill, setSelectedSkill] = useState(null);

  const skillsData = [
    // Existing skills
    { id: 1, name: 'HTML', experience: 'Experienced', description: 'HTML is the standard markup language for creating web pages.' },
    { id: 2, name: 'CSS', experience: 'Experienced', description: 'CSS is used for styling the presentation of web pages.' },
    { id: 3, name: 'JavaScript', experience: 'Experienced', description: 'JavaScript is a versatile programming language used for web development.' },
    { id: 4, name: 'REACT.js', experience: 'Experienced', description: 'React.js is a JavaScript library for building user interfaces.' },
    { id: 5, name: 'API', experience: 'Intermediate', description: 'API (Application Programming Interface) is a set of rules that allows one software application to interact with another.' },
    { id: 6, name: 'MySQL', experience: 'Experienced', description: 'MySQL is an open-source relational database management system.' },
    { id: 7, name: 'PYTHON', experience: 'Experienced', description: 'Python is a popular programming language known for its simplicity and versatility.' },
    { id: 8, name: 'SELENIUM', experience: 'Intermediate', description: 'Selenium is a web testing framework used for automating web browsers.' },
    { id: 9, name: 'PANDAS', experience: 'Experienced', description: 'Pandas is a Python library used for data manipulation and analysis.' },
    { id: 10, name: 'DATA STRUCTURES', experience: 'Intermediate', description: 'Data structures are structures that store and organize data in a computer.' },
    { id: 11, name: 'OOPS', experience: 'Experienced', description: 'OOPS (Object-Oriented Programming) is a programming paradigm based on the concept of objects.' },
    { id: 12, name: 'DBMS', experience: 'Experienced', description: 'DBMS (Database Management System) is software that manages databases.' },
    // Add more skills...
  ];
  const handleFilterChange = (event) => {
    setFilter(event.target.value);
    setSelectedSkill(null); // Clear selected skill when changing the filter
  };

  const handleSkillClick = (skill) => {
    setSelectedSkill(skill);
  };

  return (
    <section id='Skills'>
      <h2 className='h2skills'>My Talents</h2>
      <div className="container experience_container">
        <div className='experience_frontend'>
          <h3>Professional Skills</h3>
          <div className='experience_content'>
            {skillsData.map(skill => (
              (filter === 'all' || skill.experience.toLowerCase() === filter) && (
                <article
                  key={skill.id}
                  className={`experience_details ${selectedSkill === skill ? 'selected' : ''}`}
                  onClick={() => handleSkillClick(skill)}
                >
                  <BsPatchCheckFill className='experience_details-icon' />
                  <div>
                    <h4>{skill.name}</h4>
                    <small className='text-light'>{skill.experience}</small>
                  </div>
                </article>
              )
            ))}
          </div>
        </div>
        {selectedSkill && (
          <div className="skill_description">
            <h3>{selectedSkill.name}</h3>
            <p>{selectedSkill.description}</p>
          </div>
        )}
      </div>
      <div className="filter_buttons">
        <button
          className={filter === 'all' ? 'active' : ''}
          onClick={() => handleFilterChange({ target: { value: 'all' } })}
        >
          All Skills
        </button>
        <button
          className={filter === 'experienced' ? 'active' : ''}
          onClick={() => handleFilterChange({ target: { value: 'experienced' } })}
        >
          Experienced
        </button>
        <button
          className={filter === 'intermediate' ? 'active' : ''}
          onClick={() => handleFilterChange({ target: { value: 'intermediate' } })}
        >
          Intermediate
        </button>
      </div>
    </section>
  );
}

export default Skills;
