// src/pages/Apartment.jsx
import React, { useState } from 'react';
import Modal from 'react-modal';
import './ProjectDetail.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const projectImages = {
  'Clarksburg High School': [
    './src/assets/Instituitional Building/ClarksburgHIghSchool.jpg',
    './src/assets/Instituitional Building/ClarksburgHIghSchool1.jpg',
    './src/assets/Instituitional Building/ClarksburgHIghSchool2.jpg',
  ],
  'Glenarden Woods Elementary School': [
    './src/assets/Instituitional Building/GlenardenWoodsElementarySchool.jpg',
    './src/assets/Instituitional Building/GlenardenWoodsElementarySchool1.jpg',
  ],
  'Haymarket Elementary': [
    './src/assets/Instituitional Building/HaymarketElementary.jpg',
    './src/assets/Instituitional Building/HaymarketElementary1.jpg',
    './src/assets/Instituitional Building/HaymarketElementary2.jpg',
  ],
  'Michigan Carpenters Center': [
    './src/assets/Instituitional Building/MichiganCarpentersCenter.jpg',
    './src/assets/Instituitional Building/MichiganCarpentersCenter1.jpg',
  ],
  'Oakdale Christian Academy': [
    './src/assets/Instituitional Building/OakdaleChristianAcademy.jpg',
    './src/assets/Instituitional Building/OakdaleChristianAcademy1.jpg',
  ],
  'Skyvue Elementary School':[
    './src/assets/Instituitional Building/SkyvueElementarySchool.jpg',
    './src/assets/Instituitional Building/SkyvueElementarySchool1.jpg',
    './src/assets/Instituitional Building/SkyvueElementarySchool2.jpg',
  ],
  'Stafford High School': [
    './src/assets/Instituitional Building/StaffordHighSchool.jpg',
    './src/assets/Instituitional Building/StaffordHighSchool1.jpg',
    './src/assets/Instituitional Building/StaffordHighSchool2.jpg',
  ],
  'VCU Classrooms': [
    './src/assets/Instituitional Building/VCU-Classrooms.jpg',

  ],
};


const places = [
  {
   location: 'Clarksburg,MD',
  },
  {
   location: 'Glenarden Parkway, GLENARDEN MD',
  },
  {
   location: 'Haymarket Elementary',
  },
  {
   location: 'Detroit, MI',
  },
  {
   location: 'Jackson, KY',
  },
  {
   location: 'Graysville, US',
  },
  {
   location: 'Frederickburg,VA',
  },
  {
   location: 'Richmond,VA',
  },
]





const relatedProjects = [
  {
    title: 'Healthcare and Medical',
    image: './src/assets/healthcare/osf_bloomington_1.jpg',
    path: '/healthcare-and-medical',
  },
  {
    title: 'Industrial',
    image: './src/assets/industrial.jpg',
    path: '/industrial',
  },
  {
    title: 'Office Building',
    image: './src/assets/office.jpg',
    path: '/office-building',
  },
  {
    title: 'Fitness & Wellness',
    image: './src/assets/wellness.jpg',
    path: '/fitness-wellness',
  },
  // Add more related projects
];

Modal.setAppElement('#root');

const InstitutionalBuilding = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [activeImages, setActiveImages] = useState([]);
  const navigate = useNavigate();

  const openModal = (images) => {
    setActiveImages(images);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="project-detail-page" data-aos='fade-right' data-aos-duration='800' >
      <section className="title-section">
        <h1>Institutional Building</h1>
      </section>

      <section className="cards-section" data-aos='fade-right'>
        {Object.entries(projectImages).map(([title, images], index) => (
          <div key={title} className="project-card" onClick={() => openModal(images)}>
            <img src={images[0]} alt={title} />
            <div className="project-info">
              <h2>{title}</h2>
              <p>{places[index]?.location}</p>  {/* Removed the "Luxury" text */}
            </div>
          </div>
        ))}
      </section>

      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} className="modal">
        <button className="close-btn" onClick={closeModal}>X</button>
        <div className="gallery">
          {activeImages.map((src, index) => (
            <img key={index} src={src} alt={`Gallery ${index}`} />
          ))}
        </div>
      </Modal>

      <section className="description-section" data-aos='fade-right' data-aos-duration='800'>
        <h2>Project Description</h2>
        <p>
          This section provides a detailed description of the Institutional Building projects completed,
          including architectural, structural, and client needs.
        </p>
      </section>

      <Slider
        dots={false}
        infinite={true}
        speed={500}
        slidesToShow={3}
        slidesToScroll={1}
        arrows={true}
        responsive={[
          {
            breakpoint: 1024,
            settings: { slidesToShow: 2 },
          },
          {
            breakpoint: 600,
            settings: { slidesToShow: 1 },
          },
        ]}
      >
        {relatedProjects.map((project) => (
          <div key={project.title} className="carousel-card" onClick={() => navigate(project.path)}>
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default InstitutionalBuilding;
AOS.init();
