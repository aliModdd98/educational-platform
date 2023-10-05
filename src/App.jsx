import 'react-router-dom'
import * as ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

import { useEffect } from 'react';
import LandingPage from './components/Home/LandingPage';
import NavigateTo from './router/Navigate';
import { Provider } from 'react-redux';
// import Loader from './components/Loader/Loader';
import store from './store/index'


function App() {
  useEffect(() => {
    AOS.init({
       });
  }, []);

  // const { isLoading, teachers, courses, students } = useDataFetching();
  return (
 <Provider store={store}>
    <Router>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="*" element={<NavigateTo />} />
        </Routes>
  </Router>
  </Provider>
  )}
       



     


export default App
