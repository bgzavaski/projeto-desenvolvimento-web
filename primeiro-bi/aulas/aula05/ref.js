const aluno1 = {
    nome: "Bernardo",
    idade: 22,
    curso: "Eng Soft",
    formado: false,
    posGrad: undefined
}
const aluno2 = {
    nome: "Bernardo",
    idade: 22,
    curso: "Eng Soft",
    formado: false,
    posGrad: undefined
}

console.log("Tipos de referência")
console.log("Objetos")
console.log(aluno1)
console.log(aluno2)

console.log("-----------------------")

console.log("Lista:")
const frutas = ["banana", "maca"]
console.log(frutas)

function printarNome() {
    console.log("nome na funcao")

}
function somar(n1, n2) {
    return n1 + n2;
}
const resultado = somar(10, 20);

printarNome()
console.log("soma funcao: " + resultado)