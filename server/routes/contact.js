const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

// POST /api/contact - submit a contact form
router.post('/', async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;
    if (!name || !email || !message) return res.status(400).json({ message: 'Name, email and message are required' });
    const doc = await Contact.create({ name, email, phone, message });
    res.json({ message: 'Submitted', id: doc._id });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
