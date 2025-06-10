const mongoose = require('mongoose')
const studentModel = require('../models/students.models')

let addStudent = async (req,res) =>{
    try{
        let {_id,name,email,phone,address,dob,dept,cgpa} = req.body;
        const student = await studentModel.create({
            _id,
            name,
            email,
            phone,
            address,
            dob,
            dept,
            cgpa
        });
        //201 status code is for creation   
        res.status(201).json({message:"Student added successfully" , student})
    }
    catch (err) {
        console.log(err)
        res.status(400).json({ error: err.message });
  }
}

let readStudents = async (req,res)=>{
    try{
        let students = await studentModel.find({})
        if(students.length === 0){
            res.status(404).json({ message: "Students list is empty" });
        }else{
            res.status(200).json(students)
        }
    }catch(err){
        res.status(404).json({ error: err.message });
    }
}

let readStudent = async(req,res)=>{
    try{
        let id = req.params.id
        let student = await studentModel.findById(id)

        if(student){
            res.status(200).json(student)
        }else{
            res.status(404).json({message:`No student was found with given ID ${id}`})
        }
    }
    catch(err){
        res.status(400).json({error:err.message})
    }

}

let updateStudent = async (req, res) => {
  try {
    // Must contain all fields!
    const { _id, name, email, phone, address, dob, dept, cgpa } = req.body;

    // Remove _id if present
    const data = { name, email, phone, address, dob, dept, cgpa };

    const student = await studentModel.findByIdAndUpdate(req.params.id, data, {
      new: true,
      runValidators: true,
      overwrite: true   // ⬅️ This makes it behave like true PUT
    });

    if (!student) {
      return res.status(404).json({ message: `Student with ID ${req.params.id} not found` });
    }

    res.status(200).json({ message: "Student fully replaced", student });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

let patchStudent = async(req,res)=>{
    try{
        const student = await studentModel.findByIdAndUpdate(req.params.id,req.body,{
            new : true,
            runValidators : true
        })
        if(!student){
            return res.status(404).json({message : `Student with ID ${req.params.id} is not found`})
        }
        res.status(201).json({message:"Student updated successfully",student})
    }
    catch(err){
        res.status(400).json({error:err.message})
    }
}

let deleteStudent = async(req,res)=>{
    try{
        let id = req.params.id
        let student = await studentModel.findByIdAndDelete(id)

        if(student){
            return res.status(201).json({message:"Student deleted succesfully",student})
        }
            res.status(400).json({message:`Student with ${id} is not found`})
    }catch(err){
        res.status(400).json({error:err.message})
    }
}
module.exports = {
    addStudent,
    readStudents,
    readStudent,
    updateStudent,
    patchStudent,
    deleteStudent
};