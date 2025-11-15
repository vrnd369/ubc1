import React, { useRef, useEffect } from "react";
import "./Brands.css";

/* Hero background */
import br1 from "../assets/br1.png";
import br2 from "../assets/br2.png";

/* ---------- Product images (replace with your actual files) ---------- */
import prodMasalas from "../assets/masalas.png";
import prodRice from "../assets/rice.png";
import prodAppalams from "../assets/appalam.png";
import prodAtta from "../assets/spices.png"; // 4th tile

export default function Brand() {
  /* --------- Products data --------- */
  const PRODUCTS = [
    {
      id: "masalas",
      image: prodMasalas,
      title: "Masalas",
      blurb: "Authentic blends for every dish",
      cta: "Know More",
      href: "/products?brand=soil-king",
    },
    {
      id: "rice",
      image: prodRice,
      title: "Rice",
      blurb: "Fragrant grains, rich in tradition",
      cta: "Know More",
      href: "/products?brand=soil-king",
    },
    {
      id: "appalams",
      image: prodAppalams,
      title: "Appalams & Crisps",
      blurb: "Crispy delights for every meal",
      cta: "Know More",
      href: "/products?brand=soil-king",
    },
    {
      id: "atta",
      image: prodAtta,
      title: "Flours & Atta",
      blurb: "Daily staples for wholesome meals",
      cta: "Know More",
      href: "/products?brand=soil-king",
    },
  ];

  /* --------- one-line row that moves only with arrows --------- */
  const rowRef = useRef(null);

  // Block manual wheel/touch/keyboard scrolling (arrow buttons only)
  useEffect(() => {
    const row = rowRef.current;
    if (!row) return;
    const prevent = (e) => {
      // Only prevent horizontal scrolling, allow vertical scrolling
      if (e.type === 'wheel') {
        // Check if it's primarily a horizontal scroll (deltaX is larger than deltaY)
        if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
          e.preventDefault();
        }
        // Allow vertical scrolling (deltaY) to pass through to the page
      } else {
        // For touchmove and keydown, prevent default
        e.preventDefault();
      }
    };
    row.addEventListener("wheel", prevent, { passive: false });
    row.addEventListener("touchmove", prevent, { passive: false });
    row.addEventListener("keydown", prevent, { passive: false });
    return () => {
      row.removeEventListener("wheel", prevent);
      row.removeEventListener("touchmove", prevent);
      row.removeEventListener("keydown", prevent);
    };
  }, []);

  // How far to slide (exactly one card + the gap)
  const stepWidth = () => {
    const row = rowRef.current;
    if (!row) return 0;
    const card = row.querySelector(".brand-prod-card");
    const style = window.getComputedStyle(row);
    const gap = parseFloat(style.columnGap || style.gap || "0") || 0;
    const w = (card?.offsetWidth || 0) + gap;
    return w || Math.round(row.clientWidth * 0.9);
  };

  const slide = (dir = 1) => {
    const row = rowRef.current;
    if (!row) return;
    row.scrollBy({ left: dir * stepWidth(), behavior: "smooth" });
  };

  return (
    <main className="brand-page">
      {/* ===== 1) HERO ===== */}
      <section
        className="brand-hero"
        aria-label="Rooted in Goodness, Growing with Trust"
      >
        {/* Background image br1 */}
        <div 
          className="brand-hero__bg-image"
          style={{
            backgroundImage: `url("${br1}")`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
          }}
        />
        
        {/* Foreground image br2 */}
        <div 
          className="brand-hero__fg-image"
          style={{
            backgroundImage: `url("${br2}")`,
            backgroundSize: "80% auto",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
          }}
        />
        
        <div className="brand-hero__overlay" />
        <div className="container brand-hero__inner">
          <h1 className="brand-hero__title">
            Rooted <span className="brand-hero__italic">in</span> Goodness,<br />
            Growing <span className="brand-hero__italic">with</span> Trust
          </h1>
          <p className="brand-hero__lead">
            From fertile soils to your family’s table, every UBC product carries the<br/>richness of nature, crafted with purity, care, and tradition.
          </p>
          <a href="/products?brand=soil-king" className="btn btn-primary">
            Explore Products
          </a>
        </div>
      </section>

      {/* ===== 2) ABOUT SOIL KING ===== */}
      <section className="brand-section brand-about">
        <div className="container">
          <div className="eyebrow">★ About Soil King</div>
          <div className="brand-grid">
            <h2 className="brand-title">Rooted in Goodness.</h2>
            <div className="brand-copy">
              <p>Soil King is more than a brand — it’s a bond with the land.</p>
              <p>
                Born from UBC’s vision of delivering everyday essentials with
                honesty and quality, Soil King carries forward the values of
                purity, nourishment, and care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 3) WHAT WE STAND FOR ===== */}
      <section className="brand-section brand-standfor">
        <div className="container">
          <div className="eyebrow">★ What We Stand For</div>
          <div className="brand-grid">
            <h2 className="brand-title">
              From Soil to Shelf, <br className="hide-sm" />
              With Sincerity.
            </h2>
            <div className="brand-copy">
              <p>
                Every Soil King product begins with a promise: clean sourcing,
                careful processing, and sincere effort.
              </p>
              <p className="muted">
                From premium grains and authentic spices to ready-to-use kitchen
                essentials, every pack<br/>reflects our commitment to your family’s
                health<br/>and taste.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 4) WHY SOIL KING ===== */}
      <section className="brand-section brand-why">
        <div className="container">
          <div className="eyebrow">★ Why Soil King</div>
          <div className="brand-grid">
            <h2 className="brand-title">
              Because What’s Real, <br className="hide-sm" />
              Stays Real.
            </h2>
            <div className="brand-copy">
              <p>
                We never cut corners. No unnecessary additives, no shortcuts —
                only grains, spices, and essentials that remain true to their
                natural taste and<br/>benefits. Carefully packed, trusted by
                families.
              </p>
              <a href="/products?brand=soil-king" className="btn btn-primary">
                Explore Our Products
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 5) EXPLORE SOIL KINGS PRODUCTS ===== */}
      <section id="soilking-products" className="brand-section brand-products">
        <div className="container">
          <div className="prod-head">
            <div>
              <h2 className="prod-title">
                Explore Soil Kings
                <br /> Products
              </h2>
            </div>

            <div className="prod-arrows">
              <button
                aria-label="Previous"
                className="btn icon-btn"
                onClick={() => slide(-1)}
              >
                ←
              </button>
              <button
                aria-label="Next"
                className="btn icon-btn"
                onClick={() => slide(1)}
              >
                →
              </button>
            </div>
          </div>

          {/* one-line row; three cards per view on desktop */}
          <div className="brand-prod-row no-user-scroll" ref={rowRef}>
            {PRODUCTS.map((p) => (
              <article className="brand-prod-card" key={p.id}>
                <div className="brand-prod-media">
                  <img src={p.image} alt={p.title} />
                </div>

                <div className="brand-prod-body">
                  <h3 className="brand-prod-name">{p.title}</h3>
                  <p className="brand-prod-blurb">{p.blurb}</p>
                  <a href={p.href} className="chip-link">
                    {p.cta}
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
