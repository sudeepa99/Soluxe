const UserSchema = require("../Models/auth");
const UserRegister = async (req,res)=>{
    const {name,email,password}=req.body;

    try{
        let user = null;
        user = await UserSchema.findOne({email});
        if(user){
            return res.status(400).json({Success:false,message:"User Already Exist"}); 
        }
        user = new UserSchema({name,email,password});
        await user.save();

        return res.status(200).json({Success:true,message:"User Created"}); 


    }
    catch(err){
        return res.status(500).json({Success:true,message:"Internal Server Error"}); 
        
    }
}

module.exports={UserRegister}