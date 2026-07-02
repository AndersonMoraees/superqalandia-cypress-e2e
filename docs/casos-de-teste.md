# 📑 Casos de Teste

Este documento reúne os **41 Casos de Teste (CTs)** elaborados para validar os requisitos funcionais da aplicação **SuperQAlandia**.

Os cenários documentados serviram como base para a implementação da suíte de testes automatizados em **Cypress**, garantindo rastreabilidade entre as **Regras de Negócio (RN)**, os **Casos de Teste (CT)** e os testes automatizados.

---

# 📊 Resumo

| Item | Quantidade |
|------|-----------:|
| Casos de Teste | 41 |
| Módulos | 3 |
| Regras de Negócio Cobertas | RN-01 a RN-19 |

---

# 🗂 Organização

| Módulo | Casos |
|---------|-------|
| 🔐 Login e Cadastro | CT-001 a CT-022 |
| 🧭 Header | CT-023 a CT-037 |
| 🏠 Home | CT-038 a CT-041 |

---

# 🔐 Login (CT-001 a CT-011)

| ID | Caso de Teste | Status |
|----|---------------|:------:|
| CT-001 | Acesso inicial como visitante | ✅ |
| CT-002 | Login como ADM | ✅ |
| CT-003 | Login como Usuário Padrão | ✅ |
| CT-004 | Login sem Email | ✅ |
| CT-005 | Login sem Senha | ✅ |
| CT-006 | Login sem Email e Senha | ✅ |
| CT-007 | Login com Senha incorreta | ✅ |
| CT-008 | Login com Email não cadastrado | ✅ |
| CT-009 | Login com Email com formato inválido | ✅ |
| CT-010 | Login com tecla **Enter** | ✅ |
| CT-011 | Sair da conta | ✅ |

---

# 📝 Cadastro (CT-012 a CT-022)

| ID | Caso de Teste | Status |
|----|---------------|:------:|
| CT-012 | Cadastro com todos os dados corretos | ✅ |
| CT-013 | Cadastro com todos os campos vazios | ✅ |
| CT-014 | Cadastro com campo Nome vazio | ✅ |
| CT-015 | Cadastro com campo Email vazio | ✅ |
| CT-016 | Cadastro com campo Senha vazio | ✅ |
| CT-017 | Cadastro com campo Confirmar senha vazio | 🐞 |
| CT-018 | Cadastro com nome inválido | 🐞 |
| CT-019 | Cadastro com Email inválido | 🐞 |
| CT-020 | Cadastro com Senha e Confirmar senha diferentes | 🐞 |
| CT-021 | Cadastro com email já cadastrado | ✅ |
| CT-022 | Cadastro com senha com menos que 4 caracteres | ✅ |

---

# 🧭 Header (CT-023 a CT-037)

| ID | Caso de Teste | Status |
|----|---------------|:------:|
| CT-023 | Logo redireciona para Home | ✅ |
| CT-024 | Menu **Categorias** visível (logado) | ✅ |
| CT-025 | Menu **Categorias** visível (visitante) | ✅ |
| CT-026 | Menu expandido de **Categorias** abre e seleciona a categoria | ✅ |
| CT-027 | Menu **Categorias** fecha ao clicar fora | ✅ |
| CT-028 | **Carrinho** - Visitante redirecionado ao Login | 🐞 |
| CT-029 | **Carrinho** - Logado abre painel lateral | ✅ |
| CT-030 | **Carrinho** - Visitante redirecionado ao Login ao tentar adicionar item | ✅ |
| CT-031 | **Carrinho** - Logado exibe badge com a quantidade de itens | ✅ |
| CT-032 | **Menu do usuário** - Visitante | ✅ |
| CT-033 | **Menu do usuário** - Logado | ✅ |
| CT-034 | **Painel Admin** - Visitante | ✅ |
| CT-035 | **Painel Admin** - Logado como Usuário comum | ✅ |
| CT-036 | **Painel Admin** - Logado como Admin | ✅ |
| CT-037 | Exibição do menu suspenso **"Olá, Administrador"** (Condicional de Perfil) | 🐞 |

---

# 🏠 Home (CT-038 a CT-041)

| ID | Caso de Teste | Status |
|----|---------------|:------:|
| CT-038 | Carrossel **Mais Bem Avaliados** | ✅ |
| CT-039 | Carrossel **Mais Comprados** | ✅ |
| CT-040 | Lista de produtos por categoria | ✅ |
| CT-041 | Dados nos cards de produto | ✅ |

---

# 🐞 Casos com Bugs Identificados

Durante a execução dos testes, foram identificados **6 defeitos** na aplicação.

| Caso | Descrição |
|------|-----------|
| CT-017 | Cadastro permite envio sem confirmação de senha. |
| CT-018 | Cadastro aceita nome inválido. |
| CT-019 | Cadastro aceita e-mail em formato inválido. |
| CT-020 | Cadastro permite senhas diferentes. |
| CT-028 | Fluxo do carrinho para visitante diverge do comportamento esperado. |
| CT-037 | Menu do Administrador exibe opções de usuário comum e permite navegação incorreta. |

Esses cenários permanecem documentados na automação utilizando `it.skip`, preservando a rastreabilidade dos defeitos encontrados.

---

# 🔄 Rastreabilidade

| Casos de Teste | Arquivo de Automação |
|----------------|----------------------|
| CT-001 a CT-011 | `login.cy.js` |
| CT-012 a CT-022 | `cadastro.cy.js` |
| CT-023 a CT-037 | `header.cy.js` |
| CT-038 a CT-041 | `home.cy.js` |

---

# 📝 Observações

- Todos os casos de teste foram elaborados com base nas **Regras de Negócio RN-01 a RN-19**.
- A suíte automatizada foi implementada mantendo a identificação dos casos de teste (CT-001 a CT-041), facilitando a rastreabilidade entre documentação e código.
- Os cenários classificados como 🐞 representam comportamentos divergentes do esperado e estão detalhados no documento **`bug-reports.md`**.