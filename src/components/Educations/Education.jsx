import React, { useState } from 'react';
import './Education.css';
import { IoSchoolOutline, IoPersonOutline } from 'react-icons/io5';

const Education = () => {
  const educationData = [
    {
      year: '2021-2023',
      degree: 'Master of Computer Application',
      institution: 'Chandigarh University, Mohali',
      cgpa: '8.0',
    },
    {
      year: '2018-2021',
      degree: 'Bachelor of Science (PCM)',
      institution: 'Kurukshetra University, Panchkula',
      cgpa: '7.9',
    },
    {
      year: '2016-2017',
      degree: 'Class XII (HBSE)',
      institution: 'Minerva Sr. Sec School, Jind',
      cgpa: '8.2',
    },
  ];

  const [expandedIndex, setExpandedIndex] = useState(-1);
  const [filteredEducationData, setFilteredEducationData] = useState(educationData);
  const [sortCriteria, setSortCriteria] = useState('year_desc');

  const toggleExpand = (index) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? -1 : index));
  };

  const handleSortChange = (event) => {
    const selectedSortCriteria = event.target.value;
    setSortCriteria(selectedSortCriteria);
    sortEducationData(selectedSortCriteria);
  };

  const sortEducationData = (criteria) => {
    const [sortField, sortOrder] = criteria.split('_');
    const sortedData = [...filteredEducationData].sort((a, b) => {
      if (sortOrder === 'asc') {
        return a[sortField] < b[sortField] ? -1 : 1;
      } else {
        return a[sortField] > b[sortField] ? -1 : 1;
      }
    });
    setFilteredEducationData(sortedData);
  };

  // const getTotalCGPA = () => {
  //   const totalCGPA = educationData.reduce((total, edu) => total + parseFloat(edu.cgpa), 0);
  //   return (totalCGPA / educationData.length).toFixed(2);
  // };

  return (
    <section id='Education'>
      <h2 className='h2edu'>Educational Qualifications</h2>
      <div className='education-controls'>
        <label htmlFor='sortCriteria'>Sort By:</label>
        <select id='sortCriteria' value={sortCriteria} onChange={handleSortChange}>
          <option value='year_desc'>Year (Newest First)</option>
          <option value='year_asc'>Year (Oldest First)</option>
          <option value='cgpa_desc'>CGPA (Highest First)</option>
          <option value='cgpa_asc'>CGPA (Lowest First)</option>
          <option value='degree_asc'>Degree (A-Z)</option>
          <option value='degree_desc'>Degree (Z-A)</option>
        </select>
      </div>
      <div className='container'>
        {filteredEducationData.map((edu, index) => (
          <div
            className={`education-item ${index === expandedIndex ? 'expanded' : ''}`}
            key={index}
            onClick={() => toggleExpand(index)}
          >
            <div className='education-icon'>
              {index === expandedIndex ? <IoSchoolOutline /> : <IoPersonOutline />}
            </div>
            <div className='education-details'>
              <span className='education-year'>{edu.year}</span>
              <span className='education-degree'>{edu.degree}</span>
              <span className='education-institution'>{edu.institution}</span>
              {index === expandedIndex && <span className='education-cgpa'>CGPA/Percentage: {edu.cgpa}</span>}
            </div>
          </div>
        ))}
      </div>
      <div className='education-statistics'>
        <p>Total Education Records: {educationData.length}</p>
        {/* <p>Total CGPA: {getTotalCGPA()}</p> */}
      </div>
    </section>
  );
};

export default Education;
