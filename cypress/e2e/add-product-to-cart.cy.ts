describe('PAGE: add product to cart', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should be able to navigate to the product page and add it to the cart', () => {
    // SELECIONANDO UM LINK NA TELA COM BASE NO SELETOR
    cy.get('a[href^="/product"').first().click();

    // GARANTIR QUE A URL PARA QUAL FOI NAVEGADA, DEVA INCLUIR PRODUCT
    // cy.url().should('include', '/product');

    // OU ASSIM TAMBÉM
    cy.location('pathname').should('include', '/product');

    cy.contains('Adicionar ao carrinho').click();

    cy.contains('Cart (1)').should('exist');
  });

  it('should not be count duplicated products on cart', () => {
    // SELECIONANDO UM LINK NA TELA COM BASE NO SELETOR
    cy.get('a[href^="/product"').first().click();

    // GARANTIR QUE A URL PARA QUAL FOI NAVEGADA, DEVA INCLUIR PRODUCT
    // cy.url().should('include', '/product');

    // OU ASSIM TAMBÉM
    cy.location('pathname').should('include', '/product');

    cy.contains('Adicionar ao carrinho').click();
    cy.contains('Adicionar ao carrinho').click();

    cy.contains('Cart (1)').should('exist');
  });

  it('should be able to search for a product and add it to the cart', () => {
    // // DIGITA NO CAMPO E FAZ UM SUBMIT
    // cy.get('input[name=q]').type('moletom').parent('form').submit();

    // COMANDO CRIADO
    cy.searchByQuery('moletom');

    cy.get('a[href^="/product"').first().click();

    cy.location('pathname').should('include', '/product');

    cy.contains('Adicionar ao carrinho').click();

    cy.contains('Cart (1)').should('exist');
  });
});
