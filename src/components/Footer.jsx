import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import './Footer.css';
import logo from '../assets/Logo.png';

export default function Footer() {
  const navigate = useNavigate();

  const handleNavigation = useCallback((path, e) => {
    e.preventDefault();
    e.stopPropagation();
    navigate(path, { replace: false });
  }, [navigate]);

  return (
    <footer className="footer">
      <div className="container">
        {/* Top Row: Logo, Navigation, Contact */}
        <div className="footer-top">
          {/* Logo */}
          <div className="footer-logo-section">
            <img src={logo} alt="UBC" className="footer-logo" />
          </div>

          {/* Nav (center column) */}
          <div className="footer-nav">
            <a href="/" onClick={(e) => handleNavigation('/', e)}>Home</a>
            <a href="/about" onClick={(e) => handleNavigation('/about', e)}>About</a>
            <a href="/brands" onClick={(e) => handleNavigation('/brands', e)}>Our Brands</a>
            <a href="/products" onClick={(e) => handleNavigation('/products', e)}>Products</a>
            <a href="/contact" onClick={(e) => handleNavigation('/contact', e)}>Get in touch</a>
          </div>

          {/* Email + Phone (right column) */}
          <div className="footer-contact">
            <div className="footer-contact-item">
              <span className="footer-label">
                <svg
                  className="footer-icon"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="2"
                    y="4"
                    width="20"
                    height="16"
                    rx="2"
                    ry="2"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M22 6L12 13L2 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Email
              </span>
              <a href="mailto:info@theubc.com" className="footer-value">
                info@theubc.com
              </a>
            </div>

            <div className="footer-contact-item">
              <span className="footer-label">
                <svg
                  className="footer-icon"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22 16.92V19.92C22.0011 20.1985 21.9441 20.4742 21.8325 20.7292C21.7209 20.9842 21.5573 21.2131 21.352 21.4008C21.1468 21.5885 20.9046 21.7309 20.6397 21.8187C20.3748 21.9065 20.0932 21.9378 19.815 21.91C16.7428 21.5856 13.787 20.5341 11.19 18.85C8.77382 17.3147 6.72533 15.2662 5.19 12.85C3.49997 10.2412 2.44824 7.27099 2.12 4.18C2.09222 3.90347 2.12277 3.62279 2.20966 3.35879C2.29655 3.09479 2.43769 2.85329 2.62398 2.64868C2.81027 2.44407 3.03769 2.28073 3.29181 2.16931C3.54593 2.05789 3.82106 2.00074 4.1 2H7.1C7.65085 1.99522 8.18106 2.16708 8.61091 2.48851C9.04076 2.80994 9.34494 3.26345 9.47 3.78L10.9 8.64C10.9781 8.99219 10.9781 9.35781 10.9 9.71C10.8219 10.0622 10.6676 10.3928 10.45 10.68L8.68 12.45C10.0612 14.8163 11.9837 16.7388 14.35 18.12L16.12 16.35C16.4072 16.1324 16.7378 15.9781 17.09 15.9C17.4422 15.8219 17.8078 15.8219 18.16 15.9L23.02 17.33C23.5366 17.4551 23.9901 17.7592 24.3115 18.1891C24.633 18.619 24.8048 19.1492 24.8 19.7V22.7H24.8Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Phone
              </span>
              <a href="tel:+919587835849" className="footer-value">
                +91 95878 35849
              </a>
            </div>
          </div>
        </div>

        {/* Middle Row: Slogan and Addresses */}
        <div className="footer-middle">
          {/* Column 1: Slogan under logo, shifted slightly left */}
          <div className="footer-left-section">
            <h3 className="footer-slogan">
              Crafting purity,<br />
              <span style={{whiteSpace: 'nowrap'}}>preserving taste.</span>
            </h3>

            <div className="footer-social">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                    fill="currentColor"
                  />
                </svg>
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.138 17.52h1.805L7.084 4.126H5.117z"
                    fill="currentColor"
                  />
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                    fill="currentColor"
                  />
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Corporate Office under nav */}
          <div className="footer-address-item">
            <h4 className="footer-address-heading">Corporate Office</h4>
            <p className="footer-address-text">
              H.No. 8-2-334/60 &amp; 61,<br />
              Road No. 5, Banjara Hills,<br />
              Hyderabad-500034,<br />
              Telangana.
            </p>
          </div>

          {/* Column 3: Main Office under contact */}
          <div className="footer-address-item">
            <h4 className="footer-address-heading footer-main-office-heading">
              Main Office
            </h4>
            <p className="footer-address-text footer-main-office">
              Sy. No 810 to 812 &amp; 820, 821,<br />
              Village &amp; Mandal :<br />
              Gummadidala-502313, District:<br />
              Sangareddy- Telangana.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <span className="footer-copyright">All Rights Reserved.</span>
          <div className="footer-legal">
            <a href="/privacy">Privacy policy</a>
            <a href="/cookies">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
