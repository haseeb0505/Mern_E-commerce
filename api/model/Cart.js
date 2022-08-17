const mongoose = require('mongoose');

const CartSchema = new mongoose.Schema({

    userId: {
        type: String,
        required: true
    },
    products: [
        {
            productId: {
                type: String,
                required: true
            },
            quantity: {
                type: Number,
                required: true,
                default: 1

            },
            size: {
                type: String,
                required: true
            },
            color: {
                type: String,
                required: true

            }
        }
    ]


}, {
    timestamps: true

});

module.exports = mongoose.model('Cart', CartSchema);