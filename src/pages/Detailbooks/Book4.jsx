import React from 'react';
 import img4 from '../../assets/books/daring-greatly.jpg';
 import Footer from '../../components/Footer';
import RelatedBooks from '../../components/RelatedBooks';
import './Book1.css';
const Book4 = () => {
  return (
    <>

    <div className ='book_details'>
      <div className='image_and_header'>

        <div className ='book_details_image'>
            <img src = {img4} alt='monk'/>
        </div>
        <h1>Daring Greatly
 </h1>
      </div>
        {/* first part starts  */}
        <div className='first_part'>
   <h1>Lesson 1: Unmasking Vulnerability
</h1>
    <p>"As adults we realise that to live with ..we must again be vulnera ust take off the armour, put down the weapons, show up
-Daring Greatly, Page 11
in order to armour and put down our weapons, it is necessary to identify how we are masking our shame and protecting our vulnerabilities. Dr Brown identifies three major shields that we use to protect ourselves:
Foreboding Joy (Imagining dreadful outcomes that clamp down on momentary joy)
Perfectionism (Believing that doing everything perfectly protects us from shame)
Numbing (Embracing anything that deadens the pain of discomfort and shame)
She also identifies the powerful disarming strategies for freeing ourselves of these masks:
Worthiness (I am enough)
Boundaries (I've had enough)
Engagement (I'm taking risks and letting myself be seen)</p>

        </div>
       {/* second part starts  */}

<div className='second_part'>
  <h1>Lesson 2: Gremlin Ninja Warrior Training</h1>
<p> "If we cultivate enough awareness about shame to name it and speak to it, we've basically cut it off at the knees."
-Daring Greatly, Page 58
Dr Brown defines shame as "the intensely painful feeling or experience of believing we are flawed and therefore unworthy of love and belonging." She counters with the wisdom that "shame resilience is the key to embracing our vulnerability" and leading a wholehearted life. If we are to dare greatly in our lives, we must confront the mental
gremlins that prevent us from truly engaging with others.
She goes on to identify the most common shame categories, for both men and women, stressing the difference between guilt and shame. And she outlines a strategy to build shame resilience:
Recognising shame and understanding it's triggers
Practicing critical awareness and self-compassion
Reaching out to empathetic connections and sharing our stories Speaking about shame and asking for what we need</p>

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

export default Book4;