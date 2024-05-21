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
        </Routes>
      )}
      <ScrollToTopButton />
      <Footer />
      <ScrollingLine />
    </HashRouter>
  );
}

export default App;
