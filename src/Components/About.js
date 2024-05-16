import React from 'react';
import school from '../Media/schoolangled.jpg';

const About = () => {
  return (
    <>
    <section className='about' id='about'>
      
      <h1 className='heading'> <span>about</span> us</h1>

      <div className='row'>
        <div className='image'>
          <img src={school} alt="front of main school building" />
        </div>

        <div className='content'>
          <h3>Exploring, Growing, Thriving Together</h3>
          <p>Located in the heart of Ramotswa, we are dedicated to nurturing young minds and fostering a lifelong love of learning in a warm and welcoming environment. Our goal is to provide a rich and varied educational experience that prepares children aged 10 months to 5 years for success in school and beyond.</p>
          {/*<a href='#' className='btn'>read more</a>*/}
        </div>

      </div>

    </section>
    </>
  );
};

export default About;