import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/common/header/Header';
import Footer from './components/common/footer/Footer';
import Home from './components/common/Home/Home';
import ScrollToTopButton from './ScrollToTopButton';
import ScrollingLine from './ScrollingLine';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './About';
import Skeleton from './Skeleton';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import QuizSet from './QuizSet';
import QuizSetDetails from './QuizSetDetails';
import QuizHistory from './QuizHistory';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Header />
      {loading ? (
        <div><Skeleton /></div>
      ) : (
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/free-quizzes/:subjectName" element={<QuizSet />} />
          <Route exact path="/free-quizzes/:subjectName/set/:quizSet" element={<QuizSetDetails />} />
          <Route path="/quiz-history/:subjectName/set/:quizSet" element={<QuizHistory />} /> {/* Use :quizSet */}
        </Routes>
      )}
      <ScrollToTopButton />
      <Footer />
      <ScrollingLine />
      <ToastContainer />
    </Router>
  );
}

export default App;
