class Produto {

	constructor(material, preco_custo, preco_venda, tamanho, cor){
		this._material = material;
		this._preco_custo = preco_custo;
		this._preco_venda =  preco_venda;
		this._tamanho =  tamanho;
		this._cor =  cor;
		this.descricao = '';
	}


	get material(){
		return this._material;
	}
	get quantidade(){
		return this._quantidade;
	}
	get tamanho(){
		return this._tamanho;
	}
	get cor(){
		return this._cor;
	}
	get preco_venda(){
		return this._preco_venda;
	}

	get preco_custo(){
		return this._preco_custo;
	}

	calculaPreco(){
		throw new Error('O método calculaPreco deve ser implementado!');
	}
	getDescricao(){
		throw new Error('O método getDescricao deve ser implementado!');
	}

}