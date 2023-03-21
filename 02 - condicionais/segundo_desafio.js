const precoEtanol = 5.79;
const precoGasolina = 6.50;
const kmPorLitros = 10;
const distanciaKM = 100;
const tipoCombustivel = "etanol";

const litrosConsumidos = distanciaKM / kmPorLitros;

if (tipoCombustivel === 'etanol') {
    const vlrGasto = litrosConsumidos * precoEtanol;
    console.log(vlrGasto.toFixed(2));
}else {
    const vlrGasto = litrosConsumidos * precoGasolina;
    console.log(vlrGasto.toFixed(2));
}
