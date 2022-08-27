import React from 'react'
import CTA from './CTA'
import './header.css'
import SelfImg from '../../assets/self-portrait.jpg'

function Header() {
  return (
    <header>
      <div className="container header__container">
    <h5>Hej mitt namn är</h5>
    <h1>Albin Ahmetaj</h1>
    <h5 className='text-light'>Fullstack Utvecklare</h5>
    <CTA/>
    <div className='self-portrait'>
      <img src={SelfImg} alt="me" style={{width:'300px'}}/>
      </div>
      <a href="#contact" className='scroll-down'>Scrolla Ner</a>
    
    </div>
    </header>
  )
}

export default Header