import React, { useState } from "react";
import "./Stepper.css";
import { TiTick } from "react-icons/ti";

const Stepper = () => {
    const steps = ["1", "2", "3", "4","5", "6", "7", "8","9","10"];
    const [currentStep, setCurrentStep] = useState(1);
    const [complete, setComplete] = useState(false);
    return (
      <>
        <div className="flex justify-between">
          {steps?.map((step, i) => (
            <div
              key={i}
              className={`step-item ${currentStep === i + 1 && "active"} ${
                (i + 1 < currentStep || complete) && "complete"
              } `}
            >
              <div className="step">
                {i + 1 < currentStep || complete ? <TiTick size={24} /> : i + 1}
              </div>
              <p className="text-gray-500">{step}</p>
            </div>
          ))}
        </div><br/>
        {!complete && (
         <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <button
              className="btn"
              onClick={() => {
                currentStep === steps.length
                  ? setComplete(true)
                  : setCurrentStep((prev) => prev + 1);
              }}
              style={{ width: "350px" }}
            >
              {currentStep === steps.length ? "Finish" : "Next"}
            </button>
          </div>
        )}
      </>
    );
  };
  
  export default Stepper;
  