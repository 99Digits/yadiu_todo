const users=require('../shema/userschema')
const jwt=require('jsonwebtoken')

exports.userRegister=async(req,res)=>{
 
    const {username,psw,mobile}=req.body
    try{

        const userdata=await users.findOne({mobile})
        if(userdata){
           return res.status(401).json("user already exist please Register")
        }
        else{
            const newuserdata=await new users({
                username,psw,mobile
            })
            await newuserdata.save()
          return  res.status(200).json("Registered successful")
        }

    }
    catch(error){
        console.log(error);
    }
}
// login

exports.Login = async (req, res) => {
    const {mobile,psw} =req.body;
  
    try {
      const data = await users.findOne({mobile,psw})
      if (data) {
        const token=jwt.sign({loginacno:mobile},"super")
        return res.status(200).json({data:data,token:token});
      } else {
        return res.status(401).json("User not found in the database.");
      }
    } catch (err) {
      console.error(err);
      return res.status(500).json(err);
    }
  };





exports.todo=async(req,res)=>{
    const {title,datas,date,}=req.body
    const {mobile}=req.headers
   

    try{

        const data=await users.findOne({mobile})
        if(data){
        await data.todo.push({title,datas,date})

        await data.save()
        res.status(200).json(data.todo)
        }
        else{
            res.status(401).json("no data found")
        }

    }
    catch(error){
        res.status(401).json(error)
    }

}

exports.Tdata=async(req,res)=>{
  const {mobile}=req.headers
  try{
    const data=await users.findOne({mobile})
    if(data){
      res.status(200).json(data.todo)

    }
    else{
      res.status(401).json("data not found")
    }

  }
  catch(err){
    res.status(500).json(err)

  }
}

exports.deletetask=async(req,res)=>{
  const {mobile}=req.headers
  const {index}=req.body

  try{
    const data=await users.findOne({mobile})
    if(data){
      // const tododata=await data.todo.pop()
      // data.save()
      // const alldata=await data.todo
      // return res.status(200).json(alldata)
      const todoArray= data.todo
      if(index>=0 && index<todoArray.length){
        todoArray.splice(index,1)
        await data.save()
        return res.status(200).json(todoArray)
      }
    }
    else{
      res.status(401).json("data not found")
    }

  }
  catch(err){
    res.status(404).json(err)
  }
}