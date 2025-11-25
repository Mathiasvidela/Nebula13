import React from 'react';
import { Instagram, Youtube, Music2 } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-brand">
          <h2>NEBULA 13</h2>
          <p>Estudio de grabación en Nueva Córdoba, Argentina.</p>
        </div>
        
        <div className="footer-social">
          <a href="#" className="social-link" aria-label="Instagram">
            <Instagram size={24} />
          </a>
          <a href="#" className="social-link" aria-label="TikTok">
            <Music2 size={24} />
          </a>
          <a href="#" className="social-link" aria-label="YouTube">
            <Youtube size={24} />
          </a>
        </div>

        <div className="footer-copyright">
          <p>&copy; {new Date().getFullYear()} Nebula 13. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
