const { json } = require('express');
const express = require('express');
const router = express.Router();
const Usuario = require('../model/usuarioModel');

// Rendirizar el index.ejs para obtener todos los registros
router.get('/obtenerRegistros', async (req, res) => {
    const usuario = await Usuario.find();
    res.json(usuario)
   
});

router.post('/agregarRegistro', async (req, res) => {
    const usuario = new Usuario(req.body);
    await usuario.save();
    res.redirect('/obtenerRegistros');
});

router.get('/eliminarRegistro/:id', async (req, res) => {
    const { id } = req.params;
    await Usuario.remove({ _id: id });
    res.redirect('/obtenerRegistros');
});
router.get('/obtenerRegistro/:id', async (req, res) => {
    const {id} = req.params
    const usuario = await Usuario.findById(id);
    res.json(usuario)
   
});

router.post('/editarRegistro/:id', async (req, res) => {
    const { id } = req.params;
    await Usuario.update({ _id: id }, req.body);
    res.redirect('/obtenerRegistros');
});
// obtener el registro a editar por el id
// y se envía a la página edit.ejs
/*router.get('/editarRegistro/:id', async (req, res) => {
    const { id } = req.params;
    const task = await Task.findById(id);
    res.render('edit', {
        task
    });
});
// se edita el registro en la base de datos

router.get('/hecho/:id', async (req, res) => {
    const { id } = req.params;
    const task = await Task.findById(id);
    await task.save();
    res.redirect('/obtenerRegistros');
});*/
module.exports = router;
