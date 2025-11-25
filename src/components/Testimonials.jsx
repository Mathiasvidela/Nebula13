import React from 'react';
import { Quote } from 'lucide-react';
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      artist: "Duki (Ficticio)",
      text: "El sonido que sacan acá es otro nivel. La vibra del estudio te hace sentir en casa pero laburando pro. Recomendadísimo para los pibes que quieren sonar serio."
    },
    {
      artist: "Cazzu (Ficticio)",
      text: "Me encantó la mezcla, entendieron al toque lo que buscaba. Nebula 13 es la posta en Nueva Córdoba."
    },
    {
      artist: "YSY A (Ficticio)",
      text: "Increíble el equipo, te potencian el tema. Si querés romperla, tenés que grabar acá."
    }
  ];

  return (
    <section className="testimonials-section">
      <div className="container">
        <h2 className="section-title">Lo que dicen los que ya pasaron</h2>
        
        <div className="testimonials-grid">
          {testimonials.map((item, index) => (
            <div key={index} className="testimonial-card">
              <Quote className="quote-icon" size={40} />
              <p className="testimonial-text">"{item.text}"</p>
              <h4 className="testimonial-artist">- {item.artist}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
