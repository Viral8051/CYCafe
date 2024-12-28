import React, { useState }  from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight,faTimes  } from '@fortawesome/free-solid-svg-icons';

function Menu() {

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
            <img className='' src="Images/gallaryImages/g1.jpeg" alt="" />
          </div>
          <button className='galPlay' id='galPlayBtn' onClick={() => openPopup("Images/gallaryImages/g1.jpeg", "image")}><FontAwesomeIcon icon={faChevronRight} /></button>
        </div>
      </div>
      
      <div>
        <div className='gallaryCard'>
          <div className="cardImage">
            <img className='' src="Images/gallaryImages/g2.jpeg" alt="" />
          </div>
          <button className='galPlay' id='galPlayBtn' onClick={() => openPopup("Images/gallaryImages/g2.jpeg", "image")}><FontAwesomeIcon icon={faChevronRight} /></button>
        </div>
      </div>
      
      <div>
        <div className='gallaryCard'>
          <div className="cardImage">
            <img className='' src="Images/gallaryImages/g3.jpeg" alt="" />
          </div>
          <button className='galPlay' id='galPlayBtn' onClick={() => openPopup("Images/gallaryImages/g3.jpeg", "image")}><FontAwesomeIcon icon={faChevronRight} /></button>
        </div>
      </div>

      <div>
        <div className='gallaryCard'>
          <div className="cardImage">
            <video src="Images/gallaryImages/g5.mp4" controls autoPlay muted loop></video>
          </div>
          <button className='galPlay' id='galPlayBtn' onClick={() => openPopup("Images/gallaryImages/g5.mp4", "video")}><FontAwesomeIcon icon={faChevronRight} /></button>
        </div>
      </div>
      <div>
        <div className='gallaryCard'>
          <div className="cardImage">
            <video src="Images/gallaryImages/g6.mp4" controls autoPlay muted loop></video>
          </div>
          <button className='galPlay' id='galPlayBtn' onClick={() => openPopup("Images/gallaryImages/g6.mp4", "video")}><FontAwesomeIcon icon={faChevronRight} /></button>
        </div>
      </div>
      <div>
        <div className='gallaryCard'>
          <div className="cardImage">
            <video src="Images/gallaryImages/g7.mp4" controls autoPlay muted loop></video>
          </div>
          <button className='galPlay' id='galPlayBtn' onClick={() => openPopup("Images/gallaryImages/g7.mp4", "video")}><FontAwesomeIcon icon={faChevronRight} /></button>
        </div>
      </div>
      <div>
        <div className='gallaryCard'>
          <div className="cardImage">
            <video src="Images/gallaryImages/g8.mp4" controls autoPlay muted loop></video>
          </div>
          <button className='galPlay' id='galPlayBtn' onClick={() => openPopup("Images/gallaryImages/g8.mp4", "video")}><FontAwesomeIcon icon={faChevronRight} /></button>
        </div>
      </div>
      <div>
        <div className='gallaryCard'>
          <div className="cardImage">
            <video src="Images/gallaryImages/g9.mp4" controls autoPlay muted loop></video>
          </div>
          <button className='galPlay' id='galPlayBtn' onClick={() => openPopup("Images/gallaryImages/g9.mp4", "video")}><FontAwesomeIcon icon={faChevronRight} /></button>
        </div>
      </div>
      <div>
        <div className='gallaryCard'>
          <div className="cardImage">
            <video src="Images/gallaryImages/g10.mp4" controls autoPlay muted loop></video>
          </div>
          <button className='galPlay' id='galPlayBtn' onClick={() => openPopup("Images/gallaryImages/g10.mp4", "video")}><FontAwesomeIcon icon={faChevronRight} /></button>
        </div>
      </div>
      <div>
        <div className='gallaryCard'>
          <div className="cardImage">
            <video src="Images/gallaryImages/g11.mp4" controls autoPlay muted loop></video>
          </div>
          <button className='galPlay' id='galPlayBtn' onClick={() => openPopup("Images/gallaryImages/g11.mp4", "video")}><FontAwesomeIcon icon={faChevronRight} /></button>
        </div>
      </div>
      <div>
        <div className='gallaryCard'>
          <div className="cardImage">
            <video src="Images/gallaryImages/g12.mp4" controls autoPlay muted loop></video>
          </div>
          <button className='galPlay' id='galPlayBtn' onClick={() => openPopup("Images/gallaryImages/g12.mp4", "video")}><FontAwesomeIcon icon={faChevronRight} /></button>
        </div>
      </div>
      <div>
        <div className='gallaryCard'>
          <div className="cardImage">
            <video src="Images/gallaryImages/g13.mp4" controls autoPlay muted loop></video>
          </div>
          <button className='galPlay' id='galPlayBtn' onClick={() => openPopup("Images/gallaryImages/g13.mp4", "video")}><FontAwesomeIcon icon={faChevronRight} /></button>
        </div>
      </div>
      <div>
        <div className='gallaryCard'>
          <div className="cardImage">
            <video src="Images/gallaryImages/g15.mp4" controls autoPlay muted loop></video>
          </div>
          <button className='galPlay' id='galPlayBtn' onClick={() => openPopup("Images/gallaryImages/g15.mp4", "video")}><FontAwesomeIcon icon={faChevronRight} /></button>
        </div>
      </div>
      <div>
        <div className='gallaryCard'>
          <div className="cardImage">
            <video src="Images/gallaryImages/g16.mp4" controls autoPlay muted loop></video>
          </div>
          <button className='galPlay' id='galPlayBtn' onClick={() => openPopup("Images/gallaryImages/g16.mp4", "video")}><FontAwesomeIcon icon={faChevronRight} /></button>
        </div>
      </div>
      <div>
        <div className='gallaryCard'>
          <div className="cardImage">
            <video src="Images/gallaryImages/g17.mp4" controls autoPlay muted loop></video>
          </div>
          <button className='galPlay' id='galPlayBtn' onClick={() => openPopup("Images/gallaryImages/g17.mp4", "video")}><FontAwesomeIcon icon={faChevronRight} /></button>
        </div>
      </div>
      {/* <div>
        <div className='gallaryCard'>
          <div className="cardImage">
            <video src="Images/gallaryImages/g18.mp4"></video>
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

export default Menu