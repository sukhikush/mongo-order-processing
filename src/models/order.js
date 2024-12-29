const { ItemSchema } = require("./item");
const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  customerName: { type: String, required: true },
  items: [ItemSchema],
  totalAmount: { type: Number, required: true },
});

const Order = mongoose.model("Order", OrderSchema);
module.exports = { Order, OrderSchema };
