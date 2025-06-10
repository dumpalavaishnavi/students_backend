const mongoose = require('mongoose')
const studentModel = require('../models/students.models')

let addStudent = async (req,res) =>{
    try{
        let {rollNo,name,email,phone,address,dob,dept,cgpa} = req.body;
        const student = await studentModel.create({
            _id: rollNo,
            name,
            email,
            phone,
            address,
            dob,
            dept,
            cgpa
        });
        res.status(201).json({message:"Student added successfully" , student})
    }
    catch (err) {
        res.status(400).json({ error: err.message });
  }
}

let readStudents = async (req,res)=>{
    try{
        let students = await studentModel.find({})
        if(students.length === 0){
            res.status(400).json({ message: "Students list is empty" });
        }
            res.status(201).json(students)
    }catch(err){
        res.status(400).json({ error: err.message });
    }
}

let readStudent = async(req,res)=>{
    try{
        let id = req.params.id
        let student = await studentModel.findById(id)

        if(student){
            res.status(200).json(student)
        }else{
            res.status(400).json({message:`No student was found with given ID ${id}`})
        }
    }
    catch(err){
        res.status(400).json({error:err.message})
    }

}
 
module.exports = {
    addStudent,
    readStudents,
    readStudent
};