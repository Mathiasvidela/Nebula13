import React from 'react';
import { MapPin, Navigation } from 'lucide-react';
import './Location.css';

const Location = () => {
  return (
    <section id="location" className="location-section">
      <div className="container">
        <div className="location-content">
          <div className="location-info">
            <h2 className="section-title" style={{ textAlign: 'left' }}>En el corazón de <span className="text-accent">Nueva Córdoba</span></h2>
            <p className="location-desc">
              Estamos ubicados estratégicamente cerca de todo. Fácil de llegar, cerca de los bares y la movida nocturna.
            </p>
            
            <ul className="location-details">
              <li>
                <MapPin className="loc-icon" />
                <span>Obispo Trejo 1234, Nueva Córdoba, Córdoba.</span>
              </li>
              <li>
                <Navigation className="loc-icon" />
                <span>A 2 cuadras del Buen Pastor.</span>
              </li>
            </ul>

            <div className="location-tags">
              <span className="tag">Zona Segura</span>
              <span className="tag">Fácil Acceso</span>
              <span className="tag">Cerca de Bares</span>
            </div>
          </div>

          <div className="map-container">
            <div className="map-placeholder">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3404.887396542874!2d-64.1887576848519!3d-31.41733998140375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9432a2821e1a1d5f%3A0x6c0e6f8b8b8b8b8b!2sNueva%20C%C3%B3rdoba%2C%20C%C3%B3rdoba!5e0!3m2!1ses!2sar!4v1620000000000!5m2!1ses!2sar" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy"
                title="Mapa de Ubicación"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
