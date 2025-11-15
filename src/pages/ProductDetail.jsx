import React, { useEffect, useState, useRef } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import './ProductDetail.css';
import SectionTag from '../components/SectionTag';
import imgMasalas from '../assets/masalas.png';
import imgRice from '../assets/rice.png';
import imgAppalams from '../assets/appalam.png';
import imgPastes from '../assets/paste.png';
import imgSpices from '../assets/spices.png';
import imgMasalasAndSpices from '../assets/masalas and spices.png';
import probgImage from '../assets/probg1.png';
import iconLayer1 from '../assets/Layer 2.png';
import iconLayer2 from '../assets/Layer 3.png';
import iconLayer3 from '../assets/Layer 1.png';
import iconLayer4 from '../assets/Layer 4.png';

/* =========================
   SAMPLE DATA (API in real app)
   ========================= */
const PRODUCTS = {
  'chicken-masala': {
    id: 'chicken-masala',
    title: 'Chicken Masala',
    titleSub: 'by Soil king',
    category: 'Masala',
    description:
      'A perfectly balanced blend of aromatic spices that brings out rich, authentic flavor in every chicken dish.',
    description2:
      'Soil King Chicken Masala adds depth, warmth, and taste your family will love.',
    image: imgMasalas,
    sizes: ['100G', '500G'],
    nutrition: [
      { nutrient: 'Calories', value: '24Kcal', dailyValue: '-' },
      { nutrient: 'Protein', value: '1g', dailyValue: '-' },
      { nutrient: 'Total Carbohydrates', value: '4g', dailyValue: '1%' },
      { nutrient: 'Sugar', value: '1g', dailyValue: '-' },
      { nutrient: 'Total Fat', value: '1g', dailyValue: '2%' },
      { nutrient: 'Saturated Fat', value: '0g', dailyValue: '1%' },
      { nutrient: 'Dietary Fiber', value: '3g', dailyValue: '10%' }
    ],
    benefits: [
      {
        title: 'Authentic Flavor Blend',
        description:
          'Crafted with a selection of premium, hand-picked spices, perfectly roasted and ground to deliver the rich, traditional taste and aroma essential for an unforgettable chicken dish every time.'
      }
    ]
  },

  /* Masalas page you showed in the screenshot — now includes nutrition so the table renders */
  masalas: {
    id: 'masalas',
    title: 'Masalas',
    category: 'Masala',
    description: 'Authentic blends for every dish',
    description2:
      'Experience the rich flavors of traditional Indian cooking with our premium masala blends.',
    image: imgMasalas,
    sizes: ['100G', '250G', '500G'],
    nutrition: [
      { nutrient: 'Calories', value: '24Kcal', dailyValue: '-' },
      { nutrient: 'Protein', value: '1g', dailyValue: '-' },
      { nutrient: 'Total Carbohydrates', value: '4g', dailyValue: '1%' },
      { nutrient: 'Sugar', value: '1g', dailyValue: '-' },
      { nutrient: 'Total Fat', value: '1g', dailyValue: '2%' },
      { nutrient: 'Saturated Fat', value: '0g', dailyValue: '1%' },
      { nutrient: 'Dietary Fiber', value: '3g', dailyValue: '10%' }
    ],
    benefits: [
      {
        title: 'Authentic Flavor Blend',
        description:
          'Crafted with a selection of premium, hand-picked spices, perfectly roasted and ground to deliver the rich, traditional taste and aroma essential for an unforgettable dish every time.'
      }
    ]
  },

  rice: {
    id: 'rice',
    title: 'Rice',
    category: 'Rice',
    description: 'Fragrant grains, rich in tradition',
    description2: 'Premium quality rice that brings the authentic taste to your table.',
    image: imgRice,
    sizes: ['1KG', '5KG', '10KG'],
    nutrition: [
      { nutrient: 'Calories', value: '130Kcal', dailyValue: '7%' },
      { nutrient: 'Protein', value: '2.7g', dailyValue: '5%' },
      { nutrient: 'Total Carbohydrates', value: '28g', dailyValue: '9%' },
      { nutrient: 'Sugar', value: '0g', dailyValue: '-' },
      { nutrient: 'Total Fat', value: '0.3g', dailyValue: '0%' },
      { nutrient: 'Saturated Fat', value: '0.1g', dailyValue: '0%' },
      { nutrient: 'Dietary Fiber', value: '0.4g', dailyValue: '1%' }
    ],
    benefits: [
      {
        title: 'Premium Quality',
        description:
          'Hand-selected grains that ensure perfect texture and flavor in every meal.'
      }
    ]
  },

  appalams: {
    id: 'appalams',
    title: 'Appalams & Crisps',
    category: 'Appalam',
    description: 'Crispy delights for every meal',
    description2:
      'Perfectly crispy and flavorful accompaniments to enhance your dining experience.',
    image: imgAppalams,
    sizes: ['100G', '200G', '500G'],
    nutrition: [
      { nutrient: 'Calories', value: '371Kcal', dailyValue: '19%' },
      { nutrient: 'Protein', value: '25.8g', dailyValue: '52%' },
      { nutrient: 'Total Carbohydrates', value: '59.9g', dailyValue: '20%' },
      { nutrient: 'Sugar', value: '0g', dailyValue: '-' },
      { nutrient: 'Total Fat', value: '0.4g', dailyValue: '1%' },
      { nutrient: 'Saturated Fat', value: '0.1g', dailyValue: '0%' },
      { nutrient: 'Dietary Fiber', value: '18.4g', dailyValue: '66%' }
    ],
    benefits: [
      {
        title: 'Crispy & Fresh',
        description:
          'Made with traditional methods to ensure the perfect crunch and authentic taste.'
      }
    ]
  },

  pastes: {
    id: 'pastes',
    title: 'Pastes & Ready Mix',
    category: 'Paste',
    description: 'Pure flavors, ready to use',
    description2:
      'Convenient and flavorful pastes that make cooking easier and more delicious.',
    image: imgPastes,
    sizes: ['100G', '200G', '500G'],
    nutrition: [
      { nutrient: 'Calories', value: '88Kcal', dailyValue: '4%' },
      { nutrient: 'Protein', value: '1.8g', dailyValue: '4%' },
      { nutrient: 'Total Carbohydrates', value: '21.5g', dailyValue: '7%' },
      { nutrient: 'Sugar', value: '0.5g', dailyValue: '-' },
      { nutrient: 'Total Fat', value: '0.2g', dailyValue: '0%' },
      { nutrient: 'Saturated Fat', value: '0g', dailyValue: '0%' },
      { nutrient: 'Dietary Fiber', value: '5.1g', dailyValue: '18%' }
    ],
    benefits: [
      {
        title: 'Ready to Use',
        description:
          'Prepared with care using fresh ingredients, ready to enhance your dishes instantly.'
      }
    ]
  },

  spices: {
    id: 'spices',
    title: 'Spices',
    category: 'Spice',
    description: 'Authentic blends for every dish',
    description2:
      'Pure, aromatic spices that bring authentic flavors to your kitchen.',
    image: imgSpices,
    sizes: ['50G', '100G', '250G'],
    nutrition: [
      { nutrient: 'Calories', value: '251Kcal', dailyValue: '13%' },
      { nutrient: 'Protein', value: '10.4g', dailyValue: '21%' },
      { nutrient: 'Total Carbohydrates', value: '63.9g', dailyValue: '21%' },
      { nutrient: 'Sugar', value: '2.4g', dailyValue: '-' },
      { nutrient: 'Total Fat', value: '3.3g', dailyValue: '5%' },
      { nutrient: 'Saturated Fat', value: '0.6g', dailyValue: '3%' },
      { nutrient: 'Dietary Fiber', value: '25.3g', dailyValue: '90%' }
    ],
    benefits: [
      {
        title: 'Pure & Aromatic',
        description:
          'Sourced from the finest origins and carefully processed to preserve their natural aroma and flavor.'
      }
    ]
  },

  'masalas-spices': {
    id: 'masalas-spices',
    title: 'Masalas & Spices',
    category: 'Masala',
    description: 'Authentic blends for every dish',
    description2:
      'A complete collection of premium masalas and spices for authentic Indian cooking.',
    image: imgMasalasAndSpices,
    sizes: ['100G', '250G', '500G'],
    nutrition: [
      { nutrient: 'Calories', value: '24Kcal', dailyValue: '-' },
      { nutrient: 'Protein', value: '1g', dailyValue: '-' },
      { nutrient: 'Total Carbohydrates', value: '4g', dailyValue: '1%' },
      { nutrient: 'Sugar', value: '1g', dailyValue: '-' },
      { nutrient: 'Total Fat', value: '1g', dailyValue: '2%' },
      { nutrient: 'Saturated Fat', value: '0g', dailyValue: '1%' },
      { nutrient: 'Dietary Fiber', value: '3g', dailyValue: '10%' }
    ],
    benefits: [
      {
        title: 'Complete Collection',
        description:
          'A curated selection of the finest masalas and spices, carefully blended to bring authentic flavors to your kitchen.'
      }
    ]
  }
};

/* Cards row for "Explore Soil Kings Products" */
const SCROLLABLE_PRODUCTS = [
  { id: 'masalas', image: imgMasalas, title: 'Masalas', blurb: 'Authentic blends for every dish', cta: 'Know More', href: '/brands/soil-king' },
  { id: 'rice', image: imgRice, title: 'Rice', blurb: 'Fragrant grains, rich in tradition', cta: 'Know More', href: '/brands/soil-king' },
  { id: 'appalams', image: imgAppalams, title: 'Appalams & Crisps', blurb: 'Crispy delights for every meal', cta: 'Know More', href: '/brands/soil-king' },
  { id: 'pastes', image: imgPastes, title: 'Pastes', blurb: 'Rich flavors for authentic taste', cta: 'Know More', href: '/brands/soil-king' }
];

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = PRODUCTS[id];
  const [selectedSize, setSelectedSize] = useState('');
  const rowRef = useRef(null);

  useEffect(() => {
    if (product?.sizes) setSelectedSize(product.sizes[0]);
  }, [product]);

  /* Prevent manual scroll on the product row (use arrows only) */
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
    row.addEventListener('wheel', prevent, { passive: false });
    row.addEventListener('touchmove', prevent, { passive: false });
    row.addEventListener('keydown', prevent, { passive: false });
    return () => {
      row.removeEventListener('wheel', prevent);
      row.removeEventListener('touchmove', prevent);
      row.removeEventListener('keydown', prevent);
    };
  }, []);

  const stepWidth = () => {
    const row = rowRef.current;
    if (!row) return 0;
    const card = row.querySelector('.brand-prod-card');
    const style = window.getComputedStyle(row);
    const gap = parseFloat(style.columnGap || style.gap || '0') || 0;
    const w = (card?.offsetWidth || 0) + gap;
    return w || Math.round(row.clientWidth * 0.9);
  };

  const slide = (dir = 1) => {
    const row = rowRef.current;
    if (!row) return;
    row.scrollBy({ left: dir * stepWidth(), behavior: 'smooth' });
  };

  useEffect(() => {
    document.title = product
      ? `${product.title} - UBC | United Brothers Company`
      : 'Product Not Found - UBC | United Brothers Company';
  }, [product]);

  if (!product) {
    return (
      <main className="product-detail">
        <div className="container">
          <div className="product-not-found">
            <h1>Product Not Found</h1>
            <p>The product you're looking for doesn't exist.</p>
            <button onClick={() => navigate('/products')} className="btn">
              Back to Products
            </button>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="product-detail">
      <section className="product-detail-section">
        <div className="container">
          <div className="product-detail-grid">
            {/* Left: Product Image */}
            <div className="product-image-wrapper">
              <div className="product-image-card">
                <img src={product.image} alt={product.title} className="product-image" />
              </div>
            </div>

            {/* Right: Product Details */}
            <div className="product-details">
              <SectionTag label={product.category.toUpperCase()} />
              <h1 className="product-title">
                {product.title}
                {product.titleSub && <span className="product-title-sub">{product.titleSub}</span>}
              </h1>

              <p className="product-description">{product.description}</p>
              <p className="product-description-2">{product.description2}</p>

              <div className="divider"></div>

              <div className="available-sizes">
                <h3 className="sizes-title">Available Sizes</h3>
                <div className="sizes-list">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      className={`size-btn ${selectedSize === size ? 'active' : ''}`}
                      onClick={() => setSelectedSize(size)}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {product.nutrition && (
                <>
                  <div className="divider"></div>

                  <div className="nutritional-info">
                    <h3 className="nutrition-title">Nutritional Information (Per 100g)</h3>

                    <table className="nutrition-table">
                      <thead>
                        <tr>
                          <th>Nutrient</th>
                          <th>Value</th>
                          <th>% Daily Value</th>
                        </tr>
                      </thead>

                      <tbody>
                        {product.nutrition.map((item, index) => {
                          const isSub =
                            item.nutrient === 'Sugar' || item.nutrient === 'Saturated Fat';
                          return (
                            <tr key={index}>
                              <td className={isSub ? 'nutrient sub' : 'nutrient'}>
                                {isSub ? '— ' : ''}
                                {item.nutrient}
                              </td>
                              <td className="nutrient-val">{item.value}</td>
                              <td className="nutrient-dv">{item.dailyValue}</td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section
        className="why-choose-section"
        style={{
          backgroundImage: `url(${probgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="why-choose-overlay"></div>
        <div className="container">
          <div className="why-choose-grid">
            <div className="why-choose-left">
              <h2 className="why-choose-title">Why Choose Our {product.title}?</h2>
            </div>
            <div className="why-choose-right">
              {product.benefits.map((benefit, index) => (
                <div key={index} className="benefit-item">
                  <h3 className="benefit-title">Benefits: {benefit.title} - </h3>
                  <p className="benefit-description">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Four Pillars Section */}
      <section className="four-pillars-section">
        <div className="container">
          <div className="pillars-grid">
            <div className="pillars-left">
              <SectionTag label="★ USP" />
              <h2 className="pillars-title">The Four Pillars of Our Spice Quality</h2>
            </div>

            <div className="pillars-right">
              <div className="pillars-grid-items">
                <div className="pillar-item">
                  <div className="pillar-icon">
                    <img src={iconLayer1} alt="Pure & Natural" />
                  </div>
                  <h3 className="pillar-title">Pure & Natural</h3>
                  <p className="pillar-description">
                    Sourced directly from nature, our spices contain 100% genuine ingredients,
                    free from any artificial fillers or by-products.
                  </p>
                </div>

                <div className="pillar-item">
                  <div className="pillar-icon">
                    <img src={iconLayer2} alt="Aroma Locked" />
                  </div>
                  <h3 className="pillar-title">Aroma Locked</h3>
                  <p className="pillar-description">
                    Advanced processing and airtight packs lock in oils for maximum fragrance and flavor.
                  </p>
                </div>

                <div className="pillar-item">
                  <div className="pillar-icon">
                    <img src={iconLayer3} alt="No Added Preservatives" />
                  </div>
                  <h3 className="pillar-title">No Added Preservatives</h3>
                  <p className="pillar-description">
                    Pure freshness, preserved naturally - no artificial chemicals.
                  </p>
                </div>

                <div className="pillar-item">
                  <div className="pillar-icon">
                    <img src={iconLayer4} alt="No Added Colours" />
                  </div>
                  <h3 className="pillar-title">No Added Colours</h3>
                  <p className="pillar-description">
                    Vibrant color, naturally - no artificial dyes, just pure spice.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Explore Soil Kings Products */}
      <section className="brand-products product-detail-products">
        <div className="container">
          <div className="prod-head">
            <div>
              <Link to="/brands/soil-king" style={{ textDecoration: 'none', color: 'inherit' }}>
                <h2 className="prod-title">
                  Explore Soil Kings
                  <br /> Products
                </h2>
              </Link>
            </div>

            <div className="prod-arrows">
              <button aria-label="Previous" className="btn icon-btn" onClick={() => slide(-1)}>←</button>
              <button aria-label="Next" className="btn icon-btn" onClick={() => slide(1)}>→</button>
            </div>
          </div>

          <div className="brand-prod-row no-user-scroll" ref={rowRef}>
            {SCROLLABLE_PRODUCTS.map((p) => (
              <article className="brand-prod-card" key={p.id}>
                <div className="brand-prod-media">
                  <img src={p.image} alt={p.title} />
                </div>
                <div className="brand-prod-body">
                  <h3 className="brand-prod-name">{p.title}</h3>
                  <p className="brand-prod-blurb">{p.blurb}</p>
                  <Link to={p.href} className="chip-link">{p.cta}</Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
