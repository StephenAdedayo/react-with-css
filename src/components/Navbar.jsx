import React from 'react'
import '../styles/navbar.css'

const Navbar = () => {
//   const name = "stephen"
//   const job = "developer"

  return (
    <nav className='nav-bar'>
        <a href="/">
            <img src="./assets/logo192.png" alt="" />
        </a>

        <ul className='nav-links'>
            <li><a href="">Home</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Projects</a></li>
            <li><a href="">Testimonials</a></li>
            <li><a href="">Contact</a></li>
        </ul>
 
 <div className="btn-container">
    <button>login</button>
    <button>Sign-up</button>
 </div>
        
    </nav>
  )
}

export default Navbar
