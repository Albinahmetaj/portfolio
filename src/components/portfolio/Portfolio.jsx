import React from 'react'
import './portfolio.css'
import GameImg from '../../assets/RPGIMG.PNG'
import PortfolioIMG from '../../assets/Portfolio.png'
import eCommerceIMG from '../../assets/web_shopping.png'
import CoursebookingIMG from '../../assets/Bookin.png'
import PhotoGalleryIMG from '../../assets/photo.png'
import RPGVid from '../../assets/RPG-GAME.mp4'
import PhotogalleryVid from '../../assets/PhotoGallery.mp4'
import EhandelVID from '../../assets/Ehandel.mp4'
import KursbokningVid from '../../assets/Kurs-bokningVid.mp4'
import HöglagerVID from '../../assets/höglager.mp4'
import HeavyBoxIMG from '../../assets/heavy_box.png'


const data=[
{
  id: 1,
  image: GameImg,
  title: 'RPG-Spel 2d',
  github: 'https://github.com/Albinahmetaj/RPG-Game',
  demo:RPGVid
},
{
  id: 2,
  image: PortfolioIMG,
  title: 'Portfölj',
  github: 'https://github.com/Albinahmetaj/portfolio',
  demo:'https://albinahmetaj.github.io/portfolio/'
},
{
  id: 3,
  image: eCommerceIMG,
  title: 'E-handelsapplikation',
  github: 'https://github.com/Albinahmetaj/Complete-ecommerce-mvcapp',
  demo:EhandelVID
},
{
  id: 4,
  image: CoursebookingIMG,
  title: 'Kurs-bokningssystem',
  github: 'https://github.com/Albinahmetaj/ChalmersBookingsystem',
  demo:KursbokningVid
},
{
  id: 5,
  image: PhotoGalleryIMG,
  title: 'Fotogalleri',
  github: 'https://github.com/Albinahmetaj/Photo-Gallery',
  demo:PhotogalleryVid
},
{
  id: 6,
  image: HeavyBoxIMG,
  title: 'Höglagersystem',
  github: 'https://github.com/Albinahmetaj/Warehouse_Project',
  demo:HöglagerVID
},
]


function Portfolio() {
  return (
    <section id="portfolio">
      <h5>Mina Projekt</h5>
      <h2>Portfölj</h2>

      <div className="container portfolio-container">
       {
        data.map(({id, image, title, github, demo})=>{
          return(
            <article key={id} className='portfolio-item'>
            <div className="portfolio-item-image">
              <img src={image} style={{height:'280px'}} alt={title}/>
              
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