/// <reference types="cypress" />

describe('Módulo 2 - Header e Navegação', () => {

  context('1. Usuário Visitante (Não logado)', () => {
    beforeEach(() => {
      cy.visit('/');
    });

    // ---------- CT-023: Logo redireciona para Home ----------
    it('CT-023: Logo redireciona para Home (✔️ deve passar)', () => {
      cy.get('[data-testid="nav-login"]').click();
      cy.get('#login-section').should('be.visible');

      cy.get('[data-testid="logo-home"]').click();
      cy.get('#home-section').should('be.visible');
    });

    // ---------- CT-025: Menu "Categorias" visível para visitante ----------
    it('CT-025: Menu "Categorias" visível para visitante (✔️ deve passar)', () => {
      cy.get('.dropdown-toggle-btn').contains('Categorias').should('be.visible');
    });

    // ---------- CT-028: Carrinho - Visitante redirecionado ao Login ----------
    it.skip('CT-028: Carrinho - Visitante redirecionado ao Login (✖️ BUG – ícone oculto)', () => {
      cy.get('[data-testid="nav-cart"]').should('be.visible').click();
      cy.get('.toast.warning', { timeout: 5000 }).should('be.visible').and('contain', 'Faça login para ver o carrinho.');
      cy.get('#login-section').should('be.visible');
    });

    // ---------- CT-030: Carrinho - Visitante é redirecionado ao tentar adicionar item ----------
    it('CT-030: Carrinho - Visitante é redirecionado ao tentar adicionar item (✔️ deve passar)', () => {
  // Clica no primeiro botão "Adicionar ao carrinho" (data-testid dinâmico)
  cy.get('[data-testid^="add-to-cart-"]').first().click();

  // Deve ser redirecionado para a tela de login imediatamente
  cy.get('#login-section', { timeout: 5000 }).should('be.visible');
});

    // ---------- CT-032: Menu do usuário oculto para visitante ----------
    it('CT-032: Menu do usuário oculto para visitante (✔️ deve passar)', () => {
      cy.contains('Olá,').should('not.exist');
      cy.get('.dropdown-toggle-btn').contains('Categorias').should('exist');
    });

    // ---------- CT-034: Painel Admin oculto para visitante ----------
    it('CT-034: Painel Admin oculto para visitante (✔️ deve passar)', () => {
      cy.get('[data-testid="nav-admin"]').should('not.exist');
    });
  });

  context('2. Usuário Logado (Perfil Padrão)', () => {
    beforeEach(() => {
      cy.setSession('user');
      cy.visit('/');
    });

    // ---------- CT-024: Menu "Categorias" visível para logado ----------
    it('CT-024: Menu "Categorias" visível para logado (✔️ deve passar)', () => {
      cy.get('.dropdown-toggle-btn').contains('Categorias').should('be.visible');
    });

    // ---------- CT-026: Menu de Categorias expande e seleciona "Limpeza" ----------
    it('CT-026: Menu de Categorias expande e seleciona "Limpeza" (✔️ deve passar)', () => {
      cy.openDropdown('Categorias');
      cy.get('.dropdown-menu', { timeout: 5000 }).should('be.visible');
      cy.get('.dropdown-menu').contains('Limpeza').should('be.visible').click();
      cy.get('#category-section').should('be.visible');
      cy.get('#category-title').should('contain', 'Limpeza');
    });

   // ---------- CT-027: Menu Categorias fecha ao clicar fora ----------
   it('CT-027: Menu Categorias fecha ao clicar fora (✔️ deve passar)', () => {
  cy.openDropdown('Categorias');
  cy.get('.dropdown-menu').should('be.visible');

  // Tira o mouse do botão "Categorias" – o menu fecha
  cy.get('.dropdown-toggle-btn').contains('Categorias').trigger('mouseleave');
  cy.get('.dropdown-menu').should('not.be.visible');
});

    // ---------- CT-029: Carrinho abre painel lateral para logado ----------
    it('CT-029: Carrinho abre painel lateral para logado (✔️ deve passar)', () => {
  // Clica no ícone do carrinho
  cy.get('[data-testid="nav-cart"]').click();

  // Aguarda o painel lateral abrir e verifica o cabeçalho
  cy.get('#cart-sidebar-header > h3', { timeout: 5000 })
    .should('be.visible')
    .and('contain', 'Seu Carrinho');
});

    // ---------- CT-031: Badge do carrinho exibe quantidade de itens ----------
    it('CT-031: Badge do carrinho exibe quantidade de itens (✔️ deve passar)', () => {
  // Adiciona o primeiro produto (usa seletor genérico)
  cy.get('[data-testid^="add-to-cart-"]').first().click();
  // Adiciona o segundo produto (primeiro agora será o segundo, pois a ordem pode mudar)
  cy.get('[data-testid^="add-to-cart-"]').first().click();

  // Verifica o badge com o ID correto
  cy.get('#cart-badge').should('contain', '2');
});

    // ---------- CT-033: Menu do usuário exibe opções completas ----------
    it('CT-033: Menu do usuário exibe opções completas (✔️ deve passar)', () => {
      cy.openDropdown('Olá, Maria');
      cy.get('#user-dropdown', { timeout: 5000 }).should('be.visible').within(() => {
        cy.contains('Meus Dados').should('be.visible');
        cy.contains('Endereço').should('be.visible');
        cy.contains('Forma de Pagamento').should('be.visible');
        cy.contains('Favoritos').should('be.visible');
        cy.contains('Histórico de Compras').should('be.visible');
        cy.contains('Vistos por Último').should('be.visible');
        cy.contains('Sair').should('be.visible');
      });
    });

    // ---------- CT-035: Painel Admin oculto para usuário comum ----------
    it('CT-035: Painel Admin oculto para usuário comum (✔️ deve passar)', () => {
      cy.get('[data-testid="nav-admin"]').should('not.exist');
    });
  });

  context('3. Usuário Logado (Perfil Administrador)', () => {
    beforeEach(() => {
      cy.setSession('admin');
      cy.visit('/');
    });

    // ---------- CT-036: Painel Admin exibido para administrador ----------
    it('CT-036: Painel Admin exibido para administrador (✔️ deve passar)', () => {
      cy.get('[data-testid="nav-admin"]').should('be.visible');
    });

    // ---------- CT-037: Menu suspenso do Admin ----------
    it.skip('CT-037: Menu suspenso do Admin não deve exibir opções de cliente (✖️ BUG)', () => {
      cy.openDropdown('Olá, Administrador');
      cy.get('#user-dropdown', { timeout: 5000 }).should('be.visible').within(() => {
        cy.contains('Painel Admin').should('be.visible');
        cy.contains('Sair').should('be.visible');
        cy.contains('Meus Dados').should('not.exist');
        cy.contains('Endereço').should('not.exist');
        cy.contains('Forma de Pagamento').should('not.exist');
      });
    });
  });

});