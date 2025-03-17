












let km = prompt('Quanti km devi percorrere?')
let price = km * 0.21;
let anni = prompt('Quanti anni hai? (inserisci solo valore numerico)')

if(anni < 18 ){
    finalPrice = price - (price * 20 / 100);
}
else if(anni >= 65){
    finalPrice = price - (price * 40 / 100)
}
else{
    finalPrice = price;
}

console.log('Il prezzo è di' ${finalPrice}'€');
