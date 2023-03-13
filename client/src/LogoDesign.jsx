import hopeandanchor from "./pictures/Handa 01 Artboard 1.svg";
import bradley from "./pictures/Untitled-7.png";

const LogoDesign = () => {
  return (
    <div id="logo-design-section">
      <h1 id="logo-title">Logo Design</h1>
      <div id="logo-display-section">
        <div className="row">
          <div className="col two-color-logo">
            <div className="logo-display-flex">
              <img id="bradley-logo" src={bradley} />
            </div>
            <h3>Two color logo - $300</h3>
            <h3>Four logo variations</h3>
            <p>Can be used for your website and/or promotional products</p>
            <ul>
              <li>Transparent background (Either svg or ai vector file)  <a href="https://www.mergemedia.co.nz/what-is-a-vector-file-and-why-are-they-important/" style={{fontSize: "20px", textDecoration: "underline"}}> why is this important?</a></li>
              <li>Solid color background (JPEG file)</li>
            </ul>
          </div>
          <div className="col three-color-logo">
            <div className="logo-display-flex">
              <img id="handa-logo" src={hopeandanchor} />
            </div>
            <h3>Three+ color logo - $400</h3>
            <h3>Four logo variations</h3>
            <p>Can be used for your website and/or promotional products</p>
            <ul>
              <li>Transparent background (Either svg or ai vector file)  <a href="https://www.mergemedia.co.nz/what-is-a-vector-file-and-why-are-they-important/" style={{fontSize: "20px", textDecoration: "underline"}}> why is this important?</a></li>
              <li>Solid color background (JPEG file)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LogoDesign;