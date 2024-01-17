import React from 'react'
import './Footer.css'
import plane_icon from '../Assets/plane.png'
import phone_icon from '../Assets/phone-book.png'
import location_icon from '../Assets/location.png'
import clock_icon from '../Assets/clock.png'
import twit_icon from '../Assets/twitter.png'
import facebook_icon from '../Assets/facebook.png'
import google_icon from '../Assets/google.png'
import skype_icon from '../Assets/skype.png'
import insta_icon from '../Assets/instagram.png'


export default function Footer() {
  return (
    <div>
        <div className="footer">
        <div className="first">
              <div className="header">
                <p>Company Info</p>
              </div>

              <div className="text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur ratione quam consequatur totam quos quae, nesciunt modi ut a. Sint natus eos totam dicta accusantium iure in doloremque illum voluptatibus autem perferendis sed expedita libero optio delectus id consectetur voluptate, amet laboriosam quibusdam iste vel. Illum, saepe in.
                </div>

              <div className="icon">
                   <img src={plane_icon} alt="" />
              </div>
           </div>


           <div className="second">
              <div className="header">
                <p>Contacts</p>
              </div>

              <div className="details">
                <div className="phone">
                    <div className="ph_icon image">
                        <img src={phone_icon} alt=""/>
                    </div>
                    <div className="context">
                        123-456-78901
                    </div>
                </div>
                
                <div className="location">
                    <div className="location_icon image">
                        <img src={location_icon} alt=""/>
                    </div>
                    <div className="context">
                        Navsari,304 Street,403
                    </div>
                </div>

                <div className="clock">
                    <div className="clock_icon image">
                        <img src={clock_icon} alt=""/>
                    </div>
                    <div className="context">
                        Mon-Sat 8.00 - 18.00 
                    </div>
                </div>
              </div>

              <div className="links">
                   <div className="skype">
                    <img src={skype_icon} alt="" />
                   </div>

                   <div className="facebook">
                    <img src={facebook_icon} alt="" />
                   </div>

                   <div className="google">
                    <img src={google_icon} alt="" />
                   </div>

                   <div className="twitter">
                    <img src={twit_icon} alt="" />
                   </div>

                   <div className="insta">
                    <img src={insta_icon} alt="" />
                   </div>
              </div>
           </div>

           <div className="third">
              <div className="header">
                <p>Recent Trips</p>
              </div>

              <div className="images_trips">
                   <img src={insta_icon} alt=""/>
                   <img src={twit_icon} alt=""/>
              </div>
           </div>




        </div>
    </div>
  )
}
