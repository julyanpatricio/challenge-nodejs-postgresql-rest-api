const { Router } = require('express');
const router = Router();
const {Film,Actor,Director} = require('../db')


router.get('/', async (req, res, next) => {

   const {name,sort_by,sort_direction} = req.query

   try {
      // if the name is received by query, the filtering is performed with that name. 
      // otherwise, it will not perform filtering
      const where = name? {name} : ''
      let order = ''

      // if sort_by ir receiver by query, variable order change to sort_by.
      // sort_direction is descendent by default
      if(sort_by && ['name','year','rating'].includes(sort_by.toLowerCase())) {
         const direction = (sort_direction && ['desc', 'asc'].includes(sort_direction)) ? sort_direction : 'desc'
         order = [[ sort_by.toLowerCase() , direction ]]
      }
      
      const films = await Film.findAll({ 
         where,
         order,
         include:[
            Director,
            {
               model: Actor,
               through: {attributes: []}
            }
         ] 
      })
      
      res.json(films)
   } catch (error) {
      next(error)
   }
})


module.exports = router;
