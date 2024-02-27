const mongoose = require('mongoose');

const paddockSchema = new mongoose.Schema(
    {
        designation : {
            type : String,
            required : true
        },
        zone : {
            type : String,
            required : true
        },
        zoneMap : {
            type : String,
            required : true
        },
        fenceType : {
            type : String,
            required : true
        },
        dinosaurs : [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Dinosaur",
            require: false
        }],
    },
    {
        timestamps : true
    }
);

const Paddock = mongoose.model('Paddock', paddockSchema);

module.exports = Paddock;