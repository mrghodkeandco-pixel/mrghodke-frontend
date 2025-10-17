import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import axios from 'axios';

export default function Cart() {
  const { items, qtyUpdate, removeFromCart } = useContext(CartContext);
  const navigate = useNavigate();
  const [backendItems, setBackendItems] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch latest product info from backend
  useEffect(() => {
    if (items.length === 0) {
      setLoading(false);
      return;
    }

    const fetchProducts = async () => {
      try {
        const ids = items.map(i => i._id || i.slug);
        const res = await axios.post(`${import.meta.env.VITE_API_URL}/api/products/batch`, { ids });
        setBackendItems(res.data);
      } catch (err) {
        console.error('Error fetching backend products:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [items]);

  const total = items.reduce((s, i) => s + (i.price || 0) * (i.qty || 0), 0);

  function checkout() {
    // Store order in localStorage as placeholder
    localStorage.setItem(
      'lastOrder',
      JSON.stringify({ items, total, createdAt: new Date() })
    );
    localStorage.removeItem('cart');
    navigate('/order-summary');
  }

  if (loading) return <h2>Loading your cart...</h2>;

  return (
    <div>
      <h1 style={{ fontFamily: 'Playfair Display, serif' }}>Your Cart</h1>
      {items.length === 0 ? (
        <p>
          Your cart is empty. <Link to="/products">Shop now</Link>
        </p>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: 16 }}>
          <div>
            {items.map(item => {
              // Use backend info if available
              const backendItem = backendItems.find(b => b._id === item._id || b.slug === item.slug);
              const price = backendItem ? backendItem.price : item.price;

              return (
                <div key={item._id || item.slug} className="cart-item">
                  <img src={item.image} alt={item.name} />
                  <div className="cart-meta">
                    <div className="cart-name">{item.name}</div>
                    <div className="cart-price">₹{price}</div>
                    <div className="cart-controls">
                      <button onClick={() => qtyUpdate(item._id || item.slug, -1)} className="qty-btn">−</button>
                      <div className="qty-num">{item.qty}</div>
                      <button onClick={() => qtyUpdate(item._id || item.slug, 1)} className="qty-btn">+</button>
                      <button onClick={() => removeFromCart(item._id || item.slug)} className="remove-btn">Remove</button>
                    </div>
                  </div>
                  <div className="cart-line-total">₹{(price || 0) * (item.qty || 0)}</div>
                </div>
              );
            })}
          </div>

          <aside style={{ background: 'white', padding: 16, borderRadius: 8, boxShadow: '0 8px 20px rgba(91,63,43,0.04)' }}>
            <h3 style={{ marginTop: 0 }}>Order Summary</h3>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 8 }}>
              <div>Subtotal</div>
              <div>₹{total}</div>
            </div>
            <div style={{ marginTop: 12 }}>
              <button onClick={checkout} style={{ width: '100%', padding: '10px 14px', background: 'var(--gold)', borderRadius: 6, border: 'none', cursor: 'pointer' }}>
                Proceed to Checkout
              </button>
            </div>
            <div style={{ marginTop: 12, borderTop: '1px solid #efe6db', paddingTop: 12, fontSize: 14, color: '#3b3b3b' }}>
              <div style={{ marginBottom: 6, fontWeight: 600 }}>To place your order by phone</div>
              <div>
                Call: <a href="tel:+919822659209">+91 98226 59209</a> / <a href="tel:+919823796409">+91 98237 96409</a>
              </div>
            </div>
          </aside>
        </div>
      )}
    </div>
  );
}