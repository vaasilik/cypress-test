describe("Тест 3", () => {
    it("Сторінка /pages/forms/layouts", () => {
      // Відкриття сторінки
      cy.visit("/pages/forms/layouts");
  
      // Знайти елемент форми та ввести дані
      cy.get('nb-card-header:contains("Horizontal form")').next().within(() => {
        // Знайти елементи для емейлу та паролю і очистити їх
        cy.get('input[placeholder="Email"]').clear().type("example@example.com");
        cy.get('input[placeholder="Password"]').clear().type("password");
  
        //Чекбокс "Remember me"
        cy.get('nb-checkbox label').click();
  
        // Натиснути кнопку "Sign in"
        cy.get('button[ng-reflect-status="warning"]').click();
      });
    });
  });
  