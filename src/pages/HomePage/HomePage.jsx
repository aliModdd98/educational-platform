import React from 'react'
import Header from '../../components/Header/Header'
import First_sec from '../../components/BodyPage/FirstSec/First-sec'
import {IoIosMusicalNotes} from 'react-icons/io'
import {GiMaterialsScience} from 'react-icons/gi'
import {MdBusinessCenter} from 'react-icons/md'
import {HiOutlineCalculator} from 'react-icons/hi'
import {BsPencil} from 'react-icons/bs'
import {FaCamera} from 'react-icons/fa'
import {VscGraphLine} from 'react-icons/vsc'
import {MdAnimation} from 'react-icons/md'
import SecondSec from '../../components/BodyPage/SecondSec/SecondSec'
import ThirdSec from '../../components/BodyPage/ThirdSec/ThirdSec'
import {PiMathOperationsFill}  from 'react-icons/pi'
import {GiOpenBook} from 'react-icons/gi'
import {RxReader} from 'react-icons/rx'
import {GoHistory}from 'react-icons/go'
import {FaHeadphones} from 'react-icons/fa'
import FourthSec from '../../components/BodyPage/FourthSec/FourthSec'

import FifthSec from '../../components/BodyPage/FifthSec/FifthSec'
import SexSec from '../../components/BodyPage/SixSec/SexSec'
import SevenSec from '../../components/BodyPage/SevenSec/SevenSec'
import image1 from './../../assets/fimg.webp'
import image2 from './../../assets/simg.webp'
import { SlCalender } from 'react-icons/sl'
import {BsFillPersonFill}from 'react-icons/bs'
import EighthSec from '../../components/BodyPage/Eighth/EighthSec'
import NinthSec from '../../components/BodyPage/NinthSec/NinthSec'
import currentInfoData from './../../Const/InfoTeacher.js'
import TenthSec from '../../components/BodyPage/TenthSec/TenthSec'
import Footer from '../../components/Footer/Footer'
import pricing from './../../Const/Pricing.js'
function HomePage() {

  const subList=[
    {
      icon:<IoIosMusicalNotes size={28}/>,
      title:"Music Class",
      desc:"Far far away, behind the word mountains , far from the countries Vokalia and Consonantia, there live the blind texts."
    },  {
      icon:<PiMathOperationsFill size={28}/>,
      title:"Math Class",
      desc:"Far far away, behind the word mountains , far from the countries Vokalia and Consonantia, there live the blind texts."
    },  {
      icon:<GiOpenBook size={28}/>,
      title:"English Class",
      desc:"Far far away, behind the word mountains , far from the countries Vokalia and Consonantia, there live the blind texts."
    },  {
      icon:<RxReader size={28}/>,
      title:"Reading Class",
      desc:"Far far away, behind the word mountains , far from the countries Vokalia and Consonantia, there live the blind texts."
    },  {
      icon:<GoHistory size={28}/>,
      title:"History Class",
      desc:"Far far away, behind the word mountains , far from the countries Vokalia and Consonantia, there live the blind texts."
    },  {
      icon:<FaHeadphones size={28}/>,
      title:"Music ",
      desc:"Far far away, behind the word mountains , far from the countries Vokalia and Consonantia, there live the blind texts."
    },
  ]
  const SchoolNews=[
    {
      src:image1,
      title:"Education for Tomorrow's Leaders",
      icon1:<SlCalender size={12}/>,
      date:"June 22, 2020",
      icon2:<BsFillPersonFill size={12}/>,
      admin:"Admin",
      paragraph:"Far far away, behind the word mountains , far from the countries Vokalia and Consonantia, there live the blind texts.",
      more:"Learn More"
    },
    {
      src:image2,
      title:"Enroll Your Kids This Summer to get 30% off",
      icon1:<SlCalender size={12}/>,
      date:"June 22, 2020",
      icon2:<BsFillPersonFill size={12}/>,
      admin:"Admin",
      paragraph:"Far far away, behind the word mountains , far from the countries Vokalia and Consonantia, there live the blind texts.",
      more:"Learn More"
    }
    ]
  
const category_list=[ {
  title:"Science",
  numOfCources:"1,391 cources",
  icon:<GiMaterialsScience/> ,
},{
  title:"Business",
  numOfCources:"3,234 cources",
  icon:<MdBusinessCenter/>,
},{
  title:"Finance Accounting",
  numOfCources:"931 cources",
  icon:<HiOutlineCalculator/> 
},{
  title:"Design",
  numOfCources:"7,291 cources",
  icon:<BsPencil/> 
},{
  title:"Music",
  numOfCources:"9,114 cources",
  icon:<IoIosMusicalNotes/>
},{
  title:"Marketing",
  numOfCources:"2,391 cources",
  icon:<VscGraphLine />
},{
  title:"Photography",
  numOfCources:"7,991 cources",
  icon:<FaCamera/>
},{
  title:"Animation",
  numOfCources:"6,491 cources",
  icon:<MdAnimation />
}]

  return (
   <div>
      <Header pageName="WATCH THE VIDEO" desc="Education is the mother of Leadership" />
      <First_sec category_list={category_list} /> 
        <SecondSec /> 
        <ThirdSec  subList={subList}/>
        <FourthSec />
         <FifthSec/>
         <SexSec/>
         <SevenSec SchoolNews={SchoolNews}/>
         <EighthSec pricing={pricing}/>
         <NinthSec data={currentInfoData}/>
         <TenthSec/>
      
       <Footer />
    </div>
  
  )
}

export default HomePage