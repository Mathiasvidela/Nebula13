import React from 'react';
import { CheckCircle } from 'lucide-react';
import './Studio.css';

const Studio = () => {
  const highlights = [
    "Cabina tratada acústicamente",
    "Monitoreo profesional",
    "Atmósfera íntima y creativa",
    "Equipamiento de alta gama"
  ];

  return (
    <section id="studio" className="studio-section">
      <div className="container">
        <div className="studio-grid">
          <div className="studio-content">
            <h2 className="section-title" style={{ textAlign: 'left' }}>
              Nebula 13, tu base en <span className="text-accent">Nueva Córdoba</span>
            </h2>
            <p className="studio-description">
              Somos un estudio independiente dedicado al trap, rap, reggaetón y música urbana. 
              Nos enfocamos en artistas emergentes y proyectos que buscan un sonido serio y competitivo.
              Acá no sos un cliente más, sos parte de la familia.
            </p>
            
            <div className="studio-highlights">
              {highlights.map((item, index) => (
                <div key={index} className="highlight-card">
                  <CheckCircle className="highlight-icon" size={20} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="studio-image-container">
            <div className="studio-image-placeholder">
              <div className="image-overlay"></div>
              <span>Foto del Estudio</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Studio;
