const express = require('express')
const pelicula_rutas = express.Router()


pelicula_rutas.post('/',(req,res)=>{})


pelicula_rutas.get('/',(req,res)=>{})


pelicula_rutas.get('/:idPelicula',(req,res)=>{})

pelicula_rutas.put('/:idPelicula',(req,res)=>{})


pelicula_rutas.delete('/idPelicula',(req,res)=>{})

module.exports = pelicula_rutas