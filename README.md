# 🧪 Projeto de Testes Automatizados com Cypress

![Cypress](https://img.shields.io/badge/Cypress-E2E-69D3A7?logo=cypress&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?logo=javascript&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-16+-339933?logo=node.js&logoColor=white)
![Status](https://img.shields.io/badge/Status-Ativo-brightgreen)
![Testes](https://img.shields.io/badge/Testes-41-blue)
![Regras](https://img.shields.io/badge/Regras_de_Negócio-19-orange)
![Bugs](https://img.shields.io/badge/Bugs_Documentados-6-red)

---

## 📖 Sobre o projeto

Este projeto consiste em uma suíte de testes **End-to-End (E2E)** desenvolvida com **Cypress** para validar as principais funcionalidades de uma aplicação web de e-commerce.

A automação foi estruturada utilizando boas práticas, como:

- ✅ Comandos customizados (`Custom Commands`)
- ✅ Massa de dados com **Fixtures**
- ✅ Reutilização de sessão utilizando `cy.session()`
- ✅ Organização dos testes por funcionalidade
- ✅ Casos de teste identificados por CT (Caso de Teste)
- ✅ Especificação funcional utilizando BDD (Gherkin)
- ✅ Documentação de bugs utilizando `it.skip`

O objetivo deste projeto é demonstrar conhecimentos em automação de testes, organização de código, documentação técnica e manutenção de uma suíte de testes escalável.

---

# 🚀 Tecnologias utilizadas

- Cypress
- JavaScript (ES6+)
- Node.js
- NPM
- BDD / Gherkin
- Git
- GitHub

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

# 📊 Cobertura do Projeto

| Artefato | Quantidade |
|----------|-----------:|
| Regras de Negócio | 19 |
| Casos de Teste | 41 |
| Especificações BDD | 14 |
| Testes Automatizados | 41 |
| Bugs Documentados | 6 |

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

docs/
├── README.md
├── regras-de-negocio.md
├── casos-de-teste.md
├── especificacao-bdd.md
├── bug-reports.md
└── assets/
    └── bugs/

cypress.config.js
package.json
README.md
```

---

# 📚 Documentação

Além da suíte de testes automatizados, este projeto possui uma documentação completa do processo de Quality Assurance.

Toda a documentação encontra-se na pasta **docs/**.

| Documento | Descrição |
|-----------|-----------|
| 📋 `regras-de-negocio.md` | Regras funcionais documentadas da aplicação. |
| 📝 `casos-de-teste.md` | Casos de teste elaborados a partir das regras de negócio. |
| 📖 `especificacao-bdd.md` | Especificação funcional em BDD (Gherkin), representando os comportamentos esperados da aplicação. |
| 🐞 `bug-reports.md` | Registro dos defeitos encontrados durante a execução dos testes. |
| 📚 `docs/README.md` | Guia de navegação da documentação. |

Essa estrutura demonstra a rastreabilidade entre regras de negócio, casos de teste, especificações BDD, automação e defeitos encontrados durante a validação da aplicação.

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

> **Nota:** Certifique-se de que a `baseUrl` esteja configurada para `http://127.0.0.1:5500/app`, garantindo que o Cypress aponte para a pasta onde o arquivo `index.html` está localizado.

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

O projeto define comandos reutilizáveis para simplificar a escrita e manutenção dos testes.

| Comando | Descrição |
|---------|-----------|
| `cy.login(email, senha, opções)` | Realiza o login na aplicação. |
| `cy.cadastrar({...})` | Realiza o cadastro de um novo usuário. |
| `cy.openDropdown(texto, seletor)` | Abre menus dropdown através do evento `mouseenter`. |
| `cy.setSession(perfil)` | Cria ou restaura uma sessão autenticada utilizando `cy.session()`. |

---

# 📌 Boas práticas aplicadas

Durante o desenvolvimento da suíte foram adotadas práticas voltadas para organização, reutilização e escalabilidade dos testes.

- Organização dos testes por funcionalidade
- Utilização de **Custom Commands**
- Separação das massas de dados utilizando **Fixtures**
- Reutilização de sessão através de `cy.session()`
- Identificação dos casos de teste (CT-001 até CT-041)
- Documentação de defeitos encontrados
- Estrutura preparada para manutenção e expansão
- Separação entre documentação funcional e automação

---

# 📈 Rastreabilidade

O projeto foi desenvolvido seguindo um fluxo completo de **Quality Assurance**, permitindo rastrear cada funcionalidade desde as regras de negócio até a documentação dos defeitos encontrados.

```text
Regras de Negócio
        │
        ▼
Casos de Teste
        │
        ▼
Especificação BDD
        │
        ▼
Automação Cypress
        │
        ▼
Bug Reports
```

Essa abordagem facilita a manutenção da suíte, garante maior cobertura dos requisitos e demonstra a relação entre especificação, validação e defeitos encontrados.

---

# 🐞 Documentação de Bugs

Os cenários que representam defeitos encontrados durante a validação da aplicação permanecem documentados na suíte através de `it.skip`.

Além disso, cada defeito possui um relatório completo na documentação do projeto, contendo:

- descrição;
- passos para reprodução;
- resultado esperado;
- resultado obtido;
- impacto;
- severidade;
- evidências.

Essa estratégia permite preservar a rastreabilidade dos defeitos sem comprometer a execução da suíte automatizada.

---

# 📈 Resultados

Esta suíte automatizada valida os principais fluxos da aplicação, garantindo:

- Integridade do processo de autenticação;
- Controle de acesso conforme perfil do usuário;
- Funcionamento da navegação;
- Exibição correta das vitrines de produtos;
- Consistência da interface.

Além da automação, o projeto contempla documentação funcional, casos de teste, rastreabilidade e registro de defeitos, simulando um fluxo de trabalho utilizado em equipes de **Quality Assurance**.

---

# 🛡️ Licença

Este projeto foi desenvolvido exclusivamente para fins de estudo, prática e demonstração de conhecimentos em automação de testes.

---

# 👨‍💻 Autor

Desenvolvido por **Anderson Moraes** como parte do portfólio de estudos em **Quality Assurance (QA)**.

### Contato

- GitHub: https://github.com/AndersonMoraees
- LinkedIn: https://www.linkedin.com/in/anderson-moraees/

---

# 🤝 Contribuições

Contribuições são sempre bem-vindas!

Caso encontre oportunidades de melhoria ou queira sugerir novos cenários de teste, fique à vontade para:

- abrir uma **Issue**;
- enviar um **Pull Request**;
- compartilhar sugestões para evolução da suíte.

---

# 🚀 Próximos Passos

O projeto foi estruturado para facilitar sua evolução. Algumas melhorias planejadas são:

- [ ] Testes de integração utilizando `cy.request()`
- [ ] Testes de contrato utilizando `cy.intercept()`
- [ ] Implementação do **Mochawesome Reporter**
- [ ] Integração com **GitHub Actions (CI/CD)**
- [ ] Execução automática em Pull Requests
- [ ] Testes Cross Browser
- [ ] Exploração de testes de Performance
- [ ] Integração com Allure Report

---

## ⭐ Considerações Finais

Este projeto foi desenvolvido com o objetivo de praticar e demonstrar conhecimentos em **Quality Assurance**, contemplando não apenas a automação dos testes, mas também a documentação necessária para garantir rastreabilidade entre requisitos, casos de teste, implementação e defeitos encontrados.

Mais do que validar funcionalidades, esta suíte busca representar um fluxo de trabalho próximo ao utilizado em projetos reais de desenvolvimento de software.