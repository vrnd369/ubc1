import React, { useRef, useEffect } from 'react';
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
      <small className="brand-carousel-tag"><span className="brand-carousel-slash">/</span> {brandName}</small>
      <h3>{title}</h3>
      <p>{description}</p>
      <Link to="/brands" className="brand-carousel-btn" style={{ backgroundColor: buttonColor }} data-button-color={buttonColor}>
        Learn more
      </Link>
    </div>
  </div>
);

export default function BrandsCarousel(){
  const rowRef = useRef(null);

  // Block manual horizontal scroll (allow vertical scroll)
  useEffect(() => {
    const row = rowRef.current;
    if (!row) return;

    const onWheel = (e) => {
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
        e.preventDefault();
      }
    };

    row.addEventListener("wheel", onWheel, { passive: false });

    return () => {
      row.removeEventListener("wheel", onWheel);
    };
  }, []);

  // How far to slide (exactly one card + the gap)
  const stepWidth = () => {
    const row = rowRef.current;
    if (!row) return 0;

    const card = row.querySelector(".brand-carousel-card");
    if (!card) return 0;

    const style = window.getComputedStyle(row);
    const gap = parseFloat(style.columnGap || style.gap || "0") || 0;

    return card.offsetWidth + gap;
  };

  const slide = (dir = 1) => {
    const row = rowRef.current;
    if (!row) return;

    row.scrollBy({
      left: dir * stepWidth(),
      behavior: "smooth",
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
        </div>
        <div className="brands-carousel-controls">
          <div className="brands-carousel-arrows">
            <button
              aria-label="Previous"
              className="btn icon-btn"
              onClick={() => slide(-1)}
              type="button"
            >
              ←
            </button>
            <button
              aria-label="Next"
              className="btn icon-btn"
              onClick={() => slide(1)}
              type="button"
            >
              →
            </button>
          </div>
        </div>
        <div className="brands-carousel-cards-wrapper no-user-scroll" ref={rowRef}>
          <div className="brands-carousel-cards">
            <BrandCard
              brandName="SOIL KING"
              title={<>Our Legacy<br/>in Every Brand</>}
              description={<>With Soil King, we celebrate tradition and taste<br/>— delivering carefully crafted products that<br/>families trust every day.</>}
              buttonColor="#008562"
              logoIcon={
                <img src={soilKingLogo} alt="SOIL KING" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
              }
            />
            <BrandCard
              brandName="SUN DROP"
              title={<>The Fresh Start<br/>You Deserve</>}
              description={<>With Sun Drop, every product carries the<br/>warmth of the sun and the richness of earth<br/>— created to uplift your meals and your day.</>}
              buttonColor="#FFC107"
              logoIcon={
                <img src={sunDropLogo} alt="SUN DROP" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
              }
            />
          </div>
        </div>
      </div>
    </section>
  )
}

