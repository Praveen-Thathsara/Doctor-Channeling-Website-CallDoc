import express from 'express';
import cors from 'cors';
import 'dotenv/config'
import connectedDB from './config/mongodb.js';


//app config
const app = express()
const port = process.env.PORT || 4000
connectedDB()

//middlewars
app.use(express.json())
app.use(cors())

//api endpoints
app.get('/', (req, res) => {
    res.send('api working greate')
})

app.listen(port, () => console.log("server started", port))