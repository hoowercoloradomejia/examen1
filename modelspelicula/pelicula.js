const mongoose = require('mongoose')
const course_schema = mongoose.Schema({
movie_name:{
    type:String,
    require: true,
    unique: true
},
season:{
    type: Number,
    require: true
},
autors:{
}
 

})

module.exports = mongoose.model('PeliculaCollection',PeliculaCollection.pelicula_schema)