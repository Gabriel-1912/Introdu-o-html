function mostrarMensagem() {

    let mensagem = document.getElementById("mensagem");

    mensagem.innerHTML =
        "Obrigado por visitar meu portfólio! Você será redirecionado para a página Sobre Mim.";

    mensagem.style.color = "#64FFDA";
    mensagem.style.fontWeight = "bold";

    setTimeout(function () {
        window.location.href = "sobre.html";
    }, 2000);

}