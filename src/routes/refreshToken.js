const { Router } = require('express');
const router = Router();
const { User } = require('../db')
const jwt = require('jsonwebtoken');
const { v4: uuidv4 } = require('uuid');



router.post('/', async (req, res, next) => {

  try {

    const user = await User.findOne({ where: { refresh_token: req.dataToken.refresh_token } });
    if (!user) return res.status(400).json({ error: 'invalid token' });

    newRefreshToken = uuidv4()
    user.refresh_token = newRefreshToken
    user.save()

    const token = jwt.sign({
      name: user.name,
      id: user.id,
      refresh_token: newRefreshToken
    }, process.env.TOKEN_SECRET, { expiresIn: '15m' })

    res.header('auth-token', token).send('Welcome')

  } catch (error) {
    next(error)
  }
})


module.exports = router;
