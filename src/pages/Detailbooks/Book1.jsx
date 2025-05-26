
import img1 from '../../assets/books/start-with-why.jpg';
import Footer from '../../components/Footer';
import './Book1.css';
import RelatedBooks from '../../components/RelatedBooks';


const Book1 = () => {
  return (
    <>

    <div className ='book_details'>
      <div className='image_and_header'>

        <div className ='book_details_image'>
            <img src = {img1} alt='saywithwhy'/>
        </div>
        <h1>Start with Why by Simon Sinek </h1>
      </div>
        {/* first part starts  */}
        <div className='first_part'>
   <h1>The Book in Three Sentences</h1>
    <p>1. The ability to inspire those around you and to achieve remarkable things starts with WHY.
</p>
    <p>2. Any organization can explain what it does; some can explain how they do it, but very few can clearly articulate why.
</p>
    <p>3. Those who start with WHY never manipulate, they inspire.
</p>
        </div>
       {/* second part starts  */}

<div className='second_part'>
  <h1>The Five Big Ideas
</h1>
<p>1. Your WHY is your purpose, cause or belief.</p>
<p>2. Every inspiring leader and organization, regardless of size or industry, starts with WHY</p>
<p>3. People don't buy WHAT you do, they buy WHY you do it.</p>
<p>4. Knowing our WHY is essential for lasting success and the ability to avoid being lumped in with others.</p>
<p>5. When your WHY goes fuzzy, it becomes much more difficult to maintain the growth, loyalty, and inspiration that helped drive your original success.</p>
</div>

<div className ='third_part'>
  <h3>Start with Why Summary</h3>
  <p>Start With WHY by Simon Sinek is a powerful exploration of what truly drives successful individuals and organizations. At its core, the book emphasizes the importance of understanding and communicating your **WHY**—your purpose, cause, or belief that inspires you to do what you do. Sinek argues that while every organization knows *what* they do and many know *how* they do it, only a few know *why* they do it. This clarity of purpose is what sets inspiring leaders and companies apart, creating loyalty and trust among employees and customers. People don’t buy what you do; they buy **why you do it**. When businesses start with WHY, they foster deeper connections, long-term loyalty, and a stronger brand identity. Sinek uses examples like Apple, Martin Luther King Jr., and the Wright brothers to show how clarity of belief can drive massive success. The book encourages leaders to lead with purpose, inspire action through belief, and build organizations where employees and customers feel a sense of belonging and shared values.

</p>
</div>



    </div>

    <div>
      <RelatedBooks/>
        <Footer/>
    </div>
    </>
  )
}

export default Book1;

