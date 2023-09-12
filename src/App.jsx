import 'react-router-dom'
import * as ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css'
import HomePage from './pages/HomePage/HomePage'
import AOS from 'aos';
import 'aos/dist/aos.css';

import { useEffect } from 'react';
import About from './pages/About/About';
import NewsPage from './pages/NewsPage/NewsPage';
function App() {
  useEffect(() => {
    AOS.init({
       });
  }, []);


  return (
    <Router>
      <Routes>
      <Route  path="*" exact element={<HomePage />} />
      <Route path="/about" element={<About/>} />
      <Route path="/news" element={<NewsPage/>} />
      </Routes>  </Router>
   


  )}
       



     


export default App
