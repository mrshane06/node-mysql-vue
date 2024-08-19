import express from 'express'
import {getFruit , getFruitId , insertFruit , deleteFruit , updateFruit} from '../controller/fruitController.js'

const fruitRouter = express.Router()

fruitRouter.get('/', getFruit)

fruitRouter.get('/:id', getFruitId)

fruitRouter.post('/insert', insertFruit)

fruitRouter.delete('/:id', deleteFruit)

fruitRouter.patch('/:id', updateFruit)

export {fruitRouter}