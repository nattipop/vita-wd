import phone from "../pictures/Untitled_Artwork 3.png";
import mail from "../pictures/Untitled_Artwork 1.png"
import "../styles/Footer.css";

const Footer = () => {
  return (
    <div id="footer">
      <div className="container">
        <div className="row" id="footer-row">
          <div className="col"></div>
          <div className="col footer-columns">
            <a className="footer-links" href="https://www.instagram.com/vitawebdesign/"><p>Instagram</p></a>
          </div>
          <div className="col footer-columns">
            <a className="footer-links" href="https://www.facebook.com/profile.php?id=100090352163156"><p>Facebook</p></a>
          </div>
          <div className="col footer-columns" style={{minWidth: "200px"}}>
            <p><img src={phone} alt="Call" width="30px" /> <a href="tel:7156421146">(715) 642-1146</a></p>
          </div>
          <div className="col footer-columns" style={{minWidth: "250px"}}>
            <p><img src={mail} alt="Email" width="30px" /> <a href="mailto:natalie@vitawd.com">natalie@vitawd.com</a></p>
          </div>
          <div className="col"></div>
        </div>
        <p className="text-center" style={{color: "var(--website-accent-2)", paddingTop: "20px"}}>Website designed by Vita Web Design</p>
        <p className="text-center" style={{color: "var(--website-accent-2)"}}>© Vita Web Design, LLC 2024</p>
      </div>
    </div>
  )
}

export default Footer;