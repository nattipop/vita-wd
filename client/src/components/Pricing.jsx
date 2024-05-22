import { useEffect } from "react";
import "../styles/Pricing.css";
import { Link } from "react-router-dom";

const Pricing = () => {
  useEffect(() => {
    document.title = "Vita Web Design | Pricing";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div id="pricing">
      <div className="container">
        <h1>Pricing</h1>
        <div className="row" id="all-info-row">
          <div className="col pricing-card">
            <div className="pricing-titles">
              <img className="pricing-icons" src="https://res.cloudinary.com/dawteptkh/image/upload/v1701650656/contract_1_eclx5g.png" alt="" width="64px"/>
              <h2 className="col pricing-text">Quotes</h2>
            </div>
            <h3>In order to be accurate, I personally quote every website I design. A basic four-page website will start at $500. Any additional pages or components (e.g. online store, blog, or photo gallery) will be priced specifically for each website.</h3>
          </div>
          <div className="col pricing-card">
            <div className="pricing-titles">
              <img className="pricing-icons" src="https://res.cloudinary.com/dawteptkh/image/upload/v1701650648/money_fbkuus.png" alt="" width="64px"/>
              <h2 className="col pricing-text">Downpayment</h2>
            </div>
            <h3>I require half down before beginning work on a given website. This reserves your time slot, allowing me to devote time and effort to your custom website. The remaining balance will be due on completion of the site.</h3>
          </div>
          <div className="col pricing-card">
            <div className="pricing-titles">
              <img className="pricing-icons" src="https://res.cloudinary.com/dawteptkh/image/upload/v1701650639/addon_tbhjne.png" alt="" width="64px"/>
              <h2 className="pricing-text">Add-Ons</h2>
            </div>
            <h3>I will be up-front about any extra costs. Things often come up during the design process and it's important to be flexible. Extras such as pages and sections will add value and therefore cost more.</h3>
          </div>
        </div>
      </div>
      <div className="container">
        <h1 id="pricing-domain-title">Domains</h1>
        <div className="row" id="domain-stuff">
          <div className="col" id="domain-img-col">
            <img id="pricing-domain-background" src="https://res.cloudinary.com/dawteptkh/image/upload/v1702577761/pexels-photomix-company-218717_bdh066.jpg" alt="" width="100%" />
          </div>
          <div className="col" id="domain-desc-col">
            <h3 className="domain-description">Every website needs a good domain name. I use <Link id="pricing-link-one" to="namecheap.com/domains">Namecheap</Link> for all my domains and custom emails. Click <Link id="pricing-link-two" to="https://www.namecheap.com/domains/domain-definition-what-is-a-domain-name/">here</Link> to learn more about what a domain is and why you need one.</h3>
            <h3 className="domain-description">I offer domain renewal packages! Get a discount when you update your website each time your domain renews.</h3>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Pricing;