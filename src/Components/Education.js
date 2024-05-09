import React from 'react';
import reading from '../Media/reading.png';
import numbers from '../Media/numbers.png';
import homeworkhelp from '../Media/homeworkhelp.png';

const Education = () => {
  return (
    <>
    <section className='education' id="education">
      <h1 className='heading'>our <span> education</span></h1>

      <div className='box-container'>

        <div className='box'>
          <h3>reading lessons</h3>
          <p>some details about reading lessons</p>
          <img src={reading} alt="illustration of books" />
        </div>

        <div className='box'>
          <h3>numbers</h3>
          <p>some details about learning numbers</p>
          <img src={numbers} alt="numbers illustration" />
        </div>

        <div className='box'>
          <h3>help with homework</h3>
          <p>some details about homework aid</p>
          <img src={homeworkhelp} alt="illustration about helping with homework" />
        </div>

      </div>
    </section>
    </>
  );
};

export default Education;