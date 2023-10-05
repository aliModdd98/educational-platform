import { IoIosMusicalNotes } from 'react-icons/io';
import { PiMathOperationsFill } from 'react-icons/pi';
import { GiOpenBook } from 'react-icons/gi';
import { RxReader } from 'react-icons/rx';
import { GoHistory } from 'react-icons/go';
import { FaHeadphones } from 'react-icons/fa';
import { SlCalender } from 'react-icons/sl';
import { BsFillPersonFill } from 'react-icons/bs';
import { GiMaterialsScience } from 'react-icons/gi';
import { MdBusinessCenter } from 'react-icons/md';
import { HiOutlineCalculator } from 'react-icons/hi';
import { BsPencil } from 'react-icons/bs';
import { VscGraphLine } from 'react-icons/vsc';
import { FaCamera } from 'react-icons/fa';
import { MdAnimation } from 'react-icons/md';
import image1 from './../../assets/fimg.webp'
import image2 from './../../assets/simg.webp'
import img1 from './img1.jpg';
import img2 from './img2.jpg';
import img3 from './img3.jpg';

export const subList = [
  {
    icon: <IoIosMusicalNotes size={28} />,
    title: "Music Class",
    desc: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
  },
  {
    icon: <PiMathOperationsFill size={28} />,
    title: "Math Class",
    desc: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
  },
  {
    icon: <GiOpenBook size={28} />,
    title: "English Class",
    desc: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
  },
  {
    icon: <RxReader size={28} />,
    title: "Reading Class",
    desc: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
  },
  {
    icon: <GoHistory size={28} />,
    title: "History Class",
    desc: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
  },
  {
    icon: <FaHeadphones size={28} />,
    title: "Music",
    desc: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
  },
];

export const SchoolNews = [
  {
    src: image1,
    title: "Education for Tomorrow's Leaders",
    icon1: <SlCalender size={12} />,
    date: "June 22, 2020",
    icon2: <BsFillPersonFill size={12} />,
    admin: "Admin",
    paragraph: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    more: "Learn More"
  },
  // Add more objects to the array as needed
];

export const pricing = [
  {
    title: "Starter",
    price: "$50.99",
    paragraph: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    button: "GET STARTED"
  },
  {
    title: "Business",
    price: "$99.99",
    paragraph: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    button: "GET STARTED"
  },
  {
    title: "Premium",
    price: "$199.99",
    paragraph: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    button: "GET STARTED"
  }
];

export const currentInfoData = [
  {
    image: img1,
    name: "John Doe",
    position: "CEO, Founder"
  },
  {
    image: img2,
    name: "Ruby Mar",
    position: "Front-end Developer"
  },
  {
    image: img3,
    name: "Jan Kho",
    position: "Back-end Developer"
  },
];

export const category_list = [
  {
    title: "Science",
    numOfCources: "1,391 courses",
    icon: <GiMaterialsScience />,
  },
  {
    title: "Business",
    numOfCources: "3,234 courses",
    icon: <MdBusinessCenter />,
  },
  {
    title: "Finance Accounting",
    numOfCources: "931 courses",
    icon: <HiOutlineCalculator />,
  },
  {
    title: "Design",
    numOfCources: "7,291 courses",
    icon: <BsPencil />,
  },
  {
    title: "Music",
    numOfCources: "9,114 courses",
    icon: <IoIosMusicalNotes />,
  },
  {
    title: "Marketing",
    numOfCources: "2,391 courses",
    icon: <VscGraphLine />,
  },
  {
    title: "Photography",
    numOfCources: "7,991 courses",
    icon: <FaCamera />,
  },
  {
    title: "Animation",
    numOfCources: "6,491 courses",
    icon: <MdAnimation />,
  },
];