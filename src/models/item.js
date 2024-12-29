const mongoose = require("mongoose");

const ItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
});

const Item = mongoose.model("Item", ItemSchema);

module.exports = { Item, ItemSchema };
