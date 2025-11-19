import React, { useEffect, useState, useRef } from 'react';
import './Overview.css';
import logo from '../assets/Logo.png';
import bgImage from '../assets/ov.png';

export default function Overview() {
  const [scrollY, setScrollY] = useState(0);
  const overviewRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const overviewElement = overviewRef.current;
      if (overviewElement) {
        const rect = overviewElement.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Only apply parallax when Overview section is in viewport
        if (rect.top <= windowHeight && rect.bottom >= 0) {
          const scrollOffset = Math.max(0, windowHeight - rect.top);
          const maxScroll = windowHeight * 1.5;
          setScrollY(Math.min(scrollOffset, maxScroll));
        } else {
          setScrollY(0);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      className="overview section"
      ref={overviewRef}
    >
      <div
        className="overview-bg"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundPosition: `center ${-scrollY * 0.5}px`
        }}
      ></div>
      <div className="container">
        <div className="overview-content">
          {/* Tag with small star */}
          <span className="overview-tag">
          <span className="tell-us-star">★</span>
            OVERVIEW
          </span>

          <h2 className="overview-heading">
            Where Tradition<br />Meets Modern Taste
          </h2>

          <div className="overview-logo">
            <img src={logo} alt="UBC" />
          </div>

          <p className="overview-text">
            At UBC, we believe food should be both<br />
            authentic and effortless. Our products are<br />
            sourced with care, processed with precision,<br />
            and packed to preserve freshness.
          </p>

          <p className="overview-text">
            From aromatic Basmati rice to vibrant spices<br />
            and ready mixes, Soil King is your trusted<br />
            partner in creating meals that feel homemade,<br />
            every single time.
          </p>

          {/* Button with star exactly like screenshot */}
          <a className="overview-btn" href="/contact">
            Get in touch
            <span className="tell-us-star">★</span>
          </a>
        </div>
      </div>
    </section>
  );
}

