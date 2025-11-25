import React from 'react';
import { Mic2, SlidersHorizontal, Music4, Scissors } from 'lucide-react';
import './Services.css';

const Services = () => {
  const services = [
    {
      icon: <Mic2 size={40} />,
      title: "Grabación de Voces",
      description: "Enfocado en trap / rap, tomas limpias, acompañamiento en la interpretación para sacar tu mejor performance."
    },
    {
      icon: <SlidersHorizontal size={40} />,
      title: "Mezcla y Mastering",
      description: "Mezclas listas para Spotify, YouTube, etc., con pegada fuerte y claridad. Hacemos que tu tema suene gigante."
    },
    {
      icon: <Music4 size={40} />,
      title: "Beats a Medida",
      description: "Producción de instrumentales originales, estilo trap argentino, reggaetón, drill. Tu sonido propio."
    },
    {
      icon: <Scissors size={40} />,
      title: "Postproducción y Edición",
      description: "Afinación de voz (Auto-Tune pro), edición, efectos creativos, ad-libs y todo lo que el tema pida."
    }
  ];

  return (
    <section id="services" className="services-section">
      <div className="container">
        <h2 className="section-title">Lo que hacemos en Nebula 13</h2>
        <p className="section-subtitle">Soluciones completas para llevar tu música al siguiente nivel.</p>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">
                {service.icon}
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
