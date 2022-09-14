import React from 'react'
import './services.css'
import {BsCheck2Circle} from 'react-icons/bs'

function Services() {
  return (
    <section id="services">
      <h5>Vad Har Jag Att Erbjuda?</h5>
      <h2>Tjänster</h2>

      <div className='container service-container'>
      <article className="service">
      <div className="service-head">
<h3>Spelutveckling</h3>
      </div>
      <ul className="service-list">
      <li>
<BsCheck2Circle className="service-list-icon"/>
<p> Skapa spelkarta i 2d.</p>
      </li>
      <li>
<BsCheck2Circle className="service-list-icon" style={{fontSize:'25px'}}/>
<p>Skapa och använda olika brickuppsättningar beroende på spelstil.</p>
      </li>
      <li>
<BsCheck2Circle className="service-list-icon"/>
<p>Karaktärrörelse med hjälp utav eventlisteners.</p>
      </li>
      <li>
<BsCheck2Circle className="service-list-icon"/>
<p>Upptäcka och skapa kollisioner.</p>
      </li>
      <li>
<BsCheck2Circle className="service-list-icon" style={{fontSize:'25px'}}/>
<p>Övergångar genom olika moment/beståndsdelar i spelet</p>
      </li>
      <li>
<BsCheck2Circle className="service-list-icon" style={{fontSize:'22px'}}/>
<p>Lägga till interaktion med andra spelare (NPC)</p>
      </li>
      </ul>
      </article>

      <article className="service">
      <div className="service-head">
<h3>Webbutveckling</h3>
      </div>
      <ul className="service-list">
      <li>
<BsCheck2Circle className="service-list-icon" style={{fontSize:'30px'}}/>
<p>Full-Stack Webbutveckling av projekt som kräver end-to-end cykelhantering</p>
      </li>
      <li>
<BsCheck2Circle className="service-list-icon"/>
<p>E-handel applikationer</p>
      </li>
      <li>
<BsCheck2Circle className="service-list-icon"/>
<p>Anpassade webbapplikationer</p>
      </li>
      <li>
<BsCheck2Circle className="service-list-icon"/>
<p>QA & Testing</p>
      </li>
      <li>
<BsCheck2Circle className="service-list-icon"/>
<p>Webbsupport och underhåll</p>
      </li>
      <li>
<BsCheck2Circle className="service-list-icon" style={{fontSize:'32px'}}/>
<p>Användning av olika agila utvecklingsmetoder som kanban/scrum mm...</p>
      </li>
      </ul>
      </article>

      <article className="service">
      <div className="service-head">
<h3>UML Design</h3>
      </div>
      <ul className="service-list">
      <li>
<BsCheck2Circle className="service-list-icon"/>
<p>Strukturera system med hjälp utav klassdiagram</p>
      </li>
      <li>
<BsCheck2Circle className="service-list-icon"style={{fontSize:'35px'}}/>
<p>Hjälpa utvecklare att specificera, visualisera, konstruera och dokumentera artefakter av ett mjukvarusystem</p>
      </li>
      <li>
<BsCheck2Circle className="service-list-icon"n/>
<p>Objektdiagram</p>
      </li>
      
      </ul>
      </article>


      </div>
    </section>
  )
}

export default Services