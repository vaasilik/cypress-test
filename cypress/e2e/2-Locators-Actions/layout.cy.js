import { verifyURLContains } from '../../models/navigation';
import { navigateToStepperPage, checkStepperSteps } from '../../models/stepper';

describe("Verify stepper layout", () => {
  it("Page /pages/layout/stepper", () => {
    navigateToStepperPage();
    verifyURLContains('/pages/layout/stepper');

    // Check stepper steps
    checkStepperSteps();
  });
});