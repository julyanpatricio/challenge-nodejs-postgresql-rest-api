const { Router } = require('express');
const router = Router();
const { User } = require('../db')
const Joi = require('@hapi/joi');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { v4: uuidv4 } = require('uuid');

const schemaLogin = Joi.object({
  email: Joi.string().min(6).max(255).required().email(),
  password: Joi.string().min(6).max(1024).required()
})

router.post('/', async (req, res, next) => {
  try {
    const { error } = schemaLogin.validate(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message })

    const user = await User.findOne({ where: { email: req.body.email } });
    if (!user) return res.status(400).json({ error: 'User not found' });

    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword) return res.status(400).json({ error: 'invalid password' })

    newRefreshToken = uuidv4()
    user.refresh_token = newRefreshToken
    user.save()
    
    const token = jwt.sign({
      name: user.name,
      id: user.id,
      refresh_token: newRefreshToken
    }, process.env.TOKEN_SECRET, { expiresIn: '24h' })

    res.header('auth-token', token).send('Welcome')

  } catch (error) {
    next(error)
  }
})


module.exports = router;
