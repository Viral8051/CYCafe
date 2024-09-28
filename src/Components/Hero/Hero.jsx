import React from 'react'
import{Link, NavLink} from 'react-router-dom'
import{ useState, useEffect } from 'react';


function Hero() {
  // State to control popup visibility
  const [showPopup, setShowPopup] = useState(false);

  // Image data for the popup
  const imageData = {
    src: "Images/FoodImages/hero1-removebg-preview.png",
    title: "Barodian Sev Usal",
    description:
      "Spicy Indian Soup like Curry Called Usal, it is Made Using Dried Peas, Served with a side of Sev, Spring Onion, Pav & Spicy Tari, which could be used to elevate the spice level of the dish",
  };

  // Trigger popup after a delay (e.g., 2 seconds)
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 2000); // Show popup after 2 seconds

    return () => clearTimeout(timer); // Clean up timer on component unmount
  }, []);

  // Function to split text into words and animate them
  const splitTextIntoWords = (text) => {
    const words = text.split(" ");
    return words.map((word, index) => (
      <span key={index} className="word" style={{ animationDelay: `${index * 0.5}s` }}>
        {word}{" "}
      </span>
    ));
  };
  // // State to control popup visibility
  // const [showPopup, setShowPopup] = useState(false);

  // // useEffect to trigger popup after 3 seconds
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setShowPopup(true);
  //   }, 3000); // 3000ms = 3 seconds

  //   // Clean up the timer when the component unmounts
  //   return () => clearTimeout(timer);
  // }, []);

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
      <div className='popup'>
      <img 
        src={imageData.src} 
        className="img-fluid animated w-80" 
        alt={imageData.title} 
      />
      {/* <img src="Images/FoodImages/hero1-removebg-preview.png" class="img-fluid animated w-80" alt=""/> */}
      {/* Conditionally render the popup on top of the image */}
      {showPopup && (
        <div 
          className="popup-inner" 
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            color: 'white',
            padding: '20px',
            borderRadius: '10px',
            zIndex: 10
          }}
        >
          <p className="hero-pop-Content1">{(imageData.title)}</p>
          <p className="hero-pop-Content2">
            {splitTextIntoWords(imageData.description)}
          </p>
          </div>
            )}
      </div>
    </div>
  </div>
</div>

</section>
    </>
  )
}

export default Hero
