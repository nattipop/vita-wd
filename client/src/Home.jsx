import Plans from "./Plans";
import animation from "./pictures/Animation.png"
import image from "./pictures/Vitalogo 01 Artboard 1.svg"
import { useState, useEffect } from "react";
import Contact from "./Contact";


const Home = () => {
  const [currentImage, setImage] = useState(animation);
  const [imageStyling, setImageStyle] = useState()

  useEffect(() => {
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
  }
  
  return (
    <div>
      <div id="hero-landscape">
        <img 
          src={currentImage}
          className="hero-image"
          style={imageStyling} 
          onClick={animateLogo}
           />
        <h1 className="header-front-page">
          Building the perfect website to promote your brand.
        </h1>
        <div id="website-plans">
          <h1 className="text-center">Website Plans</h1>
          <Plans />
        </div>
        <Contact />
      </div>
    </div>
  )
}

export default Home;