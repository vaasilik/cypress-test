describe('First test suite', () => {

    context('First test suite - context', () => {
    it("Visits the home page", () => {
      cy.visit("http://localhost:4200/pages/layout/accordion");
      cy.url().should('contain', 'layout/accordion')
    });
});
  
describe('Second test suite', () => {
    it("Test should passed", () => {
        cy.visit("http://localhost:4200/pages/layout/accordion");
        cy.url().should('contain', 'layout/accordion')
        cy.get(".appearance-filled").should("contain.text", "Toggle First Item")
      });
    })
 });