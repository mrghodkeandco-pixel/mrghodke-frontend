const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  image: { type: String },
  description: { type: String },
  featured: { type: Boolean, default: false }
}, { timestamps: true });

module.exports = mongoose.model('Product', ProductSchema);
