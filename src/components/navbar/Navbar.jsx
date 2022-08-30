import React,{useState,useEffect} from 'react'
import './navbar.css'
import {FiHome,FiUser} from 'react-icons/fi'
import {HiOutlineBookOpen} from 'react-icons/hi'
import {FaRegHandshake} from 'react-icons/fa'
import {AiOutlineMessage} from 'react-icons/ai'


function Navbar() {
  const [activeNavItem, setActiveNavItem] = useState('#');
  return (
   <nav>
     <a href="#" onClick={() => setActiveNavItem('#')} className={activeNavItem === '#' ? 'active' : ''}><FiHome/></a>
     <a href="#about" onClick={() => setActiveNavItem('#about')} className={activeNavItem === '#about' ? 'active' : ''}><FiUser/></a>
     <a href="#experience" onClick={() => setActiveNavItem('#experience')} className={activeNavItem === '#experience' ? 'active' : ''}><HiOutlineBookOpen/></a>
     <a href="#services" onClick={() => setActiveNavItem('#services')} className={activeNavItem === '#services' ? 'active' : ''}><FaRegHandshake/></a>
     <a href="#contact" onClick={() => setActiveNavItem('#contact')} className={activeNavItem === '#contact' ? 'active' : ''}><AiOutlineMessage/></a>
   </nav>
  )
}

export default Navbar