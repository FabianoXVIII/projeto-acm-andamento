const overlay = document.querySelector(".overlay");
//quando a página for totalmente carregada, o overlay será desativado
//e a página irá aparecer.

window.addEventListener("load", function() {
    overlay.style.display = "none"
})