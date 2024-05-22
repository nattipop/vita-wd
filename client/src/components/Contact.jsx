import { Widget } from '@typeform/embed-react'
import { useEffect } from 'react';
import "../styles/Contact.css";
import "../styles/Mobile.css"
import { Link } from 'react-router-dom';

const Contact = () => {
  useEffect(() => {
    document.title = "Vita Web Design | Contact";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div id="contact">
      <div className='container contact-container'>
        <h1>I'd love to talk to you!</h1>
        <h3>Give me a call <a id="phone-link" href="tel:7156421146">(715) 642-1146</a> or</h3>
        <div id='email-form' className='container'>
          <Widget id="q0dW7f20" className="my-form mobile-form" />
        </div>
        <div className='container'>
          <h3>You can also reach me on</h3>
          <div className='row socials-row'>
            <div className='col socials-div'>
              <img id="instagram-img" src="https://lh5.googleusercontent.com/p/AF1QipOHD09u1qOT-9VvNNhBWvCusOI8TBURR_GTyDPZ=w408-h543-k-no" alt="" />
              <Link to="https://www.instagram.com/vitawebdesign/"><div id='instagram-text'>
                <h3>Instagram</h3>
              </div></Link>
            </div>
            <div className='col socials-div'>
              <img id="facebook-img" src="https://res.cloudinary.com/dawteptkh/image/upload/v1707321890/IMG_4278F04E118F-1_wczkqo.jpg" alt=""/>
              <Link to="https://www.facebook.com/profile.php?id=100090352163156"><div id='facebook-text'>
                <h3>Facebook</h3>
              </div></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact;