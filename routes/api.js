const express = require("express");
const router = express.Router();

const userController = require("../controllers/users");
const productsController = require("../controllers/products");
const functions = require("../controllers/functions");

router.get('/check', function (req, res) {
    res.status(200).json({'status': true});
});

router.get('/users', userController.all);
router.post('/users', userController.create);
router.get('/users/:id', userController.user);
router.put('/users/:id', userController.update);
router.delete('/users/:id', userController.remove);


router.get('/products', productsController.all);
router.post('/products', productsController.create);
router.get('/products/:id', productsController.product);
router.put('/products/:id', productsController.update);
router.delete('/products/:id', productsController.remove);

router.post('/fatorial', functions.fatorial);
router.post('/somatorio-par', functions.somatorioNumeroPar);
router.post('/somatorio-palavras', functions.somatorioPalavrasCincoCaracteres);

module.exports = router;
