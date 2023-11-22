export function navigateToStepperPage() {
  cy.visit("/pages/layout/stepper");
}

export function checkStepperSteps() {
  function checkStepText(stepText) {
    cy.get(".step-content").should("contain", stepText);
    if (stepText !== "Step content #4") {
      cy.get('.appearance-filled:contains("next"):eq(0)').click();
    }
  }

  checkStepText("Step content #1");
  checkStepText("Step content #2");
  checkStepText("Step content #3");

  cy.get(".step-content").should("contain", "Step content #4");
}