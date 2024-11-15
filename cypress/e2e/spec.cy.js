describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.youtube.com/watch?v=p8bZBvcFPuk')

    /* ==== Generated with Cypress Studio ==== */
    cy.get('.signin > yt-button-shape > .yt-spec-button-shape-next > yt-touch-feedback-shape > .yt-spec-touch-feedback-shape > .yt-spec-touch-feedback-shape__fill').click();
    /* ==== End Cypress Studio ==== */
  })
})