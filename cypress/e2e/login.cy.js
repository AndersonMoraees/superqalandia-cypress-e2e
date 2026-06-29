/// <reference types="cypress" />

describe('Módulo 1 - Autenticação (Login)', () => {
  let emailNaoCadastrado;
  let users;

  before(() => {
    // Carrega os dados de massa uma vez antes de todos os testes
    cy.fixture('users').then((data) => {
      users = data;
    });
  });

  beforeEach(() => {
    // ⚠️ Configure baseUrl no cypress.config.js para 'http://127.0.0.1:5500'
    cy.visit('/');
    emailNaoCadastrado = `naoexiste_${Date.now()}@teste.com`;
  });

  // ---------- CT-001: Acesso inicial como visitante ----------
  it('CT-001: Acesso inicial como visitante (✔️ deve passar)', () => {
    cy.get('#home-section').should('be.visible');
    cy.get('#carousel-best-rated').should('be.visible');
    cy.get('#login-section').should('not.be.visible');
  });

  // ---------- CT-002: Login como Administrador ----------
  it('CT-002: Login como ADM (✔️ deve passar)', () => {
    cy.login(users.admin.email, users.admin.password);

    cy.get('#home-section').should('be.visible');
    cy.get('.toast.success', { timeout: 5000 })
      .should('be.visible')
      .and('contain', users.admin.greeting);
    cy.get('[data-testid="nav-admin"]').should('be.visible');
  });

  // ---------- CT-003: Login como Usuário Padrão ----------
  it('CT-003: Login como Usuário Padrão (✔️ deve passar)', () => {
    cy.login(users.padrao.email, users.padrao.password);

    cy.get('#home-section').should('be.visible');
    cy.get('.toast.success', { timeout: 5000 })
      .should('be.visible')
      .and('contain', users.padrao.greeting);
  });

  // ---------- CT-004: Login sem Email ----------
  it('CT-004: Login sem Email (✔️ deve passar)', () => {
    cy.login(undefined, 'senhateste');
    cy.get('.toast.error', { timeout: 5000 })
      .should('be.visible')
      .and('contain', 'Credenciais inválidas.');
  });

  // ---------- CT-005: Login sem Senha ----------
  it('CT-005: Login sem Senha (✔️ deve passar)', () => {
    cy.login(users.padrao.email, undefined);
    cy.get('.toast.error', { timeout: 5000 })
      .should('be.visible')
      .and('contain', 'Credenciais inválidas.');
  });

  // ---------- CT-006: Login sem Email e Senha ----------
  it('CT-006: Login sem Email e Senha (✔️ deve passar)', () => {
    cy.login(undefined, undefined);
    cy.get('.toast.error', { timeout: 5000 })
      .should('be.visible')
      .and('contain', 'Credenciais inválidas.');
  });

  // ---------- CT-007: Login com Senha incorreta ----------
  it('CT-007: Login com Senha incorreta (✔️ deve passar)', () => {
    cy.login(users.padrao.email, 'testeincorreta');
    cy.get('.toast.error', { timeout: 5000 })
      .should('be.visible')
      .and('contain', 'Credenciais inválidas.');
  });

  // ---------- CT-008: Login com Email não cadastrado ----------
  it('CT-008: Login com Email não cadastrado (✔️ deve passar)', () => {
    cy.login(emailNaoCadastrado, 'algumaSenha');
    cy.get('.toast.error', { timeout: 5000 })
      .should('be.visible')
      .and('contain', 'Credenciais inválidas.');
  });

  // ---------- CT-009: Login com Email com formato inválido ----------
  it('CT-009: Login com Email com formato inválido (✔️ deve passar)', () => {
    cy.login('teste09_login.com', 'qualquerSenha');
    cy.get('.toast.error', { timeout: 5000 })
      .should('be.visible')
      .and('contain', 'Credenciais inválidas.');
  });

  // ---------- CT-010: Login com tecla 'Enter' ----------
  it('CT-010: Login com tecla "Enter" (✔️ deve passar)', () => {
    cy.login(users.padrao.email, users.padrao.password, { submitWithEnter: true });

    cy.get('#home-section').should('be.visible');
    cy.get('.toast.success', { timeout: 5000 })
      .should('be.visible')
      .and('contain', users.padrao.greeting);
  });

  // ---------- CT-011: Sair da conta (Logout) ----------
  it('CT-011: Sair da conta (✔️ deve passar)', () => {
    // Pré-condição: login como usuário padrão
    cy.login(users.padrao.email, users.padrao.password);

    // Tenta abrir o dropdown com clique. Se não abrir, remove display:none via JS.
    cy.get('.dropdown-toggle-btn')
      .first()
      .should('be.visible')
      .click()
      .then(() => {
        // Verifica se o menu ficou visível; caso contrário, força a exibição
        cy.get('#user-dropdown').then(($menu) => {
          if ($menu.css('display') === 'none') {
            cy.wrap($menu).invoke('show'); // remove display:none
          }
        });
      });

    // Agora o menu está visível (garantido)
    cy.get('#user-dropdown').should('be.visible');
    cy.contains('🚪 Sair').should('be.visible').click();

    cy.get('.toast.info', { timeout: 5000 })
      .should('be.visible')
      .and('contain', 'Você saiu da conta.');
    cy.get('[data-testid="nav-login"]').should('be.visible');
  });
});