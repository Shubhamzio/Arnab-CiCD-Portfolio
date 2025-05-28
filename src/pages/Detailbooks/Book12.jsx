
 import img6 from '/books/what-they-dont-teach.jpg';
 import Footer from '../../components/Footer';
import RelatedBooks from '../../components/RelatedBooks';
 import './Book1.css';


const Book12 = () => {
  return (
    <>

    <div className ='book_details'>
      <div className='image_and_header'>

        <div className ='book_details_image'>
            <img src = {img6} alt='monk'/>
        </div>
        <h1>What They Don't Teach You At Harvard Busines School</h1>

      </div>
        {/* first part starts  */}
        <div className='first_part'>
   <h1>Lesson 1: Glean insights from your business colleagues by listening and paying close attention
</h1>
    <p> When first starting up a business it's very easy to be quickly consumed at the onset by numbers and growth. It can become obsessive. But it's really more about people, isn't it?
To get ahead in any business venture, whether that business is selling a product or hiring a working staff, the key is to identify who it is that you're doing business with. It's a good idea to take some time and figure out what it is that makes them tick. What is it that drives the people that you're dealing with? What are their motivations,
aspirations, and fears
Know their personalities and you can better predict their behaviour. For example, the slick businessman type,won't display that persona to everyone. He'll have several façades in his toolbo s boss, clients, employees, and family, all in different ways
If you can be aware of these multiple fronts, you will know that there is much more to this slick veneer than meets the eye. There's always a lot more going on beneath the surface. But to discover the depths of someone's personality,you really need to listen closely.
</p>



        </div>
       {/* second part starts  */}

<div className='first_part'>
  <h1>Lesson 2: An unpleasant tone in someone's voice or a feeling of discomfort can be useful tools
</h1>
<p>Imagine that you're on the verge of closing a deal. Everything seems to be coming together nicely and you're just about to sign off. Allof the persuasion and negotiating have finally paid off. It's not uncommon at this point as you're about to clinch the deal, that you get the feeling that something is a bit off. You can't quite put your finger on
it, but something just isn't sitting well with you.
So what is your response to these feelings? Do you ignore them and continue, or do you hold the horses and rethink it?
Some discomfort is a perfectly understandable response and learning to trust these feelings is something that can be beneficial in business practices. It's okay to feel uneasy and apply the brakes, particularly when there is a large amount of money or something valuable at stake.
</p>


</div>
<div className='first_part'>
  <h1>Lesson 3: Be sure to allocate time for activities tivities and and playtime in your schedule - read, exercise or just decompress.</h1>
<p>Too many executives seem to always be on the move, closing deals and running around after new business. Many of them leave little room for hobbies, playtime or just taking some time to relax and power dow
It all really comes down to managing your time. The trick that some busy people have learned is working the playtime into your schedule. That can be meeting up with friends at a favourite restaurant or hang-out spot or getting in a round of golf or a game of tennis at th
The author, Mark McCormack knows something about R&R during the time he was heading up IMG. Mark always made time to read, exercise, socialise with friends or just decompress. If he had a commitment at 7:00 a.m., he'd wake up at 5:00 a.m. and take time for some uninterrupted reading. While some would've taken the extra time
to sleep in.
 It's important that once you've established a schedule, that you keep that schedule and only deviate if absolutely necessary. This willeventually become part of your routine. In the end, this management advice will better equip you to run and maintain a successful business
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
export default Book12;
