export class RegistrationPage {
    visitRegistrationPage() {
      cy.visit('/auth/register');
    }
  
    fillRegistrationForm() {
      cy.get('body').within(() => {
        cy.get('[name="fullName"]').type('Maryna Vasylyk');
        cy.get('[name="email"]').type('marynav@example.com');
        cy.get('[name="password"]').type('password123');
        cy.get('[name="rePass"]').type('password123');
        cy.get('span.custom-checkbox').click();
        cy.get('[name="fullName"]').should('have.value', 'Maryna Vasylyk');
        cy.get('[name="email"]').should('have.value', 'marynav@example.com');
        cy.get('[name="password"]').should('have.value', 'password123');
        cy.get('[name="rePass"]').should('have.value', 'password123');
        cy.get('.btn-disabled').should('not.exist');
        cy.contains('Register').click();
      });
    }
  }
  