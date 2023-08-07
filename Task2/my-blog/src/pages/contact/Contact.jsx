import "./contact.css";
import { Back } from "../../components/common/back/Back";
import { Title } from '../../components/common/title/Title'

import  Footer from '../../components/footer/Footer'
export default function Contact() {
  const map = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.466850762731!2d77.49942917508497!3d28.6756782821208!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf30885b1e2a5%3A0x9983675e24c6638b!2sAjay%20Kumar%20Garg%20Engineering%20College!5e0!3m2!1sen!2sin!4v1691427511626!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade'
  return (
    <>
      <Back title=" Contact Me" />
      
      <section className='contacts padding'>
      <div className='container shadow flexSB'>
        <div className='leftc row'>
          <iframe title='LOCATION' src={map}></iframe>
        </div>
        <div className='rightc row'>
          <Title subtitle="Open for help and tech jobs"/>

          <div className='items'>
            <div className='box'>
              <h4>ADDRESS:</h4>
              <p>Block-7,House-2,Labour Colony Hathras,UP(204101)</p>
            </div>
            <div className='box'>
              <h4>EMAIL:</h4>
              <p>Avinash2010173@akgec.ac.in</p>
            </div>
            <div className='box'>
              <h4>PHONE:</h4>
              <p>8433463559</p>
            </div>
          </div>
        </div>
      </div>
    </section>
      <div className="contact">
        <div className="contactItem">
          <span className="contactTitle">Follow Me</span>
          <div className="contactSocial">
            <i className="contactIcon fa-brands fa-facebook-f"></i>
            <i className="contactIcon fa-brands fa-instagram"></i>
            <a href="https://github.com/Avinash227842" className="extlink">
              <i className="aboutIcon fa-brands fa-github"></i>
            </a>
            <a
              href="https://linkedin.com/in/avinash-chaudhary-8a2004222"
              className="extlink"
            >
              <i className="aboutIcon fa-brands fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}
