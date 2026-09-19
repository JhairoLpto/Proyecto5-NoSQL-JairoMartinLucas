const mongoose = require('mongoose');

const DB_URL = 'mongodb://127.0.0.1:27017/proyecto-basico-express-movies';

const connect = async () => {
    try {
        await mongoose.connect(DB_URL); // ¡Sin opciones extra!
        console.log('Connected with db successfully');
    } catch (error) {
        console.log('Error conectando a la BD:', error);
    }
};

module.exports = { connect };