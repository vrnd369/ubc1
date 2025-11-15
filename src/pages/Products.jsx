import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import './Products.css';
import Categories from '../components/Categories';
import SectionTag from '../components/SectionTag';
import soilKingIcon from '../assets/soilkingicon.png';
import wellnessIcon from '../assets/wellnessicon.png';

export default function Products(){
  const [searchParams, setSearchParams] = useSearchParams();
  const brandFromUrl = searchParams.get('brand') || 'All';
  const [selectedBrand, setSelectedBrand] = useState(brandFromUrl);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    document.title = 'Products - UBC | United Brothers Company';
  }, []);

  // Update selectedBrand when URL param changes
  useEffect(() => {
    const brandParam = searchParams.get('brand');
    setSelectedBrand(brandParam || 'All');
  }, [searchParams]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.brand-dropdown-wrapper')) {
        setIsDropdownOpen(false);
      }
    };
    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDropdownOpen]);

  const brands = [
    { id: 'All', name: 'All Brands', icon: null },
    { id: 'soil-king', name: 'Soil King', icon: soilKingIcon },
    { id: 'wellness', name: 'Wellness', icon: wellnessIcon },
  ];

  return (
    <main>
      <section className="products-brand-filter">
        <div className="container">
          <div className="brand-filter-header">
            <SectionTag label="★ OUR BRANDS" />
          </div>
          <div className="brand-dropdown-wrapper">
              <select 
                className="brand-select"
                value={selectedBrand}
                onChange={(e) => {
                  setSelectedBrand(e.target.value);
                  // Update URL param when brand changes
                  if (e.target.value === 'All') {
                    setSearchParams({});
                  } else {
                    setSearchParams({ brand: e.target.value });
                  }
                }}
                aria-label="Select brand"
              >
                {brands.map(brand => (
                  <option key={brand.id} value={brand.id}>
                    {brand.name}
                  </option>
                ))}
              </select>
              <div className="brand-select-custom">
                <div 
                  className={`brand-select-trigger ${isDropdownOpen ? 'open' : ''}`}
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                  {selectedBrand !== 'All' && brands.find(b => b.id === selectedBrand)?.icon && (
                    <img 
                      src={brands.find(b => b.id === selectedBrand).icon} 
                      alt={brands.find(b => b.id === selectedBrand).name}
                      className="brand-select-icon"
                    />
                  )}
                  <span>{brands.find(b => b.id === selectedBrand)?.name || 'All Brands'}</span>
                  <span className="dropdown-arrow">▾</span>
                </div>
                <div className={`brand-select-menu ${isDropdownOpen ? 'open' : ''}`}>
                  {brands.map(brand => (
                    <div
                      key={brand.id}
                      className={`brand-select-option ${selectedBrand === brand.id ? 'active' : ''}`}
                      onClick={() => {
                        setSelectedBrand(brand.id);
                        setIsDropdownOpen(false);
                        // Update URL param when brand changes
                        if (brand.id === 'All') {
                          setSearchParams({});
                        } else {
                          setSearchParams({ brand: brand.id });
                        }
                      }}
                    >
                      {brand.icon && (
                        <img src={brand.icon} alt={brand.name} className="brand-select-icon" />
                      )}
                      <span>{brand.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
        </div>
      </section>
      <Categories selectedBrand={selectedBrand} />
    </main>
  )
}
