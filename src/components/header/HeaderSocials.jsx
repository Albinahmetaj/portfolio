import React from 'react'
import {FaLinkedin} from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa'
import {FaDribbble} from 'react-icons/fa'

function HeaderSocials() {
  return (
    <div className='header-socials'>
        <a href="https://www.linkedin.com/in/albin-ahmetaj-3288241b5/" target="_blank"><FaLinkedin/></a>
        <a href="https://github.com/Albinahmetaj" target="_blank"><FaGithub/></a>
       
    </div>
  )
}

export default HeaderSocials