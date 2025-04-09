import React from 'react';
import BookShelfPdf from './component/BookshelfPdf';
import BookShelfING from './component/BookshelfPdf_ING';
import Header from './component/React-Header';
import HeaderING from './component/React-Header_ING';
import ArticulosEdu from './component/Articulos_Edu';
import ArticulosEduING from './component/Articulos_EduING';
import { pdfjs } from 'react-pdf';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

pdfjs.GlobalWorkerOptions.workerSrc = "https://unpkg.com/pdfjs-dist@4.4.168/build/pdf.worker.min.mjs";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
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
            path="/english"
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
