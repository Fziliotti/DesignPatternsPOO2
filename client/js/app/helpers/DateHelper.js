class DateHelper {

	constructor() {
		throw new Error('Esta classe não pode ser instanciada');
	}

	// POSSUEM METODOS ESTATISCOS, para nao ter que ficar instanciando a classe, desse modo podemos acessar esses metodos fazendo DateHelper.dataParaTexto(...);
	static dataParaTexto(data){
		// return data.getDate()
		// 	+ '/' + (data.getMonth() +1 )
		// 	+ '/' + data.getFullYear();

		// TEMPLATE STRING
		return ( `${data.getDate()} / ${data.getMonth()} / ${data.getFullYear()}` )
	}

	static textoParaData(texto){
		// testando a expressao regular (é um padrao entre "/"  )
		if (!/^\d{4}-\d{2}-\d{2}$/.test(texto)) 
			throw new Error('Deve estar no formato aaaa-mm-dd')

		// let data = new Date(this._inputData.value.replace(/-/g, ','));
		// let data = new Date(this._inputData.value.split('-'));
		// esse ... chama SPREAD OPERATOR, diz q o 1º item do array vai ser o 1º parametro da funcao... etc
		// let data = DateHelper.textoParaData(this._inputData.value);
	

		return new Date(...texto.split('-').map((item,indice) => item - indice % 2));
	}


}

	