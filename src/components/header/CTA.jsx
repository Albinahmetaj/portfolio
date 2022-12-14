import React from 'react'
import CV from '../../assets/CV.pdf'

function CTA() {
  return (
   <div className="cta">
    <a href={CV} download className='btn'>Ladda ner CV</a>
    <a href="#contact" className='btn btn-primary'>Kontakta mig</a>
   </div>
  )
}

export default CTA