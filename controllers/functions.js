const Functions = require('../functions');

function fatorial(req, res) {
    let response = Functions.fatorial(req.body.number);

    res.status(200).json({response: response});
}

function somatorioNumeroPar(req, res) {
    let response = Functions.somatorioNumeroPar(req.body.numbers);

    res.status(200).json({response: response});
}

async function somatorioPalavrasCincoCaracteres(req, res) {
    const response = await Functions.readFile();
    
    res.status(200).json({response: response});
}

module.exports = {
    fatorial,
    somatorioNumeroPar,
    somatorioPalavrasCincoCaracteres
}