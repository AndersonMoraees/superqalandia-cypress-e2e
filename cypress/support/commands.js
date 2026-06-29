// cypress/support/commands.js

// ---------- Comando de LOGIN ----------
Cypress.Commands.add('login', (email, password, options = {}) => {
  const { submitWithEnter = false } = options;

  cy.get('[data-testid="nav-login"]').click();

  // E-mail
  if (email) {
    cy.get('[data-testid="login-email"]').clear().type(email);
  } else {
    cy.get('[data-testid="login-email"]').clear();
  }

  // Senha
  if (password) {
    cy.get('[data-testid="login-password"]').clear().type(password);
  } else {
    cy.get('[data-testid="login-password"]').clear();
  }

  // Submissão
  if (submitWithEnter) {
    cy.get('[data-testid="login-password"]').type('{enter}');
  } else {
    cy.get('[data-testid="login-submit"]').click();
  }
});

// ---------- Comando de CADASTRO ----------
Cypress.Commands.add('cadastrar', ({ name, email, password, confirmPassword }) => {
  // Nome
  if (name !== undefined) {
    cy.get('[data-testid="register-name"]').clear().type(name);
  } else {
    cy.get('[data-testid="register-name"]').clear();
  }

  // E-mail
  if (email !== undefined) {
    cy.get('[data-testid="register-email"]').clear().type(email);
  } else {
    cy.get('[data-testid="register-email"]').clear();
  }

  // Senha
  if (password !== undefined) {
    cy.get('[data-testid="register-password"]').clear().type(password);
  } else {
    cy.get('[data-testid="register-password"]').clear();
  }

  // Confirmar senha
  if (confirmPassword !== undefined) {
    cy.get('[data-testid="register-confirm-password"]').clear().type(confirmPassword);
  } else {
    cy.get('[data-testid="register-confirm-password"]').clear();
  }

  cy.get('[data-testid="register-submit"]').click();
});

// ---------- Comando para abrir dropdown por hover ----------
Cypress.Commands.add('openDropdown', (triggerText, selector = '.dropdown-toggle-btn') => {
  cy.get(selector).contains(triggerText).trigger('mouseenter');
});

// ---------- Comando para iniciar sessão REAL com cy.session ----------
Cypress.Commands.add('setSession', (role) => {
  cy.session(role, () => {
    // 1. Visita a página (usa baseUrl configurada)
    cy.visit('/');

    // 2. Realiza o login real com as credenciais da fixture
    cy.fixture('users').then((users) => {
      const user = role === 'admin' ? users.admin : users.padrao;
      cy.login(user.email, user.password);
    });

    // 3. Confirma que o login foi bem-sucedido
    cy.get('.toast.success', { timeout: 5000 }).should('be.visible');
  });
});