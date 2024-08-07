const UserSchema = require("../Models/auth");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const generateToken = user => {
  return jwt.sign({ id: user._id, email:user.email }, process.env.JWT_SECRET_KEY, {
    expiresIn: '15d' 
  });
};
const UserRegister = async (req,res)=>{
    const {name,email,password}=req.body;
const UserRegister = async (req, res) => {
  const { name, email, password } = req.body;

  try {
      // Check if user already exists
      let user = await UserSchema.findOne({ email });
      if (user) {
          return res.status(400).json({ success: false, message: "User already exists" });
      }

      // Hash the password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      // Create new user
      user = new UserSchema({ name, email, password: hashedPassword });
      await user.save();

    }
    catch(err){
      return res.status(500).json({ Success: false, message: err.message });
  }
  
}
      // Respond with success
      return res.status(201).json({ success: true, message: "User created successfully" });
  } catch (err) {
      console.error('Error creating user:', err); // Log error details for debugging
      return res.status(500).json({ success: false, message: "Internal server error" });
  }
};
const UserLogin = async (req, res) => {
   const { email, password } = req.body;

  try {
    let user = await UserSchema.findOne({ email }) || await Admin.findOne({ email });

    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password);

    if (!isPasswordMatch) {
      return res.status(400).json({ success: false, message: 'Invalid credentials' });
    }

    const token = generateToken(user);

    console.log(`Generate: ${token}`);
    const { password: pwd, ...userData } = user._doc;

    res.status(200).json({
      success: true,
      message: 'Successfully logged in',
      token,
      data: userData,
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
  
