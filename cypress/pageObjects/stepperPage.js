export class StepperPage {
  visitStepperPage() {
    cy.visit("/pages/layout/stepper");
    return this;
  }

  checkStepText(stepText) {
    cy.get(".step-content").should("contain", stepText);
    if (stepText !== "Step content #4") {
      cy.get('.appearance-filled:contains("next"):eq(0)').click();
    }
    return this;
  }
}
