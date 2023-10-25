/* ESERCIZIO 1
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso allora deve ritornare la loro somma moltiplicata per 3.
*/

const crazySum = function (numero1, numero2) {
  if (numero1 === numero2) {
    return (numero1 + numero2) * 3;
  } else {
    return numero1 + numero2;
  }
};
console.log("-- ESERCIZIO 1 --");
let n1 = 5;
let n2 = 5;
somma = crazySum(n1, n2);
console.log(`La somma e' ${somma}`);

/* ESERCIZIO 2
 Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro e ritorna true se tale parametro è incluso tra 20 e 100 (incluso) o se è esattamente uguale a 400.
*/

const boundary = function (numero) {
  if ((numero >= 20 && numero <= 100) || numero === 400) {
    return true;
  } else {
    return false;
  }
};

console.log("-- ESERCIZIO 2 --");
let parametroNumero = 50;
let risultato = boundary(parametroNumero);
console.log(risultato);

/* ESERCIZIO 3
 Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro e la ritorna invertita (es.: EPICODE => EDOCIPE).
*/

const reverseString = function (stringa) {
  let reversedString = stringa.split("").reverse().join("");
  return reversedString;
};
console.log("-- ESERCIZIO 3 --");
let stringaEpicode = "EPICODE";
let reversedEpicode = reverseString(stringaEpicode);
console.log(reversedEpicode); // Stampa "EDOCIPE"

/* ESERCIZIO 4
 Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.
*/

const upperFirst = function (stringa) {
  let parole = stringa.split(" ");

  for (let i = 0; i < parole.length; i++) {
    let lettera = parole[i];
    if (lettera.length > 0) {
      parole[i] = lettera[0].toUpperCase() + lettera.slice(1).toLowerCase();
    }
  }
  let fraseFinale = parole.join(" ");
  return fraseFinale;
};
console.log("-- ESERCIZIO 4 --");
let originalString = "proviamo questa funzione";
let modifica = upperFirst(originalString);
console.log(modifica);

/* ESERCIZIO 5
 Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n e ritorna un array contenente n numeri random contenuti tra 0 e 10.
*/

const giveMeRandom = function (n) {
  let numeriACaso = [];

  for (let i = 0; i < n; i++) {
    let numeroRandom = Math.round(Math.random() * 11);
    numeriACaso.push(numeroRandom);
  }
  return numeriACaso;
};
console.log("-- ESERCIZIO 5 --");
let n = 5;
let gruppoNumeri = giveMeRandom(n);
console.log(gruppoNumeri);

//EXTRA:
/* ESERCIZIO 1
 Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

const area = function (l1, l2) {
  return l1 * l2;
};

console.log("-- EXTRA 1 --");
let l1 = 5;
let l2 = 10;
let result = area(l1, l2);
console.log(`L'area e' ${result}`);

/* ESERCIZIO 2
 Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19.
 Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.
*/

const crazyDiff = function (numero) {
  let differenza = Math.abs(numero - 19);
  if (differenza > 19) {
    return differenza * 3;
  } else {
    return differenza;
  }
};
console.log("-- EXTRA 2 --");
let valoreNumero1 = 89;
let prova1 = crazyDiff(valoreNumero1);
console.log(prova1);

/* ESERCIZIO 3
 Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e ritornare il risultato, ma se la stringa fornita comincia proprio con "code" allora deve ritornarla senza modifiche.
*/

const codify = function (stringa) {
  if (stringa.startsWith("code")) {
    return stringa;
  } else {
    return "code" + stringa;
  }
};
console.log("-- EXTRA 3 --");
let stringone = "baubau";
let stringoneMod = codify(stringone);
console.log(stringoneMod);
/* ESERCIZIO 4
 Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
 La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; altrimenti deve tornare false.
 SUGGERIMENTO: operatore modulo
*/

const check3and7 = function (numero) {
  if (numero <= 0) {
    return false;
  }
  if (numero % 3 === 0 || numero % 7 === 0) {
    return true;
  } else {
    return false;
  }
};

console.log("-- EXTRA 4 --");
let numerazzo = 21;
let checkone = check3and7(numerazzo);
console.log(checkone);

/* ESERCIZIO 5
 Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e la ritorna senza il primo e l'ultimo carattere.
*/

const cutString = function (stringa) {
  if (stringa.length < 2) {
    return "";
  }
  return stringa.substring(1, stringa.length - 1);
};

console.log("-- EXTRA 5 --");
let parolona = "Atoraxxion";
let parolonaMod = cutString(parolona);
console.log(parolonaMod);
