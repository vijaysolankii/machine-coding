import React from "react";

const StepForm = ({ stepsConfig = [] }) => {
  
  if(!stepsConfig.length){
    return <></>
  }
  
  return <div>
    <h1>Step Form React</h1>
    <>
      {
        stepsConfig.map((step,index)=> (
          <div key={step.stepName} className="stepWrap">
            <span>{index+1}</span>
            <h2>{step.stepName}</h2>
            <div className="step">{step.component}</div>
          </div>
        ))
      }
    </>
  </div>;
};

export default StepForm;
