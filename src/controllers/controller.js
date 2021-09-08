const controller = {};

  controller.signup = (req, res) => {
    const data = req.body;
    req.getConnection((err, conn) =>{
      conn.query('INSERT INTO admins set ?', [data], (err, rows) =>{
        res.redirect('/login');
      });
    })
  };
  controller.reservas = (req, res) => {
    const data = req.body;
    req.getConnection((err, conn) =>{
      conn.query('INSERT INTO reservas set ?', [data], (err, rows) =>{
        res.redirect('/graciasreserva');
      });
    })
  };
  controller.contacto = (req, res) => {
    const data = req.body;
    req.getConnection((err, conn) =>{
      conn.query('INSERT INTO mensajes set ?', [data], (err, rows) =>{
        res.redirect('/graciascontacto');
      });
    })
  };
  controller.listado = (req, res) => {
  req.getConnection((err, conn) => {
    conn.query('SELECT * FROM reservas', (err, rows) =>{
      if (err){
        res.json(err);
      }
      res.render('listado', {
        data: rows
      });
      });
    });
  };
  controller.edit = (req, res) => {
    const {id} = req.params;
    req.getConnection((err, conn) =>{
      conn.query('SELECT * FROM reservas WHERE id = ?', [id], (err, rows) =>{
        res.render('listado_edit', {
          data: rows[0]
        });
      });
    });
  };
  controller.update = (req, res) => {
    const {id} = req.params;
    const updateReserva = req.body;
    req.getConnection((err, conn) =>{
      conn.query('UPDATE reservas set ? WHERE id = ?', [updateReserva, id], (err, rows) =>{
        res.redirect('/listado');
      });
    });
  };
  controller.eliminarReserva = (req, res) => {
    const {id} = req.params;
    req.getConnection((err, conn) =>{
      conn.query('DELETE FROM reservas WHERE id = ?', [id], (err, rows) =>{
        res.redirect('listado');
      });
    });
  };
  controller.mensajes = (req, res) => {
    req.getConnection((err, conn) => {
      conn.query('SELECT * FROM mensajes', (err, rows) =>{
        if (err){
          res.json(err);
        }
        res.render('mensajes', {
          data: rows
        });
        });
      });
  };
  controller.eliminarMensaje = (req, res) => {
      const {id} = req.params;
      req.getConnection((err, conn) =>{
        conn.query('DELETE FROM mensajes WHERE id = ?', [id], (err, rows) =>{
          res.redirect('mensajes');
        });
      });
  };


  module.exports = controller;