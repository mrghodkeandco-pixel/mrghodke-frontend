const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Cart = require('../models/Cart');
const Order = require('../models/Order');

// POST /api/orders/checkout - create an order from cart
router.post('/checkout', auth, async (req, res) => {
  try {
    const cart = await Cart.findOne({ user: req.user.id }).populate('items.product');
    if (!cart || cart.items.length === 0) return res.status(400).json({ message: 'Cart is empty' });

    const items = cart.items.map(i => ({ product: i.product._id, qty: i.qty, price: i.product.price }));
    const total = items.reduce((s,i)=>s + i.qty * i.price, 0);

    const order = await Order.create({ user: req.user.id, items, total, shipping: req.body.shipping || {} });
    // clear cart
    cart.items = [];
    await cart.save();

    res.json({ orderId: order._id });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
