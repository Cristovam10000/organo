# Organo

![Banner do projeto](public/imagens/banner.png)

Organo é uma aplicação web desenvolvida com **React** e **Vite** que permite cadastrar colaboradores e organizá-los em times. O projeto foi inspirado no curso da Alura e demonstra na prática o uso de componentes, estados e propriedades dentro do ecossistema React.

## Funcionalidades

- Cadastro de colaboradores com nome, cargo, imagem e time correspondente.
- Exibição dinâmica de cards de colaboradores divididos por time.
- Seis times pré-definidos com cores personalizadas:
  - Front-End
  - Data Science
  - DevOps
  - UX e Design
  - Mobile
  - Inovação e Gestão
- Rodapé com links para redes sociais e logo da aplicação.

## Estrutura do Projeto

```
organo/
├── public/           # Arquivos públicos (imagens, favicon, etc.)
├── src/
│   ├── componentes/  # Componentes reutilizáveis (Banner, Formulário, Time, etc.)
│   ├── assets/       # Recursos adicionais
│   ├── App.jsx       # Componente principal
│   └── main.jsx      # Ponto de entrada da aplicação
├── package.json      # Dependências e scripts
└── vite.config.js    # Configuração do Vite
```

## Como executar

1. Instale as dependências do projeto:

   ```bash
   npm install
   ```

2. Inicie o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

   A aplicação ficará disponível em `http://localhost:5173` (ou na porta indicada no terminal).

3. Para gerar uma versão de produção, execute:

   ```bash
   npm run build
   ```

   Em seguida, você pode testar o build com:

   ```bash
   npm run preview
   ```

## Tecnologias Utilizadas

- [React](https://react.dev)
- [Vite](https://vitejs.dev)
- [ESLint](https://eslint.org) para padronização do código

## Contribuição

Sinta-se à vontade para abrir _issues_ e _pull requests_ com melhorias, correções ou novas funcionalidades.

---

Feito com ❤️ por **Cristovam**.
