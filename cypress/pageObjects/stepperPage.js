export class StepperPage {
  visitPage() {
    cy.visit("/pages/layout/stepper");
  }

  checkStepText(stepText) {
    cy.get(".step-content").should("contain", stepText);
    if (stepText !== "Step content #4") {
      cy.get('.appearance-filled:contains("next"):eq(0)').click();
    }
  }

  verifyStepContent(stepContent) {
    cy.get(".step-content").should("contain", stepContent);
  }
}