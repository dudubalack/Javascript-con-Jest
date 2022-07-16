

/*test('suma 7 + 3, devuelve 10', () => {
    
    let total = suma(7, 3);
    expect(total).toBe(10);
});

test ("convertir dollar a yen", ()=>{
    let dollar = fromDollarToYen(3)// (3 / 1.2) x 127,9
    expect(dollar).toBe(319.75)
});

test("covertir yen a pound ", () => {
    let yen = fromYenToPound (300);    //(300/127.9) *0.8

   expect(yen).toBe(1.8764659890539486); });*/
   
   test("One euro should be 1.206 dollars", function(){
    // importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js')
    
    // hago mi comparacion (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
})