const express = require('express');
const router = express.Router();
const Musicas = require('../models/musicas');

router.post("/add", async (req, res) =>{
    await Musicas.create(req.body)
    .then(() => {
        res.status(200).send("Adicionado com sucesso.");
    })
    .catch((err) =>{
        res.status(400).send("Algo de errado não está certo.");
    });
});

router.get('/', async(req, res) =>{

    await Musicas.find({})
    .then((musica) => {
        res.send(musica);
    })
    .catch((err) =>{
        console.log(err)
    });
});
router.get('/findById/:id', async (req, res) =>{

    await Musicas.find({_id: req.params.id})
    .then((musica) => {
        res.send(musica);
    })
    .catch((err) =>{
        console.log(err)
    });
});

router.put("/update/:id", async (req, res) =>{
    await Musicas.updateOne({_id : req.params.id}, req.body)
    .then(() => {
        res.status(200).send("Atualizando com sucesso.");
    })
    .catch((err) =>{
        res.status(400).send("Algo de errado não está certo.");
        console.log(err)
    });
});

router.delete('/delete/:id', async (req, res) =>{
    await Musicas.deleteOne({_id : req.params.id})
    .then(() => {
        res.status(200).send("Deletado com sucesso.");
    })
    .catch((err) =>{
        res.status(400).send("Eita, deu bom não.");
        console.log(err)
    });
});


module.exports = router;