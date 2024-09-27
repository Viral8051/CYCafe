import React from 'react'
import Iframe from 'react-iframe'
import { useState } from 'react';


function Contactus() {
  const [ContactFormData, setContactFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const ContactHandleChange = (e) => {
    const { name, value } = e.target;
    setContactFormData({
      ...ContactFormData,
      [name]: value,
    });
  };

  const ContactHandleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', ContactFormData);

    // You can handle API calls here if needed in the future

    // Send data to the backend
    fetch('https://cy-cafe.vercel.app/contactus', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(ContactFormData),
    })
      .then((res) => res.json())
      .then((data) => {
        alert(data.message);
      })
      .catch((error) => {
        alert('Error sending email');
        console.error(error);
      });
  };

  return (
    <>
    <section id="contact" class="contact section">


<div class="container section-title bgShad" >
  <h2>Contact</h2>
  <p><span>Need Help?</span> <span class="description-title">Contact Us</span></p>
</div>


<div class="container"  data-aos-delay="100">

  {/* <div class="mb-5">
    <iframe style="width: 100%; height: 400px;" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" frameborder="0" allowfullscreen=""></iframe>
  </div> */}
  <Iframe url="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9680.831381553331!2d-1.1174062!3d52.6562233!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487761fd7c85e3ab%3A0x907bfbb572d7d45c!2sCY%20CAFE!5e0!3m2!1sen!2suk!4v1726880799316!5m2!1sen!2suk"
        width="100%"
        height="400px"
        id=""
        className=""
        display="block"
        position="relative"/>

  <div class="row gy-4 bgShad">

    <div class="col-md-6">
      <div class="info-item d-flex align-items-center"  data-aos-delay="200">
        <i class="icon bi bi-geo-alt flex-shrink-0"></i>
        <div>
          <h3>Address</h3>
          <p>175 Melton Rd, Leicester LE4 6QT</p>
        </div>
      </div>
    </div>

    <div class="col-md-6">
      <div class="info-item d-flex align-items-center"  data-aos-delay="300">
        <i class="icon bi bi-telephone flex-shrink-0"></i>
        <div>
          <h3>Call Us</h3>
          <p>+447555 331331</p>
        </div>
      </div>
    </div>

    <div class="col-md-6">
      <div class="info-item d-flex align-items-center"  data-aos-delay="400">
        <i class="icon bi bi-envelope flex-shrink-0"></i>
        <div>
          <h3>Email Us</h3>
          <p>cycafe.uk@gmail.com</p>
        </div>
      </div>
    </div>

    <div class="col-md-6">
      <div class="info-item d-flex align-items-center"  data-aos-delay="500">
        <i class="icon bi bi-clock flex-shrink-0"></i>
        <div>
          <h3>Opening Hours<br/></h3>
          <p><strong>Mon-Sun:</strong> 09:00 AM - 08:00 PM; <strong>Tuesday:</strong> Closed</p>
        </div>
      </div>
    </div>

  </div>

  <form onSubmit={ContactHandleSubmit} className="contact-form bgShad" data-aos-delay="600">
            <div className="row gy-4">
              <div className="col-md-6">
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Your Name"
                  required
                  value={ContactFormData.name}
                  onChange={ContactHandleChange}
                />
              </div>

              <div className="col-md-6">
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Your Email"
                  required
                  value={ContactFormData.email}
                  onChange={ContactHandleChange}
                />
              </div>

              <div className="col-md-12">
                <input
                  type="text"
                  className="form-control"
                  name="subject"
                  placeholder="Subject"
                  required
                  value={ContactFormData.subject}
                  onChange={ContactHandleChange}
                />
              </div>

              <div className="col-md-12">
                <textarea
                  className="form-control"
                  name="message"
                  rows="6"
                  placeholder="Message"
                  
                  value={ContactFormData.message}
                  onChange={ContactHandleChange}
                />
              </div>

              <div className="col-md-12 text-center">
                <button type="submit">Send Message</button>
              </div>
            </div>
          </form>

</div>

</section>
    </>
  )
}

export default Contactus
