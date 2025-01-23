function formatarMoeda(valor){
    const valorFormatado = new Intl.NumberFormat('pt-BR', {

        // definir o que fazer - no exemplo é a moeda
        style: 'currency',
        
        //definir qual é a moeda
        currency: 'BRL'

        //chamar o método format - passando o parâmetro valor
    }).format(valor);

    // retornar a string com o sinal monetário
    return valorFormatado;
}