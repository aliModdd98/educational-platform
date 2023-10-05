import React, { useEffect, useState } from 'react'
import { fetchCourses } from '../store/courses.slice';
import Header from './../../../components/Header/Header'
import { useDispatch, useSelector } from 'react-redux';
import './CoursesStyle.css'
import {FaArrowCircleDown} from 'react-icons/fa'
import {AiFillStar} from 'react-icons/ai'
import { motion } from "framer-motion";
import Loader from '../../../components/Loader/Loader';
function Courses() {
    const dispatch = useDispatch();
    const courses = useSelector((state) => state.courses.data);
    const isLoading = useSelector((state) => state.courses.loading);

  console.log(courses)
  
  
  useEffect(() => {
      dispatch(fetchCourses());
    }, []);
  
    const [showAll, setShowAll] = useState(false);
    const visibleCourses = showAll ? courses : courses.slice(0, 6);
    const handleClick = () => {
      setShowAll(true);
    };
    const name="Our Courses"
    return (   <>{isLoading ? <Loader/> :
    
    <div><Header />
    <div className='coursesPage'>
    
    <div className="headerCourses">
    <motion.h1 className='name'>
         {name.split("").map((letter, index) => (
           <motion.span
             key={index}
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{  duration: 0.2, delay: index * 0.4 }}
           >
             {letter}
           </motion.span>
         ))}
       </motion.h1>
      
      <p>Find here a collection of outstanding educational courses that you can benefit from.</p>
    </div>

    <div className="courses">
      {visibleCourses.map((e) => (
        <div className='card' key={e.id}>
          <div className='imgCard'><img src={e.img} alt="courses" /></div>
          <div className="content">
            <h3>{e.name}</h3>
            <p className='rate'>{e.rating}<span><AiFillStar/></span></p>
          </div>
        </div>
      ))}
    </div>

    {!showAll && (
      <div className="button-container">
        <button className="more" onClick={handleClick}>
          <FaArrowCircleDown className="icon" size={48} />
        </button>
      </div>
    )}
  </div></div>}</>
     
    );
}

export default Courses