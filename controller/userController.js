import { getUserDb , getUserIDDb , insertUserDb , deleteUserDb , updateUserDb } from "../model/user.Db.js";
import { hash } from "bcrypt";
// import { config } from 'dotenv'

const getUser =  async(req,res)=> {
    res.json(await getUserDb());
}

const getUserId =  async(req,res)=> {
    console.log(req.params.id);
    res.json(await getUserIDDb(req.params.id))
}

const insertUser =  async(req,res)=>{
let{cookie} = req.header
console.log(cookie);

    let {name, surname, age, fav_coding, fav_car, eye_color,username,password} = req.body;
    let hashedP = await hash(password,10);
    if (hashedP.stack) throw (hashedP);


    await insertUserDb(name, surname, age, fav_coding, fav_car, eye_color,username,hashedP);
    res.send('User was inserted successfully.');
}

const deleteUser = async (req,res) => {
    let {id} = req.body
    await deleteUserDb(req.params.id)
    res.send('Data has been deleted')
}

const updateUser =  async(req,res)=>{
    let {name , surname , age , fav_coding, fav_car, eye_color} = req.body
    let user = await getUserDb(req.params.id)
    name?name = name:name = user.name;
    surname?surname = surname:surname = user.surname;
    age?age = age:age = user.age;
    fav_coding?fav_coding = fav_coding:fav_coding = user.fav_coding;
    fav_car?fav_car = fav_car:fav_car = user.fav_car;
    eye_color?eye_color = eye_color:eye_color = user.eye_color;

    await updateUserDb(name , surname , age , fav_coding, fav_car, eye_color,req.params.id);
    res.send('Data has been updated successfully.')
}

const loginUser = (req,res)=>{
    res.json({message:"you have signed in successfully",token:req.body.token})
}

export {getUser , getUserId , insertUser , deleteUser , updateUser , loginUser}