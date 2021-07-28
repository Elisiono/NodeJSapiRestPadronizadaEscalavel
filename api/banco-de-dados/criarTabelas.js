const ModeloTabela = require("../routers/fornecedores/ModeloTabelaFornecedor")

ModeloTabela
    .sync()
    .then(()=> console.log('Tabela criada com sucesso'))
    .catch(console.log)