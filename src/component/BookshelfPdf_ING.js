import React, { useState, useEffect, useRef } from 'react';
import Modal from 'react-modal';
import { Document, Page } from 'react-pdf';
import './EducacionPage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaFacebook, FaYoutube, FaInstagram } from 'react-icons/fa';
import { useLocation, Link } from 'react-router-dom';

//Mp3 voice

import BioLinkAudio from './Recursos_Educativos/Audio_BiolinkESP.mp3';

//Covers Tsunami
import k6Png from './Recursos_Educativos/K-6-GuiaMaestros.png';
import C712Png from './Recursos_Educativos/7-12.png';
import MaritimaCover from './Recursos_Educativos/MaritimaCover.png'
import Horizontal from './Recursos_Educativos/Horizontal.png'
import OperadoresCover from './Recursos_Educativos/OperadoresCovers.png'
import DesarolloPlanCover from './Recursos_Educativos/DesarolloPlanCover.png'
import Seguridad from './Recursos_Educativos/ReglasTsunamis.png'
import TurTsunCover from './Recursos_Educativos/TursTsu.png'
import Tr_SupportersCover from './Recursos_Educativos/TR_SupporterEsp.png'
import BrochureTsunamiCover from './Recursos_Educativos/BrochureTsunamiEsp.png'

//Covers Terremotos

import TurrisT from './Recursos_Educativos/Turr_Terr.png'
import Caricatura from './Recursos_Educativos/CaricaturaT.png'
import Mascotas from './Recursos_Educativos/MascotasT.png'
import Mochila from './Recursos_Educativos/MochilaT.png'
import BrochureTerremotosCover from './Recursos_Educativos/Brochure_Terremotos_Esp.png'
import Tercera from './Recursos_Educativos/Elderly.png'
import BioLinkCover from './Recursos_Educativos/BioLink_ESPA.png';
import LibritoCover from './Recursos_Educativos/LibritoEsp.png';
import LandslideCover from './Recursos_Educativos/LandslideCover.png';


// Import your video thumbnails
import videoThumb1 from './Recursos_Educativos/CaribeWave25.avif';
import videoThumb2 from './Recursos_Educativos/TsunamiAware.avif';
import videoThumb3 from './Recursos_Educativos/ShakeOut_2023.avif';

//Data to be replace with ../spanish/educacion/documentos/Curriculos/(*pdf name*)
// TsunamiPdf
import Reglas_Tsunami from './Recursos_Educativos/TsunamiSafetyRules.pdf';
import turs_tsun from './Recursos_Educativos/turs_tsun INGL.pdf';
import BrochureTsunami_ESP from './Recursos_Educativos/BrochureTsunami_ENG.pdf';
import ING_TR_Supporters from './Recursos_Educativos/ING_TR_Supporters.pdf';
import DesarolloPlan from './Recursos_Educativos/DesarolloPlan.pdf';
import Maritima from './Recursos_Educativos/Maritima.pdf';
import Operadores from './Recursos_Educativos/Operadores.pdf';

//Data to be replace with ../spanish/educacion/documentos/Curriculos/(*pdf name*)
//TerremotoPdf
import BioLink from './Recursos_Educativos/BioLink_INGL.pdf';
import Envejecientes from './Recursos_Educativos/Brochure_Elderly.pdf';
import BrochureTerremotos from './Recursos_Educativos/Brochure_Earthquake.pdf';
import Librito from './Recursos_Educativos/Librito_ingles.pdf';
import turs_terrem from './Recursos_Educativos/tur_terremINGL.pdf';
import LandslideGuide from './Recursos_Educativos/LandslideGuide_2020.pdf';
//Data has to link to ../spanish/educacion/documentos/Curriculos/(*pdf name*)


// Mock data for the books
const TsunamiBooks = [
  { id: 1, title: 'Tsunami Curriculum K - 6', cover: k6Png, content: 'https://redsismica.uprm.edu/spanish/educacion/documentos/Curriculos/curriculo_k-6.pdf', description: 'Specialized educational tools for Kindergarten - 6th grade levels.' },
  { id: 2, title: "Tsunami Curriculum K - 6: Teacher's Guide", cover: k6Png, content:  'https://redsismica.uprm.edu/spanish/educacion/documentos/Curriculos/Guia_k-6.pdf', description: 'Manual for teachers to use alongside the K-6 Curriculum.' },
  { id: 3, title: 'Tsunami Curriculum 7 - 12', cover: C712Png, content:  'https://redsismica.uprm.edu/spanish/educacion/documentos/Curriculos/curriculo%20_7-12.pdf', description: 'Specialized educational tools for 7th - 12th grade levels.' },
  { id: 4, title: "Tsunami Curriculum 7 - 12: Teacher's Guide", cover: C712Png, content:  'https://redsismica.uprm.edu/spanish/educacion/documentos/Curriculos/Guia%20_7-12.pdf', description: 'Manual for teachers to use alongside the 7-12 Curriculum.' },
  { id: 5, title: 'Tsunami Preparedness Guide for the Maritime Community (Spanish)', cover: MaritimaCover, content: Maritima, description: '' },
  { id: 6, title: 'Guide for Developing Emergency Plans for Horizontal Property in Puerto Rico', cover: Horizontal, content:  'https://redsismica.uprm.edu/spanish/educacion/documentos/Brochures/Guia%20para%20el%20Desarrollo%20de%20los%20Planes%20de%20Emergencia%20para%20Propiedad%20Horizontal%20en%20PuertoRico.pdf', description: '' },
  { id: 7, title: 'Guide for operators', cover: OperadoresCover, content:  Operadores, description: '' },
  { id: 8, title: 'Tsunami Safety Rules', cover: Seguridad, content: Reglas_Tsunami, description: '' },
  { id: 9, title: 'Tsunamis for Tourism', cover: TurTsunCover, content: turs_tsun, description: 'Informative brochure about tsunamis for tourists.' },
  { id: 10, title: 'General Tsunami Brochure', cover: BrochureTsunamiCover, content: BrochureTsunami_ESP, description: '' },
  { id: 11, title: 'General Information about TsunamiReady', cover: Tr_SupportersCover, content: ING_TR_Supporters, description: '' },
  { id: 12, title: 'Guide for the Development of Emergency Action Plans (EAP) for Public and Private Facilities in Puerto Rico (Spanish)', cover: DesarolloPlanCover, content: DesarolloPlan, description: '' }
  // Add more book objects here
];

//Make soo that the bookshelf clicked coresponds to the book set with a variable and when the modal
  //is clicked out that value is reset ie 1-3 returns to 0
  const TerremotoBooks = [
    { id: 2, title: 'Earthquakes for Tourism', cover: TurrisT, content: turs_terrem, description: 'Informative brochure about earthquakes for tourists.' },
    { id: 3, title: 'Cartoons About Tsunami Warnings', cover: Caricatura, content: 'https://redsismica.uprm.edu/spanish/educacion/documentos/docs/TsunamiWarningCartoons%20español.pdf', description: '' },
    { id: 4, title: 'Emergency Backpack Contents', cover: Mochila, content: 'https://redsismica.uprm.edu/spanish/educacion/documentos/docs/Contenido%20de%20la%20mochila%20esp.pdf', description: '' },
    { id: 5, title: 'Pet Preparedness in Case of Disasters', cover: Mascotas, content: 'https://redsismica.uprm.edu/spanish/educacion/documentos/docs/Folleto_mascotas.pdf', description: '' },
    { id: 6, title: 'General Earthquake Brochure', cover: BrochureTerremotosCover, content: BrochureTerremotos, description: '' },
    { id: 7, title: 'Preparedness for Senior Citizens and People with Disabilities', cover: Tercera, content: Envejecientes, description: '' },
    { id: 8, title: 'BioLink', cover: BioLinkCover, content: BioLink, description: '', audio: BioLinkAudio },
    { id: 9, title: 'Educate and Prepare: Earthquakes and Tsunamis', cover: LibritoCover, content: Librito, description: 'Educational booklet on preparedness for earthquakes and tsunamis.' },
    { id: 10, title: 'Landslide Guide', cover: LandslideCover, content: LandslideGuide, description: 'Educational booklet on preparedness for landslides.' }

    // Add more book objects here
  ];

  const videoData = [
    { id: 1, title: 'Register for Caribe Wave', url: 'https://www.youtube.com/watch?v=d4wFtLpaRhk', img: videoThumb1, description: 'Instructions for registering for the first time in Caribe Wave' },
    { id: 2, title: 'Tsunami Awareness 2022', url: 'https://www.youtube.com/watch?v=OBiI1p4V810', img: videoThumb2, description: 'Video about Tsunami Awareness Day in Puerto Rico 2022' },
    { id: 3, title: 'Great ShakeOut of Puerto Rico 2023', url: 'https://www.youtube.com/watch?v=uWRoanfrC80', img: videoThumb3, description: 'Video of the earthquake simulation in Puerto Rico 2023' },
    
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
const BookShelf_ING = () => {
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
  const [scale, setScale] = useState(0.7);
  const [selectedBooks, setSelectedBooks] = useState([]);
  const [pdfModalOpen, setPdfModalOpen] = useState(false);
  const [bookshelfName, setBookshelfName] = useState('');
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 431);
  
  // Video thumbnail references
  const videoThumbnailsRef = useRef([]);
  videoThumbnailsRef.current = [];

  // Pagination states
  const [currentBookPage, setCurrentBookPage] = useState(1);
  const booksPerPage = 8;

  // Audio player states
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef(null);

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
                Educational Resources
              </h1>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginTop: '1rem' }}>
                <h1 className="nav-option" style={{ fontSize: "1.2rem"}} onClick={() => window.location.href = '#/english'}>Home</h1>
                <h1 className="nav-option" style={{ fontSize: "1.2rem"}} onClick={() => window.location.href = '#/english/articulos'}>Articles</h1>
                <h1 className="nav-option" style={{ fontSize: "1.2rem"}} onClick={() => window.location.href = '#/english/recursos'}>Resources</h1>
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
                  openBookshelfModal('EDUCATIONAL PORTAL TSUNAMI', TsunamiBooks)
                }
                style={{
                  cursor: 'pointer',
                  transform: hoveredBook === 'tsunami' ? 'scale(1.05)' : 'scale(1)',
                  transition: 'transform 0.2s ease-in-out',
                }}
              >
                <div className="bookshelf-title-container-Tsunami">
                  <h3 className="bookshelf-title">Educational Portal Tsunami</h3>
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
                  openBookshelfModal('EDUCATIONAL PORTAL EARTHQUAKE', TerremotoBooks)
                }
                style={{
                  cursor: 'pointer',
                  transform: hoveredBook === 'terremoto' ? 'scale(1.05)' : 'scale(1)',
                  transition: 'transform 0.2s ease-in-out',
                }}
              >
                <div className="bookshelf-title-container-Terremoto">
                  <h3 className="bookshelf-title">Educational Portal Earthquake</h3>
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
                  <h4 className="mb-3">Scientific Articles</h4>
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
        <div className="scientific-articles-banner py-5" style={{ backgroundColor: '#003366', marginTop: '40px'}}>
          <div className="container">
            <div className="row align-items-center mb-4">
              <div className="col-md-8">
                <h2 className="text-white mb-3" style={{borderBottom: '2px solid white', borderRadius: '8px'}}>Scientific Articles from the Seismic Network</h2>
                <p className="text-white lead">Discover research and scientific publications about seismology and tsunamis in Puerto Rico.</p>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-md-4 offset-md-2 mb-4">
                <Link to="https://redsismica.uprm.edu/english/research/researchers.php" className="text-decoration-none">
                  <div className="card h-100 border-0 shadow-sm card-hover" style={{ minHeight: '250px' }}>
                    <div className="card-body d-flex flex-column">
                      <h3 className="card-title mb-3" style={{ color: '#007bff' }}>Researchers</h3>
                      <p className="card-text flex-grow-1">Meet the scientists and researchers working at the Puerto Rico Seismic Network, their areas of expertise, and current projects.</p>
                      <span className="read-more-link">View researchers ›</span>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-md-4 mb-4">
                <Link to="https://redsismica.uprm.edu/english/research/special_reports.php" className="text-decoration-none">
                  <div className="card h-100 border-0 shadow-sm card-hover" style={{ minHeight: '250px' }}>
                    <div className="card-body d-flex flex-column">
                      <h3 className="card-title mb-3" style={{ color: '#007bff' }}>Special Reports</h3>
                      <p className="card-text flex-grow-1">Access detailed reports on significant seismic events, risk studies, and vulnerability analysis in Puerto Rico.</p>
                      <span className="read-more-link">View reports ›</span>
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
                <h2 className="section-title">Featured Videos</h2>
                <div className="divider mx-auto my-3" style={{ width: '60px', height: '3px', backgroundColor: '#003366' }}></div>
              </div>
            </div>
            <div className="row justify-content-center">
              {videoData.slice(0, 6).map((thumbnail, index) => (
                <div
                  key={thumbnail.id}
                  className={`col-md-4 col-sm-6 col-12 mb-4 thumbnail`}
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
                  VER VIDEO
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
                className="btn btn-social btn-instagram" 
              > 
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
                Previous
              </button>
              <span className="page-indicator">
                {pageNumber} / {numPages}
              </span>
              <button
                onClick={nextPage} 
                disabled={currentBookPage === totalPages}
              >
                Next
              </button>
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

// Export videoData so it can be imported by the English homepage component
export { videoData };
export { TerremotoBooks };
export { TsunamiBooks };

export default BookShelf_ING;