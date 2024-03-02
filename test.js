
test("One euro should be 1.07 dollars", ()=> {
    // Importo la funcion desde app.js
    const { fromEuroToDollar, fromDollarToYen } = require('./app');

    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);
    // const dollars = 3.745;

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.745;
    // Hago mi comparación (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(3.745); // Comparo el valor en dólares con el valor esperado
});


test("One Dollar should be 156.5 Yen", ()=> {
    // Importo la funcion desde app.js
    const { fromDollarToYen } = require('./app');

    // Uso la función como debe ser usada
    const dollars = fromDollarToYen(1);

    const expected = 156.5;
    // Hago mi comparación (la prueba)
    expect(fromDollarToYen(1)).toBe(expected); // Comparo el valor en dólares con el valor esperado
});


test("One euro should be 1.07 dollars", ()=> {
    // Importo la funcion desde app.js
    const { fromYenToPound } = require('./app');

    // Uso la función como debe ser usada
    const dollars = fromYenToPound(1);

    const expected = 0.87;
    // Hago mi comparación (la prueba)
    expect(fromYenToPound(1)).toBe(expected); // Comparo el valor en dólares con el valor esperado
});