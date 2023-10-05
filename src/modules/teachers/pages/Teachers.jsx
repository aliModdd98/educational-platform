import React, { useEffect, useState } from "react";
import './TeachersStyle.css'
import { useDispatch, useSelector } from "react-redux";
import {FaArrowCircleDown} from 'react-icons/fa'
import { fetchTeachers } from "./../store/teacher.slice";
import { motion } from "framer-motion";
import Loader from './../../../components/Loader/Loader'
import Header from './../../../components/Header/Header'
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function Teachers() {
  // const { firts, data } = useLoaderData();
  const dispatch = useDispatch();
  const teachers = useSelector((state) => state.teachers.data);
  const isLoading = useSelector((state) => state.teachers.loading);

  useEffect(() => {
    dispatch(fetchTeachers());
  }, [dispatch]);
  const [showAll, setShowAll] = useState(false);
  const visibleTeachers = showAll ? teachers : teachers.slice(0, 6);
  const handleClick = () => {
    setShowAll(true);
  };
  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    AOS.refresh();
  });
const name="Our Teachers"
  return (
   <div> {isLoading ? <Loader/> :
  <div> <Header/>
   <div className="containerT">
        
   <div className="titleTeachers">

   <motion.h1 className='name'>
         {name.split("").map((letter, index) => (
           <motion.span
             key={index}
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ duration: 0.2, delay: index * 0.4 }}
           >
             {letter}
           </motion.span>
         ))}
       </motion.h1>
     <p>Our Teachers who teach on the internet the power of online resources to enhance your teaching practices, expand your knowledge base,
        and stay connected with the broader educational community. By embracing online learning, Our teachers demonstrate Our dedication to professional growth and Our commitment to providing the best possible education for Our students.</p>
   </div>
   
       <div className="teachers ">
               {teachers &&
           visibleTeachers?.map((teacher,index) => {
             return (
              <div
              className="card"
              key={index}
              id={`card-${index}`}
              data-aos="fade-left"
              data-aos-delay={index * 1000}
              data-aos-duration="900"
            >
                 <div className="teacherImg"><img src={teacher.img} alt="Teacher Image"/></div>
                <h2>{teacher.name} </h2> 
                <div className="info"><span>{teacher.subject}</span><span>{teacher.classes}</span></div>
                <p>{teacher.desc}</p>
               </div>
             );
         
           })}
              
       </div>
       {!showAll && (
               <div className="button-container">
                 <button className="more" onClick={handleClick}>
                   <FaArrowCircleDown className="icon" size={48} />
                 </button>
               </div>
             )}
       </div></div>}</div>
  );
}
