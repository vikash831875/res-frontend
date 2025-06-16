import React, { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { HiOutlineArrowNarrowRight } from "react-icons/hi"; // ✅ Correct import
import axios from "axios";
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Reservation = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [time, setTime] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");

  const navigate = useNavigate();

  const handleReservation = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://res-backend-qhjt.onrender.com", {
  firstName,
  lastName,
  email,
  phone,
  date,
  time,
}, {
  headers: {
    "Content-Type": "application/json"
  },
  withCredentials: true
});


      toast.success(response.data.message);
      // Reset form
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhone("");
      setTime("");
      setDate("");
      navigate("/success");

    } catch (error) {
      toast.error(error.response?.data?.message || "Reservation failed");
    }
  }

  return (
    <section className='reservation' id='reservation'>
      <div className="container">
        <div className="banner">
          <img src="/reservation.png" alt="res" />
        </div>
        <div className="banner">
          <div className="reservation_form_box">
            <h1>MAKE A RESERVATION</h1>
            <p>For further questions, please call</p>
            <form onSubmit={handleReservation}>
              <div>
                <input
                  type="text"
                  placeholder='First Name'
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <input
                  type="text"
                  placeholder='Last Name'
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
                <input
                  type="time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder='Email'
                  className='email_tag'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="number"
                  placeholder='Phone'
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
                <button type='submit'>
                  RESERVE NOW <span><HiOutlineArrowNarrowRight /></span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Reservation;
