const Products = require('../models/products');

async function all(req, res, next) {
    try {
        const price = req.query.price;
        let query = null;
        
        query = Products.find({});
        
        if (price) {
            query = Products.find({'price': { $gt: price}});    
        }

        const products = await query.exec();

        res.status(200).json(products);
    } catch (error) {
        res.status(422).json({'message': error.message});
        next(error);
    }
}

async function product(req, res, next) {
    try {
        const id = req.params.id;

        const product = await Products.findById(id);
        
        res.status(200).json(product);
    } catch (error) {
        res.status(422).json({'message': error.message});
        next(error);
    }
}

async function create(req, res, next) {
    try {
        const product = new Products({
            name: req.body.name,
            price: req.body.price,
            stock: req.body.stock
        });

        const saved = await product.save();

        res.status(201).json(saved);
    } catch (error) {
        res.status(422).json({'message': error.message});
        next(error);
    }
}

async function update(req, res, next) {
    try {
        const id = req.params.id;

        const object = {
            name: req.body.name,
            price: req.body.price,
            stock: req.body.stock
        };

        const updated = await Products.updateOne({'_id': id}, object);

        res.status(200).json(updated);
    } catch (error) {
        res.status(422).json({'message': error.message});
        next(error);
    }
}

async function remove(req, res, next) {
    try {
        const id = req.params.id;

        const removed = await Products.deleteOne({'_id': id});
        
        res.status(200).json(removed);
    } catch (error) {
        res.status(422).json({'message': error.message});
        next(error);
    }
}

module.exports = {
    all,
    product,
    create,
    update,
    remove
}
