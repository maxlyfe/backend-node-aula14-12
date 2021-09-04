const mongoose = require('mongoose');

const filmeModel = new mongoose.Schema({
    nome: {type: String, required: true},
    autor: {type: String, required: true},
    genero: {type: String, required: true},
    capa: {type: String},
    duracao: {type: Number, required: true},
    dataCriacao: { type: Date, defaukt: Date.now},

})

const Filme = mongoose.model("filme", filmeModel);

module.exports = Filme;