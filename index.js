import express from 'express'
import cors from 'cors'
import {fruitRouter} from './route/fruitRouter.js'

import { userRouter } from './route/userRouter.js'
// import {verifyAToken} from '../middleware/authenticate.js'

let port = process.env.PORT || 5050
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.static('public'))

app.use('/users', userRouter)

app.use('/fruit',fruitRouter)

app.listen(port,()=>{
    console.log('http://localhost:'+ port);
})