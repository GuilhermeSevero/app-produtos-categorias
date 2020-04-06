# APP - Sistema Manutenção de Produtos e Categorias
> Deverá ser desenvolvido um sistema que permita ao usuário manter produtos e suas categorias. Dentre os requisitos de negócio para essa tarefa estão:

1. CRUD de categorias de produto: Cadastrar categoria, alterar categoria, listar categorias e excluir categoria.

2. CRUD de produtos: Cadastrar produto, alterar produto, listar produto e excluir produto.

---

## Environments

- VUE_APP_API_URL
  - URL base para a API de Manutenção de Produtos e Categorias


---
## Execução - DEV:
```sh
$ git clone https://github.com/GuilhermeSevero/app-produtos-categorias.git
$ cd app-produtos-categorias

# Instalar dependencias do projeto
$ npm install

# Executar serviço de desenvolvimento
$ npm run serve
```

---
## Build - Produção:
```sh
$ git clone https://github.com/GuilhermeSevero/app-produtos-categorias.git
$ cd app-produtos-categorias

# Instalar dependencias do projeto
$ npm install

# Executar serviço de desenvolvimento
$ npm run build

# Arquivos transpilados ficarão disponíveis na pasta ./dist
```

---

# Detalhes do APP

## Layout
  - **Header**:
    - Botão para Abrir ou fechar o menu lateral esquerdo
    - Título da página atual
    - Logo do Projeto, no canto direito
  - **Menu Esquerdo**:
    - *Header* - Base para a implementação dos dados do usuário Logado (Login não foi desenvolvido, visto que não fazia parte do escopo do projeto)
      - Avatar para foto do usuário
      - Label para descrição do Nome do usuário
      - SubLabel para outras informações do usuário
    - *Lista de Rotas*
      - Link para página Home - `/`
      - Link para página Categorias - `/categorias`
      - Link para página Produtos - `/produtos`

---

## Páginas:

- **Home - `/`**
  - Não implementada inteiramente, visto que não fazia parte do escopo inicial do projeto.
  - Poderá ser desenvolvida futuramente.

- **Categorias - `/categorias`**
  - Tráz a listagem das Categorias já cadastradas no sistema
  - Dispões de Botões de Ações:
    - *Adicionar* - Redireciona para Página de Inclusão
    - *Editar* - Redireciona para Página de Manutenção
    - *Excluir* - Solicita Confirmação e Executa a exclusão, caso usuário confirme.
    - *Atualizar* - Atualiza listagem, realiza nova busca na API

- **Manutenção de Categorias - `/categorias/:id`**
  - Aguarda um ID que é passado como parâmetro na URL da página
  - Mostra Campos para a Inclusão e/ou Edição da categoria
  - Caso ID seja passado:
    - Campos serão preenchidos com os valores já cadastrados
    - Será permitido ao usuário alterar os dados
  - Caso ID **NÃO** seja passado:
    - Campos ficarão em branco
    - Será permitido ao usuário incluir os dados

- **Produtos - `/produtos`**
  - Tráz a listagem das Produtos já cadastradas no sistema
  - Dispões de Botões de Ações:
    - *Adicionar* - Redireciona para Página de Inclusão
    - *Editar* - Redireciona para Página de Manutenção
    - *Excluir* - Solicita Confirmação e Executa a exclusão, caso usuário confirme.
    - *Atualizar* - Atualiza listagem, realiza nova busca na API

- **Manutenção de Produtos - `/produtos/:id`**
  - Aguarda um ID que é passado como parâmetro na URL da página
  - Mostra Campos para a Inclusão e/ou Edição da categoria
  - Caso ID seja passado:
    - Campos serão preenchidos com os valores já cadastrados
    - Será permitido ao usuário alterar os dados
  - Caso ID **NÃO** seja passado:
    - Campos ficarão em branco
    - Será permitido ao usuário incluir os dados
