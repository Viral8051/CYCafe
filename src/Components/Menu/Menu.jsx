import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Menu() {
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
  return (
    <>
    <section id="about" class="Menu section">
    <div class="container section-title bgShad" >
            <h2>Menu<br/></h2>
            <p><span>This is our Menu</span></p>
    </div>
    <div className='MenuSlider'>
    <Slider {...settings}>
      <div>
        <img className='' src="Images/FoodImages/Menu1.png" alt="" />
      </div>
      <div>
      <img className='' src="Images/FoodImages/Menu2.png" alt="" />
      </div>
      <div>
      <img className='' src="Images/FoodImages/Menu3.png" alt="" />
      </div>
      <div>
      <img className='' src="Images/FoodImages/Menu4.png" alt="" />
      </div>
      <div>
      <img className='' src="Images/FoodImages/Menu5.png" alt="" />
      </div>
      <div>
      <img className='' src="Images/FoodImages/Menu6.png" alt="" />
      </div>
      <div>
      <img className='' src="Images/FoodImages/Menu7.png" alt="" />
      </div>
      <div>
      <img className='' src="Images/FoodImages/Menu8.png" alt="" />
      </div>
      <div>
      <img className='' src="Images/FoodImages/Menu9.png" alt="" />
      </div>
      <div>
      <img className='' src="Images/FoodImages/Menu10.png" alt="" />
      </div>
      <div>
      <img className='' src="Images/FoodImages/Menu11.png" alt="" />
      </div>
      <div>
      <img className='' src="Images/FoodImages/Menu12.png" alt="" />
      </div>
    </Slider>
    </div>
    </section>

    </>
  )
}

export default Menu