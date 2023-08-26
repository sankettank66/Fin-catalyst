const mongoose = require('mongoose')
//email: '',
//password: '',
//gender: '',
//age: '',
//number: ''
const textSchema = mongoose.Schema(
    {
        Email: {
            type: String,
            required: [true, 'add a Email']
        },
        Password:{
            type:String,
            required: [true, 'add a Password']
            
        },
        gender:{
            type:String,
            required: [true, 'add a Gender']
            
        },
        DOB:{
            type:Date,
            required: [true, 'add a DOB'],
        },
        Number:{
            type:Date,
            required: [true, 'add a Number'],
        },


    },
    {
        timestamps: true
    }
)
module.exports=mongoose.model('textData',textSchema)