# 🧪 Projeto de Testes Automatizados com Cypress

![Cypress](https://img.shields.io/badge/Cypress-E2E-69D3A7?logo=cypress&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?logo=javascript&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-16+-339933?logo=node.js&logoColor=white)
![Status](https://img.shields.io/badge/Status-Concluído-success)

## 📖 Sobre o projeto

Este projeto consiste em uma suíte de testes **End-to-End (E2E)** desenvolvida com **Cypress** para validar as principais funcionalidades de uma aplicação web de e-commerce.

A automação foi estruturada utilizando boas práticas, como:

- ✅ Comandos customizados (`Custom Commands`)
- ✅ Massa de dados com **Fixtures**
- ✅ Reutilização de sessão utilizando `cy.session()`
- ✅ Organização dos testes por funcionalidade
- ✅ Casos de teste identificados por CT (Caso de Teste)
- ✅ Documentação de bugs utilizando `it.skip`

O objetivo deste projeto é demonstrar conhecimentos em automação de testes, organização de código e manutenção de uma suíte de testes escalável.

---

# 🚀 Tecnologias utilizadas

- Cypress
- JavaScript (ES6+)
- Node.js
- npm

---

# 📋 Funcionalidades testadas

## 🔐 Autenticação

- Login com usuário comum
- Login com administrador
- Login como visitante
- Validação de campos obrigatórios
- Credenciais inválidas
- Validação de formato do e-mail
- Login utilizando tecla **Enter**
- Logout
- Cadastro de usuário
- Validação de erros no cadastro

---

## 🧭 Header e Navegação

- Visibilidade dos menus conforme perfil do usuário
- Dropdown de categorias
- Menu do usuário
- Redirecionamento para login ao acessar o carrinho
- Controle de acesso ao painel administrativo

---

## 🏠 Home e Vitrines

- Carrossel de produtos mais bem avaliados
- Carrossel de produtos mais comprados
- Grade de produtos por categoria
- Card **"Ver todos"**
- Estrutura dos cards de produto
- Botões de ação

---

# 📊 Cobertura dos testes

| Módulo | Casos de Teste |
|---------|---------------:|
| Autenticação | 22 |
| Header e Navegação | 15 |
| Home | 4 |
| **Total** | **41** |

---

# 📂 Estrutura do projeto

```text
app/
└── index.html
cypress/
├── e2e/
│   ├── cadastro.cy.js
│   ├── header.cy.js
│   ├── home.cy.js
│   └── login.cy.js
│
├── fixtures/
│   ├── purchases.json
│   ├── registration.json
│   └── users.json
│
└── support/
│   ├── commands.js
│   └── e2e.js
│
├── cypress.config.js
├── package.json
└── README.md
```

---

# 🔧 Pré-requisitos

Antes de executar o projeto, é necessário possuir:

- Node.js 16 ou superior
- npm

---

# ⚙️ Instalação

Clone o repositório:

```bash
git clone https://github.com/AndersonMoraees/superqalandia-cypress-e2e.git
```

Entre na pasta do projeto:

```bash
cd superqalandia-cypress-e2e
```

Instale as dependências:

```bash
npm install
```

Caso necessário, altere a `baseUrl` em `cypress.config.js`.

```javascript
e2e: {
  baseUrl: "http://127.0.0.1:5500/app"
}
```

> **Nota:** Certifique-se de que a `baseUrl` em `cypress.config.js` esteja configurada para `http://127.0.0.1:5500/app`, garantindo que o Cypress aponte para a pasta correta onde o arquivo `index.html` está localizado.

---

# ▶️ Executando os testes

## Interface gráfica

```bash
npx cypress open
```

## Modo Headless

```bash
npx cypress run
```

> A aplicação deve estar sendo executada localmente (por exemplo, utilizando **Live Server**) para que os testes possam ser executados corretamente.

---

# 📦 Comandos customizados

| Comando | Descrição |
|---------|-----------|
| `cy.login(email, senha, opções)` | Realiza o login na aplicação. |
| `cy.cadastrar({...})` | Realiza o cadastro de um novo usuário. |
| `cy.openDropdown(texto, seletor)` | Abre menus dropdown através do evento `mouseenter`. |
| `cy.setSession(perfil)` | Cria ou restaura uma sessão autenticada utilizando `cy.session()`. |

---

# 📌 Boas práticas aplicadas

- Organização dos testes por funcionalidade
- Reutilização de código através de Custom Commands
- Separação das massas de dados em Fixtures
- Uso de `cy.session()` para reduzir tempo de execução
- Identificação dos casos de teste (CT-001 até CT-041)
- Documentação dos bugs encontrados
- Código preparado para manutenção e expansão

---

# 🐞 Documentação de Bugs

Os cenários que representam defeitos encontrados na aplicação foram mantidos na suíte utilizando `it.skip`.

Cada teste possui comentários explicando:

- comportamento esperado;
- comportamento atual;
- motivo pelo qual o teste foi ignorado.

Essa abordagem permite documentar problemas conhecidos sem comprometer a execução da suíte.

---

# 📈 Resultados esperados

Esta suíte valida os principais fluxos da aplicação, garantindo:

- Integridade do processo de autenticação
- Controle de acesso conforme perfil do usuário
- Funcionamento da navegação
- Exibição correta das vitrines de produtos
- Consistência da interface

---

# 🛡️ Licença

Este projeto foi desenvolvido exclusivamente para fins de estudo, prática e demonstração de conhecimentos em automação de testes.

---

# 👨‍💻 Autor

Desenvolvido por **Anderson Moraes** como parte do portfólio de estudos em **Quality Assurance (QA)**.

- GitHub: https://github.com/AndersonMoraees

---

# 🤝 Contribuições

Contribuições são bem-vindas!

Caso encontre melhorias ou queira adicionar novos cenários de teste, fique à vontade para abrir uma **Issue** ou enviar um **Pull Request**.