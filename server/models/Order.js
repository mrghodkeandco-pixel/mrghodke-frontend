const mongoose = require('mongoose');

const OrderItemSchema = new mongoose.Schema({
  product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
  qty: { type: Number, default: 1 },
  price: { type: Number, required: true }
});

const OrderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  items: [OrderItemSchema],
  total: { type: Number, required: true },
  status: { type: String, default: 'pending' },
  shipping: { type: Object }
}, { timestamps: true });

module.exports = mongoose.model('Order', OrderSchema);
