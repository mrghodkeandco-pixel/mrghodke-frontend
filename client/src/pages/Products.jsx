import React, { useEffect, useState, useContext } from 'react'
import axios from 'axios'
import ProductCard from '../components/ProductCard'
import { CartContext } from '../context/CartContext'
import aChoco from '../mango choclate barfi.jpeg'
import mango from '../mango barfi.jpeg'
import gulkand from '../gulkand barfi.jpeg'
import anjeer from '../anjeer barfi.jpeg'
import pista from '../pista barfi.jpeg'
import pedha from '../keshari pedha.jpeg'
import jumbo from '../jumbo keshri pedha.jpeg'
import kandhi from '../kandhi pedha.jpeg'

export default function Products(){
  const [products, setProducts] = useState([])
  const [category, setCategory] = useState('')
  const { addToCart } = useContext(CartContext)

  useEffect(()=>{
  const url = `${process.env.REACT_APP_API_URL || 'http://localhost:5000'}/api/products` + (category ? `?category=${category}` : '')
    axios.get(url).then(res=>setProducts(res.data)).catch(err=>console.error(err))
  },[category])

  return (
    <div>
      <h1 style={{fontFamily:'Playfair Display, serif'}}>Shop</h1>

      <section style={{margin:'1.25rem 0'}}>
        <h3 style={{margin:'0 0 8px 0'}}>Shop Picks</h3>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(200px,1fr))',gap:12}}>
          {[
            {name:"Ajoba's Aam Choco Barfi", price:525, img:aChoco, slug:'ajobas-aam-choco-barfi'},
            {name:'Aamba Barfi (Mango barfi)', price:525, img:mango, slug:'aamba-barfi'},
            {name:'Gulkand Barfi', price:525, img:gulkand, slug:'gulkand-barfi'},
            {name:'Anjeer Barfi', price:525, img:anjeer, slug:'anjeer-barfi'},
            {name:'Pista Barfi', price:525, img:pista, slug:'pista-barfi'},
            {name:"Ajoba's Pedha (Keshari Pedha)", price:350, img:pedha, slug:'ajobas-pedha-keshri'},
            {name:"Ajoba's Big Blessing (Jumbo Keshari Pedha)", price:375, img:jumbo, slug:'ajobas-big-blessing-jumbo-keshri'},
            {name:'Classic Kandhi Pedha', price:350, img:kandhi, slug:'classic-kandhi-pedha'}
          ].map(p=> (
            <div key={p.slug} style={{background:'white',padding:12,borderRadius:8,display:'flex',gap:12,alignItems:'center',boxShadow:'0 8px 20px rgba(91,63,43,0.06)'}}>
              <img src={p.img} alt={p.name} style={{width:84,height:84,objectFit:'cover',borderRadius:8}} />
              <div style={{flex:1}}>
                <div style={{fontWeight:600}}>{p.name}</div>
                <div style={{color:'var(--muted)',marginTop:6}}>₹{p.price} / 1/2kg</div>
              </div>
              <div>
                <button onClick={()=>addToCart({ _id: p.slug, name: p.name, price: p.price, image: p.img },1)} style={{padding:'8px 12px',background:'var(--gold)',border:'none',borderRadius:8,cursor:'pointer'}}>Add</button>
              </div>
            </div>
          ))}
        </div>
      </section>
      <div style={{margin:'1rem 0',display:'flex',gap:8}}>
        <button onClick={()=>setCategory('')} style={{padding:'8px 12px',borderRadius:8,background:'white',border:'1px solid #efe6db'}}>All</button>
        <button onClick={()=>setCategory('sweets')} style={{padding:'8px 12px',borderRadius:8,background:'white',border:'1px solid #efe6db'}}>Sweets</button>
        <button onClick={()=>setCategory('snacks')} style={{padding:'8px 12px',borderRadius:8,background:'white',border:'1px solid #efe6db'}}>Snacks</button>
        <button onClick={()=>setCategory('festive-boxes')} style={{padding:'8px 12px',borderRadius:8,background:'white',border:'1px solid #efe6db'}}>Festive Boxes</button>
      </div>

      <div className="products-grid">
        {products.map(p=> (
          <ProductCard key={p._id} product={p} />
        ))}
      </div>
    </div>
  )
}
axios.get(`${import.meta.env.VITE_API_URL}/api/products`)