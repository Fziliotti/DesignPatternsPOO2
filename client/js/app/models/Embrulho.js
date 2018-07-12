class Embrulho extends AditionalDecorator{

	constructor(produto){

		super(produto.material, produto.preco_custo, produto.preco_venda, produto.tamanho, produto.cor);
			this.descricao = produto.descricao + ' + Embrulho';
	}

	calculaPreco(){
		return (1.00 + this._preco_venda);
	}

	getDescricao(){
		return(this.descricao);
	}

}