import React, { useEffect } from 'react';
import './Contact.css';
import TellUs from '../components/TellUs';

export default function Contact(){
  useEffect(() => {
    document.title = 'Contact Us - UBC | United Brothers Company';
  }, []);

  return (
    <main className="contact-page">
      <div className="contact-banner">
        <div className="container">
          <span className="tag">
            <span className="contact-tag-star">★</span>
            <span className="contact-tag-text">CONTACT US</span>
          </span>
        </div>
      </div>
      
      <div className="container contact-main">
        <h1 className="contact-heading">Get in touch with us</h1>
        
        <div className="contact-content">
          <div className="contact-info-panel">
            <div className="contact-item">
              <h3>Corporate Office</h3>
              <p>H.No. 8-2-334/60 & 61, Road No. 5,<br/>Banjara Hills, Hyderabad-500034, Telangana.</p>
            </div>
            
            <div className="contact-item">
              <h3>Mfg. Office & Facility</h3>
              <p>Sy. No. 810-812, 820 & 821,<br/>Gummadidala (Village & Mandal) –<br/>502313, Sangareddy District,<br/>Telangana.</p>
            </div>
            
            <div className="contact-item">
              <h3>Email</h3>
              <p>marketing@soilkingfoods.com</p>
            </div>
            
            <div className="contact-item">
              <h3>Call us</h3>
              <p>+91 8143150953 | 04023399533</p>
            </div>
          </div>
          
          <div className="contact-map-container">
            <div className="map-wrapper">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.5!2d78.4250!3d17.4230!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91d8b8b8b8b9%3A0x3b8b8b8b8b8b8b8b!2sRoad+No.+5%2C+Banjara+Hills%2C+Hyderabad%2C+Telangana+500034!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(100%)' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="UBC Location Map"
              ></iframe>
            </div>
            <button 
              className="get-directions-btn" 
              onClick={() => window.open('https://www.google.com/maps/dir/?api=1&destination=H.No.+8-2-334%2F60+%26+61,+Road+No.+5,+Banjara+Hills,+Hyderabad-500034,+Telangana', '_blank')}
            >
              Get Directions
            </button>
          </div>
        </div>
      </div>
      
      <TellUs />
    </main>
  )
}
