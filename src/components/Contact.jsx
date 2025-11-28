import React from 'react';
import { Mail, Phone, Instagram } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title">Reservá tu sesión</h2>
        <p className="section-subtitle">Contame qué querés grabar y coordinamos horario. Los turnos vuelan.</p>

        <div className="contact-container-centered">
          <div className="whatsapp-card">
            <div className="whatsapp-content">
              <div className="whatsapp-icon-large">
                <Phone size={48} />
              </div>
              <div className="whatsapp-text">
                <h3>Hablemos por WhatsApp</h3>
                <p>La forma más rápida de coordinar tu sesión. Consultá disponibilidad y precios.</p>
              </div>
            </div>
            
            <a 
              href="https://wa.me/5493512038868" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-primary btn-whatsapp"
            >
              <Phone size={20} style={{ marginRight: '10px' }} />
              Iniciar Chat
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
