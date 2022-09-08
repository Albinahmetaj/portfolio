import React from 'react'
import './footer.css'
import {AiOutlineFacebook} from 'react-icons/ai'
import {FiInstagram} from 'react-icons/fi'
import {FiTwitter} from 'react-icons/fi'
import {FaLaptopCode} from 'react-icons/fa'

function Footer() {
  return (
    <footer>
      <a href="#" className="footer-logo">Systemutvecklare <FaLaptopCode style={{marginLeft:'1rem'}}/></a>

      <ul className="permalinks">
      <li>
        <a href="#">Hem</a>
        </li>
        <li>
        <a href="#about">Om Mig</a>
        </li>
        <li>
        <a href="#experience">Erfarenhet</a>
        </li>
        <li>
        <a href="#services">Tjänster</a>
        </li>
        <li>
        <a href="#portfolio">Portfolio</a>
        </li>
        <li>
        <a href="#contact">Kontakt</a>
        </li>
      
      </ul>

      <div  className='footer-socials'>
<a href="https://facebook.com" target="_blank"><AiOutlineFacebook/></a>
<a href="https://instagram.com" target="_blank"><FiInstagram/></a>
<a href="https://twitter.com" target="_blank"><FiTwitter/></a>
      </div>

      <div className="footer-copyright">
<small>&copy; Albin Ahmetaj. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer