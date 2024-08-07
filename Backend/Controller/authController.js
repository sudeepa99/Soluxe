const UserSchema = require("../Models/auth");
const bcrypt = require('bcrypt');
const UserRegister = async (req,res)=>{
    const {name,email,password}=req.body;

    try{
        let user = null;
        user = await UserSchema.findOne({email});
        if(user){
            return res.status(400).json({Success:false,message:"User Already Exist"}); 
        }

        const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

        user = new UserSchema( { name, email, password: hashPassword  });
        await user.save();

        return res.status(200).json({Success:true,message:"User Created"}); 


    }
    catch(err){
      return res.status(500).json({ Success: false, message: err.message });
  }
  
}
const UserLogin = async (req, res) => {
    const { email, password } = req.body;
  
    try {
      let user = await UserSchema.findOne({ email });
  
      if (!user) {
        return res.status(404).json({ success: false, message: 'User not found' });
      }
  
      const isPasswordMatch = await bcrypt.compare(password, user.password);
  
      if (!isPasswordMatch) {
        return res.status(400).json({ success: false, message: 'Invalid credentials' });
      }

      res.status(200).json({
        success: true,
        message: 'Successfully logged in',
        data: user,
      });
  
    } catch (err) {
      console.error(err.message);
      res.status(500).json({ success: false, message: 'Internal server error, please try again' });
    }
  };
  
  module.exports = {
    UserRegister,
    UserLogin,
  };
  
