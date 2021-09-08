const express = require('express'),
      path = require('path'),
      morgan = require('morgan'),
      mysql = require('mysql'),
      myConnection = require('express-myconnection');

//Initializations
const app = express();
//importing routes
const reservasRoutes = require('./routes/reservas');
//Settings
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', [path.join(__dirname, 'views'),
                  path.join(__dirname, 'views/admin')]);

//middlewares
app.use(morgan('dev'));
app.use(myConnection(mysql, {
  host: 'localhost',
  user: 'root',
  port: 3306,
  database: 'mangonails'
}, 'single'));
app.use(express.urlencoded({extended: false}));
//routes
app.use('/', reservasRoutes);
//static files
app.use(express.static(path.join(__dirname, 'public')));
//starting the server
app.listen(app.get('port'), ()=>{
console.log('Server en puerto 3000');
});
