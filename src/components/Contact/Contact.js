import React from 'react';
import { SectionHead } from '../common/SectionHead/SectionHead.js';
import { SocialMedia } from '../SocialMedia/SocialMedia.js';

export const Contact = () => {
    return(
        <div className="contact section container" id="contact">
            <SectionHead sectionLabel="Contact Me" />
            <div className="form-map">
            <div className="contact-form">
              <form action="https://formspree.io/anselcolvin@gmail.com" method="POST">
                <div className="form-item">
                  <label htmlFor="name">Name</label>
                  <input type="text" name="user_name" />
                </div>
                <div className="form-item">
                  <label htmlFor="name">Phone Number</label>
                  <input type="tel" name="phone" />
                </div>
                <div className="form-item">
                  <label htmlFor="mail">E-mail Address <span className="fail">(required)</span></label>
                  <input type="email" name="user_email" required />
                </div>
                <div className="form-item">
                  <label htmlFor="msg">Message <span className="fail">(required)</span></label>
                  <textarea name="user_message" required></textarea>
                </div>
                <div className="form-buttons">
                  <button type="submit">Submit</button>
                </div>
              </form>
            </div>
        </div>
        <SocialMedia />
        </div>
    )
}