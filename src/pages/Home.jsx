import React  from 'react';
import AOS from 'aos';
import avatar from '/images/avatar.png';
import Achievements from '/images/arc.png';
import './Home.css';
import { useNavigate } from 'react-router-dom';
import 'aos/dist/aos.css';
import Footer from '../components/Footer';

import { FaEye, FaHandshake, FaChartLine, FaBrain, FaUsers,FaHandRock  } from 'react-icons/fa';
import Slider from '../components/Slider';
import { FaGlobe } from "react-icons/fa";
import { LuNotepadText } from "react-icons/lu";
import { VscGraph } from "react-icons/vsc";
import { TbMapPinCog } from "react-icons/tb";
import { FaHandHoldingDollar } from "react-icons/fa6";
import { FaUserTie } from "react-icons/fa";


const Home = () => {

  const navigate = useNavigate();
  const goToContact = ()=> {
    navigate('/sayhello');
  }

  return (
    <>
    <div className='hero_section'>
      <div className ='word_details' data-aos-aniamation='fade-right' data-aos-animation='2000'>
        <h1 data-aos='fade-right' data-aos-duration='600'>ARNAB SENGUPTA</h1>
         <h2 data-aos='fade-left' data-aos-duration='600'>We Are Not Endowed With The Talent…</h2>
         <h2 data-aos='fade-right' data-aos-duration='600'>We Merely Possess…</h2>
          <div className ='list'>
                <ul data-aos='fade-right' data-aos-duration='800'>
                  <li>Operational focus and Results Oriented</li>
                  <li>Unwaving commitment</li>
                  <li>LeaderShip</li>
                </ul>
                <ul data-aos='fade-left' data-aos-duration='800'>
                <li>Strategic thinking & decision making</li>
                  <li>Visionary Outlook</li>
                  <li>Seasoned LeaderShip</li>
                </ul>
          </div>

         <div>
         <img src ={Achievements} alt ='certification' className='acm'  data-aos='fade-right' data-aos-duration='1200'/>
         </div>
         <button onClick={goToContact} data-aos='fade-right' data-aos-duration='1200'>CONTACT</button>
      </div>
        <div className='Avatar'>
          <img src={avatar} alt='portfolio_image' data-aos='fade-left' data-aos-duration='600'/>
        </div>

    </div>




     {/* about section starts  */}




    <div className='About'>
       <div className ='other_details' data-aos='fade-right'>
        <h1>Arnab Sengupta</h1>
        <h3>Founder and Director, Rydberg Engineering Private Limited</h3>
        <p></p>
       </div>
    </div>

{/* about section ends  */}

{/* third section starts */}

<div className ='third_section' data-aos='zoom-in-left' data-aos-duration='600'>
<p className ='Big_Paragraph'>
Arnab Sengupta, a torchbearer of modern-day Indian Engineering industry, is a notable Structural Civil Engineer with over 22 years of experience working as engineer and manager for several large corporations, mainly in the engineering and construction sector. He is celebrated across the country for his vital role in taking Indian Civil Engineering to unprecedented heights. After all his valuable contributions to his country’s industries, he has stepped foot in American lands. Arnab is fuelled by his passion for innovation as well as perceiving the subtle nuances of the industry to guarantee consistent quality to his clients. His extraordinary proficiency in structural engineering coupled with impeccable analytical skills, make him a specialist in designing complex structures of steel, concrete and even timber. He considers himself a ‘forever student’, eager to both build on his academic foundation in civil engineering, management and finance and also stay in tune with the dynamic market forces, enabling him to obtain a deep understanding of latest market trends.
Arnab has a Bachelor’s Degree in Civil Engineering from Jadavpur University, a Post Graduate Diploma in Business Administration (Finance) from Symbiosis and he is also a registered Chartered Engineer. These three bodies of knowledge support him well in understanding global building codes and standards while simultaneously minding bottom-line business considerations.

In all of Arnab’s past positions he has consistently focused on enhancing and adding value by whatever means suitable. He began his professional journey as Technical Advisor in Regal Services in Nov 1998. In January 2004, he joined CANAM as Structural Steel Detailer. His hunger for knowledge and determination to turn information into action had contributed to his success as Project Manager at NetGuru. There, he provided his expertise for production support in meeting timelines while maintaining quality.

Thenceforward, he became the General Manager of DowcoMax Services, thus furthering his prowess. There, he was entrusted with Marketing responsibilities such as promotion, campaign execution, CRM implementation and all the like.

His consistent zeal for improvement then found him as Director of Lincoln Engineering group in 2011. He overlooked the techno-commercial management across multiple roles in India, as well as USA, in the field of Structural Engineering KPO.

Arnab opened Rydberg Engineering in 2018 and has since been growing and refining his strategies. Under his wing, Rydberg is now a key player in the field of the AEC industry- Architecture, Engineering and construction. Rydberg’s focus is on providing exceptional, well-grounded Steel Detailing Services in USA, by matching international standards.
</p>
</div>


{/* fourth section starts  */}

<div className='container_for_details' data-aos='fade-right' data-aos-duration='600'>
<div className='blocks'>
<FaEye size={45} style ={{color:'rgb(285,183,0)'}} />
  <h3>Visionary Outlook</h3>
  <p>I'm always looking ahead and see problems before others do. I do live by the importance of solving for tomorrow, today.Dream Big , trusting in my strong team to execute the details.Am not afraid to talk to walk where no one has gone before,knowing if no one tries, nothing will change. Don't sette for the status quo and am unafraid to say "no" to one thing in order to say "Yes" to something.</p>

</div>
<div className='blocks'>
  <FaHandshake size ={45} style ={{color:'rgb(285,183,0)'}}/>
  <h3>Unwaving Commitment</h3>
  <p>Show my ability to execute a big idea by doing what i say i will do and holding my team accountable. I believe that research and evaluation is the key to to improving and finding  what works for the good of the people we serve. I have a strong personal faithand don't compromise Catholic values for a quick win.</p>
</div>
<div className='blocks'>
  <FaHandRock size ={45} style ={{color:'rgb(285,183,0)'}}/>
  <h3>Seasoned Leadership</h3>
  <p>i've led a large organization, with the budget and the staff that comes with it.I know how to build up, empower and hold accountable others around me so The Company has the leaders it needs for the futue.Radiate the belief that am just one person on a large team of skilled and passionate professionals working to serve The Company. Am generous with my knowledge and ideas butknow when to sit back and let someone else shine.Meets challenges with creativity and resourcefulness.Is open to change fresh ideas and new approaches.</p>
</div>
<div className='blocks'>
  <FaChartLine  size ={45} style ={{color:'rgb(285,183,0)'}}/>
  <h3>Operational Focus and Resuls Oriented</h3>
  <p>Set measurable process improvement goals in client services excellence internal systems and processes learning and growth inititives and financial health.Leads department in achieving or exceeding financial goals and all service level agreements.Exhibiting a high level of truestworthiness diplomacy coursey and tact. Demonstarting skill in collaborative discussion of problems and resolution of issues.</p>
</div>
<div className='blocks'>
  <FaBrain size ={45} style ={{color:'rgb(285,183,0)'}}/>
  <h3>Strategic Thinking & Decision Making</h3>
  <p>Demonstrates strong logic analytical organizational planning and administrative skills and a demonstrated to successfully apply project and change management principles. Uses data experince and intuition to lead process improvement.</p>
</div>
<div className='blocks'>
  <FaUsers size={45} style ={{color:'rgb(285,183,0)'}}/>
  <h3>Leadership</h3>
  <p>It is a confident and energetic self-starter with superior interpersonal skills demonstated relationship-building abilities and effectiveness as a persuader and negotiator.Inspire the trust to others.Provides and welcomes constructive feedback.Demonstrates and requires accountability.Exhibits independent judgement.</p>
</div>
</div>

{/* /Nother section starts  */}

<div className = 'education_wrapper'>
  <h1 className ='education_for_homepage' data-aos='fade-right' data-aos-duration='700'>Education</h1>
  <div className='a_short_line' data-aos='fade-left'></div>
  <div className ='Education_details' data-aos= 'zoom-in-left' data-aos-duration='600'>
    <div className='main_university'>
      <h1 data-aos='fade-right' data-aos-duration='600'>JADAVPUR UNIVERSITY, BACHELOR OF CIVIL ENGINEERING</h1>
      <h4 data-aos='fade-right' data-aos-duration='600'>KOLKATA, INDIA</h4>
      <p data-aos='fade-right' data-aos-duration='600'>Education : Engineering Mechanics, Engineering Drawing, Fluid Mechanics, Building Material & Construction, Surveying, Structural Mechanics, Thermodynamics & Heat Power, Basic Electrical & Electronics Engineering, Engineering Mathematics, Physics, Chemistry, Building Planning & Drawing, Engineering Geology, Computer Programming, Theory of Structures, Hydrology, Irrigation Engineering, Valuation, Pricing & Contract, Transportation Engineering, Water Supply Engineering, Design of Concrete & Steel Structures, Soil Mechanics, Quantity Surveying, Waste Water Engineering, Hydraulic Structure, Environmental Pollution & Control, Finite Element, Dynamic Analysis.</p>
    </div>
    <div className='main_university'>
      <h1>SYMBIOSIS (DLP), POST GRADUATE DIPLOMA IN BUSINESS ADMINISTRATION (PGDBA) – FINANCE</h1>
      <h4>PUNE, INDIA</h4>
      <p>Principles and Practices of Management, Organizational Behaviour, Management Accounting, Managerial Economics, Business Law, Production or Operations Management, Financial Management, Human Resources Management, Marketing Management, Management Information Systems, Capital Market, Corporate Governance, Strategic Management, Project Finance, Direct Taxation, Research Methodology and Statistical Quantitative Methods & Projects, International Finance.</p>
    </div>
    <div className='main_university'>
      <h1>THE INSTITUTE OF ENGINEERS (INDIA),CHARTERED ENGINEER</h1>
      <h4>KOLKATA, INDIA</h4>
      <p>The Chartered Engineer certificate being issued by the IEI (which is one of world’s oldest and largest professional bodies of Engineers), plays the role of recognition and acceptance of one’s techno-academic qualification and professional attainment on a global platform.</p>
    </div>
    <div className='main_university'>
      <h1>THE INSTITUTE OF ENGINEERS (INDIA), MIE</h1>
      <h4>KOLKATA, INDIA</h4>
      <p>Twenty one years professional engineering experience in a position of responsibility.</p>
    </div>
    <div className='main_university'>
      <h1>INDIAN INSTITUTE OF ENGINEERING SCIENCE AND TECHNOLOGY, STAAD CERTIFIED ENGINEER</h1>
      <h4>SHIBPUR, HOWRAH, INDIA</h4>
      <p>Structural steel and concrete analysis and design software certification.</p>
    </div>
  </div>
</div>


{/* slider portion projects  */}

<Slider/>



{/* our skill section starts  */}



<div className = 'skills_section_starts '>
<div className="overlay"></div>
<div className = 'skills_heading'>
  <h1 className ='skills_heading_h1' data-aos='zoom-in-left'>Our Skills</h1>
  <div className ='line_for_skills'data-aos='slide-left'></div>
  <p data-aos='zoom-in-right'>Skill is the expertise or talent needed in order to do a job or task. Some of my skills are here.</p>
</div>


<div className = 'skills_grid'>
  <div className ='grid_1' data-aos='zoom-in-left'>
    <FaGlobe size = {45}   style ={{color:'rgb(255, 183, 0)'}} data-aos='fade-right'/>
    <h3 data-aos='fade-left'>Internet & Technology</h3>
    <p data-aos='fade-left'>Advertising & Marketing, Content & Copyright Agreement, Hosting Agreements, IT support and Maintanance...</p>
  </div>
  <div className ='grid_2'data-aos='zoom-in-right'>
    <LuNotepadText size= {45}  style ={{color:'rgb(255, 183, 0)'}} data-aos='fade-left'/>
    <h3 data-aos='fade-right'>Planning & Management</h3>
    <p data-aos ='fade-right'>Board Resolutions, Business Plans, Certificates & Notices, Meeting Minutes...</p>
  </div>
  <div className ='grid_3' data-aos='zoom-in-right'>
  <VscGraph size = {45}  style ={{color:'rgb(255, 183, 0)'}} data-aos='fade-right'/>
    <h3 data-aos='fade-left'>Sales & Marketing</h3>
    <p data-aos='fade-left'>Agreements & Contracts, Announcements, Bids & Proposals, Customer Relations, Customer Service...</p>
  </div>



  <div className ='grid_4' data-aos='zoom-in-left'>
  <TbMapPinCog  size= {45} style ={{color:'rgb(255, 183, 0)'}} data-aos='fade-right'/>
    <h3 data-aos='fade-left'>Operations & Logistics</h3>
    <p data-aos='fade-right'>Equipment, Ordering Merchandise, Receiving Merchandise , Selling Merchandise, Shipping Merchadise...</p>
  </div>
  <div className ='grid_5' data-aos='zoom-in-right'>
  <FaHandHoldingDollar  size = {45} style ={{color:'rgb(255, 183, 0)'}} data-aos='fade-left'/>
    <h3 data-aos='fade-left'>Finance & Accounting</h3>
    <p data-aos='fade-right'>Banking, Bookeeping, Buying & Selling of Shares, colection, Credit, Debts & Default, Financial Statements,Government...</p>
  </div>
  <div className ='grid_6' data-aos='zoom-in-right'>
    <FaUserTie size= {45} style ={{color:'rgb(255, 183, 0)'}} data-aos='fade-right'/>
    <h3 data-aos='fade-right'>Human Resources</h3>
    <p data-aos='fade-left'>Compensation & Benefits, Consultants & Contractors, Discipline & Behavior, Employee Records, Employee Reference...</p>
  </div>
</div>



</div>



    <Footer/>
    </>
  )
}

export default Home;
AOS.init();
