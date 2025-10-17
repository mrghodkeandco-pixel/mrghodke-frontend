import React, { useContext, useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import { CartContext } from '../context/CartContext'
import logo from '../logo.png'
import aChoco from '../mango choclate barfi.jpeg'
import mango from '../mango barfi.jpeg'
import gulkand from '../gulkand barfi.jpeg'
import anjeer from '../anjeer barfi.jpeg'
import pista from '../pista barfi.jpeg'
import pedha from '../keshari pedha.jpeg'
import jumbo from '../jumbo keshri pedha.jpeg'
import kandhi from '../kandhi pedha.jpeg'

export default function Navbar(){
  const { totalItems } = useContext(CartContext)
  const { user, logout } = useContext(AuthContext)
  const [shopOpen, setShopOpen] = useState(false)
  const shopRef = useRef()

  useEffect(()=>{
    function onDoc(e){
      if(!shopRef.current) return
      if(!shopRef.current.contains(e.target)) setShopOpen(false)
    }
    document.addEventListener('click', onDoc)
    return ()=>document.removeEventListener('click', onDoc)
  },[])

  return (
    <header className="navbar header-extended">
      <div className="navbar-left">
        <Link to="/" className="brand-link"><img src={logo} alt="M.R Ghodke Mithaiwale"/></Link>
        <div className="quick">
          <Link to="/products" className="icon-btn" aria-label="Shop">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 7V6a6 6 0 0 1 12 0v1" stroke="#5b3f2b" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M20 7h-16l1.5 11h13L20 7z" stroke="#5b3f2b" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M9 11v2" stroke="#5b3f2b" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
          <div className="quick-text">Bestsellers</div>
        </div>
      </div>

      <div className="navbar-center">
        <div className="search-bar">
          <select className="category-select" aria-label="Category">
            <option>All</option>
            <option>Gifts</option>
            <option>Sweets</option>
            <option>Snacks</option>
          </select>
          <input className="search-input-wide" placeholder="Search for anything" aria-label="Search" />
          <button className="search-go" aria-label="Search button">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 21l-4.35-4.35" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><circle cx="11" cy="11" r="6" stroke="#fff" strokeWidth="2"/></svg>
          </button>
        </div>
      </div>

      <div className="navbar-right">
        <button className="icon-btn" aria-label="profile">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="8" r="3" stroke="#5b3f2b" strokeWidth="1.5"/><path d="M5.5 20c1.5-4 11-4 13 0" stroke="#5b3f2b" strokeWidth="1.5" strokeLinecap="round"/></svg>
        </button>
        <Link to="/cart" className="cart-link">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 6h15l-1.5 9h-12z" stroke="#5b3f2b" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/><circle cx="10" cy="20" r="1" fill="#5b3f2b"/><circle cx="18" cy="20" r="1" fill="#5b3f2b"/></svg>
          {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
        </Link>
      </div>
    </header>
  )
}
