/* chiedere e memorizzare i km da percorrere
- chiedere e memorizzare l'età del passeggero
- calcoliamo il prezzo base del biglietto (km * 0,21)
? SE l'età è < a 18 anni
    ° finalPrice = startingPrice - startingPrice * 0,20
: ALTRIMENTI SE è > dìa 65 anni
    ° finalPrice = startingPrice - startingPrice * 0,40
: ALTRIMENTI 
    ° finalPrice = startingPrice
- formatta finalPrice con due decimali
- stampa finalPrice */ 


let tripKM = parseInt(prompt("Quanti Km devi percorrere?"));
let userAge = parseInt(prompt("Quanti anni hai?"));

let pricePerKm = 0.21;
let startingPrice = tripKM * pricePerKm;
let finalPrice;

if(userAge < 18) {
    finalPrice = startingPrice - startingPrice * 0.2;

} else if(userAge >= 65) {
    finalPrice = startingPrice - startingPrice * 0.4;

} else {
    finalPrice = startingPrice;
}


finalPrice = finalPrice.toFixed(2);

document.writeln(`
    Ciao, percorrerai ${tripKM}Km,10
    hai ${userAge} anni,
    e il costo del tuo biglietto è di €${finalPrice}
`)


