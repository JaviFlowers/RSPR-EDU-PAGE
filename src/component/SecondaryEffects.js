import React, { useState, useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import './Articulos.css';
import './Swiper.css';
// Import Font Awesome CSS
import '@fortawesome/fontawesome-free/css/all.min.css';
// Import Parallax
import { Parallax, Background } from 'react-parallax';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { EffectCards, Pagination, Navigation, Autoplay } from 'swiper/modules';

//Gif and Videos
import AmplificacionGif from './Recursos_Educativos/efectos_IMG/Amplificacion1.gif';
import AmplificacionGif2 from './Recursos_Educativos/efectos_IMG/Amplificacion2.gif';
import LiquefaccionGif from './Recursos_Educativos/efectos_IMG/Liquefaccion_Gif.mp4';
// Images

import tsunamiImg from './Recursos_Educativos/efectos_IMG/NOAATsunami.mp4';
import Tendido_Electrico from './Recursos_Educativos/efectos_IMG/Tendido_electrico.JPG';
import Haiti_Agua from './Recursos_Educativos/efectos_IMG/Recogido_Haiti.jpg';
import Japon from './Recursos_Educativos/efectos_IMG/terremoto-Japon.jpg';
import Nepal from './Recursos_Educativos/efectos_IMG/terremoto_Nepal.PNG';
import Haiti_Saqueo from './Recursos_Educativos/efectos_IMG/Saqueos_Haití1.jpg';
import Haiti_Saqueo2 from './Recursos_Educativos/efectos_IMG/Saqueos_Haití2.PNG';
import NigataImg from './Recursos_Educativos/efectos_IMG/Liquefaction_Niigata.jfif';
import CaidaRoca from './Recursos_Educativos/efectos_IMG/Caida_Roca.jpg';
import Flujo from './Recursos_Educativos/efectos_IMG/Derrumbe_Flujo.jpg';
import Derrumbe from './Recursos_Educativos/efectos_IMG/Derrumbe_Roca.jpg';
import Incendio from './Recursos_Educativos/efectos_IMG/incendio_cali.jpg';
import TsunamiJapon from './Recursos_Educativos/efectos_IMG/tsunami_Japon.jpg';
import TsunamiAlaska from './Recursos_Educativos/efectos_IMG/Tsunami_Alaska1958.jpg';

// Carousel Images
import carouselImg1 from './Recursos_Educativos/efectos_IMG/Recogido_Maynmar.JPG';
import carouselImg2 from './Recursos_Educativos/efectos_IMG/Recogido_Maynmar(2).JPG';
import carouselImg3 from './Recursos_Educativos/efectos_IMG/Recogido_Maynmar(3).JPG';
import carouselImg4 from './Recursos_Educativos/efectos_IMG/Guanica-desplazamiento.jpg';
import carouselImg5 from './Recursos_Educativos/efectos_IMG/Guanica-desplazamiento(2).jpg';
import carouselImg6 from './Recursos_Educativos/efectos_IMG/Guanica-desplazamiento(3).jpg';
import carouselImg7 from './Recursos_Educativos/efectos_IMG/Enfermedades-Haiti.jpg';
import carouselImg8 from './Recursos_Educativos/efectos_IMG/refugio_Haiti.PNG';
import carouselImg9 from './Recursos_Educativos/efectos_IMG/Hambruna-Haiti.png';
import carouselImg10 from './Recursos_Educativos/efectos_IMG/Hambruna_Haiti_Nino.png';
import carouselImg11 from './Recursos_Educativos/efectos_IMG/hambre-haiti-manos-unidas.png';
import carouselImg12 from './Recursos_Educativos/efectos_IMG/Licuacion_Christchurch(1).PNG';
import carouselImg13 from './Recursos_Educativos/efectos_IMG/Licuacion_Christchurch(2).PNG';
import carouselImg14 from './Recursos_Educativos/efectos_IMG/Licuacion_Christchurch(3).PNG';


/**
 * LazyMedia component to optimize media loading
 * Only loads media when scrolled into view
 */
const LazyMedia = ({ src, type, alt, className, style }) => {
  const mediaRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Determine if it's a video or image based on file extension
  const isVideo = type === 'video' || src.endsWith('.mp4') || src.endsWith('.webm');
  
  // Create placeholder dimensions based on style
  const placeholderHeight = style?.height || '300px';
  const placeholderWidth = style?.width || style?.maxWidth || '100%';
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '100px' }
    );
    
    if (mediaRef.current) {
      observer.observe(mediaRef.current);
    }
    
    return () => {
      if (mediaRef.current) {
        observer.disconnect();
      }
    };
  }, []);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  return (
    <div ref={mediaRef} className="position-relative">
      {!isVisible ? (
        <div 
          style={{ 
            height: placeholderHeight, 
            width: placeholderWidth, 
            background: '#f1f1f1',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '8px'
          }}
        >
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <>
          {isVideo ? (
            <video 
              src={src}
              className={className}
              style={style}
              autoPlay 
              loop 
              muted
              playsInline
              onLoadedData={handleLoad}
            />
          ) : (
            <img 
              src={src} 
              alt={alt} 
              className={className} 
              style={style}
              onLoad={handleLoad} 
            />
          )}
          {!isLoaded && (
            <div 
              style={{ 
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: '#f1f1f1',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '8px'
              }}
            >
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

/**
 * Secondary Effects of Earthquakes component
 * Follows the Science Learning Hub format
 */
const SecondaryEffects = () => {
  // State for fade-in animation effect
  const [fadeInClass, setFadeInClass] = useState('');
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 431);
  const [isTextExpanded, setIsTextExpanded] = useState(true);
  const [isMobileIndexVisible, setIsMobileIndexVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  /**
   * Effect to handle fade-in animation and screen size changes
   */
  useEffect(() => {
    // Handle screen size changes
    const handleResize = () => {
      const smallScreen = window.innerWidth <= 431;
      setIsSmallScreen(smallScreen);
      if (!smallScreen) {
        setIsMobileIndexVisible(false);
      }
    };

    // Call handleResize immediately and add event listener
    handleResize();
    window.addEventListener('resize', handleResize);
    
    // Add smooth scrolling behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Show loading spinner while page is loading
    const timer = setTimeout(() => {
      setIsLoading(false);
      // Trigger the fade-in effect after loading completes
      setTimeout(() => {
        setFadeInClass('fade-in');
      }, 100);
    }, 1500);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      document.documentElement.style.scrollBehavior = '';
      clearTimeout(timer);
    };
  }, []);

  // Toggle text overlay visibility
  const toggleTextOverlay = () => {
    setIsTextExpanded(!isTextExpanded);
  };

  // Toggle mobile index visibility
  const toggleMobileIndex = () => {
    setIsMobileIndexVisible(!isMobileIndexVisible);
  };

  // Handle scroll to section
  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      const yOffset = -80; // Adjust this value based on your header height
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      if (isSmallScreen) {
        setIsMobileIndexVisible(false);
      }
    }
  };

  if (isLoading) {
    return (
      <div className="loading-container" style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        width: '100%',
        backgroundColor: '#ffffff'
      }}>
        <div className="spinner-border text-primary" role="status" style={{ width: '3rem', height: '3rem' }}>
          <span className="visually-hidden">Cargando...</span>
        </div>
        <p className="mt-3" style={{ color: '#003366' }}>Cargando contenido...</p>
      </div>
    );
  }

  return (
    <div className={`articulo-main-container ${fadeInClass}`} style={{ opacity: fadeInClass ? 1 : 0, transition: 'opacity 0.8s ease-in-out' }}>
        {/* Top section with title */}
      <div className="container-fluid px-0">
        <Parallax
          blur={0}
          bgImage={tsunamiImg}
          bgImageAlt="Earthquake effects"
          strength={400}
          style={{ borderRadius: '8px', overflow: 'hidden' }}
        >
          <div style={{ 
              height: '450px', 
              display: 'flex', 
              alignItems: 'center',
              backgroundColor: 'rgba(57, 161, 221, 0.7)',
            }}>
            <div className="col-12">
              <div className="tittle-container">
                <div className="d-flex flex-column align-items-start justify-content-center">
                  <nav aria-label="breadcrumb" className="mb-2" style={{ marginTop: '80px' }}>
                    <ol className="breadcrumb bg-transparent" style={{ marginBottom: '5px', padding: '8px 16px' }}>
                      <li className="breadcrumb-item"><Link to="/" style={{ color: 'white', fontWeight: '500' }}>Inicio</Link></li>
                      <li className="breadcrumb-item"><Link to="/articulos" style={{ color: 'white', fontWeight: '500' }}>Artículos</Link></li>
                    </ol>
                  </nav>
                  <div className="px-3">
                    <h2 className="display-4 mb-3 text-left" style={{ fontWeight: '600', color: 'white' }}>Efectos de un Terremoto</h2>
                    <p className="lead text-left" style={{ color: 'white', maxWidth: '800px' }}>Exploración de los efectos primarios, secundarios y terciarios que pueden resultar de los movimientos sísmicos y cómo afectan nuestro entorno.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Parallax>

        {/* Main content with floating sidebar */}
        <div className="row mt-4 mx-0">
          {/* Main content container */}
          <div className={isSmallScreen ? "col-12" : "col-md-9"}>
            <div className="articulo-container">

        {/* Introduction section */}
              <div className="row mb-5">
                <div className="col-12 mt-4">
                  <h2 className="mb-4">¿Qué efectos puede causar un terremoto?</h2>
                  <p className="text-justify">
                    Cuando ocurre un terremoto, los primeros daños suelen deberse a la ruptura del suelo a lo largo de una falla y al fuerte movimiento del terreno provocado por la liberación de energía. A esto se le conoce como <strong>efectos primarios</strong>.
                  </p>
                  <p className="text-justify">
                    Después de un sismo, pueden presentarse <strong>efectos secundarios</strong>, es decir, consecuencias que ocurren directamente como resultado del movimiento del suelo. Estos incluyen tanto <strong>efectos geológicos</strong> como <strong>no geológicos</strong>. Entre los geológicos se encuentran: deslizamientos de tierra, colapsos de cavernas y sumideros, amplificación, rupturas visibles en la superficie, licuefacción y tsunamis. En cuanto a los efectos no geológicos, se encuentran: incendios provocados por daños en líneas eléctricas o de gas, interrupciones en el suministro de agua y electricidad, y problemas en los medios de comunicaciones.
                  </p>
                  <p className="text-justify">
                    Los <strong>efectos terciarios</strong> son consecuencias en cadena que se desarrollan a partir de los efectos primarios y secundarios. Por ejemplo, un terremoto puede generar un tsunami que dañe una planta nuclear, provocando un desastre ambiental de gran magnitud. Otros efectos terciarios pueden ser crisis humanitarias, como brotes de enfermedades, hambrunas o traumas psicológicos, debido a la pérdida de hogares, infraestructura o servicios básicos. Estos también se clasifican como <strong>no geológicos</strong>, ya que afectan directamente a las personas.
                  </p>
                </div>
              </div>

              {/* Types of Effects Table */}
        <div className="row mb-5">
          <div className="col-12">
                  <h2 id="efectos-tipos" className="mb-4">Tipos de efectos primarios, secundarios y terciarios</h2>
                  <div className="table-responsive">
                    <table className="table table-bordered table-hover">
                      <thead className="thead-light" style={{ backgroundColor: 'rgb(57, 161, 221)', color: 'white' }}>
                        <tr>
                          <th style={{ width: '20%' }}>Tipo de efecto</th>
                          <th style={{ width: '20%' }}>Nombre</th>
                          <th>Elementos claves</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td rowSpan="1">Efectos primarios</td>
                          <td>Movimiento del suelo (Terremoto)</td>
                          <td>
                            <ul>
                              <li>Efectos de la falla (deslizamiento de la falla)</li>
                              <li>Efectos de propagación de la onda</li>
                              <li>Efectos del lugar (tipo de suelo, ubicación)</li>
                            </ul>
                          </td>
                        </tr>
                        <tr>
                          <td rowSpan="6">Efectos secundarios</td>
                          <td>Tsunami</td>
                          <td>
                            <ul>
                              <li>Altura de la Ola</li>
                              <li>Tamaño de la ruptura de la falla y la proximidad a la costa</li>
                            </ul>
                          </td>
                        </tr>
                        <tr>
                          <td>Deslizamientos</td>
                          <td>
                            <ul>
                              <li>Inclinación de la pendiente</li>
                              <li>Tipos de suelo</li>
                              <li>Mapas geológicos</li>
                            </ul>
                          </td>
                        </tr>
                        <tr>
                          <td>Licuefacción</td>
                          <td>
                            <ul>
                              <li>Tipo de suelo, sedimento blando, arena, relleno, suelos no consolidados, tamaño de grano</li>
                              <li>Nivel freático (saturación)</li>
                              <li>Carga sobre el suelo</li>
                            </ul>
                          </td>
                        </tr>
                        <tr>
                          <td>Incendios</td>
                          <td>
                            <ul>
                              <li>Sustancias altamente inflamables</li>
                              <li>Escapes de gas</li>
                              <li>Daños en líneas eléctricas</li>
                            </ul>
                          </td>
                        </tr>
                        <tr>
                          <td>Amplificación</td>
                          <td>
                            <ul>
                              <li>Efectos en la superficie debido a la propagación de la onda en suelos no consolidados</li>
                              <li>Profundidad del epicentro</li>
                            </ul>
                          </td>
                        </tr>
                        <tr>
                          <td>Inundaciones y rupturas en represas</td>
                          <td>
                            <ul>
                              <li>Ubicación del temblor con respecto a los cuerpos de agua</li>
                              <li>Represas susceptibles a daños</li>
                              <li>Terrenos susceptibles a inundaciones</li>
                            </ul>
                          </td>
                        </tr>
                        <tr>
                          <td rowSpan="4">Efectos terciarios</td>
                          <td>Epidemias</td>
                          <td>Susceptibilidad de la población (envejecientes, niños, mujeres embarazadas, etc)</td>
                        </tr>
                        <tr>
                          <td>Efectos psicológicos</td>
                          <td>Susceptibilidad de la población (Edad, cultura y estatus socioeconómico)</td>
                        </tr>
                        <tr>
                          <td>Problemas económicos</td>
                          <td>Estatus económico</td>
                        </tr>
                        <tr>
                          <td>Problemas ambientales</td>
                          <td>Susceptibilidad ambiental (ej; daños a cuerpos de agua, radiación (plantas nucleares), escombros, daños a flora y fauna, etc)</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="mt-2 text-muted small">Recopilada del artículo "Losses Associated with Secondary Effects in Earthquakes" modificada por Red Sísmica de Puerto Rico.</p>
                </div>
              </div>

              {/* Non-Geological Effects Section */}
              <div className="row mb-5">
                <div className="col-12">
                  <h2 id="efectos-no-geologicos" className="mb-4">Efectos No Geológicos</h2>
                  <p className="text-justify">
                    Después de un terremoto, los servicios básicos como el agua y la electricidad suelen verse gravemente interrumpidos, 
                    afectando el funcionamiento de hospitales y otros servicios esenciales. Estos efectos no geológicos pueden tener un 
                    impacto significativo en la vida diaria y la recuperación de las comunidades afectadas.
                  </p>
                </div>
              </div>

              {/* Water Interruption Section */}
              <div className="row mb-2">
                <div className="col-12">
                  <h3 id="agua" className="mb-3">Interrupción o pérdidas de servicios básicos: Agua</h3>
                  <div className="row">
                    <div className="col-md-8">
                      <p className="text-justify">
                        Los sismos pueden destruir la infraestructura de las plantas de tratamiento de agua, dañando sus estructuras y equipos 
                        esenciales para la potabilización, lo que interrumpe el proceso de purificación y distribución. Además, pueden afectar 
                        los sistemas de suministro, como tuberías, bombas y redes de distribución, provocando fugas, colapsos y fallas en el 
                        transporte del agua. También pueden contaminar las fuentes de agua subterránea y superficial al mezclarse residuos, 
                        sedimentos y sustancias peligrosas, comprometiendo la calidad. Estos efectos combinados ponen en riesgo la salud pública.
                      </p>
                      <blockquote className="blockquote bg-light p-3 border-left border-primary" style={{ borderLeftWidth: '4px' }}>
                        <p className="mb-0 text-justify">
                          "El 28 de marzo de 2025, un terremoto de magnitud 7.7 sacudió Myanmar, en Asia, dejando a millones de niños y niñas 
                          en situación de riesgo. Según UNICEF, la emergencia agravó una crisis humanitaria preexistente, con más de 1,600 personas 
                          fallecidas y 3,400 heridas, muchos de ellos menores de edad. La destrucción afectó hogares, escuelas, hospitales y sistemas 
                          de comunicación. Familias que ya vivían en condiciones extremadamente frágiles ahora enfrentan mayores dificultades debido 
                          a la falta de agua potable, atención médica y refugio."
                        </p>
                      </blockquote>
                      <p className="mt-3 text-justify">
                        El 14 de agosto de 2021, un terremoto de magnitud 7.2 sacudió Haití afectando a más de medio millón de niños y niñas en riesgo 
                        de contraer enfermedades transmitidas por el agua. Antes de que ocurriera el terremoto, la mitad de los centros sanitarios de los 
                        tres departamentos afectados por el terremoto tenían acceso a servicios de agua. Luego del terremoto, casi el 60% de los habitantes 
                        de los tres departamentos más afectados no tienen acceso al agua potable.
                      </p>
                    </div>
        {/* Image Carousel */}
        <div className="carousel-section">
                <div className="row mb-2">
            <div className="col-12">
              <h2 className="mb-3 text-center">Imágenes de Efectos Secundarios</h2>
                <p className="mb-4 text-center">Interrupción o pérdidas de servicios básicos: Agua</p>
              <div className="carousel-container">
                <Swiper
                  effect={'cards'}
                  grabCursor={true}
                  modules={[EffectCards, Pagination, Navigation, Autoplay]}
                  autoplay={{
                      delay: 5000,
                    disableOnInteraction: false,
                  }}
                  pagination={{
                    clickable: true,
                  }}
                  navigation={true}
                  className="mySwiper"
                  cardsEffect={{
                    slideShadows: true,
                    perSlideOffset: 8,
                    perSlideRotate: 2,
                  }}
                >
                  <SwiperSlide>
                    <img src={carouselImg1} alt="Tsunami" />
                    <div className="carousel-caption">
                        <p>Residentes afectados por el terremoto del distrito de Shwe See Khon recogieron agua por UNICEF. Foto recopilada de UNICEF. </p>
                      <a href="#tsunamis" className="see-more">Ver más</a>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={carouselImg2} alt="Olas de tsunami" />
                    <div className="carousel-caption">
                        <p>Familias en el barrio Myo Ma, municipio de Yamethin, región de Mandalay el 3 de abril de 2025, recibiendo agua potable para uso doméstico con el apoyo de UNICEF. Foto recopilada de UNICEF.</p>
                      <a href="#tsunamis" className="see-more">Ver más</a>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={carouselImg3} alt="Terremoto" />
                    <div className="carousel-caption">
                        <p>UNICEF's el 2 de abril de 2025, donde se distribuyó 9,600 galones de agua limpia a familias del pueblo Yamethin en Myanmar. Foto recopilada de UNICEF. </p>
                      <a href="#efectos-clave" className="see-more">Ver más</a>
                    </div>
                  </SwiperSlide>
                </Swiper>
                </div>
              </div>
            </div>
              </div>
            </div>
          </div>
        </div>

            {/* Haiti Section */}
            
        <div className="row mb-5">
          <div className="col-12">
                <h5 className="mt-4">Crisis de agua en Haití:</h5>
                <div className="mt-4">
                  <Parallax
                    bgImage={Haiti_Agua}
                    bgImageAlt="Agua en Haití"
                    strength={200}
                    style={{ borderRadius: '12px', overflow: 'hidden' }}
                  >
                    <div style={{ height: '500px', position: 'relative' }}>
                      <button 
                        onClick={toggleTextOverlay}
                        className="position-absolute"
                        style={{
                          right: '10px',
                          bottom: '10px',
                          zIndex: 10,
                          background: 'rgba(0, 51, 102, 0.7)',
                          color: 'white',
                          border: 'none',
                          borderRadius: '50%',
                          width: '36px',
                          height: '36px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          cursor: 'pointer',
                          transition: 'all 0.3s ease'
                        }}
                        aria-label={isTextExpanded ? "Ocultar texto" : "Mostrar texto"}
                      >
                        <i className={`fas fa-chevron-${isTextExpanded ? 'down' : 'up'}`}></i>
                      </button>
                      <div 
                        className="position-absolute bottom-0 left-0 w-100 p-4" 
                        style={{ 
                          background: 'rgba(0, 51, 102, 0.85)',
                          borderBottomLeftRadius: '12px',
                          borderBottomRightRadius: '12px',
                          maxHeight: isTextExpanded ? '60%' : '0',
                          overflowY: 'auto',
                          transition: 'all 0.3s ease',
                          opacity: isTextExpanded ? 1 : 0,
                          visibility: isTextExpanded ? 'visible' : 'hidden'
                        }}
                      >
                        <h5 className="text-white mb-2">Crisis de agua en Haití (2021)</h5>
                        <p className="text-white mb-2" style={{ fontSize: '0.95rem', lineHeight: '1.4' }}>
                          El 14 de agosto de 2021, un terremoto de magnitud 7.2 sacudió Haití afectando a más de medio millón de niños y niñas en riesgo 
                          de contraer enfermedades transmitidas por el agua. Antes de que ocurriera el terremoto, la mitad de los centros sanitarios de los 
                          tres departamentos afectados por el terremoto tenían acceso a servicios de agua. Luego del terremoto, casi el 60% de los habitantes 
                          de los tres departamentos más afectados no tienen acceso al agua potable.
                        </p>
                        <p className="text-white mb-1" style={{ fontSize: '0.95rem', lineHeight: '1.4' }}>
                          <strong>Terremoto de Haití (2021):</strong> Foto del 18 de agosto de 2021, cerca del distrito de Camp Perrin en Haití, 
                          familias tuvieron acceso a agua limpia en estaciones de agua apoyadas por UNICEF, la cual proporcionó agua limpia a 3,000 
                          familias con al menos cuatro tanques de 10,000 litros cada uno, que se están rellenando mediante camiones cisterna. 
                          Foto recopilada de UNICEF.
                        </p>
                      </div>
                    </div>
                  </Parallax>
                </div>
              </div>
            </div>

            {/* Electricity Section */}
            <div className="row mb-5">
              <div className="col-12">
                <h3 id="electricidad" className="mb-3">Interrupción o pérdidas de servicios básicos: Electricidad</h3>
                <div className="row">
                  <div className="col-md-4 order-md-1 order-2">
                    <div className="card mb-3">
                      <img src={Tendido_Electrico} className="card-img-top" alt="Daños en infraestructura eléctrica" />
                      <div className="card-body bg-light">
                        <h5 className="card-title">Daños en infraestructura eléctrica</h5>
                        <p className="card-text small" style={{ fontSize: '0.75rem' }}>Foto por UNICEF el 1 de abril de 2025, en Kyaukse en la región Mandalay tras el terremoto de Myanmar.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-8 order-md-2 order-1">
                    <p className="text-justify">
                      Los terremotos pueden dañar las redes eléctricas, lo que resulta en cortes prolongados de electricidad, afectando hogares, 
                      hospitales y servicios de emergencia. La falta de electricidad interrumpe la comunicación, dificultando la coordinación 
                      de rescates y la comunicación entre comunidades afectadas. También afecta la refrigeración de alimentos y medicamentos, 
                      resultando en pérdidas significativas y riesgo para la salud.
                    </p>
                    <blockquote className="blockquote bg-light p-3 border-left border-primary" style={{ borderLeftWidth: '4px' }}>
                      <p className="mb-0 text-justify">
                        "Tras el terremoto de Myanmar, el 28 de marzo de 2025 comunidades han quedado sin electricidad ni redes de comunicación 
                        a causa de deslizamientos de tierra y el colapso de carreteras y puentes."
                      </p>
                    </blockquote>
                  </div>
                </div>
          </div>
        </div>

            {/* Communication Problems Section */}
        <div className="row mb-5">
          <div className="col-12">
                <h3 id="comunicacion" className="mb-3">Problemas de comunicación</h3>
            <div className="row">
              <div className="col-md-8">
                <p className="text-justify">
                      Las infraestructuras críticas, como: carreteras, suministro eléctrico, agua potable y comunicaciones, son fundamentales 
                      para el desarrollo de las actividades humanas, pero también son altamente vulnerables a desastres naturales como los terremotos. 
                      En terremotos fuertes, es común que dichas infraestructuras sufran daños o interrupciones, lo que puede desencadenar crisis 
                      a gran escala. Cuando se afectan las redes de comunicación, torres de transmisión, cables de fibra óptica, entre otros sistemas, 
                      dificulta la coordinación de emergencias, el acceso a información crucial, la solicitud de ayudas y el contacto con familiares.
                    </p>
                    <h5 className="mt-4">Ejemplos:</h5>
                    <div className="bg-light p-3 mb-3 rounded">
                      <p className="text-justify">
                        <strong>El gran terremoto de Japón (2011):</strong> El 11 de marzo de 2011 de magnitud Mw 9.1, uno de los mayores 
                        registrados en la historia humana. De acuerdo a Kobayashi (2014), se dañaron 1.9 millones de líneas fijas de acceso 
                        y 29 mil estaciones de telefonía móvil, fueron dañadas o suspendidas. Tomó casi un mes y medio restaurar la mayoría 
                        de los servicios de comunicaciones.
                      </p>
                    </div>
                    <div className="bg-light p-3 mb-3 rounded">
                      <p className="text-justify">
                        <strong>Terremoto de Gorkha, Nepal (2015):</strong> El terremoto de magnitud 7.6 afectó la infraestructura de telecomunicaciones. 
                        Las redes inalámbricas y de línea fija sufrieron daños considerables. Se estimó que los operadores de telecomunicaciones 
                        tuvieron daños alrededor de US $17.4 millones y pérdidas por US $45.5 millones. Asimismo, se estimaron daños por US $0.2 
                        millones y pérdidas por US $4.67 millones para los proveedores de servicios de internet (ISP) (NPC 2015).
                      </p>
                    </div>
              </div>
              <div className="col-md-4">
                <div className="card mb-3">
                      <img src={Japon} className="card-img-top" alt="Daños en infraestructura de comunicaciones en Japón" />
                  <div className="card-body bg-light">
                        <h5 className="card-title">Daños en Japón (2011)</h5>
                        <p className="card-text small"style={{ fontSize: '0.75rem' }}>Foto recopilada de página Milenio mostrando daños en infraestructura de comunicaciones tras el terremoto de 2011.</p>
                      </div>
                    </div>
                    <div className="card mb-3">
                      <img src={Nepal} className="card-img-top" alt="Daños en telecomunicaciones en Nepal" />
                      <div className="card-body bg-light">
                        <h5 className="card-title">Daños en Nepal (2015)</h5>
                        <p className="card-text small"style={{ fontSize: '0.75rem' }}>Foto recopilada de página web Britannica mostrando los efectos del terremoto en la infraestructura de telecomunicaciones de Nepal.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

            {/* Displacement of People Section */}
            <div className="row mb-4">
          <div className="col-12">
                <h3 id="desplazamiento" className="mb-3">Desplazamiento de personas</h3>
            <div className="row">
                  <div className="col-md-8">
                    <p className="mb-2 text-justify">
                      La pérdida de viviendas y edificios obliga a las personas a abandonar sus hogares. Esto puede generar desplazamientos masivos 
                      y la necesidad de abrir refugios temporales. El desplazamiento de personas tras un terremoto puede ser una consecuencia inmediata 
                      y prolongada del evento sísmico. Se debe a múltiples factores, como la destrucción de viviendas, la interrupción de servicios básicos, 
                      el miedo a réplicas y la inestabilidad estructural de edificios.
                    </p>
                    
                    <div className="mb-2">
                      <div className="card border-0 mb-2">
                        <div className="card-header bg-primary text-white py-2">
                          <h5 className="mb-0 fs-6">Tipos de desplazamiento</h5>
                        </div>
                        <ul className="list-group list-group-flush">
                          <li className="list-group-item py-2">
                            <strong>Desplazamiento interno:</strong> La mayoría de las personas se trasladan dentro de la misma región o país, ya sea a refugios temporales, 
                            casas de familiares o albergues habilitados por el gobierno.
                          </li>
                          <li className="list-group-item py-2">
                            <strong>Migración forzada:</strong> En casos extremos, algunos habitantes deben mudarse permanentemente a otras regiones o incluso 
                            a otros países si la reconstrucción es lenta.
                          </li>
                        </ul>
                      </div>
                      
                      <div className="card border-0 mb-2">
                        <div className="card-header bg-primary text-white py-2">
                          <h5 className="mb-0 fs-6">Causas del desplazamiento</h5>
                        </div>
                        <ul className="list-group list-group-flush">
                          <li className="list-group-item py-2">
                            <strong>Destrucción de viviendas:</strong> Si las casas colapsan o quedan inhabitables, las personas deben trasladarse a refugios o con familiares en otras regiones.
                          </li>
                          <li className="list-group-item py-2">
                            <strong>Pérdida de infraestructura básica:</strong> La falta de agua, electricidad y acceso a alimentos puede hacer que los afectados busquen mejores condiciones en otros lugares.
                          </li>
                          <li className="list-group-item py-2">
                            <strong>Amenaza de réplicas:</strong> Muchas personas abandonan sus hogares por temor a nuevos derrumbes debido a réplicas sísmicas.
                          </li>
                        </ul>
                      </div>
                      
                      <div className="card border-0 mb-2">
                        <div className="card-header bg-primary text-white py-2">
                          <h5 className="mb-0 fs-6">Consecuencias del desplazamiento</h5>
                        </div>
                        <ul className="list-group list-group-flush">
                          <li className="list-group-item py-2">
                            <strong>Impacto económico:</strong> Muchas personas pierden sus empleos debido a la destrucción de negocios y la interrupción de actividades económicas.
                          </li>
                          <li className="list-group-item py-2">
                            <strong>Problemas psicológicos:</strong> El trauma post-terremoto, el estrés y la incertidumbre pueden afectar la salud mental de los desplazados.
                          </li>
                          <li className="list-group-item py-2">
                            <strong>Dificultades en la reconstrucción:</strong> Si muchas personas abandonan una zona afectada, la recuperación y reconstrucción pueden retrasarse debido a la falta de mano de obra y recursos.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>                  
              <div className="col-md-4">
                    <div className="carousel-section p-0">
                      <div className="mb-2">
                        <p className="text-center mb-2"><strong>Ejemplos: Guánica, Puerto Rico (2020)</strong></p>
                        <div className="carousel-container">
                          <Swiper
                            effect={'cards'}
                            grabCursor={true}
                            modules={[EffectCards, Pagination, Navigation, Autoplay]}
                            autoplay={{
                              delay: 5000,
                              disableOnInteraction: false,
                            }}
                            pagination={{
                              clickable: true,
                            }}
                            navigation={true}
                            className="mySwiper"
                            cardsEffect={{
                              slideShadows: true,
                              perSlideOffset: 8,
                              perSlideRotate: 2,
                            }}
                          >
                            <SwiperSlide>
                              <img src={carouselImg4} alt="Desplazamiento de personas Guanica" />
                              <div className="carousel-caption">
                                <p>Fotos de la Red Sísmica de Puerto Rico. </p>
                                <a href="#desplazamiento" className="see-more">Ver más</a>
                  </div>
                            </SwiperSlide>
                            <SwiperSlide>
                              <img src={carouselImg5} alt="Desplazamiento de personas Guanica 2" />
                              <div className="carousel-caption">
                                <p>Fotos de la Red Sísmica de Puerto Rico.</p>
                                <a href="#desplazamiento" className="see-more">Ver más</a>
                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                              <img src={carouselImg6} alt="Desplazamiento de personas Guanica 3" />
                              <div className="carousel-caption">
                                <p>Fotos de la Red Sísmica de Puerto Rico.</p>
                                <a href="#desplazamiento" className="see-more">Ver más</a>
              </div>
                            </SwiperSlide>
                          </Swiper>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Public Health Problems - Diseases Section */}
            <div className="row mb-5">
              <div className="col-12">
                <h2 id="salud-publica" className="mb-4">Problemas de salud pública - Enfermedades</h2>
                <p className="text-justify">
                  Después de un terremoto, surgen graves problemas de salud pública debido a la interrupción de servicios básicos y las condiciones insalubres en refugios temporales. La falta de agua potable y saneamiento adecuado aumenta el riesgo de brotes de enfermedades infecciosas.
                </p>
                
                <ol className="mt-4">
                  <li className="mb-4">
                    <h5 className="fw-bold text-primary">Enfermedades transmitidas por el agua</h5>
                    <p className="text-justify">
                      La contaminación de fuentes de agua potable puede provocar brotes de enfermedades como el cólera, la diarrea aguda, la hepatitis A y la fiebre tifoidea. Además, el transporte y almacenamiento inadecuado del agua favorece la proliferación de microorganismos patógenos.
                    </p>
                  </li>

                  <li className="mb-4">
                    <h5 className="fw-bold text-primary">Condiciones insalubres y propagación de infecciones</h5>
                    <p className="text-justify">
                      La acumulación de desechos y la falta de higiene en albergues pueden generar un entorno propicio para la propagación de enfermedades infecciosas como el sarampión y el dengue, especialmente entre poblaciones vulnerables.
                    </p>
                  </li>

                  <li className="mb-4">
                    <h5 className="fw-bold text-primary">Riesgo de enfermedades zoonóticas</h5>
                    <p className="text-justify">
                      La escasez de agua potable para el lavado de alimentos puede aumentar la incidencia de enfermedades transmitidas por animales, como la leptospirosis, que se propaga a través del contacto con agua y alimentos contaminados por orina de roedores.
                    </p>
                  </li>

                  <li className="mb-4">
                    <h5 className="fw-bold text-primary">Lesiones y falta de atención médica</h5>
                    <p className="text-justify">
                      Los terremotos pueden causar lesiones graves, y la falta de acceso a servicios médicos adecuados puede derivar en infecciones, complicaciones y un aumento de la mortalidad. La falta de atención médica también agrava condiciones preexistentes, afectando a personas con enfermedades crónicas.
                    </p>
                  </li>
                </ol>

                <p className="text-justify">
                  La combinación de estos factores hace que la respuesta sanitaria sea crucial para reducir la incidencia de enfermedades y garantizar el bienestar de la población afectada.
                </p>
                
                <p className="text-justify">
                  Después del terremoto del 2010, las graves condiciones en el suroeste de Haití, donde más de medio millón de niños, niñas y adolescentes carecen de acceso a refugios, agua potable e instalaciones higiénicas, están aumentando rápidamente la amenaza de infecciones respiratorias agudas, diarreas, cólera y malaria.
                </p>
              </div>
            </div>

            {/* Health Problems Carousel */}
            <div className="carousel-section">
              <div className="row mb-4">
                <div className="col-12">
                  <h2 className="mb-3 text-center">Imágenes de Problemas de Salud</h2>
                  <div className="carousel-container">
                    <Swiper
                      effect={'cards'}
                      grabCursor={true}
                      modules={[EffectCards, Pagination, Navigation, Autoplay]}
                      autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                      }}
                      pagination={{
                        clickable: true,
                      }}
                      navigation={true}
                      className="mySwiper"
                      cardsEffect={{
                        slideShadows: true,
                        perSlideOffset: 8,
                        perSlideRotate: 2,
                      }}
                    >
                      <SwiperSlide>
                        <img src={carouselImg7} alt="Campamento Nan Charles" />
                        <div className="carousel-caption">
                          <p>Un hombre con una mascarilla observa el gran campamento de Nan Charles en Haití, formado por tiendas de campaña improvisadas con sábanas y mantas. Foto recopilada de El País por Gorka Lejarcegi.</p>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <img src={carouselImg8} alt="Hospital improvisado" />
                        <div className="carousel-caption">
                          <p>Hospital improvisado sin médicos ni medicinas suficientes, rodeado de lodo y basura en Haití. Foto recopilada de El País por Cristóbal Manuel.</p>
                        </div>
                      </SwiperSlide>
                    </Swiper>
                  </div>
                </div>
          </div>
        </div>

            {/* Social Disorders Section */}
        <div className="row mb-5">
          <div className="col-12">
                <h2 id="desordenes-sociales" className="mb-4">Desórdenes sociales - daños emocionales</h2>
                <p>
                  Los desórdenes sociales y los daños emocionales son consecuencias graves tras un terremoto. La desesperación y la falta de recursos pueden llevar a conductas inadecuadas, como robos, y la falta de comunicación genera confusión y pánico.
                </p>
                <p>
                  Los daños emocionales pueden ser tan significativos como los físicos. Las personas afectadas pueden experimentar:
                </p>
                <ul>
                  <li><strong>Estrés agudo y pánico:</strong> Miedo intenso, confusión y ataques de pánico durante y después del sismo.</li>
                  <li><strong>Trastorno de estrés postraumático (TEPT):</strong> Pesadillas, recuerdos recurrentes y evitar lugares relacionados con el terremoto.</li>
                  <li><strong>Ansiedad y angustia generalizada:</strong> Sensación constante de peligro y dificultad para concentrarse.</li>
                  <li><strong>Depresión:</strong> Pérdida de seguridad, desesperanza y duelo por pérdidas.</li>
                  <li><strong>Sentimientos de culpa y frustración:</strong> sentimientos de culpa por la muerte de un ser querido y sensación de impotencia. Frustración por la pérdida de pertenencias (por ejemplo; casa, carro, negocio, empleo, entre otros).</li>
                </ul>
                <p>
                  Los niños y adolescentes son más vulnerables, presentando pesadillas, miedo a la oscuridad, dificultades escolares y comportamientos agresivos.
                </p>

                <div className="row mt-4">
                  <div className="col-md-6 mb-4">
                    <div className="card fade-in">
                      <img 
                        src={Haiti_Saqueo} 
                        className="card-img-top" 
                        alt="Puerto Príncipe bajo escombros" 
                        style={{ height: "300px", objectFit: "contain", backgroundColor: "#f8f9fa", padding: "10px" }}
                      />
                      <div className="card-body bg-light">
                        <p className="card-text">Puerto Príncipe bajo escombros. Crece la tensión en las calles: jóvenes saquean almacenes y son enfrentados por guardias armados con palos y escopetas. Foto recopilada de El País por Cristóbal Manuel.</p>
              </div>
                    </div>
                  </div>
                  <div className="col-md-6 mb-4">
                    <div className="card fade-in">
                      <img 
                        src={Haiti_Saqueo2} 
                        className="card-img-top" 
                        alt="Saqueos en Puerto Príncipe" 
                        style={{ height: "300px", objectFit: "contain", backgroundColor: "#f8f9fa", padding: "10px" }}
                      />
                  <div className="card-body bg-light">
                        <p className="card-text">Los saqueos y la respuesta armada de las autoridades y los dueños de los almacenes se fueron haciendo más frecuentes en la zona comercial de Puerto Príncipe. Foto recopilada de El País por Gorka Lejarcegi.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

            {/* Famine Section */}
        <div className="row mb-5">
          <div className="col-12">
                <h2 id="hambruna" className="mb-4">Hambruna</h2>
                <p>
                  Después de un terremoto, la hambruna puede ser una crisis humanitaria grave, especialmente en regiones con infraestructuras frágiles y alta pobreza. Los factores que contribuyen incluyen:
                </p>
                <ul>
                  <li><strong>Interrupción de suministros alimentarios:</strong> La destrucción de carreteras, puentes y puertos dificulta el transporte de alimentos, y los mercados dañados limitan la distribución.</li>
                  <li><strong>Pérdida de cultivos y ganado:</strong> Los sismos pueden destruir campos de cultivo y reservas de alimentos, además de afectar al ganado, lo que reduce la disponibilidad de productos básicos.</li>
                  <li><strong>Colapso del comercio y economía local:</strong> La pérdida de ingresos disminuye la capacidad de compra de alimentos y el aumento de precios debido a la escasez agrava la inseguridad alimentaria.</li>
                </ul>
                <p>
                  <strong>Ejemplo histórico de hambruna tras terremoto:</strong>
                </p>
                <p>
                  Terremoto de Haití (2010): La destrucción del sistema agrícola y la escasez de alimentos provocaron crisis alimentarias prolongadas.
                </p>
                <p>
                  Según las <a href="https://news.un.org/es/story/2024/06/1530346" target="_blank" rel="noopener noreferrer">Naciones Unidas</a>, "Hay cinco millones de personas en Haití que sufren inseguridad alimentaria aguda, de las cuales 1,6 millones están clasificadas en situación de inseguridad alimentaria de emergencia. Estas son las cifras más altas registradas", declaró Jean-Martin Bauer, director del PMA (Programa Mundial de Alimentos) en el país.
                </p>
                  </div>
                </div>

            {/* Famine Carousel */}
            <div className="carousel-section">
              <div className="row mb-4">
                <div className="col-12">
                  <h2 className="mb-3 text-center">Crisis alimentaria</h2>
                  <div className="carousel-container">
                    <Swiper
                      effect={'cards'}
                      grabCursor={true}
                      modules={[EffectCards, Pagination, Navigation, Autoplay]}
                      autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                      }}
                      pagination={{
                        clickable: true,
                      }}
                      navigation={true}
                      className="mySwiper"
                      cardsEffect={{
                        slideShadows: true,
                        perSlideOffset: 8,
                        perSlideRotate: 2,
                      }}
                    >
                      <SwiperSlide>
                        <img src={carouselImg9} alt="Crisis alimentaria 1" />
                        <div className="carousel-caption">
                          <p>Foto recopilada de El País por Cristobal Manuel.</p>
              </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <img src={carouselImg10} alt="Crisis alimentaria 2" />
                        <div className="carousel-caption">
                          <p>Foto recopilada de infobae.</p>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <img src={carouselImg11} alt="Crisis alimentaria 3" />
                        <div className="carousel-caption">
                          <p>Foto recopilada de Manos Unidas.</p>
                        </div>
                      </SwiperSlide>
                    </Swiper>
                  </div>
                </div>
              </div>
            </div>

            {/* Geological Effects Section */}
            <div className="row mb-5">
              <div className="col-12">
                <h2 id="efectos-geologicos" className="mb-4">Efectos Geológicos</h2>
                <p className="text-justify">
                  Además de los daños en estructuras y servicios, los terremotos también pueden causar grandes cambios en el terreno. A veces, el suelo se hace grieta, se hunde (subsidencia), se desliza o incluso se vuelve como lodo por la cantidad de agua que tiene. Estos efectos en la tierra, conocidos como efectos geológicos, pueden hacer que el impacto del terremoto sea aún más peligroso, especialmente en zonas donde el suelo es inestable o hay pendientes. Algunos de los efectos geológicos son:
                </p>
              </div>
            </div>

            {/* Amplification Section */}
            <div className="row mb-5">
              <div className="col-12">
                <h3 id="amplificacion" className="mb-3">Amplificación</h3>
                <p className="text-justify">
                  Es el efecto que ocurre cuando las ondas sísmicas que recorren el interior de la Tierra, viajan a través de un medio sólido. Al llegar a un medio menos compacto, como arena o una roca porosa, se amplifican (se expanden). Esto provoca que el movimiento se intensifique y se refleje con mayor fuerza en la superficie. Como resultado, el terremoto se siente con mayor intensidad en las zonas donde el suelo es menos consolidado (débil, inestables, material suelto), elevando el riesgo de colapso en estructuras.
                </p>
                <div className="text-center my-4">
                <LazyMedia
                  src={AmplificacionGif}
                  alt="GIF de Amplificación 1"
                  className="img-fluid rounded mb-3"
                  style={{ maxWidth: '80%' }}
                />
                <LazyMedia
                  src={AmplificacionGif2}
                  alt="GIF de Amplificación 2"
                  className="img-fluid rounded"
                  style={{ maxWidth: '80%' }}
                />
                  <p className="text-muted mt-2">GIFs de Amplificación</p>
                </div>
              </div>
            </div>

            {/* Liquefaction Section */}
            <div className="row mb-5">
              <div className="col-12">
                <h3 id="licuefaccion" className="mb-3">Licuefacción o Licuación</h3>
                <p className="text-justify">
                  La licuefacción es un efecto notable en terrenos llanos, que se encuentran bajo el nivel del mar, como antiguos pantanos. Durante un terremoto, los suelos que están saturados de agua, cargados de sedimentos como arena y gravilla, pierden su firmeza y actúan como un líquido. Puede ocurrir en lugares donde el nivel freático (nivel de agua subterránea) del suelo está muy cerca de la superficie y sube durante el terremoto. La licuefacción provoca que los edificios y/o estructuras colapsen hacia uno de los lados debido a que el terreno pierde la capacidad de soportar su peso. Por ejemplo, durante un terremoto el suelo se comporta como arena movediza.
                </p>
                <div className="text-center my-4">
                  <LazyMedia
                    src={LiquefaccionGif}
                    type="video"
                    alt="GIF de Licuefacción"
                    className="img-fluid rounded"
                    style={{ maxWidth: '80%' }}
                  />
                  <p className="text-muted mt-2">GIF de Licuefacción</p>
                </div>

                <h5 className="mt-4">Efecto de licuefacción de evento grande del 2010</h5>
                <div className="table-responsive">
                  <table className="table table-bordered table-hover">
                    <thead className="thead-light" style={{ backgroundColor: 'rgb(57, 161, 221)', color: 'white' }}>
                      <tr>
                        <th>Fecha y localización</th>
                        <th>Magnitud</th>
                        <th>Fatalidades y/o pérdidas económicas</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>2010-2011 Secuencia Christchurch</td>
                        <td>Mw 7.1, Mw 6.3 subsequent aftershocks</td>
                        <td>Alrededor de 10 billones de dólares asociados con pérdidas por licuefacción.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Liquefaction Carousel */}
            <div className="carousel-section">
              <div className="row mb-4">
                <div className="col-12">
                  <h2 className="mb-3 text-center">Efectos de Licuefacción</h2>
                  <div className="carousel-container">
                    <Swiper
                      effect={'cards'}
                      grabCursor={true}
                      modules={[EffectCards, Pagination, Navigation, Autoplay]}
                      autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                      }}
                      pagination={{
                        clickable: true,
                      }}
                      navigation={true}
                      className="mySwiper"
                      cardsEffect={{
                        slideShadows: true,
                        perSlideOffset: 8,
                        perSlideRotate: 2,
                      }}
                    >
                      <SwiperSlide>
                        <img src={carouselImg12} alt="Licuefacción 1" />
                        <div className="carousel-caption">
                          <p>Licuefacción severa en áreas de residencias de Christchurch donde grandes cantidades de arena/ "silt" cubrieron calles y propiedades.</p>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <img src={carouselImg13} alt="Licuefacción 2" />
                        <div className="carousel-caption">
                          <p>En algunos casos, las capas alcanzaron espesores de hasta 60 cm, y se formaron "sand boils" (emanaciones de arena) de gran tamaño, indicando suelos altamente susceptibles a licuefacción (Cubrinovski et al., 2012)</p>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <img src={carouselImg14} alt="Licuefacción 3" />
                        <div className="carousel-caption">
                          <p>Foto recopilada de Red Sísmica de Puerto Rico.</p>
                        </div>
                      </SwiperSlide>
                    </Swiper>
                  </div>
                </div>
              </div>
            </div>

            {/* Niigata Liquefaction Parallax */}
            <div className="row mb-5">
              <div className="col-12">
                <Parallax
                  bgImage={NigataImg}
                  bgImageAlt="Licuefacción en Niigata"
                  strength={200}
                  style={{ borderRadius: '12px', overflow: 'hidden' }}
                >
                  <div style={{ height: '400px', position: 'relative' }}>
                    <div className="position-absolute bottom-0 left-0 w-100 p-4" style={{ 
                      background: 'rgba(0, 51, 102, 0.85)',
                      borderBottomLeftRadius: '12px',
                      borderBottomRightRadius: '12px',
                      maxHeight: '60%',
                      overflowY: 'auto'
                    }}>
                      <h5 className="text-white mb-2">Terremoto de Niigata (1964)</h5>
                      <p className="text-white mb-1" style={{ fontSize: '0.95rem', lineHeight: '1.4' }}>
                        Otro ejemplo de licuación es el terremoto de Niigata de magnitud 7.6 en 1964 en Japón. Donde la pérdida de resistencia del suelo provocó el volcamiento de edificios residenciales como se observa en la figura. Foto recopilada del Gobierno de México.
                      </p>
                    </div>
                  </div>
                </Parallax>
              </div>
            </div>

            {/* Landslides Section */}
            <div className="row mb-5">
              <div className="col-12">
                <h3 id="derrumbes" className="mb-3">Derrumbes</h3>
                <p className="text-justify">
                  Las pendientes inestables tienen el potencial de ceder durante un terremoto, desencadenando deslizamientos de tierra. Estos deslizamientos son el movimiento descendente repentino del suelo, rocas y materiales orgánicos afectados por la gravedad e influenciados por la forma del terreno. Las áreas más vulnerables son:
                </p>
                <ul>
                  <li>terrenos debajo de pendientes empinadas o en relieves topográficos altos.</li>
                  <li>suelos superficiales compuestos de materiales sueltos o poco compactados.</li>
                  <li>áreas propensas a desestabilizarse por saturación de grandes cantidades de agua.</li>
                  <li>zonas con vegetación mínima y alteraciones humanas.</li>
                </ul>

                <p className="text-justify">Los deslizamientos de tierra pueden verse de la siguiente manera:</p>

                <div className="row mt-4">
                  <div className="col-md-4 mb-4">
                    <div className="card h-100">
                      <img src={CaidaRoca} className="card-img-top" alt="Caída de roca" />
                      <div className="card-body bg-light">
                        <h5 className="card-title">Caída de roca</h5>
                        <p className="card-text text-justify">movimiento descendente de roca y/o tierra que se desprende de pendientes empinadas o acantilados.</p>
                        <p className="card-text small text-justify">Durante el terremoto de magnitud de 6.4 del 7 de enero de 2020 en Puerto Rico se generaron múltiples deslizamientos. Uno de ellos ocurrió en la Carretera #2 en Ponce. Foto por Red Sísmica de Puerto Rico.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 mb-4">
                    <div className="card h-100">
                      <img src={Flujo} className="card-img-top" alt="Flujo" />
                      <div className="card-body bg-light">
                        <h5 className="card-title">Flujo</h5>
                        <p className="card-text text-justify">Desplazamiento rápido en donde la roca y/o tierra se combinan con agua formando una mezcla que fluye ladera abajo.</p>
                        <p className="card-text small text-justify">El terremoto ocurrido en El Salvador el 13 de enero de 2001 de magnitud 7.7 provocó que 150 mil metros cúbicos de tierra se desprendieron de la Cordillera del Bálsamo, sepultando alrededor de 200 casas (Diario El Salvador, 2025).</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 mb-4">
                    <div className="card h-100">
                      <img src={Derrumbe} className="card-img-top" alt="Derrumbe" />
                      <div className="card-body bg-light">
                        <h5 className="card-title">Derrumbe</h5>
                        <p className="card-text text-justify">desprendimiento de roca y/o tierra que usualmente ocurre lentamente a lo largo de una superficie.</p>
                        <p className="card-text small text-justify">derrumbe ocurrido durante el terremoto del 7 de enero de 2020 en Ponce, Puerto Rico, tras el sismo de magnitud 6.4. Foto recopilada de https://geerassociation.org/.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <h5 className="mt-4">Posibles señales de un deslizamiento de tierra</h5>
                <div className="row">
                  <div className="col-md-6">
                    <div className="card border-0 mb-4">
                      <div className="card-header bg-primary text-white py-2">
                        <h5 className="mb-0 fs-6">En la naturaleza</h5>
                      </div>
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item py-2 text-justify">Árboles inclinados: son evidencia de que está ocurriendo un movimiento de tierra lento.</li>
                        <li className="list-group-item py-2 text-justify">El agua: comienza a brotar a través de la superficie. Los Riachuelos pueden secarse repentinamente debido a que los deslizamientos obstruyen su curso.</li>
                        <li className="list-group-item py-2 text-justify">Grietas en el terreno: indican movimiento de un deslizamiento de tierra y facilitan la infiltración de agua.</li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="card border-0 mb-4">
                      <div className="card-header bg-primary text-white py-2">
                        <h5 className="mb-0 fs-6">En la infraestructura</h5>
                      </div>
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item py-2 text-justify">Distorsión de estructuras, como tuberías rotas, desplazadas o dislocadas.</li>
                        <li className="list-group-item py-2 text-justify">Grietas que se extienden en las calles, paredes, pisos de las casas o alrededor de ventanas y puertas.</li>
                        <li className="list-group-item py-2 text-justify">Pisos, postes o paredes inclinados.</li>
                        <li className="list-group-item py-2 text-justify">Ventanas o puertas atoradas.</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <h5 className="mt-4">Efectos de grandes deslizamiento de tierra desde 1900</h5>
                <div className="table-responsive">
                  <table className="table table-bordered table-hover">
                    <thead className="thead-light" style={{ backgroundColor: 'rgb(57, 161, 221)', color: 'white' }}>
                      <tr>
                        <th>Fecha y localización</th>
                        <th>Magnitud</th>
                        <th>Fatalidades por deslizamientos</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td>1920 Haiyuan</td><td>Mw 8.3/ 8.6</td><td>136,700 muertes</td></tr>
                      <tr><td>1970 Ancash</td><td>Mw 7.9</td><td>26,700 muertes</td></tr>
                      <tr><td>2005 Kashmir</td><td>Mw 7.6</td><td>26,500 muertes</td></tr>
                      <tr><td>2008 Sichuan</td><td>Mw 7.9</td><td>26,500 muertes</td></tr>
                      <tr><td>1949 Khait</td><td>Mw 7.6</td><td>11,760 muertes</td></tr>
                      <tr><td>1976 Irian Jaya</td><td>Mw 7.1</td><td>5,520 muertes</td></tr>
                      <tr><td>1907 Karatag</td><td>Mw 7.2</td><td>4,900 muertes</td></tr>
                      <tr><td>1917 Daguan</td><td>Mw 7.3</td><td>1,800 muertes</td></tr>
                      <tr><td>1950 Assam, Chayu</td><td>Mw 8.6</td><td>1,450 muertes</td></tr>
                      <tr><td>1998 Badakhshan and Takhar Provinces</td><td>Mw 6.5</td><td>1,350 muertes</td></tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-muted mt-2">Recopilada del artículo "Losses Associated with Secondary Effects in Earthquakes" modificada por Red Sísmica de Puerto Rico.</p>
              </div>
            </div>

            {/* Fires Section */}
            <div className="row mb-5">
              <div className="col-12">
                <h3 id="incendios" className="mb-3">Incendios</h3>
                <p className="text-justify">
                  Otra de las consecuencias de los terremotos son los incendios. Este efecto suele ser más severo y común luego de un terremoto. El fuego puede iniciarse debido a escapes de gas, cortocircuitos, caída de tendidos eléctricos, derrames de químicos entre otros. Un ejemplo destacado de esta amenaza es el terremoto de 1906 en San Francisco, California, donde los incendios causaron más víctimas que el propio sismo.
                </p>

                <h5 className="mt-4">Ejemplos de grandes incendios causados por terremotos</h5>
                <div className="table-responsive">
                  <table className="table table-bordered table-hover">
                    <thead className="thead-light" style={{ backgroundColor: 'rgb(57, 161, 221)', color: 'white' }}>
                      <tr>
                        <th>Fecha y localización</th>
                        <th>Magnitud</th>
                        <th>Fatalidades y/o pérdidas económicas</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td>1923 Great Kanto</td><td>Mw 7.9</td><td>92,190 muertes; ⅔ de los daños ($40 billones + CPI ajustados); ca. $220 Billones</td></tr>
                      <tr><td>1906 San Francisco</td><td>Mw 7.9</td><td>1,800 muertes; ca. ⅚ de daños (ca. $10 billones CPI ajustado); $50.6 billones</td></tr>
                      <tr><td>1995 Great Hanshin, Aawji, Kobe</td><td>Mw 6.9</td><td>570 muertes</td></tr>
                      <tr><td>1948 Fukui</td><td>Mw 7</td><td>513 muertes</td></tr>
                      <tr><td>1925 Dali</td><td>Ms 7</td><td>400 muertes</td></tr>
                      <tr><td>1906 Valparaiso</td><td>Mw 8.5</td><td>388 muertes</td></tr>
                    </tbody>
                  </table>
              </div>
                <p className="text-muted mt-2">Recopilada del artículo "Losses Associated with Secondary Effects in Earthquakes" modificada por Red Sísmica de Puerto Rico.</p>

                <div className="row mt-3">
                  <div className="col-md-4 mb-4">
                    <div className="card h-100">
                      <div className="card-header bg-primary text-white">
                        <h5 className="mb-0">Ahora</h5>
                      </div>
                      <div className="card-body">
                        <p className="card-text text-justify">
                          Conoce las salidas de emergencias, en caso de que estén obstruidas puedes utilizar las ventanas como vía de escape. En caso de que veas humo por debajo de la puerta o al tocar la cerradura está caliente no abras la puerta. Considera dentro de tu plan de emergencia un plan de escape en caso de incendios.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 mb-4">
                    <div className="card h-100">
                      <div className="card-header bg-warning">
                        <h5 className="mb-0">Durante</h5>
                      </div>
                      <div className="card-body">
                        <p className="card-text text-justify">
                          Agáchate y desplázate con precaución hacia la salida. Trata de cubrirte la boca y la nariz, respira la menor cantidad de humo posible y mantén la calma. Si tu ropa se prende en fuego, detente, no corras. Déjate caer al suelo y rueda para apagar el fuego.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 mb-4">
                    <div className="card h-100">
                      <div className="card-header bg-success text-white">
                        <h5 className="mb-0">Después</h5>
                      </div>
                      <div className="card-body">
                        <p className="card-text text-justify">
                          No entre a la casa, escuela u otro lugar frecuentado a menos que los bomberos lo autorice. Si nota que tiene una quemadura o dificultad para respirar, busque ayuda médica de inmediato. Identifique las lecciones aprendidas y aspectos por mejorar. Mantenga su plan actualizado.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row mt-4 mb-4">
                  <div className="col-12 text-center">
                    <img 
                      src={Incendio} 
                      alt="Incendio en California tras terremoto" 
                      className="img-fluid rounded shadow" 
                      style={{ maxWidth: '80%', maxHeight: '500px', objectFit: 'contain' }} 
                    />
                    <p className="text-muted mt-2">Incendio en California tras un terremoto. Estos desastres son uno de los efectos secundarios más peligrosos de los sismos.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Tsunami Section */}
            <div className="row mb-5">
              <div className="col-12">
                <h3 id="tsunami" className="mb-3">Tsunami</h3>
                <p className="text-justify">
                  Uno de los efectos secundarios que puede desencadenar un terremoto es la formación de un tsunami. La palabra 'tsunami' proviene del japonés y se traduce como 'ola de puerto'. En español, lo conocemos como maremoto. Un tsunami consiste en una serie de olas generadas cuando una gran cantidad de agua es desplazada por eventos como un terremoto, una erupción volcánica, un deslizamiento submarino o aéreo, impacto de un meteorito o algún disturbio en el fondo del agua.
                </p>

                <div className="text-center my-4">
                  <LazyMedia
                    src={tsunamiImg}
                    type="video"
                    alt="Video de la NOAA"
                    className="img-fluid rounded fade-in"
                    style={{ maxWidth: '80%' }}
                  />
                  <p className="text-muted mt-2">Video de la NOAA</p>
                </div>

                <h5 className="mt-4">Alaska (1958)</h5>
                <p className="text-justify">
                  Por ejemplo, el tsunami de Alaska de 1958 ilustra claramente este fenómeno. Según el estudio de Lander en 1996, una inmensa masa de roca se desplomó desde una altura de 3,000 pies en las aguas de la Cala de Gilbert, produciendo un tsunami cuyo 'run-up' inicial o elevación de la ola sobre el nivel del mar, alcanzó los impresionantes 1,720 pies.
                </p>

                <div className="text-center my-4">
                  <img src={TsunamiAlaska} className="img-fluid rounded fade-in" alt="Lituya Bay, 1958" style={{ maxWidth: '80%' }} />
                  <p className="text-muted mt-2">Lituya Bay, 1958. Foto recopilada del Servicio Geológico de Estados Unidos (USGS, por sus siglas en inglés).</p>
                </div>

                <h5 className="mt-4">Japón (2011)</h5>
                <p className="text-justify">
                  El 11 de marzo de 2011, un sismo de magnitud 9.1 (Mw) ocurrió frente a la costa noreste de Honshu, en la zona de subducción conocida como la Fosa de Japón. El terremoto provocó un tsunami que impactó la costa en menos de 30 minutos, sobrepasando las barreras de contención y provocando fallos en tres reactores nucleares. El terremoto y tsunami de Tohoku de 2011, conocido también como el Gran Terremoto y Tsunami del Este de Japón, dejó ~18,000 muertos, entre ellos varios miles de personas desaparecidas. Este evento sísmico fue el más fuerte registrado en la historia de Japón y el tercero más potente a nivel mundial desde 1900.
                </p>

                <div className="text-center my-4">
                  <img src={TsunamiJapon} className="img-fluid rounded fade-in" alt="Foto de Katherine Mueller, Federación Internacional de la Cruz Roja" style={{ maxWidth: '80%' }} />
                  <p className="text-muted mt-2">Foto de Katherine Mueller, Federación Internacional de la Cruz Roja.</p>
                </div>

                <h5 className="mt-4">Efectos de tsunami causados por terremotos desde 1900</h5>
                <div className="table-responsive">
                  <table className="table table-bordered table-hover">
                    <thead className="thead-light" style={{ backgroundColor: 'rgb(57, 161, 221)', color: 'white' }}>
                      <tr>
                        <th>Fecha y localización</th>
                        <th>Magnitud</th>
                        <th>Fatalidades y/o pérdidas económicas</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td>2004 Océano Índico</td><td>Mw 9.1</td><td>168, (Indonesia), 35,300 (Sri Lanka), 15,800 (Tailandia) muertes, y $10 billones</td></tr>
                      <tr><td>2011 Tohoku</td><td>Mw 9.0</td><td>17,931 muertes / $120 billones</td></tr>
                      <tr><td>1941 Islas Andaman</td><td>Mw 7.7</td><td>7,960 muertes</td></tr>
                      <tr><td>1976 Moro Gulf</td><td>Mw 8</td><td>6,229 muertes</td></tr>
                      <tr><td>1945 Makran</td><td>Mw 8</td><td>3,700 muertes</td></tr>
                      <tr><td>1933 Sanriku-oki</td><td>Mw 8.4</td><td>3,002 muertes</td></tr>
                      <tr><td>1998 Papua New Guinea</td><td>Mw 7</td><td>2,683 muertes</td></tr>
                      <tr><td>1908 Messina</td><td>Mw 7.24</td><td>2,578 muertes</td></tr>
                      <tr><td>1992 Flores</td><td>Mw 7.7</td><td>2,519 muertes</td></tr>
                      <tr><td>1952 Kamchatka</td><td>Mw 9.0</td><td>2,336 muertes</td></tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-muted mt-2">Recopilada del artículo "Losses Associated with Secondary Effects in Earthquakes" modificada por Red Sísmica de Puerto Rico.</p>
              </div>
            </div>

            {/* Final notes */}
            <div className="row mb-5">
              <div className="col-12">
                <p className="text-justify">
                  No todos los terremotos generan efectos geológicos secundarios, también pueden ocurrir otros como:
                </p>
                <ul>
                  <li>Colapsos de cavernas (cuevas)</li>
                  <li>Formación de sumideros</li>
                  <li>Subsidencia (hundimiento del terreno)</li>
                </ul>
                <p className="text-justify">
                  Al momento de realizar su plan de emergencia considere tanto los efectos geológicos como no geológicos de un terremoto, ya que estar preparado para todas las posibles consecuencias puede marcar la diferencia entre el riesgo y la seguridad.
                </p>
              </div>
            </div>

        {/* Related content */}
        <div className="row mb-5">
          <div className="col-12">
            <h2 className="mb-4">Contenido relacionado</h2>
            <div className="row">
              <div className="col-md-4 mb-4">
                <div className="card h-100">
                  <div className="card-body">
                    <h5 className="card-title">¿Qué es un Terremoto?</h5>
                    <p className="card-text">Una explicación detallada sobre la formación y características de los terremotos.</p>
                    <Link to="https://redsismica.uprm.edu/spanish/educacion/informacion_terremotos.php" className="btn btn-primary">Ver más</Link>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="card h-100">
                  <div className="card-body">
                    <h5 className="card-title">Preparación ante Terremotos</h5>
                    <p className="card-text">Guía completa sobre cómo prepararse y actuar durante un terremoto.</p>
                    <Link to="https://redsismica.uprm.edu/spanish/educacion/preparacion/index.php" className="btn btn-primary">Ver más</Link>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="card h-100">
                  <div className="card-body">
                    <h5 className="card-title">Recursos Educativos</h5>
                    <p className="card-text">Aquí podrá ver materiales educativos, folletos, nuestro currículo de tsunami y nuestro catálogo de noticias de la RSPR.</p>
                    <Link to="/recursos" className="btn btn-primary">Ver más</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* References */}
        <div className="row mb-5">
          <div className="col-12">
            <h2 className="mb-4">Referencias</h2>
            <ol className="list-group list-group-numbered">
              <li className="list-group-item" style={{ overflowWrap: 'break-word', wordWrap: 'break-word', hyphens: 'auto' }}>Centro Nacional de Prevención de Desastres. (2024, 3 de abril). <em>60 aniversario de los sismos de Alaska y de Niigata: Efectos concatenados: tsunami y licuación de suelos.</em> <a href="https://www.gob.mx/cenapred/articulos/60-aniversario-de-los-sismos-de-alaska-y-de-niigata-efectos-concatenados-tsunami-y-licuacion-de-suelos" target="_blank" rel="noopener noreferrer" style={{ wordBreak: 'break-all' }}>https://www.gob.mx/cenapred/articulos/60-aniversario-de-los-sismos-de-alaska-y-de-niigata-efectos-concatenados-tsunami-y-licuacion-de-suelos</a></li>
              <li className="list-group-item" style={{ overflowWrap: 'break-word', wordWrap: 'break-word', hyphens: 'auto' }}>Cubrinovski, M., Henderson, D., & Bradley, B. A. (2012). <em>Liquefaction impacts in residential areas in the 2010–2011 Christchurch earthquakes.</em> International Symposium on Engineering Lessons Learned from the Giant Earthquake, Tokyo, Japan.</li>
              <li className="list-group-item" style={{ overflowWrap: 'break-word', wordWrap: 'break-word', hyphens: 'auto' }}>Daniell, J. E., Schaefer, A. M., & Wenzel, F. (2017). Losses associated with secondary effects in earthquakes. <em>Frontiers in Built Environment, 3</em>, Article 30. <a href="https://doi.org/10.3389/fbuil.2017.00030" target="_blank" rel="noopener noreferrer" style={{ wordBreak: 'break-all' }}>https://doi.org/10.3389/fbuil.2017.00030</a></li>
              <li className="list-group-item" style={{ overflowWrap: 'break-word', wordWrap: 'break-word', hyphens: 'auto' }}>Diario El Salvador. (2025, 13 de enero). <em>Terremoto del 13 de enero de 2001: La mañana en que El Salvador experimentó el poder destructivo de la naturaleza.</em> <a href="https://diarioelsalvador.com/terremoto-del-13-de-enero-de-2001-la-manana-en-que-el-salvador-experimento-el-poder-destructivo-de-la-naturaleza/612171/" target="_blank" rel="noopener noreferrer" style={{ wordBreak: 'break-all' }}>https://diarioelsalvador.com/terremoto-del-13-de-enero-de-2001-la-manana-en-que-el-salvador-experimento-el-poder-destructivo-de-la-naturaleza/612171/</a></li>
              <li className="list-group-item" style={{ overflowWrap: 'break-word', wordWrap: 'break-word', hyphens: 'auto' }}>El País. (2006, 18 de abril). <em>100 años del terremoto en San Francisco.</em> <a href="https://elpais.com/sociedad/2006/04/18/album/1145311201_910215.html" target="_blank" rel="noopener noreferrer" style={{ wordBreak: 'break-all' }}>https://elpais.com/sociedad/2006/04/18/album/1145311201_910215.html</a></li>
              <li className="list-group-item" style={{ overflowWrap: 'break-word', wordWrap: 'break-word', hyphens: 'auto' }}>El País. (2020, 9 de enero). <em>Terremoto de Haití, la memoria fotográfica de la tragedia.</em> <a href="https://elpais.com/elpais/2020/01/09/album/1578569529_549176.html" target="_blank" rel="noopener noreferrer" style={{ wordBreak: 'break-all' }}>https://elpais.com/elpais/2020/01/09/album/1578569529_549176.html</a></li>
              <li className="list-group-item" style={{ overflowWrap: 'break-word', wordWrap: 'break-word', hyphens: 'auto' }}>Infobae. (2025, 12 de enero). <em>A 15 años del terremoto de Haití que sepultó a 300 mil personas: los estragos de la corrupción y las donaciones perdidas.</em> <a href="https://www.infobae.com/historias/2025/01/12/a-15-anos-del-terremoto-de-haiti-que-sepulto-a-300-mil-personas-los-estragos-de-la-corrupcion-y-las-donaciones-perdidas/" target="_blank" rel="noopener noreferrer" style={{ wordBreak: 'break-all' }}>https://www.infobae.com/historias/2025/01/12/a-15-anos-del-terremoto-de-haiti-que-sepulto-a-300-mil-personas-los-estragos-de-la-corrupcion-y-las-donaciones-perdidas/</a></li>
              <li className="list-group-item" style={{ overflowWrap: 'break-word', wordWrap: 'break-word', hyphens: 'auto' }}>Manos Unidas. (2020, 9 de enero). <em>Diez años después del terremoto, la situación sigue siendo caótica en Haití.</em> <a href="https://www.manosunidas.org/noticia/diez-anos-despues-del-terremoto-situacion-sigue-siendo-caotica-haiti" target="_blank" rel="noopener noreferrer" style={{ wordBreak: 'break-all' }}>https://www.manosunidas.org/noticia/diez-anos-despues-del-terremoto-situacion-sigue-siendo-caotica-haiti</a></li>
              <li className="list-group-item" style={{ overflowWrap: 'break-word', wordWrap: 'break-word', hyphens: 'auto' }}>Milenio. (2021, 11 de marzo). <em>Tsunami Japón 2011: consecuencias y actualidad.</em> <a href="https://www.milenio.com/internacional/asia-y-oceania/tsunami-japon-2011-consecuencias-y-actualidad" target="_blank" rel="noopener noreferrer" style={{ wordBreak: 'break-all' }}>https://www.milenio.com/internacional/asia-y-oceania/tsunami-japon-2011-consecuencias-y-actualidad</a></li>
              <li className="list-group-item" style={{ overflowWrap: 'break-word', wordWrap: 'break-word', hyphens: 'auto' }}>Naciones Unidas. (2024, 6 de junio). <em>Al menos 300.000 personas afectadas por las lluvias e inundaciones en Haití.</em> <a href="https://news.un.org/es/story/2024/06/1530346" target="_blank" rel="noopener noreferrer" style={{ wordBreak: 'break-all' }}>https://news.un.org/es/story/2024/06/1530346</a></li>
              <li className="list-group-item" style={{ overflowWrap: 'break-word', wordWrap: 'break-word', hyphens: 'auto' }}>National Archives and Records Administration. (s.f.). <em>El terremoto de San Francisco, 1906.</em> <a href="https://www.archives.gov/espanol/el-terremoto-de-san-francisco" target="_blank" rel="noopener noreferrer" style={{ wordBreak: 'break-all' }}>https://www.archives.gov/espanol/el-terremoto-de-san-francisco</a></li>
              <li className="list-group-item" style={{ overflowWrap: 'break-word', wordWrap: 'break-word', hyphens: 'auto' }}>Parajuli, J., & Haynes, K. E. (2016). The earthquake impact on telecommunications infrastructure in Nepal: A preliminary spatial assessment. <em>Regional Science Policy & Practice, 8</em>(3), 94–109. <a href="https://doi.org/10.1111/rsp3.12075" target="_blank" rel="noopener noreferrer" style={{ wordBreak: 'break-all' }}>https://doi.org/10.1111/rsp3.12075</a></li>
              <li className="list-group-item" style={{ overflowWrap: 'break-word', wordWrap: 'break-word', hyphens: 'auto' }}>Primera Hora. (2024, 12 de enero). <em>Residentes de Guánica se sienten hundidos en el estancamiento económico.</em> <a href="https://www.primerahora.com/noticias/gobierno-politica/notas/residentes-de-guanica-se-sienten-hundidos-en-el-estancamiento-economico/" target="_blank" rel="noopener noreferrer" style={{ wordBreak: 'break-all' }}>https://www.primerahora.com/noticias/gobierno-politica/notas/residentes-de-guanica-se-sienten-hundidos-en-el-estancamiento-economico/</a></li>
              <li className="list-group-item" style={{ overflowWrap: 'break-word', wordWrap: 'break-word', hyphens: 'auto' }}>UNICEF. (2021, 17 de agosto). <em>Más de medio millón de niños y niñas afectados por el terremoto de Haití.</em> <a href="https://www.unicef.org/lac/comunicados-prensa/mas-de-medio-millon-de-ninos-y-ninas-afectados-por-el-terremoto-de-haiti" target="_blank" rel="noopener noreferrer" style={{ wordBreak: 'break-all' }}>https://www.unicef.org/lac/comunicados-prensa/mas-de-medio-millon-de-ninos-y-ninas-afectados-por-el-terremoto-de-haiti</a></li>
              <li className="list-group-item" style={{ overflowWrap: 'break-word', wordWrap: 'break-word', hyphens: 'auto' }}>UNICEF. (2021, 19 de agosto). <em>Terremoto en Haití: más de medio millón de niños y niñas en riesgo de contraer enfermedades transmitidas por el agua.</em> <a href="https://www.unicef.org/lac/comunicados-prensa/terremoto-haiti-mas-de-medio-millon-de-ninos-y-ninas-en-riesgo-de-contraer-enfermedades-transmitidas-por-el-agua" target="_blank" rel="noopener noreferrer" style={{ wordBreak: 'break-all' }}>https://www.unicef.org/lac/comunicados-prensa/terremoto-haiti-mas-de-medio-millon-de-ninos-y-ninas-en-riesgo-de-contraer-enfermedades-transmitidas-por-el-agua</a></li>
              <li className="list-group-item" style={{ overflowWrap: 'break-word', wordWrap: 'break-word', hyphens: 'auto' }}>UNICEF. (2025, 30 de marzo). <em>Millones de niños y niñas en grave peligro tras el terremoto más mortífero de Myanmar.</em> <a href="https://www.unicef.org/es/comunicados-prensa/millones-ninos-grave-peligro-tras-terremoto-mas-mort%C3%ADfero-myanmar" target="_blank" rel="noopener noreferrer" style={{ wordBreak: 'break-all' }}>https://www.unicef.org/es/comunicados-prensa/millones-ninos-grave-peligro-tras-terremoto-mas-mort%C3%ADfero-myanmar</a></li>
              <li className="list-group-item" style={{ overflowWrap: 'break-word', wordWrap: 'break-word', hyphens: 'auto' }}>UNICEF. (s.f.). <em>UNICEF's response for earthquake-affected families in Yamethin Township.</em> <a href="https://weshare.unicef.org/Package/2AM4086EAFTZ" target="_blank" rel="noopener noreferrer" style={{ wordBreak: 'break-all' }}>https://weshare.unicef.org/Package/2AM4086EAFTZ</a></li>
              <li className="list-group-item" style={{ overflowWrap: 'break-word', wordWrap: 'break-word', hyphens: 'auto' }}>U.S. Geological Survey. (1958). <em>Lituya Bay, 1958 [Fotografía].</em> USGS. <a href="https://www.usgs.gov/media/images/lituya-bay-1958" target="_blank" rel="noopener noreferrer" style={{ wordBreak: 'break-all' }}>https://www.usgs.gov/media/images/lituya-bay-1958</a></li>
            </ol>
          </div>
        </div>
          </div>
        </div>

        {/* Sticky sidebar index - only render when not small screen */}
        {!isSmallScreen && (
          <div className="col-md-3">
            <div className="position-sticky" style={{ top: '120px' }}>
              <div className="card sticky-index" style={{ borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)', maxHeight: '80vh', overflowY: 'auto' }}>
                <div className="card-header py-2" style={{ backgroundColor: 'rgb(57, 161, 221)', color: 'white', borderTopLeftRadius: '8px', borderTopRightRadius: '8px' }}>
                  <h6 className="mb-0">Índice del Artículo</h6>
                </div>
                <div className="card-body p-0">
                  <ul className="nav flex-column nav-pills" style={{ fontSize: '0.85rem' }}>
                    <li className="nav-item">
                      <a className="nav-link text-dark py-1 px-3 border-bottom" href="#efectos-tipos" onClick={(e) => scrollToSection(e, 'efectos-tipos')}>
                        <i className="fas fa-chevron-right mr-1" style={{ fontSize: '0.7rem', color: 'rgb(57, 161, 221)' }}></i> <span style={{ color: '#000000' }}>Tipos de efectos</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link text-dark py-1 px-3 border-bottom" href="#efectos-no-geologicos" onClick={(e) => scrollToSection(e, 'efectos-no-geologicos')}>
                        <i className="fas fa-chevron-right mr-1" style={{ fontSize: '0.7rem', color: 'rgb(57, 161, 221)' }}></i> <span style={{ color: '#000000', fontWeight: 'bold' }}>Efectos no geológicos</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link text-dark py-1 px-3 border-bottom" href="#agua" style={{ paddingLeft: '1.5rem' }} onClick={(e) => scrollToSection(e, 'agua')}>
                        <i className="fas fa-angle-right mr-1" style={{ fontSize: '0.7rem', color: 'rgb(57, 161, 221)' }}></i> <span style={{ color: '#000000' }}>Interrupción de agua</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link text-dark py-1 px-3 border-bottom" href="#electricidad" style={{ paddingLeft: '1.5rem' }} onClick={(e) => scrollToSection(e, 'electricidad')}>
                        <i className="fas fa-angle-right mr-1" style={{ fontSize: '0.7rem', color: 'rgb(57, 161, 221)' }}></i> <span style={{ color: '#000000' }}>Interrupción de electricidad</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link text-dark py-1 px-3 border-bottom" href="#comunicacion" style={{ paddingLeft: '1.5rem' }} onClick={(e) => scrollToSection(e, 'comunicacion')}>
                        <i className="fas fa-angle-right mr-1" style={{ fontSize: '0.7rem', color: 'rgb(57, 161, 221)' }}></i> <span style={{ color: '#000000' }}>Problemas de comunicación</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link text-dark py-1 px-3 border-bottom" href="#desplazamiento" style={{ paddingLeft: '1.5rem' }} onClick={(e) => scrollToSection(e, 'desplazamiento')}>
                        <i className="fas fa-angle-right mr-1" style={{ fontSize: '0.7rem', color: 'rgb(57, 161, 221)' }}></i> <span style={{ color: '#000000' }}>Desplazamiento de personas</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link text-dark py-1 px-3 border-bottom" href="#salud-publica" style={{ paddingLeft: '1.5rem' }} onClick={(e) => scrollToSection(e, 'salud-publica')}>
                        <i className="fas fa-angle-right mr-1" style={{ fontSize: '0.7rem', color: 'rgb(57, 161, 221)' }}></i> <span style={{ color: '#000000' }}>Problemas de salud pública</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link text-dark py-1 px-3 border-bottom" href="#desordenes-sociales" style={{ paddingLeft: '1.5rem' }} onClick={(e) => scrollToSection(e, 'desordenes-sociales')}>
                        <i className="fas fa-angle-right mr-1" style={{ fontSize: '0.7rem', color: 'rgb(57, 161, 221)' }}></i> <span style={{ color: '#000000' }}>Desórdenes sociales</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link text-dark py-1 px-3 border-bottom" href="#hambruna" style={{ paddingLeft: '1.5rem' }} onClick={(e) => scrollToSection(e, 'hambruna')}>
                        <i className="fas fa-angle-right mr-1" style={{ fontSize: '0.7rem', color: 'rgb(57, 161, 221)' }}></i> <span style={{ color: '#000000' }}>Hambruna</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link text-dark py-1 px-3 border-bottom" href="#efectos-geologicos" onClick={(e) => scrollToSection(e, 'efectos-geologicos')}>
                        <i className="fas fa-chevron-right mr-1" style={{ fontSize: '0.7rem', color: 'rgb(57, 161, 221)' }}></i> <span style={{ color: '#000000', fontWeight: 'bold' }}>Efectos geológicos</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link text-dark py-1 px-3 border-bottom" href="#amplificacion" style={{ paddingLeft: '1.5rem' }} onClick={(e) => scrollToSection(e, 'amplificacion')}>
                        <i className="fas fa-angle-right mr-1" style={{ fontSize: '0.7rem', color: 'rgb(57, 161, 221)' }}></i> <span style={{ color: '#000000' }}>Amplificación</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link text-dark py-1 px-3 border-bottom" href="#licuefaccion" style={{ paddingLeft: '1.5rem' }} onClick={(e) => scrollToSection(e, 'licuefaccion')}>
                        <i className="fas fa-angle-right mr-1" style={{ fontSize: '0.7rem', color: 'rgb(57, 161, 221)' }}></i> <span style={{ color: '#000000' }}>Licuefacción</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link text-dark py-1 px-3 border-bottom" href="#derrumbes" style={{ paddingLeft: '1.5rem' }} onClick={(e) => scrollToSection(e, 'derrumbes')}>
                        <i className="fas fa-angle-right mr-1" style={{ fontSize: '0.7rem', color: 'rgb(57, 161, 221)' }}></i> <span style={{ color: '#000000' }}>Derrumbes</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link text-dark py-1 px-3 border-bottom" href="#incendios" style={{ paddingLeft: '1.5rem' }} onClick={(e) => scrollToSection(e, 'incendios')}>
                        <i className="fas fa-angle-right mr-1" style={{ fontSize: '0.7rem', color: 'rgb(57, 161, 221)' }}></i> <span style={{ color: '#000000' }}>Incendios</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link text-dark py-1 px-3" href="#tsunami" style={{ paddingLeft: '1.5rem' }} onClick={(e) => scrollToSection(e, 'tsunami')}>
                        <i className="fas fa-angle-right mr-1" style={{ fontSize: '0.7rem', color: 'rgb(57, 161, 221)' }}></i> <span style={{ color: '#000000' }}>Tsunami</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
        </div>
      </div>

      {/* Mobile Index Button & Slide-up Panel */}
      {isSmallScreen && (
        <>
          <button 
            onClick={toggleMobileIndex}
            className="position-fixed d-flex align-items-center justify-content-center"
            style={{
              bottom: '20px',
              right: '20px',
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              backgroundColor: 'rgb(57, 161, 221)',
              color: 'white',
              border: 'none',
              boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
              zIndex: 1000,
              transition: 'transform 0.3s ease'
            }}
            aria-label={isMobileIndexVisible ? "Cerrar índice" : "Abrir índice"}
          >
            <i className={`fas fa-${isMobileIndexVisible ? 'times' : 'list'}`} style={{ fontSize: '1.2rem' }}></i>
          </button>

          <div 
            className="position-fixed w-100"
            style={{
              bottom: isMobileIndexVisible ? '0' : '-100%',
              left: '0',
              backgroundColor: 'white',
              borderTopLeftRadius: '15px',
              borderTopRightRadius: '15px',
              boxShadow: '0 -2px 10px rgba(0,0,0,0.1)',
              transition: 'bottom 0.3s ease-in-out',
              zIndex: 999,
              maxHeight: '80vh',
              overflowY: 'auto'
            }}
          >
            <div className="card border-0">
              <div className="card-header py-2 d-flex justify-content-between align-items-center" style={{ backgroundColor: 'rgb(57, 161, 221)', color: 'white', borderTopLeftRadius: '15px', borderTopRightRadius: '15px' }}>
                <h6 className="mb-0">Índice del Artículo</h6>
                <button 
                  onClick={toggleMobileIndex} 
                  className="btn btn-sm text-white"
                  style={{ background: 'none', border: 'none' }}
                >
                  <i className="fas fa-times"></i>
                </button>
              </div>
              <div className="card-body p-0">
                <ul className="nav flex-column nav-pills" style={{ fontSize: '0.85rem' }}>
                  <li className="nav-item">
                    <a className="nav-link text-dark py-2 px-3 border-bottom" href="#efectos-tipos" onClick={(e) => scrollToSection(e, 'efectos-tipos')}>
                      <i className="fas fa-chevron-right mr-1" style={{ fontSize: '0.7rem', color: 'rgb(57, 161, 221)' }}></i> <span style={{ color: '#000000' }}>Tipos de efectos</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-dark py-2 px-3 border-bottom" href="#efectos-no-geologicos" onClick={(e) => scrollToSection(e, 'efectos-no-geologicos')}>
                      <i className="fas fa-chevron-right mr-1" style={{ fontSize: '0.7rem', color: 'rgb(57, 161, 221)' }}></i> <span style={{ color: '#000000', fontWeight: 'bold' }}>Efectos no geológicos</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-dark py-2 px-3 border-bottom" href="#agua" style={{ paddingLeft: '1.5rem' }} onClick={(e) => scrollToSection(e, 'agua')}>
                      <i className="fas fa-angle-right mr-1" style={{ fontSize: '0.7rem', color: 'rgb(57, 161, 221)' }}></i> <span style={{ color: '#000000' }}>Interrupción de agua</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-dark py-2 px-3 border-bottom" href="#electricidad" style={{ paddingLeft: '1.5rem' }} onClick={(e) => scrollToSection(e, 'electricidad')}>
                      <i className="fas fa-angle-right mr-1" style={{ fontSize: '0.7rem', color: 'rgb(57, 161, 221)' }}></i> <span style={{ color: '#000000' }}>Interrupción de electricidad</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-dark py-2 px-3 border-bottom" href="#comunicacion" style={{ paddingLeft: '1.5rem' }} onClick={(e) => scrollToSection(e, 'comunicacion')}>
                      <i className="fas fa-angle-right mr-1" style={{ fontSize: '0.7rem', color: 'rgb(57, 161, 221)' }}></i> <span style={{ color: '#000000' }}>Problemas de comunicación</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-dark py-2 px-3 border-bottom" href="#desplazamiento" style={{ paddingLeft: '1.5rem' }} onClick={(e) => scrollToSection(e, 'desplazamiento')}>
                      <i className="fas fa-angle-right mr-1" style={{ fontSize: '0.7rem', color: 'rgb(57, 161, 221)' }}></i> <span style={{ color: '#000000' }}>Desplazamiento de personas</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-dark py-2 px-3 border-bottom" href="#salud-publica" style={{ paddingLeft: '1.5rem' }} onClick={(e) => scrollToSection(e, 'salud-publica')}>
                      <i className="fas fa-angle-right mr-1" style={{ fontSize: '0.7rem', color: 'rgb(57, 161, 221)' }}></i> <span style={{ color: '#000000' }}>Problemas de salud pública</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-dark py-2 px-3 border-bottom" href="#desordenes-sociales" style={{ paddingLeft: '1.5rem' }} onClick={(e) => scrollToSection(e, 'desordenes-sociales')}>
                      <i className="fas fa-angle-right mr-1" style={{ fontSize: '0.7rem', color: 'rgb(57, 161, 221)' }}></i> <span style={{ color: '#000000' }}>Desórdenes sociales</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-dark py-2 px-3 border-bottom" href="#hambruna" style={{ paddingLeft: '1.5rem' }} onClick={(e) => scrollToSection(e, 'hambruna')}>
                      <i className="fas fa-angle-right mr-1" style={{ fontSize: '0.7rem', color: 'rgb(57, 161, 221)' }}></i> <span style={{ color: '#000000' }}>Hambruna</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-dark py-2 px-3 border-bottom" href="#efectos-geologicos" onClick={(e) => scrollToSection(e, 'efectos-geologicos')}>
                      <i className="fas fa-chevron-right mr-1" style={{ fontSize: '0.7rem', color: 'rgb(57, 161, 221)' }}></i> <span style={{ color: '#000000', fontWeight: 'bold' }}>Efectos geológicos</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-dark py-2 px-3 border-bottom" href="#amplificacion" style={{ paddingLeft: '1.5rem' }} onClick={(e) => scrollToSection(e, 'amplificacion')}>
                      <i className="fas fa-angle-right mr-1" style={{ fontSize: '0.7rem', color: 'rgb(57, 161, 221)' }}></i> <span style={{ color: '#000000' }}>Amplificación</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-dark py-2 px-3 border-bottom" href="#licuefaccion" style={{ paddingLeft: '1.5rem' }} onClick={(e) => scrollToSection(e, 'licuefaccion')}>
                      <i className="fas fa-angle-right mr-1" style={{ fontSize: '0.7rem', color: 'rgb(57, 161, 221)' }}></i> <span style={{ color: '#000000' }}>Licuefacción</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-dark py-2 px-3 border-bottom" href="#derrumbes" style={{ paddingLeft: '1.5rem' }} onClick={(e) => scrollToSection(e, 'derrumbes')}>
                      <i className="fas fa-angle-right mr-1" style={{ fontSize: '0.7rem', color: 'rgb(57, 161, 221)' }}></i> <span style={{ color: '#000000' }}>Derrumbes</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-dark py-2 px-3 border-bottom" href="#incendios" style={{ paddingLeft: '1.5rem' }} onClick={(e) => scrollToSection(e, 'incendios')}>
                      <i className="fas fa-angle-right mr-1" style={{ fontSize: '0.7rem', color: 'rgb(57, 161, 221)' }}></i> <span style={{ color: '#000000' }}>Incendios</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-dark py-2 px-3" href="#tsunami" style={{ paddingLeft: '1.5rem' }} onClick={(e) => scrollToSection(e, 'tsunami')}>
                      <i className="fas fa-angle-right mr-1" style={{ fontSize: '0.7rem', color: 'rgb(57, 161, 221)' }}></i> <span style={{ color: '#000000' }}>Tsunami</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Footer */}
    <footer className="footer container-fluid px-0">
        <p className="m-0 text-center text-white">Copyright &copy; Red Sísmica de Puerto Rico {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
};

export default SecondaryEffects; 