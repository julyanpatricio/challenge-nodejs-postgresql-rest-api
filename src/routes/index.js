const { Router } = require('express');
const register = require('./register')
const login = require('./login')
const verifyToken = require('../controllers/verifyToken')
const refresh_token = require('./refreshToken')
const getFilms = require('./getFilms')
const getEpisodeById = require('./getEpisodeById')
const postSerie = require('./postSerie')

const router = Router();

router.use('/user/register', register)
router.use('/user/login', login)
router.use('/refresh_token', verifyToken, refresh_token)
router.use('/films', verifyToken, getFilms)
router.use('/episode', verifyToken, getEpisodeById)
router.use('/serie', verifyToken, postSerie)


module.exports = router;