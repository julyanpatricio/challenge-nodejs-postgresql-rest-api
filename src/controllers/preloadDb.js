const { Actor, Director, Episode, Film, Season, Serie } = require('../db')
const { v4: uuidv4 } = require('uuid');


const preloadDb = async function () {
  try {
    const idFilm = uuidv4()
    const newFilm = await Film.create({
      id: idFilm,
      name: 'godzilla',
      description: "Protagonizada por Bryan Cranston, ganador del Globo de Oro por Breaking Bad, que da vida a Joe Brody un científico que descubre que algo terrible está a punto de suceder cuando una serie de tsunamis comienzan a llegar a las costas, anticipando la llegada de numerosos monstruos de gran tamaño mientras el ejército intenta defenderse en vano.",
      year: 2014,
      rating: 3.5,
      image: 'https://es.web.img2.acsta.net/c_310_420/pictures/14/03/04/12/38/124399.jpg'
    })

    const idDirector = uuidv4()
    const newDirector = await Director.create({
      id: idDirector,
      first_name: 'Gareth',
      last_name: 'Edwards',
      age: 46,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUqS0jiuiaMDNY3wXXj2g-Gz57WfMQ0GN90-Yfo5kDMcQpjWkO3aTxirt2ghDYSgBuk1I&usqp=CAU'
    })

    const idActor1 = uuidv4()
    const newActor = await Actor.create({
      id: idActor1,
      first_name: 'Aaron',
      last_name: 'Taylor-Johnsons',
      age: 31,
      image: 'https://es.web.img2.acsta.net/c_310_420/pictures/15/08/12/12/51/075373.jpg'
    })

    const idActor2 = uuidv4()
    const newActor2 = await Actor.create({
      id: idActor2,
      first_name: 'Bryan',
      last_name: 'Cranston',
      age: 65,
      image: 'https://es.web.img3.acsta.net/c_310_420/pictures/15/10/15/16/08/446575.jpg'
    })

    newDirector.setFilms(idFilm)
    newFilm.setActors([idActor1, idActor2])
    newFilm.setDirector(idDirector)    

    console.log("Preload database");

  } catch (error) {
    console.log(error)
  }

}

module.exports = { preloadDb }