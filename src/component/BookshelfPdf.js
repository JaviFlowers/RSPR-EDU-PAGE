import React, { useState, useEffect, useRef } from 'react';
import Modal from 'react-modal';
import { Document, Page } from 'react-pdf';
import './EducacionPage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaFacebook, FaYoutube, FaInstagram, FaRss } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';




//Mp3 voice
import BioLinkAudioESP from './Recursos_Educativos/Audio_BiolinkESP.mp3';
import TurrTsuAudioESP from './Recursos_Educativos/Audio_TurrTsuESP.mp3';

//Covers Tsunami
import k6Png from './K-6-GuiaMaestros.png';
import C712Png from './7-12.png';
import MaritimaCover from './Recursos_Educativos/MaritimaCover.png'
import Horizontal from './Horizontal.png'
import OperadoresCover from './Recursos_Educativos/OperadoresCovers.png'
import DesarolloPlanCover from './Recursos_Educativos/DesarolloPlanCover.png'
import Seguridad from './Recursos_Educativos/ReglasTsunamis.png'
import TurTsunCover from './Recursos_Educativos/TursTsu.png'
import Tr_SupportersCover from './Recursos_Educativos/TR_SupporterEsp.png'
import BrochureTsunamiCover from './Recursos_Educativos/BrochureTsunamiEsp.png'

//Covers Terremotos

import TurrisT from './Recursos_Educativos/Turr_Terr.png'
import Caricatura from './CaricaturaT.png'
import Mascotas from './MascotasT.png'
import Mochila from './MochilaT.png'
import BrochureTerremotosCover from './Recursos_Educativos/Brochure_Terremotos_Esp.png'
import Tercera from './Recursos_Educativos/Elderly.png'
import Necesidades from './NecesidadET.png'
import BioLinkCover from './Recursos_Educativos/BioLink_ESPA.png';
import LibritoCover from './Recursos_Educativos/LibritoEsp.png';
import ToriCover from './Recursos_Educativos/ToriCover.png';
import BRMochilaCover from './Recursos_Educativos/BrMochilaCover.png';
import RemaCover from './Recursos_Educativos/RemaCover.png';
import DerrumbeCover from './Recursos_Educativos/DerrumbeCover.png';




// Import your video thumbnails
import videoThumb1 from './CaribeWave25.avif';
import videoThumb2 from './TsunamiAware.avif';
import videoThumb3 from './ShakeOut_2023.avif';

//Data to be replace with ../spanish/educacion/documentos/Curriculos/(*pdf name*)
// TsunamiPdf
import Reglas_Tsunami from './Recursos_Educativos/Reglas_S_Tsunami.pdf';
import turs_tsun from './Recursos_Educativos/turs_tsun ESP.pdf';
import BrochureTsunami_ESP from './Recursos_Educativos/BrochureTsunami_ESP.pdf';
import ESPA_TR_Supporters from './Recursos_Educativos/ESPA_TR_Supporters.pdf';
import DesarolloPlan from './Recursos_Educativos/DesarolloPlan.pdf';
import Maritima from './Recursos_Educativos/Maritima.pdf';
import Operadores from './Recursos_Educativos/Operadores.pdf';

//Data to be replace with ../spanish/educacion/documentos/Curriculos/(*pdf name*)
//TerremotoPdf
import BioLink from './Recursos_Educativos/BioLink_ESPA.pdf';
import Envejecientes from './Recursos_Educativos/Brochure_Envejecientes.pdf';
import BrochureTerremotos from './Recursos_Educativos/Brochure_Terremotos.pdf';
import Librito from './Recursos_Educativos/Librito_español.pdf';
import turs_terrem from './Recursos_Educativos/tur_terremESPA.pdf';
import MascotasPdf from './Recursos_Educativos/MascotasTerremotos.pdf';
import ToriTeo from './Recursos_Educativos/Tori_Teo_Espanol.pdf';
import GuiaDer from './Recursos_Educativos/GuiaDerrumbe_2020.pdf';
import PezRema from './Recursos_Educativos/Librito_de_Pez_Rema.pdf';
import Brochure_Mochila from './Recursos_Educativos/Brochure_Mochila.pdf';
//Data has to link to ../spanish/educacion/documentos/Curriculos/(*pdf name*)


// Mock data for the books
const TsunamiBooks = [
  { id: 1, title: 'Currículo de Tsunami K - 6', cover: k6Png, content: 'https://redsismica.uprm.edu/spanish/educacion/documentos/Curriculos/curriculo_k-6.pdf', description: 'Herramientas educativas especializadas para niveles Kinder - 6to grado.' },
  { id: 2, title: 'Currículo de Tsunami K - 6: Guía para Maestros', cover: k6Png, content:  'https://redsismica.uprm.edu/spanish/educacion/documentos/Curriculos/Guia_k-6.pdf', description: 'Manual para que los maestros utilicen a la mano con el Currículo K-6'},
  { id: 3, title: 'Currículo de Tsunami 7 - 12', cover: C712Png, content:  'https://redsismica.uprm.edu/spanish/educacion/documentos/Curriculos/curriculo%20_7-12.pdf', description: 'Herramientas educativas especializadas para niveles 7mo - 12mo grado.'},
  { id: 4, title: 'Currículo de Tsunami 7 - 12: Guía para Maestros', cover: C712Png, content:  'https://redsismica.uprm.edu/spanish/educacion/documentos/Curriculos/Guia%20_7-12.pdf', description: 'Manual para que los maestros utilicen a la mano con el Currículo 7-12' },
  { id: 5, title: 'Guía de preparación ante tsunamis para la comunidad marítima', cover: MaritimaCover, content: Maritima, description: ''  },
  { id: 6, title: 'Guía para el Desarrollo de los Planes de Emergencia para Propiedad Horizontal en Puerto Rico', cover: Horizontal, content:  'https://redsismica.uprm.edu/spanish/educacion/documentos/Brochures/Guia%20para%20el%20Desarrollo%20de%20los%20Planes%20de%20Emergencia%20para%20Propiedad%20Horizontal%20en%20PuertoRico.pdf', description: ''  },
  { id: 7, title: 'Guía para Operadores', cover: OperadoresCover, content:  Operadores, description: '' },
  { id: 8, title: 'Reglas de Seguridad en caso de Tsunami', cover: Seguridad, content: Reglas_Tsunami, description: ''  },
  { id: 9, title: 'Tsunamis para Turismo', cover: TurTsunCover, content: turs_tsun, description: 'Folleto informativo sobre tsunamis dirigido a los turistas' ,audio: TurrTsuAudioESP},
  { id: 10, title: 'Folleto General de Tsunamis', cover: BrochureTsunamiCover, content: BrochureTsunami_ESP, description: ''  },
  { id: 11, title: 'Información General de TsunamiReady', cover: Tr_SupportersCover, content: ESPA_TR_Supporters, description: ''  },
  { id: 12, title: 'Guía para el Desarrollo de los Planes de Acción Emergencia(Emergency Action Plan – EAP) para Facilidades Públicas y Privadas en Puerto Rico ', cover: DesarolloPlanCover, content: DesarolloPlan, description: ''  }
  // Add more book objects here
];

//Make soo that the bookshelf clicked coresponds to the book set with a variable and when the modal
  //is clicked out that value is reset ie 1-3 returns to 0
  const TerremotoBooks = [
    { id: 2, title: 'Terremotos para Turismo', cover: TurrisT, content:  turs_terrem, description: 'Folleto informativo sobre terremotos dirigido a los turistas'   },
    { id: 3, title: 'Edúcate y Prepárate Terremotos y Tsunami', cover: LibritoCover, content: Librito, description: 'Librito educativo sobre la preparación ante terremotos y tsunami'  },
    { id: 4, title: 'Contenido de la Mochila de Seguridad', cover: Mochila, content: 'https://redsismica.uprm.edu/spanish/educacion/documentos/docs/Contenido%20de%20la%20mochila%20esp.pdf', description: ''  },
    { id: 5, title: 'Preparación para Mascotas en Caso de Desastres', cover: Mascotas, content:  MascotasPdf, description: ''  },
    { id: 6, title: 'Folleto General sobre Terremotos', cover: BrochureTerremotosCover, content:  BrochureTerremotos, description: ''  },
    { id: 7, title: 'Preparación Para Personas de la Tercera Edad y Personas con Discapacidad', cover: Tercera, content: Envejecientes, description: ''  },
    { id: 8, title: 'BioLink', cover: BioLinkCover, content: BioLink, description: '' ,audio: BioLinkAudioESP},
    { id: 9, title: 'Caricaturas Sobre Alertas de Tsunami', cover: Caricatura, content:  'https://redsismica.uprm.edu/spanish/educacion/documentos/docs/TsunamiWarningCartoons%20español.pdf', description: ''  },
    { id: 10, title: 'Guía de Derrumbe', cover: DerrumbeCover, content:  GuiaDer, description: ''  },
    { id: 11, title: 'Tori y Teo', cover: ToriCover, content:  ToriTeo, description: ''  },
    { id: 12, title: 'Librito de Peces Réma', cover: RemaCover, content:  PezRema, description: ''  },
    { id: 13, title: 'Brochure de la Mochila de Seguridad', cover: BRMochilaCover, content:  Brochure_Mochila, description: ''  },
    // Add more book objects here 
  ];

  const videoData = [
    { id: 1, title: 'Registrarse a Caribe Wave', url: 'https://www.youtube.com/watch?v=d4wFtLpaRhk', img: videoThumb1, description: 'Instrucciones para registrarse por primera vez en el Caribe Wave' },
    { id: 2, title: 'Concienciación sobre Tsunamis 2022', url: 'https://www.youtube.com/watch?v=OBiI1p4V810', img: videoThumb2 , description: 'Video sobre el día de la concienciación sobre tsunamis en Puerto Rico 2022'},
    { id: 3, title: 'Gran ShakeOut de Puerto Rico 2023', url: 'https://www.youtube.com/watch?v=uWRoanfrC80', img: videoThumb3, description: 'Video de la simulación de terremoto en Puerto Rico 2023' },
    
  ];



Modal.setAppElement('#root');

/**
 * Tooltip component that displays book title and description when hovering over a book
 * @param {Object} props - Component props
 * @param {string} props.title - The title of the book
 * @param {string} props.description - The description of the book
 * @param {boolean} props.isSmallScreen - Whether the screen is small (<=431px)
 */
const Tooltip = ({ title, description, isSmallScreen }) => {
  if (isSmallScreen) return null;
  return (
    <div className="tooltip-book">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

/**
 * Main Bookshelf component that displays educational resources in a bookshelf format
 * Handles PDF viewing, video thumbnails, and responsive design
 */
const BookShelf = () => {
  // State for fade-in animation effect
  const [fadeInClass, setFadeInClass] = useState('');

  /**
   * Effect to trigger fade-in animation when component mounts
   * Adds a smooth entrance animation to the bookshelf
   */
  useEffect(() => {
    setFadeInClass('fade-in');
  }, []);

  // Modal and book selection states
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [hoveredBook, setHoveredBook] = useState(null);
  const [isFlipping, setIsFlipping] = useState(false);
  const [scale, setScale] = useState(0.7); // Track zoom level
  const [selectedBooks, setSelectedBooks] = useState([]);
  const [pdfModalOpen, setPdfModalOpen] = useState(false);
  const [bookshelfName, setBookshelfName] = useState('');
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 431);
  const [visibleThumbnails, setVisibleThumbnails] = useState([]);
  const thumbnailsRef = useRef([]);

  // Pagination states
  const [currentBookPage, setCurrentBookPage] = useState(1);
  const booksPerPage = 8;

  // Audio player states
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef(null);

  // Video thumbnail references
  const videoThumbnailsRef = useRef([]);
  videoThumbnailsRef.current = [];

  // Language detection
  const location = useLocation();
  const currentLanguage = location.pathname.includes('/english') ? 'en' : 'es';

  /**
   * Effect to handle intersection observer for video thumbnails
   * Adds fade-in animation when thumbnails become visible in the viewport
   */
  useEffect(() => {
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

    videoThumbnailsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      videoThumbnailsRef.current.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  /**
   * Effect to handle window resize and update screen size state
   * Adjusts zoom scale based on screen size for responsive design
   */
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 431);
      setScale(window.innerWidth <= 431 ? 0.5 : 0.7);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  /**
   * Handles play/pause functionality for audio player
   * Toggles between playing and pausing the audio track
   */
  const handlePlayPause = () => {
    const audio = audioRef.current;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  /**
   * Updates current time of audio player during playback
   * Keeps track of the audio playback progress
   */
  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  /**
   * Seeks audio to specific time based on input value
   * Allows users to jump to different parts of the audio track
   * @param {Event} e - Input change event from the seek bar
   */
  const handleSeek = (e) => {
    const audio = audioRef.current;
    audio.currentTime = e.target.value;
    setCurrentTime(audio.currentTime);
  };

  /**
   * Sets audio duration when metadata is loaded
   * Initializes the audio player with the total duration
   */
  const handleLoadedMetadata = () => {
    setDuration(audioRef.current.duration);
  };

  /**
   * Opens the bookshelf modal with selected books
   * Displays a modal containing the books from the selected category
   * @param {string} bookshelfName - Name of the bookshelf category
   * @param {Array} books - Array of books to display in the modal
   */
  const openBookshelfModal = (bookshelfName, books) => {
    setBookshelfName(bookshelfName);
    setSelectedBooks(books);
    setModalIsOpen(true);
    setCurrentBookPage(1);
  };

  /**
   * Opens PDF modal or downloads PDF based on screen size
   * On small screens, opens PDF in new tab; on larger screens, shows in modal
   * @param {Object} book - Selected book object containing PDF content
   */
  const openPdfModal = (book) => {
    if (isSmallScreen) {
      window.open(book.content, '_blank');
    } else {
      setSelectedBook(book);
      setPdfModalOpen(true);
    }
  };

  /**
   * Closes the bookshelf modal and resets states
   * Cleans up the modal state and selected books
   */
  const closeBookshelfModal = () => {
    setBookshelfName('');
    setModalIsOpen(false);
    setSelectedBooks([]);
  };

  /**
   * Closes the PDF modal and resets states
   * Resets PDF viewer state and stops any playing audio
   */
  const closePdfModal = () => {
    setPdfModalOpen(false);
    setSelectedBook(null);
    setPageNumber(1);
    setScale(0.7);
    setIsPlaying(false);
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  /**
   * Handles successful PDF document load
   * Sets the total number of pages in the PDF document
   * @param {Object} { numPages } - Object containing number of pages
   */
  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  /**
   * Changes the current page in the PDF viewer
   * Handles page navigation with animation and bounds checking
   * @param {number} offset - Number of pages to move (positive or negative)
   */
  const changePage = (offset) => {
    setIsFlipping(true);
    setTimeout(() => {
      setPageNumber((prevPageNumber) => {
        const newPageNumber = Math.min(
          Math.max(prevPageNumber + (isSmallScreen ? offset : offset * 2), 1),
          numPages
        );
        return newPageNumber;
      });
      setIsFlipping(false);
    }, 600);
  };

  /**
   * Handles manual page number input
   * Validates and updates the current page number
   * @param {Event} e - Input change event from the page number input
   */
  const handlePageNumberChange = (e) => {
    const value = e.target.value;
    if (value === '') {
      setPageNumber(value);
    } else {
      const pageNumber = Number(value);
      if (!isNaN(pageNumber) && pageNumber >= 1 && pageNumber <= numPages) {
        setPageNumber(pageNumber);
      }
    }
  };

  /**
   * Validates and resets page number on input blur
   * Ensures the page number stays within valid bounds
   */
  const handlePageNumberBlur = () => {
    if (pageNumber === '' || pageNumber < 1 || pageNumber > numPages) {
      setPageNumber(1);
    }
  };

  /**
   * Increases PDF zoom level
   * Zooms in on the PDF content up to 2x scale
   */
  const handleZoomIn = () => setScale((prevScale) => Math.min(prevScale + 0.2, 2));

  /**
   * Decreases PDF zoom level
   * Zooms out on the PDF content down to 0.5x scale
   */
  const handleZoomOut = () => setScale((prevScale) => Math.max(prevScale - 0.2, 0.5));

  // Calculate pagination values
  const totalPages = Math.ceil(selectedBooks.length / booksPerPage);
  const currentBooks = selectedBooks.slice(
    (currentBookPage - 1) * booksPerPage,
    currentBookPage * booksPerPage
  );

  /**
   * Moves to next page in bookshelf
   * Advances to the next set of books if available
   */
  const nextPage = () => {
    if (currentBookPage < totalPages) {
      setCurrentBookPage(currentBookPage + 1);
    }
  };

  /**
   * Moves to previous page in bookshelf
   * Returns to the previous set of books if available
   */
  const prevPage = () => {
    if (currentBookPage > 1) {
      setCurrentBookPage(currentBookPage - 1);
    }
  };

  return (
      <div className={`main-container ${fadeInClass}`}>
        {/* Top Section */}
        <div className="container-fluid">
          <div className="row justify-content-center align-items-center top-section">
            <div className="col-auto">
              <h1 style={{ fontSize: isSmallScreen ? "2.2rem" : "3.2rem", fontWeight: "600", textAlign: "center" }}>
                Recursos Educativos
              </h1>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginTop: '1rem' }}>
                <h1 className="nav-option" style={{ fontSize: "1.2rem"}} onClick={() => window.location.href = '#/'}>
                  Inicio
                </h1>
                <h1 className="nav-option" style={{ fontSize: "1.2rem"}} onClick={() => window.location.href = '#/articulos'}>Artículos</h1>
                <h1 className="nav-option" style={{ fontSize: "1.2rem"}} onClick={() => window.location.href = '#/recursos'}>Recursos</h1>
                <h1 className="nav-option" style={{ fontSize: "1.2rem"}} onClick={() => window.open('https://www.youtube.com/@redsismicapr', '_blank')}>Videos</h1>
              </div>
            </div>
          </div>
        </div>
    
        {/* Bookshelves Section */}
        <div className="bookshelf-selection py-3">
          <div className="container">
            <div className="row justify-content-center">
              {/* Tsunami Bookshelf */}
              <div
                className="col-md-6 col-sm-12 mb-4 text-center"
                onMouseEnter={() => setHoveredBook('tsunami')}
                onMouseLeave={() => setHoveredBook(null)}
                onClick={() =>
                  openBookshelfModal('Portal Educativo Tsunami', TsunamiBooks)
                }
                style={{
                  cursor: 'pointer',
                  transform: hoveredBook === 'tsunami' ? 'scale(1.05)' : 'scale(1)',
                  transition: 'transform 0.2s ease-in-out',
                }}
              >
                <div className="bookshelf-title-container-Tsunami">
                  <h3 className="bookshelf-title">Portal Educativo Tsunami</h3>
                </div>
                <div className="bookshelf">
                {TsunamiBooks.slice(0, 8).map((book) => (
             <div
             key={book.id}
             className="book"
             title={book.title} // Add title for accessibility
           >
             <img
               src={book.cover}
               alt={book.title}
               className="book-cover"
             />
           </div>
      ))}</div>
              </div>
    
              {/* Terremoto Bookshelf */}
              <div
                className="col-md-6 col-sm-12 mb-4 text-center"
                onMouseEnter={() => setHoveredBook('terremoto')}
                onMouseLeave={() => setHoveredBook(null)}
                onClick={() =>
                  openBookshelfModal('Portal Educativo Terremoto', TerremotoBooks)
                }
                style={{
                  cursor: 'pointer',
                  transform: hoveredBook === 'terremoto' ? 'scale(1.05)' : 'scale(1)',
                  transition: 'transform 0.2s ease-in-out',
                }}
              >
                <div className="bookshelf-title-container-Terremoto">
                  <h3 className="bookshelf-title">Portal Educativo Terremoto</h3>
                </div>
                <div className="bookshelf">
                {TerremotoBooks.slice(0, 8).map((book) => (
             <div
             key={book.id}
             className="book"
             title={book.title} // Add title for accessibility
           >
             <img
               src={book.cover}
               alt={book.title}
               className="book-cover"
             />
           </div>
      ))}</div>
              </div>
              <div className="row justify-content-center mt-4">
                <div className="col-auto text-center">
                  <h4 className="mb-3">Artículos Científicos</h4>
                  <button
                    className="btn btn-link p-0"
                    onClick={() =>
                      document
                        .querySelector('.scientific-articles-banner')
                        .scrollIntoView({ behavior: 'smooth' })
                    }
                  >
                    <div className="arrow-down"></div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scientific Articles Banner Section */}
        <div className="scientific-articles-banner py-5" style={{ backgroundColor: '#003366', marginTop: '40px' }}>
          <div className="container">
            <div className="row align-items-center mb-4">
              <div className="col-md-8">
                <h2 className="text-white mb-3" style={{borderBottom: '2px solid white', borderRadius: '8px'}}>Artículos Científicos de la Red Sísmica</h2>
                <p className="text-white lead">Descubre investigaciones y publicaciones científicas sobre sismología y tsunamis en Puerto Rico.</p>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-md-4 offset-md-2 mb-4">
                <Link to="https://redsismica.uprm.edu/spanish/investigacion/investigadores.php" className="text-decoration-none">
                  <div className="card h-100 border-0 shadow-sm card-hover" style={{ minHeight: '250px' }}>
                    <div className="card-body d-flex flex-column">
                      <h3 className="card-title text-primary mb-3">Investigadores</h3>
                      <p className="card-text flex-grow-1">Conozca a los científicos e investigadores que trabajan en la Red Sísmica de Puerto Rico, sus áreas de especialización y proyectos actuales.</p>
                      <span className="read-more-link">Ver investigadores ›</span>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-md-4 mb-4">
                <Link to="https://redsismica.uprm.edu/spanish/investigacion/informes_especiales.php" className="text-decoration-none">
                  <div className="card h-100 border-0 shadow-sm card-hover" style={{ minHeight: '250px' }}>
                    <div className="card-body d-flex flex-column">
                      <h3 className="card-title text-primary mb-3">Reportes Especiales</h3>
                      <p className="card-text flex-grow-1">Acceda a reportes detallados sobre eventos sísmicos significativos, estudios de riesgo y análisis de vulnerabilidad en Puerto Rico.</p>
                      <span className="read-more-link">Ver reportes ›</span>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
    
        {/* Thumbnails Section */}
        <div className="thumbnails-section py-5">
          <div className="container">
            <div className="row justify-content-center mb-4">
              <div className="col-12 text-center">
                <h2 className="section-title">Videos Destacados</h2>
                <div className="divider mx-auto my-3" style={{ width: '60px', height: '3px', backgroundColor: '#003366' }}></div>
              </div>
            </div>
            <div className="row justify-content-center">
              {videoData.slice(0, 6).map((thumbnail, index) => (
                <div
                  key={thumbnail.id}
                  className={`col-md-4 col-sm-6 col-12 mb-4 thumbnail ${
                    visibleThumbnails.includes(index) ? 'fade-in' : ''
                  }`}
                  ref={(el) => el && videoThumbnailsRef.current.push(el)}
                >
                <a
            href={thumbnail.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-decoration-none"
          >
            <div className="card shadow-sm">
              <img
                src={thumbnail.img}
                alt={thumbnail.title}
                className="card-img-top"
              />
              <div className="card-body">
                <p className="text-primary mb-1">VIDEO</p>
                <h5 className="card-title">{thumbnail.title}</h5>
              </div>
              {/* Thumbnails Overlay */}
              <div className="thumbnail-overlay">
                <p className="thumbnail-tag">VIDEO</p>
                <div className="divider-line"></div>
                <h5 className="thumbnail-title">{thumbnail.title}</h5> 
                <p className="thumbnail-description">
                  {thumbnail.description}
                </p>
                <a
                  href={thumbnail.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="thumbnail-link"
                >
                  WATCH VIDEO
                </a>
              </div>
            </div>
          </a>
                </div>
              ))}
            </div>
            <div className="row justify-content-center mt-5">
            <div className="row justify-content-center mt-4">
          <div className="col-auto text-center">
            <h4 className="mb-3">Follow Us</h4>
            <div className="social-buttons">
  <a
    href="https://www.youtube.com/@redsismicapr"
    target="_blank"
    rel="noopener noreferrer"
    className="btn btn-social btn-youtube"
  >
    <FaYoutube />
  </a>
  <a
    href="http://www.facebook.com/redsismicadepuertorico"
    target="_blank"
    rel="noopener noreferrer"
    className="btn btn-social btn-facebook"
  >
    <FaFacebook />
  </a>
  <a 
    href="https://www.instagram.com/redsismicapr?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
    target="_blank" rel="noopener noreferrer" 
    className="btn btn-social btn-instagram" > 
    <FaInstagram /> 
    </a>
</div>

          </div>
        </div>
    </div>
          </div>
        </div>
  
      <Modal isOpen={modalIsOpen} onRequestClose={closeBookshelfModal} contentLabel="Bookshelf Modal">
        <div className={`bookshelfModal-container ${fadeInClass}`}>
          <h2>{bookshelfName}</h2>
          <div className="shelf-background-container">
             {!isSmallScreen && currentBookPage !== 1 && (
              <button
                className="nav-arrow left-arrow"
                onClick={prevPage}
                disabled={currentBookPage <= 1}
              >
                ◄
              </button>
            )}
          <div className="shelf-background">
          {isSmallScreen && (
            <div className="pdf-nav-buttons">
              <button
                disabled={currentBookPage <= 1}
                onClick={prevPage}
                >
                Atras
              </button>
              <button
                onClick={nextPage} 
                disabled={currentBookPage === totalPages}
              >
                Siguiente
              </button>
              <span className="page-indicator">
                {currentBookPage} / {totalPages}
              </span>
            </div>
          )}
            {currentBooks.map((book) => (
            <div
              key={book.id}
              className="book"
              onClick={() => openPdfModal(book)}
              onMouseEnter={() => setHoveredBook(book)}
              onMouseLeave={() => setHoveredBook(null)}
            >
            <img src={book.cover} alt={book.title} className="book-cover" />
            {isSmallScreen && (
              <div className="title-overlay">
                <span className="overlay-title">{book.title}</span>
              </div>
            )}
           {hoveredBook === book && <Tooltip title={book.title} description={book.description} isSmallScreen={isSmallScreen} />}
            </div>
      ))}
       
          
{selectedBook && (
  /* PDF Modal */
  <Modal isOpen={pdfModalOpen} onRequestClose={closePdfModal} contentLabel="Book Content">
    <div className={`modal-content-pdf ${fadeInClass}`}>
      <h2>{selectedBook.title}</h2>
      <button className="modal-close-button" onClick={closePdfModal}>&times;</button>
      <div className={`pdf-container ${isFlipping ? 'flipping' : ''}`}>
        {/* Navigation for the left arrow */}
        <button className="pdf-nav-arrow pdf-left-arrow" disabled={pageNumber <= 1} onClick={() => changePage(-1)}>&lt;</button>

        {/* PDF Document */}
        <Document file={selectedBook.content} onLoadSuccess={onDocumentLoadSuccess}>
                <div className="pdf-pages">
                  {/* Always render the current page */}
                  <Page
                    pageNumber={pageNumber}
                    scale={scale}
                    renderTextLayer={false}
                    renderAnnotationLayer={false}
                  />
                  
                  {/* Conditionally render the next page if not on small screens */}
                  {!isSmallScreen && pageNumber + 1 <= numPages && (
                    <Page
                      pageNumber={pageNumber + 1}
                      scale={scale}
                      renderTextLayer={false}
                      renderAnnotationLayer={false}
                    />
                  )}
                </div>
              </Document>

        {/* Navigation for the right arrow */}
        <button className="pdf-nav-arrow pdf-right-arrow" disabled={pageNumber >= numPages} onClick={() => changePage(1)}>&gt;</button>
      </div>

      {/* Zoom controls */}
      <div className="zoom-controls">
        <button onClick={handleZoomOut}>Zoom Out</button>
        <button onClick={handleZoomIn}>Zoom In</button>
      </div>

      {/* Audio Player */}
      {selectedBook.audio && (
        <div className="audio-player">
          <audio
            ref={audioRef}
            src={selectedBook.audio}
            onTimeUpdate={handleTimeUpdate}
            onLoadedMetadata={handleLoadedMetadata}
          />

          {/* Play/Pause Button */}
          <button onClick={handlePlayPause}>
            {isPlaying ? 'Pause' : 'Play'}
          </button>

          {/* Seek Bar */}
          <input
            type="range"
            min="0"
            max={duration}
            value={currentTime}
            onChange={handleSeek}
            style={{ width: '100%' }}
          />
          <div>
            <span>{Math.floor(currentTime)}s / {Math.floor(duration)}s</span>
          </div>
        </div>
      )}

      {/* Page number display */}
      <p className="page-number">
        Page <input
          type="number"
          value={pageNumber}
          min="1"
          max={numPages}
          onChange={handlePageNumberChange}
          onBlur={handlePageNumberBlur}
          style={{ width: '50px', margin: '0 10px' }} // Inline styles for input size
        /> 
        of {numPages}
      </p>

      {/* Modal buttons */}
      <div className="modal-buttons">
        <button onClick={closePdfModal}>Close</button>
        <a href={selectedBook.content} download className="download-button">Download PDF</a>
      </div>
    </div>
  </Modal>
)}
    </div>
    {!isSmallScreen && currentBookPage !== totalPages && (
    <button className="nav-arrow right-arrow" onClick={nextPage} disabled={currentBookPage === totalPages}>
              ►
            </button>
    )}
    </div>
      
      </div>
      <button className="modal-close-button" onClick={closeBookshelfModal}>
        &times; {/* Unicode symbol for a cross (×) */}
      </button>
      </Modal>
    <footer className="footer">
  
  <p className="m-0 text-center text-white">Copyright &copy; Red Sísmica de Puerto Rico {new Date().getFullYear()}</p>

</footer>

      </div>
      
      
      
  );
};
//Work with nav arrows soo that they do not scroll upwards when clicked -

// Export videoData so it can be imported by the homepage component
export { videoData };
export { TerremotoBooks };
export { TsunamiBooks };


export default BookShelf;