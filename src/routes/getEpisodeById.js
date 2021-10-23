const { Router } = require('express');
const router = Router();
const {Episode,Actor,Director,Serie,Season} = require('../db')


router.get('/:id', async (req, res, next) => {

   const {id} = req.params

   try {
     console.log(id,'id');
      const episodes = await Episode.findAll()
      console.log(episodes);
      const episode = await Episode.findOne({ 
         where: { id },
         include:[
            Director,
            {
               model: Actor,
               through: {attributes: []}
            },
            {
              model: Season,
              include: [{
                model: Serie
              }]
            }
         ] 
      })
      
      res.json(episode)
   } catch (error) {
      next(error)
   }
})


module.exports = router;
