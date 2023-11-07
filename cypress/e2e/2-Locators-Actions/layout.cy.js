describe("Verify stepper layout", () => {
  it("Page /pages/layout/stepper", () => {
    cy.visit("/pages/layout/stepper");

    // Функція для перевірки тексту на стеці та натискання кнопки "Next"
    function checkStepText(stepText) {
      cy.get(".step-content").should("contain", stepText);
      if (stepText !== "Step content #4") {
        cy.get('.appearance-filled:contains("next"):eq(0)').click();
      }
    }

    // Перевіряємо текст на кожному стеці та натискаємо кнопку "Next"
    checkStepText("Step content #1");
    checkStepText("Step content #2");
    checkStepText("Step content #3");

    // На останньому стеці кнопка "Next" не активна, тому її не перевіряємо та не натискаємо
    cy.get(".step-content").should("contain", "Step content #4");
  });
});
