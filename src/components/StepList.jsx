import React from "react";
import Step from "./Step";

export default function StepList({ StepsData = null }) {
  const steps = StepsData?.map((step) => <Step key={step.id} data={step} />);

  return <section className="steps">{steps}</section>;
}
