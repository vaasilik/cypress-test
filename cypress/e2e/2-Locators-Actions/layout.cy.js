import { StepperPage } from '../pages/stepperPage';

const stepperPage = new StepperPage();

describe("Verify stepper layout", () => {
  it("Page /pages/layout/stepper", () => {
    stepperPage.visitStepperPage();
    stepperPage.checkStepText("Step content #1");
    stepperPage.checkStepText("Step content #2");
    stepperPage.checkStepText("Step content #3");
    stepperPage.checkStepText("Step content #4", false); // Pass false to skip the last step
  });
});
