import { compare } from "bcrypt";
import { getUserIDDb } from "../model/user.Db.js";
import jwt from 'jsonwebtoken'
import { config } from "dotenv";
config()

const checkUser = async (req,res,next)=>{
    const {username , password} = req.body;
    let hashedPassword = await( getUserIDDb(username)).password
    let result = await compare(password,hashedPassword)
        if(result==true){
                let token = jwt.sign({username:username},process.env.SECRET_KEY,{expiresIn:'1h'})
                console.log(token);
                
                req.body.token = token
                next()
                return
        }else{
        res.send('password incorrect')
    }
}

// const veryAToken =(req, res,next)=>{
//     let {cookie} = req.header
//     // checks if the token exist first
//     let token = cookie && cookie.split('=')[1]
//     console.log(token)
//     jwt.verify(token,process.rnv.SECRET_KEY,(err,decoded)=>{
//     if(err){
//     res.json({message:"Token is invalid"})
//     return
//     }
//     req.body.user = decoded
//     console.log(decoded);    
//     next()   
//     })
// 
// }
export {checkUser}