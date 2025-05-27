import React from 'react';
import Footer from '../components/Footer';
import './Education.css';
import 'aos/dist/aos.css';
import AOS from 'aos';




const educationData = [
  {
    location: 'KOLKATA, INDIA',
    image : './src/assets/jadavpur_univ.jpg',
    title: 'JADAVPUR UNIVERSITY, BACHELOR OF CIVIL ENGINEERING',
    description:
      'Education : Engineering Mechanics, Engineering Drawing, Fluid Mechanics, Building Material & Construction, Surveying, Structural Mechanics, Thermodynamics & Heat Power, Basic Electrical & Electronics Engineering, Engineering Mathematics, Physics, Chemistry, Building Planning & Drawing, Engineering Geology, Computer Programming, Theory of Structures, Hydrology, Irrigation Engineering, Valuation, Pricing & Contract, Transportation Engineering, Water Supply Engineering, Design of Concrete & Steel Structures, Soil Mechanics, Quantity Surveying, Waste Water Engineering, Hydraulic Structure, Environmental Pollution & Control, Finite Element, Dynamic Analysis.'
  },
  {
    location: 'PUNE, INDIA',
    image: './src/assets/symbiosis.avif',
    title: 'SYMBIOSIS (DLP), POST GRADUATE DIPLOMA IN BUSINESS ADMINISTRATION (PGDBA) – FINANCE',
    description:
      'Principles and Practices of Management, Organizational Behaviour, Management Accounting, Managerial Economics, Business Law, Production or Operations Management, Financial Management, Human Resources Management, Marketing Management, Management Information Systems, Capital Market, Corporate Governance, Strategic Management, Project Finance, Direct Taxation, Research Methodology and Statistical Quantitative Methods & Projects, International Finance.'
  },
  {
    location: 'KOLKATA, INDIA',
    image: './src/assets/The_institute_of_engineers.jpg',
    title: 'THE INSTITUTE OF ENGINEERS (INDIA), CHARTERED ENGINEER',
    description:
      'The Chartered Engineer certificate being issued by the IEI (which is one of world’s oldest and largest professional bodies of Engineers), plays the role of recognition and acceptance of one’s techno-academic qualification and professional attainment on a global platform.'
  },
  {
    location: 'KOLKATA, INDIA',
    image: './src/assets/The_institute_of_engineers.jpg',
    title: 'THE INSTITUTE OF ENGINEERS (INDIA), MIE',
    description: 'Twenty one years professional engineering experience in a position of responsibility.'
  },
  {
    location: 'SHIBPUR, HOWRAH , INDIA',
    image: './src/assets/shibpur.avif',
    title: 'INDIAN INSTITUTE OF ENGINEERING SCIENCE AND TECHNOLOGY, STAAD CERTIFIED ENGINEER',
    description: 'Structural steel and concrete analysis and design software certification.'
  },
  {
    location: '',
    title: '',
    description:''
  }
];

const Education = () => {
  return (
    <>
  <section className='timeline-container' data-aos ='fade-up' data-aos-duration ='800' >
  {educationData.map((item, index) => (
    <React.Fragment key={index}>
      <div className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
        <div className='education-image-container' data-aos='fade-up' data-aos-duratoion ='800'>
          <img src={item.image} alt={item.title} className='education-image' />
        </div>

        <div className='timeline-line'></div>

        <div className='education-details' data-aos='fade-up' data-aos-duratioon ='800'>
          <p className='location'>{item.location}</p>
          <h1>{item.title}</h1>
          <p className='details'>{item.description}</p>
        </div>
      </div>

      {index !== educationData.length - 1 && <div className='horizontal-divider'></div>}
    </React.Fragment>
  ))}
</section>

      <Footer />
      </>
  );
};

export default Education;
AOS.init();