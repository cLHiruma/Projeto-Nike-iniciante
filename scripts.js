let body = document.querySelector("body")
let tenis = document.querySelector(".nike1")

// document = html
// querySelector = pegador / seletor

function mudarVisual(cor, imagem){
    tenis.classList.add("troca-efeito")


    body.style.background = cor
    tenis.src = imagem

    setTimeout(() => {
        tenis.src = imagem
        tenis.classList.remove("troca-efeito")
    }, 500);

    tenis.classList.remove("troca-efeito")
}