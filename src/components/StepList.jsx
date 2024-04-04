import React from "react";
import Step from "./Step";

export default function StepList({ StepsData = null }) {
  const steps = StepsData?.map((step) => <Step key={StepsData.indexOf(step)} numStep={StepsData.indexOf(step)} step={step}/>);

  return <section className="steps flex flex-col ml-2">{steps}</section>;
}
