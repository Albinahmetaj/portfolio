import React from 'react'
import './portfolio.css'
import GameImg from '../../assets/Spelkarta.PNG'


const data=[
{
  id: 1,
  image: GameImg,
  title: 'RPG-Spel 2d',
  github: 'https://github.com',
  demo:'https://www.vimeo.com'
},
{
  id: 2,
  image: GameImg,
  title: '2d Spelutveckling',
  github: 'https://github.com',
  demo:'https://www.vimeo.com'
},
{
  id: 3,
  image: GameImg,
  title: '2d Spelutveckling',
  github: 'https://github.com',
  demo:'https://www.vimeo.com'
},
{
  id: 4,
  image: GameImg,
  title: '2d Spelutveckling',
  github: 'https://github.com',
  demo:'https://www.vimeo.com'
},
{
  id: 5,
  image: GameImg,
  title: '2d Spelutveckling',
  github: 'https://github.com',
  demo:'https://www.vimeo.com'
},
{
  id: 6,
  image: GameImg,
  title: '2d Spelutveckling',
  github: 'https://github.com',
  demo:'https://www.vimeo.com'
},
]


function Portfolio() {
  return (
    <section id="portfolio">
      <h5>Mina Projekt</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio-container">
       {
        data.map(({id, image, title, github, demo})=>{
          return(
            <article key={id} className='portfolio-item'>
            <div className="portfolio-item-image">
              <img src={image} alt={title}/>
              
            </div>
            
            <h3>{title}</h3>
            <div className="portfolio-item-cta">
            <a href={github} className='btn' target='_blank'>Github</a>
            <a href={demo} className='btn btn-primary' target='_blank'>Demo Projekt</a>
            </div>
            </article>
          )
        })
       }

        
      </div>
    </section>
  )
}

export default Portfolio