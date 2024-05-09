import React, { useState } from 'react';
import contact from '../Media/Contactus.png';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle the submission logic here, e.g., send data to an API
        console.log(name, email, number, subject, message);
    };

    return (
        <section className='contact' id='contact'>
            <h1 className='heading'><span>contact</span> us</h1>

            <div className='contact-row'>
                <div className='icons-container'>
                    <div className='icons'>
                        <i className='fas fa-clock'></i>
                        <h3>opening hours :</h3>
                        <p>mon - fri: 06:00 am to 05:00 pm</p>
                    </div>

                    <div className='icons'>
                        <i className='fas fa-envelope'></i>
                        <h3>email</h3>
                        <p>kindergartengrowingtree@gmail.com</p>
                    </div>

                    <div className='icons'>
                        <i className='fa-brands fa-whatsapp'></i>
                        <h3>whatsapp</h3>
                        <p>+267-73-400-171</p>
                        <p>+267-74-337-680</p>
                    </div>
                </div>

                <div className='map-container'>
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1753.6513391155518!2d25.832999941867417!3d-24.867612594913204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ebca90015710a77%3A0x130cdf9a4c5aa23c!2sGrowing%20Tree%20Kindergarten!5e0!3m2!1sen!2sca!4v1715117615543!5m2!1sen!2sca" 
                        width="800" 
                        height="600" 
                        style={{ border:0 }}
                        allowfullscreen="" 
                        loading="lazy" 
                        referrerpolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>

            </div>

            <div className='row'>
                <div className='image'>
                    <img src={contact} alt="A descriptive image" />
                </div>

                <form onSubmit={handleSubmit}>
                    <h3>get in touch</h3>
                    <div className='inputBox'>
                        <input type="text" placeholder="your name" value={name} onChange={e => setName(e.target.value)} />
                        <input type="email" placeholder="your email" value={email} onChange={e => setEmail(e.target.value)} />
                    </div>
                    <div className='inputBox'>
                        <input type="number" placeholder='your number' value={number} onChange={e => setNumber(e.target.value)} />
                        <input type="text" placeholder='your subject' value={subject} onChange={e => setSubject(e.target.value)} />
                    </div>
                    <textarea placeholder='your message' cols={30} rows={10} value={message} onChange={e => setMessage(e.target.value)}></textarea>
                    <input type='submit' value="send message" className='btn'/>
                </form>
            </div>
        </section>
    );
};

export default Contact;
