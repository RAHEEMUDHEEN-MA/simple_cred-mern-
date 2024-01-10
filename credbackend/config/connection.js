const mongoose=require('mongoose')

const connection= async()=>{
    try{
        const connect=await mongoose.connect("mongodb+srv://raheemudheenma118:119881141@r4heem.4zbotc0.mongodb.net/?retryWrites=true&w=majority");
        console.log("Database status: connected ")
    }
    catch(error){
        console.log(`error:${error}`);
        process.exit()
    }
}
module.exports=connection