# 📋 Regras de Negócio

Este documento reúne as **Regras de Negócio (RN)** da aplicação **SuperQAlandia**.

As regras definem o comportamento esperado do sistema e serviram como base para a elaboração dos Casos de Teste (CT) e para o desenvolvimento da suíte de testes automatizados em **Cypress**.

---

# 📊 Resumo

| Item | Quantidade |
|------|-----------:|
| Regras de Negócio | 83 |
| Regras Cobertas pela Automação | RN-01 a RN-19 |
| Casos de Teste | 41 |

---

# 📑 Organização

| Módulo | Regras |
|---------|--------|
| 🔐 Autenticação e Cadastro | RN-01 a RN-09 |
| 🧭 Header e Navegação | RN-10 a RN-15 |
| 🏠 Home | RN-16 a RN-19 |
| 🛒 Catálogo e Categorias | RN-20 a RN-22 |
| 📦 Detalhe do Produto | RN-23 a RN-33 |
| 🛍️ Carrinho Lateral | RN-34 a RN-38 |
| 💳 Checkout | RN-39 a RN-48 |
| 👤 Área do Cliente | RN-49 a RN-55 |
| ⚙️ Painel Administrativo | RN-56 a RN-62 |
| ⭐ Avaliações e Comentários | RN-63 a RN-67 |
| 💾 Persistência e Atributos de Teste | RN-68 a RN-70 |
| 🔄 Regras Transversais | RN-71 a RN-74 |
| 📦 Controle de Estoque | RN-75 a RN-83 |

---

# 🔐 Autenticação e Cadastro (RN-01 a RN-09)

| ID | Regra | Critério de Aceitação |
|----|--------|-----------------------|
| RN-01 | Acesso inicial | Ao abrir o site, a Home (catálogo) deve ser exibida, sem redirecionamento para a tela de Login. |
| RN-02 | Credenciais padrão | O sistema deve possuir dois usuários cadastrados por padrão: um Administrador e um Usuário Padrão. |
| RN-03 | Login com credenciais inválidas | Ao informar e-mail ou senha incorretos, o sistema deve permanecer na tela de Login e exibir o toast **"Credenciais inválidas."** |
| RN-04 | Campos obrigatórios no cadastro | Os campos Nome, E-mail, Senha e Confirmar Senha são obrigatórios. Caso algum esteja vazio, o cadastro não deve ser realizado. |
| RN-05 | Senha mínima | A senha deve possuir, no mínimo, **4 caracteres**. |
| RN-06 | Confirmação de senha | O sistema deve permitir o cadastro somente quando os campos Senha e Confirmar Senha forem idênticos. |
| RN-07 | E-mail duplicado | Não permitir cadastro utilizando um e-mail já existente, exibindo a mensagem **"E-mail já cadastrado."** |
| RN-08 | Cadastro bem-sucedido | Após um cadastro válido, o usuário deve ser autenticado automaticamente, redirecionado para a Home e receber um toast de sucesso. |
| RN-09 | Logout | Ao realizar logout, o sistema deve limpar a sessão do usuário, carrinho e favoritos, fechar o carrinho lateral e retornar para a Home exibindo o toast **"Você saiu da conta."** |

---

# 🧭 Header e Navegação (RN-10 a RN-15)

| ID | Regra | Critério de Aceitação |
|----|--------|-----------------------|
| RN-10 | Logo | Ao clicar na logo **SuperQAlandia**, o sistema deve redirecionar o usuário para a Home. |
| RN-11 | Menu "Categorias" | O menu **Categorias** deve permanecer visível para visitantes e usuários autenticados, exibindo as categorias disponíveis e permitindo navegar entre elas. |
| RN-12 | Comportamento dos dropdowns | Os menus suspensos devem abrir ao passar o mouse, permanecer abertos por um curto intervalo e fechar ao selecionar uma opção ou clicar fora do menu. |
| RN-13 | Carrinho | O ícone do carrinho deve permanecer visível. Para visitantes, deve solicitar login; para usuários autenticados, deve abrir o carrinho lateral. |
| RN-14 | Menu do usuário | O menu **"Olá, Nome"** deve ser exibido apenas para usuários autenticados, contendo as opções da Área do Cliente. |
| RN-15 | Painel Administrativo | O link **Painel Admin** deve ser exibido exclusivamente para usuários com perfil de Administrador. |

---

# 🏠 Home (RN-16 a RN-19)

| ID | Regra | Critério de Aceitação |
|----|--------|-----------------------|
| RN-16 | Carrossel "Mais Bem Avaliados" | Deve exibir até **15 produtos** que possuam avaliações, ordenados pela maior média de estrelas. |
| RN-17 | Carrossel "Mais Comprados" | Deve exibir até **15 produtos**, ordenados pela quantidade total de vendas registradas. |
| RN-18 | Lista de produtos por categoria | Cada categoria deve exibir até **6 produtos**, seguida por um card **"Ver todos (N)"**, que direciona para a página da categoria correspondente. |
| RN-19 | Dados nos cards de produto | Cada card deve exibir emoji, nome do produto, média e quantidade de avaliações, preço e botões para adicionar ao carrinho, comprar e favoritar. |

---

# 🔄 Rastreabilidade

As Regras de Negócio apresentadas nesta seção serviram como base para a elaboração dos Casos de Teste e para a implementação da suíte automatizada.

| Regras | Arquivo de Automação |
|---------|----------------------|
| RN-01 a RN-09 | `login.cy.js` e `cadastro.cy.js` |
| RN-10 a RN-15 | `header.cy.js` |
| RN-16 a RN-19 | `home.cy.js` |

---

# 📝 Observações

- Este documento descreve exclusivamente o comportamento esperado da aplicação.
- Os Casos de Teste foram elaborados a partir destas Regras de Negócio.
- Os defeitos identificados durante a execução dos testes estão documentados separadamente em **`bug-reports.md`**.

---

# 🛒 Catálogo e Categorias (RN-20 a RN-22)

| ID | Regra | Critério de Aceitação |
|----|--------|-----------------------|
| RN-20 | Tela de categoria | Ao acessar uma categoria, o sistema deve exibir seu nome e listar todos os produtos pertencentes a ela utilizando o mesmo padrão de cards da Home. |
| RN-21 | Favoritar / Adicionar ao carrinho / Comprar (visitante) | Caso o usuário não esteja autenticado, qualquer uma dessas ações deve exibir um toast solicitando login e redirecionar para a tela de Login. |
| RN-22 | Favoritar / Adicionar ao carrinho / Comprar (logado) | Usuários autenticados devem conseguir favoritar produtos, adicionar itens ao carrinho e realizar compras normalmente. |

---

# 📦 Detalhe do Produto (RN-23 a RN-33)

| ID | Regra | Critério de Aceitação |
|----|--------|-----------------------|
| RN-23 | Acesso ao detalhe | Ao clicar no emoji ou no nome de um produto, o sistema deve abrir sua página de detalhes. |
| RN-24 | Informações exibidas | A página deve exibir emoji, nome, categoria, média de avaliações, quantidade de avaliações, preço e quantidade do produto no carrinho (quando o usuário estiver logado). |
| RN-25 | Avaliações existentes | Todas as avaliações cadastradas para o produto devem ser exibidas contendo nome do usuário, nota, data e comentário (quando existir). |
| RN-26 | Avaliar produto (visitante) | Visitantes não devem visualizar o formulário de avaliação, sendo exibida apenas a mensagem solicitando autenticação. |
| RN-27 | Avaliar produto (usuário logado) | Usuários autenticados que ainda não avaliaram o produto devem visualizar o formulário de avaliação com seleção de estrelas e comentário opcional. |
| RN-28 | Validação da avaliação | O envio da avaliação exige, obrigatoriamente, a seleção de pelo menos uma estrela. O comentário é opcional. |
| RN-29 | Avaliação enviada | Após enviar uma avaliação, ela deve ser salva e o sistema deve indicar que o usuário já avaliou aquele produto. |
| RN-30 | Produto já avaliado | Caso o usuário já tenha avaliado o produto anteriormente, o formulário não deve ser exibido novamente. |
| RN-31 | Atualização da média | Após uma nova avaliação, a média de estrelas do produto deve ser recalculada automaticamente. |
| RN-32 | Botão "Comprar" (logado) | Deve adicionar o produto ao carrinho com quantidade igual a 1 (ou redefinir para 1 caso já exista) e direcionar o usuário para o Checkout. |
| RN-33 | Botão "Comprar" (visitante) | Visitantes devem ser redirecionados para a tela de Login ao tentar comprar um produto. |

---

# 🛍️ Carrinho Lateral (RN-34 a RN-38)

| ID | Regra | Critério de Aceitação |
|----|--------|-----------------------|
| RN-34 | Abertura e fechamento | O carrinho lateral deve abrir ao clicar no ícone do carrinho e fechar ao clicar no botão fechar, no overlay ou ao iniciar o Checkout. |
| RN-35 | Lista de itens | Cada item do carrinho deve exibir emoji, nome do produto, controles de quantidade e subtotal. |
| RN-36 | Alteração de quantidade | O botão "+" incrementa a quantidade; o botão "−" decrementa. Ao atingir zero, o produto deve ser removido do carrinho. |
| RN-37 | Total do carrinho | O rodapé do carrinho deve exibir o valor total correspondente à soma dos subtotais dos itens. |
| RN-38 | Produto removido do catálogo | Produtos excluídos do catálogo não devem permanecer inconsistentes dentro do carrinho do usuário. |

---

# 💳 Checkout (RN-39 a RN-48)

| ID | Regra | Critério de Aceitação |
|----|--------|-----------------------|
| RN-39 | Acesso ao Checkout | O Checkout deve estar disponível apenas para usuários autenticados com carrinho contendo pelo menos um item. |
| RN-40 | Pré-preenchimento | Caso o usuário possua endereço e cartão cadastrados, os campos devem ser preenchidos automaticamente. |
| RN-41 | Validação do endereço | CEP, logradouro, número, bairro, cidade e UF são obrigatórios. A UF deve possuir exatamente dois caracteres. |
| RN-42 | Data de entrega | A data mínima permitida para entrega deve ser o dia seguinte ao atual. Datas anteriores não devem ser aceitas. |
| RN-43 | Validação do número do cartão | O número do cartão deve conter exatamente 16 dígitos numéricos. |
| RN-44 | Validação do nome no cartão | O nome impresso no cartão é obrigatório. |
| RN-45 | Validação da validade | A validade deve seguir o formato MM/AA e representar uma data válida e não expirada. |
| RN-46 | Validação do CVV | O código de segurança deve possuir exatamente três dígitos. |
| RN-47 | Confirmação da compra | Após confirmar o pedido, o sistema deve registrar a compra contendo endereço, data de entrega, dados do cartão, itens adquiridos e valor total. |
| RN-48 | Pós-confirmação | Após a conclusão da compra, o carrinho deve ser esvaziado, o badge atualizado, o carrinho lateral fechado e o usuário redirecionado para a Home com mensagem de sucesso. |

---

# 📝 Observações

- As regras descritas nesta seção representam os comportamentos esperados para os módulos de **Catálogo**, **Detalhes do Produto**, **Carrinho Lateral** e **Checkout**.
- Embora estes módulos estejam documentados, eles ainda não fazem parte da suíte de testes automatizados disponível neste repositório.

---

# 👤 Área do Cliente (RN-49 a RN-55)

| ID | Regra | Critério de Aceitação |
|----|--------|-----------------------|
| RN-49 | Acesso à Área do Cliente | Apenas usuários autenticados podem acessar as funcionalidades da Área do Cliente. |
| RN-50 | Meus Dados | O usuário deve visualizar e editar suas informações pessoais, como nome e e-mail. |
| RN-51 | Endereço | O usuário pode cadastrar, editar e remover seu endereço de entrega. |
| RN-52 | Forma de Pagamento | O usuário pode cadastrar, editar e remover cartões de pagamento. |
| RN-53 | Favoritos | O usuário pode visualizar todos os produtos marcados como favoritos e removê-los da lista. |
| RN-54 | Histórico de Compras | O sistema deve exibir todas as compras realizadas pelo usuário em ordem cronológica, contendo data, produtos adquiridos e valor total. |
| RN-55 | Vistos por Último | O sistema deve manter uma lista dos últimos produtos visualizados pelo usuário. |

---

# ⚙️ Painel Administrativo (RN-56 a RN-62)

| ID | Regra | Critério de Aceitação |
|----|--------|-----------------------|
| RN-56 | Acesso ao Painel Administrativo | Apenas usuários com perfil de Administrador podem acessar o Painel Administrativo. |
| RN-57 | Gerenciamento de Produtos | O administrador pode cadastrar, editar e excluir produtos. |
| RN-58 | Gerenciamento de Categorias | O administrador pode cadastrar, editar e excluir categorias. |
| RN-59 | Gerenciamento de Usuários | O administrador pode visualizar os usuários cadastrados no sistema. |
| RN-60 | Gerenciamento de Pedidos | O administrador pode consultar os pedidos realizados pelos clientes. |
| RN-61 | Controle de Estoque | O administrador pode atualizar a quantidade disponível de cada produto. |
| RN-62 | Atualização da Home | Alterações realizadas pelo administrador devem refletir automaticamente nas vitrines e listagens do sistema. |

---

# ⭐ Avaliações e Comentários (RN-63 a RN-67)

| ID | Regra | Critério de Aceitação |
|----|--------|-----------------------|
| RN-63 | Avaliação única | Cada usuário pode registrar apenas uma avaliação para cada produto. |
| RN-64 | Nota obrigatória | Toda avaliação deve possuir uma nota entre 1 e 5 estrelas. |
| RN-65 | Comentário opcional | O comentário da avaliação é opcional. |
| RN-66 | Atualização da média | Sempre que uma avaliação for adicionada, a média de avaliações do produto deve ser recalculada automaticamente. |
| RN-67 | Exibição das avaliações | As avaliações devem ser exibidas na página do produto contendo nome do usuário, nota, data e comentário (quando informado). |

---

# 📝 Observações

- As regras desta seção definem o funcionamento da Área do Cliente, do Painel Administrativo e do sistema de Avaliações.
- Todas as regras descrevem exclusivamente o comportamento esperado da aplicação e servem como base para futuras implementações e casos de teste.

---

# 💾 Persistência e Atributos de Teste (RN-68 a RN-70)

| ID | Regra | Critério de Aceitação |
|----|--------|-----------------------|
| RN-68 | Persistência dos dados | As informações da aplicação devem permanecer disponíveis durante toda a sessão do usuário, refletindo corretamente as alterações realizadas. |
| RN-69 | Identificação para testes | Os principais elementos da interface devem possuir atributos que facilitem sua identificação durante a automação de testes, garantindo estabilidade na localização dos componentes. |
| RN-70 | Atualização da interface | Sempre que ocorrer uma alteração de estado (login, logout, cadastro, compra, favoritos, carrinho, entre outros), a interface deve ser atualizada automaticamente, sem necessidade de recarregar a página. |

---

# 🔄 Regras Transversais (RN-71 a RN-74)

| ID | Regra | Critério de Aceitação |
|----|--------|-----------------------|
| RN-71 | Mensagens ao usuário | Todas as ações relevantes do sistema devem fornecer feedback visual por meio de mensagens (toast) indicando sucesso, erro ou informação. |
| RN-72 | Controle de acesso | Funcionalidades restritas devem ser acessíveis apenas por usuários autorizados, conforme seu perfil de acesso. |
| RN-73 | Navegação | Todos os links, botões e menus devem direcionar corretamente para as telas correspondentes da aplicação. |
| RN-74 | Consistência da interface | Componentes reutilizados em diferentes páginas devem manter o mesmo comportamento visual e funcional em toda a aplicação. |

---

# 📦 Controle de Estoque (RN-75 a RN-83)

| ID | Regra | Critério de Aceitação |
|----|--------|-----------------------|
| RN-75 | Cadastro de estoque | Todo produto deve possuir uma quantidade disponível em estoque. |
| RN-76 | Compra realizada | Ao finalizar uma compra, a quantidade adquirida deve ser descontada do estoque do produto. |
| RN-77 | Estoque insuficiente | O sistema não deve permitir a compra de quantidade superior à disponível em estoque. |
| RN-78 | Produto indisponível | Produtos sem estoque devem permanecer visíveis, porém identificados como indisponíveis para compra. |
| RN-79 | Atualização do estoque | Alterações realizadas pelo administrador devem ser refletidas imediatamente para os usuários da aplicação. |
| RN-80 | Remoção de produto | Ao remover um produto do catálogo, ele não deve mais aparecer em pesquisas, categorias ou vitrines da Home. |
| RN-81 | Integridade das vendas | A exclusão de um produto não deve comprometer o histórico de compras já realizadas. |
| RN-82 | Consistência dos dados | As informações de estoque devem permanecer consistentes após operações de cadastro, edição, compra ou exclusão de produtos. |
| RN-83 | Disponibilidade dos produtos | A disponibilidade para compra deve ser determinada pela quantidade de estoque existente no momento da operação. |

---

# 🔄 Rastreabilidade

As Regras de Negócio documentadas serviram como base para a definição dos requisitos funcionais da aplicação e para a elaboração dos Casos de Teste.

Atualmente, a suíte automatizada contempla as **RN-01 a RN-19**, correspondentes aos módulos de Login, Cadastro, Header e Home.

---

# 📝 Observações

- Este documento representa a especificação funcional da aplicação **SuperQAlandia**.
- As Regras de Negócio descrevem exclusivamente o comportamento esperado do sistema.
- Os Casos de Teste (CT) foram elaborados a partir destas regras.
- Os desvios identificados durante a execução dos testes estão documentados separadamente no arquivo **`bug-reports.md`**.
- A documentação foi organizada de forma a facilitar a rastreabilidade entre requisitos, testes manuais e automação.