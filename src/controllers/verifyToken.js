const jwt = require('jsonwebtoken')

// middleware to validate token and protect routes
const verifyToken = (req, res, next) => {
    
    const token = req.header('auth-token')
    if (!token) return res.status(401).json({ error: 'access denied' })

    try {
        const verified = jwt.verify(token, process.env.TOKEN_SECRET)
        req.dataToken = verified
        next() 

    } catch (error) {
        res.status(400).json({error})
    }
}

module.exports = verifyToken;