const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const OrderController = require("./src/controllers/order");
const path = require('path');

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
const app = express();

app.use(bodyParser.json());


// Routes (We can also manage a different routes file if the application grows)
// Note: We can implement authentication middleware to secure the routes. Since this is basic functionality, we are not implementing it.
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, 'src/view/placeOrder.html'));
});

app.get("/view", (req, res) => {
  res.sendFile(path.join(__dirname, 'src/view/listItems.html'));
});

app.post("/api/orders", OrderController.create);
app.get("/api/orders", OrderController.getAll);

mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log("Connected to Database");
  let PORT = parseInt(process.env.PORT) || 5000;
  app.listen(PORT);
  console.log(`Server Listning on PORT ${PORT}`)
});
