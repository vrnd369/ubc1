import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/Logo.png';
import soilKingIcon from '../assets/soilkingicon.png';
import wellnessIcon from '../assets/wellnessicon.png';
import masalasSpicesIcon from '../assets/masalas and spices.png';
import riceIcon from '../assets/rice.png';
import appalamIcon from '../assets/appalam.png';
import pasteIcon from '../assets/paste.png';

export default function Navbar(){
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null); // 'brands' | 'products' | null
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const leaveTimeoutRef = useRef(null);

  // Check if current route matches brands or products
  const isBrandsActive = location.pathname.startsWith('/brands');
  const isProductsActive = location.pathname.startsWith('/products') || location.pathname.startsWith('/product');

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // close dropdown on outside click
  useEffect(() => {
    if (!openDropdown) return;
    const handleClickOutside = (e) => {
      if (!e.target.closest('.dropdown')) setOpenDropdown(null);
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [openDropdown]);

  const handleMouseEnter = (name) => {
    if (leaveTimeoutRef.current) clearTimeout(leaveTimeoutRef.current);
    leaveTimeoutRef.current = null;
    setOpenDropdown(name);
  };
  const handleMouseLeave = () => {
    leaveTimeoutRef.current = setTimeout(() => setOpenDropdown(null), 200);
  };
  const toggleDropdown = (name, e) => {
    e.stopPropagation();
    setOpenDropdown(openDropdown === name ? null : name);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(v => !v);
    if (!isMobileMenuOpen) setOpenDropdown(null);
  };
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
  };

  // lock body scroll when the sheet is open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    return () => { if (leaveTimeoutRef.current) clearTimeout(leaveTimeoutRef.current); };
  }, []);

  return (
    <header className={`navbar-wrap ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
          {/* left: logo */}
          <Link to="/" className="brand" onClick={closeMobileMenu} aria-label="UBC Home">
            <img src={logo} alt="UBC" />
          </Link>

          {/* center: nav links */}
          <nav
            className={`nav-links ${isMobileMenuOpen ? 'mobile-open' : ''}`}
            aria-label="Primary"
            id="primary-navigation"
          >
            <NavLink to="/" end onClick={closeMobileMenu}>Home</NavLink>
            <NavLink to="/about" onClick={closeMobileMenu}>About Us</NavLink>

            <div
              className={`dropdown ${isBrandsActive ? 'active' : ''}`}
              onMouseEnter={() => handleMouseEnter('brands')}
              onMouseLeave={handleMouseLeave}
            >
              <span onClick={(e) => toggleDropdown('brands', e)} className={`dropdown-trigger ${isBrandsActive ? 'active' : ''}`}>
                Our Brands ▾
              </span>
              <div
                className={`menu brands-menu ${openDropdown === 'brands' ? 'open' : ''}`}
                onMouseEnter={() => handleMouseEnter('brands')}
                onMouseLeave={handleMouseLeave}
              >
                <Link to="/brands/soil-king" className="brand-item" onClick={closeMobileMenu}>
                  <img src={soilKingIcon} alt="Soil King" className="brand-icon" />
                  <span>Soil King</span>
                </Link>
                <Link to="/brands/wellness" className="brand-item" onClick={closeMobileMenu}>
                  <img src={wellnessIcon} alt="Wellness" className="brand-icon" />
                  <span>Wellness</span>
                </Link>
              </div>
            </div>

            <div
              className={`dropdown ${isProductsActive ? 'active' : ''}`}
              onMouseEnter={() => handleMouseEnter('products')}
              onMouseLeave={handleMouseLeave}
            >
              <span onClick={(e) => toggleDropdown('products', e)} className={`dropdown-trigger ${isProductsActive ? 'active' : ''}`}>
                Products ▾
              </span>
              <div
                className={`menu brands-menu ${openDropdown === 'products' ? 'open' : ''}`}
                onMouseEnter={() => handleMouseEnter('products')}
                onMouseLeave={handleMouseLeave}
              >
                <NavLink to="/products?cat=spices" className="brand-item" onClick={closeMobileMenu}>
                  <img src={masalasSpicesIcon} alt="Masalas & Spices" className="brand-icon" />
                  <span>Masalas & Spices</span>
                </NavLink>
                <NavLink to="/products?cat=rice" className="brand-item" onClick={closeMobileMenu}>
                  <img src={riceIcon} alt="Rice" className="brand-icon" />
                  <span>Rice</span>
                </NavLink>
                <NavLink to="/products?cat=appalams" className="brand-item" onClick={closeMobileMenu}>
                  <img src={appalamIcon} alt="Appalams & Crisps" className="brand-icon" />
                  <span>Appalams & Crisps</span>
                </NavLink>
                <NavLink to="/products?cat=pastes" className="brand-item" onClick={closeMobileMenu}>
                  <img src={pasteIcon} alt="Pastes & Ready Mix" className="brand-icon" />
                  <span>Pastes & Ready Mix</span>
                </NavLink>
              </div>
            </div>

            <NavLink to="/contact" onClick={closeMobileMenu}>Contact Us</NavLink>
            <NavLink to="/careers" onClick={closeMobileMenu}>Careers</NavLink>
            
            {/* Mobile CTA - only visible in hamburger menu */}
            <Link to="/products" className="btn cta mobile-cta" onClick={closeMobileMenu}>Explore Products</Link>
          </nav>

          {/* right: single CTA - desktop only */}
          <Link to="/products" className="btn cta desktop-cta">Explore Products</Link>

          {/* hamburger */}
          <button
            className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
            aria-controls="primary-navigation"
          >
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
    </header>
  );
}
