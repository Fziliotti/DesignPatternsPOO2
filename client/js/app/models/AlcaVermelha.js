class AlcaVermelha extends AditionalDecorator{

	constructor(produto){

		super(produto.material, produto.preco_custo, produto.preco_venda, produto.tamanho, produto.cor);
		this.descricao = produto.descricao + ' + Alça Vermelha';
	}

	calculaPreco(){
		return (3.00 + this._preco_venda);
	}
	getDescricao(){
		return(this.descricao);
	}
	
}