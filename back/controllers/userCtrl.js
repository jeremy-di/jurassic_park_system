const User = require('../models/User');
const bcrypt = require('bcrypt');
const userValidation = require('../validation/userValidation');
const jwt = require('jsonwebtoken');

// Contrôleur d'inscription

exports.inscription = async(req, res) => {
    try {
        const { body } = req
        const { error } = userValidation(body).userLawRegister;
        if ( error ) {
            return res.status(401).json(error.details[0].message)
        }
    
        const searchUser = await User.findOne({email : req.body.email});
            if ( searchUser ) {
                return res.status(403)
                .json({status : 403, msg : `Un utilisateur avec l'email : ${req.body.email} existe déjà`})
            }

        const user = new User(req.body);
        console.log(req.body);
        const newUser = await user.save()
        return res.status(201).json({Status : 201, msg : `L'utilisateur ${newUser.firstName} à été créé`})
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}

// Contrôleur de connexion

exports.connexion = async(req, res) => {
    try {
        const { email, password } = req.body;
        const { error } = userValidation(req.body).userLawLogin
        if ( error ) {
            return res.status(401).json(error.details[0].message)
        }
        const user = await User.findOne({email : email})
        if(!user){
            return res 
            .status(400)
            .json({status: 400, msg: "indentifiants invalides"});
        }
        const isMatch = await bcrypt.compare(password, user.password)
        if(!isMatch){
            return res 
            .status(400)
            .json({status: 400, message: "indentifiants invalides"});
        }
        res.status(200).json({
            email : user.email,
            name : user.name,
            firstName : user.firstName,
            id : user._id,
            token : jwt.sign({id : user._id}, process.env.SECRET_KEY, {expiresIn : "12h"})
        })
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}

exports.getAll = async(req, res ) => {
    try{
        const userlist = await User.find();
        if ( userlist.length == 0 ) {
            res
                .status(200)
                .json({status : 200, msg : "Pas d'utilisateurs trouvés"})
                return;
        }
        res
            .status(200)
            .json({status : 200, result : userlist});
            return;
    } catch(error) {
        console.log(error)
        res.sendStatus(500)
    }
}

exports.getOne = async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
        if ( !user ) {
            res
                .status(400)
                .json({status : 400, msg : "Cet utilisateur n'existe pas"})
                return;
        };
        res
            .status(200)
            .json({status : 200, msg : "ok", result : user})
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
}