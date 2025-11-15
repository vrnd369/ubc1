import React, { useEffect } from 'react';
import './Prototype.css';
import FigmaEmbed from '../components/FigmaEmbed';

export default function Prototype(){
  useEffect(() => {
    document.title = 'Prototype - UBC | United Brothers Company';
  }, []);

  const src = "https://embed.figma.com/proto/Ax0cTIIFJd80kpRhszt6zg/UBC-Website?page-id=221%3A10446&node-id=221-10751&m=draw&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=221%3A10447&embed-host=share";

  return (
    <main className="container section prototype-page">
      <h1>UBC Prototype</h1>
      <p className="lead">Live Figma prototype embedded below for quick reviews.</p>
      <FigmaEmbed src={src} title="UBC Website Prototype" />
      <p className="subtle-note">
        Tip: If the frame doesn’t load, make sure the Figma share settings allow “Anyone with the link – can view prototype”.
      </p>
    </main>
  );
}
