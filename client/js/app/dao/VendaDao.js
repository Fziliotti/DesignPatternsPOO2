class ProdutoDao {

	constructor(connection){
		this._connection = connection;
		this._store = 'vendas';

	}

	adiciona(produto){

		return new Promise((resolve, reject) =>{
			let request = this._connection
				.transaction([this._store], 'readwrite')
				.objectStore(this._store)
				.add(produto);

			request.onsuccess = e =>{

				resolve();
			};

			request.onerror = e =>{

				console.log(e.target.error);
				reject('Não foi possível adicionar o produto');
			};
		});
	}

	listaTodos() {

        return new Promise((resolve, reject) => {

            let cursor = this._connection
                .transaction([this._store],"readwrite")
                .objectStore(this._store)
                .openCursor();

            let produtos = [];
			cursor.onsuccess = e => {
			    let atual = e.target.result;

			    if(atual) {

			        let dado = atual.value;
			        console.log(dado);

			        let prdt = new Produto (dado._material, dado._preco_custo, dado._preco_venda, dado._tamanho, dado._cor);
			        prdt.descricao = dado.descricao
			        produtos.push(prdt);

			        atual.continue();
			    } else {

			        resolve(produtos);
			    }
			}
			cursor.onerror = e => {

			    console.log(e.target.error);
			    reject('Não foi possível listar os produtos');
			}
        });
	}
	apagaTodos() {

     return new Promise((resolve, reject) => {

         let request = this._connection
             .transaction([this._store], 'readwrite')
             .objectStore(this._store)
             .clear();

         request.onsuccess = e => resolve('Produtos apagados com sucesso');

         request.onerror = e => {
             console.log(e.target.error);
             reject('Não foi possível apagar os produtos');
         };

     });

	}
}