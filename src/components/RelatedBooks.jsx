
import img1 from '/books/start-with-why.jpg';
import './RelatedBooks.css';
import img2 from '/books/daring-greatly.jpg';
import img3 from '/books/5-am.jpg';
import img4 from '/books/drive-summary.webp';
import img5 from '/books/getting-things-done.jpg';
import img6 from '/books/go-giver-summary.jpg';
import img7 from '/books/lean-in.jpg';
import img8 from '/books/Rules-for-life.jpg';
import img9 from '/books/switch.jpg';
import img10 from '/books/the-dip.jpg';
import img11 from '/books/the-monk.jpg';
import img12 from '/books/the-war-of-art.jpg';
import img13 from '/books/tribes.jpg';
import img14 from '/books/what-they-dont-teach.jpg';
import { Link} from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const RelatedBooks = () => {
  return (
    <>
    <div className ='Related_books'>
        <h1 data-aos='fade-right'>Related Books </h1>
        <div className ='a_single_line' data-aos='fade-left'></div>
        <div className='Related_books_gallery' data-aos='zoom-in-up' data-aos-duration='600'>
            {/* cards starts  */}
         <div className='Related_books_card'>
            <div className ='image'>
              <Link to='/book1'> <img src ={img1} alt ='first_image'/></Link>

         </div>
        <div className='bookname'>
           <Link to='/book1'> <p>Start With WHY</p></Link>
            </div>
        </div>

        {/* card ends here  */}
            {/* cards starts  */}
         <div className='Related_books_card'>
            <div className ='image'>
                <Link to = '/book4'><img src ={img2} alt ='first_image'/></Link>
         </div>
        <div className='bookname'>
            <Link to = '/book4'><p>Daring Greatly</p></Link>
            </div>
        </div>

        {/* card ends here  */}
            {/* cards starts  */}
         <div className='Related_books_card'>
            <div className ='image'>
                <Link to='/book3'><img src ={img3} alt ='first_image'/></Link>
         </div>
        <div className='bookname'>
            <Link to ='/book3'><p>5 Am Club</p></Link>
            </div>
        </div>

        {/* card ends here  */}
            {/* cards starts  */}
         <div className='Related_books_card'>
            <div className ='image'>
                <Link to ='/book5'><img src ={img4} alt ='first_image'/></Link>
         </div>
        <div className='bookname'>
            <Link to ='/book5'><p> Drive Summary</p></Link>
            </div>
        </div>

        {/* card ends here  */}
            {/* cards starts  */}
         <div className='Related_books_card'>
            <div className ='image'>
                <Link to ='/book13'><img src ={img5} alt ='first_image'/></Link>
         </div>
        <div className='bookname'>
            <Link to ='/book13'><p>Getting Things Done</p></Link>
            </div>
        </div>

        {/* card ends here  */}
            {/* cards starts  */}
         <div className='Related_books_card'>
            <div className ='image'>
                <Link to ='/book6'><img src ={img6} alt ='first_image'/></Link>
         </div>
        <div className='bookname'>
           <Link to ='/book6'><p>Go Giver</p></Link>
            </div>
        </div>

        {/* card ends here  */}
            {/* cards starts  */}
         <div className='Related_books_card'>
            <div className ='image'>
                <Link to ='/book14'><img src ={img7} alt ='first_image'/></Link>
         </div>
        <div className='bookname'>
            <Link to ='/book14'><p>Lean In</p></Link>
            </div>
        </div>

        {/* card ends here  */}
            {/* cards starts  */}
         <div className='Related_books_card'>
            <div className ='image'>
                <Link to ='/book7'><img src ={img8} alt ='first_image'/></Link>
         </div>
        <div className='bookname'>
            <Link to ='/book7'><p>Rules For Life</p></Link>
            </div>
        </div>

        {/* card ends here  */}
            {/* cards starts  */}
         <div className='Related_books_card'>
            <div className ='image'>
               <a href ='/book8'> <img src ={img9} alt ='first_image'/></a>
         </div>
        <div className='bookname'>
            <a href ='/book8'><p>Switch</p></a>
            </div>
        </div>

        {/* card ends here  */}
            {/* cards starts  */}
         <div className='Related_books_card'>
            <div className ='image'>
                <Link to ='/book9'><img src ={img10} alt ='first_image'/></Link>
         </div>
        <div className='bookname'>
            <Link to ='/book9'><p> The Dip</p></Link>
            </div>
        </div>

        {/* card ends here  */}
        {/* card ends here  */}
            {/* cards starts  */}
         <div className='Related_books_card'>
            <div className ='image'>
                <Link to ='/book2'><img src ={img11} alt ='first_image'/></Link>
         </div>
        <div className='bookname'>
            <Link to ='/book2'><p>The Monk Who Sold His Ferrari</p></Link>
            </div>
        </div>

        {/* card ends here  */}
        {/* card ends here  */}
            {/* cards starts  */}
         <div className='Related_books_card'>
            <div className ='image'>
                <Link to ='/book10'><img src ={img12} alt ='first_image'/></Link>
         </div>
        <div className='bookname'>
           <Link to ='/book10'> <p>The War Of Art</p></Link>
            </div>
        </div>

        {/* card ends here  */}
        {/* card ends here  */}
            {/* cards starts  */}
         <div className='Related_books_card'>
            <div className ='image'>
                <Link to ='/book11'><img src ={img13} alt ='first_image'/></Link>
         </div>
        <div className='bookname'>
            <Link to ='/book11'><p>Tribes</p></Link>
            </div>
        </div>

        {/* card ends here  */}
        {/* card ends here  */}
            {/* cards starts  */}
         <div className='Related_books_card'>
            <div className ='image'>
                <Link to ='/book12'><img src ={img14} alt ='first_image'/></Link>
         </div>
        <div className='bookname'>
            <Link to ='/book12'><p>what They Don't Teach At Havard</p></Link>
            </div>
        </div>

        {/* card ends here  */}
        {/* card ends here  */}


    </div>
</div>
    </>
  )
}
export default RelatedBooks;
AOS.init();
