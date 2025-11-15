import React, { useRef } from 'react';
import './Testimonials.css';
import avatar1 from '../assets/Testimonial 1.png';
import avatar2 from '../assets/Testimonial 2.png';
import avatar3 from '../assets/Testimonial 3.png';
import avatar4 from '../assets/Testimonial 4.png';

const Card = ({text, name, company, role, image, isFirst, isSecond}) => (
  <div className={`t-card card ${isFirst ? 't-card-first' : ''} ${isSecond ? 't-card-second' : ''}`}>
    <p className="t-quote" dangerouslySetInnerHTML={{__html: text}}></p>
    <div className="t-author">
      <div className="avatar">
        <img src={image} alt={name} />
      </div>
      <div className="t-author-info">
        <strong className="t-name">{name}</strong>
        <div className="t-role-container">
          <span className="t-company">{company}</span>
          {role && <span className="t-role-tag">{role}</span>}
        </div>
      </div>
    </div>
  </div>
)

export default function Testimonials(){
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      const cardWidth = 311; // Width of second card + gap
      const firstCardWidth = 526; // Width of first card + gap
      const scrollAmount = scrollContainerRef.current.scrollLeft === 0 ? firstCardWidth + 24 : cardWidth + 24;
      scrollContainerRef.current.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      const cardWidth = 311; // Width of second card + gap
      const firstCardWidth = 526; // Width of first card + gap
      const currentScroll = scrollContainerRef.current.scrollLeft;
      const scrollAmount = currentScroll < firstCardWidth ? firstCardWidth + 24 - currentScroll : cardWidth + 24;
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="section testimonials">
      <div className="container">
        <div className="testimonials-header">
          <div className="testimonials-title-area">
            <span className="testimonials-tag"><span className="testimonials-star">★</span> TESTIMONIALS</span>
            <h2 className="testimonials-heading">Because Quality Speaks <span className="testimonials-playfair-text">for</span> Itself</h2>
          </div>
          <div className="testimonials-nav">
            <button className="nav-arrow-testimonial" onClick={scrollLeft} aria-label="Previous testimonials">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button className="nav-arrow-testimonial" onClick={scrollRight} aria-label="Next testimonials">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="t-grid-wrapper" ref={scrollContainerRef}>
        <div className="t-grid">
          <Card 
            text="The Basmati rice from Soil King has<br/>become a staple in my home. The aroma<br/>and texture are unmatched." 
            name="Anita Reddy" 
            company="Moove"
            role="Chef"
            image={avatar1}
            isFirst={true}
          />
          <Card 
            text="As a chef, I value consistency.<br/>The spices from UBC bring<br/>authentic flavors to every dish<br/>I prepare." 
            name="Anita Reddy" 
            company="Moove"
            role="Chef"
            image={avatar2}
            isSecond={true}
          />
          <Card 
            text="I appreciate how convenient<br/>the ready-to-use pastes are.<br/>They save me time without compromising on taste." 
            name="Anita Reddy" 
            company="Moove"
            role="Chef"
            image={avatar3}
            isSecond={true}
          />
          <Card 
            text="Soil King products perfect<br/>balance between tradition and<br/>modern convenience. Truly impressive!" 
            name="Anita Reddy" 
            company="Moove"
            role="Chef"
            image={avatar4}
            isSecond={true}
          />
        </div>
      </div>
    </section>
  )
}
