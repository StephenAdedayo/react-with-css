import React from 'react'
import '../styles/blog.css'

const Blog = () => {
  return (
    <section className='blog'>
        <div className='blog-container'>

        <div className='blog-head'>
        <h1>Caring is the new marketing</h1>
        <p>The Nexcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more.​</p>
        </div>

       <div className='blog-wrapper'>
              

              <div className='blogs'>
              <img src="./assets/image 18.png" alt="" />

              <div className='blog-top'>
                <p>Creating Streamlined Safeguarding Processes with OneRen</p>
                <p className='p1'>Readmore <img src="./assets/Right.png" alt="" /></p>
              </div>
              </div>

              <div className='blogs'>
              <img src="./assets/image 19.png" alt="" />

              <div className='blog-top'>
                <p>What are your safeguarding responsibilities and how can you manage them?</p>
                <p className='p1'>Readmore <img src="./assets/Right.png" alt="" /></p>
              </div>
              </div>
               

              <div className='blogs'>
              <img src="./assets/image 20.png" alt="" />

              <div className='blog-top'>
                <p>Revamping the Membership Model with Triathlon Australia</p>
                <p  className='p1'>Readmore <img src="./assets/Right.png" alt="" /></p>
              </div>
              </div>










       </div>



        </div>
    </section>
  )
}

export default Blog
