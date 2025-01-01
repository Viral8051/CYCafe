import React, { useState }  from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight,faTimes  } from '@fortawesome/free-solid-svg-icons';

function ChrisSlider() {

  const [isOpen, setIsOpen] = useState(false);
  const [selectedMedia, setSelectedMedia] = useState({ src: null, type: null });

  const openPopup = (mediaSrc, mediaType) => {
    setSelectedMedia({ src: mediaSrc, type: mediaType });
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
    setSelectedMedia({ src: null, type: null });
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
  return (
    <>
    {/* <section id="about" class="Menu section"> */}
    <div className='MenuSlider'>
    <Slider {...settings}>
      <div>
        <div className='gallaryCard'>
          <div className="cardImage">
            <img className='' src="Images/chrisImages/chris01.jpg" alt="" />
          </div>
          <button className='galPlay' id='galPlayBtn' onClick={() => openPopup("Images/chrisImages/chris01.jpg", "image")}><FontAwesomeIcon icon={faChevronRight} /></button>
        </div>
      </div>
      
      <div>
        <div className='gallaryCard'>
          <div className="cardImage">
            <img className='' src="Images/chrisImages/chris02.jpg" alt="" />
          </div>
          <button className='galPlay' id='galPlayBtn' onClick={() => openPopup("Images/chrisImages/chris02.jpg", "image")}><FontAwesomeIcon icon={faChevronRight} /></button>
        </div>
      </div>
      
      <div>
        <div className='gallaryCard'>
          <div className="cardImage">
            <img className='' src="Images/chrisImages/chris03.jpg" alt="" />
          </div>
          <button className='galPlay' id='galPlayBtn' onClick={() => openPopup("Images/chrisImages/chris03.jpg", "image")}><FontAwesomeIcon icon={faChevronRight} /></button>
        </div>
      </div>

      <div>
        <div className='gallaryCard'>
          <div className="cardImage">
            <img className='' src="Images/chrisImages/chris04.jpg" alt="" />
          </div>
          <button className='galPlay' id='galPlayBtn' onClick={() => openPopup("Images/chrisImages/chris04.jpg", "image")}><FontAwesomeIcon icon={faChevronRight} /></button>
        </div>
      </div>
      <div>
        <div className='gallaryCard'>
          <div className="cardImage">
            <img className='' src="Images/chrisImages/chris05.jpg" alt="" />
          </div>
          <button className='galPlay' id='galPlayBtn' onClick={() => openPopup("Images/chrisImages/chris05.jpg", "image")}><FontAwesomeIcon icon={faChevronRight} /></button>
        </div>
      </div>
      <div>
        <div className='gallaryCard'>
          <div className="cardImage">
            <img className='' src="Images/chrisImages/chris06.jpg" alt="" />
          </div>
          <button className='galPlay' id='galPlayBtn' onClick={() => openPopup("Images/chrisImages/chris06.jpg", "image")}><FontAwesomeIcon icon={faChevronRight} /></button>
        </div>
      </div>
      <div>
        <div className='gallaryCard'>
          <div className="cardImage">
            <img className='' src="Images/chrisImages/chris07.jpg" alt="" />
          </div>
          <button className='galPlay' id='galPlayBtn' onClick={() => openPopup("Images/chrisImages/chris07.jpg", "image")}><FontAwesomeIcon icon={faChevronRight} /></button>
        </div>
      </div>
      <div>
        <div className='gallaryCard'>
          <div className="cardImage">
            <img className='' src="Images/chrisImages/chris08.jpg" alt="" />
          </div>
          <button className='galPlay' id='galPlayBtn' onClick={() => openPopup("Images/chrisImages/chris08.jpg", "image")}><FontAwesomeIcon icon={faChevronRight} /></button>
        </div>
      </div>
      <div>
        <div className='gallaryCard'>
          <div className="cardImage">
            <img className='' src="Images/chrisImages/chris09.jpg" alt="" />
          </div>
          <button className='galPlay' id='galPlayBtn' onClick={() => openPopup("Images/chrisImages/chris09.jpg", "image")}><FontAwesomeIcon icon={faChevronRight} /></button>
        </div>
      </div>
      <div>
        <div className='gallaryCard'>
          <div className="cardImage">
            <img className='' src="Images/chrisImages/chris10.jpg" alt="" />
          </div>
          <button className='galPlay' id='galPlayBtn' onClick={() => openPopup("Images/chrisImages/chris10.jpg", "image")}><FontAwesomeIcon icon={faChevronRight} /></button>
        </div>
      </div>
      <div>
        <div className='gallaryCard'>
          <div className="cardImage">
            <img className='' src="Images/chrisImages/chris11.jpg" alt="" />
          </div>
          <button className='galPlay' id='galPlayBtn' onClick={() => openPopup("Images/chrisImages/chris11.jpg", "image")}><FontAwesomeIcon icon={faChevronRight} /></button>
        </div>
      </div>
      <div>
        <div className='gallaryCard'>
          <div className="cardImage">
            <img className='' src="Images/chrisImages/chris12.jpg" alt="" />
          </div>
          <button className='galPlay' id='galPlayBtn' onClick={() => openPopup("Images/chrisImages/chris12.jpg", "image")}><FontAwesomeIcon icon={faChevronRight} /></button>
        </div>
      </div>
      <div>
        <div className='gallaryCard'>
          <div className="cardImage">
            <img className='' src="Images/chrisImages/chris13.jpg" alt="" />
          </div>
          <button className='galPlay' id='galPlayBtn' onClick={() => openPopup("Images/chrisImages/chris13.jpg", "image")}><FontAwesomeIcon icon={faChevronRight} /></button>
        </div>
      </div>
      <div>
        <div className='gallaryCard'>
          <div className="cardImage">
            <img className='' src="Images/chrisImages/chris14.jpg" alt="" />
          </div>
          <button className='galPlay' id='galPlayBtn' onClick={() => openPopup("Images/chrisImages/chris14.jpg", "image")}><FontAwesomeIcon icon={faChevronRight} /></button>
        </div>
      </div>
      <div>
        <div className='gallaryCard'>
          <div className="cardImage">
            <img className='' src="Images/chrisImages/chris15.jpg" alt="" />
          </div>
          <button className='galPlay' id='galPlayBtn' onClick={() => openPopup("Images/chrisImages/chris15.jpg", "image")}><FontAwesomeIcon icon={faChevronRight} /></button>
        </div>
      </div>
      <div>
        <div className='gallaryCard'>
          <div className="cardImage">
            <img className='' src="Images/chrisImages/chris16.jpg" alt="" />
          </div>
          <button className='galPlay' id='galPlayBtn' onClick={() => openPopup("Images/chrisImages/chris16.jpg", "image")}><FontAwesomeIcon icon={faChevronRight} /></button>
        </div>
      </div>
      <div>
        <div className='gallaryCard'>
          <div className="cardImage">
            <img className='' src="Images/chrisImages/chris17.jpg" alt="" />
          </div>
          <button className='galPlay' id='galPlayBtn' onClick={() => openPopup("Images/chrisImages/chris17.jpg", "image")}><FontAwesomeIcon icon={faChevronRight} /></button>
        </div>
      </div>
      {/* <div>
        <div className='gallaryCard'>
          <div className="cardImage">
            <video src="Images/chrisImages/g18.mp4"></video>
          </div>
        </div>
      </div> */}
    </Slider>
    {isOpen && (
        <div className="popupOverlay" onClick={closePopup}>
          <div className="popupContent">
            {selectedMedia.type === "image" ? (
              <img src={selectedMedia.src} alt="Full view" />
            ) : (
              <video controls autoPlay muted>
                <source src={selectedMedia.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
            <button className="closeButton" onClick={closePopup}>
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>
        </div>
      )}
    </div>
    {/* </section> */}

    </>
  )
}

export default ChrisSlider