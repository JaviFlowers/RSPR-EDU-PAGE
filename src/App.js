import React, { useEffect } from 'react';
import BookShelfPdf from './component/BookshelfPdf';
import BookShelfING from './component/BookshelfPdf_ING';
import Header from './component/React-Header';
import HeaderING from './component/React-Header_ING';
import ArticulosEdu from './component/Articulos_Edu';
import ArticulosEduING from './component/Articulos_EduING';
import { pdfjs } from 'react-pdf';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Homepage from './component/Homepage';
import HomepageING from './component/Homepage_ING';

pdfjs.GlobalWorkerOptions.workerSrc = "https://unpkg.com/pdfjs-dist@4.4.168/build/pdf.worker.min.mjs";

/**
 * Inline ScrollToTop resets scroll position on each route change
 */
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Routes>
        <Route
            path="/"
            element={
            <>
            <Header/>
            <Homepage />
            </>
          }
          />

          <Route
            path="/english"
            element={
            <>
            <HeaderING/>
            <HomepageING />
            </>
          }
          />
          <Route
            path="/recursos"
            element={
              <>
                <Header />
                <BookShelfPdf />
              </>
            }
          />
          <Route
            path="/articulos"
            element={
              <>
                <Header/>
                <ArticulosEdu/>
              </>
            }
          />
          
          <Route
            path="/english/recursos"
            element={
              <>
                <HeaderING />
                <BookShelfING />
              </>
            }
          />
          <Route
            path="/english/articulos"
            element={
              <>
                <HeaderING />
                <ArticulosEduING />
              </>
            }
          />
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
