class NegociacoesView extends View {
        
   // CONSTRUTOR HERDADO DA CLASSE "ABSTRATA" View

    template(model) {
        
        return  `
        <table class="table table-hover table-bordered">
            <thead class="text-light bg-info">
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                    <th>VOLUME</th>
                </tr>
            </thead>
        
            <tbody>
                ${model.negociacoes.map(n => `
                    <tr>
                        <td>${DateHelper.dataParaTexto(n.data)}</td>
                        <td>${n.quantidade}</td>
                        <td>${n.valor}</td>
                        <td>${n.volume}</td>
                    </tr>
                `).join('')}                
            </tbody>
                  
            <tfoot>
                <td colspan="3"></td>
                <td>
                    ${model.negociacoes.reduce((total, n) => total + n.volume, 0.0)}
                </td>
            </tfoot>
            
        </table>
        `;
    }

    // METODO UPDATE HERDADO DA SUPERCLASSE
    
}
