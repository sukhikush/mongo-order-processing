const { startSession } = require("mongoose");
const { Order } = require("../models/order");

class OrderService {
  async createOrder(orderData) {
    const session = await startSession();
    session.startTransaction();

    try {
      const { items } = orderData;
      const totalAmount = items.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );
      orderData.totalAmount = totalAmount;

      const order = await Order.create([orderData], {
        session,
      });
      await session.commitTransaction();
      session.endSession();
      return order;
    } catch (error) {
      await session.abortTransaction();
      session.endSession();
      throw error;
    }
  }

  async getAll() {
    try {
      return Order.find();
    } catch (error) {
      throw error;
    }
  }
}

module.exports = OrderService;
