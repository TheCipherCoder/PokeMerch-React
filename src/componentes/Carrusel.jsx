import React, { useState, useEffect } from "react";
import '../estilos/carrusel.css';
import img1 from '../assets/1.png';
import img2 from '../assets/2.png';
import img3 from '../assets/3.png';
import img4 from '../assets/4.png';

export default function Carrusel() {
  const images = [img1, img2, img3, img4];
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  const updateIndex = (newIndex) => {
    setTransitioning(true);
    setTimeout(() => {
      setSelectedIndex(newIndex);
      setTransitioning(false);
    }, 500); 
  };

  const nextImage = () => {
    updateIndex((selectedIndex + 1) % images.length);
  };

  const prevImage = () => {
    updateIndex((selectedIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(nextImage, 3000);
    return () => clearInterval(interval);
  }, [selectedIndex]);

  return (
    <div className="carrusel-container">
      <button className="nav-button prev" onClick={prevImage}>‹</button>
      <div className="carrusel-wrapper">
        <div className={`carrusel-slide ${transitioning ? 'slide-effect' : ''}`} style={{ transform: `translateX(-${selectedIndex * 100}%)` }}>
          {images.map((img, index) => (
            <img key={index} src={img} alt={`Slide ${index}`} />
          ))}
        </div>
      </div>
      <button className="nav-button next" onClick={nextImage}>›</button>
    </div>
  );
}
