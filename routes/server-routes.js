const router = require('express').Router()
const connectionPoint = require('../server/connection.js').connectionPoint
const file = require('../server/controller')


router.post('/tablenames',
  connectionPoint.createConnection, file.getTableNames,(req,res) =>{
  return res.status(200).json(res.locals.tableName);
})

router.post('/table',
  connectionPoint.createConnection,file.getData, (req,res) =>{
  return res.status(200).json(res.locals.info);
})

router.post('/update', connectionPoint.createConnection, file.update, (req, res) => {
  return res.status(200).json(res.locals.new)
})

router.post('/create', connectionPoint.createConnection, file.create, (req, res) => {
  return res.status(200).json(res.locals.create)
})

router.delete('/delete', connectionPoint.createConnection, file.delete, (req, res) => {
  return res.status(200).json(res.locals.delete)
})

module.exports = router