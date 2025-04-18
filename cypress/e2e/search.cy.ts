describe('PAGE: search products', () => {
  it('should be able to search for products', () => {
    // cy.visit('/');

    // // DIGITA NO CAMPO E FAZ UM SUBMIT
    // cy.get('input[name=q]').type('moletom').parent('form').submit();

    // COMANDO CRIADO
    cy.searchByQuery('moletom');

    cy.location('pathname').should('include', '/search');

    cy.location('search').should('include', 'q=moletom');

    cy.get('a[href^="/product"').should('exist');
  });

  it('should not be able to visit search page without a search query', () => {
    cy.on('uncaught:exception', () => {
      return false;
    });

    cy.visit('/search');

    cy.location('pathname').should('equal', '/');
  });
});
