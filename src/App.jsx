
import {   Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from './pages/Home';
import About from './pages/About';
import Education from "./pages/Education";
import Experience from "./pages/Experience";
import Portfolio from "./pages/Portfolio";
import Skill from "./pages/Skill";
import Interest from "./pages/Interest";
import Blog from "./pages/Blog";
import Sayhello from './pages/sayHello';
import Industrial from './pages/Industrial';
import OfficeBuilding from './pages/OfficeBuilding';
import TheaterBuilding from './pages/TheaterBuilding';
import FitnessWellness from './pages/FitnessWellness';
import Apartment from './pages/Apartment';
import Library from './pages/Library';
import InstitutionalBuilding from './pages/IntitutionalBuilding';
import HealthcareAndMedical from "./pages/HealthcareAndMedical";
import PipeRackVentStack from "./pages/PipeRackVentStack";
import BlogPost from './pages/BlogPost';
import BookDetails from './pages/BookDetails';
import Book1 from './pages/Detailbooks/Book1';
import Book2 from './pages/Detailbooks/Book2';
import Book3 from './pages/Detailbooks/Book3';
import Book4 from './pages/Detailbooks/Book4';
import Book5 from './pages/Detailbooks/Book5';
import Book6 from './pages/Detailbooks/Book6';
import Book7 from './pages/Detailbooks/Book7';
import Book8 from './pages/Detailbooks/Book8';
import Book9 from './pages/Detailbooks/Book9';
import Book10 from './pages/Detailbooks/Book10';
import Book11 from './pages/Detailbooks/Book11';
import Book12 from './pages/Detailbooks/Book12';
import Book13 from './pages/Detailbooks/Book13';
import Book14 from './pages/Detailbooks/Book14';
import ScrollToTop from './components/ScrollToTop';
import Disclaimer from "./components/Disclaimer";
const App = () => {
  return (
    <div>
<Disclaimer/>
      <Navbar />
< ScrollToTop/>
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/education" element={<Education />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/skill" element={<Skill />} />
          <Route path="/interest" element={<Interest />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/sayhello" element={<Sayhello />} />
          <Route path="/industrial" element={<Industrial />} />
        <Route path="/office-building" element={<OfficeBuilding />} />
        <Route path="/theater-building" element={<TheaterBuilding />} />
        <Route path="/fitness-wellness" element={<FitnessWellness />} />
        <Route path="/apartment" element={<Apartment />} />
        <Route path="/library" element={<Library />} />
        <Route path="/institutional-building" element={<InstitutionalBuilding />} />
        <Route path="/pipe-rack-vent-stack" element={<PipeRackVentStack />} />
        <Route path="/" element={<Blog />} />
        <Route path="/book-details/:id" element={<BookDetails />} />
        <Route path="/blog/:id" element={<BlogPost />} />

          <Route path="/healthcare-and-medical" element={<HealthcareAndMedical />} />
          <Route path="/book1" element={<Book1 />} />
          <Route path="/book2" element={<Book2 />} />
          <Route path="/book3" element={<Book3 />} />
          <Route path="/book4" element={<Book4 />} />
          <Route path="/book5" element={<Book5 />} />
          <Route path="/book6" element={<Book6 />} />
          <Route path="/book7" element={<Book7 />} />
          <Route path="/book8" element={<Book8 />} />
          <Route path="/book9" element={<Book9 />} />
          <Route path="/book10" element={<Book10 />} />
          <Route path="/book11" element={<Book11 />} />
          <Route path="/book12" element={<Book12 />} />
          <Route path="/book13" element={<Book13 />} />
          <Route path="/book14" element={<Book14 />} />

        </Routes>




    </div>
  );
};

export default App;
