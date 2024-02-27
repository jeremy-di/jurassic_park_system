const mongoose = require('mongoose');

const dinosaurSchema = new mongoose.Schema(
    {
        name : {
            type : String,
            required : true
        },
        image01 : {
            type : String,
            required : false
        },
        image02 : {
            type : String,
            required : false
        },
        diet : {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Diet",
            require: false
        },
        paddock : {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Paddock",
            require: false
        },
        height : {
            type : Number,
            required : false
        },
        width : {
            type : Number,
            required : false
        },
        weight : {
            type : Number,
            required : false
        },
        habitatWater : {
            type : Number,
            required : false
        },
        habitatForest : {
            type : Number,
            required : false
        },
        habitatOpenSpace : {
            type : Number,
            required : false
        },
        description : {
            type : String,
            required : false
        },
    },
    {
        timestamps : true
    }
);

const Dinosaur = mongoose.model('Dinosaur', dinosaurSchema);

module.exports = Dinosaur;