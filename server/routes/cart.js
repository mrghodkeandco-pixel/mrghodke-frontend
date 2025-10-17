const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Cart = require('../models/Cart');
const Product = require('../models/Product');

// GET /api/cart - get user's cart
router.get('/', auth, async (req, res) => {
  try {
    const cart = await Cart.findOne({ user: req.user.id }).populate('items.product');
    res.json(cart || { items: [] });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// POST /api/cart/add - add product to cart
router.post('/add', auth, async (req, res) => {
  try {
    const { productId, qty = 1 } = req.body;
    const product = await Product.findById(productId);
    if (!product) return res.status(404).json({ message: 'Product not found' });

    let cart = await Cart.findOne({ user: req.user.id });
    if (!cart) cart = await Cart.create({ user: req.user.id, items: [] });

    const existing = cart.items.find(i => i.product.toString() === productId);
    if (existing) existing.qty += qty; else cart.items.push({ product: productId, qty });
    await cart.save();
    const populated = await cart.populate('items.product');
    res.json(populated);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// POST /api/cart/remove - remove product or reduce qty
router.post('/remove', auth, async (req, res) => {
  try {
    const { productId } = req.body;
    let cart = await Cart.findOne({ user: req.user.id });
    if (!cart) return res.json({ items: [] });
    cart.items = cart.items.filter(i => i.product.toString() !== productId);
    await cart.save();
    const populated = await cart.populate('items.product');
    res.json(populated);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
