import React from 'react';
import { Play, ExternalLink } from 'lucide-react';
import './Portfolio.css';
import portadaShai from '../assets/portadaShai.jpg';
import portadaNahum from '../assets/portadaNahum.png';
import portadaLeamsi from '../assets/portadaLeamsi.png';
import portadaLeamsi2 from '../assets/portada2Leamsi.png';
import portadaLeamsi3 from '../assets/portada3Leamsi.png';
import portadaPoupe from '../assets/portadaPoupe.png';


const Portfolio = () => {
  const tracks = [
    {
      title: "PERSONAL TRAINER",
      artist: "SHAI",
      image: portadaShai,
      youtubeLink: "https://www.youtube.com/watch?v=S7xFFOQ4aoM"
    },
    {
      title: "QuE llovierA",
      artist: "Nahum Bazano",
      image: portadaNahum,
      youtubeLink: "https://www.youtube.com/watch?v=v85AUPL3gnw&list=RDv85AUPL3gnw&start_radio=1"
    },
    {
      title: "HICIMOS CONTACTO",
      artist: "LEAMSI EL 22",
      image: portadaLeamsi,
      youtubeLink: "https://www.youtube.com/watch?v=v85AUPL3gnw&list=RDv85AUPL3gnw&start_radio=1"
    },
    {
      title: "QUE LA CHOQUE",
      artist: "LEAMSI EL 22",
      image: portadaLeamsi2,
      youtubeLink: "https://www.youtube.com/watch?v=r81qCErF_go"
    },
    {
      title: "FOTO",
      artist: "LEAMSI EL 22",
      image: portadaLeamsi3,
      youtubeLink: "https://www.youtube.com/watch?v=uNHQtJavoOY"
    },
    {
      title: "Baby donde estás?",
      artist: "Poupe music",
      image: portadaPoupe,
      youtubeLink: "https://www.youtube.com/watch?v=vQIZlJB8fJc"
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
