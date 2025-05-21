import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaFacebook, FaYoutube, FaInstagram, FaRss } from 'react-icons/fa';
import logo from './RSPR_Logo.png';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './React-Header.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [fadeInClass, setFadeInClass] = useState('');
    const [activeDropdown, setActiveDropdown] = useState(null);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
      // Trigger the fade-in effect
      setFadeInClass('fade-in');
      
      // Close dropdown when clicking outside
      const handleOutsideClick = (event) => {
        if (!event.target.closest('.dropdown')) {
          setActiveDropdown(null);
        }
      };
      
      document.addEventListener('click', handleOutsideClick);
      
      return () => {
        document.removeEventListener('click', handleOutsideClick);
      };
    }, []);

    // Toggle dropdown visibility
    const toggleDropdown = (id, event) => {
      event.preventDefault();
      setActiveDropdown(activeDropdown === id ? null : id);
    };

    // Toggle the navbar collapse
    const toggleNavbar = () => {
      setIsOpen(!isOpen);
    };

    const handleLanguageChange = (e) => {
      e.preventDefault(); // Prevent default link behavior
      if (location.pathname === '/english/articulos') {
        navigate('/articulos');
      } else if (location.pathname === '/english/recursos') {
        navigate('/recursos');
      } else {
        navigate('/');
      }
    };

    // Close navbar when a link is clicked on mobile
    const handleNavLinkClick = () => {
      if (window.innerWidth <= 991.98) {
        setIsOpen(false);
      }
    };

  return (
    <nav className={`navbar fixed-top navbar-expand-lg navbar-dark bg-dark ${fadeInClass}`}>
      <div className="container-fluid">
        {/* Logo and Title Section */}
        <a className="navbar-brand d-flex align-items-center" href="https://redsismica.uprm.edu">
          <img
            src={logo}
            alt="Seismic Network Logo"
            className="me-2"
          />
          <div>
            <p>Puerto Rico</p>
            <small>Seismic Network</small>
          </div>
        </a>

        {/* Hamburger Toggle Button */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleNavbar}
          aria-controls="navbarNav"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {/* Our Work */}
            <li className={`nav-item dropdown ${activeDropdown === 'ourWorkDropdown' ? 'show' : ''}`}>
              <a 
                className="nav-link" 
                href="#" 
                id="ourWorkDropdown" 
                role="button" 
                onClick={(e) => toggleDropdown('ourWorkDropdown', e)}
                aria-expanded={activeDropdown === 'ourWorkDropdown'}
              >
                Our Work <i className="fas fa-caret-down"></i>
              </a>
              <ul className={`dropdown-menu dropdown-menu-right bg-dark ${activeDropdown === 'ourWorkDropdown' ? 'show' : ''}`} aria-labelledby="ourWorkDropdown">
                <li><a className="dropdown-item" href="https://redsismica.uprm.edu/english/our_work/" onClick={handleNavLinkClick}>Our Work</a></li>
                <li><a className="dropdown-item" href="https://redsismica.uprm.edu/english/our_work/personnel.php" onClick={handleNavLinkClick}>RSPR Directory</a></li>
                <li><a className="dropdown-item" href="https://redsismica.uprm.edu/english/our_work/instrumentation.php" onClick={handleNavLinkClick}>RSPR Instrumentation</a></li>
                <li><a className="dropdown-item" href="https://redsismica.uprm.edu/english/stations/" onClick={handleNavLinkClick}>Station Monitoring</a></li>
                <li><a className="dropdown-item" href="https://redsismica.uprm.edu/english/our_work/processing.php" onClick={handleNavLinkClick}>Data Analysis and Processing</a></li>
                <li><a className="dropdown-item" href="https://prsnmail.uprm.edu/fcIcal/prsn/indexs.php" onClick={handleNavLinkClick}>Activity Calendar</a></li>
                <li><a className="dropdown-item" href="https://redsismica.uprm.edu/english/research/" onClick={handleNavLinkClick}>Research</a></li>
              </ul>
            </li>

            {/* Seismicity */}
            <li className={`nav-item dropdown ${activeDropdown === 'seismicityDropdown' ? 'show' : ''}`}>
              <a 
                className="nav-link" 
                href="#" 
                id="seismicityDropdown" 
                onClick={(e) => toggleDropdown('seismicityDropdown', e)}
                aria-expanded={activeDropdown === 'seismicityDropdown'}
              >
                Seismicity <i className="fas fa-caret-down"></i>
              </a>
              <ul className={`dropdown-menu ${activeDropdown === 'seismicityDropdown' ? 'show' : ''}`} aria-labelledby="seismicityDropdown">
                <li><a className="dropdown-item" href="https://redsismica.uprm.edu/english/seismicity/" onClick={handleNavLinkClick}>Seismicity Portal</a></li>
                <li><a className="dropdown-item" href="https://redsismica.uprm.edu/english/seismicity/catalogues/general_catalogue.php" onClick={handleNavLinkClick}>General Catalog</a></li>
                <li><a className="dropdown-item" href="https://redsismica.uprm.edu/english/seismicity/catalogues/felt_catalogue.php" onClick={handleNavLinkClick}>Felt Earthquake Catalog</a></li>
                <li><a className="dropdown-item" href="https://redsismica.uprm.edu/english/seismicity/catalogues/regional_catalogue.php" onClick={handleNavLinkClick}>Catalog of the Caribbean and Adjacent Regions</a></li>
              </ul>
            </li>

            {/* Earthquakes and Tsunamis */}
            <li className={`nav-item dropdown ${activeDropdown === 'earthquakesDropdown' ? 'show' : ''}`}>
              <a 
                className="nav-link" 
                href="#" 
                id="earthquakesDropdown" 
                onClick={(e) => toggleDropdown('earthquakesDropdown', e)}
                aria-expanded={activeDropdown === 'earthquakesDropdown'}
              >
                Earthquakes and Tsunamis <i className="fas fa-caret-down"></i>
              </a>
              <ul className={`dropdown-menu ${activeDropdown === 'earthquakesDropdown' ? 'show' : ''}`} aria-labelledby="earthquakesDropdown">
                <li><a className="dropdown-item" href="https://redsismica.uprm.edu/english/education/" onClick={handleNavLinkClick}>Earthquake Educational Portal</a></li>
                <li><a className="dropdown-item" href="https://redsismica.uprm.edu/english/tsunami/evacuation_maps.php" onClick={handleNavLinkClick}>Evacuation Maps</a></li>
                <li><a className="dropdown-item" href="https://redsismica.uprm.edu/english/tsunami/" onClick={handleNavLinkClick}>Tsunami Program Portal</a></li>
                <li><a className="dropdown-item" href="#/english" onClick={handleNavLinkClick}>Educational Resources</a></li>
              </ul>
            </li>

            {/* Links */}
            <li className={`nav-item dropdown ${activeDropdown === 'linksDropdown' ? 'show' : ''}`}>
              <a 
                className="nav-link" 
                href="#" 
                id="linksDropdown" 
                onClick={(e) => toggleDropdown('linksDropdown', e)}
                aria-expanded={activeDropdown === 'linksDropdown'}
              >
                Links <i className="fas fa-caret-down"></i>
              </a>
              <ul className={`dropdown-menu ${activeDropdown === 'linksDropdown' ? 'show' : ''}`} aria-labelledby="linksDropdown">
                <li><a className="dropdown-item" href="https://redsismica.uprm.edu/english/research/work_study.php" onClick={handleNavLinkClick}>Job Offer</a></li>
                <li><a className="dropdown-item" href="https://www.uprm.edu/geology/" onClick={handleNavLinkClick}>Geology Department</a></li>
                <li><a className="dropdown-item" href="https://earthquake.usgs.gov/earthquakes/" onClick={handleNavLinkClick}>USGS</a></li>
                <li><a className="dropdown-item" href="https://tsunami.gov/" onClick={handleNavLinkClick}>Tsunami.gov</a></li>
              </ul>
            </li>

            {/* Conference Request */}
            <li className="nav-item">
              <a className="nav-link" href="https://redsismica.uprm.edu/english/education/conference_request.php" onClick={handleNavLinkClick}>
                Conference Request
              </a>
            </li>

            {/* English / Español */}
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={(e) => {
                handleLanguageChange(e);
                handleNavLinkClick();
              }}>
                Spanish / Español
              </a>
            </li>

            {/* Social Media Icons */}
            <div className="social-icons">
              <li className="nav-item">
                <a className="nav-link" href="http://www.facebook.com/redsismicadepuertorico" target="_blank" rel="noopener noreferrer" onClick={handleNavLinkClick}>
                  <FaFacebook />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="http://www.youtube.com/redsismicapr" target="_blank" rel="noopener noreferrer" onClick={handleNavLinkClick}>
                  <FaYoutube />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://www.instagram.com/redsismicapr/" target="_blank" rel="noopener noreferrer" onClick={handleNavLinkClick}>
                  <FaInstagram />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="http://www.prsn.uprm.edu/Data/prsn/RSS/catalogue/eqs1week.xml" target="_blank" rel="noopener noreferrer" onClick={handleNavLinkClick}>
                  <FaRss />
                </a>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
