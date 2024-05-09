import React, { useState } from 'react'
import Lightbox from 'yet-another-react-lightbox';
import { Captions, Counter, Thumbnails, Zoom } from 'yet-another-react-lightbox/plugins';
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/counter.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import photo1 from '../Media/gallery1.jpeg';
import photo2 from '../Media/playpen.jpeg';
import photo3 from '../Media/uniform.jpeg';
import photo4 from '../Media/desk1.jpeg';
import photo5 from '../Media/desk2.jpeg';
import photo6 from '../Media/boyswashroom.jpeg';
import photo7 from '../Media/girlswashroom.jpeg';
import photo8 from '../Media/hallway.jpeg';
import photo9 from '../Media/mural.jpeg';
import photo10 from '../Media/outside.jpeg';


const slides = [
    {
        src: photo1,
        title: 'The School',
        description: 'Take a peek at what we have in store',
    },
    {
        src: photo2,
        title: 'Play Areas',
        description: 'When we\'re not learning, we\'re having fun!',
    },
    {
        src: photo3,
        title: 'School Uniform',
        description: 'One of our bright young students wearing his smart school uniform',
    },
    {
        src: photo4,
        title: 'Classroom setup',
        description: 'Scene from inside our classroom',
    },
    {
        src: photo5,
        title: 'Classroom desk',
        description: 'Desks for our little ones',
    },
    {
        src: photo6,
        title: 'Boys\' Washroom',
        description: 'Clean child-sized toilets for the boys', 
    },
    {
        src: photo7,
        title: 'Girls\' Washroom',
        description: 'Clean child-sized washrooms for the girls',
    },
    {
        src: photo8,
        title: 'Down our hallways',
        description: 'Even our hallways are colourful and inviting',
    },
    {
        src: photo9,
        title: 'Mural',
        description: 'Our buildings are beautifully painted and designed',
    },
    {
        src: photo10,
        title: 'The Courtyard',
        description: 'Bright and Colourful!',
    }
]

export default function Gallery() {
    const [open, setOpen] = useState(false);

    return (
    <>
    <section className='gallery' id="gallery">
        <h1 className='heading'>our <span>gallery</span></h1>

        <div className='gallery-row' >
            <div className='gallery-container'>

                <div className='box'>
                    <img src={photo1} alt="" />
                </div>

                <div className='box'>
                    <img src={photo2} alt="" />
                </div>

            </div>

            <button className='btn' onClick={() => setOpen(true)}>Open Gallery</button>
            <Lightbox 
                open={open} 
                slides={slides} 
                plugins={[Captions, Counter, Zoom, Thumbnails]}
                counter={{ container: { style: { top: 5, bottom: "unset" } } }}
                captions={{
                    showToggle: true,
                }}
                close={() => setOpen(false)}
            />
        
        </div>
        
    </section>
    </>
    )
}
