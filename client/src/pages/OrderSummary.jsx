import React from 'react'

export default function OrderSummary(){
  const order = JSON.parse(localStorage.getItem('lastOrder')||'null')
  if(!order) return <p>No recent order found.</p>

  return (
    <div>
      <h1 style={{fontFamily:'Playfair Display, serif'}}>Order Summary</h1>
      <p>Order placed on: {new Date(order.createdAt).toLocaleString()}</p>
      <div style={{marginTop:12}}>
        {order.items.map(i=> (
          <div key={i._id} style={{display:'flex',justifyContent:'space-between',padding:8,background:'white',borderRadius:6,marginBottom:8}}>
            <div>{i.name} x{i.qty}</div>
            <div>₹{i.price * i.qty}</div>
          </div>
        ))}
        <div style={{textAlign:'right',fontWeight:700}}>Total: ₹{order.total}</div>
      </div>
    </div>
  )
} 
const lastOrder = JSON.parse(localStorage.getItem('lastOrder'))
