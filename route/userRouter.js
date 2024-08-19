import express from 'express'
import {getUser , getUserId , insertUser , deleteUser , updateUser , loginUser} from '../controller/userController.js'
import { checkUser } from '../middleware/authenticate.js'

const userRouter = express.Router()

userRouter.post('/login', checkUser, loginUser)

userRouter.get('/', getUser)

userRouter.get('/:id', getUserId)

userRouter.post('/insert', insertUser)

userRouter.delete('/:id', deleteUser)

userRouter.patch('/:id', updateUser)

export {userRouter}