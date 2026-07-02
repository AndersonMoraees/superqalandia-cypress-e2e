# 📚 Documentação do Projeto

Bem-vindo à documentação da suíte de testes automatizados da **SuperQAlandia**.

Esta pasta reúne todos os artefatos produzidos durante o processo de análise, planejamento, execução e automação dos testes, demonstrando um fluxo de trabalho baseado em boas práticas de **Quality Assurance (QA)**.

---

# 🎯 Objetivo

Centralizar toda a documentação produzida durante o desenvolvimento da suíte de testes, permitindo a rastreabilidade entre:

- Regras de Negócio
- Casos de Teste
- Automação
- Bugs encontrados

---

# 🗂️ Estrutura da documentação

| Documento | Descrição |
|-----------|-----------|
| 📋 **regras-de-negocio.md** | Regras funcionais documentadas para a aplicação. |
| 📝 **casos-de-teste.md** | Casos de teste elaborados a partir das regras de negócio. |
| 🐞 **bug-reports.md** | Registro dos defeitos encontrados durante a execução dos testes. |

---

# 🔄 Rastreabilidade

Todo o projeto foi desenvolvido seguindo um fluxo de rastreabilidade entre requisitos, testes e automação.

```text
Regras de Negócio (RN)
           │
           ▼
Casos de Teste (CT)
           │
           ▼
Testes Automatizados (Cypress)
           │
           ▼
Bug Reports
```

Cada artefato possui referência aos demais, permitindo acompanhar o ciclo completo de validação da aplicação.

---

# 📈 Cobertura

| Artefato | Quantidade |
|----------|-----------:|
| Regras de Negócio documentadas | 19 |
| Casos de Teste | 41 |
| Bugs documentados | 6 |
| Testes automatizados | 41 |

---

# 🛠️ Ferramentas utilizadas

- Cypress
- JavaScript (ES6+)
- Node.js
- Git
- GitHub
- Markdown

---

# 📌 Organização do projeto

```text
docs/
├── README.md
├── regras-de-negocio.md
├── casos-de-teste.md
├── bug-reports.md
│
└── assets/
    └── bugs/
        ├── bug001.png
        ├── bug002.png
        ├── bug003.png
        ├── bug004.png
        ├── bug005.png
        └── bug006.png
```

---

# 💡 Metodologia aplicada

O desenvolvimento desta documentação seguiu as etapas comuns em projetos de QA:

1. Levantamento das Regras de Negócio.
2. Elaboração dos Casos de Teste.
3. Execução dos testes.
4. Registro dos defeitos encontrados.
5. Automação dos cenários utilizando Cypress.
6. Documentação e organização dos artefatos.

Essa abordagem garante maior rastreabilidade, facilita a manutenção da suíte de testes e demonstra uma visão estruturada do processo de garantia da qualidade.

---

# 👨‍💻 Autor

Desenvolvido por **Anderson Moraes** como parte do portfólio de estudos em **Quality Assurance (QA)**, com foco em documentação, testes manuais e automação de testes End-to-End utilizando Cypress.