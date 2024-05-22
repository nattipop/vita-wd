import animation from "../pictures/Animation.png"
import image from "../pictures/Vitalogo 01 Artboard 1.svg"
import { useState, useEffect } from "react";
import ImageSlider from  "./ImageSlider";
import "../styles/Home.css";


const Home = () => {
  const [currentImage, setImage] = useState(animation);
  const [imageStyling, setImageStyle] = useState();

  useEffect(() => {
    document.title = "Vita Web Design | Home";
    window.scrollTo(0, 0);
    setTimeout(() => {
      setImage(image)
      setImageStyle({width: "300px", paddingTop: "15px", paddingLeft: "12px"})
    }, 2400)
  }, []);
  
  const animateLogo = () => {
    setImage(animation);
    setImageStyle({});
    
    setTimeout(() => {
      setImage(image)
      setImageStyle({width: "300px", paddingTop: "15px", paddingLeft: "12px"})
    }, 2400);
    return
  };

  const renderLogos = () => {
    return logos.map(logo => {
      return (
        <div key={logo.id} id={logo.title} className="col reg-grid-logo-box">
          <img className="reg-grid-img" src={logo.src} alt="" title={logo.title} />
          <h3 className="logo-title">{logo.title}</h3>
          <p className="logo-desc">{logo.description}</p>
        </div>
      )
    })
  }
  
  return (
    <div id="home">
      <div id="hero-landscape" className="section">
        <img 
          src={currentImage}
          id="hero-img"
          style={imageStyling} 
          onClick={animateLogo}
          />
        <h1 className="header-front-page">
          Building websites for businesses in Barron County, WI
        </h1>
      </div>
      <div id="home-pricing" className="section">
        <h1 id="home-pricing-header">
          Interested in a website?
        </h1>
        <a className="react-link" id="home-pricing-button" href="https://www.vitawd.com/pricing"><button>Check out my pricing</button></a>
      </div>
      <div id="home-about" className="section">
        <div className="container">
          <div className="row">
            <div className="col" id="get-to-know">
              <h1 id="home-about-header">Get to know the designer</h1>
              <a href="https://www.vitawd.com/about"><button id="home-about-button">Learn more about Natalie</button></a>
            </div>
            <div className="col" id="home-about-img-col">
              <img id="home-about-img" src="https://res.cloudinary.com/dawteptkh/image/upload/v1706569008/IMG_2349_alcun5.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div id="roadmap" className="section">
        <div className="row">
          <div className="col roadmap-item row" id="roadmap-call">
            <div className="col-3 roadmap-img-col">
              <img className="roadmap-img" src="https://res.cloudinary.com/dawteptkh/image/upload/v1701381852/phone-call_tw5bjc.png" alt="" />
            </div>
            <div className="col roadmap-text" id="contact-roadmap">
              <h2>Contact me</h2>
              <h2>(715) 642-1146</h2>
              <p className="roadmap-p">for a free consult. This (1) allows us to get to know each other and (2) allows me to understand what you need in a website.</p>
            </div>
          </div>
          <div className="col roadmap-item row" id="roadmap-quote">
            <div className="col-3 roadmap-img-col">
              <img className="roadmap-img" src="https://res.cloudinary.com/dawteptkh/image/upload/v1701381617/contract_tsqv7g.png" alt="" />
            </div>
            <div className="col roadmap-text" id="quote-roadmap">
              <h2>Get a quote</h2>
              <p className="roadmap-p">I will send you a quote for the cost of your website (see how I price my jobs <a id="pricing-home-link" href="https://www.vitawd.com/pricing">here</a>). We will set goals and expectations for the completion of your site.</p>
            </div>
          </div>
          <div className="col roadmap-item row" id="roadmap-work">
            <div className="col-3 roadmap-img-col">
              <img className="roadmap-img" src="https://res.cloudinary.com/dawteptkh/image/upload/v1701381745/laptop_afmqem.png" alt="" />
            </div>
            <div className="col roadmap-text" id="reality-roadmap">
              <h2>Make your website a reality</h2>
              <p className="roadmap-p">Once I receive a downpayment, your time slot will be set in place and we can start discussing details.</p>
            </div>
          </div>
        </div>
      </div>
      <div id="home-review" className="section">
        <h1 id="home-review-header">
          Already a Client?
        </h1>
        <a id="home-review-button" href="https://g.page/r/CbSpYGtNdySXEB0/review"><button>Leave a review</button></a>
      </div>
      <div id="logo-gallery" className="section">
        <h1>Logo Gallery</h1>
        <ImageSlider />
      </div>
    </div>
  )
}


export default Home;