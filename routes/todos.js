const express=require('express');
const router=express.Router();

const {CreateTodo} =require("../controllers/CreateTodo");
const { GetTodo ,GetTodoById} = require('../controllers/GetTodo');
const {Update}=require("../controllers/Update");
const {Delete}=require("../controllers/Delete");

router.post('/CreateTodo',CreateTodo);
router.get('/GetTodo', GetTodo);
router.get('/GetTodo/:id',GetTodoById);
router.put("/update/:id",Update);
router.delete("/delete/:id",Delete);

module.exports=router;

