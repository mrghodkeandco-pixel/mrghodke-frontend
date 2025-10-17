import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'
import ProductDetail from './pages/ProductDetail'
import Cart from './pages/Cart'
import About from './pages/About'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import OrderSummary from './pages/OrderSummary'
import Login from './pages/Login'
import Signup from './pages/Signup'
import { AuthProvider } from './context/AuthContext'
import { CartProvider } from './context/CartContext'

export default function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <div className="app">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/products/:slug" element={<ProductDetail />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/order-summary" element={<OrderSummary />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </CartProvider>
    </AuthProvider>
  )
}