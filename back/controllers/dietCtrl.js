const Diet = require('../models/Diet')

exports.createOne = async (req, res, next) => {
    try {
        const { body } = req
        const diet = await new Diet({
            ...body,
            image : `${req.protocol}://${req.get('host')}/images/${req.files.image[0].filename}`,
        })
        const newDiet = await diet.save()
    return res.status(201).json({status : 201, msg : "ok", result : newDiet})
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
}

exports.getAll = async (req, res) => {
    try {
        const dietList = await Diet.find()
        if ( dietList.length ==0 ) {
            res.status(404).json({status : 404, msg : "Pas de régime trouvés"});
            return;
        }
        res.status(200).json({status : 200, msg : "ok", result : dietList})
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}