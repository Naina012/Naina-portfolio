import React, { useState } from 'react';
import './Services.css';
import { BsPatchCheckFill } from 'react-icons/bs';

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  const servicesData = [
    {
      id: 1,
      title: 'Web Development',
      details: [
        {
          id: 1,
          skill: 'Create custom websites and web applications using HTML, CSS, JavaScript, and React.',
          
        },
        {
          id: 2,
          skill: 'Develop backend functionality using Python and MySQL for database management.',
          
        },
        {
          id: 3,
          skill: 'Implement API integration to connect your web applications with external services.',
          
        },
      ],
    },
    {
      id: 2,
      title: 'Web Scraping',
      details: [
        {
          id: 1,
          skill: 'Provide web scraping services using Python and BeautifulSoup to extract data from websites.',
          
        },
        {
          id: 2,
          skill: 'Build automated web scrapers with Selenium to gather data from dynamic websites.',
        }
          
      ],
    },
    {
      id: 3,
      title: 'Data Analysis and Visualization',
      details: [
        {
          id: 1,
          skill: 'Analyze and process data using Python and MySQL for data manipulation and querying.',
          
        },
        {
          id: 2,
          skill: 'Create interactive data visualizations using libraries like Matplotlib, Pandas, or D3.js.',
          
        },
      ],
    },
    {
      id: 4,
      title: 'Automation and Scripting',
      details: [
        {
          id: 1,
          skill: 'Develop custom automation scripts using Python to streamline repetitive tasks.',
          
        },
        {
          id: 2,
          skill: 'Use Selenium to automate web interactions and data extraction.',
          
        },
      ],
    },
    {
      id: 5,
      title: 'Database Management',
      details: [
        {
          id: 1,
          skill: 'Set up and manage MySQL databases for web applications and projects.',
          
        },
        {
          id: 2,
          skill: 'Optimize database performance and ensure data security.',
        }
          
      ],
    },
    {
      id: 6,
      title: 'Custom Software Development',
      details: [
        
        {
          id: 1,
          skill: 'Develop custom software solutions to meet specific client requirements using Python and other technologies.',
          
        },
      ],
    },
  ];

  const handleServiceClick = (serviceId) => {
    setSelectedService(serviceId === selectedService ? null : serviceId);
  };

  return (
    <section id='Services'>
      
      <h2 className='h2ser'>My<span> Services</span></h2>
      <div className='container experience_container'>
        {servicesData.map((service) => (
          <div
            key={service.id}
            className={`experience_service ${
              selectedService === service.id ? 'active' : ''
            }`}
            onClick={() => handleServiceClick(service.id)}
          >
            <h3>{service.title}</h3>
            {selectedService === service.id && (
              <div className='service_details'>
                {service.details.map((detail) => (
                  <article className='experience_details' key={detail.id}>
                    <BsPatchCheckFill className='experience_details-icon' />
                    <div>
                      <h4>{detail.skill}</h4>
                      <small className='text-light'>{detail.experience}</small>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;




