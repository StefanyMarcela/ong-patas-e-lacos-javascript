# ONG Patas & Laços 🐾

## Sobre o projeto

O projeto **ONG Patas & Laços** foi desenvolvido como atividade acadêmica da disciplina de **Desenvolvimento Front-End para Web**, como parte da **Experiência Prática III**.

O site apresenta uma ONG fictícia voltada à proteção e ao bem-estar dos animais, mostrando seus projetos e permitindo que pessoas interessadas realizem um cadastro para participar das ações.

Nesta etapa, a interface anteriormente estática foi transformada em uma aplicação dinâmica utilizando **JavaScript**, com recursos de manipulação do DOM, navegação SPA, validação de formulários e armazenamento de dados.

## Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript
- DOM
- History API
- localStorage
- ViaCEP API

## Páginas

- **Início:** apresentação da ONG, informações institucionais, indicadores e dados de contato.
- **Projetos:** apresentação das principais iniciativas da ONG por meio de cards.
- **Cadastro:** formulário para pessoas interessadas em participar das ações.

## Funcionalidades

- Navegação dinâmica entre as páginas.
- Estrutura de Single Page Application (SPA).
- Renderização das páginas por meio de templates JavaScript.
- Manipulação do DOM.
- Navegação utilizando History API.
- Interceptação dos links de navegação.
- Máscara para CPF, telefone e CEP.
- Preenchimento automático de endereço por meio do CEP.
- Consulta de endereço utilizando a API ViaCEP.
- Validação dos campos do formulário.
- Validação de e-mail.
- Prevenção do envio padrão do formulário.
- Mensagem de confirmação após o cadastro.
- Armazenamento dos cadastros utilizando localStorage.
- Possibilidade de armazenar múltiplos cadastros.
- Limpeza do formulário após o cadastro.
- Cards para apresentação dos projetos.
- Menu hambúrguer para dispositivos menores.
- Layout responsivo.
- Efeitos de interação com `hover` e `focus`.
- Suporte à redução de movimentos para acessibilidade.

## Estrutura do projeto

O projeto foi organizado seguindo o princípio de **separation of concerns**, mantendo os arquivos separados de acordo com suas responsabilidades.

```text
ONG3/
├── html/
│   ├── index.html
│   ├── projetos.html
│   └── cadastro.html
├── css/
│   └── style.css
├── imagens/
│   ├── adote.png
│   ├── campanha.png
│   ├── fundo.jpg
│   ├── ImgONG.jpg
│   └── resgate.jpg
├── js/
│   ├── app.js
│   └── script.js
└── README.md

## Créditos das imagens

As imagens utilizadas no projeto foram geradas com auxílio de ferramentas de inteligência artificial (IA). Elas foram utilizadas para fins acadêmicos e demonstrativos, compondo o conteúdo visual do site fictício da ONG Patas & Laços.

## Autoria

Projeto acadêmico desenvolvido por **Stefany Marcela**.