const jwt=require('jsonwebtoken')

exports.jwtmiddleware=(req,res,next)=>{

    console.log('router specific miidle ware');

    const token=req.headers['varify-token']
    console.log(token);
    if(token){
        jwt.verify(token,"super")
        next()


    }


}