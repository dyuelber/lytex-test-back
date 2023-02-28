const Users = require('../models/users');

async function all(req, res, next) {
    try {
        const users = await Users.find({});

        res.status(200).json(users);
    } catch (error) {
        res.status(422).json({'message': error.message});
        next(error);
    }
}

async function user(req, res, next) {
    try {
        const id = req.params.id;

        const user = await Users.findById(id);
        
        res.status(200).json(user);
    } catch (error) {
        res.status(422).json({'message': error.message});
        next(error);
    }
}

async function create(req, res, next) {
    try {
        const user = new Users({
            name: req.body.name,
            email: req.body.email,
            age: req.body.age
        });

        const saved = await user.save();
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
            email: req.body.email,
            age: req.body.age
        };

        const updated = await Users.updateOne({'_id': id}, object);

        res.status(200).json(updated);
    } catch (error) {    
        res.status(422).json({'message': error.message});
        next(error);
    }
}

async function remove(req, res, next) {
    try {
        const id = req.params.id;

        const removed = await Users.deleteOne({'_id': id});

        res.status(200).json(removed);
    } catch (error) {
        res.status(422).json({'message': error.message});
        next(error);   
    }
}

module.exports = {
    all,
    user,
    create,
    update,
    remove
}
