require("dotenv").config();
const express = require("express");

const app = express();
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3002;
const url = process.env.MONGO_URL;
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");

app.use(cookieParser());

app.use(bodyParser.json());
app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:3001"],
    credentials: true,
  })
);

const PositionsModel = require("./model/PositionsModel");
const HoldingsModel = require("./model/HoldingsModel");
const OrdersModel = require("./model/OrdersModel");
const UserModel = require("./model/UserModel");

const { Signup } = require("./controllers/AuthController");
const { Login } = require("./controllers/AuthController");
const { userVerification } = require("./middlewares/AuthMiddleware");
const verifyUser = require("./middlewares/verifyUser");
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

app.get("/getPositions", verifyUser, async (req, res) => {
  const positions = await PositionsModel.find({
    userId: req.userId,
  });
  res.send(positions);
});

app.get("/getHoldings", verifyUser, async (req, res) => {
  const holdings = await HoldingsModel.find({
    userId: req.userId,
  });
  res.send(holdings);
});

app.get("/getOrders", verifyUser, async (req, res) => {
  const orders = await OrdersModel.find({
    userId: req.userId,
  });
  res.send(orders);
});

app.post("/newOrder", verifyUser, async (req, res) => {
  const { name, qty, price, mode } = req.body;
  const user = await UserModel.findById(req.userId);
  if (mode === "SELL") {
    const existingOrder = await HoldingsModel.findOne({
      userId: req.userId,
      name: req.body.name,
    });

    // ❌ No stock found
    if (!existingOrder) {
      return res.status(400).json({
        message: "You don't own this stock",
      });
    }

    // ❌ Not enough quantity
    if (existingOrder.qty < qty) {
      return res.status(400).json({
        message: "Insufficient stock quantity",
      });
    }
  }

  if(mode === "BUY"){
    const totalCost = qty * price;

    if(user.balance < totalcost){
       return res.status(400).json({
        message: "Insufficient balance",
      });
    }

    user.balance -= totalCost;
    await user.save();
  }

  let newOrder = await OrdersModel.create({
    userId: req.userId,
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
    status: "PENDING",
  });

  setTimeout(async () => {
    const order = await OrdersModel.findById(newOrder._id);
    if (!order) return;

    if (order.mode === "BUY") {
      const existingOrder = await HoldingsModel.findOne({
        userId: order.userId,
        name: order.name,
      });

      if (existingOrder) {
        const totalQty = existingOrder.qty + order.qty;
        const newAvg = ((existingOrder.avg * existingOrder.qty) + (order.price * order.qty)) / totalQty;

        existingOrder.qty = totalQty;
        existingOrder.avg = newAvg;
        existingOrder.price = order.price;
        await existingOrder.save();
      } else {
        await HoldingsModel.create({
          userId: order.userId,
          name: order.name,
          qty: order.qty,
          avg: order.price,
          price: order.price,
          net: "0%",
          day: "0%",
        });
      }
    } else if (order.mode === "SELL") {
      const existingOrder = await HoldingsModel.findOne({
        userId: order.userId,
        name: order.name,
      });

      if (!existingOrder) return;


      existingOrder.qty -= order.qty;
      if (existingOrder.qty <= 0) {
        await HoldingsModel.deleteOne({ _id: existingOrder._id });
      } else {
        await existingOrder.save();
      }
      const user = await UserModel.findById(order.userId);
      user.balance += order.qty * order.price;
      await user.save();
    }
    order.status = "EXECUTED";
    await order.save();
  }, 5000);
});

app.post("/signup", Signup);
app.post("/login", Login);
app.post("/auth", (req, res) => {
  // console.log("COOKIE:", req.cookies);
  const token = req.cookies.token;

  if (!token) {
    return res.json({ status: false });
  }

  try {
    jwt.verify(token, process.env.JWT_SECRET);
    return res.json({ status: true });
  } catch {
    return res.json({ status: false });
  }
});
app.post("/logout", (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    sameSite: "none",
    secure: false,
  }); // ✅ BEST WAY

  res.json({
    success: true,
    message: "Logged out successfully",
  });
});

app.get("/me", verifyUser, async (req, res) => {
  const user = await UserModel.findById(req.userId);
  res.json(user);
});