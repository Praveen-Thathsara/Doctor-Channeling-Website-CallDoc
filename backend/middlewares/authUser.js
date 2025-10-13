import jwt from 'jsonwebtoken'

// User authentication middleware
const authUser = async (req, res, next) => {
  try {
    const token = req.headers.token || req.headers.authorization?.split(' ')[1]

    if (!token) {
      return res.json({ success: false, message: "Authentication failed, login again" })
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET)

    // ✅ attach decoded user ID safely
    req.user = { userId: decoded.id }

    next()
  } catch (error) {
    console.log(error)
    res.json({ success: false, message: "Authentication failed", error: error.message })
  }
}

export default authUser
