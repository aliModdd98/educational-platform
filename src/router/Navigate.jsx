import { Route, Routes } from 'react-router-dom';
import Courses from './../modules/courses/pages/Courses';
import Teachers from '../modules/teachers/pages/Teachers';
import Students from '../modules/students/pages/Students';
import MainRoutes from '../modules/main/router/routes';
import Footer from '../components/Footer/Footer';
// import MainRoutes from '../modules/main/router/routes';

const NavigateTo = () => {
  return (
    <Routes>
      <Route path="/main-routes/" element={<MainRoutes />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/teachers" element={<Teachers />} />
      <Route path="/students" element={<Students />} />
      <Route path='/footer' element={<Footer/>}/>
      <Route path="*" element={<MainRoutes />} />
    </Routes>
  );
};

export default NavigateTo;

