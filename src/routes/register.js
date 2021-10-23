const { Router } = require('express');
const router = Router();
const {User} = require('../db')
const Joi = require('@hapi/joi');
const bcrypt = require('bcrypt');

const schemaUser = Joi.object({
  email: Joi.string().min(6).max(255).required().email(),
  password: Joi.string().min(6).max(1024).required(),
  name: Joi.string().min(3).max(12).required()
})

router.post('/', async (req, res, next) => {

  const { error } = schemaUser.validate(req.body)

  if(error) return res.status(400).json({error: error.details[0].message})
  
  let {name, email, password} = req.body
  if(await User.findOne({where:{email}})) return res.json({"error": "Email already registered"})

  try {
    const cycles = await bcrypt.genSalt(10);
    password = await bcrypt.hash(password, cycles);

    const newUser = await User.create({email, password, name})
    res.json({newUser})
   } catch (error) {
      next(error)
   }
})


module.exports = router;
