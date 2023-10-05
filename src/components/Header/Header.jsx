import './HeaderStyle.css'
import bg from './../../assets/bg.jpg'
import {BsQuestionCircle} from 'react-icons/bs'
import {FiMail}from 'react-icons/fi'
import {BsTelephone}from 'react-icons/bs'
import Dropdown from './DropDown';
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import 'aos/dist/aos.css';

function Header({pageName,desc}) {
  
  const [open, setOpen] = useState(false);
    const containerStyle = {
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      };
        return (
          <div data-aos="flip-left">
    <div className='header ' style={containerStyle} >
     <div className="overlay" >
    
    {/* navBar */}
     <nav className="navbar">
      <div className="left-section">
     <span className="icon-text">
       <BsQuestionCircle  className="custom-icon" /> Have a question?
     </span>
     <span className="icon-text">
       <BsTelephone className="custom-icon"/> 10 20 123 456
    
    </span>
     <span className="icon-text">
      <FiMail className="custom-icon"/>info@mydomain.com
     </span>
      </div>
      <div className="right-section">
      <button className='btn'>Log in</button>
      <button className='btn'>Register</button>
      </div>
     </nav>

     <hr className="horizontal-line" />

     <div className="top-header">
    <div className='logo'> Learner</div>
    <div className="details">
    <div className="item"> <NavLink to="/" exact activeClassName="active " className="item">Home</NavLink></div>
    <div className="item"><Dropdown open={open} setOpen={setOpen}/></div>
    <div className="item"><NavLink to="/teachers" activeClassName="active" className="item boxteachers">Our Staff</NavLink></div>
    <div className="item"> <NavLink to="/about" activeClassName="active" className="item">About</NavLink></div>
    <div className="item"><NavLink to="/footer"className="item" activeClassName="active">Gallery</NavLink></div>
    <div className="item"> <NavLink to="/news" activeClassName="active" className="item">News</NavLink></div>
    <div className="item"><NavLink to="/footer" className="item" activeClassName="active">Contact</NavLink></div>
   
    </div>
    <div className="btn"><button>ENROLL NOW</button></div> 
     </div>
       
       
       
     
            <div className="content-header" >
            <p>{pageName}</p>
            <h3>{desc}</h3>
            <button className='btn'>EXPLORE COURSES</button>
        </div>
        
       
       
       
       
           </div>
     
    </div></div>
  )
}

export default Header