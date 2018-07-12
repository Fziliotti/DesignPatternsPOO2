class VendasView extends View {
	constructor(elemento){
        super(elemento);
    }

    template(model){
        return `
            <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th onclick="consultaController.ordena('descricao')">Descrição</th>
                        <th onclick="consultaController.ordena('material')">Material</th>
                        <th onclick="consultaController.ordena('preco_custo')">Preço de Custo</th>
                        <th onclick="consultaController.ordena('preco_venda')">Preço de Venda</th>
                        <th onclick="consultaController.ordena('tamanho')">Tamanho</th>
                        <th onclick="consultaController.ordena('cor')">Cor</th>
                    </tr>
                </thead>
                
                <tbody>
                    ${model.produtos.map((n)=>
                            `
                                <tr>
                                    <td>${n.descricao}</td>
                                    <td>${n.material}</td>
                                    <td>${n.preco_custo}</td>
                                    <td>${n.preco_venda}</td>  
                                    <td>${n.tamanho}</td>
                                    <td>${n.cor}</td>  
                                </tr>
                            `
                        ).join('')}
                </tbody>
                
                <tfoot>
                    <tr>
                        <td colspan="2"></td>
                        <td>
                            ${model.produtos.reduce((total, n) => total + n.preco_custo, 0.0)}
                        </td>
                        <td>
                            ${model.produtos.reduce((total, n) => total + n.preco_venda, 0.0)}
                        </td>
                    </tr>
                </tfoot>
            </table>
        ` ;
    }
	
}