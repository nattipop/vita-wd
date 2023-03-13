import hopeandanchor from "./pictures/Handa 01 Artboard 1.svg";
import bradley from "./pictures/Untitled-7.png";

const LogoDesign = () => {
  return (
    <div id="logo-design-section">
      <h1 id="logo-title">Logo Design</h1>
      <div id="logo-display-section" className="container">
        <div className="row" style={{width: "50vw"}}>
          <div className="col">
            <img id="handa-logo" src={hopeandanchor} />
          </div>
          <div className="col">
            <img id="bradley-logo" src={bradley} />
          </div>
        </div>
      </div>
      <h3>2 color logo - $300</h3>
      <h3>3+ color logo - $400</h3>
    </div>
  )
}

export default LogoDesign;