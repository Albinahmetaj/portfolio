import React from 'react'
import './about.css'
import MeImg from '../../assets/portfoliopic4.png'
import {AiOutlineTrophy} from 'react-icons/ai'
import {FaLaptopCode} from 'react-icons/fa'
import {AiOutlineFileDone} from 'react-icons/ai'
import {BsFillChatDotsFill} from 'react-icons/bs'


function about() {
  return (
    <section id="about">
      <h5>Lära Känna Mig</h5>
      <h2>Om Mig</h2>

      <div className='container about-container'>
      <div className='about-me'>
      <img className='aboutme-image' src={MeImg} alt="" style={{width:'240px', height:'400px'}}/>
      </div>
      <div className='about-content'>
      <div className='about-cards'>
        <article className='about-card'>
          <AiOutlineTrophy className='about-icon'/>
        <h5>
          Erfarenhet
        </h5>
        <small>+2 Års Studier</small>
        </article>

        <article className='about-card'>
          <FaLaptopCode className='about-icon'/>
        <h5>
          Kompetens
        </h5>
        <small>Kompetens i över +8 olika programmerings ramverk/bibliotek</small>
        </article>

        <article className='about-card'>
          <AiOutlineFileDone className='about-icon'/>
        <h5>
          Projekt
        </h5>
        <small>+10 Avslutade Projekt</small>
        </article>



      </div>
      <p>
  Hejsan. <br/>
  Mitt namn är Albin, jag är 26 år gammal och är bosatt i den lilla kuststaden Falkenberg. En nyexaminerad student som på fritiden älskar att träna, fiska, läsa, resa, teknik, umgås med vänner
   och familj, där jag har utfört min tvåårs utbildning i grannstaden Varberg, under programmet Systemutveckling.NET på högskolan Campus Varberg. <br/> <br/> Jag är i jakt efter ett jobb inom systemutveckling och problemlösningsbranschen
   där jag vet att min tidigare erfarenhet har gett mig de kunskaper som är nödvändiga för att kunna lära mig och hantera de arbetsuppgifter som ingår i rollen som programmerare, men även expertis som låter mig lära samt fånga in nya system och programmeringsspråk.
   Jag hoppas att jag är rätt person för dig som tittar in och hoppas att få chansen att träffa er så att jag kan berätta mer om mig själv.
</p>
      <a href="#contact" className='btn btn-primary' style={{background:'#0b6db3', color:'white'}}>Låt Oss Prata <BsFillChatDotsFill style={{marginLeft:'5px'}}/> </a>
      </div>

      </div>
    </section>
  )
}

export default about