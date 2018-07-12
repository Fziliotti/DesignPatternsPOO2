class ListaProdutos{

	constructor(){

		this._produtos = [];

	}
	adiciona(produto){
		this._produtos.push(produto);
	}
	get produtos(){
		return [].concat(this._produtos)	;
	}

	esvazia(){
		this._produtos = [];
	}
	ordena(criterio) {
        this._produtos.sort(criterio);        
    }
    inverteOrdem() {
        this._produtos.reverse();
    }

}