import React from 'react'
import "./Experience.css"
import {BsCheckAll} from 'react-icons/bs'
const Experience = () => {
  return (
    <section id='Experience'>
      <h2 className='h2exp'>Experiences</h2>
      <div className='"container services_container'>
        <article className='service'>
          <div className='service_head'>
          <h3>Engineering Intern</h3>

          </div>
          <ul className='service_list'>
            <li>
              <BsCheckAll className='service_list-icon'/>
              <p>Company Name - Zigram Data Technologies Private Limited's </p>
            </li>
            <li>
              <BsCheckAll className='service_list-icon'/>
              <p>Advanced Web Scraping and Data Engineering: Led successful web scraping projects, applying advanced techniques to 
overcome challenges like dynamic websites, login authentication, and pagination. </p>
            </li>
            <li>
              <BsCheckAll className='service_list-icon'/>
              <p>Flask APIs and Data Science: Developed Flask APIs integrated with web scraping pipelines, enabling efficient 
data retrieval, processing, and analysis.</p>
            </li>
            <li>
              <BsCheckAll className='service_list-icon'/>
              <p>: Proposed enhancements for web scraping, data analysis, and 
API development. Streamlined workflows, improved data quality, optimized performance, and utilized data 
warehousing.</p>
            </li>
            <li>
              <BsCheckAll className='service_list-icon'/>
              <p>6 Months Internship</p>
            </li>
          </ul>

        </article>
        <article className='service'>
          <div className='service_head'>
          <h3>Graphic Designing Training </h3>

          </div>
          <ul className='service_list'>
            <li>
              <BsCheckAll className='service_list-icon'/>
              <p>Company Name - Ekarma, Panchkula  </p>
            </li>
            <li>
              <BsCheckAll className='service_list-icon'/>
              <p>Acquired advanced skills in Adobe Photoshop and Illustrator, specializing in image correction techniques and designing on Illustrator Canvas.</p>
            </li>
            <li>
              <BsCheckAll className='service_list-icon'/>
              <p>Demonstrated expertise in utilizing Adobe Photoshop for image correction and manipulation, while showcasing strong design skills on the Illustrator Canvas for creating visually appealing graphics and illustrations.</p>
            </li>
            
            <li>
              <BsCheckAll className='service_list-icon'/>
              <p>6 Months Training</p>
            </li>
          </ul>

        </article>
        
      </div>
    </section>
  )
}

export default Experience