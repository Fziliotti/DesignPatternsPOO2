class CadastroController {

    constructor() {
    	this._ordemAtual = '';
        let $ = document.querySelector.bind(document);
        this._inputDescricao = $('#descricao');
        this._inputMaterial = $('#material');
        this._inputPrecoCusto = $('#preco_custo');
        this._inputPrecoVenda = $('#preco_venda');
        this._inputTamanho = $('#tamanho');
        this._inputCor = $('#cor');

        this._listaProdutos = new Bind(
            new ListaProdutos(), 
            new ProdutosView($('#produtosView')), 
            'adiciona', 'esvazia', 'ordena', 'inverteOrdem');


        this._mensagem = new Bind(
            new Mensagem(), new MensagemView($('#mensagemView')),
            'texto');


        ConnectionFactory
	    .getConnection()
	    .then(connection => new ProdutoDao(connection))
	    .then(dao => dao.listaTodos())
	    .then(produtos => 
	    	produtos.forEach(produto =>
	    		this._listaProdutos.adiciona(produto)))
	    .catch(erro=> {
	    	this._mensagem.texto = erro;
	    });



    }

	adiciona(event) {
        event.preventDefault();
        ConnectionFactory
            .getConnection()
            .then(conexao => {
            	
                let produto = this._criaProduto();
                console.log('teste');
                new ProdutoDao(conexao)
                    .adiciona(produto)
                    .then(() => {
                        this._listaProdutos.adiciona(produto);
                        this._mensagem.texto = 'Produto adicionado com sucesso';
                        this._limpaFormulario();   
                    });
        })
        .catch(erro => this._mensagem.texto = erro);
		
	}
	apaga(){	
		ConnectionFactory
		    .getConnection()
		    .then(connection => new ProdutoDao(connection))
		    .then(dao => dao.apagaTodos())
		    .then(mensagem => {
		        this._mensagem.texto = mensagem;
		        this._listaProdutos.esvazia();
	    });
	}
	finaliza(){
		ConnectionFactory
		    .getConnection()
		    .then(connection => new ProdutoDao(connection))
		    .then(dao => dao.apagaTodos())
		    .then(mensagem => {
		        this._mensagem.texto = 'Compra finalizada!';
		        this._listaProdutos.esvazia();
	    });
	}


	_criaProduto(){
		let prdt = this._inputDescricao.value;

        if(prdt == 1){
			var produto = new Caneca(
				this._inputMaterial.value,
				parseFloat(this._inputPrecoCusto.value),
				parseFloat(this._inputPrecoVenda.value),
				this._inputTamanho.value,
				this._inputCor.value
			);
		}
		else{
			var produto = new Squeeze(
				this._inputMaterial.value,
				parseFloat(this._inputPrecoCusto.value),
				parseFloat(this._inputPrecoVenda.value),
				this._inputTamanho.value,
				this._inputCor.value
			);

		}
		return produto;
	}
	_limpaFormulario(){
		this._inputDescricao.focus();
		this._inputDescricao.value = '';
        this._inputMaterial.value = 0;
        this._inputPrecoCusto.value = 0.0;
        this._inputPrecoVenda.value = 0.0;
        this._inputTamanho.value = '';
        this._inputCor.value = 0;
        this._inputAlcaVermelha.value = false;
        this._inputAlcaDourada.value= false;
        this._inputEmbrulho.value = false;
	}
	ordena(coluna) {
        if(this._ordemAtual == coluna) {
            this._listaProdutos.inverteOrdem();
        } else {
            this._listaProdutos.ordena((a, b) => a[coluna] - b[coluna]);    
        }
        this._ordemAtual = coluna;
    }
}