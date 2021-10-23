const { Actor, Director, Film, User, Episode, Season, Serie } = require('../db')
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

    const idFilm2 = uuidv4()
    const newFilm2 = await Film.create({
      id: idFilm2,
      name: 'titanic',
      description: "James Cameron reconstruye con precisión el hundimiento del famoso trasantlántico, consiguiendo una de las epopeyas románticas más importantes del cine de todos los tiempos",
      year: 1998,
      rating: 4.3,
      image: 'https://es.web.img3.acsta.net/c_310_420/medias/nmedia/18/86/91/41/19870073.jpg'
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

    const idSerie = uuidv4()
    const newSerie = await Serie.create({
      id: idSerie,
      name: 'Dr. House',
      description: "De la mano de la cadena Fox y creada por David Shore ('Leyes de familia', 'Hack'), 'House' es un drama médico que sigue la exitosa receta de series como 'CSI' o 'Navy: Investigación criminal'. Se parece a ellas porque aplica las técnicas de investigación policial y resolución de crímenes al diagnóstico de pacientes con extrañas afecciones.",
      year: 2004,
      number_seasons: 8,
      rating: 4.4,
      image: 'https://es.web.img2.acsta.net/c_310_420/pictures/14/09/29/12/55/267631.jpg'
    })

    const idSeason = uuidv4()
    const newSeason = await Season.create({
      id: idSeason,
      season_number: 3,
      description: "La tercera temporada de House tuvo lugar en FOX del 5 de septiembre de 2006 al 29 de mayo de 2007. Al principio de la temporada, House recupera temporalmente el uso de su pierna debido al tratamiento con ketamina después de recibir un disparo en el final de la segunda temporada.",
      year: 2006
    })

    const idEpisode = uuidv4()
    const newEpisode = await Episode.create({
      id: idEpisode,
      name: 'One day, one room',
      description: "House se ve enfrentado a pasar un día completo en la clínica junto a una chica víctima de una violación que insiste en confiar en él. Mientras tanto Cameron se enfrenta a un paciente con cáncer terminal.",
      released_date: new Date('2007/01/30'),
      rating: 4.4,
      image: 'https://es.web.img2.acsta.net/c_310_420/pictures/14/09/29/12/55/267631.jpg'
    })

    const idActor3 = uuidv4()
    const newActor3 = await Actor.create({
      id: idActor3,
      first_name: 'Hugh',
      last_name: 'Laurie',
      age: 62,
      image: 'https://es.web.img3.acsta.net/c_310_420/medias/nmedia/18/35/61/87/19598911.jpg'
    })

    const idDirector2 = uuidv4()
    const newDirector2 = await Director.create({
      id: idDirector2,
      first_name: 'Juan Jose',
      last_name: 'Campanella',
      age: 62,
      image: 'https://es.web.img2.acsta.net/c_310_420/medias/nmedia/18/77/76/20/19425171.jpg'
    })

    newDirector2.setEpisodes(idEpisode)
    newEpisode.setActors(idActor3)
    newEpisode.setDirector(idDirector2)
    newSeason.setEpisodes(idEpisode)
    newSerie.setSeasons(idSeason)


    await User.create({
      name: 'julian',
      email: 'jujitoh@gmail.com',
      password: '$2b$10$TagmZBTn2ho/P/jQGTKxZ.VpV.RuodxWGdJlbs.BAvwCe1ogTEzze'
    })
    console.log("Preload database");

  } catch (error) {
    console.log(error)
  }

}

module.exports = { preloadDb }