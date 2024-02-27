const joi = require('joi');

function userValidation(body) {
    const userLawRegister = joi.object({
        name : joi.string().min(2).max(30).trim().required(),
        firstName : joi.string().min(2).max(30).trim().required(),
        email : joi.string().email().trim().required(),
        password : joi.string().min(8).max(30).required().regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/)
    });

    const userLawLogin = joi.object({
        email : joi.string().email().trim().required(),
        password : joi.string().min(8).max(30).required()
    });

    return {
        userLawRegister : userLawRegister.validate(body),
        userLawLogin : userLawLogin.validate(body)
    };
};

module.exports = userValidation;