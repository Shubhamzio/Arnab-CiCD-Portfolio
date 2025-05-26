// Blog.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Blog.css';
import blogData from './BlogData';
import Footer from '../components/Footer';

const Blog = () => {
  const navigate = useNavigate();

  return (
 <>
  < div className='heading_blog'>
  <h1>Blog</h1>
  </div>
  <div className ='line'></div>
    <div className="blog-container">

      {blogData.map((book) => (
        <div className="blog-card" key={book.id}>
          <img src={book.image} alt={book.title} />
          <h2>{book.title}</h2>
          <p>Author: Arnab Sengupta</p>
          <button onClick={() => navigate(`/blog/${book.id}`)}>Read More</button>
        </div>
      ))}
    </div>
    <Footer/>
    </>
  );
};

export default Blog;
