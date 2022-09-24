const Dino = require('../models/dinos');

async function createDino(req, res){
    const body = req.body;
    Dino.create(body).then(dino => {
        res.status(201).json(dino);
    });
}

async function getDino(req, res){
    const id = req.params.id;
    const dino = await Dino.findByPk(id);
    res.status(200).json(dino);
}

async function getDinos(req, res){
    const dinos = await Dino.findAll();
    res.status(200).json(dinos);
}

async function updateDino(req, res){
    const id = req.params.id;
    const dino = req.body;
    await Dino.update(dino, {where: {id}});
    const dino_updated = await Dino.findByPk(id);
    res.status(200).json(dino_updated);
}

async function deleteDino(req, res){
    const id= req.params.id;
    const deleted = Dino.destroy({
        where: {id}
    });
    res.status(200).json(deleted);
}

module.exports = {
	createDino,
	getDino,
	getDinos,
	updateDino,
	deleteDino,
};