describe("Verify stepper layout", () => {
    it("Page /pages/layout/stepper", () => {
      cy.visit("/pages/layout/stepper");
  
      // Функція для перевірки тексту на стеці та натискання кнопки "NEXT"
    function checkStepText(stepText) {
      cy.get(".step-content").should("contain", stepText);
      cy.get("body > ngx-app > ngx-pages > ngx-one-column-layout > nb-layout > div > div > div > div > div > nb-layout-column > ngx-components > ngx-stepper > nb-card > nb-card-body > nb-stepper > div.step-content > button:nth-child(3)").click();
    }

    // Перевіряємо текст на кожному стеці та натискаємо кнопку "NEXT"
    checkStepText("Step content #1");
    checkStepText("Step content #2");
    checkStepText("Step content #3");

    // На останньому стеці кнопка "NEXT" не активна, тому її не перевіряємо та не натискаємо
    cy.get(".step-content").should("contain", "Step content #4");
  });
});