import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaFacebook, FaYoutube, FaInstagram, FaRss } from 'react-icons/fa';
import logo from './Recursos_Educativos/RSPR_Logo.png';
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
    if (location.pathname === '/articulos') {
      navigate('/english/articulos');
    } else if (location.pathname === '/recursos') {
      navigate('/english/recursos');
    } else {
      navigate('/english');
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
            alt="Red Sismica Logo"
            className="me-2"
          />
          <div>
            <p>Red Sísmica</p>
            <small>de Puerto Rico</small>
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
            {/* Nuestro Trabajo */}
            <li className={`nav-item dropdown ${activeDropdown === 'nuestroTrabajoDropdown' ? 'show' : ''}`}>
              <a
                className="nav-link"
                href="#"
                id="nuestroTrabajoDropdown"
                role="button"
                onClick={(e) => toggleDropdown('nuestroTrabajoDropdown', e)}
                aria-expanded={activeDropdown === 'nuestroTrabajoDropdown'}
              >
                Nuestro Trabajo <i className="fas fa-caret-down"></i>
              </a>
              <ul className={`dropdown-menu dropdown-menu-right bg-dark ${activeDropdown === 'nuestroTrabajoDropdown' ? 'show' : ''}`} aria-labelledby="nuestroTrabajoDropdown">
                <li><a className="dropdown-item" href="https://redsismica.uprm.edu/spanish/nuestro_trabajo/" onClick={handleNavLinkClick}>Nuestro Trabajo</a></li>
                <li><a className="dropdown-item" href="https://redsismica.uprm.edu/spanish/nuestro_trabajo/personal.php" onClick={handleNavLinkClick}>Directorio de la RSPR</a></li>
                <li><a className="dropdown-item" href="https://redsismica.uprm.edu/spanish/nuestro_trabajo/instrumentacion.php" onClick={handleNavLinkClick}>Instrumencion de la RSPR</a></li>
                <li><a className="dropdown-item" href="https://redsismica.uprm.edu/spanish/estaciones/" onClick={handleNavLinkClick}>Monitoreo de Estaciones</a></li>
                <li><a className="dropdown-item" href="https://redsismica.uprm.edu/spanish/nuestro_trabajo/procesamiento.php" onClick={handleNavLinkClick}>Análisis y Procesamiento de Datos</a></li>
                <li><a className="dropdown-item" href="https://prsnmail.uprm.edu/fcIcal/prsn/indexs.php" onClick={handleNavLinkClick}>Calendario de Actividades</a></li>
                <li><a className="dropdown-item" href="https://redsismica.uprm.edu/spanish/investigacion/" onClick={handleNavLinkClick}>Investigación</a></li>
              </ul>
            </li>

            {/* Sismicidad */}
            <li className={`nav-item dropdown ${activeDropdown === 'sismicidadDropdown' ? 'show' : ''}`}>
              <a
                className="nav-link"
                href="#"
                id="sismicidadDropdown"
                onClick={(e) => toggleDropdown('sismicidadDropdown', e)}
                aria-expanded={activeDropdown === 'sismicidadDropdown'}
              >
                Sismicidad <i className="fas fa-caret-down"></i>
              </a>
              <ul className={`dropdown-menu ${activeDropdown === 'sismicidadDropdown' ? 'show' : ''}`} aria-labelledby="sismicidadDropdown">
                <li><a className="dropdown-item" href="https://redsismica.uprm.edu/spanish/sismicidad/" onClick={handleNavLinkClick}>Portal de Sismicidad</a></li>
                <li><a className="dropdown-item" href="https://redsismica.uprm.edu/spanish/sismicidad/catalogos/catalogo_general.php" onClick={handleNavLinkClick}>Catálogo General</a></li>
                <li><a className="dropdown-item" href="https://redsismica.uprm.edu/spanish/sismicidad/catalogos/catalogo_significativos.php" onClick={handleNavLinkClick}>Catálogo de Sismos Significativos</a></li>
                <li><a className="dropdown-item" href="https://redsismica.uprm.edu/spanish/sismicidad/catalogos/catalogo_sentidos.php" onClick={handleNavLinkClick}>Catálogo de Sismos Sentidos</a></li>
                <li><a className="dropdown-item" href="https://redsismica.uprm.edu/spanish/sismicidad/catalogos/catalogo_especial_regional.php" onClick={handleNavLinkClick}>Catálogo Especial del Caribe y Regiones Adyacentes</a></li>
                <li><a className="dropdown-item" href="https://redsismica.uprm.edu/spanish/sismicidad/reportes/" onClick={handleNavLinkClick}>Reportes de Sismicidad</a></li>
              </ul>
            </li>

            {/* Terremotos y Tsunamis */}
            <li className={`nav-item dropdown ${activeDropdown === 'terremotosDropdown' ? 'show' : ''}`}>
              <a
                className="nav-link"
                href="#"
                id="terremotosDropdown"
                onClick={(e) => toggleDropdown('terremotosDropdown', e)}
                aria-expanded={activeDropdown === 'terremotosDropdown'}
              >
                Terremotos y Tsunamis <i className="fas fa-caret-down"></i>
              </a>
              <ul className={`dropdown-menu ${activeDropdown === 'terremotosDropdown' ? 'show' : ''}`} aria-labelledby="terremotosDropdown">
                <li><a className="dropdown-item" href="https://redsismica.uprm.edu/spanish/educacion/" onClick={handleNavLinkClick}>Portal Educativo de Terremotos</a></li>
                <li><a className="dropdown-item" href="https://redsismica.uprm.edu/spanish/tsunami/mapas_desalojo.php" onClick={handleNavLinkClick}>Mapas de Desalojo</a></li>
                <li><a className="dropdown-item" href="https://redsismica.uprm.edu/spanish/tsunami/" onClick={handleNavLinkClick}>Portal de Programa de Tsunamis</a></li>
                <li><a className="dropdown-item" href="#/" onClick={handleNavLinkClick}>Recursos Educativos</a></li>
              </ul>
            </li>

            {/* Enlaces */}
            <li className={`nav-item dropdown ${activeDropdown === 'enlacesDropdown' ? 'show' : ''}`}>
              <a
                className="nav-link"
                href="#"
                id="enlacesDropdown"
                role="button"
                onClick={(e) => toggleDropdown('enlacesDropdown', e)}
                aria-expanded={activeDropdown === 'enlacesDropdown'}
              >
                Enlaces <i className="fas fa-caret-down"></i>
              </a>
              <ul className={`dropdown-menu ${activeDropdown === 'enlacesDropdown' ? 'show' : ''}`} aria-labelledby="enlacesDropdown">
                <li><a className="dropdown-item" href="https://redsismica.uprm.edu/spanish/investigacion/empleos.php" onClick={handleNavLinkClick}>Oferta de trabajo</a></li>
                <li><a className="dropdown-item" href="https://www.uprm.edu/geology/" onClick={handleNavLinkClick}>Departamento de Geología</a></li>
                <li><a className="dropdown-item" href="https://earthquake.usgs.gov/earthquakes/" onClick={handleNavLinkClick}>USGS</a></li>
                <li><a className="dropdown-item" href="https://tsunami.gov/" onClick={handleNavLinkClick}>Tsunami.gov</a></li>
              </ul>
            </li>

            {/* Solicitud de Conferencia */}
            <li className="nav-item">
              <a className="nav-link" href="https://redsismica.uprm.edu/spanish/educacion/solicitud_conferencia.php" onClick={handleNavLinkClick}>
                Solicitud de Conferencia
              </a>
            </li>

            {/* Inglés / English */}
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={(e) => {
                handleLanguageChange(e);
                handleNavLinkClick();
              }}>
                Inglés / English
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
