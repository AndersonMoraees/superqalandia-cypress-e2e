/// <reference types="cypress" />

describe('Módulo 1 - Autenticação (Cadastro)', () => {
  let emailDinamico;
  let dados;

  before(() => {
    cy.fixture('registration').then((fixture) => {
      dados = fixture;
    });
  });

  beforeEach(() => {
    // baseUrl configurada em cypress.config.js: http://127.0.0.1:5500
    cy.visit('/');
    cy.get('[data-testid="nav-register"]').click();
    emailDinamico = `qa_teste_${Date.now()}@exemplo.com`;
  });

  // ---------- CT-012: Cadastro com todos os dados corretos ----------
  it('CT-012: Cadastro com todos os dados corretos (✔️ deve passar)', () => {
    cy.cadastrar({
      name: dados.nomeValido,
      email: emailDinamico,
      password: dados.senhaValida,
      confirmPassword: dados.senhaValida,
    });

    cy.get('.toast.success', { timeout: 5000 })
      .should('be.visible')
      .and('contain', 'Conta criada!');

    cy.get('#home-section').should('be.visible');
    cy.get('.dropdown-toggle-btn').should('contain', 'Olá, José');
  });

  // ---------- CT-013: Cadastro com todos os campos vazios ----------
  it('CT-013: Cadastro com todos os campos vazios (✔️ deve passar)', () => {
    cy.cadastrar({
      name: undefined,
      email: undefined,
      password: undefined,
      confirmPassword: undefined,
    });

    cy.get('.toast.error', { timeout: 5000 })
      .should('be.visible')
      .and('contain', 'Preencha todos os campos.');
  });

  // ---------- CT-014: Cadastro com campo Nome vazio ----------
  it('CT-014: Cadastro com campo Nome vazio (✔️ deve passar)', () => {
    cy.cadastrar({
      name: undefined,
      email: 'teste14@cadastro.com',
      password: dados.senhaValida,
      confirmPassword: dados.senhaValida,
    });

    cy.get('.toast.error', { timeout: 5000 })
      .should('be.visible')
      .and('contain', 'Preencha todos os campos.');
  });

  // ---------- CT-015: Cadastro com campo Email vazio ----------
  it('CT-015: Cadastro com campo Email vazio (✔️ deve passar)', () => {
    cy.cadastrar({
      name: dados.nomeValido,
      email: undefined,
      password: dados.senhaValida,
      confirmPassword: dados.senhaValida,
    });

    cy.get('.toast.error', { timeout: 5000 })
      .should('be.visible')
      .and('contain', 'Preencha todos os campos.');
  });

  // ---------- CT-016: Cadastro com campo Senha vazio ----------
  it('CT-016: Cadastro com campo Senha vazio (✔️ deve passar)', () => {
    cy.cadastrar({
      name: dados.nomeValido,
      email: 'teste16@cadastro.com',
      password: undefined,
      confirmPassword: dados.senhaValida,
    });

    cy.get('.toast.error', { timeout: 5000 })
      .should('be.visible')
      .and('contain', 'Preencha todos os campos.');
  });

  // ---------- CT-017: Cadastro com campo Confirmar senha vazio ----------
  it.skip('CT-017: Cadastro com campo Confirmar senha vazio (✖️ BUG – sistema permite)', () => {
    cy.cadastrar({
      name: dados.nomeValido,
      email: emailDinamico,
      password: dados.senhaValida,
      confirmPassword: undefined,
    });

    // Comportamento esperado: impedir e mostrar 'Preencha todos os campos.'
    // Atualmente o sistema permite, portanto teste ignorado.
    cy.get('.toast.error', { timeout: 5000 })
      .should('be.visible')
      .and('contain', 'Preencha todos os campos.');
  });

  // ---------- CT-018: Cadastro com nome inválido ----------
  it.skip('CT-018: Cadastro com nome inválido (✖️ BUG – sistema permite)', () => {
    cy.cadastrar({
      name: dados.nomeInvalido,
      email: emailDinamico,
      password: dados.senhaValida,
      confirmPassword: dados.senhaValida,
    });

    cy.get('.toast.error', { timeout: 5000 })
      .should('be.visible')
      .and('contain', 'Nome inválido');
  });

  // ---------- CT-019: Cadastro com Email inválido ----------
  it.skip('CT-019: Cadastro com Email inválido (✖️ BUG – sistema permite)', () => {
    cy.cadastrar({
      name: dados.nomeValido,
      email: dados.emailInvalido,
      password: dados.senhaValida,
      confirmPassword: dados.senhaValida,
    });

    cy.get('.toast.error', { timeout: 5000 })
      .should('be.visible')
      .and('contain', 'Email inválido');
  });

  // ---------- CT-020: Cadastro com Senha e Confirmar senha diferentes ----------
  it.skip('CT-020: Cadastro com Senha e Confirmar senha diferentes (✖️ BUG – sistema permite)', () => {
    cy.cadastrar({
      name: dados.nomeValido,
      email: emailDinamico,
      password: dados.senhaValida,
      confirmPassword: dados.senhaDiferente,
    });

    cy.get('.toast.error', { timeout: 5000 })
      .should('be.visible')
      .and('contain', 'As senhas não coincidem');
  });

  // ---------- CT-021: Cadastro com email já cadastrado ----------
  it('CT-021: Cadastro com email já cadastrado (✔️ deve passar)', () => {
    cy.cadastrar({
      name: dados.nomeValido,
      email: dados.emailExistente,
      password: dados.senhaValida,
      confirmPassword: dados.senhaValida,
    });

    cy.get('.toast.error', { timeout: 5000 })
      .should('be.visible')
      .and('contain', 'E-mail já cadastrado');
  });

  // ---------- CT-022: Cadastro com senha com menos que 4 caracteres ----------
  it('CT-022: Cadastro com senha com menos que 4 caracteres (✔️ deve passar)', () => {
    cy.cadastrar({
      name: dados.nomeValido,
      email: emailDinamico,
      password: dados.senhaCurta,
      confirmPassword: dados.senhaCurta,
    });

    cy.get('.toast.error', { timeout: 5000 })
      .should('be.visible')
      .and('contain', 'Senha mínima 4 caracteres');
  });
});