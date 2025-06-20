const User=require('../models/User')
const secretkey="vau.phy@2025"
const jwt=require("jsonwebtoken")

function verifyToken(req,res,next){
    try{
        const token = req.headers.authorization
        if(!token){
            return res.status(403).send("Security Token Not Available !")
        }
        //decryption
        //info tokentokentoken -> [info,tokentokentoken]
        jwt.verify(token.split(" ")[1],secretkey,async(err,decoded)=>{
            if(!decoded){
                return res.status(401).send("Invalid Token !")
            }
            const userID=decoded.ID
            const user = await User.findById(userID)
            //console.log(user)
            if(!user || err){
                return res.status(401).send("Invalid Token !")
            }
            //move to next func/ route
            next()
        })
    }
    catch(error){
        console.error(error);
        res.status(500).send("Server Error !")
    }
}

module.exports={verifyToken}