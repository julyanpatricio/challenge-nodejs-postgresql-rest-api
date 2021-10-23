const { Router } = require('express');
const router = Router();
const { Serie, Actor, Director, Season } = require('../db')
const Joi = require('@hapi/joi');
const { v4: uuidv4 } = require('uuid');

router.post('/', async (req, res, next) => {

  const schemaSerie = Joi.object({
    name: Joi.string().min(6).max(255).required(),
    description: Joi.string().min(6).max(1024).required(),
    year: Joi.number().integer().min(1900).required(),
    number_seasons: Joi.number().integer().min(1).required(),
    rating: Joi.number().min(0).max(5).required(),
    image: Joi.string().min(6).max(1024).required(),
  })

  const { name, description, year, number_seasons, rating, image, season_number, season_description, season_year } = req.body

  const { error } = schemaSerie.validate({ name, description, year, number_seasons, rating, image })
  if (error) return res.status(400).json({ error: error.details[0].message })

  try {

    // name must be unique 
    let serie = await Serie.findOne({ where: { name } })
    if (serie) return res.json({ error: "Serie already exist in database" })

    serie = await Serie.create({ name, description, year, number_seasons, rating, image, id: uuidv4() })

    const schemaSeason = Joi.object({
      season_number: Joi.number().integer().min(1).required(),
      season_description: Joi.string().min(6).max(1024).required(),
      season_year: Joi.number().integer().min(1900).required(),
    })

    const { error } = schemaSeason.validate({ season_number, season_description, season_year })
    if (error) return res.json(serie)

    const idSeason = uuidv4()
    await Season.create({ season_number, description: season_description, year: season_year, id: idSeason })
    serie.setSeasons(idSeason)



    res.json(serie)
  } catch (error) {
    next(error)
  }
})


module.exports = router;
