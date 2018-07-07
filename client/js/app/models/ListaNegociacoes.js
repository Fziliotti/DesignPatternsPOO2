// MODEL ListaNegociacoes

class ListaNegociacoes {
    
    // armadilha é uma funcao q sera passada como parametro no construtor
    // Usamos o padrão de projeto Observer sempre que queremos notificar partes do sistema interessadas quando um evento importante for disparado em nosso sistema.

    // No contexto da nossa aplicação, entendemos um evento como o ato de adicionar ou esvaziar nossa lista de negociações. É a view que está interessada em observar esse evento e tomar uma ação, no caso, se atualizar com base no estado mais atual do modelo.

    constructor(armadilha) {
        
        this._negociacoes = [];
        // model => this._negociacoesView.udpate(model)
        this._armadilha = armadilha;
       
    }
    
    adiciona(negociacao) {
        
        this._negociacoes.push(negociacao);
        this._armadilha(this);
    }
    
    esvaziar(){
        this._negociacoes = [];
        this._armadilha(this);
    }


     get negociacoes() {
        // PROGRAMACAO DEFENSIVA
        return [].concat(this._negociacoes);
    }
}



// 1 - Conceitual: veja que toda vez que alterarmos nosso modelo, precisaremos lembrar de atualizar sua respectiva view. Esse é o caso do modelo ListaNegociacao, que precisa atualizar a view na inclusão de novas negociações e quando apagamos a lista.

// 2 - Conceitual: uma maneira de solucionar esse problema é passar a estratégia para o constructor dos nossos modelos, ou seja, a função que queremos que ele execute. Mas como ele saberá quando executar cada função? Basta o programador invocar esta função nos métodos da classe que ele deseja que ela seja executada.