const Dinosaur = require('../models/Dinosaur')

// Création d'un dinosaure

exports.createOne = async (req, res, next) => {
    try {
        const { body } = req
        const dinosaur = await new Dinosaur({
            ...body,
            image01 : `${req.protocol}://${req.get('host')}/images/${req.files.image01[0].filename}`,
            image02 : `${req.protocol}://${req.get('host')}/images/${req.files.image02[0].filename}`
        })
        const newDinosaur = await dinosaur.save()
    return res.status(201).json({status : 201, msg : "ok", result : newDinosaur})
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
}

// Récupération de tous les dinosaures

exports.getAll = async (req, res) => {
    try {
        const dinosaurList = await Dinosaur.find().populate('diet', '-_id name image').populate('paddock', '-_id designation');
        if ( dinosaurList.length ==0 ) {
            res.status(404).json({status : 404, msg : "Pas de dinosaures trouvés"});
            return;
        }
        res.status(200).json({status : 200, msg : "ok", result : dinosaurList})
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}

// Affichage d'un dinosaure par son identifiant

exports.getOne = async (req, res) => {
    try {
        const dinosaur = await Dinosaur.findById(req.params.id).populate('diet', '-_id name image').populate('paddock', '-_id description');
        if ( !dinosaur ) {
            res.status(404).json({status : 404, msg : "Pas de dinosaure trouvé"})
            return
        }
        res.status(200).json({status : 200, msg : "ok", result : {data : dinosaur}})
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}

// Mise à jour d'un dinosaure

exports.updateOne = async (req, res) => {
    try {
        const dinosaurId = req.params.id;
        const updatedDinosaur = req.body

        const dinosaur = await Dinosaur.findById(dinosaurId)
        if ( !dinosaur ) {
            return res.status(404).json({status : 404, msg : "Dinosaure non trouvé"})
        }
        
        Object.assign(dinosaur, updatedDinosaur)
        const updateDinosaur = await dinosaur.save()
        res.status(200).json({status : 200, msg : "Dinosaure mis à jour", result : updateDinosaur})
    } catch (error) {
        console.error("Error updating dinosaur : ", error)
        res.status(500).json({status : 500, msg : "Erreur lors de la mise à jour du dinosaure"})
    }
}

exports.deleteOne = async (req, res) =>{
    try {
        const dinosaur = await Dinosaur.findByIdAndDelete(req.params.id)
        if ( !dinosaur ) {
            return res.status(404).json({status : 404, msg : "Ce dinosaure n'existe pas"})
        }
        res.status(200).json({status : 200, msg : `Le ${dinosaur.name} à été supprimé`})
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}