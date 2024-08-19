let nome = "Seunome";
let nivel = 7500;

    if (nivel <=10 ) { console.log("voce esta no nivel ferro")}
    else if (nivel >11 <=20) { console.log("voce esta no nivel bronze")}
	else if (nivel >21 && nivel <=50) { console.log("voce esta no nivel prata")}
	else if (nivel >51 && nivel <=80) { console.log("voce esta no nivel ouro")}
	else if (nivel >81 && nivel <=90) { console.log("voce esta no nivel plaina") }
	else if (nivel >91 && nivel <=100) { console.log("voce esta no nivel imortal")}
    else { console.log("voce esta no nivel radiante") } 

console.log ( "o heroi tem um saldo de: " + nome + "esta no nivel de:" + nivel )