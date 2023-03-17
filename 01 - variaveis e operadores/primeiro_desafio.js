const precoCombustivel = 5.79;
const kmPorLitros = 12;
const distanciaKM = 1580;

const litrosConsumidos = distanciaKM / kmPorLitros;
const vlrGasto = litrosConsumidos * precoCombustivel;
console.log(vlrGasto.toFixed(2));