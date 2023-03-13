import { useEffect, useState } from "react";
import LogoDesign from "./LogoDesign";

const Plans = () => {
  const [plansData, setPlansData] = useState();
  useEffect(() => {
    fetch("/api/plans",{
      headers:{
        "accepts":"application/json"
      }
    }).then(
      response => response.json()
    ).then(
      data => setPlansData(data)
    )
  }, [])

  const renderPlans = () => {
    return plansData ? (
      plansData.map(plan => {
        return (
          <div className="col plan-div" key={plan._id}>
            <img src={plan.icon_url} className="plan-icon" />
            <h2>{plan.plan_name} <span>{plan.price}</span></h2>
            <p>{plan.description}</p>
            <ul>
              {plan.features.map(feature => {
                return <li key={feature}>{feature}</li>
              })}
            </ul>
          </div>
        )
      })
    ) : (
      ""
    )
  }

  return (
    <div className="container">
      <div className="row">
        {renderPlans()}
      </div>
      <LogoDesign/>
    </div>
  )
}

export default Plans;