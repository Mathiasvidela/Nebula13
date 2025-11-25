import React from 'react';
import { MessageSquare, Mic, Sliders, Upload } from 'lucide-react';
import './Process.css';

const Process = () => {
  const steps = [
    {
      icon: <MessageSquare size={32} />,
      title: "Charla Inicial",
      description: "Definimos tu idea, referencias y qué sonido buscás."
    },
    {
      icon: <Mic size={32} />,
      title: "Grabación",
      description: "Sesión en Nebula 13. Tomas de voz, ad-libs y coaching."
    },
    {
      icon: <Sliders size={32} />,
      title: "Mezcla & Master",
      description: "Pulimos detalles, efectos y le damos la pegada final."
    },
    {
      icon: <Upload size={32} />,
      title: "Entrega",
      description: "Te llevás los archivos listos para subir a todas las plataformas."
    }
  ];

  return (
    <section id="process" className="process-section">
      <div className="container">
        <h2 className="section-title">Cómo trabajamos tu música</h2>
        
        <div className="process-timeline">
          <div className="timeline-line"></div>
          {steps.map((step, index) => (
            <div key={index} className={`process-step ${index % 2 === 0 ? 'left' : 'right'}`}>
              <div className="step-content-wrapper">
                <div className="step-number">0{index + 1}</div>
                <div className="step-card">
                  <div className="step-icon-container">
                    {step.icon}
                    <div className="icon-glow"></div>
                  </div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </div>
              <div className="timeline-dot"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
