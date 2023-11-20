import { navigateToStepperPage } from '././navigation';

export function checkStepperSteps() {
  navigateToStepperPage();
  stepperPage.checkStepText("Step content #1");
  stepperPage.checkStepText("Step content #2");
  stepperPage.checkStepText("Step content #3");
  stepperPage.checkStepText("Step content #4", false);
}
