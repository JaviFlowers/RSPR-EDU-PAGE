import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaFacebook, FaYoutube, FaInstagram, FaRss } from 'react-icons/fa';
import logo from './RSPR_Logo.png';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './React-Header.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useLocation, useNavigate } from 'react-router-dom';

const Header = () => {

    const [fadeInClass, setFadeInClass] = useState('');
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
      // Trigger the fade-in effect
      setFadeInClass('fade-in');
    }, []);

    const handleLanguageChange = (e) => {
      e.preventDefault(); // Prevent default link behavior
      if (location.pathname === '/english/articulos') {
        navigate('/articulos');
      } else {
        navigate('/');
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
            width="50"
            height="50"
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
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {/* Our Work */}
            <li className="nav-item dropdown">
              <a className="nav-link" href="#" id="ourWorkDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Our Work <i className="fas fa-caret-down"></i>
              </a>
              <ul className="dropdown-menu dropdown-menu-right bg-dark" aria-labelledby="ourWorkDropdown">
                <li><a className="dropdown-item" href="https://redsismica.uprm.edu/english/our_work/">Our Work</a></li>
                <li><a className="dropdown-item" href="https://redsismica.uprm.edu/english/our_work/personnel.php">RSPR Directory</a></li>
                <li><a className="dropdown-item" href="https://redsismica.uprm.edu/english/our_work/instrumentation.php">RSPR Instrumentation</a></li>
                <li><a className="dropdown-item" href="https://redsismica.uprm.edu/english/stations/">Station Monitoring</a></li>
                <li><a className="dropdown-item" href="https://redsismica.uprm.edu/english/our_work/processing.php">Data Analysis and Processing</a></li>
                <li><a className="dropdown-item" href="https://prsnmail.uprm.edu/fcIcal/prsn/indexs.php">Activity Calendar</a></li>
                <li><a className="dropdown-item" href="https://redsismica.uprm.edu/english/research/">Research</a></li>

              </ul>
            </li>

            {/* Seismicity */}
            <li className="nav-item dropdown">
              <a className="nav-link" href="#" id="seismicityDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                Seismicity <i className="fas fa-caret-down"></i>
              </a>
              <ul className="dropdown-menu" aria-labelledby="seismicityDropdown">
                <li><a className="dropdown-item" href="https://redsismica.uprm.edu/english/seismicity/">Seismicity Portal</a></li>
                <li><a className="dropdown-item" href="https://redsismica.uprm.edu/english/seismicity/catalogues/general_catalogue.php">General Catalog</a></li>
                <li><a className="dropdown-item" href="https://redsismica.uprm.edu/english/seismicity/catalogues/felt_catalogue.php">Felt Earthquake Catalog</a></li>
                <li><a className="dropdown-item" href="https://redsismica.uprm.edu/english/seismicity/catalogues/regional_catalogue.php">Catalog of the Caribbean and Adjacent Regions</a></li>
               
              </ul>
            </li>

            {/* Earthquakes and Tsunamis */}
            <li className="nav-item dropdown">
              <a className="nav-link" href="#" id="earthquakesDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                Earthquakes and Tsunamis <i className="fas fa-caret-down"></i>
              </a>
              <ul className="dropdown-menu" aria-labelledby="earthquakesDropdown">
                <li><a className="dropdown-item" href="https://redsismica.uprm.edu/english/education/">Earthquake Educational Portal</a></li>
                <li><a className="dropdown-item" href="https://redsismica.uprm.edu/english/tsunami/evacuation_maps.php">Evacuation Maps</a></li>
                <li><a className="dropdown-item" href="https://redsismica.uprm.edu/english/tsunami/">Tsunami Program Portal</a></li>
                <li><a className="dropdown-item" href="#/english">Educational Resources</a></li>

              </ul>
            </li>

            {/* Links */}
            <li className="nav-item dropdown">
              <a className="nav-link" href="#" id="linksDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                Links <i className="fas fa-caret-down"></i>
              </a>
              <ul className="dropdown-menu" aria-labelledby="linksDropdown">
                <li><a className="dropdown-item" href="https://redsismica.uprm.edu/english/research/work_study.php">Job Offer</a></li>
                <li><a className="dropdown-item" href="https://www.uprm.edu/geology/">Geology Department</a></li>
                <li><a className="dropdown-item" href="https://earthquake.usgs.gov/earthquakes/">USGS</a></li>
                <li><a className="dropdown-item" href="https://tsunami.gov/">Tsunami.gov</a></li>

              </ul>
            </li>

            {/* Conference Request */}
            <li className="nav-item">
              <a className="nav-link" href="https://redsismica.uprm.edu/english/education/conference_request.php">
                Conference Request
              </a>
            </li>

            {/* English / Español */}
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={handleLanguageChange}>
                Spanish / Español
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
