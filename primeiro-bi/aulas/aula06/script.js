
function criarParagrafo() {
    const primeiraDiv = document.querySelector(".content");

    const paragrafo = document.createElement("p");

    paragrafo.textContent = "texto criado pela funcao";

    primeiraDiv.appendChild(paragrafo);

}

function cadastrarProduto() {
    event.preventDefault();
    console.log(event);
}