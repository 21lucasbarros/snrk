# 👟 SNRK

Bem-vindo ao repositório do **SNRK**!

Projeto desenvolvido como teste prático para uma empresa, com foco em uma página de produto para E-commerce usando **React** + **Tailwind CSS**.

A ideia é criar uma interface responsiva, funcional e dinâmica que simule uma experiência real de compra, com funcionalidades para usabilidade e persistência dos dados do usuário.

Você também pode acessar o projeto online: [https://snrk.vercel.app/](https://snrk.vercel.app/)

---

## Índice

- [Sobre o Projeto](#sobre-o-projeto)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Como Rodar o Projeto](#como-rodar-o-projeto)
- [Contribuições](#contribuições)
- [Licença](#licença)
- [Contato](#contato)

---

## Sobre o Projeto

**SNRK** é uma página de produto para E-commerce criada para atender a requisitos de um teste técnico.

Funcionalidades principais:

- Imagem principal do produto (aprox. 35% da tela) com miniaturas clicáveis que atualizam a imagem.
- Exibição clara do título e preço do produto.
- Seletores dinâmicos de variantes (tamanho e cor) com base em arrays/objetos.
- Campo para validação e formatação de CEP com consulta à API pública [ViaCEP](https://viacep.com.br/) e exibição do endereço completo.
- Persistência local dos dados do usuário (variante selecionada, CEP e imagem) por 15 minutos, mesmo após atualização da página.

Inspirado em plataformas reais como Mercado Livre, Shopee e Amazon, com foco em usabilidade, criatividade e escalabilidade para futuras melhorias.

---

## Estrutura do Projeto

```plaintext
21lucasbarros-snrk/
├── public/
│   └── img/
│       └── sneaker/              # Imagens dos produtos
├── src/
│   ├── App.tsx                  # Componente raiz
│   ├── index.css                # Estilos globais (Tailwind)
│   ├── main.tsx                 # Entrada da aplicação
│   ├── vite-env.d.ts            # Tipagens do Vite
│   ├── components/              # Componentes React reutilizáveis
│   │   ├── DeliveryCheck.tsx
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── ImageGallery.tsx
│   │   ├── MainContent.tsx
│   │   ├── ProductInfo.tsx
│   │   └── VariantSelector.tsx
│   ├── data/
│   │   └── sneaker.ts            # Dados do produto (ex: variantes)
│   ├── hooks/
│   │   └── useLocalStorage.tsx   # Hook para persistência local
│   ├── types/
│   │   └── index.ts              # Tipagens TS
│   └── utils/
│       └── format.ts             # Funções utilitárias (ex: formatação)
├── .gitignore
├── package.json
├── tsconfig.json
└── README.md
```

---

## Tecnologias Utilizadas

- React (v19.1.0)
- Tailwind CSS (v4.1.7)
- TypeScript
- Zod (validação de dados)
- Lucide React (ícones)
- Vite (build e bundling com plugin @tailwindcss/vite)

---

## Como Rodar o Projeto

Clone o repositório:

```bash
git clone https://github.com/21lucasbarros/snrk.git
```

Entre na pasta do projeto:

```bash
cd snrk
```

Instale as dependências:

```bash
npm install
# ou
yarn install
```

Inicie o servidor de desenvolvimento:

```bash
npm run dev
# ou
yarn dev
```

Abra no navegador:

```arduino
http://localhost:3000
```

---

## Contribuições

Contribuições são muito bem-vindas!

- Abra issues para bugs ou sugestões.
- Envie pull requests para melhorias ou novas funcionalidades.
- Mantenha o padrão e boas práticas do código.

---

## Licença

Este projeto está sob a licença MIT.

---

## Contato

Dúvidas ou mais informações? Me contate via GitHub ou e-mail.

Valeu por conferir o SNRK!

---

🎯 Feito por Lucas Barros Simon
