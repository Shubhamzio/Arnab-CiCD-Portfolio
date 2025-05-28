
 import img3 from '/books/drive-summary.webp';
 import Footer from '../../components/Footer';
 import RelatedBooks from '../../components/RelatedBooks';
 import './Book1.css';

const Book5 = () => {
  return (
    <>

    <div className ='book_details'>
      <div className='image_and_header'>

        <div className ='book_details_image'>
            <img src = {img3} alt='monk'/>
        </div>
        <h1>Drive Summary
 </h1>
      </div>
        {/* first part starts  */}
        <div className='first_part'>
   <h1>Lesson 1:- Type of Motivation
</h1>
    <p>Since success, money, and fame are relatively recent developments in the grand scheme of the universe, the concept was void thousand of years ago. Back then, our ancestors had two motivations - to consume food and to survive. Pink calls these type of motivations as 'Motivation 1.0'. The arrival of civilisation to modern times has seen
a drastic shift in the life of human.While nutrition and survival are still our primary motivations, they are simply not enough. There emerged new motivators such as success, recognition, and money. Pink called this 'Motivation 2.0'. For the 21st century, Pink recommends a fullupgrade to 'Motivation 3.0',which is built on the assumption that, beside biological urges and extrinsic motivations, humans also have certain intrinsic factors influencing their drives.</p>

        </div>
       {/* second part starts  */}

<div className='second_part'>
  <h1>Lesson 2: - The Difference Between Intrinsic and Extrinsic Motivation</h1>
<p> Extrinsic motivation is powered by a reward system. There is always a contingency attached to an action. The motivation, in this case, is either to get a reward or to avoid punishment. This is the carrot-and-stick approach.
Intrinsic motivation is that fire within us which compels us to do better and be better. It is our inner voice that tells us to not give up. It is our integrity for giving our best without any reward. It is the satisfaction obtained from being productive, helping others, or perusing a hobby.</p>

</div>

<div className ='third_part'>
  <h3>Lesson 3: - Why the reward system does not work
</h3>
  <p>Pink drew the conclusion that the reward system was futile and secondary to intrinsic motivation. The initial boost of energy as provided by an extrinsic motivator tends to reduce with time. So, a well-paying job can excite a person only for a short amount of time. As per the tendency of humans to get bored, the person will develop a dislike
towards the job.When you are doing something for someone else, it becomes more work than joy.
When there is a reward, people develop a tunnel vision. It stops them from observing the bigger picture. An experiment by Richard Titmuss observed that paying people for blood donations reduced the number of potential donors. Since the altruistic aspect of blood donation as a socially responsible act was converted into a financial one,
the motivators of the people changed.
Carrot-and-stick approach promotes bad behaviour, creates addiction and encourages short-term thinking. Since the reward is desired by all, people may opt to cheat instead of maintaining their integrity. Similarly cash reward and t
rophies can provide a jolt of pleasure at first, but the recipient needs larger and larger doses to keep it alive.
</p>

</div>
<div className ='fourth_part'>
  <h3>Lesson 4: Type X and Type I People
</h3>
  <p>Pink terms the people conforming to extrinsic motivations and reward system as Type X.Their endeavours are driven by the need for fame, money or beauty. Their inherent tendency to want more will keep them thirsty and never satisfied.There is always 'more'to be desire
Type I people rely on their inner motivation to accomplish themselves. They measure success on the scale of their emotions and efforts instead of what rewards they received for it. They are generally more satisfied and content with their work and status. Their esteem is higher than the Type X, even during failure</p>

</div>
<div className ='fifth_part'>
  <h3>Lesson 5: The Pillars of Intrinsic Motivation
</h3>
  <p>Pink conceptualises three pillars of intrinsic motivation.
1. Autonomy - It is the desire to direct our own lives and desigm our own paths without the dominance of others
2. Mastery - It is the desire to excel at something important to us
3. Purpose - The realisation that there is a bigger picture and our work contributes to it.</p>

</div>
<div className ='sixth_part'>
  <h3>Lesson 6: The Importance of Autonоmy
</h3>
  <p>Autonomy is the independence to go our own way. It allows us to be an individual with personalised opinions and behaviours. The reward system gives us a tunnel vision and so, governs our actions. If there is no reward in sight, we decide the path.</p>

</div>
<div className ='senventh_part'>
  <h3>Lesson 7: The Importance of Mastery

</h3>
  <p>When a task matters to us, we try to excel at the skill required to do it. Hence, mastery is a brilliant motivator. The skillmight not even have a reward, but our temptation to satisfy ourselves is what drives us. Since we deeply care about the skill, we will not be satisfied tillwe do our best.</p>

</div>
<div className ='eighth_part'>
  <h3>Lesson 8: The Importance of Having a Purpose</h3>
  <p>Having a purpose refers to envisioning ourselves to be a part of something bigger. Just like society is formed with the efforts of each person, a revolution is made with many people contributing to it. The assurance that our efforts are leading up to something gives meaning to life. Hence, more than rewards, promotions or bonuses, it is
e in mind essential to have a purpose in mind.</p>

</div>

<div className ='related_books_section'>
  <h1>Related Books</h1>
  <div className='division'></div>
</div>

    </div>

    <div>
      <RelatedBooks/>
        <Footer/>
    </div>



    </>
  )
}

export default Book5;