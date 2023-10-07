const mongoose=require('mongoose')

const todotask=mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    data:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    }
})

const tasks=mongoose.model("tasks",todotask)

module.exports=tasks