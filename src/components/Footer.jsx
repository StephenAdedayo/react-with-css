import React from 'react'
import '../styles/footer.css'

const Footer = () => {
  return (
   <>
   <section className='footer-header'>
    <h1>Pellentesque suscipit fringilla libero eu.</h1>
    <button>Get a demo  <img src="./assets/Right.png" alt="" /></button>
   </section>
   
   
   <footer className='footer-header1'>
    <div className='footer-ico'>
    <img src="./assets/Logo.png" alt="" />
    <p>Copyright © 2020 Nexcent ltd.</p>
    <p>All Rights Reserved</p>

    <div className='footer-icons'>
        <img src="./assets/Social Icons.png" alt="" />
        <img src="./assets/Social Icons.png" alt="" />
        <img src="./assets/Social Icons.png" alt="" />
        <img src="./assets/Social Icons.png" alt="" />
    </div>
    </div>

<div className='text-wrapper'>

<div className='linked'>
    <h4>Company</h4>
    <ul>
    <li>About us</li>
    <li>Blog</li>
    <li>Contact</li>
    <li>Pricing</li>
    <li>Testimonials</li>
    </ul>
</div>


<div className='linked'>
    <h4>Support</h4>
    <ul>
    <li>Help center</li>
    <li>Terms of service</li>
    <li>Legal</li>
    <li>Privacy Policy</li>
    <li>Status</li>
    </ul>
</div>



<div className='form-side'>
    <h4>Stay Up to Date</h4>

<div className='input'>
<input type="text" placeholder='Your email address'/>
<img src="./assets/Vector.png" alt="" />
</div>


</div>



</div>


   </footer>
   
   
   </>
  )
}

export default Footer
