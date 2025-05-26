import React, { useState } from 'react';
import './Portfolio.css';
import Footer from '../components/Footer';

import AOS from 'aos';
import 'aos/dist/aos.css';

const imageModules = import.meta.glob('../assets/**/*.{jpg,jpeg,png}', { eager: true });
const getImage = (path) => {
  const normalizedPath = path.replace('../src/assets/', '../assets/');
  return imageModules[normalizedPath]?.default || '';
};

const portfolioData = {
  'Medical & Healthcare': [
    {
      name: 'OSF Bloomington MOB',
      location: 'Bloomington , IL',
      images: ['../src/assets/healthcare/2633246469.jpg', '../src/assets/healthcare/OSF-3.jpg' ]
    },
    {
      name: 'OSF Center For Health Care ',
      location: 'Streator, IL',
      images: ['../src/assets/healthcare/OSF-1.jpg', '../src/assets/healthcare/OSF-2.jpg', '../src/assets/healthcare/OSF-3.jpg']
    },
    {
      name: 'Stafford Hospital Center',
      location: 'Stafford, VA',
      images: ['../src/assets/healthcare/SHC-1.jpg', '../src/assets/healthcare/SFC-2.jpg', '../src/assets/healthcare/SHC-3.jpg']
    },
    {
      name: 'Thedacare Regional Cancer Center',
      location: 'Appleton',
      images: ['../src/assets/healthcare/TRCC-1.jpg', '../src/assets/healthcare/TRCC-2.jpg', '../src/assets/healthcare/TRCC-3.jpg']
    },
    {
      name: 'RRHRCC Medical Arts Expansion',
      location: 'Mt. Vernon, KY',
      images: ['../src/assets/healthcare/RRHRCC-1.jpg', '../src/assets/healthcare/RRHRCC-2.jpg', '../src/assets/healthcare/TRCC-3.jpg']
    },
    {
      name: 'Thedacare Neenah',
      location: 'Neenah,WI',
      images: ['../src/assets/healthcare/TN-1.jpg', '../src/assets/healthcare/TN-2.jpg', '../src/assets/healthcare/TN-3.jpg']
    },
    {
      name: 'Bay Area Medical Center',
      location: 'Marinette, WI',
      images: ['../src/assets/healthcare/BAMC-1.jpg', '../src/assets/healthcare/BAMC-2.jpg', '../src/assets/healthcare/BayAreaMedicalCenter2.jpg']
    },
  ],
  Industrial: [
    { name: 'Shintech Plauquemine PVC Plant', location: 'Louisiana, USA', images: ['../src/assets/Industrial/SPVC-1.jpg', '../src/assets/Industrial/SPVC-2.jpg', '../src/assets/Industrial/SPVC-3.jpg','../src/assets/Industrial/SPVC-4.jpg' ] },
    { name: 'GNS Scalping Green Tower', location: 'New Auburn, WI', images: ['../src/assets/Industrial/GNSSST.jpg', '../src/assets/Industrial/GNSDSB.jpg',] },
    { name: 'Bratney Forage Genetics', location: 'Nampa, ID', images: ['../src/assets/Industrial/BFG.jpg', '../src/assets/Industrial/BFG-1.jpg','../src/assets/Industrial/BFG-2.jpg'] },
    { name: 'Dow Marshall Town', location: 'Marshalltown, IOWA', images: ['../src/assets/Industrial/DowMarshalltown.jpg'] },
    { name: 'Bratney Spokane Seed', location: 'Coglax, WA', images: ['../src/assets/Industrial/BratneySpokaneSeed.jpg'] },
    { name: 'Sargent Sand Silica', location: 'Ludington, MI', images: ['../src/assets/Industrial/SSS.jpg'] },
    { name: 'Belt Press Stand and Dewatering', location: 'Edgewater, WI', images: ['../src/assets/Industrial/BPSAD.jpg'] },
    { name: 'Bratney Sheller', location: 'Ogden, Iowa', images: ['../src/assets/Industrial/BratneySheller.jpg','../src/assets/Industrial/BratneySheller1.jpg','../src/assets/Industrial/BratneySheller3.jpg',] },
    { name: 'GNS New Dry Plant', location: 'Chetek, WI', images: ['../src/assets/Industrial/GNSDP.jpg'] },
    { name: 'East Jordan', location: 'Elmira, MI', images: ['../src/assets/Industrial/EastJordan.jpg', '../src/assets/Industrial/EastJordan1.jpg', '../src/assets/Industrial/EastJordan2.jpg'] },
    { name: 'Fairfax Pretreatment', location: 'Kanas City, KS', images: [ '../src/assets/Industrial/FfP.jpg', ] }
  ],

  'Office Building': [
    { name: 'Reynolds Crossing West', location: 'Richmond, VA', images: ['../src/assets/Office Building/ReynoldsCrossingWest.jpg', '../src/assets/Office Building/ReynoldsCrossingWest1.jpg'] },
    { name: 'Bemis Innovation Center', location: 'Neenah, WI', images: ['../src/assets/Office Building/BemisInnovationCenter.jpg', '../src/assets/Office Building/BemisInnovationCenter1.jpg'] },
    { name: 'One Menasha Center', location: 'Menasha, US', images: ['../src/assets/Office Building/OneMenashaCenter.jpg', '../src/assets/Office Building/OneMenashaCenter1.jpg', '../src/assets/Office Building/OneMenashaCenter2.jpg'] },
    { name: 'Titletown Building', location: 'Ashwaubenon, WI', images: ['../src/assets/Office Building/TitletownBuilding.jpg', '../src/assets/Office Building/TitletownBuilding1.jpg', '../src/assets/Office Building/TitletownBuilding2.jpg'] },
    { name: 'Sheridan Army Reserve Center', location: 'Fort Sheridan, IL', images: ['../src/assets/Office Building/SheridanArmyReserveCenter.jpg', '../src/assets/Office Building/SheridanArmyReserveCenter1.jpg'] },
    { name: 'YMCA Of Marquette County', location: 'Marquette, MI', images: ['../src/assets/Office Building/YMCAOfMarquetteCounty.jpg', '../src/assets/Office Building/YMCAOfMarquetteCounty1.jpg'] }
  ],
  Institutional: [
    { name: 'Stafford High School', location: 'Fredericksburg, VA', images: ['../src/assets/Instituitional Building/StaffordHighSchool.jpg', '../src/assets/Instituitional Building/StaffordHighSchool1.jpg','../src/assets/Instituitional Building/StaffordHighSchool2.jpg'] },
    { name: 'Skyvue Elementary School', location: 'Graysville, US', images: ['../src/assets/Instituitional Building/SkyvueElementarySchool.jpg', '../src/assets/Instituitional Building/SkyvueElementarySchool1.jpg', '../src/assets/Instituitional Building/SkyvueElementarySchool2.jpg'] },
    { name: 'Clarksburg High School', location: 'Clarksburg, MD', images: ['../src/assets/Instituitional Building/ClarksburgHighSchool.jpg', '../src/assets/Instituitional Building/ClarksburgHighSchool1.jpg','../src/assets/Instituitional Building/ClarksburgHighSchool2.jpg'] },
    { name: 'Glenarden Woods Elementary School', location: 'Glenarden Parkway, GLENARDEN MD', images:['../src/assets/Instituitional Building/GlenardenWoodsElementarySchool.jpg' , '../src/assets/Instituitional Building/GlenardenWoodsElementarySchool1.jpg'] },
    { name: 'Haymarket Elementary', location: 'Haymarket Elementary', images: ['../src/assets/Instituitional Building/hay.jpg', '../src/assets/Instituitional Building/hay2.jpg','../src/assets/Instituitional Building/hay3.jpg'] },
    { name: 'VCU Classrooms', location: 'Richmond, VA', images: ['../src/assets/Instituitional Building/vcu.jpg'] },
    { name: 'Oakdale Christian Academy', location: 'Jackson, KY', images: ['../src/assets/Instituitional Building/oak.jpg', '../src/assets/Instituitional Building/oak1.jpg'] },
    { name: 'Howard Suamico School', location: 'Green Bay, WI', images: ['../src/assets/Instituitional Building/howa.jpg', '../src/assets/Instituitional Building/howa1.jpg'] },
    { name: 'Michigan Carpenters Center', location: 'Detroit, MI', images: ['../src/assets/Instituitional Building/michi1.jpg','../src/assets/Instituitional Building/michi2.jpg', ] }
  ],
  'Pipe Rack and Vent Stack': [
    { name: 'Shintech Plaquemine PVC Plant', location: 'Louisiana, USA', images: ['../src/assets/Pipe Rack and Vent Stack/shin.jpg'] },
    { name: 'The New Eta Creative Arts Vents Stack', location: 'Chicago, IL', images: ['../src/assets/Pipe Rack and Vent Stack/thenew.jpg'] }
  ],
  'Theater Building': [
    { name: 'The New Eta Creative Arts Foundation Complex', location: 'Chicago, IL', images: ['../src/assets/Theater Building/thenewe.jpg']} ,
    { name: 'Havre DeGrace Opera House', location: 'Union Avenue Havre De Grace', images: ['../src/assets/Theater Building/havre1.jpg','../src/assets/Theater Building/havre1.jpg'] },

  ],
  'Fitness Wellness': [
    { name: 'Radford Fitness Center', location: 'Radford, VA', images: ['../src/assets/Fitness Wellness/Rad-1.jpg','../src/assets/Fitness Wellness/Rad-2.jpg', '../src/assets/Fitness Wellness/Rad-3.jpg' ] },
    { name: 'Redskins Training Center', location: 'Richmond, VA', images: ['../src/assets/Fitness Wellness/Rtc-1.jpg','../src/assets/Fitness Wellness/Rtc-2.jpg','../src/assets/Fitness Wellness/Rtc-3.jpg'] }
  ],
  Apartment: [
    { name: 'Wheat Ridge Apartments', location: 'Ephrata, PA', images: ['../src/assets/Apartment/photo1.jpg', '../src/assets/Apartment/Photo2.jpg'] }
  ],
  Library: [
    { name: 'Petersburg Public Library', location: 'Petersburg, VA', images: ['../src/assets/Library/PetersburgPublicLibrary.jpg','../src/assets/Library/PetersburgPublicLibrary1.jpg',] }
  ]
};

const Portfolio = () => {
  const categories = Object.keys(portfolioData);
  const [selectedTab, setSelectedTab] = useState(categories[0]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setSelectedImage(0);
    window.scrollTo({ top: 50, behavior: 'smooth' });
  };

  const closeHero = () => {
    setSelectedProject(null);
  };

  return (
    <>
      <div className="portfolio-container">
        {/* Tab Scroller */}
        <div className="tab-bar-scroller" data-aos='zoom-in-right'>
          <div className="tab-bar" data-aos='fade-left' data-aos-duration='800'>
            {categories.map((cat) => (
              <button
                key={cat}
                className={`tab-button ${cat === selectedTab ? 'active' : ''}`}
                onClick={() => {
                  setSelectedTab(cat);
                  setSelectedProject(null);
                }}

              >
                {cat}

              </button>
            ))}
          </div>
        </div>

        <h2 className="section-heading" data-aos='fade-right' data-aos-duration='800'>{selectedTab}</h2>

        {/* Hero Image View */}
        {selectedProject && (
          <div
            className="hero-image"
            style={{
              backgroundImage: `url(${getImage(selectedProject.images[selectedImage])})`,
            }}
            data-aos='fade-left' data-aos-duration='800'
          >
            <div className="caption-box" data-aos='zoom-in' data-aos-duration='800'>
              <h3>{selectedProject.name}</h3>
              <p>{selectedProject.location}</p>
            </div>
            <button className="close_btn" onClick={closeHero}>X</button>
            <div className="thumb-box">
              {selectedProject.images.map((img, idx) => (
                <img
                  key={idx}
                  src={getImage(img)}
                  alt="thumbnail"
                  onClick={() => setSelectedImage(idx)}
                />
              ))}
            </div>
          </div>
        )}

        {/* Description */}
        {selectedProject && (
          <>
            <h3 className="section-subheading" data-aos='fade-right' data-aos-duration='800'>Project Description</h3>
            <div className="project-description">
              <p>
                Project description for <strong>{selectedProject.name}</strong> located in {selectedProject.location}.
              </p>
            </div>

            <h3 className="section-subheading">Related Projects</h3>
          </>
        )}

        {/* All Projects Slider */}
        <div className="project-slider" >
          {portfolioData[selectedTab].map((project, index) => (
            <div
              className="project-card" data-aos='zoom-in-up' data-aos-duration='800'
              key={index}
              onClick={() => handleProjectClick(project)}
            >
              <img src={getImage(project.images[0])} alt={project.name} />
              <div className="overlay">
                <h3>{project.name}</h3>
                <p>{project.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};
export default Portfolio;
AOS.init();