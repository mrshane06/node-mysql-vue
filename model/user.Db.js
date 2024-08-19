import { pool } from "../config/config.js";

const  getUserDb = async () =>{
    let [data] = await pool.query('SELECT * FROM users')
    return data
}

const getUserIDDb = async (username) =>{
    let [[data]] = await pool.query('SELECT * FROM users WHERE user_id = ?', [username])
    return data
}

const insertUserDb = async(name , surname , age , fav_coding, fav_car, eye_color , username , password) => {
    let [data] = await pool.query(`
        INSERT INTO users (name, surname, age, fav_coding, fav_car, eye_color , username , password)
        VALUES(?,?,?,?,?,?,?,?)
        `, [name , surname , age , fav_coding, fav_car, eye_color , username , password]
    )
    return data
}

const deleteUserDb = async(id) => {
    await pool.query('DELETE FROM users WHERE user_id =?', [id])
}

const updateUserDb = async (name , surname , age , fav_coding, fav_car, eye_color , id)=>{
    await pool.query('UPDATE users SET name = ? , surname = ? , age = ? , fav_coding = ? , fav_car = ? , eye_color = ?  WHERE user_id = ? ', [name , surname , age , fav_coding, fav_car, eye_color , id])
}

export {getUserDb , getUserIDDb , insertUserDb , deleteUserDb , updateUserDb} 