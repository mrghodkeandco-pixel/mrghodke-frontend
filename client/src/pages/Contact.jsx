import React, { useState } from 'react'
import axios from 'axios'

export default function Contact(){
  const [form, setForm] = useState({name:'',email:'',phone:'',message:''})
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)

  function update(k,v){ setForm(prev=>({ ...prev, [k]: v })) }

  async function submit(e){
    e.preventDefault()
    setStatus(null)
    if(!form.name || !form.email || !form.message){ setStatus({type:'error',text:'Please fill name, email and message.'}); return }
    setLoading(true)
    try{
  const res = await axios.post(`${process.env.REACT_APP_API_URL || 'http://localhost:5000'}/api/contact`, form)
      setStatus({type:'success',text:'Thank you — your message has been sent.'})
      setForm({name:'',email:'',phone:'',message:''})
    }catch(err){
      setStatus({type:'error',text:err?.response?.data?.message || 'Submission failed'})
    }finally{ setLoading(false) }
  }

  return (
    <div style={{maxWidth:980,margin:'0 auto'}}>
      <h1 style={{fontFamily:'Playfair Display, serif'}}>Contact Us</h1>
  <p style={{maxWidth:720,color:'var(--muted)'}}>For orders and enquiries, fill the form below or email us at <a href="mailto:mrghodkeandco@gmail.com">mrghodkeandco@gmail.com</a></p>

      <div style={{display:'grid',gridTemplateColumns:'1fr 380px',gap:24,alignItems:'start'}}>
        <form onSubmit={submit} style={{background:'white',padding:20,borderRadius:8,display:'flex',flexDirection:'column',gap:10}}>
          {status && (
            <div style={{padding:10,borderRadius:6,background: status.type==='error'? '#ffe9e9' : 'var(--cream)',color: status.type==='error' ? 'crimson' : 'var(--brown)'}}>{status.text}</div>
          )}

          <input value={form.name} onChange={e=>update('name',e.target.value)} placeholder="Your name" style={{padding:10,borderRadius:6,border:'1px solid #eee'}} />
          <input value={form.email} onChange={e=>update('email',e.target.value)} placeholder="Email" style={{padding:10,borderRadius:6,border:'1px solid #eee'}} />
          <input value={form.phone} onChange={e=>update('phone',e.target.value)} placeholder="Phone (optional)" style={{padding:10,borderRadius:6,border:'1px solid #eee'}} />
          <textarea value={form.message} onChange={e=>update('message',e.target.value)} placeholder="Message" rows={6} style={{padding:10,borderRadius:6,border:'1px solid #eee'}} />
          <div style={{display:'flex',justifyContent:'flex-end'}}>
            <button disabled={loading} style={{padding:'10px 14px',background:'var(--gold)',border:'none',borderRadius:6,cursor:'pointer'}}>{loading? 'Sending...' : 'Send Message'}</button>
          </div>
        </form>

        <aside style={{display:'flex',flexDirection:'column',gap:12}}>
          <div style={{background:'white',padding:16,borderRadius:8}}>
            <h4 style={{marginTop:0}}>Visit Us</h4>
            <p style={{color:'var(--muted)'}}>M.R Ghodke Mithaiwale<br/>Shop Address, Pune, India</p>
            <p style={{color:'var(--muted)'}}>Mon - Sat: 9:00 AM - 8:00 PM<br/>Sun: 9:00 AM - 3:00 PM</p>
          </div>

          <div style={{background:'white',padding:0,borderRadius:8,overflow:'hidden'}}>
            {/* Use a search-based embed (works without a proprietary pb value) */}
            <iframe
              title="map"
              src="https://www.google.com/maps?q=Ashoka%20Center%2C%20Pune&output=embed"
              width="100%"
              height="250"
              style={{border:0}}
              allowFullScreen
              loading="lazy"
            ></iframe>
            <div style={{padding:10,display:'flex',justifyContent:'center'}}>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Ashoka%20Center%2C%20Pune"
                target="_blank"
                rel="noopener noreferrer"
                style={{padding:'8px 12px',background:'var(--gold)',color:'var(--brown)',borderRadius:8,textDecoration:'none'}}
              >
                Open in Google Maps
              </a>
            </div>
          </div>
        </aside>
      </div>
    </div>
  )
}
axios.post(`${import.meta.env.VITE_API_URL}/api/contact`, { name, email, message })
  .then(res => console.log(res.data))