// describe("Verify stepper layout", () => {
//   it("Page /pages/layout/stepper", () => {
//     cy.visit("/pages/layout/stepper");

//     function checkStepText(stepText) {
//       cy.get(".step-content").should("contain", stepText);
//       if (stepText !== "Step content #4") {
//         cy.get('.appearance-filled:contains("next"):eq(0)').click();
//       }
//     }

//     checkStepText("Step content #1");
//     checkStepText("Step content #2");
//     checkStepText("Step content #3");

//     cy.get(".step-content").should("contain", "Step content #4");
//   });
// });

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