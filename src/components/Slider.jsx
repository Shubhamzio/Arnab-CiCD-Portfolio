
import { useNavigate } from 'react-router-dom';
import './Slider.css';
import First_Project from '/healthcare/TN-1.jpg';
import Second_Project from '/Industrial/EastJordan.jpg';
import Third_Project from '/Instituitional Building/ClarksburgHighSchool.jpg';
import Fourth_Project from '/Theater Building/HavreDeGraceOperaHouse.jpg';
import Fifth_Project from '/Instituitional Building/HaymarketElementary.jpg'
import Sixth_Project from '/Library/PetersburgPublicLibrary.jpg';
import AOS from 'aos';
 import 'aos/dist/aos.css';


const Slider = () => {
  const navigate = useNavigate();

  const goToPortfolio = (e) => {
  e.preventDefault();
  window.scrollTo(0, 0); // scroll to top
  navigate('/portfolio');
};

  return (
    <div className='slider'>
      <div className='slider_heading'>
        <h1 data-aos='fade-right' data-aos-duration='800'>Services</h1>
      </div>

      <div className='Cards'>

        <div className='card' data-aos='fade-right'>
          <img src={First_Project} alt='First project' />
          <h2>HEALTHCARE & MEDICAL</h2>

        </div>

        <div className='card' data-aos='fade-left'>
          <img src={Second_Project} alt='Second project' />
          <h2>INDUSTRIAL</h2>

        </div>
        <div className='card' data-aos='fade-right'>
          <img src={Third_Project} alt='Third project' />
          <h2>INSTITUTIONAL</h2>
        </div>
        <div className='card' data-aos='fade-left'>
          <img src={Fourth_Project} alt='Fourth project' />
          <h2>THEATER</h2>
        </div>
        <div className='card' data-aos='fade-right'>
          <img src={Fifth_Project} alt='Fifth project' />
          <h2>SCHOOL</h2>
        </div>
        <div className='card'data-aos='fade-left'>
          <img src={Sixth_Project} alt='Sixth project' />
          <h2>LIBRARY</h2>
        </div>
      </div>

      <div className='Explore_button' >
        <button type='button' className='explore' onClick={goToPortfolio}>Explore Portfolio</button>
      </div>
    </div>
  );
};

export default Slider;
AOS.init();