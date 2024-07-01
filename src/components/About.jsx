import React from 'react'
import '../styles/about.css'

const About = () => {
  return (
   <section className='about'>
    <div className='about-container'>
      
      <div className='about-head'>
        <h1>Our clients</h1>
        <p>We have been working with some Fortune 500+ clients</p>
      </div>

      <div className='about-logo'>  
        <img src="./assets/Vector (1).png" alt="" />
        <img src="./assets/Logo (1).png" alt="" />
        <img src="./assets/Logo (2).png" alt="" />
        <img src="./assets/Logo (3).png" alt="" />
        <img src="./assets/Logo (4).png" alt="" />
        <img src="./assets/Logo (5).png" alt="" />
        <img src="./assets/Logo (6).png" alt="" />
      </div>


  
   <div className='about-head2'>
    <h1>Manage your entire community in a single system</h1>
    <p>Who is Nextcent suitable for? </p>
   </div>


   <div className='card-wrapper'>
     
   <div className='wrap'>
    <img src="./assets/Icon.png" alt="" />
    <h3>Membership Organisations</h3>
    <p>Our membership management software provides full automation of membership renewals and payments</p>
   </div>

   <div className='wrap'>
    <img src="./assets/Icon (1).png" alt="" />
    <h3>Membership Organisations</h3>
    <p>Our membership management software provides full automation of membership renewals and payments</p>
   </div>

   <div className='wrap'>
    <img src="./assets/Icon (2).png" alt="" />
    <h3>Membership Organisations</h3>
    <p>Our membership management software provides full automation of membership renewals and payments</p>
   </div>



   </div>


<div className='about-bottom'>


<div>
    <img src="./assets/rafiki.png" alt="" />
</div>


<div className='about-bottext'>
    <h2>The unseen of spending three years at Pixelgrade</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>
    <button>Learn</button>
</div>

</div>



    </div>
   </section>
  )
}

export default About
