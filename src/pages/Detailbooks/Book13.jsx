import React from 'react'
import Footer from '../../components/Footer';
import RelatedBooks from '../../components/RelatedBooks';
import './Book1.css';
import img6 from '/books/getting-things-done.jpg';
const Book13 = () => {
  return (
    <>

    <div className ='book_details'>
      <div className='image_and_header'>

        <div className ='book_details_image'>
            <img src = {img6} alt='monk'/>
        </div>
        <h1>Getting Things Done</h1>

      </div>
        {/* first part starts  */}
        <div className='first_part'>
   <h1>The Book in Three Sentences

</h1>
    <p> 1. If we don't appropriately manage the 'open loops' in our life, our attention will get pulled.
</p>
    <p> 2. Overwhelm comes from not clarifying what your intended outcome is, not deciding what the very next action is, and not reminding yourself of your intended outcome and action.
</p>
    <p> 3. You need to transform all the 'stuff you attract and accumulate into a clear inventory of meaningful actions, projects, and usable information.
</p>



        </div>
       {/* second part starts  */}

<div className='first_part'>
  <h1>The Five Big Ideas
</h1>
<p>1.Getting things done requires defining what "done" means and what "doing" looks like.
</p>
<p>2. Mastering your workflow involves capturing what has your attention, clarifying what it means, putting it where it belongs, reviewing it frequently, and engaging with it
</p>
<p>3. If an action will take less than two minutes, it should be done at the moment it is defined.
</p>
<p>4. Anxiety and guilt don't come from having too much to do; it comes from breaking agreements with yourself.
</p>
<p>5. Your mind is for having ideas, not for holding them.
</p>


</div>
<div className='first_part'>
  <h1>Getting Things Done Summary
</h1>
<p>A basic truism Allen has discovered over decades of coaching and training thousands of people is that most stress people experience comes from inappropriately managed commitments they make or accept.
"Anything that does not belong where it is, the way it is, is an 'open loop,'which will be pulling on your attention if it's not appropriately managed."
"You must use your mind to get things off your mind."
"Most often, the reason something is on your mind is that you want it to be different than it currently is, and yet: you haven't clarified exactly what the intended outcome is; you haven't decided what the very next physical action step is; and/or you haven't put reminders of the outcome and the action required in a system you trust."
Until your thoughts have been clarified and decisions have been made, and the resulting data has been stored in a system that you absolutely know you willaccess and think about when you need to, your brain can't give up the job.
"It's a waste of time and energy to keep thinking about something that you make no progress on."
We need to transform all the 'stu d accumulate into a clear inventory of meaningful actions, projects, and usable information.
</p>
<p>

<strong>
  Getting things done requires two basic components:
1. Outcome. Defining what "done" means
2. Action. What "doing looks like

</strong>
</p>
<p>
  Horizontally. Maintaining coherence across all the activities in which you are involved.
 Vertically. Managing thinking, development, and coordination of individual topics and projects
"The goal for managing horizontally and vertically is the same: to get things off your mind and get them done."
"There is usually an inverse relationship between how much something is on your mind and how much it's getting done."
"There is no reason to ever have the same thought twice unless you like having that thought.
</p>




</div>
<div className='first_part'>
  <h1>Getting Things Done Workflow Chart
</h1>
<p>When you are processing an item, ask yourself, "What is it?" and, "Is it actionable?"
If it is not actionable, there are three possibilities:
1. Trash. It is no longer needed
2. Incubate. No action is needed now, but something might need to be done later.
3. Reference. The item is potentially useful information that might be needed for something later
</p>
<p>

<strong>
 . Do it. If an action will take less than two minutes, it should be done now it is defined.
2. Delegate it. If the action will take longer than two minutes, ask yourself, "Am I the right person to do this?" If the answer is no, delegate it to the appropriate entity.
3. Defer it. If the action will take longer than two minutes, and you are the right person to do it, you will have to defer acting on it until later and track it on one or more "Next Actions" lists.
"Being organized means simply that where something is matches what it means to you."
Allen defines a project as any desired result that can be accomplished within a year that requires more than one action step.

</strong>
</p>
<p>
  Time-specific actions. This is a fancy name for appointments.
. Day-specific actions. These are things that you need to do sometimes on a certain day, but not necessarily at a specific time.
 Day-specific information. The calendar is also the place to keep track of things you want to know about on specific days-not necessarily actions you'll have to take but rather information that may be useful on a certain date
"It's useful to have a calendar on which you can note both time-specific and day-specific actions."
"Next Actions lists, which, along with the calendar, are at the heart of daily action-management organization and orientation."
No-action systems fall into three categories:
Trash. This is self-evident.
 Incubation. These are things that require no immediate action but are worth keeping. There are two kinds of incubation tools (i) Someday/Maybe lists and (ii) a tickler system. Someday/Maybe items are of the nature of "projects I might want to do, but not now... but I'd like to be reminded of them regularly."A tickler system is for items that you don'twant or need to be reminded of until some designated time in the future.
 Reference. Reference systems generally take two forms: (1) topic- and arech it's getting done."
"There is no reason to ever have the same thought twice unless you like having that thought.
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

export default Book13;