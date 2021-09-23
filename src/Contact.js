//import {  Form } from 'react-bootstrap';
//import CustomButton from './CustomButton';
import './Contact.css';
function Contact(){ 
    
    return (
      <div className="card">
  
        <div className='mb-3 con-square'>
            <div className="hsg-numbers__block">
              <img className="hsg-numbers__block-icon" src="https://offers.hubspot.com/hubfs/Calling@2x.png" alt="Calling" />
              <h5 class="hsg-numbers__block-header">Call us directly</h5>
              <div class="hsg-numbers__cta-container">                          
                <a href="tel:+35315124400" className="mobile-contact-sales-cta chat-with-sales contactsales-chat">
                  <span >+353 1 512 4400</span>
                </a>         
                  
              </div>
            </div>
          </div>
          <div className='mb-3  con-square'>
            <div className="hsg-numbers__block">
              <img className="hsg-numbers__block-icon" src="https://offers.hubspot.com/hubfs/Messages@2x.png" alt="Messages" />
              <h5 className="hsg-numbers__block-header">Chat with our sales team</h5>
              <div className="hsg-numbers__cta-container">
                  <a className="mobile-contact-sales-cta chat-with-sales contactsales-chat" href="#chat-with-sales">Chat with our sales team</a>
                  <a className="cta--primary cta--small desktop-contact-sales-cta chat-with-sales contactsales-chat" href="#chat-with-sales">Chat with Sales</a>
                </div>
            </div>
          </div>
          <div className='mb-3  con-square'>
            <div class="hsg-numbers__block">
              <img class="hsg-numbers__block-icon" src="https://offers.hubspot.com/hubfs/Date@2x.png" alt="Date" />
              <h5 class="hsg-numbers__block-header">Book a meeting</h5>
              <div class="hsg-numbers__cta-container">
                <a class="mobile-contact-sales-cta book-a-meeting contactsales-meeting" href="#book-a-meeting-with-sales">Book a meeting</a>
                <a class="cta--primary cta--small desktop-contact-sales-cta book-a-meeting contactsales-meeting" href="#book-a-meeting-with-sales">Choose a date &amp; time</a>
              </div>
            </div>
          </div>
      </div>
    );
  }
  export default Contact;