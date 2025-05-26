import React from 'react';
import Footer from '../components/Footer';
import './skills.css';
import 'aos/dist/aos.css';
 import AOS from 'aos';
 import { CiGlobe } from "react-icons/ci";
 import { RiTodoLine } from "react-icons/ri";
 import { FaPeopleCarry } from "react-icons/fa";
 import { RiMoneyDollarCircleLine } from "react-icons/ri";
 import { MdManageAccounts } from "react-icons/md";
 import { VscGraphLine } from "react-icons/vsc";


const Skills = () => {
  return (
    <>
    <section className ='skills_wrapper'>
      <div className='Heading_for_skills' data-aos='zoom-in-down' data-aos-duration ='800'>
        <h2>"Skill is the expertise or talent needed in order to do a job or task. Some of my skills are here."</h2>
      </div>

      {/* grid starts  */}
      <div className ='skills_section_grid'>
        <div className ='skill_card' data-aos='fade-right' data-aos-duration='800'>
          <CiGlobe size={45} style = {{color:'rgb(285,183,0)'}}/>
          <h3>Internet & Technology</h3>
          <p>Advertising & Marketing, Content & Copyright Agreements, Hosting Agreements, IT Support & Maintenance, Software, Web Development, Website Notices & Checklists.</p>
        </div>
        <div className ='skill_card' data-aos='fade-left' data-aos-duration='800'>
          <RiTodoLine size = {45} style = {{color:'rgb(285,183,0)'}}/>
          <h3>Planning & Management</h3>
          <p>Board Resolutions, Business Plans, Certificates & Notices, General Administration, Meeting Minutes, Procedures, Shareholders, Starting a Business, Strategic Management.</p>
        </div>
        <div className ='skill_card' data-aos='fade-right' data-aos-duration='800'>
        <VscGraphLine size = {45} style = {{color:'rgb(285,183,0)'}}/>
          <h3>Sales & Marketing</h3>
          <p>Agreements & Contracts, Announcements, Bids and Proposals, Customer Relations, Customer Service, Events, Market Analysis, Marketing Material, Marketing Planning, Purchase Orders & Price quotes.</p>
        </div>
        <div className ='skill_card' data-aos ='fade-left' data-aos-duration='800'>
          <FaPeopleCarry size ={45} style = {{color:'rgb(285,183,0)'}}/>
          <h3>Operations & Logistics</h3>
          <p>Equipment, Ordering Merchandise, Receiving Merchandise, Selling Merchandise, Shipping Merchandise, Vehicles..</p>
        </div>
        <div className ='skill_card' data-aos='fade-right' data-aos-duration='800'>
          <RiMoneyDollarCircleLine size ={45} style = {{color:'rgb(285,183,0)'}}/>
          <h3>Finance & Accounting</h3>
          <p>Banking, Bookkeeping, Buying & Selling of Shares, Collection, Credit, Debts & Default, Financial Statements, Government Grants Programs, Guaranties & Collateral, Invoices & Billing, Insurance, Loans, Payment to Creditors, Raising Capital..</p>
        </div>
        <div className ='skill_card' data-aos='fade-left' data-aos-duration='800'>
          < MdManageAccounts size = {45} style = {{color:'rgb(285,183,0)'}}/>
          <h3>Human Resources</h3>
          <p>Compensation & Benefits, Consultants & Contractors, Discipline & Behavior, Employee Records, Employee Reference Letters, Firing & Termination, Hiring Employees, Insurance, Interview Guides, Job Descriptions, Letters & Memos, Letters to Applicant, Motivation, Personality & Ability Tests, Policies & Documentation, Staff Management, Surveys & Evaluations.</p>
        </div>
      </div>
    </section>
    <Footer/>
    </>
  )
}

export default Skills;
AOS.init();