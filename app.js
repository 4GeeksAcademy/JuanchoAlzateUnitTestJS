const sum =(a,b)=>{
return a + b
}

let oneEuroIs = {
    "JPY1": 156.5, // japan yen
    "USD1": 1.07, // us dollar
    "GBP1": 0.87, // british pound
}


const fromDollarToYen = (USD) => {
    const JPY = USD * oneEuroIs["JPY1"] / USD;
    return JPY;
}

const fromEuroToDollar = (EUR) => {
    const USD = EUR * oneEuroIs["USD1"];
    return USD;
}

const fromYenToPound = (JPY) => {
    const GBP = JPY * (1 / JPY) * oneEuroIs["GBP1"];
    return GBP;
}

console.log("Euro To Dollar",fromEuroToDollar(3.5));
console.log("Dollar to Yen",fromDollarToYen(1));
console.log("Yen to Pound",fromYenToPound(1));

module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound }

