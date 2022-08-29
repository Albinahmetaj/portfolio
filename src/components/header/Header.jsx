import React from 'react'
import CTA from './CTA'
import './header.css'
import SelfImg from '../../assets/portfoliopic.png'
import HeaderSocials from './HeaderSocials'

function Header() {
  return (
    <header>
      <div className="container header-container">
    <h5>Hej mitt namn är</h5>
    <h1>Albin Ahmetaj</h1>
    <h5 className='text-light'>Fullstack Utvecklare</h5>
    <CTA/>
    <HeaderSocials/>
    <div className='self-portrait'>
      <img src={SelfImg} alt="me"/>
      </div>
      <a href="#contact" className='scroll-down'>Scrolla Ner</a>
    
    </div>
    </header>
  )
}

export default Header