import "../styles/Websites.css"
import { Link } from "react-router-dom"

const Websites = () => {
  return (
    <div id="websites">
      <h1 id="websites-header">Want a website? Here's what I need to know.</h1>
      <p className="website-page-p">Below is a list of information that I will need in the process of designing a website. I will email a similar list when a meeting is confirmed.</p>
      <h3 id="domain-header" className="website-page-headers">Domain name</h3>
      <p className="website-page-p">This is the location of your website on the web. It is the name that appears in the search bar while people visit your website. For example:<br/><br/>
      <code>https://www.vitawd.com</code><br/><br/>
      Here, “vitawd” is the domain name. It is best to keep your domain name simple and unique to your business. Generally, the shorter the better, but keep in mind, shorter and more popular domains cost more!<br/><br/>For more info on what a domain is, take a look at <a id="website-link-two" href="https://www.namecheap.com/domains/domain-definition-what-is-a-domain-name/">Namecheap's in-depth explanation</a></p>
      <h3 id="pages-header" className="website-page-headers">Pages</h3>
      <p className="website-page-p">The average business website will have Home, About, Contact, and Services. Many will have more pages but this is the basic foundation for a website. If you aren't sure if something should be its own page, add it to the list anyway and we will discuss it!</p>
      <h3 id="features-header" className="website-page-headers">Features</h3>
      <p className="website-page-p"> What do I mean by features? Any way that you want your website to work for you.<br/><br/>Some examples include
      <ul>
        <li>Photos</li>
        <li>Calendar</li>
        <li>Online Booking</li>
        <li>Online Store</li>
        <li>Blog</li>
        <li>Social Media Posts</li>
        <li>Videos</li>
      </ul>If you have this information available, please bring it to the first meeting. This saves a lot of time and helps me understand your expectations so I can better serve you.</p>
      <h3 id="logo-color-header" className="website-page-headers">Logo & Color scheme</h3>
      <p className="website-page-p">
        Examples of logos:
        <div id="website-logos-div">
          <img className="website-page-logos" src="https://res.cloudinary.com/dawteptkh/image/upload/v1701378666/Untitled_Artwork_uajcqg.png" alt=""/>
          <h3 className="website-page-logos">Vita Web Design</h3>
        </div>
        Whether you have a carefully crafted design or simply your business name in certain font, your logo will dictate the style of your website. A logo is the most important design work you will have done for your business; it should be recognizable, clear and consistent. Need logo design? <Link id="website-link" to="/logos">I offer that as well!</Link><br/><br/>No need to know the exact colors if you don't have them, I just need to know things like: brighter vs darker, neutral vs pops of color.<br/><br/>
        <div>
          <h3>Light</h3>
          <img className="color-images" src="https://mycodelesswebsite.com/wp-content/uploads/2022/11/Slack.jpg" alt="" />
          <h3>Dark</h3>
          <img className="color-images" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjlscOt2nBHYjHXEmPyX-nytstdc8SehGJNxlJ19HvVQ&s" alt="" />
          <h3>Neutral</h3>
          <img className="color-images" src="https://assets-global.website-files.com/6009ec8cda7f305645c9d91b/649a197d1b4c732138e85bcc_adrienn-white-branding.png" alt="" />
        </div>
      </p>
      <h3 id="about-paragraph-header" className="website-page-headers">"About" paragraph</h3>
      <p className="website-page-p">Everyone needs some sort of “about” section. All you need is a one-paragraph writeup that tells people who you are, what you do, and why you do it.</p>
      <h3 id="other-text-header" className="website-page-headers">Other text</h3>
      <p className="website-page-p">This includes mission statements, product descriptions, taglines and more.</p>
    </div>
  )
}

export default Websites;