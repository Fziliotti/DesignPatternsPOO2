class Squeeze extends Produto{
	
	constructor(material, preco_custo, preco_venda, tamanho, cor){
		super(material, preco_custo, preco_venda, tamanho, cor);
		this.descricao = 'Squeeze';

	}
	calculaPreco(){
		return this._preco_venda;
	}
}