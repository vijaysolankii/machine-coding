import React, { useEffect, useRef, useState } from "react";

const StepForm = ({ stepsConfig = [] }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isComplete, setIsComplete] = useState(false);
  const stepRef = useRef([]);

  const [margins, setMargins] = useState({
    marginLeft: 0,
    marginRight: 0,
  });

  useEffect(() => {
    setMargins({
      marginLeft: stepRef.current[0].offsetWidth/2,
      marginRight: stepRef.current[stepsConfig.length - 1].offsetWidth/2,
    });
  }, [stepRef, stepsConfig.length]);

  if (!stepsConfig.length) {
    return <></>;
  }

  const calculateWidth = () => {
    return ((currentStep - 1) / (stepsConfig.length - 1)) * 100;
  };

  const handleClick = () => {
    setCurrentStep((prevState) => {
      if (prevState === stepsConfig.length) {
        setIsComplete(true);
        return prevState;
      } else {
        return prevState + 1;
      }
    });
  };

  const ActiveComponent = stepsConfig[currentStep - 1]?.component;

  return (
    <div className="formWrapper">
      <h1>Step Form React</h1>
      <div className="stepWrap">
        {stepsConfig.map((step, index) => {
          return (
            <div
              ref={(el) => (stepRef.current[index] = el)}
              key={step.stepName}
              className={`step ${
                currentStep > index + 1 || isComplete ? "complete" : ""
              } ${currentStep === index + 1 ? "active" : ""}`}
            >
              <div className="step-number">
                {currentStep > index + 1 || isComplete ? (
                  <span>&#10003;</span>
                ) : (
                  index + 1
                )}
              </div>
              <h2 className="step-name">{step.stepName}</h2>
            </div>
          );
        })}
        <div
          className="progress-bar"
          style={{
            width: `calc(100% - ${margins.marginLeft + margins.marginRight}px)`,
            marginLeft: margins.marginLeft,
            marginRight: margins.marginRight,
          }}
        >
          <div
            className="progress"
            style={{ width: `${calculateWidth()}%` }}
          ></div>
        </div>
      </div>
      <div className="componentWrap">
      <ActiveComponent />
      </div>
      {!isComplete && (
        <button className="btn" onClick={handleClick}>
          {" "}
          {currentStep === stepsConfig.length ? "finish" : "next"}{" "}
        </button>
      )}
    </div>
  );
};

export default StepForm;
