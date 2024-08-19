import { pool } from "../config/config.js";

const getFruitDb = async () =>{
    let [data] = await pool.query('SELECT * FROM fruit')
    return data
}

const getFruitIDDb = async (id) =>{
    let [[data]] = await pool.query('SELECT * FROM fruit WHERE fruit_id = ?', [id])
    return data
}

const insertFruitDb = async(fruit_name , weight , amount) => {
    let [data] = await pool.query(`
        INSERT INTO fruit (fruit_name, weight, amount )
        VALUES(?,?,?)
        `, [fruit_name,weight,amount]
    )
    return data
}

const deleteFruitDb = async(id) => {
    await pool.query('DELETE FROM fruit WHERE fruit_id =?', [id])
}

const updateFruitDb = async (fruit_name , weight , amount , id)=>{
    await pool.query('UPDATE fruit SET fruit_name = ? , weight = ? , amount = ? , WHERE fruit_id = ? ', [fruit_name , weight , amount , id])
}

export {getFruitDb , getFruitIDDb , insertFruitDb , deleteFruitDb , updateFruitDb} 