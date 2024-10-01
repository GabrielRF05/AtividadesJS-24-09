let melhorLucro = 0;
let melhorPreco = 150;
let custoLocacao = 1000;
let publicoInicial = 1800;

for (let preco = 150; preco >= 0; preco -= 10) {

    let reducao = (150 - preco) / 10;
    
    let publico = publicoInicial + (reducao * 50);
    
    let valor = publico * preco;
    
    let lucro = valor - custoLocacao;
    

    if (lucro > melhorLucro) {
        melhorLucro = lucro;
        melhorPreco = preco;
    }
}

console.log(`O melhor preço de ingresso é R$${melhorPreco} e o lucro será de R$${melhorLucro}.`);
