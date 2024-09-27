import React from 'react'

function Aboutus() {
  return (
    <>
        <section id="about" class="about section">
            <div class="container section-title bgShad" >
            <h2>About Us<br/></h2>
            <p><span>Learn More</span> <span class="description-title">About Us</span></p>
            </div>

        <div class="container">

            <div class="row gy-4">
                <div class="about1 col-lg-7"  data-aos-delay="100">
                <img src="assets/img/about.jpg" class="img-fluid mb-4" alt=""/>
                <div class="book-a-table bg-white">
                    <h3>Book a Table</h3>
                    <p>+1 5589 55488 55</p>
                </div>
                </div>
                <div class="about2 col-lg-5"  data-aos-delay="250">
                <div class="content ps-0 ps-lg-5 bgShad">
                    <p class="fst-italic">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua.
                    </p>
                    <ul>
                    <li><i class="bi bi-check-circle-fill"></i> <span>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</span></li>
                    <li><i class="bi bi-check-circle-fill"></i> <span>Duis aute irure dolor in reprehenderit in voluptate velit.</span></li>
                    <li><i class="bi bi-check-circle-fill"></i> <span>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</span></li>
                    </ul>
                    <p>
                    Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident
                    </p>

                    {/* <div class="position-relative mt-4">
                    <img src="assets/img/about-2.jpg" class="img-fluid" alt=""/>
                    <a href="https://www.youtube.com/watch?v=LXb3EKWsInQ" class="glightbox pulsating-play-btn"></a>
                    </div> */}
                </div>
                </div>
            </div>

        </div>

</section>
    </>
  )
}

export default Aboutus