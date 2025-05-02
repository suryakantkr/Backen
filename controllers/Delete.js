const Todo=require("../models/Todo");

exports.Delete =async (req,res)=>{
    try {
        const {id}=req.params;
        const todo=await Todo.findByIdAndDelete(id);

        res.status(201).json({
            success:true,
            data:todo,
            messege:"server delete successfully."
        });
        
    } catch (error) {
        console.log(error);
        res.status(401).json({
            success:false,
            err:error.messege,
            messege:"delete server issue"
        }); 
    }
}