import React, { useEffect, useState } from 'react'
import heroImg from '../hp.jpeg'
import axios from 'axios'
import { Link } from 'react-router-dom'
import ProductCard from '../components/ProductCard'

export default function Home(){
  const [featured, setFeatured] = useState([])

  useEffect(()=>{
  axios.get(`${process.env.REACT_APP_API_URL || 'http://localhost:5000'}/api/products?featured=true`)
      .then(res=>setFeatured(res.data))
      .catch(err=>console.error(err))
  },[])

  return (
    <div>
      <section className="hero">
        <div className="hero-inner">
          <h1 style={{fontFamily:'Playfair Display, serif',fontSize:44}}>
            <img src={'/src/logo.png'} alt="M.R Ghodke Mithaiwale" style={{height:64}} />
          </h1>
          <p style={{maxWidth:520,color:'var(--muted)',marginTop:12}}>Discover handcrafted sweets, delivered fresh. Our recipes are rooted in tradition and presented with modern elegance.</p>
          <div style={{display:'flex',gap:12,marginTop:18}}>
            <Link to="/products" className="hero-cta">Shop Now</Link>
            <Link to="/about" style={{display:'inline-block',padding:'12px 18px',borderRadius:8,border:'1px solid #efe6db',textDecoration:'none'}}>Our Story</Link>
          </div>
        </div>

        <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
          <img src={heroImg} alt="hero" className="hero-image" />
        </div>
      </section>

      <section style={{marginTop:28}}>
      
        <div className="products-grid">
          {featured.map(p=> (
            <ProductCard key={p._id} product={p} />
          ))}
        </div>
      </section>
    </div>
  )
}
axios.get(`${import.meta.env.VITE_API_URL}/api/products/featured`)
  .then(res => setFeatured(res.data))