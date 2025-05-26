// src/pages/Apartment.jsx
import React, { useState } from 'react';
import Modal from 'react-modal';
import './ProjectDetail.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useNavigate } from 'react-router-dom';

const projectImages = {
  'Shintech Plaquemine PVC Plant ': [
    './src/assets/Pipe Rack and Vent Stack/ShintechPlaqueminePVCPlant-1.jpg',

  ],
  'The New Eta Creative Arts Vent Stack ': [
    './src/assets/Pipe Rack and Vent Stack/TheNewEtaCreativeArtsVentStack.jpg',

  ],
};

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

const PipeRackVentStack = () => {
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
        <h1>PIPE RACK & VENT STACK</h1>
      </section>

      <section className="cards-section">
        {Object.entries(projectImages).map(([title, images]) => (
          <div key={title} className="project-card" onClick={() => openModal(images)}>
            <img src={images[0]} alt={title} />
            <div className="project-info">
              <h2>{title}</h2>
              <p>Petersburg, VA</p>  {/* Removed the "Luxury" text */}
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
        This section provides a detailed description of the pipe and vent stack projects completed, highlighting the engineering design, structural innovations, and tailored solutions developed to meet client needs.
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

export default PipeRackVentStack;
