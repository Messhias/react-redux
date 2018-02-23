const produto = {
    nome: 'Caneta Bic Preta',
    preco: 1.90,
    desconto: 0.05
}

function clone(objeto) {
    return {...objeto}
}

const novoProduto = clone(produto);
novoProduto.nome = 'Bic azul';

console.log(produto, novoProduto);
