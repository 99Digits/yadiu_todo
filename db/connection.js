const mongoose=require('mongoose')


const DB=process.env.DATABASE
mongoose.connect(DB,{
    useUnifiedTopology:true,
    useNewUrlParser:true
}).then(()=>{
    console.log("MongoDB server connected successfuly");

}).catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });
