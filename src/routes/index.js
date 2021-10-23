const { Router } = require('express');
const register = require('./register')

const router = Router();

router.use('/user/register', register)


module.exports = router;