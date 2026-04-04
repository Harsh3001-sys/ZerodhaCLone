const { Schema } = require("mongoose");
const mongoose = require("mongoose");

const HoldingsSchema = new Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    name: String,
    qty: Number,
    avg: Number,
    price: Number,
    net: String,
    day: String,
});

module.exports = HoldingsSchema;