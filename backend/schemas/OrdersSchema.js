const { Schema } = require("mongoose");
const mongoose = require("mongoose");
const OrdersSchema = new Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    name: String,
    qty: Number,
    price: Number,
    mode: String,
    status: {
        type: String,
        default: "PENDING",
    },
});

module.exports = OrdersSchema;