const botaoMenu = document.querySelector(".menu-hamburguer");
const menuLinks = document.querySelector(".menu-links");

if (botaoMenu && menuLinks) {

    botaoMenu.addEventListener("click", function () {
        menuLinks.classList.toggle("ativo");
    });


/* Fecha o menu quando clica em um link no celular */
    menuLinks.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", function () {
            menuLinks.classList.remove("ativo");
        });

    });

}