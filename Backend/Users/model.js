const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const Schema = mongoose.Schema;

const UserModel = new Schema({
    role: {
        type: String,
        enum: ['user', 'admin', 'agent'],
        default: 'user',
        trim: true
    },
    email: {
        type: String,
        trim: true,
        unique: true,
        required: true
    },
    username: {
        type: String,
        trim: true
    },
    password: {
        type: String,
        trim: true
    },
    DOB: {
       type: String,
       trim: true
    },
    token: {
        type: String,
        trim: true
    },
    //user checkout details//////////////////////

    firstName: {
        type: String,
        trim: true
    },
    lastName: {
        type: String,
        trim: true
    },
    country: {
        type: String,
        trim: true
    },
    houseNumber: {
        type: String,
        trim: true
    },
    appartment: {
        type: String,
        trim: true
    },
    postalCode: {
        type: String,
        trim: true
    },
    city: {
        type: String,
        trim: true
    },
    phoneNumber: {
        type: String,
        trim: true
    },
    total: {
        type: Number,
        trim: true
    },
    cardNumber:
    {
        type: Number,
        trim: true
    },
    cardHolder: {
        type: String,
        trim: true
    },
    cardExpire: {
        type: String,
        trim: true
    },
    cvc: {
        type: Number,
        trim: true
    },
    ////user checkout details ends here////////////
    ////user shipping details comes here////////////
    adress: {
       type: String,
       trim: true
    },
    /////stripe customer details comes here//////////
    
    
}, {
    timestamps: true
});

UserModel.pre('save', async function (next) {
   
        let newPaswword = await bcrypt.hash(this.password, 8);
        this.password = newPaswword;
    
    next();
});

UserModel.methods.comparePassword = function (candidatePassword) {
    return bcrypt.compare(candidatePassword, this.password);
}

module.exports = mongoose.model('User', UserModel);