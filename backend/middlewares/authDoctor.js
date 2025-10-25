import jwt from 'jsonwebtoken'

// doctor authentication middleware
const authDoctor = async (req, res, next) => {
  try {
    const dtoken = req.headers.dtoken || req.headers.authorization?.split(' ')[1]

    if (!dtoken) {
      return res.json({ success: false, message: "Authentication failed, login again" })
    }

    const decoded = jwt.verify(dtoken, process.env.JWT_SECRET)

    // ✅ attach decoded user ID safely
    req.doctor = { docId: decoded.id }

    next()
  } catch (error) {
    console.log(error)
    res.json({ success: false, message: "Authentication failed", error: error.message })
  }
}

export default authDoctor
