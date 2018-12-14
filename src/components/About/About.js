import React from 'react';
import { SectionHead } from '../common/SectionHead/SectionHead.js';
import { ImageBox } from '../common/ImageBox/ImageBox.js';
import NYC from '../../assets/images/nyc.png';

export const About = () => {
    return(
        <div>
            <div>
                <SectionHead sectionLabel="Nice to meet you" />
                <p>I'm a self-taught, detail-oriented Front End Developer and Certified AEM Developer based out of Brooklyn, New York. 
                I've been tinkering with websites for over a decade now, and have been working professionally within the field for years. 
                I build clean, coherent, accessible websites and apps to respond to the needs of a dynamic market for clients ranging from local 
                businesses to enterprise organizations.</p>
            </div>
            <div>
                <ImageBox imageUrl={NYC} />
            </div>
        </div>
    )
}