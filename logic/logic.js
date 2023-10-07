const task= require('../shema/schema')

exports.Todo=async(req,res)=>{

    const {title,data,date}=req.body

    try{

         const Data=await task.find({})

        const newdata=await new task({
            title,data,date
        })
        await newdata.save()
        const UpdatedData=await task.find()
        res.status(200).json(UpdatedData)

    }
    catch(err){
        console.log(err);

    }
}