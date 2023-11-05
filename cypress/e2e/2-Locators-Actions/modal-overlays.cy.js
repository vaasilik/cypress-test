describe("Тест 2", () => {
    it("Сторінка /pages/modal-overlays/dialog", () => {
      // Відкриваємо сторінку
      cy.visit("/pages/modal-overlays/dialog");
  
      // Натискаємо на кнопку, що викликає модальне вікно
      cy.get("body > ngx-app > ngx-pages > ngx-one-column-layout > nb-layout > div.scrollable-container > div > div > div > div > nb-layout-column > ngx-modal-overlays > ngx-dialog > div > div:nth-child(5) > nb-card > nb-card-body > button").click();
  
      // Отримуємо елемент з модальним вікном
      cy.get('nb-dialog-container').within(() => {
        // Перевіряємо, що модальне вікно відкрито
        cy.get("ngx-dialog-name-prompt").should('be.visible');
  
        // Перевіряємо текст заголовка модального вікна
        cy.get('nb-card-header').should('contain', 'Enter your name');
  
        // Перевіряємо наявність інпуту
        cy.get('input').should('be.visible');
  
        // Перевіряємо наявність кнопки "Submit"
        cy.get('button[status="success"]').should('be.visible').and('contain', 'Submit');
  
        // Перевіряємо наявність кнопки "Cancel"
        cy.get('button[status="danger"]').should('be.visible').and('contain', 'Cancel');
      });
    });
  });
  