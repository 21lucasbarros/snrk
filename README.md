# SNRK

Bem-vindo ao repositório do **SNRK**!

Este projeto foi desenvolvido como um teste prático para uma empresa, focado na criação de uma página de produto de E-commerce utilizando **React** e **Tailwind CSS**.

A ideia principal é construir uma interface funcional, responsiva e dinâmica que simule a experiência real de compra, com funcionalidades que garantem usabilidade e persistência dos dados.

---

## Índice

- [Sobre o Projeto](#sobre-o-projeto)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Como Rodar o Projeto](#como-rodar-o-projeto)
- [Contribuições](#contribuições)
- [Licença](#licença)

---

## Sobre o Projeto

O **SNRK** é uma página de produto para E-commerce, construída para atender a requisitos práticos de um teste técnico.

Principais funcionalidades:

- Exibição de uma imagem principal do produto (cerca de 35% da tela) com miniaturas clicáveis que alteram a imagem principal dinamicamente.
- Título e preço do produto destacados.
- Seletores dinâmicos para variantes do produto (tamanho e cor) baseados em arrays/objetos.
- Campo de verificação e formatação de CEP, que consulta a API pública [ViaCEP](https://viacep.com.br/) para exibir o endereço completo quando válido.
- Persistência das ações do usuário (seleção de variantes, CEP, imagem selecionada) por 15 minutos, mesmo após atualização da página.

Inspirado em referências reais como Mercado Livre, Shopee e Amazon, priorizando usabilidade, criatividade e flexibilidade para futuras alterações.

---

## Estrutura do Projeto

```plaintext
snrk/
├── public/                # Arquivos estáticos (imagens, favicon, etc.)
├── src/                   # Código-fonte principal
│   ├── components/        # Componentes reutilizáveis
│   ├── pages/             # Páginas da aplicação
│   ├── styles/            # Arquivos de estilo (Tailwind CSS)
│   ├── lib/               # Funções utilitárias (ex: integração com ViaCEP)
│   └── ...
├── .gitignore
├── package.json
├── tsconfig.json
├── README.md
└── ...
```

---

## Tecnologias Utilizadas

- **[React](https://react.dev/)** (v19.1.0)
- **[Tailwind CSS](https://tailwindcss.com/)** (v4.1.7)
- **[TypeScript](https://www.typescriptlang.org/)**
- **[Zod](https://zod.dev/)** (validação de dados)
- **[Lucide React](https://lucide.dev/)** (ícones)
- Ferramentas de build e bundling: **Vite** (plugin @tailwindcss/vite)

---

## Como Rodar o Projeto

1. Clone o repositório:

   ```bash
   git clone https://github.com/21lucasbarros/snrk.git
   ```

2. Acesse o diretório do projeto:

   ```bash
   cd snrk
   ```

3. Instale as dependências:

   ```bash
   npm install
   # ou
   yarn install
   ```

4. Inicie o servidor de desenvolvimento:

   ```bash
   npm run dev
   # ou
   yarn dev
   ```

5. Abra o navegador e acesse:
   ```
   http://localhost:3000
   ```
   (A porta pode variar conforme configuração do Vite)

---

## Contribuições

Contribuições são super bem-vindas!

- Sinta-se à vontade para abrir issues relatando bugs ou sugerindo melhorias.
- Pull requests são sempre apreciados para corrigir problemas ou adicionar funcionalidades.
- Mantenha o padrão de código e as boas práticas já existentes.

---

## Licença

Este projeto está licenciado sob a licença [MIT](LICENSE).

---

## Contato

Para dúvidas ou mais informações, entre em contato comigo via GitHub ou e-mail.

---

**Obrigado por conferir o projeto SNRK!**
