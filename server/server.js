const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

// Basic route
app.get('/api/ping', (req, res) => res.json({ message: 'Server is up' }));

// Routes
const productsRouter = require('./routes/products');
app.use('/api/products', productsRouter);

const authRouter = require('./routes/auth');
app.use('/api/auth', authRouter);

const contactRouter = require('./routes/contact');
app.use('/api/contact', contactRouter);

const cartRouter = require('./routes/cart');
app.use('/api/cart', cartRouter);

const ordersRouter = require('./routes/orders');
app.use('/api/orders', ordersRouter);

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/mrGhodke', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected')).catch(err => console.error('MongoDB connection error:', err));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
app.get("/", (req, res) => {
  res.send("✅ Server running fine!");
});