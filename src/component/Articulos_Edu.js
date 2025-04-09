import React, { useState, useEffect, useRef } from 'react';
import './EducacionPage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import BookshelfThumbnail from './assets/BookshelfThumbnail.png';

// Mock data for articles with translations
const articlesData = {
  es: [
    {
      id: 1,
      title: '¿Qué es un Terremoto?',
      description: 'Una explicación detallada sobre la formación y características de los tsunamis.',
      image: 'https://redsismica.uprm.edu/spanish/educacion/imgs/que_es_un_terremoto/corrientes-conveccion.png',
      link: 'https://redsismica.uprm.edu/spanish/educacion/informacion_terremotos.php'
    },
    {
      id: 2,
      title: 'Preparación ante Terremotos',
      description: 'Guía completa sobre cómo prepararse y actuar durante un terremoto.',
      image: 'https://redsismica.uprm.edu/spanish/educacion/preparacion/imgs/pic9.jpg',
      link: 'https://redsismica.uprm.edu/spanish/educacion/preparacion/index.php'
    },
    {
      id: 3,
      title: 'Predicción de Terremotos',
      description: 'Información sobre el sistema de alerta y cómo funciona en Puerto Rico.',
      image: 'https://redsismica.uprm.edu/spanish/educacion/imgs/predic.jpg',
      link: 'https://redsismica.uprm.edu/spanish/educacion/prediccion.php'
    },
    {
      id: 4,
      title: 'Tamaño de los Terremotos',
      description: 'Un recorrido por los terremotos más significativos en la historia de Puerto Rico.',
      image: 'https://redsismica.uprm.edu/spanish/educacion/imgs/energy.gif',
      link: 'https://redsismica.uprm.edu/spanish/educacion/tamano.php'
    },
    {
      id: 5,
      title: 'Efectos Secundarios de los Terremotos',
      description: 'Recomendaciones para la seguridad estructural en edificios.',
      image: 'https://redsismica.uprm.edu/spanish/educacion/imgs/deslizamiento.jpg',
      link: 'https://redsismica.uprm.edu/spanish/educacion/efectos_secundarios.php'
    },
    {
      id: 6,
      title: 'Glosario de Términos Sísmicos',
      description: 'Cómo crear y mantener un plan familiar para emergencias.',
      image: 'https://redsismica.uprm.edu/spanish/educacion/imgs/que_es_un_terremoto/hipocentro.png',
      link: 'https://redsismica.uprm.edu/spanish/educacion/glosario.php'
    },
    {
      id: 7,
      title: 'Zonas de Sismicidad de Puerto Rico',
      description: 'Conozca sobre las zonas en donde se concentra la actividad sísimica en Puerto Rico.',
      image: 'https://redsismica.uprm.edu/spanish/educacion/imgs/zonas.png',
      link: 'https://redsismica.uprm.edu/spanish/educacion/zonas_sismicidad.php'
    },
    {
      id: 8,
      title: 'Triangulo de la Vida',
      description: 'Conozca sobre esta teoría y porqué recomendamos Agacharse, Cubrirse y Sujetarse como el metodo principal de protección.',
      image: 'https://redsismica.uprm.edu/spanish/educacion/imgs/pic14.gif',
      link: 'https://redsismica.uprm.edu/spanish/educacion/triangulo_vida.php'
    },
    {
      id: 9,
      title: 'Terremotos Significativos en Puerto Rico',
      description: 'Conozca mas sobre el terremoto del 1918 y otros terremotos significativos que impactaron a Puerto Rico.',
      image: 'https://redsismica.uprm.edu/spanish/educacion/terremotos/imgs/terremoto_1918.gif',
      link: 'https://redsismica.uprm.edu/spanish/educacion/terremotos/index.php'
    },
    {
      id: 10,
      title: 'Recursos Educativos',
      description: 'Aquí podrá ver materiales educativos, folletos, nuestro currículo de tsunami y nuestro catálogo de noticias de la RSPR.',
      image: BookshelfThumbnail,
      link: '#/'
    }
  ]
};

/**
 * Main Articles component that displays educational articles in a grid format
 * Handles responsive design and fade-in animations
 */
const ArticulosEdu = () => {
  // State for fade-in animation effect
  const [fadeInClass, setFadeInClass] = useState('');

  // State for tracking visible articles for fade-in effect
  const [visibleArticles, setVisibleArticles] = useState([]);

  // State for responsive design
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 431);

  // Reference for article elements
  const articlesRef = useRef([]);

  // Language setting (always Spanish for this component)
  const currentLanguage = 'es';

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
              Artículos Educativos
            </h1>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginTop: '1rem' }}>
              <h1 className="nav-option" style={{ fontSize: "1.2rem", color: "white" }} 
                  onClick={() => window.location.href = '#/articulos'}>
                Artículos
              </h1>
              <h1 className="nav-option" style={{ fontSize: "1.2rem", color: "white" }} 
                  onClick={() => window.location.href = '#/'}>
                Recursos
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
                        <p className="text-primary mb-1">ARTÍCULO</p>
                        <h5 className="card-title">{article.title}</h5>
                        {isSmallScreen && (
                          <p className="card-text mobile-description">{article.description}</p>
                        )}
                        {isSmallScreen && (
                          <span className="read-more-link">LEER MÁS ›</span>
                        )}
                      </div>
                    </div>
                    {/* Article Overlay - Only show on larger screens */}
                    {!isSmallScreen && (
                      <div className="thumbnail-overlay">
                        <p className="thumbnail-tag">ARTÍCULO</p>
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
                          LEER MÁS
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

export default ArticulosEdu; 