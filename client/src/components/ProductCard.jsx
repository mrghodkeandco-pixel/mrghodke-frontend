import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CartContext } from '../context/CartContext';

// Local images mapping — filenames must match product.image
import anjeer from '../anjeer barfi.jpeg';
import gulkand from '../gulkand barfi.jpeg';
import mangoChoco from '../mango choclate barfi.jpeg';
import mango from '../mango barfi.jpeg';
import pista from '../pista barfi.jpeg';
import kandhi from '../kandhi pedha.jpeg';
import keshari from '../keshari pedha.jpeg';
import jumbo from '../jumbo keshri pedha.jpeg';

const localImages = {
  'anjeer barfi.jpeg': anjeer,
  'gulkand barfi.jpeg': gulkand,
  'mango choclate barfi.jpeg': mangoChoco,
  'mango barfi.jpeg': mango,
  'pista barfi.jpeg': pista,
  'kandhi pedha.jpeg': kandhi,
  'keshari pedha.jpeg': keshari,
  'jumbo keshri pedha.jpeg': jumbo
};

export default function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);

  return (
    <motion.article className="product-card" whileHover={{ y: -6 }} layout>
      <Link to={`/products/${product.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
        <div style={{ overflow: 'hidden', borderRadius: 10 }}>
          <img src={localImages[product.image] || product.image} alt={product.name} />
        </div>
      </Link>
      <div className="meta">
        <div className="title">{product.name}</div>
        <div className="price">₹{product.price}</div>
        {product.description && (
          <div style={{ color: 'var(--muted)', fontSize: 13, marginTop: 6 }}>{product.description}</div>
        )}
        <div style={{ marginTop: 8 }}>
          <button
            onClick={() => addToCart(product, 1)}
            style={{
              padding: '6px 10px',
              background: 'var(--gold)',
              border: 'none',
              borderRadius: 6,
              cursor: 'pointer'
            }}
          >
            Add
          </button>
        </div>
      </div>
    </motion.article>
  );
}