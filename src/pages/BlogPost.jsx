import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './BlogPost.css';
import blogData from './BlogData';
import Footer from '../components/Footer';


const BlogPost = () => {
  const { id } = useParams();
  const post = blogData.find(item => item.id === parseInt(id));

  if (!post) {
    return <div className="not-found">Blog post not found.</div>;
  }

  // Filter related posts excluding current
  const relatedPosts = blogData.filter(item => item.id !== post.id);
  const goToTop = ()=> {
    window.scrollTo({ top: 50, behavior: 'smooth' });
  }

  return (
    <>

    <div className="blogpost-container">
      <h1 className="post-title">{post.title}</h1>
      <h2 className="author-name"> {post.author}</h2>
      <div className="post-content">
        {post.content.split('\n\n').map((para, index) => (
            <p key={index}>{para}</p>
        ))}
      </div>

      <h3 className="related-heading">Related Posts</h3>
      <div className="related-posts">
        {relatedPosts.map(item => (
            <div key={item.id} className="related-card">
            <img src={item.image} alt={item.title} />
            <h4>{item.author}</h4>
            <p>{item.title}</p>
            <Link to={`/blog/${item.id}`}>
              <button className="readmore-btn"  onClick={goToTop}>Read More</button>
            </Link>
          </div>
        ))}
      </div>
    </div>

    <Footer/>
        </>

  );
};

export default BlogPost;
