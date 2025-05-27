
import { useNavigate } from 'react-router-dom';
import avatarAbout from '../assets/About.png';
import './About.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer  from '../components/Footer';
import { FaCameraRetro, FaPaintBrush, FaBookReader,  FaPlane } from "react-icons/fa";
import { MdSportsCricket } from "react-icons/md";






const About = () => {



  const navigate = useNavigate();
  const goToPortfolio = ()=> {
    navigate('/portfolio');
  }
  return (
    <>
    <div className= 'about_section_starts'>
   <div className='image_for_about' data-aos='fade-right' data-aos-duration='1000'>
    <img src ={avatarAbout} alt= 'about_avatar'/>
   </div>
   <div className ='description_for_about' >
    <h1 data-aos='fade-left' data-aos-duration='1200'>Arnab Sengupta</h1>
    <h3 data-aos='fade-up' data-aos-duration='1200'>Founder and Director, <span className= 'bold'>Rydberg Engineering Private Limited</span></h3>
    <p data-aos='flip-up' data-aos-duration='1200'>Arnab Sengupta, a torchbearer of modern-day Indian Engineering industry, is a notable Structural Civil Engineer with over 22 years of experience working as engineer and manager for several large corporations, mainly in the engineering and construction sector. He is celebrated across the country for his vital role in taking Indian Civil Engineering to unprecedented heights. After all his valuable contributions to his country’s industries, he has stepped foot in American lands.

Arnab is fuelled by his passion for innovation as well as perceiving the subtle nuances of the industry to guarantee consistent quality to his clients. His extraordinary proficiency in structural engineering coupled with impeccable analytical skills, make him a specialist in designing complex structures of steel, concrete and even timber. He considers himself a ‘forever student’, eager to both build on his academic foundation in civil engineering, management and finance and also stay in tune with the dynamic market forces, enabling him to obtain a deep understanding of latest market trends.</p>
<button className='portfolio_button' onClick={goToPortfolio}> VIEW PORTFOLIO
  </button>
   </div>
    </div>

{/* another paragraph section starts  */}


<div className='another_paragraph_section'>
  <h1 data-aos ='fade-up' data-aos-duration='1000'>Achievements</h1>
  <div className ='line_for_ac' data-aos='fade-right' data-aos-duration='800'></div>
  <p className='second_paragraph' data-aos='fade-left' data-aos-duration='700'>
  Arnab has a Bachelor’s Degree in Civil Engineering from Jadavpur University, a Post Graduate Diploma in Business Administration (Finance) from Symbiosis and he is also a registered Chartered Engineer. These three bodies of knowledge support him well in understanding global building codes and standards while simultaneously minding bottom-line business considerations.

In all of Arnab’s past positions he has consistently focused on enhancing and adding value by whatever means suitable. He began his professional journey as Technical Advisor in Regal Services in Nov 1998. In January 2004, he joined CANAM as Structural Steel Detailer. His hunger for knowledge and determination to turn information into action had contributed to his success as Project Manager at NetGuru. There, he provided his expertise for production support in meeting timelines while maintaining quality.

Thenceforward, he became the General Manager of DowcoMax Services, thus furthering his prowess. There, he was entrusted with Marketing responsibilities such as promotion, campaign execution, CRM implementation and all the like.

His consistent zeal for improvement then found him as Director of Lincoln Engineering group in 2011. He overlooked the techno-commercial management across multiple roles in India, as well as USA, in the field of Structural Engineering KPO.

Arnab opened Rydberg Engineering in 2018 and has since been growing and refining his strategies. Under his wing, Rydberg is now a key player in the field of the AEC industry- Architecture, Engineering and construction. Rydberg’s focus is on providing exceptional, well-grounded Steel Detailing Services in USA, by matching international standards.
  </p>
</div>


{/* hobbies and interest Starts */}


<div className='Hobbies_and_interests'>
  <h1 data-aos ='fade-right' data-aos-duration='600'>Hobbies and Interests</h1>
  <div className='line_for_ac' data-aos='fade-left' data-aos-duration='800'></div>
  <div className='five_cards' data-aos='zoom-out-down'>
    <div className='first_card'>
      <FaCameraRetro size={25} />
      <p>Photography</p>
    </div>
    <div className='second_card'>
      <FaPaintBrush size={25} />
      <p>Painting</p>
    </div>
    <div className='third_card'>
      <FaBookReader size={25} />
      <p>Reading</p>
    </div>
    <div className='fourth_card'>
      <MdSportsCricket size={25} />
      <p>Playing Cricket</p>
    </div>
    <div className='fifth_card'>
      <FaPlane size={25} />
      <p>Traveling</p>
    </div>
  </div>
</div>


{/* footer components starts   components involved */}

<Footer/>
</>



  )
}

export default About;
AOS.init();