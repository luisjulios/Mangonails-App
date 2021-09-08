const express = require('express'),
      router = express.Router(),
      reservasController = require('../controllers/controller');
router.get('/index', function(req, res) {
  res.render('index', { });
});
router.get('/sobremi', function(req, res) {
  res.render('sobremi', { });
});
router.get('/galeria', function(req, res) {
  res.render('galeria', { });
});
router.get('/reservas', function(req, res) {
  res.render('reservas', { });
});
router.get('/contacto', function(req, res) {
  res.render('contacto', { });
});
router.get('/404', function(req, res) {
  res.render('404', { });
});
router.get('/graciascontacto', function(req, res) {
  res.render('graciascontacto', { });
});
router.get('/graciasreserva', function(req, res) {
  res.render('graciasreserva', { });
});
router.get('/login', function(req, res) {
  res.render('login', { });
});
router.get('/signup', function(req, res) {
  res.render('signup', { });
});
router.post('/signup', reservasController.signup);
router.get('/listado', reservasController.listado);
router.get('/mensajes', reservasController.mensajes);
router.get('/eliminarReserva:id', reservasController.eliminarReserva);
router.get('/eliminarMensaje:id', reservasController.eliminarMensaje);
router.get('/update:id', reservasController.edit);
router.post('/update/:id', reservasController.update);
router.post('/reservas', reservasController.reservas);
router.post('/contacto', reservasController.contacto);

module.exports = router;