import React from 'react'
import ThreedSlider from './threedSlider'


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
    </section>
    </>
  )
}

export default Gallary