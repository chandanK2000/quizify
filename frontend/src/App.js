
import React from 'react';
import './App.css';
import Header from './components/common/header/Header';
import Footer from './components/common/footer/Footer';
import Home from './components/common/Home/Home';
import ScrollToTopButton from './ScrollToTopButton';
import ScrollingLine from './ScrollingLine';


function App() {

  return (
    <div>
      <Header/>
      <ScrollToTopButton/>
  

      <Home/>
      <Footer /> 
      <ScrollingLine />

    </div>
  );
}

export default App;
