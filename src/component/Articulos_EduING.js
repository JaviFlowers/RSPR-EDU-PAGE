import React, { useState, useEffect, useRef } from 'react';
import './EducacionPage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import BookshelfThumbnail from './assets/BookshelfThumbnail.png';
import { useLocation, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

// Mock data for articles with translations
const articlesData = {
  en: [
    {
      id: 1,
      title: 'What is an Earthquake?',
      description: 'A detailed explanation about the formation and characteristics of earthquakes.',
      image: 'https://redsismica.uprm.edu/spanish/educacion/imgs/que_es_un_terremoto/corrientes-conveccion.png',
      link: 'https://redsismica.uprm.edu/english/education/earthquake_information.php'
    },
    {
      id: 2,
      title: 'Earthquake Preparedness',
      description: 'Learn more about how to prepare and protect yourself before, during or after an earthquake occurs.',
      image: 'https://redsismica.uprm.edu/spanish/educacion/preparacion/imgs/pic9.jpg',
      link: 'https://redsismica.uprm.edu/english/education/preparation/index.php'
    },
    {
      id: 3,
      title: 'Earthquake Forecasting',
      description: 'What are earthquake prediction models based on?',
      image: 'https://redsismica.uprm.edu/spanish/educacion/imgs/predic.jpg',
      link: 'https://redsismica.uprm.edu/english/education/prediction.php'
    },
    {
      id: 4,
      title: 'The size of an earthquake',
      description: 'Learn more about the scales used to measure earthquake magnitudes.',
      image: 'https://redsismica.uprm.edu/spanish/educacion/imgs/energy.gif',
      link: 'https://redsismica.uprm.edu/english/education/size.php'
    },
    {
      id: 5,
      title: 'Secondary Effects of Earthquakes',
      description: 'Learn about different effects that can happen due to an earthquake.',
      image: 'https://redsismica.uprm.edu/spanish/educacion/imgs/deslizamiento.jpg',
      link: 'https://redsismica.uprm.edu/english/education/secondary_effects.php'
    },
    {
      id: 6,
      title: 'Seismic Terms Glossary',
      description: 'Definitions for a variety of terms used in the study of earthquakes.',
      image: 'https://redsismica.uprm.edu/spanish/educacion/imgs/que_es_un_terremoto/hipocentro.png',
      link: 'https://redsismica.uprm.edu/english/education/glossary.php'
    },
    {
      id: 7,
      title: 'Puerto Rico Seismicity Zones',
      description: 'Learn about the zones where there is seismic activity in Puerto Rico.',
      image: 'https://redsismica.uprm.edu/spanish/educacion/imgs/zonas.png',
      link: 'https://redsismica.uprm.edu/english/education/seismicity_zones.php'
    },
    {
      id: 8,
      title: 'Triangle of Life',
      description: 'Learn about this theory and why Drop, Cover and Hold is recommended as the primary form of protection instead.',
      image: 'https://redsismica.uprm.edu/spanish/educacion/imgs/pic14.gif',
      link: 'https://redsismica.uprm.edu/english/education/triangle_of_life.php'
    },
    {
      id: 9,
      title: 'Significant Earthquakes in Puerto Rico',
      description: 'Learn more about the 1918 earthquake and other significant earthquakes that have impacted Puerto Rico.',
      image: 'https://redsismica.uprm.edu/spanish/educacion/terremotos/imgs/terremoto_1918.gif',
      link: 'https://redsismica.uprm.edu/english/education/earthquakes/index.php'
    },
    {
      id: 10,
      title: 'Educational Resources',
      description: 'Here you can see educational materials, brochures, our tsunami curriculum and the PRSN news catalogue.',
      image: BookshelfThumbnail,
      link: '#/english'
    }
  ]
};

/**
 * Main Articles component that displays educational articles in a grid format
 * Handles responsive design and fade-in animations
 */
const ArticulosEduING = () => {
  // State for fade-in animation effect
  const [fadeInClass, setFadeInClass] = useState('');

  // State for tracking visible articles for fade-in effect
  const [visibleArticles, setVisibleArticles] = useState([]);

  // State for responsive design
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 431);

  // Reference for article elements
  const articlesRef = useRef([]);

  // Language setting (always English for this component)
  const currentLanguage = 'en';

  /**
   * Effect to handle fade-in animation and screen size changes
   * Sets up intersection observer for article elements
   */
  useEffect(() => {
    // Trigger the fade-in effect
    setFadeInClass('fade-in');

    // Handle screen size changes
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 431);
    };

    window.addEventListener('resize', handleResize);

    // Set up intersection observer for fade-in effect
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          } else {
            entry.target.classList.remove('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    articlesRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener('resize', handleResize);
      articlesRef.current.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div className={`main-container ${fadeInClass}`}>
      {/* Top Section */}
      <div className="container-fluid" style={{ backgroundColor: '#39a1dd' }}>
        <div className="row justify-content-center align-items-center top-section">
          <div className="col-auto">
            <h1 style={{ fontSize: isSmallScreen ? "2.2rem" : "3.2rem", fontWeight: "600", textAlign: "center", color: "white" }}>
              Educational Articles
            </h1>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginTop: '1rem' }}>
              <h1 className="nav-option" style={{ fontSize: "1.2rem", color: "white" }} 
                  onClick={() => window.location.href = '#/english/articulos'}>
                Articles
              </h1>
              <h1 className="nav-option" style={{ fontSize: "1.2rem", color: "white" }} 
                  onClick={() => window.location.href = '#/english'}>
                Resources
              </h1>
              <h1 className="nav-option" style={{ fontSize: "1.2rem", color: "white" }} 
                  onClick={() => window.open('https://www.youtube.com/@redsismicapr', '_blank')}>
                Videos
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* Articles Section */}
      <div className="articles-section py-5">
        <div className="container">
          <div className="row justify-content-center">
            {articlesData[currentLanguage].map((article, index) => (
              <div
                key={article.id}
                className={`col-12 ${!isSmallScreen ? 'col-md-4 col-sm-6' : ''} mb-4 article-card ${
                  visibleArticles.includes(index) ? 'fade-in' : ''
                }`}
                ref={(el) => el && articlesRef.current.push(el)}
              >
                <a
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none"
                >
                  <div className={`card shadow-sm ${isSmallScreen ? 'mobile-card' : ''}`}>
                    <div className={`${isSmallScreen ? 'd-flex align-items-center' : ''}`}>
                      <div className={`${isSmallScreen ? 'mobile-image-container' : ''}`}>
                        <img
                          src={article.image}
                          alt={article.title}
                          className={`card-img ${isSmallScreen ? 'mobile-image' : 'card-img-top'}`}
                        />
                      </div>
                      <div className={`card-body ${isSmallScreen ? 'mobile-card-body' : ''}`}>
                        <p className="text-primary mb-1">ARTICLE</p>
                        <h5 className="card-title">{article.title}</h5>
                        {isSmallScreen && (
                          <p className="card-text mobile-description">{article.description}</p>
                        )}
                        {isSmallScreen && (
                          <span className="read-more-link">READ MORE ›</span>
                        )}
                      </div>
                    </div>
                    {/* Article Overlay - Only show on larger screens */}
                    {!isSmallScreen && (
                      <div className="thumbnail-overlay">
                        <p className="thumbnail-tag">ARTICLE</p>
                        <div className="divider-line"></div>
                        <h5 className="thumbnail-title">{article.title}</h5>
                        <p className="thumbnail-description">
                          {article.description}
                        </p>
                        <a
                          href={article.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="thumbnail-link"
                        >
                          READ MORE
                        </a>
                      </div>
                    )}
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      <footer className="footer">
        <p className="m-0 text-center text-white">
          Copyright &copy; {currentLanguage === 'es' ? 'Red Sísmica de Puerto Rico' : 'Puerto Rico Seismic Network'} {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
};

export default ArticulosEduING; 