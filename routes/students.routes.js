const express = require('express')
const routes = express.Router()
const {addStudent,readStudents,readStudent} = require('../controllers/students.controllers')
routes.use(express.json())

routes.post('/',addStudent)
routes.get('/',readStudents)
routes.get('/:id',readStudent)





module.exports= routes