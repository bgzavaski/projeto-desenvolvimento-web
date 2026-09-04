function formatarParaValorMonetario(valor) {
    
    const valorFormatado = valor.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    })

    return valorFormatado;
}  

const valorConta = 150; // modificável
const percentualGorjeta = 20; // modificável

const valorGorjeta = valorConta * (percentualGorjeta / 100);
const valorTotal = valorConta + valorGorjeta;

console.log("Valor da conta: " + formatarParaValorMonetario(valorConta)
    + "\nGorjeta de " + percentualGorjeta + "%: " + formatarParaValorMonetario(valorGorjeta)  
    + "\nTotal a pagar: " + formatarParaValorMonetario(valorTotal)
);