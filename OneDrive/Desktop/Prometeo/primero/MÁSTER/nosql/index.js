// CONFIGURACIÓN DEL SERVIDOR
// Importamos express
const express = require("express");

// Crear el servidor express
const server = express();

// Definimos el puerto donde vamos a levantar el servidor
const port = 8080;

// RUTAS
// Ruta principal
server.get("/", (req, res) => {
    res.end("Servidor Express en funcionamiento")
})

// Ruta de alumnos
server.get("/users/:name", (req, res) => {
    const name = req.params.name
    const alumnos = ["fermin", "ro", "jose", "ezequiel"]

    if(!alumnos.includes(name)){
        return res.send("Usuario no encontrado")
    }
    res.send(`El alummno o alumna es: ${name}`)
})

// Escuchamos al servidor
server.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`)
});
