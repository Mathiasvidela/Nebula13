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
              Estamos ubicados estratégicamente cerca de todo. Fácil de llegar
            </p>
            
            <ul className="location-details">
              <li className="address-item">
                <MapPin className="loc-icon address-icon" />
                <span className="address-text">Balcarce 427, Nueva Córdoba, Córdoba.</span>
              </li>
              <li>
                <Navigation className="loc-icon" />
                <span>A 6 cuadras del Buen Pastor.</span>
              </li>
            </ul>

            
          </div>

          <div className="map-container">
            <div className="map-placeholder">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3404.6526121038423!2d-64.1787116!3d-31.4236959!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9432a290da4bad85%3A0xdece7004cf7a7f36!2sBalcarce%20442%2C%20X5000HWJ%20C%C3%B3rdoba!5e0!3m2!1ses-419!2sar!4v1764107797849!5m2!1ses-419!2sar" 
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
