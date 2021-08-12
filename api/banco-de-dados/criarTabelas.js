const modelos = [
    require('../routers/fornecedores/ModeloTabelaFornecedor'),
    require('../routers/fornecedores/produtos/modeloTabelaProduto')
]

async function criarTabelas () {
    for ( let contador = 0; contador < modelos.length; contador ++){
        const modelo = modelos[contador]
        await modelo.sync()
    } 
}

criarTabelas()