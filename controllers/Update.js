const Todo = require("../models/Todo");

exports.Update = async (req, res) => {
    try {
        const { id } = req.params;
        const { Title, Description } = req.body;

        const todo = await Todo.findByIdAndUpdate(
            { _id: id },
            { Title, Description, updatedAt: Date.now() }
         
        );

        res.status(201).json({
            success: true,
            data: todo,
            message: "Update Successfully."
        });

    } catch (error) {
        console.log(error);
        res.status(402).json({
            success: false,
            err: error.message,
            message: "server update error."
        });
    }
}
