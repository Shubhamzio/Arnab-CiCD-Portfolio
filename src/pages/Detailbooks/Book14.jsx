import React from 'react'
import Footer from '../../components/Footer';
import RelatedBooks from '../../components/RelatedBooks';
import './Book1.css';
import img6 from '/books/lean-in.jpg';
const Book14 = () => {
  return (
    <>

    <div className ='book_details'>
      <div className='image_and_header'>

        <div className ='book_details_image'>
            <img src = {img6} alt='monk'/>
        </div>
        <h1>GLean In - by Sheryl Sandberg</h1>

      </div>
        {/* first part starts  */}
        <div className='first_part'>
   <h1>Lean In - by Sheryl Sandberg

</h1>
    <p> Lean In is all about maximising your career. In parts, it's about how we all do things that sabotage our own opportunities, and in others it's directly targeted at women, such as how they approach juggling the demands of family and work at the same time.
Things are different for women ompared to men, especially in the more senior positions. Sheryl Sandberg, is rated as one of the top 5 most powerful woman in Forbes and has MUST READ advice for allambitious woman that want to have a successful career. The book covers topics like:
- likeability vs success
- picking the right partner (who is an equal partner)
- the need to 'lean in', especially at the critical parts of your career before you take on the responsibilities of child birth.
'Women, Work and the Willto Lead'

</p>




        </div>
       {/* second part starts  */}

<div className='first_part'>
  <h1>Lean In Summary
</h1>
<p>Sheryl Sandberg, is rated as one of the top 5 most powerful woman in Forbes and has MUST READ advice for all ambitious woman that want to have a successful career.
Sheryl tells the story of when she flew into New York for a series of pitches from private equity firms to get investment. During the first meeting ina corporateeoffice off high above Manhattan, it was going well. Then during the break, Sheryl asked for the women's restroom. The guy stared blankly at her then turned to one of his colleagues to
ask... 'How long have you been in this office?' Asked Sheryl. They'd been there a year. 'So am I the first woman to set foot in this office in a whole year??"
At Sheryl's graduation, there was a mix of male and female - but at the senior level she has noticed she is the only female.Where did they go?
Getting things done requires defining what "done" means and what "doing" looks like.
</p>
<p>Professional ambition is expected of men--but it is optional, or even worse - negative for woman. Many have argued that woman are not less ambiti lightened e meaningful goals, like raising children, personal fulfilment, contribution and improving the lives of others. From a very early age, boys are
encouraged to take charge and offer their opinions. Teachers interact more with the boys, call on them more frequently. They are more likely to put their hand up
The gender stereotypes introduced in childhood are reinforced throughout our lives and become self-fulfilling prophecies. With pay, men generally earn more, so people expect woman to earn less.
For many men, the fundamental assumption is that they can have both a successful professional life and fulfilling personal life. For woman, the assumption that trying to do both is too difficult or impossible at worst. 'Ambitious' is a positive thing for men, but almost a derogatory word when used for a woman: 'she's very... ambitious' (bossy,
assertive, dominant, controlling, micro-managing, doesn't care about her kids)
Success and likeability
going personality' and vast professional network that included many powe
and made their assessments on what they thought of her.
In 2003, in the Columbia Business School there was a study about a real life entrepreneur named Heidi Roizen. They described her story about apitalist by students read the story about Heidi
The other students read the same story with one different, they changed "Heidi" to "Howard". The students rated them equal in competency, however Howard came across as more an appealing colleague. Heidi on the other hand, was seen as selfish and "not the kind of person you would want to hire or work for".
This experiment supports the previous research that showed, success and likeability are positively corelated for men.
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

export default Book14;