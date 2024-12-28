import React from 'react'

function Footer() {
  return (
    <>
    <footer id="footer" class="footer dark-background">

    <div class="container">
      <div class="row footer-inner gy-3">
        <div class="col-lg-3 col-md-6 d-flex">
          <i class="bi bi-geo-alt icon"></i>
          <div class="address">
            <h4>Address</h4>
            <p>175 Melton Rd</p>
            <p>Leicester, LE4 6QT</p>
            <p></p>
          </div>

        </div>

        <div class="col-lg-3 col-md-6 d-flex">
          <i class="bi bi-telephone icon"></i>
          <div>
            <h4>Contact</h4>
            <p>
              <strong>Phone:</strong> <span><a className="footertel" href='tel:+447555 331331'>+447555 331331</a></span><br/>
              <strong>Email:</strong> <span>cycafe.uk@gmail.com</span><br/>
            </p>
          </div>
        </div>

        <div class="col-lg-3 col-md-6 d-flex">
          <i class="bi bi-clock icon"></i>
          <div>
            <h4>Opening Hours</h4>
            <p>
              <strong>Mon-Sun:</strong> <span>05:00 AM - 12:00 am</span><br/>
              <strong>Tuesday</strong>: <span>Closed</span>
            </p>
          </div>
        </div>

        <div class="col-lg-3 col-md-6 d-flex ">
          <i class="bi bi-hand-thumbs-up-fill icon"></i>
          <div>
          <h4>Follow Us</h4>
          <div class="social-links">
            {/* <a href="#" class="twitter"><i class="bi bi-twitter-x"></i></a> */}
            {/* <a href="#" class="facebook"><i class="bi bi-facebook"></i></a> */}
            <a href="https://www.instagram.com/cycafe_/" class="instagram"><i class="bi bi-instagram"></i></a>
            {/* <a href="#" class="linkedin"><i class="bi bi-linkedin"></i></a> */}
            <a href='https://g.co/kgs/4ToZEip' className='google'><i className='bi bi-google'></i></a>
            {/* <a href='https://www.tripadvisor.co.uk/Restaurant_Review-g26655980-d27976140-Reviews-Cy_Cafe-Leicester_Forest_East_Leicester_Leicestershire_England.html?m=19905' className='tripAdvisor'><i className='bi bi-tripadvisor'></i></a> */}
          </div>
          </div>
        </div>

      </div>
    </div>

    <div class="container copyright text-center mt-4">
      <p>© <span>Copyright</span> <strong class="px-1 sitename">CY Cafe</strong> <span>All Rights Reserved</span></p>
      {/* <div class="credits">
        Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
      </div> */}
    </div>

  </footer>

    </>
  )
}

export default Footer