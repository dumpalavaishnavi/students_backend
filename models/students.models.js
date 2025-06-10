const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({
    _id:{
        type:String,
        required:true,
    },
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    phone:{
        type:Number,
        required:true,
        unique:true
    },
    address:{
        type:String,
        required:true
    },
    dob:{
        type:Date,
        required:true
    },
    dept:{
        type:String,
        required:true,
    },
    cgpa:{
        type:Number,
        required:true,  
    }

})

const studentModel = mongoose.model("studentModel",studentSchema)

module.exports = studentModel;

