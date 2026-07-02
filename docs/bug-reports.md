# 🐞 Bug Reports

Este documento reúne os defeitos identificados durante a execução dos testes da aplicação **SuperQAlandia**.

Os bugs foram encontrados durante a execução dos Casos de Teste (CT) elaborados a partir das Regras de Negócio (RN) da aplicação e posteriormente automatizados utilizando **Cypress**.

Cada registro apresenta a rastreabilidade entre requisito, caso de teste e defeito encontrado, além das evidências coletadas durante a validação.

---

# 📑 Índice

- [📊 Resumo](#-resumo)
- [🐞 BUG-001 — Cadastro com campo "Confirmar Senha" vazio](#-bug-001--cadastro-com-campo-confirmar-senha-vazio)
- [🐞 BUG-002 — Cadastro com nome inválido](#-bug-002--cadastro-com-nome-inválido)
- [🐞 BUG-003 — Cadastro com e-mail inválido](#-bug-003--cadastro-com-e-mail-inválido)
- [🐞 BUG-004 — Cadastro com senhas diferentes](#-bug-004--cadastro-com-senhas-diferentes)
- [🐞 BUG-005 — Carrinho acessível para visitante](#-bug-005--carrinho-acessível-para-visitante)
- [🐞 BUG-006 — Menu do Administrador exibe opções indevidas](#-bug-006--menu-do-administrador-exibe-opções-indevidas)

---

# 📊 Resumo

| ID | CT | RN | Módulo | Severidade | Automatizado | Status |
|----|----|----|--------|:----------:|:------------:|:------:|
| BUG-001 | CT-017 | RN-04 | Cadastro | 🔴 Alta | ✅ | Aberto |
| BUG-002 | CT-018 | RN-04 | Cadastro | 🟡 Média | ✅ | Aberto |
| BUG-003 | CT-019 | RN-04 | Cadastro | 🔴 Alta | ✅ | Aberto |
| BUG-004 | CT-020 | RN-06 | Cadastro | 🔴 Alta | ✅ | Aberto |
| BUG-005 | CT-028 | RN-13 | Header | 🟢 Baixa | ✅ | Aberto |
| BUG-006 | CT-037 | RN-15 | Header | 🟢 Baixa | ✅ | Aberto |

---

# 🐞 BUG-001 — Cadastro com campo "Confirmar Senha" vazio

## 📌 Informações Gerais

| Campo | Valor |
|--------|-------|
| **Caso de Teste** | CT-017 |
| **Regra de Negócio** | RN-04 |
| **Módulo** | Cadastro |
| **Severidade** | 🔴 Alta |
| **Prioridade** | Alta |
| **Status** | Aberto |
| **Ambiente** | Firefox • Windows 11 • Aplicação local |

---

## 📝 Descrição

O sistema permite concluir o cadastro mesmo quando o campo **Confirmar Senha** permanece vazio.

---

## ✅ Pré-condições

- Usuário não autenticado.
- Estar na tela de Cadastro.

---

## 🔄 Passos para reproduzir

1. Informar um nome válido.
2. Informar um e-mail válido.
3. Informar uma senha válida.
4. Manter o campo **Confirmar Senha** vazio.
5. Clicar em **Cadastrar**.

---

## ✔️ Resultado Esperado

O sistema deve impedir o cadastro e exibir a mensagem:

> **"Preencha todos os campos."**

---

## ❌ Resultado Obtido

O sistema realiza o cadastro normalmente, autentica automaticamente o usuário, redireciona para a Home e exibe uma mensagem de sucesso.

---

## 🎯 Impacto

A ausência da validação permite a criação de contas com dados inconsistentes, aumentando a possibilidade de erros de autenticação e solicitações de recuperação de senha.

---

## 📷 Evidência

<p align="center">
    <img src="assets/bugs/bug001.png" alt="BUG-001 - Cadastro com Confirmar Senha vazio" width="900">
</p>

---

# 🐞 BUG-002 — Cadastro com nome inválido

## 📌 Informações Gerais

| Campo | Valor |
|--------|-------|
| **Caso de Teste** | CT-018 |
| **Regra de Negócio** | RN-04 |
| **Módulo** | Cadastro |
| **Severidade** | 🟡 Média |
| **Prioridade** | Média |
| **Status** | Aberto |
| **Ambiente** | Firefox • Windows 11 • Aplicação local |

---

## 📝 Descrição

O sistema aceita o cadastro utilizando um nome composto exclusivamente por caracteres numéricos.

---

## ✅ Pré-condições

- Usuário não autenticado.
- Estar na tela de Cadastro.

---

## 🔄 Passos para reproduzir

1. Informar o nome **123123**.
2. Informar um e-mail válido.
3. Informar uma senha válida.
4. Confirmar a senha.
5. Clicar em **Cadastrar**.

---

## ✔️ Resultado Esperado

O sistema deve impedir o cadastro e exibir a mensagem:

> **"Nome inválido."**

---

## ❌ Resultado Obtido

O sistema aceita o valor informado, realiza o cadastro, autentica automaticamente o usuário e redireciona para a Home.

---

## 🎯 Impacto

Permite o armazenamento de dados inválidos na base da aplicação, comprometendo a qualidade das informações cadastrais e dificultando futuras integrações e comunicações com o usuário.

---

## 📷 Evidência

<p align="center">
    <img src="assets/bugs/bug002.png" alt="BUG-002 - Cadastro com Nome Inválido" width="900">
</p>

---

# 🐞 BUG-003 — Cadastro com e-mail inválido

## 📌 Informações Gerais

| Campo | Valor |
|--------|-------|
| **Caso de Teste** | CT-019 |
| **Regra de Negócio** | RN-04 |
| **Módulo** | Cadastro |
| **Severidade** | 🔴 Alta |
| **Prioridade** | Alta |
| **Status** | Aberto |
| **Ambiente** | Firefox • Windows 11 • Aplicação local |

---

## 📝 Descrição

O sistema permite concluir o cadastro utilizando um endereço de e-mail em formato inválido.

---

## ✅ Pré-condições

- Usuário não autenticado.
- Estar na tela de Cadastro.

---

## 🔄 Passos para reproduzir

1. Informar um nome válido.
2. Informar o e-mail **teste19_cadastro.com**.
3. Informar uma senha válida.
4. Confirmar a senha.
5. Clicar em **Cadastrar**.

---

## ✔️ Resultado Esperado

O sistema deve impedir o cadastro e exibir a mensagem:

> **"E-mail inválido."**

---

## ❌ Resultado Obtido

O sistema aceita o endereço de e-mail informado, cria a conta, autentica automaticamente o usuário e redireciona para a Home.

---

## 🎯 Impacto

O cadastro de endereços de e-mail inválidos compromete funcionalidades essenciais, como autenticação, recuperação de senha, envio de notificações e comunicação com os usuários.

---

## 📷 Evidência

<p align="center">
    <img src="assets/bugs/bug003.png" alt="BUG-003 - Cadastro com E-mail Inválido" width="900">
</p>

---

# 🐞 BUG-004 — Cadastro com senhas diferentes

## 📌 Informações Gerais

| Campo | Valor |
|--------|-------|
| **Caso de Teste** | CT-020 |
| **Regra de Negócio** | RN-06 |
| **Módulo** | Cadastro |
| **Severidade** | 🔴 Alta |
| **Prioridade** | Alta |
| **Status** | Aberto |
| **Ambiente** | Firefox • Windows 11 • Aplicação local |

---

## 📝 Descrição

O sistema permite concluir o cadastro mesmo quando os campos **Senha** e **Confirmar Senha** possuem valores diferentes.

---

## ✅ Pré-condições

- Usuário não autenticado.
- Estar na tela de Cadastro.

---

## 🔄 Passos para reproduzir

1. Informar um nome válido.
2. Informar um e-mail válido.
3. Informar a senha **1234**.
4. Informar **4321** no campo **Confirmar Senha**.
5. Clicar em **Cadastrar**.

---

## ✔️ Resultado Esperado

O sistema deve impedir o cadastro e exibir a mensagem:

> **"As senhas não coincidem."**

---

## ❌ Resultado Obtido

O sistema realiza o cadastro normalmente, autentica automaticamente o usuário e redireciona para a Home.

---

## 🎯 Impacto

Permitir o cadastro com senhas divergentes pode impedir que o usuário consiga acessar sua própria conta posteriormente, aumentando solicitações de recuperação de senha e comprometendo a confiabilidade do processo de cadastro.

---

## 📷 Evidência

<p align="center">
    <img src="assets/bugs/bug004.png" alt="BUG-004 - Cadastro com Senhas Diferentes" width="900">
</p>

---

# 🐞 BUG-005 — Visitante acessa o carrinho sem redirecionamento ao Login

## 📌 Informações Gerais

| Campo | Valor |
|--------|-------|
| **Caso de Teste** | CT-028 |
| **Regra de Negócio** | RN-13 |
| **Módulo** | Header |
| **Severidade** | 🟢 Baixa |
| **Prioridade** | Baixa |
| **Status** | Aberto |
| **Ambiente** | Firefox • Windows 11 • Aplicação local |

---

## 📝 Descrição

Ao clicar no ícone do carrinho como visitante, o comportamento esperado de redirecionamento para a tela de Login não ocorre integralmente.

---

## ✅ Pré-condições

- Usuário não autenticado.
- Estar na Home da aplicação.

---

## 🔄 Passos para reproduzir

1. Acessar a aplicação sem realizar login.
2. Clicar no ícone do **Carrinho** localizado no Header.

---

## ✔️ Resultado Esperado

O sistema deve:

- exibir o toast **"Faça login para ver o carrinho."**;
- redirecionar automaticamente para a tela de Login;
- impedir o acesso ao carrinho.

---

## ❌ Resultado Obtido

O carrinho não é exibido para o visitante, porém o fluxo esperado de orientação e redirecionamento não é executado conforme especificado pela regra de negócio.

---

## 🎯 Impacto

Embora não comprometa diretamente a segurança da aplicação, o comportamento gera uma experiência inconsistente ao usuário e não segue o fluxo funcional definido para visitantes.

---

## 📷 Evidência

<p align="center">
    <img src="assets/bugs/bug005.png" alt="BUG-005 - Carrinho para Visitante" width="900">
</p>

---

# 🐞 BUG-006 — Menu do Administrador exibe opções destinadas ao Usuário Comum

## 📌 Informações Gerais

| Campo | Valor |
|--------|-------|
| **Caso de Teste** | CT-037 |
| **Regra de Negócio** | RN-15 |
| **Módulo** | Header |
| **Severidade** | 🟢 Baixa |
| **Prioridade** | Baixa |
| **Status** | Aberto |
| **Ambiente** | Firefox • Windows 11 • Aplicação local |

---

## 📝 Descrição

Ao acessar o menu suspenso do perfil Administrador, o sistema exibe opções pertencentes à Área do Cliente, que não deveriam estar disponíveis para esse perfil.

---

## ✅ Pré-condições

- Estar autenticado como **Administrador**.
- Estar na Home da aplicação.

---

## 🔄 Passos para reproduzir

1. Realizar login como Administrador.
2. Acessar a Home.
3. Clicar ou posicionar o mouse sobre **"Olá, Administrador"**.

---

## ✔️ Resultado Esperado

O menu deve exibir exclusivamente as opções:

- Painel Admin;
- Sair.

As funcionalidades destinadas ao usuário comum não devem ser apresentadas.

---

## ❌ Resultado Obtido

O sistema exibe opções da Área do Cliente (Meus Dados, Endereço, Forma de Pagamento, Favoritos, Histórico de Compras e Vistos por Último). Ao selecionar qualquer uma dessas opções, o Administrador é redirecionado para a tela de Login.

---

## 🎯 Impacto

O comportamento evidencia falha na renderização condicional da interface conforme o perfil do usuário, causando inconsistência na experiência de uso e permitindo acesso visual a funcionalidades que não pertencem ao Administrador.

---

## 📷 Evidência

<p align="center">
    <img src="assets/bugs/bug006.png" alt="BUG-006 - Menu do Administrador" width="900">
</p>

---

# 📈 Considerações Finais

Os defeitos documentados neste arquivo foram identificados durante a execução dos Casos de Teste elaborados a partir das Regras de Negócio da aplicação.

Todos os cenários possuem cobertura na suíte de testes automatizados desenvolvida com **Cypress**. Os casos que representam comportamentos divergentes permanecem registrados na automação utilizando `it.skip`, permitindo manter a rastreabilidade entre:

- Regras de Negócio;
- Casos de Teste;
- Automação;
- Defeitos identificados.

Essa abordagem facilita a manutenção da suíte de testes, a validação de futuras correções e a evolução contínua da qualidade da aplicação.

---