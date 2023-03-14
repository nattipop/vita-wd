const Contact = () => {
  return (
    <div id="contact" className="container">
      <form id="contact-form">
        <h2>Fill in your info and I'll contact you</h2>
        <input className="text-input" placeholder="First Name" />
        <input className="text-input" placeholder="Last Name" />
        <input className="text-input" placeholder="Email" />
        <input className="text-input" placeholder="Business/Non-Profit Name" />
        <h3>Service you're interested in</h3>
        <div id="service-input">
          <input type="radio" id="basic-website" name="service" value="basic website"/>
          <label for="meeting">Basic Website</label><br/>
          <input type="radio" id="custom-website" name="service" value="custom website"/>
          <label for="custom-website">Custom Website</label><br/>
          <input type="radio" id="website-maintenance" name="service" value="website maintenance"/>
          <label for="website-maintenance">Website Maintenance</label><br/>
          <input type="radio" id="logo-design" name="service" value="logo design"/>
          <label for="logo-design">Logo Design</label><br/>
        </div>
        <h3><input className="form-checkbox" type="checkbox"/>I currently have a website</h3>
        <h3><input className="form-checkbox" type="checkbox"/>I own a domain that I would like to use for my website</h3>
        <button id="email-button">Send me an email</button>
        
      </form>
      <h1>I would love to hear from you!</h1>
      <h3>If you have any questions or would like more information on websites email me at natalie@vitawd.com</h3>
    </div>
  )
}

export default Contact;