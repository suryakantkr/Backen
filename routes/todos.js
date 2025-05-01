const express=require('express');
const router=express.Router();
const {CreateTodo} =require("../controllers/CreateTodo");
const { GetTodo ,GetTodoById} = require('../controllers/GetTodo');
router.post('/CreateTodo',CreateTodo);
router.get('/GetTodo', GetTodo);
router.get('/GetTodo/:id',GetTodoById)
module.exports=router;

