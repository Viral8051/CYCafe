import React from 'react'
import { useState } from 'react';

function BookaTable() {
  const [BookFormData, setBookFormData] = useState({
    name: '',
    email: '',
    phone:'',
    date:'',
    time:'',
    people:'',
    message: ''
  });

  const BookHandleChange = (e) => {
    const { name, value } = e.target;
    setBookFormData({
      ...BookFormData,
      [name]: value,
    });
  };

  const BookHandleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', BookFormData);
    // You can handle API calls here if needed in the future

    // Send data to the backend
    fetch('http://127.0.0.1:3001/book-send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(BookFormData),
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
    <section id="book-a-table" class="book-a-table section">


<div class="container section-title bgShad" >
  <h2>Book A Table</h2>
  <p><span>Book Your</span> <span class="description-title">Stay With Us<br/></span></p>
</div>

<div class="container">

  <div class="row g-0"  >

    <div class="col-lg-4 reservation-img bg-[url('Images/FoodImages/20240329_164923.jpg')]" ></div>

    <div class="col-lg-8 d-flex align-items-center reservation-form-bg bgShad"  data-aos-delay="200">
      <form onSubmit={BookHandleSubmit} class="php-email-form">
        <div class="row gy-4">
          <div class="col-lg-4 col-md-6">
            <input 
            type="text" 
            name="name" 
            class="form-control" 
            id="name" 
            placeholder="Your Name" 
            required
            value={BookFormData.name}
            onChange={BookHandleChange}
            />
          </div>
          <div class="col-lg-4 col-md-6">
            <input 
            type="email" 
            class="form-control" 
            name="email" 
            id="email" 
            placeholder="Your Email" 
            required
            value={BookFormData.email}
            onChange={BookHandleChange}
            />
          </div>
          <div class="col-lg-4 col-md-6">
            <input 
            type="text" 
            class="form-control" 
            name="phone" 
            id="phone" 
            placeholder="Your Phone" 
            required
            value={BookFormData.phone}
            onChange={BookHandleChange}
            />
          </div>
          <div class="col-lg-4 col-md-6">
            <input 
            type="date" 
            name="date" 
            class="form-control" 
            id="date" 
            placeholder="Date" 
            required
            value={BookFormData.date}
            onChange={BookHandleChange}
            />
          </div>
          <div class="col-lg-4 col-md-6">
            <input 
            type="time" 
            class="form-control" 
            name="time" 
            id="time" 
            placeholder="Time" 
            required
            value={BookFormData.time}
            onChange={BookHandleChange}
            />
          </div>
          <div class="col-lg-4 col-md-6">
            <input 
            type="number" 
            class="form-control" 
            name="people" 
            id="people" 
            placeholder="# of people" 
            required
            value={BookFormData.people}
            onChange={BookHandleChange}
            />
          </div>
        </div>

        <div class="form-group mt-3">
          <textarea 
          class="form-control" 
          name="message" 
          rows="5" 
          placeholder="Message"
          value={BookFormData.message}
          onChange={BookHandleChange}
          ></textarea>
        </div>

        <div class="text-center mt-3">
          <div class="loading">Loading</div>
          <div class="error-message"></div>
          <div class="sent-message">Your booking request was sent. We will call back or send an Email to confirm your reservation. Thank you!</div>
          <button type="submit">Book a Table</button>
        </div>
      </form>
    </div>

  </div>

</div>

</section>
    </>
  )
}

export default BookaTable
