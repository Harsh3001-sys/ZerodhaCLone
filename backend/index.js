require("dotenv").config();
const express = require("express");

const app = express();
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3002;
const url = process.env.MONGO_URL;
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(cors());

const PositionsModel = require("./model/PositionsModel");
const HoldingsModel = require("./model/HoldingsModel");
const OrdersModel = require("./model/OrdersModel");

// app.get("/addPositions", async (req, res) => {
//     let tempPositions = [
//         {
//             product: "CNC",
//             name: "EVEREADY",
//             qty: 2,
//             avg: 316.27,
//             price: 312.35,
//             net: "+0.58%",
//             day: "-1.24%",
//             isLoss: true,
//         },
//         {
//             product: "CNC",
//             name: "JUBLFOOD",
//             qty: 1,
//             avg: 3124.75,
//             price: 3082.65,
//             net: "+10.04%",
//             day: "-1.35%",
//             isLoss: true,
//         },
//     ];

//     tempPositions.forEach((item) => {
//         let newPosition = new PositionsModel({
//             product: item.product,
//             name: item.name,
//             qty: item.qty,
//             avg: item.avg,
//             price: item.price,
//             net: item.net,
//             day: item.day,
//             isLoss: item.isLoss,
//         });

//         newPosition.save();
//     });
//     res.send("Positions added");
// })

app.listen(PORT, () => {
    console.log("App started");
    mongoose.connect(url);
    console.log("Connected to MongoDB");
})

app.get("/getPositions", async (req, res) => {
    const positions = await PositionsModel.find({});
    res.send(positions);
});

app.get("/getHoldings", async (req, res) => {
    const holdings = await HoldingsModel.find({});
    res.send(holdings);
});

app.get("/getOrders", async (req, res) => {
    const orders = await OrdersModel.find({});
    res.send(orders);
});

app.post("/newOrder", async (req, res) => {
    let newOrder = new OrdersModel({
        name: req.body.name,
        qty: req.body.qty,
        price: req.body.price,
        mode: req.body.mode,
    });
    await newOrder.save();
    res.send("Order created");
});