import jwt from 'jsonwebtoken'

//user authentication middleware
const authUser = async (req, res, next) => {
    try {
        const { token } = req.headers
        if (!token) {
            return res.json({ success: false, message: "Authentication failed login again" })
        }

        const token_decode = jwt.verify(token, process.env.JWT_SECRET)
        req.body.userId = token_decode.userId
        next()
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: "Authentication failed", error: error.message })
    }
}

export default authUser