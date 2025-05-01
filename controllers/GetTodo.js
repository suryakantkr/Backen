const Todo = require("../models/Todo");

exports.GetTodo = async (req, res) => {
    try {
        const todos = await Todo.find({});

        res.status(202).json({
            success: true,
            data: todos,
            message: "Entire todo data is featched."
        })

    } catch (error) {
        console.log(error);
        res.status(400).json({
            success: false,
            error:error.message,
            message: "server issue."
        });
    }
};

exports.GetTodoById = async (req, res) => {
    try {
        const id = req.params.id;
        const todo = await Todo.findById(id);

        if (!todo) {
            return res.status(404).json({
                success: false,
                message: "Data not found by ID"
            });
        }

        res.status(200).json({
            success: true,
            data: todo,
            message: "Data fetched successfully by ID."
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            error: error.message,
            message: "Server error"
        });
    }
};
