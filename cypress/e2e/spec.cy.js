describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
    /* ==== Generated with Cypress Studio ==== */
    cy.get(':nth-child(3) > .container > .row > #utilities > p').click();
    cy.get('#navbar > :nth-child(1) > :nth-child(2) > a').click();
    cy.get('.dropdown-toggle').click();
    cy.get(':nth-child(10) > a').click();
    cy.get('.row > :nth-child(4)').click();
    cy.get(':nth-child(4) > p > a > code').click();
    cy.get('#adfdf361-3751-4e48-80d0-b73b956bfea1__label').click();
    cy.get(':nth-child(31) > .group').click();
    cy.get('.osano-cm-accept-all').click();
    /* ==== End Cypress Studio ==== */
  })
})