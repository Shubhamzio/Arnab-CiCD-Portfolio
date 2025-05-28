
import img2 from '/books/the-monk.jpg';
import Footer from '../../components/Footer';
import RelatedBooks from '../../components/RelatedBooks';
import './Book1.css';

const Book2 = () => {
  return (
    <>

    <div className ='book_details'>
      <div className='image_and_header'>

        <div className ='book_details_image'>
            <img src = {img2} alt='monk'/>
        </div>
        <h1>The Monk Who Sold His Ferrari by Robin Sharma
 </h1>
      </div>
        {/* first part starts  */}
        <div className='first_part'>
   <h1>Lesson 1: Learn to guard your mind with The Heart of the Rose exercise.</h1>
    <p>The fable Yogi Raman, Julian's teacher, tells, takes place in a garden. It's fullof beautiful flowers that smellgreat. Think of it as a calm, serene place where you can refuel your energy whenever you need to.
Imagine if your mind was a garden like that. What a powerful brain! But for most of us, our mind looks like a dumpster, much more than a garden. It's littered with mental clutter, unnecessary information, ungrounded worries and anxious thoughts.
Therefore, the first of the seven virtue Sivana control your mind. What you're trying to do here is to control what even comes into your garden in the first place. Think of yourself like a guardian, standing at the gate of your brain, choosing who and what gets in.
One exercise o practice it you need an actual rose and a quiet space to yourself. Then, you simply stare at the center of the rose and try to fillyour mind with thoughts about how beautiful it is.
Think of it as a form At firs of distracting thoughts, but you'llget better at keeping those out of your head over time. That's the o
The more disciplined you become in which thoughts you accept into your mind, the easier it'll be to turn it into the beautiful, energizing garden you need..</p>

        </div>
       {/* second part starts  */}

<div className='second_part'>
  <h1>Lesson 2: The Ten Rituals of Radiant Living are a simple morning routine that covers everything you need.</h1>
<p> 1.The Ritual of Early Awakening. Six hours of sleep and seeing the sunrise. Of course, you have to figure out how much you need.</p>
<p> 2.The Ritual of Solitude. Always make a few minutes to practice silence after waking up</p>
<p>3. The Ritual of Physicality. Move, get up, do some exercise. Whatever gets the blood flowing.</p>
<p>4. The Ritual Of Live Nourishment. A vegeterian diet based on fresh food is what the sages follow.</p>
<p>5. The Ritual of Abundant Knowledge. Keep your mind stimulated with a bit of reading or studying.</p>
<p>6.The Ritual of Personal Reflection. Did you do your best today? What could codld you have done better?</p>
<p>7.The Ritual of Music. Listen to music often to never get stuck in a bad mood.</p>
<p>8. The Ritual of Spoken Word. Write down ashort mantra you can repeat to yourself throughout the day.</p>
<p>9.The Ritual of Congruent Character. Always follow your principles.s Write Write them down, be aware of them and stick to them.</p>
<p>10.The Ritual of Simplicity. Ruthlessly live your priorities and remove everything else that's unnecessary.
This reminds me a bit of The Miracle Morning, but it's more than that. You can see it extends way beyond your morning but that's.</p>
</div>

<div className ='third_part'>
  <h3>Lesson 3: Selflessly serve others and you'll be better off yourself.</h3>
  <p>Later in the story, the sumo collapses but then reawakens to the smell of beautiful, yellow roses. These roses represent another virtue, the idea of selflessly serving others. It's beautifully summarized in this ancient, Chinese proverb
A trace of fragrance always remains on the hands that present you with roses.
It's a metaphor, which says whenever you help someone else, some of the benefits will come back right to you. You rarely know when and how, but karma always comes around. This doesn't mean you have to join the salvation army, small, simple acts of kindness and compassion go a long way.
Every morning, take a few seconds to think about what good you can do today. Whether it's calling your grandma or praising a coworker, it'l bring you one step closer to what the Yogi would call an enlightened life.</p>

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

export default Book2;