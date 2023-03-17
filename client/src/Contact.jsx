import { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [fn, setFn] = useState();
  const [ln, setLn] = useState();
  const [email, setEmail] = useState();
  const [bn, setBn] = useState();
  const [service, setService] = useState();
  const [website, setWebsite] = useState(false);
  const [domain, setDomain] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const [success, setSuccess] = useState();

  const resetForm = () => {
    setFn("");
    setLn("");
    setEmail("");
    setBn("");
    setService("");
    setDomain(false);
    setWebsite(false);
    document.getElementById("basic-website").checked = false;
    document.getElementById("custom-website").checked = false;
    document.getElementById("website-maintenance").checked = false;
    document.getElementById("logo-design").checked = false;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!fn) return setErrorMessage("First Name is required");
    if(!ln) return setErrorMessage("Last Name is required");
    if(!email) return setErrorMessage("Email is required");
    if(!bn) return setErrorMessage("Business/Non-Profit Name is required");
    if(!service) return setErrorMessage("Please select a service");
    
    const data = {
      fName: fn,
      lName: ln,
      clientEmail: email,
      business: bn,
      service: service,
      haveWebsite: website,
      haveDomain: domain
    };

    axios.post("/api/new-email", data).then(res => {
      console.log(res);
      resetForm();
      setErrorMessage("");
      setSuccess("Your information has been submitted! I will reach out as soon as possible.")
    })
  }

  return (
    <div id="contact">
      <form id="contact-form">
        <h2 className="text-center schedule-text">If you're interested in scheduling a meeting, fill in your info and I'll email you.</h2>
        <input onChange={(e) => setFn(e.target.value)} value={fn}className="text-input" placeholder="First Name" />
        <input onChange={(e) => setLn(e.target.value)} value={ln} className="text-input" placeholder="Last Name" />
        <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" className="text-input" placeholder="Email" />
        <input onChange={(e) => setBn(e.target.value)} value={bn} className="text-input" placeholder="Business/Non-Profit Name" />
        <h3>Service you're interested in</h3>
        <div id="service-input">
          <input onChange={(e) => setService(e.target.value)}type="radio" id="basic-website" name="service" value="basic website"/>
          <label for="meeting">Basic Website</label><br/>
          <input onChange={(e) => setService(e.target.value)} type="radio" id="custom-website" name="service" value="custom website"/>
          <label for="custom-website">Custom Website</label><br/>
          <input onChange={(e) => setService(e.target.value)} type="radio" id="website-maintenance" name="service" value="website maintenance"/>
          <label for="website-maintenance">Website Maintenance</label><br/>
          <input onChange={(e) => setService(e.target.value)} type="radio" id="logo-design" name="service" value="logo design"/>
          <label for="logo-design">Logo Design</label><br/>
        </div>
        <h3><input onChange={() => setWebsite(!website)} className="form-checkbox" type="checkbox" checked={website} />I currently have a website</h3>
        <h3><input onChange={() => setDomain(!domain)} className="form-checkbox" type="checkbox" checked={domain}/>I own a domain that I would like to use for my website</h3>
        <h3 id="error-message">{errorMessage ? (
            `* ${errorMessage} *`
          ) : ""
        }</h3>
        <button onClick={handleSubmit} id="submit-button">Submit</button>
      </form>
      <div className="container text-center" style={{paddingTop: "3vw"}}>
        <h2>I would love to hear from you!</h2>
        <h3>If you have any questions or would like more information on websites email me at natalie@vitawd.com</h3>
      </div>
      <div>{success ? (
        <div id="success-popup">
          <h1>{success}</h1>
          <button onClick={() => setSuccess("")}>Close</button>
        </div>
        ): ""}</div>
    </div>
  )
}

export default Contact;