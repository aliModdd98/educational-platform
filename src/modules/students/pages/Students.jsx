import  { useEffect,useState } from "react";
import {fetchStudents}from './../store/students.slice'
import { useDispatch, useSelector } from "react-redux";
import './StudentsStyle.css'
import { motion } from "framer-motion";
import Header from "../../../components/Header/Header";
import { FaArrowCircleDown } from "react-icons/fa";
import Loader from "../../../components/Loader/Loader";
function Students() {
  const dispatch = useDispatch();
  const students = useSelector((state) => state.students.data);

  useEffect(() => {
    dispatch(fetchStudents());
  }, []);
  const [showAll, setShowAll] = useState(false);
  const visibleStudents = showAll ? students : students.slice(0, 4);
  const handleClick = () => {
    setShowAll(true);
  };
  const isLoading = useSelector((state) => state.students.isLoading);
const name="Our Students"
  return (
  
  
  <>
  {isLoading ? <Loader/> :<> <Header/>
   <div className="students">
    <div className="studentTitle">
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
   
    <span>This platform is designed exclusively for students like you, providing a centralized space where you can access a wealth of resources, connect with fellow learners, and unlock your full academic potential. </span>
    </div>
   <div className="student">
   {visibleStudents.map((student) => (
       <div className="studentCard" key={student.id}>
        <div className="studentImg"><img src={student.image}/></div>
         <div className="infor">
          <h2>{student.name}</h2>
          <span>{student.class}</span>
          <p className="descStudents">{student.desc}</p>
         </div>
        
        </div>
      ))}</div>
      {!showAll && (
        <button className="moreS" onClick={handleClick}>
          <span> <FaArrowCircleDown className="icon" size={48} /></span>
        </button>
      )}

    </div></>}
  </>
   
  )
}

export default Students