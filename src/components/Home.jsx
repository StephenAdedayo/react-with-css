import React from 'react'
import '../styles/home.css'

const Home = () => {
  return (
    <section className='home'>
        <div className='home-container'>
         
       <div className='home-text'>
        <h1>Lessons and insights <br /><span>from 8 years</span></h1>
        <p>Where to grow your business as a photographer: site or social media?</p>
        <button>Register</button>
       </div>
        
     <div className='home-img'>
        <img src="./assets/illustration.png" alt="" />
     </div>
        
       
       
        </div>
   <div className='dot'>
   <img src="./assets/Dot.png" alt="" />
   </div>
       
    </section>
  )
}

export default Home
