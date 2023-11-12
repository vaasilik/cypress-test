describe('Edit Table Row Test', () => {
    it('should edit a table row and verify changes', () => {
      
        cy.visit('/pages/tables/smart-table');
        
        cy.get('.nb-edit').eq(2).click();
        cy.get('.form-control[ng-reflect-model="Bird"]').clear().type('Fox');
        cy.get('.nb-checkmark').click();
        cy.get('table tbody tr:nth-child(3).ng-star-inserted.ng2-smart-row').should('contain', 'Fox');
    });
});
