import React from 'react';
import './Hero.css';
import heroVideo from '../assets/trac.mp4';

export default function Hero(){
  return (
    <section className="hero">
      <div className="hero-video-wrapper">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="hero-video"
          preload="auto"
        >
          <source src={heroVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="hero-overlay"></div>
      <div className="container hero-inner">
        <h1>Crafting purity,<br/>preserving taste.</h1>
        <p className="lead">Built on trust. Driven by quality. Committed to you. These are the values behind every product we create, from the first harvest to the final pack. We are dedicated to bringing you everyday essentials that are pure, reliable, and crafted with care, making better choices for your home, your health, and the planet we share.</p>
        <div className="hero-actions">
          <a className="btn" href="#products">Explore Products</a>
          <a className="btn ghost" href="#contact">Get in contact</a>
        </div>
      </div>
    </section>
  );
}
