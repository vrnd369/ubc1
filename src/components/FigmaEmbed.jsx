import React from 'react';
import './FigmaEmbed.css';

export default function FigmaEmbed({ src, title = 'Figma Prototype' }) {
  // Keep the URL exactly as provided (must be embed.figma.com for iframing)
  return (
    <div className="figma-embed-wrap">
      <iframe
        className="figma-embed-iframe"
        title={title}
        src={src}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
