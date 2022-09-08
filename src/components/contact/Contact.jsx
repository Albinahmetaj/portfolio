import React from 'react'
import './contact.css'
import {HiOutlineMail} from 'react-icons/hi';
import {TbBrandMessenger} from 'react-icons/tb';
import {FiPhoneCall} from 'react-icons/fi';
import { useRef } from 'react';
import emailjs from 'emailjs-com';




function Contact() {

   
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_06f2dtr', 'template_w440deq', form.current, 'z8dWTQPITIBIMXii4')
    alert('Meddelandet har skickats');
      e.target.reset();
  };

  
  return (
    <section id="contact">
      <h5>Låt Oss Ta Kontakt</h5>
      <h2>Kontakta Mig</h2>

      <div className="container contact-container">
    <div className="contact-options">
<article className="contact-option">
  <HiOutlineMail className="contact-icon"/>
  <h4>E-mail</h4>
  <h5>Albin.Ahmetaj@hotmail.com</h5>
  <a href="mailto:Albin.Ahmetaj@hotmail.com" target="_blank">Skicka ett meddelande</a>
</article>
<article className="contact-option">
  <TbBrandMessenger className="contact-icon"/>
  <h4>Messenger</h4>
  <h5>Albin Ahmetaj</h5>
  <a href="https://m.me/albin.ahmetaj.1" target="_blank">Skicka ett meddelande via Messenger</a>
</article>
<article className="contact-option">
  <FiPhoneCall className="contact-icon"/>
  <h4>Telefon</h4>
  <h5>072-398 16 01</h5>
  <a href="tel:+46723981601" target="_blank">Ring</a>
</article>
    </div>
    <form ref={form} onSubmit={sendEmail}>
      <input type="text" name='name' placeholder="Ditt Fullständiga Namn" required/>
      <input type="email" name='email' placeholder="Din E-Mail" required/>
      <textarea name='message' rows="7" placeholder='Ditt Meddelande' required/>
      <button type="submit" className="btn btn-primary">Skicka Meddelande </button>
      
      
      </form>
      </div>
    </section>
  )
}

export default Contact