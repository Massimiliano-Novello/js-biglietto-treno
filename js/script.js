/*
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca 
*/

//INPUT
//Chiedere all'utente quanti chilometri deve fare 
//chiedere all'utente quant anni ha

const kilometres = parseInt(prompt("Quanti chilometri vuoi fare?"));
const userAge = parseInt(prompt("Quanti anni hai?"));
console.log(kilometres,userAge);

if (!isNaN(userAge)) {
    console.log("E' un numero. Posso continuare");


    //LOGICA
    //Calcolare il prezzo del biglietto
let price = 0.21 * kilometres;
price = parseFloat(price).toFixed(2);
console.log(price);
//Calcolare lo sconto per i minorenni 
let discountForMinors = (price * 0.20);
discountForMinors = parseFloat(discountForMinors).toFixed(2);
console.log(discountForMinors);
//Calcolare lo sconto per gli over 65
let discountForOver = (price * 0.40);
discountForOver = parseFloat(discountForOver).toFixed(2);
console.log(discountForOver);

//Se sei minorenne va applicato uno sconto del 20%
//          sconto per minorenni
//Altrimenti Se sei over65 va applicato uno sconto del 40%
//          sconto per over65
//Altrimeni
//paghi prezzo pieno

let message = "";

if (userAge < 18) {
    message = "sconto per minorenni applicato";
} else if (userAge > 65) {
    message = "sconto per gli over65 applicato";
} else {
    message = "paghi il biglietto a prezzo pieno";
}
//OUTPUT
console.log(message);
document.getElementById("discount").innerHTML = message;

} else {
    console.log("Non è un numero. Ricarica la pagina");
  }
