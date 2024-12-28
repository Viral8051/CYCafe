import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Menu() {

  const [showMorPopup, setShowMorPopup] = useState(false);

  useEffect(() => {
    const checkTime = () => {
      const now = new Date();
      const hours = now.getHours(); // Get the current hour (0-23)
      if (hours >= 10 && hours < 20) {
        setShowMorPopup(true);
      }
    };

    // Check the time when the component mounts
    checkTime();
  }, []);

  const [showNigPopup, setShowNigPopup] = useState(false);
  useEffect(() => {
    const checkTime = () => {
      const now = new Date();
      const hours = now.getHours(); // Get the current hour (0-23)
      if (hours >= 21 && hours < 24) {
        setShowNigPopup(true);
      }
    };

    // Check the time when the component mounts
    checkTime();
  }, []);
  const closePopup = () => {
    setShowMorPopup(false);
    setShowNigPopup(false);
  };

    var settings = {
        className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            
          }
        }
      ]
      };

      var settings2 = {
        className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 2,
    speed: 500,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            
          }
        }
      ]
      };
      var settings3 = {
        className: "center",
    centerMode: true,
    infinite: false,
    centerPadding: "60px",
    slidesToShow: 1,
    speed: 500,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: false,
            
          }
        }
      ]
      };
  return (
    <>
    
    <section id="about" class="Menu section">
    <div className='morningPopupSection'>
      {showMorPopup && (
        <div className="popupMorning">
          <div className="popupMorning-content">
          <div className="morningMenu bgShad section-title ">
            <p className='morningMenuDesc'>Wait there... Need something in <span>Early Morning</span>! Here is the morning menu</p>
          </div>
          <div className='MenuSlioder mrning'>
            <Slider {...settings2}>
              <div>
                <img className='' src="Images/MenuImages/MorningMenu0.jpeg" alt="" />
              </div>
              <div>
                <img className='' src="Images/MenuImages/MorningMenu1.jpeg" alt="" />
              </div>
            </Slider>
          </div>
            <button className='popupMorningClose' onClick={closePopup}><i class="bi bi-x"></i></button>
          </div>
        </div>
      )}
    </div>
    <div className='nightPopupSection'>
      {showNigPopup && (
        <div className="popupNight">
          <div className="popupNight-content">
          <div className="nightMenu bgShad section-title ">
            <p className='nightMenuDesc'>Wait there... Need something in <span>Late Night</span>! Here is the morning menu</p>
          </div>
          <div className='MenuSlider night'>
            <Slider {...settings3}>
              <div>
                <img className='' src="Images/MenuImages/NightMenu0.jpeg" alt="" />
              </div>
              
            </Slider>
          </div>
            <button className='popupNightClose' onClick={closePopup}><i class="bi bi-x"></i></button>
          </div>
        </div>
      )}
    </div>
    <div class="container section-title bgShad" >
            <h2>Menu<br/></h2>
            <p><span>This is our Menu</span></p>
    </div>
    <div className='MenuSlider'>
    <Slider {...settings}>
      <div>
        <img className='' src="Images/MenuImages/Menu0.png" alt="" />
      </div>
      <div>
        <img className='' src="Images/MenuImages/Menu1.png" alt="" />
      </div>
      <div>
      <img className='' src="Images/MenuImages/Menu2.png" alt="" />
      </div>
      <div>
      <img className='' src="Images/MenuImages/Menu3.png" alt="" />
      </div>
      <div>
      <img className='' src="Images/MenuImages/Menu4.png" alt="" />
      </div>
      <div>
      <img className='' src="Images/MenuImages/Menu5.png" alt="" />
      </div>
      <div>
      <img className='' src="Images/MenuImages/Menu6.png" alt="" />
      </div>
    </Slider>
    </div>
    {/* Morning */}
    <div className="morningMenu bgShad section-title ">
      <p className='morningMenuDesc'>Wait there... Need something in <span>Early Morning</span>! Here is the morning menu</p>
    </div>
    <div className='MenuSlioder mrning'>
    <Slider {...settings2}>
      <div>
        <img className='' src="Images/MenuImages/MorningMenu0.jpeg" alt="" />
      </div>
      <div>
        <img className='' src="Images/MenuImages/MorningMenu1.jpeg" alt="" />
      </div>
    </Slider>
    </div>
    {/* Night menu */}
    <div className="nightMenu bgShad section-title ">
      <p className='nightMenuDesc'>Wait there... Need something in <span>Late Night</span>! Here is the morning menu</p>
    </div>
    <div className='MenuSlider night'>
    <Slider {...settings3}>
      <div>
        <img className='' src="Images/MenuImages/NightMenu0.jpeg" alt="" />
      </div>
      
    </Slider>
    </div>
    </section>

    </>
  )
}

export default Menu