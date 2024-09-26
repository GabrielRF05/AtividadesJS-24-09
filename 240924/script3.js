let quant = parseInt(prompt("Quantas cartas você deseja virar?"));

    for (let i = 1; i <= quant; i++) {
        let num = Math.floor(Math.random() * 10) +1;
        let naipe = Math.floor(Math.random() * 4);

        if (naipe == 0) {
            naipe = "copas";
        } else if (naipe == 1) {
            naipe = "paus";
        } else if (naipe == 2) {
            naipe = "ouros";
        } else {
            naipe = "espadas";
        }
        console.log(i + "- " + num + " de " + naipe);
    }