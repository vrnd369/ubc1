import React from 'react';
import { Link } from 'react-router-dom';
import './Categories.css';
import SectionTag from './SectionTag';

/* ✅ Assets — update paths/names to match your project */
import imgPastes from '../assets/paste.png';
import imgSpices from '../assets/spices.png';
import imgMasalasAndSpices from '../assets/masalas and spices.png'; // Masalas & Spices
import imgMasalas from '../assets/masalas.png';                      // Masalas (only)
import imgRice from '../assets/rice.png';
import imgAppalams from '../assets/appalam.png';

const chips = [
  'All',
  'Masalas & Spices',
  'Rice',
  'Appalams & Crisps',
  'Pastes & Ready Mix',
];

/**
 * Display order (desktop 3 x 2):
 *  1) Masalas
 *  2) Rice
 *  3) Appalams & Crisps
 *  4) Pastes & Ready Mix
 *  5) Spices
 *  6) Masalas & Spices
 */
const CATEGORIES = [
  {
    id: 'masalas',
    title: 'Masalas',
    subtitle: 'Authentic blends for every dish',
    img: imgMasalas,
    chip: 'Masalas',
    href: '/products?category=masalas',
    brand: 'soil-king', // Soil King products
  },
  {
    id: 'rice',
    title: 'Rice',
    subtitle: 'Fragrant grains, rich in tradition',
    img: imgRice,
    chip: 'Rice',
    href: '/products?category=rice',
    brand: 'soil-king', // Soil King products
  },
  {
    id: 'appalams',
    title: 'Appalams & Crisps',
    subtitle: 'Crispy delights for every meal',
    img: imgAppalams,
    chip: 'Appalams & Crisps',
    href: '/products?category=appalams',
    brand: 'soil-king', // Soil King products
  },
  {
    id: 'pastes',
    title: 'Pastes & Ready Mix',
    subtitle: 'Pure flavors, ready to use',
    img: imgPastes,
    chip: 'Pastes & Ready Mix',
    href: '/products?category=pastes',
    brand: 'soil-king', // Soil King products
  },
  {
    id: 'spices',
    title: 'Spices',
    subtitle: 'Authentic blends for every dish',
    img: imgSpices,
    chip: 'Spices',
    href: '/products?category=spices',
    brand: 'wellness', // Wellness products
  },
  {
    id: 'masalas-spices',
    title: 'Masalas & Spices',
    subtitle: 'Authentic blends for every dish',
    img: imgMasalasAndSpices,
    chip: 'Masalas & Spices',
    href: '/products?category=masalas-spices',
    brand: 'wellness', // Wellness products
  },
];

export default function Categories({ selectedBrand = 'All' }){
  const [active, setActive] = React.useState('All');

  const visible = React.useMemo(() => {
    let filtered = CATEGORIES;
    
    // Filter by brand if selected
    if (selectedBrand !== 'All') {
      filtered = filtered.filter(c => c.brand === selectedBrand);
    }
    
    // Filter by category if selected
    if (active !== 'All') {
      filtered = filtered.filter(c => c.chip === active);
    }
    
    return filtered;
  }, [active, selectedBrand]);

  return (
    <section id="products" className="section categories-section" aria-labelledby="categories-heading">
      <div className="container">
        <SectionTag label="★ CATEGORIES" />
        <h2 id="categories-heading">
          Explore our finest products<br/>crafted <span className="playfair-text">for</span> everyday flavor
        </h2>

        <div className="categories-buttons-wrapper">
          {chips.map(c => (
            <button
              key={c}
              className={`category-button ${active === c ? 'active' : ''}`}
              onClick={() => setActive(c)}
              role="tab"
              aria-selected={active === c}
              aria-controls="categories-grid"
            >
              {c}
            </button>
          ))}
        </div>

        <div id="categories-grid" className="grid grid-3 cards" role="region" aria-live="polite">
          {visible.map(item => (
            <div
              key={item.id}
              className="category-card"
              aria-label={`${item.title} – ${item.subtitle}. Know More`}
            >
              <div className="category-card-head">
                <img src={item.img} alt={item.title} />
              </div>

              <div className="category-card-bar">
                <div className="category-text">
                  <h3 className="category-title">{item.title}</h3>
                  <p className="category-subtitle">{item.subtitle}</p>
                </div>
                <Link 
                  to={`/product/${item.id}`}
                  className="know-more-btn"
                >
                  Shop Now
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="center">
          <a href="/products" className="btn" aria-label="Explore all products">Explore Products</a>
        </div>
      </div>
    </section>
  );
}
