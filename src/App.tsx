import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.css';

/*Import Components*/ 
import Header from './components/Header/Header';
import MovieView from './components/MovieView/MovieView';
import AboutView from './components/AboutView/AboutView';
import Footer from './components/Footer/Footer';

const App = () => {

  return (
    <BrowserRouter>
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<MovieView/>}/>
        <Route path="about" element={<AboutView/>}/>
      </Routes>
      <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;
