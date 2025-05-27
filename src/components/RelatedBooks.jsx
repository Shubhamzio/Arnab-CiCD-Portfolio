
import img1 from '../assets/books/start-with-why.jpg';
import './RelatedBooks.css';
import img2 from '../assets/books/daring-greatly.jpg';
import img3 from '../assets/books/5-am.jpg';
import img4 from '../assets/books/drive-summary.webp';
import img5 from '../assets/books/getting-things-done.jpg';
import img6 from '../assets/books/go-giver-summary.jpg';
import img7 from '../assets/books/lean-in.jpg';
import img8 from '../assets/books/Rules-for-life.jpg';
import img9 from '../assets/books/switch.jpg';
import img10 from '../assets/books/the-dip.jpg';
import img11 from '../assets/books/the-monk.jpg';
import img12 from '../assets/books/the-war-of-art.jpg';
import img13 from '../assets/books/tribes.jpg';
import img14 from '../assets/books/what-they-dont-teach.jpg';
import { Link} from 'react-router=dom'
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
                <a href = '/book4'><img src ={img2} alt ='first_image'/></a>
         </div>
        <div className='bookname'>
            <a href = '/book4'><p>Daring Greatly</p></a>
            </div>
        </div>

        {/* card ends here  */}
            {/* cards starts  */}
         <div className='Related_books_card'>
            <div className ='image'>
                < a href ='/book3'><img src ={img3} alt ='first_image'/></a>
         </div>
        <div className='bookname'>
            < a href ='/book3'><p>5 Am Club</p></a>
            </div>
        </div>

        {/* card ends here  */}
            {/* cards starts  */}
         <div className='Related_books_card'>
            <div className ='image'>
                <a href ='/book5'><img src ={img4} alt ='first_image'/></a>
         </div>
        <div className='bookname'>
            <a href ='/book5'><p> Drive Summary</p></a>
            </div>
        </div>

        {/* card ends here  */}
            {/* cards starts  */}
         <div className='Related_books_card'>
            <div className ='image'>
                <a href ='/book13'><img src ={img5} alt ='first_image'/></a>
         </div>
        <div className='bookname'>
            <a href ='/book13'><p>Getting Things Done</p></a>
            </div>
        </div>

        {/* card ends here  */}
            {/* cards starts  */}
         <div className='Related_books_card'>
            <div className ='image'>
                < a href ='/book6'><img src ={img6} alt ='first_image'/></a>
         </div>
        <div className='bookname'>
           <a href ='/book6'><p>Go Giver</p></a>
            </div>
        </div>

        {/* card ends here  */}
            {/* cards starts  */}
         <div className='Related_books_card'>
            <div className ='image'>
                <a href ='/book14'><img src ={img7} alt ='first_image'/></a>
         </div>
        <div className='bookname'>
            <a href ='/book14'><p>Lean In</p></a>
            </div>
        </div>

        {/* card ends here  */}
            {/* cards starts  */}
         <div className='Related_books_card'>
            <div className ='image'>
                <a href ='/book7'><img src ={img8} alt ='first_image'/></a>
         </div>
        <div className='bookname'>
            <a href ='/book7'><p>Rules For Life</p></a>
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
                <a href ='/book9'><img src ={img10} alt ='first_image'/></a>
         </div>
        <div className='bookname'>
            <a href ='/book9'><p> The Dip</p></a>
            </div>
        </div>

        {/* card ends here  */}
        {/* card ends here  */}
            {/* cards starts  */}
         <div className='Related_books_card'>
            <div className ='image'>
                <a href ='/book2'><img src ={img11} alt ='first_image'/></a>
         </div>
        <div className='bookname'>
            <a href ='/book2'><p>The Monk Who Sold His Ferrari</p></a>
            </div>
        </div>

        {/* card ends here  */}
        {/* card ends here  */}
            {/* cards starts  */}
         <div className='Related_books_card'>
            <div className ='image'>
                <a href ='/book10'><img src ={img12} alt ='first_image'/></a>
         </div>
        <div className='bookname'>
           <a href ='/book10'> <p>The War Of Art</p></a>
            </div>
        </div>

        {/* card ends here  */}
        {/* card ends here  */}
            {/* cards starts  */}
         <div className='Related_books_card'>
            <div className ='image'>
                <a href ='/book11'><img src ={img13} alt ='first_image'/></a>
         </div>
        <div className='bookname'>
            <a href ='/book11'><p>Tribes</p></a>
            </div>
        </div>

        {/* card ends here  */}
        {/* card ends here  */}
            {/* cards starts  */}
         <div className='Related_books_card'>
            <div className ='image'>
                <a href ='/book12'><img src ={img14} alt ='first_image'/></a>
         </div>
        <div className='bookname'>
            <a href ='/book12'><p>what They Don't Teach At Havard</p></a>
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
