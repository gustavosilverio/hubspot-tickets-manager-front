# Hubspot Tickets Manager - Frontend

Frontend do desafio tecnico "Login + Meus Tickets", desenvolvido com Next.js.

## Repositorio

- GitHub: [https://github.com/gustavosilverio/hubspot-tickets-manager-front](https://github.com/gustavosilverio/hubspot-tickets-manager-front)

## Pre-requisitos

Antes de iniciar, garanta que voce tenha:

- Git instalado
- Node.js instalado (recomendado: versao LTS atual)
- pnpm instalado (passo abaixo, se necessario)
- API backend do desafio disponivel localmente

## 1) Clonar o projeto

```bash
git clone https://github.com/gustavosilverio/hubspot-tickets-manager-front.git
cd hubspot-tickets-manager-front
```

## 2) Instalar o pnpm (se necessario)

Se nao tiver pnpm instalado:

```bash
npm install -g pnpm
```

Para validar:

```bash
pnpm -v
```

## 3) Criar e configurar o arquivo .env.development

Na raiz do projeto, crie o arquivo `.env.development` com o conteudo abaixo:

```env
NEXT_PUBLIC_BASE_URL=http://localhost:3031
```

Observacao:

- `NEXT_PUBLIC_BASE_URL` deve apontar para a URL da API backend.
- Se sua API estiver em outra porta/host, ajuste esse valor.

## 4) Instalar dependencias do frontend

```bash
pnpm install
```

## 5) Iniciar a API backend (primeiro)

Antes de iniciar o frontend, suba a API backend do desafio e confirme que ela esta respondendo.

Importante:

- A aplicacao frontend espera que o backend esteja disponivel na URL definida em `NEXT_PUBLIC_BASE_URL`.
- Se o backend nao estiver rodando, o login e a listagem de tickets nao vao funcionar.

## 6) Iniciar o frontend

Com o backend ja rodando:

```bash
pnpm run dev
```

Abra no navegador:

- [http://localhost:3000](http://localhost:3000)

## Fluxo esperado no teste

Obs: Já criei um contato com tickets no Hubspot (email: tickets.manager@tropicalhub.co)
***Aviso importante:*** Necessário criar o usuário no banco pela API antes de tentar fazer o login no frontend

1. Subir backend
2. Subir frontend
3. Acessar tela de login
4. Fazer login com usuario valido no backend
5. Verificar exibicao da tela "Meus Tickets"
