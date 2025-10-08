import express from 'express';
import cors from 'cors';
import 'dotenv/config'
import connectedDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';
import adminRouter from './routes/adminRoute.js';
import doctorRouter from './routes/doctorRoute.js';


//app config
const app = express()
const port = process.env.PORT || 4000
connectedDB()
connectCloudinary()

//middlewars
app.use(express.json())
app.use(cors())

//api endpoints
app.use('/api/admin', adminRouter)
app.use('/api/doctor', doctorRouter)

//localhost:4000/api/admin/add-doctor

app.get('/', (req, res) => {
    res.send('api working greate')
})

app.listen(port, () => console.log("server started", port))