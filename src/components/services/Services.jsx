import React from 'react'
import './services.css'
import {BsCheck2Circle} from 'react-icons/bs'

function Services() {
  return (
    <section id="services">
      <h5>Vad Jag Har Att Erbjuda</h5>
      <h2>Tjänster</h2>

      <div className='container service-container'>
      <article className="service">
      <div className="service-head">
<h3>Spelutveckling</h3>
      </div>
      <ul className="service-list">
      <li>
<BsCheck2Circle className="service-list-icon"/>
<p> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </li>
      <li>
<BsCheck2Circle className="service-list-icon"/>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </li>
      <li>
<BsCheck2Circle className="service-list-icon"/>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </li>
      <li>
<BsCheck2Circle className="service-list-icon"/>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </li>
      <li>
<BsCheck2Circle className="service-list-icon"/>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </li>
      </ul>
      </article>

      <article className="service">
      <div className="service-head">
<h3>Webbutveckling</h3>
      </div>
      <ul className="service-list">
      <li>
<BsCheck2Circle className="service-list-icon"/>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </li>
      <li>
<BsCheck2Circle className="service-list-icon"/>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </li>
      <li>
<BsCheck2Circle className="service-list-icon"/>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </li>
      <li>
<BsCheck2Circle className="service-list-icon"/>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </li>
      <li>
<BsCheck2Circle className="service-list-icon"/>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
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
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </li>
      <li>
<BsCheck2Circle className="service-list-icon"/>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </li>
      <li>
<BsCheck2Circle className="service-list-icon"n/>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </li>
      <li>
<BsCheck2Circle className="service-list-icon"/>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </li>
      <li>
<BsCheck2Circle className="service-list-icon"/>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </li>
      </ul>
      </article>


      </div>
    </section>
  )
}

export default Services