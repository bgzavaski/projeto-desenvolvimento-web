const botao = document.getElementById("carregarProdutos");
const listaProdutos = document.getElementById("listaProdutos");
const mensagem = document.getElementById("mensagem");

botao.addEventListener("click", carregarProdutos);

async function carregarProdutos() {

    mensagem.textContent = "Carregando produtos...";
    listaProdutos.innerHTML = "";

    try {

        const response = await fetch(
            "https://dummyjson.com/products?limit=12"
        );

        if (!response.ok) {
            throw new Error("Erro ao buscar os produtos");
        }

        const dados = await response.json();

        mensagem.textContent = "";

        dados.products.forEach(function(produto) {

            const card = document.createElement("div");
            card.classList.add("card");

            card.innerHTML = `
                <img src="${produto.thumbnail}" alt="${produto.title}">

                <h2>${produto.title}</h2>

                <p>
                    <strong>Preço:</strong>
                    $ ${produto.price}
                </p>

                <p>
                    <strong>Categoria:</strong>
                    ${produto.category}
                </p>
            `;
            listaProdutos.appendChild(card);
        });

    } catch (erro) {

        mensagem.textContent = "Não foi possível carregar os produtos.";
        console.error(erro);
    }
}