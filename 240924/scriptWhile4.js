let melhorLucro = 0;
let melhorPreco = 150;
let custoLocacao = 1000;
let publicoInicial = 1800;
let preco = 150

while ( preco >= 0) {

    let reducao = (150 - preco) / 10;
    
    let publico = publicoInicial + (reducao * 50);
    
    let valor = publico * preco;
    
    let lucro = valor - custoLocacao;
    

    if (lucro > melhorLucro) {
        melhorLucro = lucro;
        melhorPreco = preco;
    }
    preco -=10
}

console.log(`O melhor preço de ingresso é R$${melhorPreco} e o lucro será de R$${melhorLucro}.`);
