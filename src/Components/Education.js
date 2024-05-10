import React from 'react';
import reading from '../Media/reading.png';
import numbers from '../Media/numbers.png';
import homeworkhelp from '../Media/homeworkhelp.png';

const Education = () => {
  return (
    <>
    <section className='education' id="education">
      <h1 className='heading'>our <span> education programs</span></h1>

      <div className='box-container'>

        <div className='box'>
          <h3>reading lessons</h3>
          <p>We teach our kids to read simple books so they are ready for Primary School</p>
          <img src={reading} alt="illustration of books" />
        </div>

        <div className='box'>
          <h3>numbers lessons</h3>
          <p>Learning about numbers and counting prepares our kids for simple arithmetic</p>
          <img src={numbers} alt="numbers illustration" />
        </div>

        <div className='box'>
          <h3>help with homework</h3>
          <p>We offer help with homework for kids enrolled in our after-school care program</p>
          <img src={homeworkhelp} alt="illustration about helping with homework" />
        </div>

      </div>
    </section>
    </>
  );
};

export default Education;