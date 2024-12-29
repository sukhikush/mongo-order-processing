const OrderService = require("../services/order");

class OrderController {
  constructor() {
    // Constructor dependency injection
    this.orderService = new OrderService();
  }
  create = async (req, res) => {
    try {
      const { customerName, items } = req.body;

      if (!customerName || !Array.isArray(items) || items.length === 0) {
        throw new Error("Invalid order data");
      }

      const orderData = {
        customerName,
        items,
      };

      const order = await this.orderService.createOrder(orderData);
      return res.status(201).json(order);
    } catch (error) {
      return res.status(400).json(error.message);
    }
  };

  // Note: Returned entire order list. In a real-world application, we should return based on userId and implement pagination and filtering.
  getAll = async (req, res) => {
    try {
      const order = await this.orderService.getAll();
      return res.status(201).json(order);
    } catch (error) {
      return res.status(400).json(error.message);
    }
  };
}

module.exports = new OrderController();
