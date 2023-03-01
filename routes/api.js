const express = require("express");
const router = express.Router();

const userController = require("../controllers/users");
const productsController = require("../controllers/products");
const functionsController = require("../controllers/functions");
const authMidlleware = require("../authMidllewares");

router.get('/check', function (req, res) {
    res.status(200).json({'status': true});
});

router.use('/users', authMidlleware.handle);
router.get('/users', userController.all);
router.post('/users', userController.create);
router.get('/users/:id', userController.user);
router.put('/users/:id', userController.update);
router.delete('/users/:id', userController.remove);

router.use('/products', authMidlleware.handle);
router.get('/products', productsController.all);
router.post('/products', productsController.create);
router.get('/products/:id', productsController.product);
router.put('/products/:id', productsController.update);
router.delete('/products/:id', productsController.remove);

router.post('/fatorial', functionsController.fatorial);
router.post('/somatorio-par', functionsController.somatorioNumeroPar);
router.post('/somatorio-palavras', functionsController.somatorioPalavrasCincoCaracteres);
router.get('/promisse', functionsController.promisseExample);

module.exports = router;
