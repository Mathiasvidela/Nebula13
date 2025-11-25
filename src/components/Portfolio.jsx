import React from 'react';
import { Play, ExternalLink } from 'lucide-react';
import './Portfolio.css';

const Portfolio = () => {
  const tracks = [
    {
      title: "Noche en la Docta",
      artist: "Lil Cba",
      genre: "Trap",
      image: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=2070&auto=format&fit=crop",
      youtubeLink: "https://www.youtube.com/"
    },
    {
      title: "Ritmo Urbano",
      artist: "MC Joven",
      genre: "Reggaetón",
      image: "https://images.unsplash.com/photo-1493225255756-d9584f8606e9?q=80&w=2070&auto=format&fit=crop",
      youtubeLink: "https://www.youtube.com/"
    },
    {
      title: "Flow Pesado",
      artist: "Dark Soul",
      genre: "Drill",
      image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=2070&auto=format&fit=crop",
      youtubeLink: "https://www.youtube.com/"
    },
    {
      title: "Sin Salida",
      artist: "La Jefa",
      genre: "R&B / Trap",
      image: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?q=80&w=2070&auto=format&fit=crop",
      youtubeLink: "https://www.youtube.com/"
    },
    {
      title: "Vibras de Verano",
      artist: "Sol & Arena",
      genre: "Pop Urbano",
      image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2070&auto=format&fit=crop",
      youtubeLink: "https://www.youtube.com/"
    },
    {
      title: "Callejero",
      artist: "El Barrio",
      genre: "Rap",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2070&auto=format&fit=crop",
      youtubeLink: "https://www.youtube.com/"
    }
  ];

  return (
    <section id="work" className="portfolio-section">
      <div className="container">
        <h2 className="section-title">Lo que ya sonó en Nebula 13</h2>
        <p className="section-subtitle">Escuchá la calidad que sacamos. Tu tema puede ser el próximo.</p>

        <div className="portfolio-grid">
          {tracks.map((track, index) => (
            <a 
              key={index} 
              href={track.youtubeLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="track-card"
            >
              <div className="track-image" style={{ backgroundImage: `url(${track.image})` }}>
                <div className="play-overlay">
                  <div className="play-btn">
                    <Play fill="white" size={24} />
                  </div>
                </div>
              </div>
              <div className="track-info">
                <div className="track-header">
                  <span className="track-genre">{track.genre}</span>
                  <ExternalLink size={16} className="external-icon" />
                </div>
                <h3 className="track-title">{track.title}</h3>
                <p className="track-artist">{track.artist}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
