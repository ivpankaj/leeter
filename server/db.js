import mongoose from "mongoose";

const connection =async()=>{
    try {
    const database = await mongoose.connect( "mongodb+srv://imvpankaj:TbpF157V8pI69tGa@cluster0.agetxsq.mongodb.net/newdata")
    console.log("database has been connected")
    } catch (error) {
        console.log("error",error)
    }
}
export default connection