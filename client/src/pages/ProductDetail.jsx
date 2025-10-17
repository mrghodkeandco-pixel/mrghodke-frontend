import React, { useEffect, useState, useContext } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { AuthContext } from '../context/AuthContext'
import { CartContext } from '../context/CartContext'

export default function ProductDetail(){
  const { slug } = useParams()
  const [product, setProduct] = useState(null)
  const [qty, setQty] = useState(1)
  const [activeImage, setActiveImage] = useState(null)
  const navigate = useNavigate()
  const { user } = useContext(AuthContext)
  const { addToCart } = useContext(CartContext)

  useEffect(()=>{
  axios.get(`${process.env.REACT_APP_API_URL || 'http://localhost:5000'}/api/products/${slug}`)
      .then(res=>setProduct(res.data))
      .catch(err=>console.error(err))
  },[slug])

  useEffect(()=>{
    if(product){
      setActiveImage(product.image)
    }
  },[product])

  async function handleAdd(){
    if(!product) return
    await addToCart(product, qty)
    navigate('/cart')
  }

  if(!product) return <p>Loading...</p>

  return (
    <div className="product-detail">
      <div className="gallery">
        <div className="main-image">
          <img src={activeImage || product.image} alt={product.name} />
        </div>
        <div className="thumbs">
          {/* For now product.image may be single; render it as single thumb */}
          <button className={`thumb ${activeImage===product.image? 'active':''}`} onClick={()=>setActiveImage(product.image)}>
            <img src={product.image} alt={product.name} />
          </button>
        </div>
      </div>

      <div className="product-info">
        <h1 style={{fontFamily:'Playfair Display, serif'}}>{product.name}</h1>
        <p className="price">₹{product.price}</p>
        <p className="prod-desc">{product.description}</p>

        <div className="buy-row">
          <div className="qty-control">
            <button className="qty-btn" onClick={()=>setQty(Math.max(1,qty-1))}>−</button>
            <div className="qty-num">{qty}</div>
            <button className="qty-btn" onClick={()=>setQty(qty+1)}>+</button>
          </div>

          <button onClick={handleAdd} className="add-btn">Add to Cart</button>
        </div>
      </div>
    </div>
  )
}
axios.get(`${import.meta.env.VITE_API_URL}/api/products/${slug}`)