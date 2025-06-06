import React, { useState, useEffect, useRef } from 'react';
import './EducacionPage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import './EducacionPage.css';
import { articlesData } from './Articulos_EduING';
import { videoData, TsunamiBooks, TerremotoBooks } from './BookshelfPdf_ING';
import WelcomeBackground from './assets/falla_geologica1.jpg';
import WelcomeBackground2 from './assets/falla_geologica2.jpg';
import WelcomeBackground3 from './assets/falla_geologica3.jpg';
import WelcomeBackground4 from './assets/Fault_geology.jpg';
import SelectBackground from './assets/Select_Background.jpeg';
import { FaFacebook, FaYoutube, FaInstagram } from 'react-icons/fa';
import { Parallax } from 'react-parallax';

const HomepageING = () => {
   // State for fade-in animation effect
   const [fadeInClass, setFadeInClass] = useState('');

   // State for responsive design
   const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 431);

   // State for tracking visible articles for fade-in effect
   const [visibleArticles, setVisibleArticles] = useState([]);

   // Reference for article elements
   const articlesRef = useRef([]);

   const [hoveredBook, setHoveredBook] = useState(null);
   
   // Add slideshow state
   const backgroundImages = [WelcomeBackground, WelcomeBackground2, WelcomeBackground3, WelcomeBackground4];
   const [currentBgIndex, setCurrentBgIndex] = useState(0);
   const [isFading, setIsFading] = useState(false);
   
   // Add refs for welcome section elements
   const welcomeSubtitleRef = useRef(null);
   const welcomeNavOptionsRef = useRef(null);
   
   // Add a ref for video thumbnails
   const videoThumbnailsRef = useRef([]);
   videoThumbnailsRef.current = [];
   
   // Add state to track visible thumbnails
   const [visibleThumbnails, setVisibleThumbnails] = useState([]);
 
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

     // Welcome section scroll observer
     const welcomeObserver = new IntersectionObserver(
       entries => {
         entries.forEach(entry => {
           if (entry.isIntersecting) {
             entry.target.classList.add('visible');
           } else {
             // Keep elements visible once they've appeared
             // entry.target.classList.remove('visible');
           }
         });
       },
       { threshold: 0.1, rootMargin: '-100px 0px' }
     );

     if (welcomeSubtitleRef.current) welcomeObserver.observe(welcomeSubtitleRef.current);
     if (welcomeNavOptionsRef.current) welcomeObserver.observe(welcomeNavOptionsRef.current);
 
     // Set up intersection observer for fade-in effect for articles
     const articlesObserver = new IntersectionObserver(
       (entries) => {
         entries.forEach((entry) => {
           if (entry.isIntersecting) {
             const index = articlesRef.current.findIndex(ref => ref === entry.target);
             if (index !== -1 && !visibleArticles.includes(index)) {
               setVisibleArticles(prev => [...prev, index]);
             }
             entry.target.classList.add('visible');
           } else {
             entry.target.classList.remove('visible');
           }
         });
       },
       { threshold: 0.1 }
     );
     
     // Set up intersection observer for videos
     const videoObserver = new IntersectionObserver(
       (entries) => {
         entries.forEach((entry) => {
           const index = videoThumbnailsRef.current.findIndex(ref => ref === entry.target);
           if (entry.isIntersecting) {
             if (index !== -1 && !visibleThumbnails.includes(index)) {
               setVisibleThumbnails(prev => [...prev, index]);
             }
             entry.target.classList.add('visible');
           } else {
             entry.target.classList.remove('visible');
           }
         });
       },
       { threshold: 0.1 }
     );
 
     // Save the current articles refs to use in cleanup
     const currentArticleRefs = articlesRef.current;
     const currentVideoRefs = videoThumbnailsRef.current;
 
     currentArticleRefs.forEach((el) => {
       if (el) articlesObserver.observe(el);
     });
     
     // Observe video thumbnails
     currentVideoRefs.forEach((el) => {
       if (el) videoObserver.observe(el);
     });

     // Background image slideshow with smooth transitions
     const slideshowTimer = setInterval(() => {
       setIsFading(true);
       setTimeout(() => {
         setCurrentBgIndex(prevIndex => (prevIndex + 1) % backgroundImages.length);
         setIsFading(false);
       }, 1000); // Wait for fade out to complete
     }, 10000); // Change image every 10 seconds
 
     return () => {
       window.removeEventListener('resize', handleResize);
       
       if (welcomeSubtitleRef.current) welcomeObserver.unobserve(welcomeSubtitleRef.current);
       if (welcomeNavOptionsRef.current) welcomeObserver.unobserve(welcomeNavOptionsRef.current);
       
       currentArticleRefs.forEach((el) => {
         if (el) articlesObserver.unobserve(el);
       });
       
       // Clean up video thumbnail observers
       currentVideoRefs.forEach((el) => {
         if (el) videoObserver.unobserve(el);
       });
       
       // Clean up slideshow timer
       clearInterval(slideshowTimer);
     };
   }, []);

  return (
    <div className={`homepage-container ${fadeInClass}`}>
      {/* Welcome Section with Parallax Slideshow */}
      <div style={{ 
        position: 'relative', 
        height: isSmallScreen ? '870px' : '700px', 
        marginTop: '80px', 
        overflow: 'hidden',
        backgroundColor: '#000000', // Black background for the container
      }}>
        {/* Permanent dark overlay */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.7)', // Dark overlay
          zIndex: 2, // Above images, below content
        }} />
        
        {backgroundImages.map((bgImage, index) => (
          <Parallax
            key={index}
            bgImage={bgImage}
            strength={500}
            style={{
              height: '100%',
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              opacity: currentBgIndex === index ? (isFading ? 0.3 : 0.7) : 0, // Fade to semi-transparent instead of fully transparent
              transition: 'opacity 1s ease-in-out',
              zIndex: 1, // All images at same level
            }}
            bgImageStyle={{
              filter: 'brightness(1.5)', // Brighter image
              height: '100%',
              width: '100%',
              objectFit: 'cover',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
        ))}
        
        {/* Content layer - always visible regardless of which background is showing */}
        <div className="welcome-section" 
          style={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start', // Left align for English version to match Spanish
            position: 'relative',
            paddingLeft: '10%',
            paddingRight: '10%',
            zIndex: 3, // Content above all images and overlay
          }}
        >
          <h1 style={{ 
            color: 'white', 
            fontSize: isSmallScreen ? '2.5rem' : '3rem', 
            textAlign: 'left', // Left align text
            marginBottom: '2rem',
            fontWeight: 'bold'
          }}>
            <span className="draw-in-text">Welcome to the Educational Portal</span><br/>
            <span className="draw-in-text" style={{ animationDelay: '0.5s' }}>of the</span><br/>
            <span className="draw-in-text" style={{ animationDelay: '1s' }}>Puerto Rico Seismic Network</span>
          </h1>

          <h2 
            ref={welcomeSubtitleRef}
            className="reveal-element" 
            style={{ 
              color: 'white', 
              fontSize: '1.7rem', 
              textAlign: 'left', // Left align text
              marginTop: '1rem',
              marginBottom: '1.5rem',
              transitionDelay: '0.3s'
            }}
          >
            Explore our Educational Resources
          </h2>
          
          <div 
            ref={welcomeNavOptionsRef}
            className="reveal-element"
            style={{ 
              display: 'flex', 
              justifyContent: 'flex-start', // Left align navigation options
              gap: '2rem', 
              marginTop: '1.5rem',
              transitionDelay: '0.6s'
            }}
          >
            <h1
              className="nav-option"
              style={{ fontSize: '1.7em', color: 'white' }}
              onClick={() => document.getElementById('articles-section').scrollIntoView({ behavior: 'smooth' })}
            >
              Articles
            </h1>
            <h1
              className="nav-option"
              style={{ fontSize: '1.7em', color: 'white' }}
              onClick={() => document.getElementById('resources-section').scrollIntoView({ behavior: 'smooth' })}
            >
              Resources
            </h1>
            <h1
              className="nav-option"
              style={{ fontSize: '1.7em', color: 'white' }}
              onClick={() => document.getElementById('videos-section').scrollIntoView({ behavior: 'smooth' })}
            >
              Videos
            </h1>
          </div>
        </div>
      </div>

      {/* Articles Section */}
      <div id="articles-section" className="articles-section py-5">
        <div className="container">
          <h2 className="text-center mb-4" style={{ marginTop: '80px', fontSize: '2.5rem' }}>Featured Articles</h2>
          <div className="row justify-content-center" style={{ marginTop: '80px' }}>
            {/* Assuming articlesData is imported or available here */}
            {articlesData.en.slice(0, 4).map((article, index) => (
              <div key={article.id} className={`col-12 ${!isSmallScreen ? 'col-md-3 col-sm-4' : ''} mb-4 article-card ${visibleArticles.includes(index) ? 'fade-in' : ''}`} ref={(el) => el && articlesRef.current.push(el)}>
                <div 
                  className={`card shadow-sm ${isSmallScreen ? 'mobile-card' : ''}`}
                  onClick={() => isSmallScreen && window.open(article.link, '_blank', 'noopener,noreferrer')}
                  style={isSmallScreen ? { cursor: 'pointer' } : {}}
                >
                  <img src={article.image} alt={article.title} className={`card-img ${isSmallScreen ? 'mobile-image' : 'card-img-top'}`} />
                  <div className={`card-body ${isSmallScreen ? 'mobile-card-body' : ''}`}>
                    <h5 className="card-title">{article.title}</h5>
                    {isSmallScreen && <p className="card-text mobile-description">{article.description}</p>}
                    {isSmallScreen && <span className="read-more-link">Read More ›</span>}
                  </div>
                  {!isSmallScreen && (
                    <div className="thumbnail-overlay">
                      <p className="thumbnail-tag">ARTICLE</p>
                      <div className="divider-line"></div>
                      <h5 className="thumbnail-title">{article.title}</h5>
                      <p className="thumbnail-description">{article.description}</p>
                      <a href={article.link} target="_blank" rel="noopener noreferrer" className="thumbnail-link">Read More</a>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-4">
            <Link to="/english/articulos" className="text-primary" style={{ textDecoration: 'none' }}>
              <span 
                style={{ 
                  display: 'inline-flex', 
                  alignItems: 'center',
                  fontSize: '1.2rem',
                  fontWeight: 'bold',
                  transition: 'color 0.3s ease'
                }}
                className="view-all-link"
                onMouseOver={(e) => {
                  e.currentTarget.style.color = '#2563eb';
                  e.currentTarget.querySelector('.arrow').style.transform = 'translateX(3px)';
                }} 
                onMouseOut={(e) => {
                  e.currentTarget.style.color = '';
                  e.currentTarget.querySelector('.arrow').style.transform = '';
                }}
              >
                View All Articles
                <span 
                  className="arrow" 
                  style={{ 
                    marginLeft: '8px', 
                    display: 'inline-block',
                    transition: 'transform 0.3s ease'
                  }}
                >&gt;</span>
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Resources Section */}
      <div id="resources-section" className="bookshelf-selection py-5" style={{ backgroundImage: `url(${SelectBackground})`, backgroundSize: 'cover', backgroundColor: '#24435c', backgroundBlendMode: 'overlay', color: 'white' }}>
        <div className="container">
          <h1 className="text-center mb-4" style={{ marginTop: '60px', fontSize: '2.5rem', borderBottom: '2px solid white', borderRadius: '8px' }}>Educational Resources</h1>
          <div className="row justify-content-center" style={{ marginTop: '80px' }}>
            {/* Tsunami Bookshelf */}
            <div
                className="col-md-6 col-sm-12 mb-4 text-center"
                onMouseEnter={() => setHoveredBook('tsunami')}
                onMouseLeave={() => setHoveredBook(null)}
                onClick={() => window.location.href = '#/english/recursos'}
                style={{
                  cursor: 'pointer',
                  transform: hoveredBook === 'tsunami' ? 'scale(1.05)' : 'scale(1)',
                  transition: 'transform 0.2s ease-in-out',
                }}
              >
                
                  <h3 className="bookshelf-title" style={{ color: 'white' }}>Educational Portal Tsunami</h3>
                
                <div className="bookshelf">
                {TsunamiBooks.slice(0, 8).map((book) => (
             <div
             key={book.id}
             className="book"
             title={book.title}
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
                onClick={() => window.location.href = '#/english/recursos'}
                style={{
                  cursor: 'pointer',
                  transform: hoveredBook === 'terremoto' ? 'scale(1.05)' : 'scale(1)',
                  transition: 'transform 0.2s ease-in-out',
                }}
              >
                
                  <h3 className="bookshelf-title" style={{ color: 'white' }}>Educational Portal Earthquake</h3>
                
                <div className="bookshelf">
                {TerremotoBooks.slice(0, 8).map((book) => (
             <div
             key={book.id}
             className="book"
             title={book.title}
           >
             <img
               src={book.cover}
               alt={book.title}
               className="book-cover"
             />
           </div>
      ))}</div>
              </div>
          </div>
        </div>
      </div>

      {/* Videos Section */}
      <div id="videos-section" className="videos-section py-5" style={{backgroundColor: '#f5f5f5' }}>
        <div className="container">
          <h2 className="text-center mb-4" style={{ marginTop: '80px', fontSize: '2.5rem' }}>Videos</h2>
          <div className="divider mx-auto my-3" style={{ width: '60px', height: '3px', backgroundColor: '#003366' }}></div>
          <div className="row justify-content-center" style={{ marginTop: '80px' }}>
            {videoData.slice(0, 3).map((video, index) => (
              <div key={video.id} className="col-md-4 mb-4">
                <div 
                  className={`thumbnail ${visibleThumbnails.includes(index) ? 'visible' : ''}`}
                  ref={(el) => el && videoThumbnailsRef.current.push(el)}
                >
                  <div className="card">
                    <img src={video.img} className="card-img-top" alt={video.title} />
                    <div className="card-body">
                      <h5 className="card-title">{video.title}</h5>
                      <p className="card-text">{video.description}</p>
                      <a href={video.url} className="btn btn-primary">Watch Video</a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Social Media Section */}
          <div className="row justify-content-center mt-5">
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
      <footer className="footer">
  
        <p className="m-0 text-center text-white">Copyright &copy; Red Sísmica de Puerto Rico {new Date().getFullYear()}</p>

      </footer>
    </div>
    
  );
};

export default HomepageING; 