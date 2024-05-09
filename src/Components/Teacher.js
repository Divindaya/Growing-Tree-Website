import React from 'react';
import person from '../Media/person.jpeg';

export default function Teacher() {
  return (
    <>
    <section className='teacher' id="teacher">

        <h1 className='heading'>our <span>teachers</span></h1>

        <div className='box-container'>

            <div className='box'>
                <img src={person} alt="" />
                <h3> john wright</h3>
                <p>instructor</p>
                <div className='share'>
                    <i className='fab fa-facebook-f'></i>
                    <i className='fab fa-twitter'></i>
                    <i className='fab fa-instagram'></i>
                </div>
            </div>

            <div className='box'>
                <img src={person} alt="" />
                <h3> john smith</h3>
                <p>instructor</p>
                <div className='share'>
                    <i className='fab fa-facebook-f'></i>
                    <i className='fab fa-twitter'></i>
                    <i className='fab fa-instagram'></i>
                </div>
            </div>

            <div className='box'>
                <img src={person} alt="" />
                <h3> john washington</h3>
                <p>instructor</p>
                <div className='share'>
                    <i className='fab fa-facebook-f'></i>
                    <i className='fab fa-twitter'></i>
                    <i className='fab fa-instagram'></i>
                </div>
            </div>

        </div>
    </section>
    </>
  )
}
