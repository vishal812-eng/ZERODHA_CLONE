require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const { HoldingsModel } = require("./model/HoldingsModel");
const { PositionsModel } = require("./model/PostionsModel");
const { OrdersModel } = require("./model/OrdersModel");
const authRoute = require("./Routes/AuthRoute");
const verifyToken = require("./middleware/verifyToken");

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;

const app = express();

app.use(cors({
  origin: ["http://localhost:5173", "http://localhost:3000"],
  credentials: true                
}));
app.use(bodyParser.json());
app.use(express.json());
app.use(cookieParser());
app.use('/', authRoute);

app.get("/verify", verifyToken, (req, res) => {
  res.json({ success: true, user: req.user })
})

app.get('/allHoldings',verifyToken, async(req,res)=>{
    let allHoldings = await HoldingsModel.find({});
    res.json(allHoldings);
});

app.get('/allPositions',verifyToken, async(req,res)=>{
    let allPositions = await PositionsModel.find({});
    res.json(allPositions);
});

app.post('/newOrder',verifyToken, async(req,res)=>{
  let newOrder = new OrdersModel({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
  });
  newOrder.save();
  
  res.send("Order saved successfully")
  console.log("New order saved:");
});

app.get('/allOrders',verifyToken, async(req, res) => {
  let allOrders = await OrdersModel.find({})
  res.json(allOrders)
})

app.get('/logout', (req, res) => {
  res.clearCookie("token")
  res.json({ success: true })
})

app.listen(PORT,async () => {
  console.log("server is running on port " + PORT);
  try {
    await mongoose.connect(uri);
    console.log("MongoDB connected");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
});
