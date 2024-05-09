import React from 'react';
import healthymeal from '../Media/healthymeal.png';
import playing from '../Media/siblings.png';
import pottytraining from '../Media/pottytraining.png';
import afterschoolcare from '../Media/afterschoolcare.png';

const Services = () => {
  return (
    <>
    <div className="image-section">
      </div>
    <section className='services' id='services'>

      <h1 className='heading'> our <span>services</span></h1>

      <div className='box-container'>

        <div className='box'>
          <img src={healthymeal} alt="healthy meal" />
          <h3>Healthy Meals and snacks</h3>
        </div>

        <div className='box'>
          <img src={playing} alt="children playing" />
          <h3>games and fun</h3>
        </div>

        <div className='box'>
          <img src={pottytraining} alt="child being potty trained" />
          <h3>potty training</h3>
        </div>

        <div className='box'>
          <img src={afterschoolcare} alt="after-school care" />
          <h3>after school care</h3>
        </div>

      </div>

    </section>
      
    </>
  );
};

export default Services;