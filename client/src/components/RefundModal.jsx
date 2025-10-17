import React from 'react'

export default function RefundModal({ open, onClose, children }){
  if(!open) return null

  return (
    <div style={{position:'fixed',inset:0,background:'rgba(0,0,0,0.4)',display:'flex',alignItems:'center',justifyContent:'center',zIndex:1000}} onClick={onClose}>
      <div style={{width:'min(900px,94%)',background:'white',borderRadius:10,padding:20,maxHeight:'90vh',overflow:'auto'}} onClick={e=>e.stopPropagation()}>
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
          <h3 style={{margin:0,fontFamily:'Playfair Display, serif'}}>Cancellation & Refund Policy</h3>
          <button onClick={onClose} style={{border:'none',background:'transparent',fontSize:18,cursor:'pointer'}}>✕</button>
        </div>
        <div style={{marginTop:12,lineHeight:1.6,color:'var(--muted)'}}>
          {children}
        </div>
      </div>
    </div>
  )
}
axios.post(`${import.meta.env.VITE_API_URL}/api/refund`, { orderId, reason })
  .then(res => alert("Refund request submitted"))
  .catch(err => console.error(err))