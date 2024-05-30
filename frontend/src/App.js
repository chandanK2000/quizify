import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/common/header/Header';
import Footer from './components/common/footer/Footer';
import Home from './components/common/Home/Home';
import ScrollToTopButton from './ScrollToTopButton';
import ScrollingLine from './ScrollingLine';
import { HashRouter, Routes, Route } from 'react-router-dom';
import About from './About';
import Skeleton from './Skeleton';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Quiz from './Quiz'; // Import the Quiz component

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <HashRouter>
      <Header />

      {loading ? (
        <div><Skeleton /></div>
      ) : (
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/quiz/html" element={<Quiz subject="HTML" />} /> 
          <Route exact path="/quiz/css" element={<Quiz subject="CSS" />} /> 
            <Route exact path="/quiz/javascript" element={<Quiz subject="JavaScript" />} />
            <Route exact path="/quiz/react" element={<Quiz subject="react" />} /> 
         
        </Routes>
      )}
      <ScrollToTopButton />
      <Footer />
      <ScrollingLine />
      <ToastContainer />
    </HashRouter>
  );
}

export default App;
