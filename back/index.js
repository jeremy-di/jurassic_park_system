const express = require('express');
const cors = require('cors')
const db = require('./db/db')
const userRoutes = require('./routes/userRoutes')
const dinosaurRoutes = require('./routes/dinosaurRoutes')
const dietRoutes = require('./routes/dietRoutes')
const paddockRoutes = require('./routes/paddockRoutes')
const path = require('path')
require('./middlewares/auth')

const app = express();

db()


app.use(cors({
    origin: "*",
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: "Origin, X-Requested-With, x-access-token, role, Content, Accept, Content-Type, Authorization"
}));
app.use(express.json())
app.listen(process.env.API_PORT, () => console.log(`Connecté sur le port ${process.env.API_PORT}`));

app.use('/', userRoutes)
app.use('/dino', dinosaurRoutes)
app.use('/diet', dietRoutes)
app.use('/paddock', paddockRoutes)
app.use('/images', express.static(path.join(__dirname, 'images')))