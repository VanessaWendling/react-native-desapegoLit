import Realm from 'realm'
// comando que equivale ao create table

class ProdSchema extends Realm.Object { }
ProdSchema.schema = {
    name: 'Prod',
    properties: {
        produto_id: { type: 'int', default: 0 },
        produto_nome: 'string',
        produto_descricao: 'string',
        produto_preco: 'double'
    },
    primaryKey: 'produto_id'
};

let realm_produto = new Realm({ schema: [ProdSchema], schemaVersion: 1 });
//Exportando a instancia do schema criado;
export default realm_produto;

//criando os métodos CRUD

//Listagem de produtos
let listarProdutos = () => {
    return realm_produto.objects('Prod');
    //objects pra listar
}

//Adiçao de Produtos
let adicionarProdutos = (nomeProduto, descricaoProduto, precoProduto) => {

    console.log(nomeProduto, descricaoProduto, precoProduto)

    const ultimoId = realm_produto.objects('Prod').sorted('produto_id', true)[0];
    const maiorId = ultimoId == null ? 0 : ultimoId.produto_id;
    const proximoId = maiorId == null ? 1 : maiorId + 1;

    realm_produto.write(() => {
        const prod = realm_produto.create('Prod', {
            produto_id: proximoId,
            produto_nome: nomeProduto,
            produto_descricao: descricaoProduto,
            produto_preco: parseFloat(precoProduto),
        });
        alert('Produto cadastrado')
    });
}

const atualizarProduto = (id, nomeProduto, descricaoProduto, precoProduto) => {
    console.log(id, nomeProduto, descricaoProduto, precoProduto)

    realm_produto.write(() => {
        const prod = realm_produto.objectForPrimaryKey('Prod', parseInt(id));
        prod.produto_nome = nomeProduto,
            prod.produto_descricao = descricaoProduto,
            prod.produto_preco = parseFloat(precoProduto)
    });
    alert('Produto atualizado');
}

const deletarProduto = (id) => {
    console.log(id);
    realm_produto.write(() => {
        // const prod = realm_produto.objectForPrimaryKey('Prod', parseInt(id));
        realm_produto.delete(realm_produto.objectForPrimaryKey('Prod', parseInt(id)))
    })
    alert('Livro deletado')
}

const buscarProdutoId = (id) => {
    console.log(id);
    const prod = realm_produto.objectForPrimaryKey('Prod', parseInt(id));
    console.log("produto:" + prod);
    return prod;
}
const buscarProdutoNome = (nome) => {
    console.log(nome);
    const prods = realm_produto.objects('Prod')
    const filtrado = prods.filtered("produto_nome = $0", nome)


    console.log(filtrado);
    return filtrado;
}

export { listarProdutos, adicionarProdutos, atualizarProduto, deletarProduto, buscarProdutoId, buscarProdutoNome }