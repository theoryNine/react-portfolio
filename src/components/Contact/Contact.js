import React from 'react';
import { SectionHead } from '../common/SectionHead/SectionHead.js';
import { SocialMedia } from '../SocialMedia/SocialMedia.js';

export const Contact = () => {
    return(
        <div className="contact container">
            <SectionHead sectionLabel="Contact Me" />
            <SocialMedia />
        </div>
    )
}