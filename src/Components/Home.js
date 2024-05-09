import React from 'react';

const Home = () => {
  return (
    <>
    <section className='home' id="home">

      <div className='content'>
        <h3>Welcome to our <span>Kindergarten</span></h3>
        <p>a nurturing and vibrant haven for young learners!</p>
        <p>Dedicated to providing a warm, welcoming environment where children can explore, grow, and thrive!</p>
        {/*<a href='#about' className='btn'>Learn more</a>*/}
      </div>

      {/*
      <div className='image'>
        <img src={playpen} alt='image of play area' />
      </div>
      */}

    </section>
    </>
  );
};

export default Home;