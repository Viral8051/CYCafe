import React from 'react'
import ThreedSlider from './ThreedSlider'
import ChrisSlider from './chrisSlider'


function Gallary() {
    
  return (
    <>
    <section className='Gallary section' id="gallaryMain">
    <div class="container section-title bgShad" >
      <h2>Gallary<br/></h2>
      <p><span>Take a tour to our Gallary</span></p>
    </div>
    <div className="gallarySlider">
      <ThreedSlider/>
    </div>
    <div class="container section-title bgShad" >
      <p><span>Take a tour to our Christmas celebrations</span></p>
    </div>
    <div className="chrisSlider">
    <ChrisSlider/>
    </div>
    </section>
    </>
  )
}

export default Gallary