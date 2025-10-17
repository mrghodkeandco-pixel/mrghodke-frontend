const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// GET /api/products - list products (optionally filter by category)
router.get('/', async (req, res) => {
  try {
    const { category } = req.query;
    const filter = {};
    if (category) filter.category = category;
    const products = await Product.find(filter).sort({ createdAt: -1 });
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// GET /api/products/:slug - product details
router.get('/:slug', async (req, res) => {
  try {
    const product = await Product.findOne({ slug: req.params.slug });
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
