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

async function promisseExample(req, res) {
    
    const promisse = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('ok');
        }, 3000);
    });

    let response = null;

    await promisse
        .then((value) => {
            response = value
            console.log(value)
        })
        .catch((error) => {
            response = error
            console.log(error)
        });

    res.status(200).json({response: response})
}

module.exports = {
    fatorial,
    somatorioNumeroPar,
    somatorioPalavrasCincoCaracteres,
    promisseExample
}
