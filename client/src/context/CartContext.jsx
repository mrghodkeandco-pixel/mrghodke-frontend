import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState(() => {
    const saved = localStorage.getItem('cart');
    return saved ? JSON.parse(saved) : [];
  });

  // Add item
  const addToCart = (product, qty = 1) => {
    setItems(prev => {
      const exists = prev.find(i => i._id === product._id || i.slug === product.slug);
      if (exists) {
        return prev.map(i => (i._id === product._id || i.slug === product.slug ? { ...i, qty: i.qty + qty } : i));
      } else {
        return [...prev, { ...product, qty }];
      }
    });
  };

  // Update quantity
  const qtyUpdate = (id, delta) => {
    setItems(prev =>
      prev.map(i => (i._id === id || i.slug === id ? { ...i, qty: Math.max(1, (i.qty || 1) + delta) } : i))
    );
  };

  // Remove item
  const removeFromCart = (id) => {
    setItems(prev => prev.filter(i => i._id !== id && i.slug !== id));
  };

  // Sync with localStorage
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(items));
  }, [items]);

  return (
    <CartContext.Provider value={{ items, addToCart, removeFromCart, qtyUpdate }}>
      {children}
    </CartContext.Provider>
  );
}; useEffect(() => {
  if(user) axios.post(`${import.meta.env.VITE_API_URL}/api/cart`, { items }, { headers: { Authorization: `Bearer ${token}` } });
}, [items, user]);