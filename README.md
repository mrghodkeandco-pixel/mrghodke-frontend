# M.R Ghodke Mithaiwale — MERN Sweet Shop

This repository contains a starter MERN eCommerce website for "M.R Ghodke Mithaiwale" — a minimal and elegant sweets shop.

Structure:
- client/ — React frontend
- server/ — Express backend

Quick start (develop):

1. Start MongoDB (locally or set MONGODB_URI in `.env` files)
2. In `server/`:
   - npm install
   - npm run dev
3. In `client/`:
   - npm install
   - npm start

Environment variables (create `.env` files in `server/` and `client/` as needed):

server/.env.example
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/mrGhodke
JWT_SECRET=your_jwt_secret
```

client/.env.example
```
REACT_APP_API_URL=http://localhost:5000/api
```

Deploy notes: project is ready to be deployed on Render (server) and Vercel/Netlify (client). See each folder README for details.
