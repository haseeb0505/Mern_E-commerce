const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
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
            color: {
                type: String,
                required: true
            },
            size: {
                type: String,
                required: true
            }
        }
    ],
    amount: {
        type: Number,
        required: true
    },
    address: {
        type: Object,
        required: true
    },
    status: {
        type: String,
        default: "pending"
    }
}, {
    timestamps: true

});

module.exports = mongoose.model('Order', OrderSchema);