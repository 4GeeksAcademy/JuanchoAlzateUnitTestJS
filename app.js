const sum =(a,b)=>{
return a + b
}

console.log(sum(7,3));

let oneEuroIs = {
    "JPY": 156.5,
    "USD": 1.07,
    "GBP": 0.87,
}

const fromDollarToYen = (USD) => {
    const JPY = USD * oneEuroIs["JPY"] / oneEuroIs["USD"];
    return JPY;
}

const fromEuroToDollar = (EUR) => {
    const USD = EUR * oneEuroIs["USD"];
    return USD;
}

const fromYenToPound = (JPY) => {
    const GBP = JPY * (1 / oneEuroIs["JPY"]) * oneEuroIs["GBP"];
    return GBP;
}

console.log(fromEuroToDollar(3.5)); 

