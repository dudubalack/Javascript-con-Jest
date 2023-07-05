let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}
/*function fromDollarToYen(dollar){
    let euros = dollar / oneEuroIs["USD"];
    return euros *  oneEuroIs["JPY"];
}

function fromYenToPound (yen) {
    let euros=   yen / oneEuroIs["JPY"]; //valor de yen
   
    return euros * oneEuroIs["GBP"]
   
   }
   module.exports = {fromYenToPound }*/
   // esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// solo un registro en consola para nosotros.
console.log(sum(7,3))

// exporta la función para usarla en otros archivos 
// (similar a la palabra clave `export` cuando se usa webpack)
module.exports = { sum };
  // declaramos una funcion con el mismo nombre "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * 1.2;
    // retornamos el valor
    return valueInDollar;
}
  
  // tenemos que incluir la funcion en el exports para que sea exportada a otros archivos como test.js
module.exports = { sum, fromEuroToDollar }





