const express = require('express')
const routes = express.Router()
const {addStudent, readStudents, readStudent, deleteStudent, updateStudent, patchStudent} = require('../controllers/students.controllers')
routes.use(express.json())

routes.post('/',addStudent)
routes.get('/',readStudents)
routes.get('/:id',readStudent)
routes.put('/:id',updateStudent)
routes.patch('/:id',patchStudent)
routes.delete('/:id',deleteStudent)




module.exports= routes