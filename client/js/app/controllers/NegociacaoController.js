class NegociacaoController{
	constructor(){
		// FAZENDO IGUAL JQUERY BASICAMENTE
		// A variavel $ recebe a funcao
		// precisa do bind porque internamente o queryselector usa o this, mas como o queryselector esta fora do contexto de document..
		// criando o Alias / atalho
		let $ = document.querySelector.bind(document); 
		this._inputData = $('#data');
		this._inputQuantidade = $('#quantidade');
		this._inputValor = $('#valor');
		
		// MODEL listaNegociacoes
		// SE NAO FOSSE ARROW FUNCTION E SEU ESCOPO LEXICO, Precisariamos usar o reflection do ES6 ou
		let self = this;
  		      this._listaNegociacoes = new ListaNegociacoes(function(model) { 
  		          self._negociacoesView.update(model);
  		      });

  		      
		// this._listaNegociacoes = new ListaNegociacoes(model =>
		// 	this._negociacoesView.udpate(model));


		this._negociacoesView = new NegociacoesView($('#negociacoesView'));
		this._negociacoesView.update(this._listaNegociacoes);

		// model e view do mensagem
		this._mensagem = new Mensagem();
		this._mensagemView = new MensagemView($('#mensagemView'));
		this._mensagemView.update(this._mensagem);
	}

	adiciona(event){			
	  // previne o submite padrao do html5			
	  event.preventDefault();
	  this._listaNegociacoes.adiciona(this._criaNegociacao());

	  this._mensagem.texto = "Negociacao adicionada com sucesso!";
	  this._mensagemView.update(this._mensagem);

	  this._limpaFormulario();   
	}

	apagar(){
		this._listaNegociacoes.esvaziar();
		this._mensagem.texto = "Negociacões apagadas com Sucesso!"
		this._mensagemView.update(this._mensagem);
	}

	// instancia a classe Negociacao para adiciona-la no Model listaNegociacoes usando o metodo adiciona
	_criaNegociacao(){
		return new Negociacao(
			DateHelper.textoParaData(this._inputData.value),
			this._inputQuantidade.value,
			this._inputValor.value
			);
	}


	// so pode ser chamado pela propria classe NegociacaoController
	_limpaFormulario(){
		this._inputData.value = '';
		this._inputQuantidade.value = 1;
		this._inputValor.value = 0.0;
		this._inputData.focus();
	}

	
}

// LEMBRANDO QUE O (_) SERVE PARA CONVENCIONAR QUE SOMENTE OS METODOS DENTRO DA CLASSE PODEM CHAMAR A FUNCAO com UNDERLINE

// let numeros = [3,2,11,20,8,7];
// let novosNumeros = numeros.map(item =>  item % 2 ? item * 2 : item);
// console.log(novosNumeros);

// numeros = [10,30];
// console.log(somaDoisNumeros(...numeros));