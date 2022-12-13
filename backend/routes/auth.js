const router = require("express").Router();
const User = require("../models/User");
const CryptoJs = require("crypto-js");
const jwt=require('jsonwebtoken')

//SignUp
router.post("/register", async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    password: CryptoJs.AES.encrypt(
      req.body.password,
      process.env.SEC
    ).toString(),
    email: req.body.email,
  });
  try {
    const saveduser = await newUser.save();
    res.status(200).json(saveduser);
  } catch (err) {
    res.status(500).json(err);
  }
});

//login
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    
    !user && res.status(401).json("Wrong credentials!");
    
    const hashedPassword = CryptoJs.AES.decrypt(user.password, process.env.SEC);
    
    const originalpassword = hashedPassword.toString(CryptoJs.enc.Utf8);
    
    originalpassword !== req.body.password && res.status(401).json("Wrong credentials");
    
    const accessToken =jwt.sign({
        id:user._id,isAdmin:user.isAdmin
    },process.env.JWTSEC,{expiresIn :'30d'})

    const{password,...others}=user._doc


    res.status(200).json({...others,accessToken})
  } catch (err) {
    res.status(500).json(err);
  }
});



module.exports = router;
