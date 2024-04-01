const express = require('express')
const adminRoutes = require('./routes/admin.js')
const shopRoutes = require('./routes/shop')
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get("/", (req, res, next)=>{
    console.log('root route')
    res.send('<h1> response from  / route</h1>')
})
app.use('/admin',adminRoutes)
app.use('/shop', shopRoutes)
app.listen(3000, ()=> console.log('listening on port 3000'))