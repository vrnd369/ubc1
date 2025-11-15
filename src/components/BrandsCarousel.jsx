import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import './BrandsCarousel.css';
import soilKingLogo from '../assets/Soil King.png';
import sunDropLogo from '../assets/Sun Drop.png';

const BrandCard = ({ brandName, title, description, buttonColor, logoIcon }) => (
  <div className="brand-carousel-card">
    <div className="brand-carousel-logo-area">
      <div className="brand-carousel-logo">
        {logoIcon}
      </div>
    </div>
    <div className="brand-carousel-content">
      <small className="brand-carousel-tag">/ {brandName}</small>
      <h3>{title}</h3>
      <p>{description}</p>
      <Link to="/brands" className="brand-carousel-btn" style={{ backgroundColor: buttonColor }} data-button-color={buttonColor}>
        Learn more
      </Link>
    </div>
  </div>
);

export default function BrandsCarousel(){
  const cardsWrapperRef = useRef(null);

  const scrollCards = (direction) => {
    const wrapper = cardsWrapperRef.current;
    if (!wrapper) return;

    // Get the first card element to calculate its width
    const firstCard = wrapper.querySelector('.brand-carousel-card');
    if (!firstCard) return;

    // Get computed styles for gap
    const cardsContainer = wrapper.querySelector('.brands-carousel-cards');
    const gap = parseInt(window.getComputedStyle(cardsContainer).gap) || 32;
    
    // Calculate scroll amount: one card width + gap
    const cardWidth = firstCard.offsetWidth;
    const scrollAmount = cardWidth + gap;
    
    wrapper.scrollBy({
      left: direction * scrollAmount,
      behavior: 'smooth'
    });
  };

  return (
    <section className="brands-carousel-section">
      <div className="container">
        <div className="brands-carousel-header">
          <div className="brands-carousel-text">
            <span className="brands-carousel-tag">★ OUR BRANDS</span>
            <h2>Brands that Carry<br/><span className="our-word">our</span> Promise</h2>
            <p className="brands-carousel-description">
              Rooted in authenticity, our brands deliver<br/>taste, tradition, and trust to millions
            </p>
          </div>
          <div className="brands-carousel-nav">
            <button 
              className="nav-arrow" 
              aria-label="Previous"
              onClick={() => scrollCards(-1)}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6"/>
              </svg>
            </button>
            <button 
              className="nav-arrow" 
              aria-label="Next"
              onClick={() => scrollCards(1)}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="brands-carousel-cards-wrapper" ref={cardsWrapperRef}>
        <div className="brands-carousel-cards">
          <BrandCard
            brandName="SOIL KING"
            title={<>Our Legacy<br/>in Every Brand</>}
            description={<>With Soil King, we celebrate tradition and taste<br/>—delivering carefully crafted products that<br/>families trust every day.</>}
            buttonColor="#4CAF50"
            logoIcon={
              <img src={soilKingLogo} alt="SOIL KING" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
            }
          />
          <BrandCard
            brandName="SUN DROP"
            title={<>The Fresh Start<br/>You Deserve</>}
            description={<>With Sun Drop, every product carries the<br/>warmth of the sun and the richness of earth<br/>—created to uplift your meals and your day.</>}
            buttonColor="#FFC107"
            logoIcon={
              <img src={sunDropLogo} alt="SUN DROP" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
            }
          />
        </div>
      </div>
    </section>
  )
}

