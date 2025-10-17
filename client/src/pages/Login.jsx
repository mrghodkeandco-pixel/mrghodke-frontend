import React, { useState, useContext } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

export default function Login(){
  const [form, setForm] = useState({email:'',password:''})
  const [err, setErr] = useState(null)
  const navigate = useNavigate()
  const { save } = useContext(AuthContext)

  async function submit(e){
    e.preventDefault(); setErr(null)
    try{
  const res = await axios.post(`${process.env.REACT_APP_API_URL || 'http://localhost:5000'}/api/auth/login`, form)
      save(res.data)
      navigate('/')
    }catch(er){ setErr(er?.response?.data?.message || 'Login failed') }
  }

  return (
    <div style={{maxWidth:420}}>
      <h1 style={{fontFamily:'Playfair Display, serif'}}>Login</h1>
      {err && <div style={{color:'crimson'}}>{err}</div>}
      <form onSubmit={submit} style={{display:'flex',flexDirection:'column',gap:8}}>
        <input value={form.email} onChange={e=>setForm({...form,email:e.target.value})} placeholder="Email" />
        <input value={form.password} onChange={e=>setForm({...form,password:e.target.value})} placeholder="Password" type="password" />
        <button style={{padding:10,background:'var(--gold)',borderRadius:6}}>Login</button>
      </form>
    </div>
  )
}
axios.post(`${import.meta.env.VITE_API_URL}/api/auth/login`, {
  email,
  password
})
.then(res => {
  // Save token or user info
})
.catch(err => console.error(err))