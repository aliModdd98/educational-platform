import React, { useEffect, useState } from 'react'
import bgimage from './../../assets/home.webp'
import './LandingPageStyle.css'
import teachers from './../../assets/teachers.webp'
import main from './../../assets/main.webp'
import students from './../../assets/students.webp'
import cources from './../../assets/cources.webp'
import {BsArrowRightCircleFill} from'react-icons/bs'
import { NavLink } from 'react-router-dom';
import Loader from './../Loader/Loader'

import { motion } from "framer-motion";
function LandingPage() {
 
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
     const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);
  const name="Welcome"
  return (
  <>{isLoading ? 
   <Loader/>
  :<div className='home ' >

<div className="MainContainer">
     <div className="mainImage"><img className='MainImag' src={bgimage} alt="img" /></div>
     <div className="titlePage">
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
    <h4>Online Education</h4>
    </div> 
     <div className="sectionPlatform">
      <div className='sectionp'> <img className='imgsec' src={main} alt="img" />
             <h2>Home</h2>
             <div className='iconss'> <NavLink to="/main-routes" activeClassName="active"><BsArrowRightCircleFill size={32}/></NavLink></div>
       </div>
       <div className='sectionp'> 
       <img className='imgsec' src={cources} alt="img" />
      <h2>Cources</h2>
      <div className='iconss'><NavLink to="/courses" activeClassName="active"><BsArrowRightCircleFill size={32}/></NavLink></div> </div>
      <div className='sectionp'> <img className='imgsec' src={teachers} alt="img" />
      <h2>Teachers</h2>
      <div className='iconss'><NavLink to="/teachers" activeClassName="active"><BsArrowRightCircleFill size={32}/></NavLink></div>
       </div>
      <div className='sectionp'><img className='imgsec' src={students} alt="img" />
      <h2>Students</h2>
      <div className='iconss'><NavLink to="/students" activeClassName="active"><BsArrowRightCircleFill size={40}/></NavLink></div> </div>
     
     </div>
  </div>
    </div>}
    </> 
  )
}

export default LandingPage



