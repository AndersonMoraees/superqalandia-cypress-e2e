/// <reference types="cypress" />

describe('Módulo 3 - Tela Principal (Home e Vitrines)', () => {

  let compraMock;

  before(() => {
    // Carrega os dados de mock de compra uma vez antes de todos os testes
    cy.fixture('purchases').then((data) => {
      compraMock = data;
    });
  });

  beforeEach(() => {
    // Visita a Home com baseUrl já configurada (cypress.config.js)
    cy.visit('/', {
      onBeforeLoad: (win) => {
        // Injeta compras simuladas para a lógica de "Mais Comprados"
        if (compraMock) {
          win.localStorage.setItem('spu', JSON.stringify(compraMock));
        }
      }
    });
  });

  // ---------- CT-038: Carrossel "Mais Bem Avaliados" ----------
  it('CT-038: Deve exibir o carrossel "Mais Bem Avaliados" com até 15 produtos (✔️ deve passar)', () => {
    cy.get('#carousel-best-rated-list')
      .should('be.visible')
      .within(() => {
        cy.get('.product-card')
          .should('have.length.at.least', 1)
          .and('have.length.at.most', 15);          // RN-16
      });
  });

  // ---------- CT-039: Carrossel "Mais Comprados" ----------
  it('CT-039: Deve exibir o carrossel "Mais Comprados" com até 15 produtos (✔️ deve passar)', () => {
    cy.get('#carousel-best-sellers-list')
      .should('be.visible')
      .within(() => {
        cy.get('.product-card')
          .should('have.length.at.least', 1)
          .and('have.length.at.most', 15);          // RN-17
      });
  });

  // ---------- CT-040: Grade de categorias com card "Ver todos" ----------
  it('CT-040: Deve exibir a lista de produtos por categoria com o card "Ver todos" (✔️ deve passar)', () => {
    cy.get('#home-categories').should('be.visible');

    // Primeira grade de categoria exibida
    cy.get('#home-categories .product-grid')
      .first()
      .within(() => {
        // Até 6 produtos + 1 card "Ver todos" = no máximo 7
        cy.get('.product-card')
          .should('have.length.at.most', 7);        // RN-18

        cy.contains('Ver todos').should('be.visible');
      });
  });

  // ---------- CT-041: Estrutura dos cards de produto ----------
  it('CT-041: Deve exibir os dados estruturais nos cards de produto (✔️ deve passar)', () => {
    cy.get('#carousel-best-rated-list .product-card')
      .first()
      .within(() => {
        // Estrutura obrigatória do card (RN-19)
        cy.get('.emoji').should('be.visible');
        cy.get('h3').should('be.visible');
        cy.get('.price').should('be.visible').and('contain', 'R$');

        // Botões com data-testid dinâmicos (prefixo comum)
        cy.get('[data-testid^="add-to-cart-"]')
          .should('be.visible')
          .and('not.be.disabled');
        cy.get('[data-testid^="buy-now-"]')
          .should('be.visible')
          .and('not.be.disabled');
        cy.get('[data-testid^="favorite-btn-"]')
          .should('be.visible');
      });
  });

});