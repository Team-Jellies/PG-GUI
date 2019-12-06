const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path');
const bodyParser = require('body-parser');

const serverRoutes = require('../routes/server-routes')
const authRoutes = require('../routes/auth-routes')
const passportSetup = require('../config/passport-setup')
const mongoose = require('mongoose')
const keys = require('../config/keys')
const cookieSession = require('cookie-session')
const passport = require('passport')

const router = require('express').Router()
const connectionPoint = require('./connection.js').connectionPoint
const file = require('./controller')


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/dist',express.static(path.join(__dirname,'../dist')))


// CHAOS FLOW
// app.use((req, res, next) => {
//   console.log(
//     `***************************************************************************************
//     CHAOS FLOW TEST --- METHOD:${req.method}, PATH: ${
//       req.url
//     }, BODY: ${JSON.stringify(req.body)}
//     ***************************************************************************************`
//   );
//   return next();
// });

// app.get('/', function (req, res) {
//     res.status(200).sendFile(path.resolve(__dirname, '../index.html'));
//   })

app.set('view engine', 'ejs')

app.use('/auth', authRoutes)

// app.use('/server', serverRoutes)


app.post('/server/tablenames',
  connectionPoint.createConnection, file.getTableNames,(req,res) =>{
  return res.status(200).json(res.locals.tableName);
})

app.post('/server/table',
  connectionPoint.createConnection,file.getData, (req,res) =>{
  return res.status(200).json(res.locals.info);
})

app.post('/server/update', connectionPoint.createConnection, file.update, (req, res) => {
  return res.status(200).json(res.locals.new)
})

app.post('/server/create', connectionPoint.createConnection, file.create, (req, res) => {
  return res.status(200).json(res.locals.create)
})

app.delete('/server/delete', connectionPoint.createConnection, file.delete, (req, res) => {
  return res.status(200).json(res.locals.delete)
})

app.get('/dashboard', (req, res) => {
  res.render('dashboard')
})

app.get('/', (req, res) => {
    res.render('home')
  })

  
app.listen(PORT, ()=> {console.log(`Listening on Port ${PORT}`)})

module.exports = app;


