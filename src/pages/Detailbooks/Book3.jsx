
 import img3 from '/books/5-am.jpg';
 import Footer from '../../components/Footer';
 import RelatedBooks from '../../components/RelatedBooks';
 import './Book1.css';

const Book3 = () => {
  return (
    <>

    <div className ='book_details'>
      <div className='image_and_header'>

        <div className ='book_details_image'>
            <img src = {img3} alt='monk'/>
        </div>
        <h1>The 5 AM Club Summary by Robin Sharma
 </h1>
      </div>
        {/* first part starts  */}
        <div className='first_part'>
   <h1>Lesson 1: If you want to be successful, give your brain an advantage by waking up at 5 a.m.
</h1>
    <p>The billionaire tells the artist and entrepreneur that he has the key to their success.When they arrive to meet him early the next morning, his first lesson is that waking up at 5 a.m. willgive your brain the advantage to succeed throughout the day.
Our minds have a limited amount of
accomplish much more.
"bandwidth."When we fill our day with social media, interactions with those around us, television, and so on, we fill this bandwidth to the point that we can't take in anything more before the day is even over. If you wake up at 5 a.m.,you will find you can focus on one thing without these distractions and
Our brain chemistry is different early in the morning. The brain's prefrontal cortex, or that part of you that makes you worry
at peace. What an awesome way to start your day!
analyze things over and over, is temporarily shut down in the peaceful early hours. The tranquility at daybreak also has been shown to increase dopamine and serotonin, helping you feel energized and</p>

        </div>
       {/* second part starts  */}

<div className='second_part'>
  <h1>Lesson 2: Find balance in all four "interior empires" to find self-mastery.</h1>
<p> Here's another valuable lesson about success: don't just focus on mindset. While thinking optimistic thoughts will help you, there are three other "interior empires" when trying to find balance.
Next to your Mindset, you also have your Healthset, Heartset, and Soulset.
Healthset refers to our physical health. One of the best ways to getahead in life is to live longer. If you want to be in charge of your empire, you need to live long enough to do this! Committing to exercise will help you get much more out of life. It will also help you live longer. It will help you have energy, lose some stress, and be happier.
Heartset is your emotional well-being. To cultivate a healthy emotional life, we need to express ourselves and have healthy emotional attachments. This is vital to our success.
Lastly, Soulset is our spirituality. Whatever you believe, make time in the morning to connect with your spirituality and yourself. Remember all of the things that make you who you are, and why you are doing what you do. Too often we get caught uped.Apply all these in the peaceful time we make at 5 a.m., and you will be well on your way to a balanced, successful life</p>

</div>

<div className ='third_part'>
  <h3>Lesson 3: Use the 20/20/20 formula to set your day up for success.
</h3>
  <p>By now you may be wondering if it's so important to wake up at 5 a.m.What should I do when I'm up so early? It's entirely possible to wake up this early and waste the extra time by using it to watch the news or scroll through social media.
The billionaire however, lays out the perfect plan: the 20/20/20 rule, which says you should 20 minutes on three highly valuable activities each.
The first 20 minutes of that first hour should consist of exercise. Help your body wake up, and make your body sweat. Sweating decreases cortisol, the hormone responsible for stress and fear. Sweat also releases BDNF, the brain-repairing neurotropic factor, which speeds up the creation of new neural pathways and repairs brain cells. If
you want to think quicker, make sure you get sweaty!
The next 20-minute block should consist of reflection and meditation. The peace you find this early will make way for more inspiration than you thought possible. Make time to write these in your journal. Take the time to focus on what you want out of the day before you get distracted. And don't forget meditation, which has been shown to reduce cortisol which will reduce
Finally, make time to learn. Instead of wasting time on useless entertainment, spend time reading and learning. Learn from the successful people of the world. What all the ultra-rich have in common is a love of learning.</p>

</div>

<div className ='related_books_section'>
  <h1>Related Books</h1>
  <div className='division'></div>
</div>

    </div>

      <RelatedBooks/>
    <div>
        <Footer/>
    </div>



    </>
  )
}

export default Book3;