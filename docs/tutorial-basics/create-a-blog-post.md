---
sidebar_position: 3
---

# Requisitos funcionais e não funcionais da aplicação 📑

### Requisitos Funcionais (RF)

- **RF01: Persistência de Dados**
    - Detalhar que dados serão persistidos (progresso do usuário, avatares comprados, histórico de sessões, etc.).
- **RF02: Autenticação**
    - Especificar os métodos de autenticação permitidos (Gmail, Facebook, etc.).
- **RF04 e RF05: Recuperação e Atualização de Senha**
    - Incluir um tempo de expiração para o token de recuperação de senha.
- **RF09 a RF12: Loja e Avatares**
    - Detalhar como os pontos são acumulados e utilizados para compras.
- **RF13 a RF19: Sessões e Jogos**
    - Especificar o método de avaliação e feedback das questões.
    - Definir o que constitui uma "sessão" e um "jogo".

### Requisitos Não Funcionais (RNF)

- **RNF01: Design Lúdico e Colorido**
    - Incluir diretrizes específicas de design e exemplos de paletas de cores amigáveis.
- **RNF02: Compatibilidade Multiplataforma**
    - Definir requisitos mínimos de hardware e sistema operacional.
- **RNF03: Performance Responsiva**
    - Especificar tempos de resposta esperados para ações comuns no aplicativo.
- **RNF04: Segurança**
    - Detalhar protocolos e práticas de segurança, como criptografia de dados e proteção contra ataques.
- **RNF05: Manutenção**
    - Incluir práticas de versionamento e documentação de código.
- **RNF06: Disponibilidade**
    - Definir estratégias de redundância e recuperação de desastres.
- **RNF07: Privacidade**
    - Explicar como os dados serão coletados, armazenados e utilizados de acordo com regulamentações de privacidade.

### Regras de Negócio (RN)

- **RN04: Pontuação**
    - Definir claramente o valor de X pontos por questão correta.
- **RN06: Pontuação Bônus**
    - Especificar o valor do bônus e os critérios para obtenção.
- **RN07: Progressão de Questões**
    - Definir como as questões são selecionadas e apresentadas ao usuário.
- **RN09: Pontuação Mínima**
    - Determinar o valor mínimo de pontos necessário para avançar e como isso é calculado.
- **RN10: Uso de Pontos na Loja**
    - Detalhar o processo de resgate e compra de itens.

### Adicionais

- **Controle de Versão e Deploy**
    - Inclua requisitos para controle de versão e procedimentos de deploy.
- **Testes**
    - Defina critérios para testes de unidade, integração e aceitação.
