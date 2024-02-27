const Paddock = require('../models/Paddock')

exports.createOne = async (req, res, next) => {
    try {
        const { body } = req
        const paddock = await new Paddock({
            ...body,
            zoneMap : `${req.protocol}://${req.get('host')}/images/${req.files.zoneMap[0].filename}`,
        })
        const newPaddock = await paddock.save()
    return res.status(201).json({status : 201, msg : "ok", result : newPaddock})
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
}

exports.getAll = async (req, res) => {
    try {
        const paddockList = await Paddock.find()
        if ( paddockList.length ==0 ) {
            res.status(404).json({status : 404, msg : "Pas de d'enclos' trouvés"});
            return;
        }
        res.status(200).json({status : 200, msg : "ok", result : paddockList})
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}

exports.getOne = async (req, res) => {
    try {
        const paddock = await Paddock.findById(req.params.id);
        if ( !paddock ) {
            res.status(404).json({status : 404, msg : "Pas d'enclos' trouvés"})
            return
        }
        res.status(200).json({status : 200, msg : "ok", result : {data : paddock}})
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}

exports.updateOne = async (req, res) => {
    try {
        const paddockId = req.params.id;
        const updatedPaddock = req.body

        const paddock = await Paddock.findById(paddockId)
        if ( !paddock ) {
            return res.status(404).json({status : 404, msg : "Enclos non trouvé"})
        }
        
        Object.assign(paddock, updatedPaddock)
        const updatePaddock = await paddock.save()
        res.status(200).json({status : 200, msg : "Enclos mis à jour", result : updatePaddock})
    } catch (error) {
        console.error("Erreur lors de la mise à jour de l'enclos : ", error)
        res.status(500).json({status : 500, msg : "Erreur lors de la mise à jour de l'enclos"})
    }
}

exports.deleteOne = async (req, res) => {
    try {
        const paddock = await Paddock.findByIdAndDelete(req.params.id)
        if ( !paddock ) {
            return res.status(404).json({status : 404, msg : "Cet enclos n'existe pas"})
        }
        res.status(200).json({status : 200, msg : `L' ${paddock.designation} à été supprimé`})
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}