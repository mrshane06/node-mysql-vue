import { getFruitDb , getFruitIDDb , insertFruitDb , deleteFruitDb , updateFruitDb } from "../model/fruitDb.js";
// import { config } from 'dotenv'

const getFruit =  async(req,res)=> {
    res.json(await getFruitDb());
}

const getFruitId =  async(req,res)=> {
    console.log(req.params.id);
    res.json(await getFruitIDDb(req.params.id))
}

const insertFruit =  async (req,res) => {
    let { fruit_name, weight , amount } = req.body
    await insertFruitDb(fruit_name, weight , amount )
    res.send('Data was inserted successfully')
}

const deleteFruit = async (req,res) => {
    let {id} = req.body
    await deleteFruitDb(req.params.id)
    res.send('Data has been deleted')
}

const updateFruit =  async(req,res)=>{
    let {fruit_name, weight, amount} = req.body
    let fruits = await getFruitDb(req.params.id)
    fruit_name?fruit_name = fruit_name:fruit_name = fruits.fruit_name;
    weight?weight = weight:weight = fruits.weight;
    amount?amount = amount:amount = fruits.amount;
    
    await updateFruitDb(fruit_name, weight, amount,req.params.id);
    res.send('Fruit has been updated successfully.')
}

export {getFruit , getFruitId , insertFruit , deleteFruit , updateFruit}