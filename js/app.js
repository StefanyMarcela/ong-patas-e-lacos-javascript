const app = document.getElementById("app");


/* Templates das páginas */

function templateInicio() {
    return `
        <section>
            <h2>Sobre a ONG</h2>

            <p>
                A ONG Patas & Laços é uma organização sem fins lucrativos
                dedicada à proteção e ao bem-estar dos animais. Por meio de
                ações solidárias, buscamos ajudar animais em situação de
                abandono e incentivar a adoção responsável, contando também
                com o apoio de voluntários e doadores.
            </p>

            <div class="alerta">
                <strong>Quer ajudar?</strong>
                Cadastre-se e faça parte das nossas ações.
            </div>

            <img
                src="../imagens/ImgONG.jpg"
                alt="Voluntários realizando uma ação de proteção aos animais"
            >

            <div class="indicadores">

                <div class="indicador">
                    <strong>120+</strong>
                    <span>Animais resgatados</span>
                </div>

                <div class="indicador">
                    <strong>85+</strong>
                    <span>Adoções realizadas</span>
                </div>

                <div class="indicador">
                    <strong>40+</strong>
                    <span>Voluntários</span>
                </div>

            </div>
        </section>

        <section class="contato">
            <p>Telefone: (11) 99999-9999</p>
            <p>E-mail: contato@pataselacos.com</p>
            <p>São Paulo - SP</p>
        </section>
    `;
}


function templateProjetos() {
    return `
        <section class="projetos">

            <article>

                <img
                    src="../imagens/resgate.jpg"
                    alt="Resgate de animais"
                >

                <span class="badge">
                    RESGATE DE ANIMAIS
                </span>

                <p>
                    Atuamos no resgate e cuidado de animais
                    em situação de abandono.
                </p>

            </article>


            <article>

                <img
                    src="../imagens/adote.png"
                    alt="Adoção responsável"
                >

                <span class="badge">
                    ADOÇÃO RESPONSÁVEL
                </span>

                <p>
                    Incentivamos a adoção responsável
                    e a formação de novos lares.
                </p>

            </article>


            <article>

                <img
                    src="../imagens/campanha.png"
                    alt="Campanhas de doação"
                >

                <span class="badge">
                    CAMPANHAS DE DOAÇÃO
                </span>

                <p>
                    Realizamos campanhas para arrecadar
                    recursos e ajudar nossos animais.
                </p>

            </article>

        </section>
    `;
}


function templateCadastro() {
    return `
        <section class="cadastro">

            <h2>Cadastre-se</h2>

            <p>
                Faça seu cadastro e participe das ações
                da ONG Patas & Laços.
            </p>


            <form id="formulario-cadastro">

                <fieldset>

                    <legend>Dados Pessoais</legend>

                    <label for="nome">
                        Nome completo:
                    </label>

                    <input
                        type="text"
                        id="nome"
                        name="nome"
                        required
                    >


                    <label for="cpf">
                        CPF:
                    </label>

                    <input
                        type="text"
                        id="cpf"
                        name="cpf"
                        placeholder="000.000.000-00"
                        maxlength="14"
                        required
                    >


                    <label for="email">
                        E-mail:
                    </label>

                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="seuemail@email.com"
                        required
                    >


                    <label for="telefone">
                        Telefone:
                    </label>

                    <input
                        type="tel"
                        id="telefone"
                        name="telefone"
                        placeholder="(00) 00000-0000"
                        maxlength="15"
                        required
                    >

                </fieldset>


                <fieldset>

                    <legend>Endereço</legend>

                    <label for="cep">
                        CEP:
                    </label>

                    <input
                        type="text"
                        id="cep"
                        name="cep"
                        placeholder="00000-000"
                        maxlength="9"
                        required
                    >


                    <label for="endereco">
                        Endereço:
                    </label>

                    <input
                        type="text"
                        id="endereco"
                        name="endereco"
                        required
                    >


                    <label for="numero">
                        Número:
                    </label>

                    <input
                        type="text"
                        id="numero"
                        name="numero"
                        required
                    >


                    <label for="cidade">
                        Cidade:
                    </label>

                    <input
                        type="text"
                        id="cidade"
                        name="cidade"
                        required
                    >


                    <label for="estado">
                        Estado:
                    </label>

                    <input
                        type="text"
                        id="estado"
                        name="estado"
                        required
                    >

                </fieldset>


                <fieldset>

                    <legend>Interesse</legend>

                    <label for="interesse">
                        Área de interesse:
                    </label>

                    <select
                        id="interesse"
                        name="interesse"
                        required
                    >

                        <option value="">
                            Selecione uma opção
                        </option>

                        <option value="voluntariado">
                            Voluntariado
                        </option>

                        <option value="doacao">
                            Doação
                        </option>

                        <option value="adocao">
                            Adoção
                        </option>

                    </select>


                    <label for="mensagem">
                        Mensagem:
                    </label>

                    <textarea
                        id="mensagem"
                        name="mensagem"
                        rows="5"
                    ></textarea>

                </fieldset>


                <button type="submit">
                    Cadastrar
                </button>


                <div
                    id="mensagem-sucesso"
                    class="toast"
                    role="status"
                    style="display: none;"
                ></div>

            </form>

        </section>
    `;
}


/* Rotas */

const rotas = {
    inicio: templateInicio,
    projetos: templateProjetos,
    cadastro: templateCadastro
};


/* Renderização */

function renderizar(pagina) {

    if (!rotas[pagina]) {
        pagina = "inicio";
    }

    app.innerHTML = rotas[pagina]();

    configurarFormulario();
}


/* Navegação SPA + History API */

function navegar(pagina, adicionarHistorico = true) {

    renderizar(pagina);

    if (adicionarHistorico) {

        history.pushState(
            { pagina: pagina },
            "",
            pagina === "inicio"
                ? "index.html"
                : pagina + ".html"
        );
    }
}


/* Interceptação dos links */

document.addEventListener("click", function (event) {

    const link = event.target.closest(".menu-links a");

    if (!link) {
        return;
    }

    event.preventDefault();

    const href = link.getAttribute("href");


    if (href === "index.html") {
        navegar("inicio");
    }


    if (href === "projetos.html") {
        navegar("projetos");
    }


    if (href === "cadastro.html") {
        navegar("cadastro");
    }

});


/* Botões voltar e avançar do navegador */

window.addEventListener("popstate", function (event) {

    if (event.state && event.state.pagina) {

        renderizar(event.state.pagina);

    } else {

        renderizar("inicio");

    }

});


/* Formulário */

function configurarFormulario() {

    const formulario =
        document.getElementById("formulario-cadastro");


    if (!formulario) {
        return;
    }


    const cpf =
        document.getElementById("cpf");

    const telefone =
        document.getElementById("telefone");

    const cep =
        document.getElementById("cep");

    const mensagem =
        document.getElementById("mensagem-sucesso");


    configurarMascaraCPF(cpf);

    configurarMascaraTelefone(telefone);

    configurarMascaraCEP(cep);

    configurarBuscaCEP(cep);

    configurarEnvioFormulario(
        formulario,
        cpf,
        telefone,
        cep,
        mensagem
    );
}


/* Máscara CPF */

function configurarMascaraCPF(campo) {

    campo.addEventListener("input", function () {

        let valor =
            this.value.replace(/\D/g, "");

        valor =
            valor.substring(0, 11);

        valor =
            valor.replace(
                /(\d{3})(\d)/,
                "$1.$2"
            );

        valor =
            valor.replace(
                /(\d{3})(\d)/,
                "$1.$2"
            );

        valor =
            valor.replace(
                /(\d{3})(\d{1,2})$/,
                "$1-$2"
            );

        this.value = valor;

    });
}


/* Máscara telefone */

function configurarMascaraTelefone(campo) {

    campo.addEventListener("input", function () {

        let valor =
            this.value.replace(/\D/g, "");

        valor =
            valor.substring(0, 11);

        valor =
            valor.replace(
                /^(\d{2})(\d)/,
                "($1) $2"
            );

        valor =
            valor.replace(
                /(\d{5})(\d)/,
                "$1-$2"
            );

        this.value = valor;

    });
}


/* Máscara CEP */

function configurarMascaraCEP(campo) {

    campo.addEventListener("input", function () {

        let valor =
            this.value.replace(/\D/g, "");

        valor =
            valor.substring(0, 8);

        valor =
            valor.replace(
                /(\d{5})(\d)/,
                "$1-$2"
            );

        this.value = valor;

    });
}


/* Busca endereço pelo CEP */

function configurarBuscaCEP(campo) {

    campo.addEventListener("blur", function () {

        const cep =
            this.value.replace(/\D/g, "");


        if (cep.length !== 8) {
            return;
        }


        fetch(`https://viacep.com.br/ws/${cep}/json/`)
            .then(response => response.json())
            .then(dados => {

                if (dados.erro) {
                    return;
                }


                document.getElementById("endereco").value =
                    dados.logradouro || "";


                document.getElementById("cidade").value =
                    dados.localidade || "";


                document.getElementById("estado").value =
                    dados.uf || "";

            })
            .catch(() => {

                console.log(
                    "Não foi possível consultar o CEP."
                );

            });

    });
}


/* Envio do formulário */

function configurarEnvioFormulario(
    formulario,
    cpf,
    telefone,
    cep,
    mensagem
) {

    formulario.addEventListener("submit", function (event) {

        console.log("1 - SUBMIT FOI EXECUTADO");

        event.preventDefault();


        /* Limpa mensagem anterior */

        limparMensagem(mensagem);


        /* Validação dos campos obrigatórios */

        if (!formulario.checkValidity()) {

            console.log("2 - FORMULÁRIO INVÁLIDO");

            formulario.reportValidity();

            return;
        }


        console.log("3 - VALIDAÇÃO DOS CAMPOS OK");


        /* Validação do CPF */

        if (cpf.value.length !== 14) {

            mostrarMensagem(
                mensagem,
                "Digite um CPF válido."
            );

            cpf.focus();

            return;
        }


        /* Validação do telefone */

        if (telefone.value.length !== 15) {

            mostrarMensagem(
                mensagem,
                "Digite um telefone válido."
            );

            telefone.focus();

            return;
        }


        /* Validação do CEP */

        if (cep.value.length !== 9) {

            mostrarMensagem(
                mensagem,
                "Digite um CEP válido."
            );

            cep.focus();

            return;
        }


        /* Coleta dos dados */

        const dados = {

            nome:
                document.getElementById("nome").value,

            cpf:
                cpf.value,

            email:
                document.getElementById("email").value,

            telefone:
                telefone.value,

            cep:
                cep.value,

            endereco:
                document.getElementById("endereco").value,

            numero:
                document.getElementById("numero").value,

            cidade:
                document.getElementById("cidade").value,

            estado:
                document.getElementById("estado").value,

            interesse:
                document.getElementById("interesse").value,

            mensagem:
                document.getElementById("mensagem").value

        };


        console.log("4 - VOU SALVAR:", dados);


        /* LocalStorage */

        salvarCadastro(dados);


        /* Feedback de sucesso */

        mostrarMensagem(
            mensagem,
            "Cadastro concluído! Nossa equipe entrará em contato em breve."
        );


        /* Limpa o formulário */

        formulario.reset();

    });
}


/* Armazenamento no LocalStorage */

function salvarCadastro(dados) {

    let cadastros =
        JSON.parse(
            localStorage.getItem("cadastroONG") || "[]"
        );


    /* Converte cadastro antigo para array */

    if (!Array.isArray(cadastros)) {

        cadastros = [cadastros];

    }


    /* Adiciona novo cadastro */

    cadastros.push(dados);


    /* Salva os cadastros */

    localStorage.setItem(
        "cadastroONG",
        JSON.stringify(cadastros)
    );


    console.log("5 - CADASTRO SALVO:", dados);

    console.log(
        "6 - TODOS OS CADASTROS:",
        cadastros
    );

}


/* Mostra mensagem */

function mostrarMensagem(elemento, texto) {

    elemento.textContent = texto;

    elemento.style.display = "block";

}


/* Limpa mensagem */

function limparMensagem(elemento) {

    elemento.textContent = "";

    elemento.style.display = "none";

}


/* Inicia a SPA */

if (app) {
    renderizar("inicio");
} else {
    // Se abriu o cadastro.html direto, sem #app
    configurarFormulario();
}