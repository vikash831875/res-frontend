import React from 'react'
import { Link } from 'react-router-dom';
import {HiOutlineArrowNarrowRight} from "react-icons/hi";

const About = () => {
  return (
    <section className='about' id='about'>
        <div className="container">
            <div className="banner">
                <div className="top">
                    <h1 className="heading">ABOUT US</h1>
                    <p>The only thing we're serious about is food.</p>
                </div>
                <p className='mid'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet inventore quis consequatur eveniet modi repudiandae sed accusantium hic ratione nulla, iste optio sapiente voluptatem officiis quae eligendi quasi quisquam eos porro necessitatibus, autem tempora sequi esse voluptatum. Unde, fugiat officiis! Inventore corporis incidunt recusandae accusamus molestiae velit quae! Aut, neque!</p>

                <Link to={"/"}>Explore Menu <span><HiOutlineArrowNarrowRight></HiOutlineArrowNarrowRight></span></Link>
            </div>
            <div className="banner">
                <img src="/about.png" alt="about" />
            </div>
        </div>
      
    </section>
  )
}

export default About
