class Caneca extends Produto{
	
	constructor(material, preco_custo, preco_venda, tamanho, cor){
		super(material, preco_custo, preco_venda, tamanho, cor);
		this.descricao = 'Caneca';

	}
	calculaPreco(){
		return this._preco_venda;
	}

}