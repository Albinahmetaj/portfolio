import React from 'react'
import './about.css'
import MeImg from '../../assets/portfoliopic4.png'
import {AiOutlineTrophy} from 'react-icons/ai'
import {HiOutlineUsers} from 'react-icons/hi'
import {AiOutlineFileDone} from 'react-icons/ai'


function about() {
  return (
    <section id="about">
      <h5>Lära Känna Mig</h5>
      <h2>Om Mig</h2>

      <div className='container about-container'>
      <div className='about-me'>
      <img className='aboutme-image' src={MeImg} alt="" style={{width:'438px', height:'588px'}}/>
      </div>
      <div className='about-content'>
      <div className='about-card'>
        <article className='about-card'>
          <AiOutlineTrophy className='about-icon'/>
        <h5>
          Erfarenhet
        </h5>
        <small>+2 År Studier</small>
        </article>

        <article className='about-card'>
          <HiOutlineUsers className='about-icon'/>
        <h5>
          Klienter
        </h5>
        <small>+100 Klienter Över Hela Världen</small>
        </article>

        <article className='about-card'>
          <AiOutlineFileDone className='about-icon'/>
        <h5>
          Projekt
        </h5>
        <small>+10 Avslutade Projekt</small>
        </article>
<p>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. 
  Mollitia iure reprehenderit perferendis ipsa molestiae ipsam quo unde nostrum, provident dolore aliquam, 
  quidem voluptate, rem consectetur expedita dignissimos laborum sunt explicabo.
</p>

<a href="#contact" className='btn btn-primary'>Låt Oss Prata</a>
      </div>
      </div>

      </div>
    </section>
  )
}

export default about