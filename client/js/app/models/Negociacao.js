// CONVENCAO é NAO PODER ACESSAR O ATRIBUTO QUE INICIA COM UNDERLINE(privado)
class Negociacao{
	constructor(data, quantidade, valor){
		this._data = new Date(data.getTime());
		this._quantidade = quantidade;
		this._valor = valor;
		// ESSE FREEZE SERVE PARA DEIXAR OS ATRIbUTOS IMUTAVEIS
		Object.freeze(this);
	}

	// Definicao de metodos, esse get ira fazer com que o codigo fique menos verboso, e pareca que estamos acessando uma propriedade ao inves de um metodo

	get volume(){
		return this._quantidade * this._valor;
	}


	// PROGRAMACAO DEFENSIVA, o getData nao ira pegar o atributo como referencia, para que o cliente nao consiga alterar o atributo data da classe, ja que o freeze nao é "profundo" e acaba deixando com que metodos de um tipo de atributo seja usado e altere seu valor
	get data(){
		return new Date (this._data.getTime());
	}

	get quantidade(){
		return this._quantidade;
	}

	get valor(){
		return this._valor;
	}

	// setData(){
	// 	return this._data;
	// }

	// setQuantidade(){
	// 	return this._quantidade;
	// }

	// setValor(){
	// 	return this.getValor;
	// }
}