import validator from 'validator'
import bcrypt from 'bcrypt'
import {v2 as cloudinary} from 'cloudinary'
import doctorModel from '../models/doctorModel.js'



//API fo the adding doctor

const addDoctor = async (req, res) => {
    try {
        const { name, email, password, image, speciality, degree, experience, about, fees, address } = req.body
        const imageFile = req.file

        //checking for all data to add doctor


        if (!name || !email || !password || !speciality || !degree || !experience || !about || !fees || !address) {
            return res.json({ success: false, message: "missing details" })
        }
        //validation email format
        if (!validator.isEmail(email)) {
            return res.JSON({ success: false, message: "Please enter the valid email" })
        }
        //validation strong password
        if (password.length < 8) {
            return res.json({ success: false, message: "Please enter a strong password" })
        }
        //hasshing doctor password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)
        //upload image to cloudinary
        const imageUpload = await cloudinary.uploader.upload(imageFile.path, {resource_type:"image"})
const imageUrl = imageUpload.secure_url
//saving doctor data to database
const doctorData = {
    name,
    email,
    image:imageUrl,
    password:hashedPassword,
    speciality,
    degree,
    experience,
    about,
    fees,
    address:JSON.parse(address),
    date:Date.now()//current date
}

        const newDoctor = new doctorModel(doctorData)
        await newDoctor.save()

        res.json({ success: true, message: "Doctor added successfully" })
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: "Error while adding doctor", error: error.message })

    }
}

export { addDoctor }