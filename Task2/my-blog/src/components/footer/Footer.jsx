import React from 'react'
import './footer.css'
const Footer = () => {
  return (
    <>
    <div className="footerSection">
      <div className="footerSectionitem">
      <div className="leftfooterrow">
          <div className="footerTitle">
            Quick Link
          </div>
          <ul className='footerlist'>
          <i className="fa-solid fa-arrow-right footericon"><li className="footerlistitem">About</li></i>
          <i className="fa-solid fa-arrow-right footericon"><li className="footerlistitem">Contact Us</li></i>
          <i className="fa-solid fa-arrow-right footericon"><li className="footerlistitem">Help</li></i>
          <i className="fa-solid fa-arrow-right footericon"><li className="footerlistitem">Login</li></i>
          </ul>
        </div>
        <div className="rightfooterrow">
          <div className="footerTitle">
            Contact Us
          </div>
          <ul className='footerlist'>
          <i className="fa-solid fa-location-dot footericon">
            <li className="footerlistitem">
              7/2,Labour Colony, Hathras(204101)
            </li>
          </i>
          <i className="fa-solid fa-phone footericon">
            <li className="footerlistitem">
              +91 8433463559
            </li>
          </i>
          <i className="fa-solid fa-envelope footericon">
            <li className="footerlistitem">
              avinashchaudhary216@gmail.com
            </li>
          </i>  
          </ul>
        </div>
      </div>
        <div className="copyright">
          <span>© Blog Land</span>
          <span>All Rights Reserved By Blog Land</span>
        </div>
    </div>
    </>
  )
}

export default Footer
