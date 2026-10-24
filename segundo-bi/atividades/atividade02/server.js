const express = require('express');
const app = express();

app.use(express.json());

const PORTA = 3000;
const produtos = [];

// Listar todos os produtos
app.get('/api/produtos', (request, response) => {
    return response.status(200).json(produtos);
});

// Buscar produto por ID
app.get('/api/produtos/:id', (request, response) => {
    const idProduto = Number(request.params.id);
    const produtoEncontrado = produtos.find(produto => produto.id === idProduto);

    if (!produtoEncontrado) {
        return response.status(404).json({ erro: "Nenhum produto com o ID informado foi encontrado" });
    }

    return response.status(200).json(produtoEncontrado);
});

// Criar produto
app.post('/api/produtos', (request, response) => {
    const novoProduto = request.body;

    produtos.push(novoProduto);

    return response.status(201).json(novoProduto);
});

// Atualizar produto
app.put('/api/produtos/:id', (request, response) => {
    const idProduto = Number(request.params.id);
    const produtoEncontrado = produtos.find(produto => produto.id === idProduto);

    if (!produtoEncontrado) {
        return response.status(404).json({ erro: "Nenhum produto com o ID informado foi encontrado" });
    }

    const { nome, preco } = request.body;

    produtoEncontrado.nome = nome;
    produtoEncontrado.preco = preco;

    return response.status(200).json(produtoEncontrado);
});

// Excluir produto
app.delete('/api/produtos/:id', (request, response) => {
    const idProduto = Number(request.params.id);
    const indiceProduto = produtos.findIndex(produto => produto.id === idProduto);

    if (indiceProduto === -1) {
        return response.status(404).json({ erro: "Nenhum produto com o ID informado foi encontrado" });
    }

    produtos.splice(indiceProduto, 1);

    return response.status(200).json({ mensagem: "Produto excluído com sucesso" });
});

app.listen(PORTA, () => {
    console.log(`Servidor escutando na porta ${PORTA}`);
});