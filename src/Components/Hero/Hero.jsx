import React from 'react'
import{Link, NavLink} from 'react-router-dom'


function Hero() {
  return (
    <>
      <section id="hero" class="hero section light-background">

<div class="container">
  <div class="row gy-4 justify-content-center justify-content-lg-between">
    <div class="col-lg-5 order-2 order-lg-1 d-flex flex-column justify-content-center bgShad">
      <h1>Enjoy Your Healthy<br/>Delicious Food</h1>
      <p>We are team of talented designers making websites with Bootstrap</p>
      <div class="d-flex">
        <div class="btn-getstarted"><NavLink to="/bookatable">Book a Table</NavLink></div>
        <div className='space p-1'></div>
        <div class="btn-getstarted"><NavLink to="/menu">Menu</NavLink></div>
        {/* <a href="https://www.youtube.com/watch?v=LXb3EKWsInQ" class="glightbox btn-watch-video d-flex align-items-center"><i class="bi bi-play-circle"></i><span>Watch Video</span></a> */}
      </div>
    </div>
    <div class="col-lg-5 order-1 order-lg-2 hero-img" data-aos="zoom-out">
      <img src="Images/FoodImages/hero1-removebg-preview.png" class="img-fluid animated w-80" alt=""/>
    </div>
  </div>
</div>

</section>
    </>
  )
}

export default Hero