import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaFacebook, FaYoutube, FaInstagram, FaRss } from 'react-icons/fa';
import logo from './RSPR_Logo.png';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './React-Header.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useLocation, useNavigate } from 'react-router-dom';
import './EducacionPage.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [fadeInClass, setFadeInClass] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Trigger the fade-in effect
    setFadeInClass('fade-in');
  }, []);

  const handleLanguageChange = (e) => {
    e.preventDefault(); // Prevent default link behavior
    if (location.pathname === '/articulos') {
      navigate('/english/articulos');
    } else {
      navigate('/english');
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
            width="50"
            height="50"
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
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {/* Nuestro Trabajo */}
            <li className="nav-item dropdown">
              <a
                className="nav-link"
                href="#"
                id="nuestroTrabajoDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Nuestro Trabajo <i className="fas fa-caret-down"></i>
              </a>
              <ul className="dropdown-menu dropdown-menu-right bg-dark" aria-labelledby="nuestroTrabajoDropdown">
                <li><a className="dropdown-item" href="https://redsismica.uprm.edu/spanish/nuestro_trabajo/">Nuestro Trabajo</a></li>
                <li><a className="dropdown-item" href="https://redsismica.uprm.edu/spanish/nuestro_trabajo/personal.php">Directorio de la RSPR</a></li>
                <li><a className="dropdown-item" href="https://redsismica.uprm.edu/spanish/nuestro_trabajo/instrumentacion.php">Instrumencion de la RSPR</a></li>
                <li><a className="dropdown-item" href="https://redsismica.uprm.edu/spanish/estaciones/">Monitoreo de Estaciones</a></li>
                <li><a className="dropdown-item" href="https://redsismica.uprm.edu/spanish/nuestro_trabajo/procesamiento.php">Análisis y Procesamiento de Datos</a></li>
                <li><a className="dropdown-item" href="https://prsnmail.uprm.edu/fcIcal/prsn/indexs.php">Calendario de Actividades</a></li>
                <li><a className="dropdown-item" href="https://redsismica.uprm.edu/spanish/investigacion/">Investigación</a></li>
              </ul>
            </li>

            {/* Sismicidad */}
            <li className="nav-item dropdown">
              <a
                className="nav-link"
                href="#"
                id="sismicidadDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Sismicidad <i className="fas fa-caret-down"></i>
              </a>
              <ul className="dropdown-menu" aria-labelledby="sismicidadDropdown">
                <li><a className="dropdown-item" href="https://redsismica.uprm.edu/spanish/sismicidad/">Portal de Sismicidad</a></li>
                <li><a className="dropdown-item" href="https://redsismica.uprm.edu/spanish/sismicidad/catalogos/catalogo_general.php">Catálogo General</a></li>
                <li><a className="dropdown-item" href="https://redsismica.uprm.edu/spanish/sismicidad/catalogos/catalogo_significativos.php">Catálogo de Sismos Significativos</a></li>
                <li><a className="dropdown-item" href="https://redsismica.uprm.edu/spanish/sismicidad/catalogos/catalogo_sentidos.php">Catálogo de Sismos Sentidos</a></li>
                <li><a className="dropdown-item" href="https://redsismica.uprm.edu/spanish/sismicidad/catalogos/catalogo_especial_regional.php">Catálogo Especial del Caribe y Regiones Adyacentes</a></li>
                <li><a className="dropdown-item" href="https://redsismica.uprm.edu/spanish/sismicidad/reportes/">Reportes de Sismicidad</a></li>
              </ul>
            </li>

            {/* Terremotos y Tsunamis */}
            <li className="nav-item dropdown">
              <a
                className="nav-link"
                href="#"
                id="terremotosDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Terremotos y Tsunamis <i className="fas fa-caret-down"></i>
              </a>
              <ul className="dropdown-menu" aria-labelledby="terremotosDropdown">
                <li><a className="dropdown-item" href="https://redsismica.uprm.edu/spanish/educacion/">Portal Educativo de Terremotos</a></li>
                <li><a className="dropdown-item" href="https://redsismica.uprm.edu/spanish/tsunami/mapas_desalojo.php">Mapas de Desalojo</a></li>
                <li><a className="dropdown-item" href="https://redsismica.uprm.edu/spanish/tsunami/">Portal de Programa de Tsunamis</a></li>
                <li><a className="dropdown-item" href="#/">Recursos Educativos</a></li>
              </ul>
            </li>

            {/* Enlaces */}
            <li className="nav-item dropdown">
              <a
                className="nav-link"
                href="#"
                id="enlacesDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Enlaces <i className="fas fa-caret-down"></i>
              </a>
              <ul className="dropdown-menu" aria-labelledby="enlacesDropdown">
                <li><a className="dropdown-item" href="https://redsismica.uprm.edu/spanish/investigacion/empleos.php">Oferta de trabajo</a></li>
                <li><a className="dropdown-item" href="https://www.uprm.edu/geology/">Departamento de Geología</a></li>
                <li><a className="dropdown-item" href="https://earthquake.usgs.gov/earthquakes/">USGS</a></li>
                <li><a className="dropdown-item" href="https://tsunami.gov/">Tsunami.gov</a></li>
              </ul>
            </li>

            {/* Solicitud de Conferencia */}
            <li className="nav-item">
              <a className="nav-link" href="https://redsismica.uprm.edu/spanish/educacion/solicitud_conferencia.php">
                Solicitud de Conferencia
              </a>
            </li>

            {/* Inglés / English */}
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={handleLanguageChange}>
                Inglés / English
              </a>
            </li>

            {/* Social Media Icons */}
            <li className="nav-item">
              <a className="nav-link" href="http://www.facebook.com/redsismicadepuertorico" target="_blank" rel="noopener noreferrer">
                <FaFacebook />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="http://www.youtube.com/redsismicapr" target="_blank" rel="noopener noreferrer">
                <FaYoutube />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://www.instagram.com/redsismicapr/" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="http://www.prsn.uprm.edu/Data/prsn/RSS/catalogue/eqs1week.xml" target="_blank" rel="noopener noreferrer">
                <FaRss />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
