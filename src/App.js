import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Middle from './components/Middle'
import Design from './components/Design'
import Customer from './components/Customer'
import Blog from './components/Blog'
import Footer from './components/Footer'

const App = () => {
  const user = false
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Middle/>
      <Design/>
      <Customer/>
      <Blog/>
      <Footer/>
    </div>
  )
}

export default App
