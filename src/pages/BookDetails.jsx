import React from 'react';
import { useParams, Link } from 'react-router-dom';
import books from '../pages/books';
import './BookDetails.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from '../components/Footer';
const BookDetails = () => {
  const { id } = useParams();
  const book = books.find((b) => b.id === parseInt(id));

  if (!book) {
    return <div style={{ padding: '2rem' }}>Book not found.</div>;
  }

  const goToTop = ()=> {
    window.scrollTo({ top: 50, behavior: 'smooth' });
  }


  return (
    <>
    <div className="book_details" >
      <h1 data-aos='fade-right' data-aos-duration='800'>{book.title}</h1>
      <img src={book.src} alt={book.title} data-aos='fade-left' data-aos-duration='800' />
      <p style={{ marginTop: '1rem' }} data-aos='fade-right' data-aos-duration='800'>{book.description}</p>


      <div className="related_books" style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }} data-aos='fade-right' data-aos-duration='800'>
        {book.related.map((relatedId) => {
          const relatedBook = books.find((b) => b.id === relatedId);
          return (
            <Link key={relatedId} to={`/book-details/${relatedBook.id}`} className="gallery_item" onClick={goToTop}>
              <img src={relatedBook.src} alt={relatedBook.title} style={{ width: '200px' }} />
              <p className="img_caption">{relatedBook.title}</p>
            </Link>
          );
        })}
      </div>
    </div>
    <div>


    </div>
    <div><Footer/></div>
    </>
  );
};

export default BookDetails;
AOS.init();
