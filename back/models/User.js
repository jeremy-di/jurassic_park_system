const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema(
    {
        name : {
            type : String,
            required : true
        },
        firstName : {
            type : String,
            required : true
        },
        email : {
            type : String,
            required : true
        },
        password : {
            type : String,
            required : true
        }
    },
    {
        timestamps : true
    }
);

userSchema.pre("save", async function() {
    if ( this.isModified("password") ) {
        this.password = await bcrypt.hash(this.password, 10)
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;