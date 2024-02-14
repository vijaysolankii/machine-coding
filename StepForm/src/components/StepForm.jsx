import React from "react";

const StepForm = ({ stepsConfig = [] }) => {
  console.log(stepsConfig)
  return <div>
    <h1>Step Form React</h1>
    <>
      {
        stepsConfig.map((step,index)=> (
          <div key={step.stepName} className="step">
            <span>{index+1}</span>
            <h2>{step.stepName}</h2>
            <p>{step.component}</p>
          </div>
        ))
      }
    </>
  </div>;
};

export default StepForm;
