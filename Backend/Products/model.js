const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ProductModel = new Schema({
    name:{
        type: String,
        trim: true,
        required: true
    },
    isDeleted:{
        type: Boolean,
        default: false
    },
    price:{
        type: String,
        trim: true
    },
    specs:[{
        model:{
            type: String,
            trim: true
        },
        battery:{
            type: String,
            trim: true
        },
        screenSize:{
            type: String,
            trim: true
        }
    }],
    variants:[{
        storage:{
            type: String,
            trim: true
        },
        ram:{
            type: String,
            trim: true
        }
    }],
    colors:[{
       type: String,
       trim: true
    }],
    category:{
        type: Schema.Types.ObjectId,
        ref: 'Category'
    }
}, {
    timestamps: true
});

const autoPopulate = function (next) {
    this.populate('category');
    next();
}
ProductModel
      .pre('find', autoPopulate)
      .pre('findOne', autoPopulate)

module.exports = mongoose.model('Product', ProductModel);