// src/pages/HealthcareAndMedical.jsx
import React, { useState } from 'react';
import Modal from 'react-modal';
import './ProjectDetail.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useNavigate } from 'react-router-dom';

const projectImages = {
  'OSF Bloomington MOB': [
    './src/assets/healthcare/osf_bloomington_1.jpg',
    './src/assets/healthcare/osf_bloomington_2.jpg',

  ],
  'OSF Center for Health Care': [
    './src/assets/healthcare/2633246469.jpg',
    './src/assets/healthcare/OSFCenterForHealthCare1.jpg',
  ],
  'Stafford Hospital Center': [
    './src/assets/healthcare/StaffordHospitalCenter.jpg',
    './src/assets/healthcare/StaffordHospitalCenter1.jpg',
    './src/assets/healthcare/StaffordHospitalCenter2.jpg',
  ],
  'RRHRCC Medical Arts Expansion': [
    './src/assets/healthcare/RRHRCCMedicalArtsExpansion.jpg',
    './src/assets/healthcare/RRHRCCMedicalArtsExpansion1.jpg',

  ],
  'Thedacare Neenah': [
    './src/assets/healthcare/ThedacareNeenah.jpg',
    './src/assets/healthcare/ThedacareNeenah1.jpg',
    './src/assets/healthcare/ThedacareNeenah2.jpg',

  ],
  'Thedacare Regional Cancer Center': [
    './src/assets/healthcare/ThedacareRegionalCancerCenter.jpg',
    './src/assets/healthcare/ThedacareRegionalCancerCenter1.jpg',
    './src/assets/healthcare/ThedacareRegionalCancerCenter2.jpg',

  ],'Bay Area Medical Center': [
    './src/assets/healthcare/BayAreaMedicalCenter.jpg',
    './src/assets/healthcare/BayAreaMedicalCenter1.jpg',
    './src/assets/healthcare/BayAreaMedicalCenter2.jpg',

  ],

};

const places = [
  {
    location:'Bloomington,IL',
  },
  {
    location:'Steator,IL'
  },
  {
    location:'Stafford,VA'
  },
  {
    location:'Mt,Vernon,KY'
  },
  {
    location:'Neenah,WI'
  },
  {
    location:'Appleton'
  },
  {
    location:'Marinette,WI'
  }
]


const relatedProjects = [
  { title: 'Industrial', image: './src/assets/industrial.jpg', path: '/industrial' },
  { title: 'Office Building', image: './src/assets/office.jpg', path: '/office-building' },
  { title: 'Theater Building', image: './src/assets/Theater.jpg', path: '/theater-building' },
  { title: 'Fitness & Wellness', image: './src/assets/wellness.jpg', path: '/fitness-wellness' },
  { title: 'Apartment', image: './src/assets/apartment.jpg', path: '/apartment' },
  { title: 'Library', image: './src/assets/Library.jpg', path: '/library' },
];

Modal.setAppElement('#root');

const HealthcareAndMedical = () => {
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
    <div className="project-detail-page">
      <section className="title-section">
        <h1>Healthcare and Medical</h1>
      </section>

      <section className="cards-section">
        {Object.entries(projectImages).map(([title, images], index) => (
          <div key={title} className="project-card" onClick={() => openModal(images)}>
            <img src={images[0]} alt={title} />
            <div className="project-info">
              <h2>{title}</h2>
              <p>{places[index]?.location}</p>
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

      <section className="description-section">
        <h2>Project Description</h2>
        <p>
          This section provides a detailed description of the healthcare and medical projects
          completed, including architectural, structural, and client needs.
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

export default HealthcareAndMedical;
