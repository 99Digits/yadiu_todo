const mongoose=require('mongoose')


const userschema=mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    psw:{
       type :String,
    required:true
    },
    mobile:{
        type:Number,
        required:true,
        unique:true
    },
    todo:[]
})

const users=mongoose.model("users",userschema)

module.exports=users

