# 📖 Especificação Funcional em BDD

Este documento apresenta a especificação funcional da aplicação utilizando a abordagem **Behavior Driven Development (BDD)** com sintaxe **Gherkin**.

Os cenários foram elaborados a partir das **Regras de Negócio** e dos **Casos de Teste** documentados neste projeto, descrevendo o comportamento esperado da aplicação de forma legível para as áreas de negócio, desenvolvimento e qualidade.

---

# 🔐 Módulo: Login

## Funcionalidade: Autenticação de Usuários

Como usuário da aplicação,

Quero realizar login,

Para acessar funcionalidades de acordo com o meu perfil de acesso.

---

### Contexto

```gherkin
Contexto:
  Dado que estou na tela de Login
```

---

## Esquema do Cenário: Login realizado com sucesso

**Casos de Teste relacionados:** CT-002 e CT-003

**Regras de Negócio relacionadas:** RN-01

```gherkin
Esquema do Cenário: Login com credenciais válidas

Quando informo o e-mail "<email>"
E informo a senha "<senha>"
E clico no botão "Entrar"
Então devo ser redirecionado para a página inicial
E devo visualizar a mensagem "<mensagem>"

Exemplos:
| email              | senha    | mensagem                      |
| admin@superqa.com  | admin123 | Bem-vindo(a), Administrador!  |
| usuario@email.com  | user123  | Bem-vindo(a), Usuário Padrão! |
```

---

## Esquema do Cenário: Tentativa de login com credenciais inválidas

**Casos de Teste relacionados:** CT-004 ao CT-009

**Regras de Negócio relacionadas:** RN-02 e RN-03

```gherkin
Esquema do Cenário: Login com credenciais inválidas

Quando informo o e-mail "<email>"
E informo a senha "<senha>"
E clico no botão "Entrar"
Então devo visualizar a mensagem

"""
Credenciais inválidas
"""

Exemplos:
| email              | senha        |
|                    | user123      |
| usuario@email.com  |              |
|                    |              |
| usuario@email.com  | senhaErrada  |
| teste08@login.com  | 123456       |
| teste09_login.com  | 123456       |
```

---

## Cenário: Login utilizando a tecla Enter

**Caso de Teste relacionado:** CT-010

**Regra de Negócio relacionada:** RN-01

```gherkin
Cenário: Realizar login utilizando a tecla Enter

Quando informo o e-mail "usuario@email.com"
E informo a senha "user123"
E pressiono a tecla Enter
Então devo ser redirecionado para a página inicial
E devo visualizar a mensagem

"""
Bem-vindo(a), Usuário Padrão!
"""
```

---

## Cenário: Encerrar sessão

**Caso de Teste relacionado:** CT-011

**Regra de Negócio relacionada:** RN-04

```gherkin
Cenário: Encerrar sessão do usuário

Dado que estou autenticado como usuário padrão
Quando acesso o menu do usuário
E seleciono a opção "Sair"
Então devo ser redirecionado para a página inicial
E devo visualizar a mensagem

"""
Você saiu da conta.
"""

E minha sessão deve ser encerrada
E os itens do carrinho devem ser removidos
E os favoritos devem ser limpos
```

---

## 📌 Rastreabilidade

| Cenário BDD | Casos de Teste |
|-------------|----------------|
| Login com credenciais válidas | CT-002, CT-003 |
| Login com credenciais inválidas | CT-004 ao CT-009 |
| Login utilizando Enter | CT-010 |
| Encerrar sessão | CT-011 |

---

# 📝 Módulo: Cadastro

## Funcionalidade: Cadastro de Usuários

Como visitante,

Quero criar uma conta na aplicação,

Para realizar compras e acessar funcionalidades exclusivas para usuários autenticados.

---

### Contexto

```gherkin
Contexto:
  Dado que estou na tela de Cadastro
```

---

## Cenário: Cadastro realizado com sucesso

**Caso de Teste relacionado:** CT-012

**Regras de Negócio relacionadas:** RN-05, RN-06 e RN-07

```gherkin
Cenário: Cadastro com dados válidos

Quando informo um nome válido
E informo um e-mail válido
E informo uma senha válida
E confirmo a senha corretamente
E clico no botão "Cadastrar"
Então minha conta deve ser criada com sucesso
E devo ser autenticado automaticamente
E devo ser redirecionado para a página inicial
E devo visualizar uma mensagem de sucesso
```

---

## Esquema do Cenário: Validação dos campos obrigatórios

**Casos de Teste relacionados:** CT-013 ao CT-016

**Regras de Negócio relacionadas:** RN-05

```gherkin
Esquema do Cenário: Tentativa de cadastro com campos obrigatórios não preenchidos

Quando informo "<nome>" no campo Nome
E informo "<email>" no campo E-mail
E informo "<senha>" no campo Senha
E informo "<confirmacao>" no campo Confirmar Senha
E clico no botão "Cadastrar"
Então devo visualizar a mensagem

"""
Preencha todos os campos
"""

Exemplos:
| nome          | email                 | senha | confirmacao |
|               |                       |       |             |
|               | teste@cadastro.com    | 1234  | 1234        |
| José Testador |                       | 1234  | 1234        |
| José Testador | teste@cadastro.com    |       | 1234        |
```

---

## Esquema do Cenário: Validação das regras de cadastro

**Casos de Teste relacionados:** CT-018, CT-019, CT-020 e CT-022

**Regras de Negócio relacionadas:** RN-06 e RN-07

```gherkin
Esquema do Cenário: Validação dos dados informados no cadastro

Quando informo "<nome>" no campo Nome
E informo "<email>" no campo E-mail
E informo "<senha>" no campo Senha
E informo "<confirmacao>" no campo Confirmar Senha
E clico no botão "Cadastrar"
Então devo visualizar a mensagem "<mensagem>"

Exemplos:
| nome       | email                 | senha | confirmacao | mensagem                      |
| 123123     | teste@cadastro.com    | 1234  | 1234        | Nome inválido                 |
| José Testa | teste19_cadastro.com  | 1234  | 1234        | Email inválido                |
| José Testa | teste20@cadastro.com  | 1234  | 4321        | As senhas não coincidem       |
| José Testa | teste22@cadastro.com  | 123   | 123         | Senha mínima 4 caracteres     |
```

---

## Cenário: Cadastro utilizando e-mail já existente

**Caso de Teste relacionado:** CT-021

**Regra de Negócio relacionada:** RN-08

```gherkin
Cenário: Cadastro com e-mail já cadastrado

Quando informo um nome válido
E informo um e-mail já cadastrado
E informo uma senha válida
E confirmo a senha corretamente
E clico no botão "Cadastrar"
Então devo visualizar a mensagem

"""
Email já cadastrado
"""
```

---

## Cenário: Confirmação de senha obrigatória

**Caso de Teste relacionado:** CT-017

**Regra de Negócio relacionada:** RN-05

```gherkin
Cenário: Campo Confirmar Senha obrigatório

Quando informo um nome válido
E informo um e-mail válido
E informo uma senha válida
E deixo o campo Confirmar Senha vazio
E clico no botão "Cadastrar"
Então o sistema não deve permitir o cadastro
E devo visualizar a mensagem

"""
Preencha todos os campos
"""
```

---

## 📌 Rastreabilidade

| Cenário BDD | Casos de Teste |
|--------------|----------------|
| Cadastro com dados válidos | CT-012 |
| Validação dos campos obrigatórios | CT-013 ao CT-016 |
| Validação das regras de cadastro | CT-018, CT-019, CT-020 e CT-022 |
| Cadastro com e-mail já cadastrado | CT-021 |
| Campo Confirmar Senha obrigatório | CT-017 |

---

# 🧭 Módulo: Header e Navegação

## Funcionalidade: Navegação da Aplicação

Como usuário da aplicação,

Quero navegar pelos menus disponíveis conforme meu perfil,

Para acessar as funcionalidades permitidas de forma simples e segura.

---

### Contexto

```gherkin
Contexto:
  Dado que acesso a aplicação
```

---

## Cenário: Acessar categorias de produtos

**Casos de Teste relacionados:** CT-023 ao CT-027

**Regras de Negócio relacionadas:** RN-09, RN-10 e RN-11

```gherkin
Cenário: Navegação pelo menu de categorias

Dado que estou na página inicial
Quando passo o mouse sobre o menu "Categorias"
Então o menu suspenso deve ser exibido

Quando seleciono uma categoria
Então devo ser direcionado para a página da categoria selecionada

Quando clico fora do menu
Então o menu suspenso deve ser fechado

E a logo da aplicação deve permanecer disponível para retornar à página inicial
```

---

## Esquema do Cenário: Acesso ao carrinho

**Casos de Teste relacionados:** CT-028 ao CT-031

**Regras de Negócio relacionadas:** RN-12 e RN-13

```gherkin
Esquema do Cenário: Acesso ao carrinho conforme perfil

Dado que estou autenticado como "<perfil>"
Quando clico no ícone do carrinho
Então o sistema deve apresentar "<resultado>"

Exemplos:
| perfil     | resultado                                                         |
| Visitante  | redirecionamento para a tela de Login                             |
| Usuário    | abertura do painel lateral do carrinho                            |
| Visitante  | solicitação de autenticação ao tentar adicionar produtos          |
| Usuário    | exibição da quantidade de itens no carrinho                       |
```

---

## Esquema do Cenário: Exibição do menu do usuário

**Casos de Teste relacionados:** CT-032 e CT-033

**Regra de Negócio relacionada:** RN-14

```gherkin
Esquema do Cenário: Exibição do menu do usuário

Dado que acesso a aplicação como "<perfil>"
Então "<resultado>"

Exemplos:
| perfil     | resultado                                                         |
| Visitante  | o menu do usuário não deve ser exibido                            |
| Usuário    | o menu do usuário deve exibir todas as opções da área do cliente  |
```

---

## Esquema do Cenário: Exibição do Painel Administrativo

**Casos de Teste relacionados:** CT-034 ao CT-036

**Regras de Negócio relacionadas:** RN-15 e RN-16

```gherkin
Esquema do Cenário: Exibição do Painel Admin

Dado que acesso a aplicação como "<perfil>"
Então "<resultado>"

Exemplos:
| perfil          | resultado                                      |
| Visitante       | o Painel Admin não deve ser exibido            |
| Usuário         | o Painel Admin não deve ser exibido            |
| Administrador   | o Painel Admin deve ser exibido                |
```

---

## Cenário: Menu do Administrador

**Caso de Teste relacionado:** CT-037

**Regra de Negócio relacionada:** RN-17

```gherkin
Cenário: Exibição do menu do administrador

Dado que estou autenticado como Administrador
Quando acesso o menu do usuário
Então devo visualizar apenas as opções administrativas

E devo visualizar a opção "Painel Admin"
E devo visualizar a opção "Sair"

E não devo visualizar opções exclusivas da área do cliente
```

---

## 📌 Rastreabilidade

| Cenário BDD | Casos de Teste |
|--------------|----------------|
| Navegação pelo menu de categorias | CT-023 ao CT-027 |
| Acesso ao carrinho conforme perfil | CT-028 ao CT-031 |
| Exibição do menu do usuário | CT-032 e CT-033 |
| Exibição do Painel Admin | CT-034 ao CT-036 |
| Menu do Administrador | CT-037 |

---

# 🏠 Módulo: Home

## Funcionalidade: Exibição da Página Inicial

Como visitante ou usuário autenticado,

Quero visualizar os produtos organizados na página inicial,

Para encontrar facilmente os itens disponíveis para compra.

---

### Contexto

```gherkin
Contexto:
  Dado que acesso a página inicial da aplicação
```

---

## Cenário: Exibição do carrossel "Mais Bem Avaliados"

**Caso de Teste relacionado:** CT-038

**Regra de Negócio relacionada:** RN-18

```gherkin
Cenário: Exibir produtos mais bem avaliados

Então devo visualizar o carrossel "Mais Bem Avaliados"

E o carrossel deve exibir até 15 produtos
E todos os produtos exibidos devem possuir pelo menos uma avaliação
E os produtos devem estar ordenados pela maior média de avaliação
```

---

## Cenário: Exibição do carrossel "Mais Comprados"

**Caso de Teste relacionado:** CT-039

**Regra de Negócio relacionada:** RN-18

```gherkin
Cenário: Exibir produtos mais comprados

Então devo visualizar o carrossel "Mais Comprados"

E o carrossel deve exibir até 15 produtos
E os produtos devem estar ordenados pela quantidade total de vendas
```

---

## Cenário: Exibição das vitrines por categoria

**Caso de Teste relacionado:** CT-040

**Regra de Negócio relacionada:** RN-19

```gherkin
Cenário: Exibir produtos por categoria

Então cada categoria deve exibir até 6 produtos

E ao final da vitrine deve existir um card "Ver todos"

Quando clico no card "Ver todos"

Então devo ser direcionado para a página da categoria correspondente
```

---

## Cenário: Exibição das informações dos produtos

**Caso de Teste relacionado:** CT-041

**Regra de Negócio relacionada:** RN-19

```gherkin
Cenário: Exibir informações dos produtos

Então cada card de produto deve apresentar

E emoji do produto
E nome
E média de avaliações
E quantidade de avaliações
E preço

E botão "Adicionar ao Carrinho"
E botão "Comprar"
E botão "Favoritar"
```

---

## 📌 Rastreabilidade

| Cenário BDD | Casos de Teste |
|--------------|----------------|
| Exibir produtos mais bem avaliados | CT-038 |
| Exibir produtos mais comprados | CT-039 |
| Exibir produtos por categoria | CT-040 |
| Exibir informações dos produtos | CT-041 |

---