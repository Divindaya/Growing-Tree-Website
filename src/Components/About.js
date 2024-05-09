import React from 'react';
import playpen from '../Media/playpen.jpeg';

const About = () => {
  return (
    <>
    <section className='about' id='about'>
      <div class="custom-shape-divider-bottom-1714611753">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
        </svg>
      </div>
      <h1 className='heading'> <span>about</span> us</h1>

      <div className='row'>
        <div className='image'>
          <img src={playpen} alt="" />
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