const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const OrdersModel = new Schema({
    product:{
        type: Schema.Types.ObjectId,
        ref: 'Product'
    },
    quantity:{
        type: Number,
        trim: true
    },
    total:{
        type: Number,
        trim: true
    },
    user:{
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    status:{
        type: String,
        enum :['Placed','Forwarded','Delivered'],
        default: 'Placed',
        trim: true
    },
    shippingCharges:{
        type: Number,
        trim: true
    },
    grandTotal:{
        type: Number,
        trim: true
    }
}, {
    timestamps: true
});

const autoPopulate = function (next) {
    this.populate('product');
    this.populate('user');
    next();
}
OrdersModel
      .pre('find', autoPopulate)
      .pre('findOne', autoPopulate)

module.exports = mongoose.model('Order', OrdersModel);